-- ═══════════════════════════════════════════════════════════
--  Blue — استيراد الخدمات والمقالات
--  يُلصق في: Supabase → SQL Editor → Run
--  آمن للتشغيل أكثر من مرة
-- ═══════════════════════════════════════════════════════════

-- ─────────── الخدمات (9) ───────────
insert into services (phase_id, slug, title_ar, title_en, desc_ar, desc_en, sort, published)
select p.id, v.slug, v.t_ar, v.t_en, v.d_ar, v.d_en, v.sort, true
from (values
  -- ما قبل الإنتاج
  ('Preproduction','creative-ideas','الأفكار الإبداعية','Creative Ideas',
   'جلسة نفهم فيها هدفك وجمهورك، نخرج منها بموجز إبداعي مكتوب ومعتمد منك.',
   'A session to understand your goal and audience, ending with a written brief you approve.',1),
  ('Preproduction','scriptwriting','كتابة السيناريو','Scriptwriting',
   'قصص مكتوبة للجمهور السعودي، مع لوح تصوير يوضّح كل لقطة قبل التنفيذ.',
   'Stories written for the Saudi audience, with a storyboard for every shot.',2),
  ('Preproduction','campaign-planning','تخطيط الحملات','Campaign Planning',
   'استراتيجية ومراحل وأهداف قابلة للقياس، وتوزيع الميزانية على القنوات.',
   'Strategy, stages and measurable goals, with budget split across channels.',3),
  -- الإنتاج
  ('Production','film-production','إنتاج الأفلام','Film Production',
   'أفلام قصيرة ووثائقية ودراما، من أول يوم تصوير حتى النسخة النهائية.',
   'Short films, documentaries and drama, from day one to final cut.',4),
  ('Production','commercials','الإعلانات التجارية','Commercials',
   'إعلانات تلفزيونية ورقمية مبنية على فكرة تبيع، لا على مشاهد جميلة فقط.',
   'TV and digital ads built on an idea that sells, not just pretty shots.',5),
  ('Production','photography','التصوير الفوتوغرافي','Photography',
   'تصوير منتجات وفعاليات ومقرات شركات، بإضاءة وتجهيزات احترافية.',
   'Product, event and corporate photography with professional lighting.',6),
  -- ما بعد الإنتاج
  ('Post Production','motion-animation','الموشن جرافيك والأنيميشن','Motion & Animation',
   'تحريك ثنائي وثلاثي الأبعاد، وإنفوجرافيك متحرك، ومؤثرات CGI.',
   '2D and 3D animation, animated infographics and CGI.',7),
  ('Post Production','editing-vfx','المونتاج والمؤثرات البصرية','Editing & VFX',
   'مونتاج وتصحيح ألوان ومؤثرات بصرية وتصميم صوتي متكامل.',
   'Editing, colour grading, visual effects and full sound design.',8),
  ('Post Production','brand-identity','الهوية البصرية','Brand Identity',
   'بناء هوية تعكس شخصيتك في كل تفصيل، من الشعار إلى دليل الاستخدام.',
   'An identity that reflects who you are, from logo to usage guide.',9)
) as v(phase, slug, t_ar, t_en, d_ar, d_en, sort)
join service_phases p on p.name_en = v.phase
on conflict (slug) do nothing;


-- ─────────── المقالات (6) — مسوّدات غير منشورة ───────────
-- هذه عناوين مقترحة من النموذج الأولي، بلا نص فعلي بعد.
-- اكتب المحتوى من لوحة التحكم ثم فعّل «منشور».
insert into posts (slug, title_ar, title_en, excerpt_ar, excerpt_en,
                   tag_ar, tag_en, read_minutes, published, published_at)
values
 ('choosing-production-company',
  'كيف تختار شركة إنتاج فيديو لمشروعك؟',
  'How to choose a video production company',
  'خمسة معايير عملية تساعدك على تقييم أي شركة إنتاج قبل التوقيع، من الشوريل إلى طريقة إدارة الميزانية.',
  'Five practical criteria to evaluate any production house before you sign.',
  'نصائح الإنتاج','Production Tips',6,false,'2026-10-12'),

 ('video-vs-stills-social',
  'لماذا يتفوّق الفيديو على الصورة في حملات السوشيال؟',
  'Why video outperforms stills on social',
  'أرقام من حملات نفّذناها في السوق السعودي توضّح الفرق في التفاعل ومعدّل التحويل.',
  'Numbers from campaigns we ran in the Saudi market showing the engagement gap.',
  'التسويق بالفيديو','Video Marketing',4,false,'2026-09-28'),

 ('medical-drama-bts',
  'كواليس تصوير «دراما طبية»',
  'Behind the scenes of Medical Drama',
  'كيف صوّرنا مستشفى كاملاً في ثلاثة أيام، والدروس التي خرجنا بها في إدارة المواقع.',
  'How we shot a full hospital in three days and what we learned about location management.',
  'من الكواليس','Behind the Scenes',8,false,'2026-09-15'),

 ('motion-vs-filming',
  'متى تختار الموشن جرافيك بدل التصوير؟',
  'When to choose motion graphics over filming',
  'ثلاث حالات يكون فيها الأنيميشن أسرع وأرخص وأوضح من التصوير الحقيقي.',
  'Three cases where animation is faster, cheaper and clearer than live action.',
  'موشن وأنيميشن','Motion',5,false,'2026-09-02'),

 ('creative-brief-essentials',
  'ما الذي يجب أن يحتويه موجز المشروع الإبداعي؟',
  'What a creative brief must contain',
  'نموذج موجز جاهز يختصر أسابيع من المراجعات ويضمن أن يصل العمل لما تتخيّله.',
  'A ready brief template that saves weeks of revisions.',
  'نصائح الإنتاج','Production Tips',7,false,'2026-08-20'),

 ('aspect-ratios-2026',
  'مقاسات الفيديو لكل منصة في 2026',
  'Video aspect ratios for every platform in 2026',
  'جدول مرجعي سريع بالمقاسات والمدد المثالية لكل منصة.',
  'A quick reference table of ratios and ideal durations per platform.',
  'التسويق بالفيديو','Video Marketing',3,false,'2026-08-05')
on conflict (slug) do nothing;


-- ─────────── العملاء ───────────
insert into clients (name, sort)
select * from (values
  ('ASRARCO',1),('TASOOMA',2),('SE7A PLUS',3),('THAAD',4),
  ('HIKAYAT',5),('FAR7A',6),('NOR EL DONYA',7),('MBC',8)
) as v(name, sort)
where not exists (select 1 from clients);


-- ─────────── الإعدادات الأوّلية ───────────
insert into settings (key, value) values
 ('contact', '{"email":"contact@blue-network.sa","phone":"","whatsapp":"","address_ar":"الرياض، المملكة العربية السعودية","address_en":"Riyadh, Saudi Arabia"}'::jsonb),
 ('social',  '{}'::jsonb),
 ('home',    '{"hero_video":"https://vimeo.com/1135043632","headline_ar":"نصنع الصورة التي تُحكى","headline_en":"We craft the image that tells","intro_ar":"منذ عام 2014 ونحن نحوّل الأفكار إلى أعمال سمعية وبصرية. أكثر من 100 مشروع بين الأفلام والإعلانات والدراما والموشن جرافيك.","intro_en":"Since 2014 we have turned ideas into audiovisual work. Over 100 projects across film, commercials, drama and motion graphics."}'::jsonb),
 ('seo',     '{"title_ar":"Blue — إنتاج فيديو وإعلانات في الرياض","title_en":"Blue — Video Production in Riyadh","desc_ar":"شبكة إعلامية متكاملة في الرياض وإسطنبول. إنتاج أفلام وإعلانات ودراما وموشن جرافيك منذ 2014.","desc_en":"An integrated media network in Riyadh and Istanbul. Film, commercials, drama and motion graphics since 2014."}'::jsonb)
on conflict (key) do nothing;
