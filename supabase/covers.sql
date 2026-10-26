-- ═══════════════════════════════════════════════════════════
--  Blue — ربط أغلفة المدونة بالمقالات
--  يُلصق في: Supabase → SQL Editor → Run
-- ═══════════════════════════════════════════════════════════
update posts set cover_url = '/assets/blog/' || slug || '.svg'
where slug in (
  'choosing-production-company',
  'video-vs-stills-social',
  'medical-drama-bts',
  'motion-vs-filming',
  'creative-brief-essentials',
  'aspect-ratios-2026'
);

select slug, cover_url, published from posts order by published_at desc;
