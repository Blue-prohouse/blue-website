/* ═══════════════════════════════════════════════════════════
   Blue — لوحة التحكم
   ═══════════════════════════════════════════════════════════ */
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const sb = createClient(window.SB_URL, window.SB_KEY);
const $  = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ─────────── تنبيهات ─────────── */
function toast(msg, kind = 'ok') {
  const d = document.createElement('div');
  d.className = kind; d.textContent = msg;
  $('#toast').appendChild(d);
  setTimeout(() => { d.style.opacity = '0'; d.style.transition = 'opacity .3s';
    setTimeout(() => d.remove(), 300); }, 3200);
}

/* ─────────── أيقونات ─────────── */
const I = {
  home:'M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z',
  film:'M3 4h18v16H3zM7 4v16M17 4v16M3 10h18M3 14h18',
  tag :'M3 7l4-4h14v14l-4 4H3zM16 8h.01',
  grid:'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  pen :'M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z',
  user:'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
  mail:'M4 4h16v16H4zM4 7l8 6 8-6',
  cog :'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 008.6 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 8.6a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z',
  layer:'M12 2l9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5',
  edit:'M11 4H4v16h16v-7M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4z',
  trash:'M3 6h18M8 6V4h8v2M19 6v14H5V6M10 11v6M14 11v6',
  eye:'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z'
};
const ico = (d, cls = 'ic') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;

/* ═══════════════════════════════════════════════════════════
   تعريف الأقسام
   ═══════════════════════════════════════════════════════════ */
const SECTIONS = {
  dash: { label:'نظرة عامة', icon:I.home, custom:'dash' },

  projects: {
    label:'المشاريع', icon:I.film, table:'projects',
    desc:'الأعمال التي تظهر في صفحة «أعمالنا» والصفحة الرئيسية',
    order:[{col:'sort'},{col:'created_at',asc:false}],
    cols:[
      {h:'', render:r => r.cover_url
        ? `<img class="thumb" src="${esc(r.cover_url)}" loading="lazy">`
        : `<div class="nothumb">▣</div>`},
      {h:'المشروع', render:r =>
        `<div class="ttl">${esc(r.title_ar)}</div><div class="sub">${esc(r.title_en)}</div>`},
      {h:'التصنيف', render:r => esc(r._cat || '—')},
      {h:'السنة', render:r => r.year || '—'},
      {h:'الحالة', render:r =>
        (r.published ? '<span class="pill on">منشور</span>' : '<span class="pill off">مخفي</span>') +
        (r.featured ? ' <span class="pill star">مُبرز</span>' : '')}
    ],
    fields:[
      {n:'title', t:'text', i18n:true, label:'عنوان المشروع', req:true},
      {n:'slug',  t:'slug', label:'المعرّف في الرابط', from:'title_en',
       hint:'يظهر في رابط الصفحة. حروف إنجليزية صغيرة وشرطات فقط.', req:true},
      {g:[{n:'category_id', t:'ref', ref:'categories', label:'التصنيف'},
          {n:'year', t:'number', label:'السنة', ph:'2025'},
          {n:'client', t:'text', label:'العميل'}]},
      {n:'cover_url', t:'image', label:'صورة الغلاف',
       hint:'يُفضّل مقاس عريض 16:9 بعرض 1600 بكسل على الأقل.'},
      {n:'video_url', t:'text', label:'رابط الفيديو', dir:'ltr',
       ph:'https://vimeo.com/… أو https://youtube.com/…'},
      {n:'summary', t:'textarea', i18n:true, label:'وصف مختصر',
       hint:'سطر أو سطران يظهران في بطاقة المشروع.'},
      {n:'body', t:'textarea', i18n:true, label:'تفاصيل المشروع', rows:7},
      {n:'gallery', t:'gallery', label:'معرض الصور'},
      {g:[{n:'published', t:'bool', label:'منشور على الموقع', def:true},
          {n:'featured',  t:'bool', label:'إبراز في الصفحة الرئيسية'},
          {n:'sort', t:'number', label:'ترتيب العرض', def:0,
           hint:'الأصغر يظهر أولاً.'}]}
    ]
  },

  categories: {
    label:'التصنيفات', icon:I.tag, table:'categories',
    desc:'تصنيفات المشاريع المستخدمة في أزرار التصفية',
    order:[{col:'sort'}],
    cols:[
      {h:'التصنيف', render:r =>
        `<div class="ttl">${esc(r.name_ar)}</div><div class="sub">${esc(r.name_en)}</div>`},
      {h:'المفتاح', render:r => `<code style="color:var(--dim)">${esc(r.key)}</code>`},
      {h:'الترتيب', render:r => r.sort}
    ],
    fields:[
      {n:'name', t:'text', i18n:true, label:'اسم التصنيف', req:true},
      {n:'key',  t:'slug', label:'المفتاح', req:true, hint:'مثل: ads أو drama'},
      {n:'sort', t:'number', label:'الترتيب', def:0}
    ]
  },

  phases: {
    label:'مراحل الإنتاج', icon:I.layer, table:'service_phases',
    desc:'المراحل التي تُجمَّع تحتها الخدمات',
    order:[{col:'sort'}],
    cols:[
      {h:'المرحلة', render:r =>
        `<div class="ttl">${esc(r.name_ar)}</div><div class="sub">${esc(r.name_en)}</div>`},
      {h:'الوصف', render:r => `<div class="sub">${esc((r.note_ar||'').slice(0,70))}</div>`},
      {h:'الترتيب', render:r => r.sort}
    ],
    fields:[
      {n:'name', t:'text', i18n:true, label:'اسم المرحلة', req:true},
      {n:'note', t:'textarea', i18n:true, label:'وصف المرحلة'},
      {n:'sort', t:'number', label:'الترتيب', def:0}
    ]
  },

  services: {
    label:'الخدمات', icon:I.grid, table:'services',
    desc:'الخدمات المعروضة في صفحة «خدماتنا»',
    order:[{col:'sort'}],
    cols:[
      {h:'الخدمة', render:r =>
        `<div class="ttl">${esc(r.title_ar)}</div><div class="sub">${esc(r.title_en)}</div>`},
      {h:'المرحلة', render:r => esc(r._phase || '—')},
      {h:'الحالة', render:r =>
        r.published ? '<span class="pill on">منشور</span>' : '<span class="pill off">مخفي</span>'}
    ],
    fields:[
      {n:'title', t:'text', i18n:true, label:'اسم الخدمة', req:true},
      {n:'slug', t:'slug', from:'title_en', label:'المعرّف في الرابط', req:true},
      {n:'phase_id', t:'ref', ref:'service_phases', label:'المرحلة'},
      {n:'desc', t:'textarea', i18n:true, label:'وصف مختصر'},
      {n:'body', t:'textarea', i18n:true, label:'تفاصيل الخدمة', rows:7},
      {n:'cover_url', t:'image', label:'صورة الخدمة'},
      {g:[{n:'published', t:'bool', label:'منشور', def:true},
          {n:'sort', t:'number', label:'الترتيب', def:0}]}
    ]
  },

  posts: {
    label:'المدونة', icon:I.pen, table:'posts',
    desc:'المقالات والرؤى',
    order:[{col:'published_at',asc:false}],
    cols:[
      {h:'', render:r => r.cover_url
        ? `<img class="thumb" src="${esc(r.cover_url)}" loading="lazy">`
        : `<div class="nothumb">▣</div>`},
      {h:'المقال', render:r =>
        `<div class="ttl">${esc(r.title_ar)}</div><div class="sub">${esc(r.title_en)}</div>`},
      {h:'التاريخ', render:r => r.published_at
        ? new Date(r.published_at).toLocaleDateString('ar-EG',
            {year:'numeric',month:'short',day:'numeric'}) : '—'},
      {h:'الحالة', render:r =>
        r.published ? '<span class="pill on">منشور</span>' : '<span class="pill off">مسودة</span>'}
    ],
    fields:[
      {n:'title', t:'text', i18n:true, label:'عنوان المقال', req:true},
      {n:'slug', t:'slug', from:'title_en', label:'المعرّف في الرابط', req:true},
      {n:'cover_url', t:'image', label:'صورة المقال'},
      {n:'excerpt', t:'textarea', i18n:true, label:'مقتطف'},
      {n:'body', t:'textarea', i18n:true, label:'نص المقال', rows:12},
      {g:[{n:'tag', t:'text', i18n:true, label:'الوسم'},
          {n:'read_minutes', t:'number', label:'دقائق القراءة'}]},
      {g:[{n:'published', t:'bool', label:'منشور'},
          {n:'published_at', t:'date', label:'تاريخ النشر'}]}
    ]
  },

  clients: {
    label:'العملاء', icon:I.user, table:'clients',
    desc:'شعارات العملاء في الشريط المتحرك',
    order:[{col:'sort'}],
    cols:[
      {h:'', render:r => r.logo_url
        ? `<img class="thumb" style="object-fit:contain;background:#fff1" src="${esc(r.logo_url)}">`
        : `<div class="nothumb">▣</div>`},
      {h:'العميل', render:r => `<div class="ttl">${esc(r.name)}</div>`},
      {h:'الموقع', render:r => r.website
        ? `<a href="${esc(r.website)}" target="_blank" rel="noopener">${esc(r.website)}</a>` : '—'},
      {h:'الترتيب', render:r => r.sort}
    ],
    fields:[
      {n:'name', t:'text', label:'اسم العميل', req:true},
      {n:'logo_url', t:'image', label:'الشعار'},
      {n:'website', t:'text', label:'الموقع الإلكتروني', dir:'ltr', ph:'https://'},
      {n:'sort', t:'number', label:'الترتيب', def:0}
    ]
  },

  inquiries: {
    label:'الرسائل', icon:I.mail, table:'inquiries', readonly:true,
    desc:'الرسائل الواردة من نموذج «تواصل معنا»',
    order:[{col:'created_at',asc:false}],
    cols:[
      {h:'المُرسِل', render:r =>
        `<div class="ttl">${esc(r.name)}</div><div class="sub" dir="ltr">${esc(r.email||r.phone||'')}</div>`},
      {h:'الخدمة', render:r => esc(r.service || '—')},
      {h:'الرسالة', render:r => `<div class="sub">${esc((r.message||'').slice(0,80))}…</div>`},
      {h:'التاريخ', render:r => new Date(r.created_at).toLocaleDateString('ar-EG',
        {year:'numeric',month:'short',day:'numeric'})},
      {h:'الحالة', render:r => r.status === 'new'
        ? '<span class="pill new">جديدة</span>'
        : `<span class="pill off">${esc({read:'مقروءة',replied:'تم الرد',archived:'مؤرشفة'}[r.status]||r.status)}</span>`}
    ]
  },

  settings: { label:'الإعدادات', icon:I.cog, custom:'settings',
    desc:'بيانات التواصل والروابط التي تظهر في كل صفحات الموقع' }
};

/* ═══════════════════════════════════════════════════════════
   المصادقة
   ═══════════════════════════════════════════════════════════ */
let user = null;

async function boot() {
  const { data } = await sb.auth.getSession();
  if (data.session) { user = data.session.user; enterApp(); }
  else { $('#login').style.display = 'grid'; }
}

$('#loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = $('#loginBtn'), err = $('#loginErr');
  err.classList.remove('on');
  btn.disabled = true; btn.innerHTML = '<span class="spin"></span>';
  const { data, error } = await sb.auth.signInWithPassword({
    email: $('#email').value.trim(), password: $('#pass').value });
  btn.disabled = false; btn.textContent = 'دخول';
  if (error) {
    err.textContent = /invalid/i.test(error.message)
      ? 'البريد أو كلمة المرور غير صحيحة.' : error.message;
    err.classList.add('on'); return;
  }
  user = data.user; enterApp();
});

$('#logout').addEventListener('click', async () => {
  await sb.auth.signOut(); location.reload();
});

function enterApp() {
  $('#login').style.display = 'none';
  $('#app').classList.add('on');
  $('#who').textContent = user.email;
  buildNav();
  go(location.hash.slice(1) || 'dash');
}

/* ═══════════════════════════════════════════════════════════
   التنقّل
   ═══════════════════════════════════════════════════════════ */
let current = 'dash';
const counts = {};

function buildNav() {
  $('#nav').innerHTML = Object.entries(SECTIONS).map(([k, s]) =>
    `<button data-k="${k}">${ico(s.icon)}<span>${s.label}</span>
      <span class="count" id="c-${k}" style="display:none"></span></button>`).join('');
  $('#nav').querySelectorAll('button').forEach(b =>
    b.onclick = () => { go(b.dataset.k); $('#aside').classList.remove('open'); });
}

$('#menuBtn').onclick = () => $('#aside').classList.toggle('open');

function go(k) {
  if (!SECTIONS[k]) k = 'dash';
  current = k; location.hash = k;
  const s = SECTIONS[k];
  $('#nav').querySelectorAll('button').forEach(b =>
    b.classList.toggle('on', b.dataset.k === k));
  $('#pTitle').textContent = s.label;
  $('#pSub').textContent = s.desc || '';
  $('#pTools').innerHTML = (s.table && !s.readonly)
    ? `<button class="btn" id="addBtn">+ إضافة</button>` : '';
  if ($('#addBtn')) $('#addBtn').onclick = () => openForm(k, null);
  $('#view').innerHTML = '<div class="loading"><span class="spin"></span></div>';
  if (s.custom === 'dash')      renderDash();
  else if (s.custom === 'settings') renderSettings();
  else                          renderList(k);
}

/* ═══════════════════════════════════════════════════════════
   جلب البيانات
   ═══════════════════════════════════════════════════════════ */
const cache = {};
async function lookup(table) {
  if (cache[table]) return cache[table];
  const { data } = await sb.from(table).select('*').order('sort');
  cache[table] = data || [];
  return cache[table];
}

async function renderList(k) {
  const s = SECTIONS[k];
  let q = sb.from(s.table).select('*');
  (s.order || []).forEach(o => q = q.order(o.col, { ascending: o.asc !== false }));
  const { data, error } = await q;
  if (error) { $('#view').innerHTML = `<div class="empty">تعذّر الجلب: ${esc(error.message)}</div>`; return; }

  counts[k] = data.length;
  const c = $(`#c-${k}`);
  if (c) { c.textContent = data.length; c.style.display = data.length ? '' : 'none'; }

  // أسماء مرجعية
  if (k === 'projects') {
    const cats = await lookup('categories');
    data.forEach(r => r._cat = (cats.find(c => c.id === r.category_id) || {}).name_ar);
  }
  if (k === 'services') {
    const ph = await lookup('service_phases');
    data.forEach(r => r._phase = (ph.find(p => p.id === r.phase_id) || {}).name_ar);
  }

  if (!data.length) {
    $('#view').innerHTML =
      `<div class="tbl-wrap"><div class="empty"><div class="big">▦</div>
       لا توجد عناصر بعد.${s.readonly ? '' : ' اضغط «إضافة» للبدء.'}</div></div>`;
    return;
  }

  $('#view').innerHTML = `<div class="tbl-wrap"><table>
    <thead><tr>${s.cols.map(c => `<th>${c.h}</th>`).join('')}<th></th></tr></thead>
    <tbody>${data.map((r, i) => `<tr data-i="${i}">
      ${s.cols.map(c => `<td>${c.render(r)}</td>`).join('')}
      <td><div class="acts">
        ${s.readonly
          ? `<button class="icbtn" data-a="view" title="عرض">${ico(I.eye,'')}</button>`
          : `<button class="icbtn" data-a="edit" title="تعديل">${ico(I.edit,'')}</button>`}
        <button class="icbtn del" data-a="del" title="حذف">${ico(I.trash,'')}</button>
      </div></td></tr>`).join('')}</tbody></table></div>`;

  $('#view').querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
    const row = data[+b.closest('tr').dataset.i];
    if (b.dataset.a === 'del')  del(k, row);
    else if (b.dataset.a === 'view') viewRow(k, row);
    else openForm(k, row);
  });
}

async function del(k, row) {
  const name = row.title_ar || row.name_ar || row.name || 'هذا العنصر';
  if (!confirm(`حذف «${name}» نهائياً؟\nلا يمكن التراجع عن هذا الإجراء.`)) return;
  const { error } = await sb.from(SECTIONS[k].table).delete().eq('id', row.id);
  if (error) return toast('تعذّر الحذف: ' + error.message, 'bad');
  toast('تم الحذف'); delete cache[SECTIONS[k].table]; renderList(k);
}

/* ═══════════════════════════════════════════════════════════
   رفع الملفات
   ═══════════════════════════════════════════════════════════ */
async function upload(file) {
  const ext  = (file.name.split('.').pop() || 'jpg').toLowerCase();
  const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await sb.storage.from('media').upload(name, file,
    { cacheControl: '31536000', upsert: false });
  if (error) throw error;
  return sb.storage.from('media').getPublicUrl(name).data.publicUrl;
}

/* ═══════════════════════════════════════════════════════════
   النموذج
   ═══════════════════════════════════════════════════════════ */
let formState = {};

function flat(fields) {
  return fields.flatMap(f => f.g ? f.g : [f]);
}

function fieldHTML(f, v, lang) {
  const name = f.i18n ? `${f.n}_${lang}` : f.n;
  const val  = v[name];
  const dir  = f.dir || (f.i18n && lang === 'en' ? 'ltr' : (f.t === 'slug' ? 'ltr' : 'rtl'));
  const lbl  = `<label>${f.label}${f.req ? ' <span class="req">*</span>' : ''}</label>`;
  const hint = f.hint ? `<div class="hint">${f.hint}</div>` : '';

  switch (f.t) {
    case 'textarea':
      return `<div class="field">${lbl}<textarea class="inp" data-f="${name}" dir="${dir}"
        rows="${f.rows || 4}" placeholder="${f.ph || ''}">${esc(val)}</textarea>${hint}</div>`;
    case 'bool':
      return `<div class="field"><label class="chk"><input type="checkbox" data-f="${name}"
        ${val ? 'checked' : ''}><span>${f.label}</span></label>${hint}</div>`;
    case 'number':
      return `<div class="field">${lbl}<input class="inp" type="number" data-f="${name}"
        dir="ltr" value="${val ?? ''}" placeholder="${f.ph || ''}">${hint}</div>`;
    case 'date':
      return `<div class="field">${lbl}<input class="inp" type="date" data-f="${name}" dir="ltr"
        value="${val ? new Date(val).toISOString().slice(0,10) : ''}">${hint}</div>`;
    case 'ref':
      return `<div class="field">${lbl}<select class="inp" data-f="${name}">
        <option value="">— بدون —</option>
        ${(cache[f.ref] || []).map(o =>
          `<option value="${o.id}" ${o.id === val ? 'selected' : ''}>${esc(o.name_ar)}</option>`).join('')}
        </select>${hint}</div>`;
    case 'image':
      return `<div class="field">${lbl}<div data-img="${name}">${imgBox(name, val)}</div>${hint}</div>`;
    case 'gallery':
      return `<div class="field">${lbl}<div data-gal="${name}">${galBox(name, val || [])}</div>${hint}</div>`;
    default:
      return `<div class="field">${lbl}<input class="inp" data-f="${name}" dir="${dir}"
        value="${esc(val)}" placeholder="${f.ph || ''}">${hint}</div>`;
  }
}

const imgBox = (name, url) => url
  ? `<div class="prev"><img src="${esc(url)}"><button type="button" class="rm" data-rm="${name}">&times;</button></div>`
  : `<div class="drop" data-drop="${name}"><div class="ic">⬆</div>
     <div class="t">اسحب الصورة هنا أو اضغط للاختيار</div>
     <div class="upbar"><i></i></div></div>`;

const galBox = (name, arr) =>
  `<div class="drop" data-drop="${name}" data-multi="1"><div class="ic">⬆</div>
    <div class="t">اسحب الصور هنا أو اضغط للاختيار (يمكن اختيار عدة صور)</div>
    <div class="upbar"><i></i></div></div>
   <div class="gal">${arr.map((u, i) =>
    `<div class="prev"><img src="${esc(u)}">
     <button type="button" class="rm" data-galrm="${name}" data-i="${i}">&times;</button></div>`).join('')}</div>`;

async function openForm(k, row) {
  const s = SECTIONS[k];
  // تحميل القوائم المرجعية
  for (const f of flat(s.fields)) if (f.t === 'ref') await lookup(f.ref);

  formState = { ...(row || {}) };
  if (!row) flat(s.fields).forEach(f => {
    if (f.def !== undefined) formState[f.n] = f.def;
  });

  const hasI18n = flat(s.fields).some(f => f.i18n);
  const body = hasI18n
    ? `<div class="lang-tabs"><button data-l="ar" class="on">عربي</button>
        <button data-l="en">English</button></div>
       <div class="pane on" data-p="ar">${s.fields.map(f => grp(f, formState, 'ar')).join('')}</div>
       <div class="pane" data-p="en">${s.fields.map(f => grp(f, formState, 'en')).join('')}</div>`
    : s.fields.map(f => grp(f, formState, 'ar')).join('');

  $('#mTitle').textContent = (row ? 'تعديل: ' : 'إضافة ') +
    (row ? (row.title_ar || row.name_ar || row.name || '') : s.label.replace(/^ال/, ''));
  $('#mBody').innerHTML = body;
  $('#modal').classList.add('on');
  wire(k);
  $('#mSave').onclick = () => save(k, row);
}

/* يرسم مجموعة أو حقلاً مفرداً، ويُخفي الحقول غير المتعلقة باللغة في لسان english */
function grp(f, v, lang) {
  if (f.g) {
    const inner = f.g.map(x => fieldHTML(x, v, lang)).join('');
    return lang === 'en' && !f.g.some(x => x.i18n) ? '' : `<div class="row c${f.g.length}">${inner}</div>`;
  }
  if (lang === 'en' && !f.i18n) return '';
  return fieldHTML(f, v, lang);
}

function wire(k) {
  const M = $('#mBody');

  M.querySelectorAll('.lang-tabs button').forEach(b => b.onclick = () => {
    M.querySelectorAll('.lang-tabs button').forEach(x => x.classList.toggle('on', x === b));
    M.querySelectorAll('.pane').forEach(p => p.classList.toggle('on', p.dataset.p === b.dataset.l));
  });

  M.querySelectorAll('[data-f]').forEach(el => {
    const h = () => {
      formState[el.dataset.f] = el.type === 'checkbox' ? el.checked
        : el.type === 'number' ? (el.value === '' ? null : +el.value)
        : el.value;
    };
    el.addEventListener('input', h); el.addEventListener('change', h);
  });

  // توليد المعرّف تلقائياً
  const s = SECTIONS[k];
  flat(s.fields).filter(f => f.t === 'slug' && f.from).forEach(f => {
    const src = M.querySelector(`[data-f="${f.from}"]`);
    const dst = M.querySelector(`[data-f="${f.n}"]`);
    if (src && dst) src.addEventListener('input', () => {
      if (dst.dataset.touched) return;
      dst.value = slugify(src.value); formState[f.n] = dst.value;
    });
    if (dst) dst.addEventListener('input', () => dst.dataset.touched = '1');
  });

  // الرفع
  M.querySelectorAll('[data-drop]').forEach(d => {
    const name  = d.dataset.drop;
    const multi = !!d.dataset.multi;
    const pick = () => {
      const i = document.createElement('input');
      i.type = 'file'; i.accept = 'image/*'; i.multiple = multi;
      i.onchange = () => handleFiles(name, [...i.files], multi, d, k);
      i.click();
    };
    d.onclick = pick;
    d.ondragover = e => { e.preventDefault(); d.classList.add('over'); };
    d.ondragleave = () => d.classList.remove('over');
    d.ondrop = e => { e.preventDefault(); d.classList.remove('over');
      handleFiles(name, [...e.dataTransfer.files], multi, d, k); };
  });

  M.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => {
    const n = b.dataset.rm; formState[n] = null;
    b.closest(`[data-img="${n}"]`).innerHTML = imgBox(n, null); wire(k);
  });

  M.querySelectorAll('[data-galrm]').forEach(b => b.onclick = () => {
    const n = b.dataset.galrm;
    formState[n] = (formState[n] || []).filter((_, i) => i !== +b.dataset.i);
    b.closest(`[data-gal="${n}"]`).innerHTML = galBox(n, formState[n]); wire(k);
  });
}

async function handleFiles(name, files, multi, drop, k) {
  files = files.filter(f => f.type.startsWith('image/'));
  if (!files.length) return;
  const bar = drop.querySelector('.upbar'), fill = bar.querySelector('i');
  bar.classList.add('on');
  try {
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      urls.push(await upload(files[i]));
      fill.style.width = ((i + 1) / files.length * 100) + '%';
    }
    if (multi) {
      formState[name] = [...(formState[name] || []), ...urls];
      drop.closest(`[data-gal="${name}"]`).innerHTML = galBox(name, formState[name]);
    } else {
      formState[name] = urls[0];
      drop.closest(`[data-img="${name}"]`).innerHTML = imgBox(name, urls[0]);
    }
    wire(k); toast(`تم رفع ${urls.length} صورة`);
  } catch (e) {
    toast('تعذّر الرفع: ' + e.message, 'bad');
  } finally { bar.classList.remove('on'); fill.style.width = '0'; }
}

const slugify = s => String(s || '').toLowerCase().trim()
  .replace(/[^a-z0-9؀-ۿ\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').slice(0, 60);

async function save(k, row) {
  const s = SECTIONS[k], btn = $('#mSave');
  const payload = {};
  flat(s.fields).forEach(f => {
    const keys = f.i18n ? [`${f.n}_ar`, `${f.n}_en`] : [f.n];
    keys.forEach(key => {
      let v = formState[key];
      if (f.t === 'bool')   v = !!v;
      if (f.t === 'number' && v === '') v = null;
      if (f.t === 'ref' && !v) v = null;
      if (f.t === 'gallery') v = v || [];
      payload[key] = v === undefined ? null : v;
    });
  });

  // تحقّق
  for (const f of flat(s.fields)) {
    const keys = f.i18n ? [`${f.n}_ar`, `${f.n}_en`] : [f.n];
    for (const key of keys)
      if (f.req && !String(payload[key] ?? '').trim())
        return toast(`الحقل «${f.label}» مطلوب.`, 'bad');
  }

  btn.disabled = true; btn.innerHTML = '<span class="spin"></span>';
  const { error } = row
    ? await sb.from(s.table).update(payload).eq('id', row.id)
    : await sb.from(s.table).insert(payload);
  btn.disabled = false; btn.textContent = 'حفظ';

  if (error) {
    return toast(/duplicate|unique/i.test(error.message)
      ? 'المعرّف مستخدم من قبل. غيّره وحاول مرة أخرى.'
      : 'تعذّر الحفظ: ' + error.message, 'bad');
  }
  toast(row ? 'تم حفظ التعديلات' : 'تمت الإضافة');
  delete cache[s.table];
  closeModal(); renderList(k);
}

function closeModal() { $('#modal').classList.remove('on'); $('#mBody').innerHTML = ''; }
$('#mX').onclick = closeModal;
$('#mCancel').onclick = closeModal;
$('#modal').onclick = e => { if (e.target.id === 'modal') closeModal(); };

/* ═══════════════════════════════════════════════════════════
   عرض رسالة واردة
   ═══════════════════════════════════════════════════════════ */
async function viewRow(k, r) {
  $('#mTitle').textContent = 'رسالة من ' + r.name;
  const line = (l, v) => v
    ? `<div class="field"><label>${l}</label><div>${esc(v)}</div></div>` : '';
  $('#mBody').innerHTML = `
    ${line('الاسم', r.name)}
    <div class="row c2">
      ${line('البريد', r.email)}${line('الهاتف', r.phone)}
    </div>
    <div class="row c2">
      ${line('الشركة', r.company)}${line('الخدمة', r.service)}
    </div>
    ${line('الميزانية', r.budget)}
    <div class="field"><label>الرسالة</label>
      <div style="background:var(--card2);padding:14px;border-radius:10px;white-space:pre-wrap">${esc(r.message)}</div>
    </div>
    <div class="field"><label>الحالة</label>
      <select class="inp" id="stat">
        ${[['new','جديدة'],['read','مقروءة'],['replied','تم الرد'],['archived','مؤرشفة']]
          .map(([v, t]) => `<option value="${v}" ${r.status === v ? 'selected' : ''}>${t}</option>`).join('')}
      </select></div>
    <div class="hint">وردت في ${new Date(r.created_at).toLocaleString('ar-EG')}</div>`;
  $('#modal').classList.add('on');
  $('#mSave').textContent = 'حفظ الحالة';
  $('#mSave').onclick = async () => {
    const { error } = await sb.from('inquiries')
      .update({ status: $('#stat').value }).eq('id', r.id);
    if (error) return toast('تعذّر الحفظ', 'bad');
    toast('تم التحديث'); closeModal(); renderList('inquiries');
  };
}

/* ═══════════════════════════════════════════════════════════
   نظرة عامة
   ═══════════════════════════════════════════════════════════ */
async function renderDash() {
  const q = t => sb.from(t).select('id', { count: 'exact', head: true });
  const [pr, po, sv, cl, inq] = await Promise.all([
    q('projects'), q('posts'), q('services'), q('clients'),
    sb.from('inquiries').select('id', { count: 'exact', head: true }).eq('status', 'new')
  ]);
  const { data: recent } = await sb.from('inquiries')
    .select('*').order('created_at', { ascending: false }).limit(5);

  const stat = (n, l) => `<div class="stat"><div class="n">${n ?? 0}</div><div class="l">${l}</div></div>`;
  $('#view').innerHTML = `
    <div class="stats">
      ${stat(pr.count, 'مشروع')}${stat(sv.count, 'خدمة')}
      ${stat(po.count, 'مقال')}${stat(cl.count, 'عميل')}
      ${stat(inq.count, 'رسالة جديدة')}
    </div>
    <div class="phead" style="margin-bottom:14px"><h2 style="font-size:16px">آخر الرسائل</h2></div>
    <div class="tbl-wrap">${(recent && recent.length) ? `<table>
      <thead><tr><th>المُرسِل</th><th>الخدمة</th><th>التاريخ</th><th>الحالة</th></tr></thead>
      <tbody>${recent.map(r => `<tr>
        <td><div class="ttl">${esc(r.name)}</div><div class="sub" dir="ltr">${esc(r.email || '')}</div></td>
        <td>${esc(r.service || '—')}</td>
        <td>${new Date(r.created_at).toLocaleDateString('ar-EG')}</td>
        <td>${r.status === 'new' ? '<span class="pill new">جديدة</span>'
                                 : '<span class="pill off">—</span>'}</td>
      </tr>`).join('')}</tbody></table>`
      : '<div class="empty">لا توجد رسائل بعد.</div>'}</div>`;
}

/* ═══════════════════════════════════════════════════════════
   الإعدادات
   ═══════════════════════════════════════════════════════════ */
const SETTING_FIELDS = [
  { key:'contact', label:'بيانات التواصل', fields:[
    { n:'email',    label:'البريد الإلكتروني', dir:'ltr' },
    { n:'phone',    label:'رقم الهاتف', dir:'ltr' },
    { n:'whatsapp', label:'واتساب', dir:'ltr', hint:'بصيغة دولية بدون + مثل 9665xxxxxxxx' },
    { n:'address_ar', label:'العنوان (عربي)' },
    { n:'address_en', label:'العنوان (إنجليزي)', dir:'ltr' }
  ]},
  { key:'social', label:'روابط التواصل الاجتماعي', fields:[
    { n:'instagram', label:'إنستغرام', dir:'ltr' },
    { n:'x',         label:'إكس (تويتر)', dir:'ltr' },
    { n:'linkedin',  label:'لينكدإن', dir:'ltr' },
    { n:'youtube',   label:'يوتيوب', dir:'ltr' },
    { n:'vimeo',     label:'فيميو', dir:'ltr' },
    { n:'tiktok',    label:'تيك توك', dir:'ltr' }
  ]},
  { key:'home', label:'الصفحة الرئيسية', fields:[
    { n:'hero_video', label:'رابط فيديو الواجهة', dir:'ltr',
      hint:'رابط Vimeo أو YouTube الذي يعمل في خلفية أعلى الصفحة.' },
    { n:'headline_ar', label:'العنوان الرئيسي (عربي)' },
    { n:'headline_en', label:'العنوان الرئيسي (إنجليزي)', dir:'ltr' },
    { n:'intro_ar', label:'النص التعريفي (عربي)', t:'textarea' },
    { n:'intro_en', label:'النص التعريفي (إنجليزي)', t:'textarea', dir:'ltr' }
  ]},
  { key:'seo', label:'تحسين محركات البحث', fields:[
    { n:'title_ar', label:'عنوان الموقع (عربي)' },
    { n:'title_en', label:'عنوان الموقع (إنجليزي)', dir:'ltr' },
    { n:'desc_ar',  label:'وصف الموقع (عربي)', t:'textarea' },
    { n:'desc_en',  label:'وصف الموقع (إنجليزي)', t:'textarea', dir:'ltr' },
    { n:'og_image', label:'صورة المشاركة', t:'image',
      hint:'تظهر عند مشاركة رابط الموقع. المقاس المفضّل 1200×630.' }
  ]}
];

let settingsData = {};

async function renderSettings() {
  const { data } = await sb.from('settings').select('*');
  settingsData = {};
  (data || []).forEach(r => settingsData[r.key] = r.value || {});

  $('#view').innerHTML = SETTING_FIELDS.map(sec => `
    <div class="tbl-wrap" style="margin-bottom:18px;padding:22px">
      <h3 style="font-size:15px;font-weight:600;margin-bottom:18px">${sec.label}</h3>
      ${sec.fields.map(f => {
        const v = (settingsData[sec.key] || {})[f.n] || '';
        const id = `${sec.key}.${f.n}`;
        const hint = f.hint ? `<div class="hint">${f.hint}</div>` : '';
        if (f.t === 'image')
          return `<div class="field"><label>${f.label}</label>
            <div data-img="${id}">${imgBox(id, v)}</div>${hint}</div>`;
        if (f.t === 'textarea')
          return `<div class="field"><label>${f.label}</label>
            <textarea class="inp" data-s="${id}" dir="${f.dir || 'rtl'}">${esc(v)}</textarea>${hint}</div>`;
        return `<div class="field"><label>${f.label}</label>
          <input class="inp" data-s="${id}" dir="${f.dir || 'rtl'}" value="${esc(v)}">${hint}</div>`;
      }).join('')}
    </div>`).join('') +
    `<button class="btn" id="saveSet">حفظ الإعدادات</button>`;

  // ربط حقول الصور داخل الإعدادات
  formState = {};
  SETTING_FIELDS.forEach(sec => sec.fields.filter(f => f.t === 'image').forEach(f => {
    formState[`${sec.key}.${f.n}`] = (settingsData[sec.key] || {})[f.n] || null;
  }));
  wireSettingsImages();

  $('#saveSet').onclick = async () => {
    const out = {};
    SETTING_FIELDS.forEach(sec => out[sec.key] = { ...(settingsData[sec.key] || {}) });
    $('#view').querySelectorAll('[data-s]').forEach(el => {
      const [k, n] = el.dataset.s.split('.');
      out[k][n] = el.value;
    });
    Object.keys(formState).forEach(id => {
      const [k, n] = id.split('.');
      if (out[k]) out[k][n] = formState[id];
    });
    const rows = Object.entries(out).map(([key, value]) => ({ key, value }));
    const { error } = await sb.from('settings').upsert(rows, { onConflict: 'key' });
    if (error) return toast('تعذّر الحفظ: ' + error.message, 'bad');
    toast('تم حفظ الإعدادات');
  };
}

function wireSettingsImages() {
  const V = $('#view');
  V.querySelectorAll('[data-drop]').forEach(d => {
    const name = d.dataset.drop;
    const pick = () => {
      const i = document.createElement('input');
      i.type = 'file'; i.accept = 'image/*';
      i.onchange = async () => {
        const bar = d.querySelector('.upbar'); bar.classList.add('on');
        try {
          const url = await upload(i.files[0]);
          formState[name] = url;
          d.closest(`[data-img="${name}"]`).innerHTML = imgBox(name, url);
          wireSettingsImages(); toast('تم رفع الصورة');
        } catch (e) { toast('تعذّر الرفع: ' + e.message, 'bad'); }
        finally { bar.classList.remove('on'); }
      };
      i.click();
    };
    d.onclick = pick;
    d.ondragover = e => { e.preventDefault(); d.classList.add('over'); };
    d.ondragleave = () => d.classList.remove('over');
    d.ondrop = async e => {
      e.preventDefault(); d.classList.remove('over');
      const f = [...e.dataTransfer.files].find(x => x.type.startsWith('image/'));
      if (!f) return;
      try { const url = await upload(f); formState[name] = url;
        d.closest(`[data-img="${name}"]`).innerHTML = imgBox(name, url);
        wireSettingsImages(); toast('تم رفع الصورة');
      } catch (er) { toast('تعذّر الرفع: ' + er.message, 'bad'); }
    };
  });
  V.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => {
    const n = b.dataset.rm; formState[n] = null;
    b.closest(`[data-img="${n}"]`).innerHTML = imgBox(n, null); wireSettingsImages();
  });
}

/* ─────────── تشغيل ─────────── */
window.addEventListener('hashchange', () => {
  const k = location.hash.slice(1);
  if (user && k && k !== current) go(k);
});
boot();
