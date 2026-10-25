-- ═══════════════════════════════════════════════════════════
--  Blue — مخطط قاعدة البيانات (Supabase / PostgreSQL)
--  يُلصق كاملاً في: Supabase Dashboard → SQL Editor → Run
-- ═══════════════════════════════════════════════════════════

-- ─────────── 1. التصنيفات ───────────
create table if not exists categories (
  id         uuid primary key default gen_random_uuid(),
  key        text unique not null,
  name_ar    text not null,
  name_en    text not null,
  sort       int  not null default 0,
  created_at timestamptz not null default now()
);

-- ─────────── 2. المشاريع ───────────
create table if not exists projects (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title_ar    text not null,
  title_en    text not null,
  category_id uuid references categories(id) on delete set null,
  year        int,
  client      text,
  cover_url   text,
  video_url   text,
  summary_ar  text,
  summary_en  text,
  body_ar     text,
  body_en     text,
  gallery     jsonb not null default '[]'::jsonb,
  credits     jsonb not null default '[]'::jsonb,
  featured    boolean not null default false,
  published   boolean not null default true,
  sort        int  not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists projects_cat_idx  on projects(category_id);
create index if not exists projects_sort_idx on projects(sort, created_at desc);

-- ─────────── 3. مراحل الإنتاج ───────────
create table if not exists service_phases (
  id      uuid primary key default gen_random_uuid(),
  name_ar text not null,
  name_en text not null,
  note_ar text,
  note_en text,
  sort    int not null default 0
);

-- ─────────── 4. الخدمات ───────────
create table if not exists services (
  id        uuid primary key default gen_random_uuid(),
  phase_id  uuid references service_phases(id) on delete cascade,
  slug      text unique not null,
  title_ar  text not null,
  title_en  text not null,
  desc_ar   text,
  desc_en   text,
  body_ar   text,
  body_en   text,
  cover_url text,
  published boolean not null default true,
  sort      int not null default 0
);

-- ─────────── 5. المدونة ───────────
create table if not exists posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title_ar     text not null,
  title_en     text not null,
  excerpt_ar   text,
  excerpt_en   text,
  body_ar      text,
  body_en      text,
  cover_url    text,
  tag_ar       text,
  tag_en       text,
  read_minutes int,
  published    boolean not null default false,
  published_at timestamptz default now(),
  created_at   timestamptz not null default now()
);
create index if not exists posts_pub_idx on posts(published, published_at desc);

-- ─────────── 6. العملاء ───────────
create table if not exists clients (
  id       uuid primary key default gen_random_uuid(),
  name     text not null,
  logo_url text,
  website  text,
  sort     int not null default 0
);

-- ─────────── 7. رسائل التواصل ───────────
create table if not exists inquiries (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text,
  phone      text,
  company    text,
  service    text,
  budget     text,
  message    text,
  status     text not null default 'new',
  created_at timestamptz not null default now()
);
create index if not exists inquiries_new_idx on inquiries(status, created_at desc);

-- ─────────── 8. إعدادات الموقع ───────────
create table if not exists settings (
  key        text primary key,
  value      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- ═══════════════════════════════════════════════════════════
--  تحديث updated_at تلقائياً
-- ═══════════════════════════════════════════════════════════
create or replace function touch_updated_at() returns trigger
language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

drop trigger if exists projects_touch on projects;
create trigger projects_touch before update on projects
  for each row execute function touch_updated_at();

drop trigger if exists settings_touch on settings;
create trigger settings_touch before update on settings
  for each row execute function touch_updated_at();

-- ═══════════════════════════════════════════════════════════
--  الصلاحيات (RLS)
-- ═══════════════════════════════════════════════════════════
alter table categories     enable row level security;
alter table projects       enable row level security;
alter table service_phases enable row level security;
alter table services       enable row level security;
alter table posts          enable row level security;
alter table clients        enable row level security;
alter table inquiries      enable row level security;
alter table settings       enable row level security;

drop policy if exists p_read on categories;
create policy p_read on categories for select using (true);

drop policy if exists p_read on projects;
create policy p_read on projects for select using (published = true);

drop policy if exists p_read on service_phases;
create policy p_read on service_phases for select using (true);

drop policy if exists p_read on services;
create policy p_read on services for select using (published = true);

drop policy if exists p_read on posts;
create policy p_read on posts for select using (published = true);

drop policy if exists p_read on clients;
create policy p_read on clients for select using (true);

drop policy if exists p_read on settings;
create policy p_read on settings for select using (true);

drop policy if exists p_insert on inquiries;
create policy p_insert on inquiries for insert with check (true);

do $$
declare t text;
begin
  foreach t in array array['categories','projects','service_phases','services',
                           'posts','clients','inquiries','settings']
  loop
    execute format('drop policy if exists p_admin on %I', t);
    execute format(
      'create policy p_admin on %I for all to authenticated using (true) with check (true)', t);
  end loop;
end $$;

-- ═══════════════════════════════════════════════════════════
--  مخزن الملفات
-- ═══════════════════════════════════════════════════════════
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists media_read   on storage.objects;
create policy media_read on storage.objects
  for select using (bucket_id = 'media');

drop policy if exists media_write  on storage.objects;
create policy media_write on storage.objects
  for insert to authenticated with check (bucket_id = 'media');

drop policy if exists media_update on storage.objects;
create policy media_update on storage.objects
  for update to authenticated using (bucket_id = 'media');

drop policy if exists media_delete on storage.objects;
create policy media_delete on storage.objects
  for delete to authenticated using (bucket_id = 'media');

-- ═══════════════════════════════════════════════════════════
--  بيانات أوّلية
-- ═══════════════════════════════════════════════════════════
insert into categories (key, name_ar, name_en, sort) values
  ('ads',   'إعلانات',      'Commercials', 1),
  ('drama', 'دراما',        'Drama',       2),
  ('gfx',   'جرافيك',       'Graphics',    3),
  ('clip',  'كليبات',       'Clips',       4),
  ('prog',  'برامج',        'Programs',    5),
  ('film',  'أفلام قصيرة',  'Short Films', 6)
on conflict (key) do nothing;

insert into service_phases (name_ar, name_en, note_ar, note_en, sort)
select * from (values
  ('ما قبل الإنتاج','Preproduction',
   'هنا تُبنى الفكرة ويتحدّد الجدول والميزانية قبل أن تدور الكاميرا.',
   'Where the idea is built and the schedule and budget are set before the camera rolls.',1),
  ('الإنتاج','Production',
   'التصوير بفريق وتجهيزات كاملة، في الاستوديو أو في المواقع الخارجية.',
   'Shooting with a full crew and equipment, in studio or on location.',2),
  ('ما بعد الإنتاج','Post Production',
   'المونتاج والمؤثرات والصوت والهوية، حتى التسليم بكل المقاسات.',
   'Editing, effects, sound and identity, through to delivery in every ratio.',3)
) as v(a,b,c,d,e)
where not exists (select 1 from service_phases);
