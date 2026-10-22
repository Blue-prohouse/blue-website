/* ═══════════════════════════════════════════════
   Blue — سكربت مشترك لكل الصفحات
   العلامة تُكتب «Blue» دائماً. الاسم الرسمي للبيانات
   المنظّمة فقط: Blue Network (blue-network.sa)
   الأرقام لاتينية في اللغتين.
   ═══════════════════════════════════════════════ */

const BRAND = {
  name:'Blue',
  legal:'Blue Network',
  domain:'blue-network.sa',
  email:'contact@blue-network.sa',        // ← يحتاج تأكيدك
  taglineAr:'شبكة إعلامية متكاملة',
  taglineEn:'An integrated media network'
};

const WP = 'https://blue-network.sa/wp-content/uploads/';

const PROJECTS = [
 {slug:'asrarco',   ar:'إعلان أسراركو', en:'Asrarco Commercial', k:'ads',   car:'إعلانات', cen:'Commercial',  y:'2025', img:WP+'2025/05/Asrarco_Home.jpg'},
 {slug:'medical',   ar:'دراما طبية',    en:'Medical Drama',      k:'drama', car:'دراما',   cen:'Drama',       y:'2025', img:WP+'2025/05/Medical_Drama.jpg'},
 {slug:'trump',     ar:'عقل ترامب',     en:"Trump's Brain",      k:'gfx',   car:'جرافيك',  cen:'Graphics',    y:'2025', img:WP+'2025/04/Trump-copy-1024x782.jpg'},
 {slug:'shokran',   ar:'فيلم شكراً',    en:'Shokran — Short Film',k:'drama',car:'فيلم قصير',cen:'Short Film', y:'2022', img:WP+'2022/09/SHOKRAN_MOVIE-1024x683.png'},
 {slug:'education', ar:'حق التعليم',    en:'Right of Education', k:'ads',   car:'إعلانات', cen:'Commercial',  y:'2022', img:WP+'2022/09/ID_PROMO-1-1024x683.png'},
 {slug:'mesh',      ar:'مش بالشكل',     en:'Mesh Bel Shakl',     k:'clip',  car:'كليب',    cen:'Music Clip',  y:'2022', img:WP+'2022/09/MESH_BLSHAKL-1-1024x683.png'},
 {slug:'se7a',      ar:'صحة بلس',       en:'Se7a Plus',          k:'prog',  car:'برامج',   cen:'Programs',    y:'2022', img:WP+'2022/09/04_Se7a_PLUS-1-1024x683.png'},
 {slug:'far7a',     ar:'قصة فرحة',      en:'Far7a Story',        k:'gfx',   car:'جرافيك',  cen:'Graphics',    y:'2022', img:WP+'2022/10/SHOWREEL-COVER-1024x683.png'}
];

const CATS = [
 {k:'all', ar:'الكل', en:'All'}, {k:'ads', ar:'إعلانات', en:'Commercials'},
 {k:'drama', ar:'دراما', en:'Drama'}, {k:'gfx', ar:'جرافيك', en:'Graphics'},
 {k:'clip', ar:'كليبات', en:'Clips'}, {k:'prog', ar:'برامج', en:'Programs'}
];

/* الخدمات موزّعة على مراحل الإنتاج — بدون ترقيم */
const PHASES = [
 {ar:'ما قبل الإنتاج', en:'Preproduction',
  note_ar:'هنا تُبنى الفكرة ويتحدّد الجدول والميزانية قبل أن تدور الكاميرا.',
  note_en:'Where the idea is built and the schedule and budget are set before the camera rolls.',
  items:[
   {ar:'الأفكار الإبداعية', en:'Creative Ideas',
    dar:'جلسة نفهم فيها هدفك وجمهورك، نخرج منها بموجز إبداعي مكتوب ومعتمد منك.',
    den:'A session to understand your goal and audience, ending with a written brief you approve.'},
   {ar:'كتابة السيناريو', en:'Scriptwriting',
    dar:'قصص مكتوبة للجمهور السعودي، مع لوح تصوير يوضّح كل لقطة قبل التنفيذ.',
    den:'Stories written for the Saudi audience, with a storyboard for every shot.'},
   {ar:'تخطيط الحملات', en:'Campaign Planning',
    dar:'استراتيجية ومراحل وأهداف قابلة للقياس، وتوزيع الميزانية على القنوات.',
    den:'Strategy, stages and measurable goals, with budget split across channels.'}
  ]},
 {ar:'الإنتاج', en:'Production',
  note_ar:'التصوير بفريق وتجهيزات كاملة، في الاستوديو أو في المواقع الخارجية.',
  note_en:'Shooting with a full crew and equipment, in studio or on location.',
  items:[
   {ar:'إنتاج الأفلام', en:'Film Production',
    dar:'أفلام قصيرة ووثائقية ودراما، من أول يوم تصوير حتى النسخة النهائية.',
    den:'Short films, documentaries and drama, from day one to final cut.'},
   {ar:'الإعلانات التجارية', en:'Commercials',
    dar:'إعلانات تلفزيونية ورقمية مبنية على فكرة تبيع، لا على مشاهد جميلة فقط.',
    den:'TV and digital ads built on an idea that sells, not just pretty shots.'},
   {ar:'التصوير الفوتوغرافي', en:'Photography',
    dar:'تصوير منتجات وفعاليات ومقرات شركات، بإضاءة وتجهيزات احترافية.',
    den:'Product, event and corporate photography with professional lighting.'}
  ]},
 {ar:'ما بعد الإنتاج', en:'Post Production',
  note_ar:'المونتاج والمؤثرات والصوت والهوية، حتى التسليم بكل المقاسات.',
  note_en:'Editing, effects, sound and identity, through to delivery in every ratio.',
  items:[
   {ar:'الموشن جرافيك والأنيميشن', en:'Motion & Animation',
    dar:'تحريك ثنائي وثلاثي الأبعاد، وإنفوجرافيك متحرك، ومؤثرات CGI.',
    den:'2D and 3D animation, animated infographics and CGI.'},
   {ar:'المونتاج والمؤثرات البصرية', en:'Editing & VFX',
    dar:'مونتاج وتصحيح ألوان ومؤثرات بصرية وتصميم صوتي متكامل.',
    den:'Editing, colour grading, visual effects and full sound design.'},
   {ar:'الهوية البصرية', en:'Brand Identity',
    dar:'بناء هوية تعكس شخصيتك في كل تفصيل، من الشعار إلى دليل الاستخدام.',
    den:'An identity that reflects who you are, from logo to usage guide.'}
  ]}
];
/* قائمة مسطّحة تُستخدم في الصفحة الرئيسية */
const SERVICES = PHASES.flatMap(p=>p.items);

/* ── الشريط: مجالات العمل بشفافيات متفاوتة ── */
const FIELDS_AR = ['الإنتاج','الأفلام القصيرة','الجرافيك','الإعلانات التجارية','الدراما',
                   'الموشن جرافيك','المؤثرات البصرية','الهوية البصرية','التصوير','الوثائقيات'];
const FIELDS_EN = ['Production','Short Films','Graphics','Commercials','Drama',
                   'Motion Graphics','VFX','Branding','Photography','Documentaries'];
/* نمط غير منتظم حتى لا تلاحظ العين تكراراً */
const OPACITY  = [1,.5,.75,1,.5,1,.75,.5,1,.75];

const CLIENTS = ['ASRARCO','TASOOMA','SE7A PLUS','THAAD','HIKAYAT','FAR7A','NOR EL DONYA','MBC'];

/* ─────────── الترويسة ─────────── */
const NAV = [
  {href:'index.html',    ar:'الرئيسية', en:'Home'},
  {href:'about.html',    ar:'من نحن',   en:'About'},
  {href:'services.html', ar:'الخدمات',  en:'Services'},
  {href:'portfolio.html',ar:'الأعمال',  en:'Work'},
  {href:'blog.html',     ar:'المدونة',  en:'Blog'},
  {href:'contact.html',  ar:'تواصل معنا',en:'Contact'}
];

function buildHeader(current){
  const links = NAV.map(n=>{
    const on = n.href===current ? ' on' : '';
    const hide = n.href==='blog.html' ? ' hide-md' : '';
    return `<a class="lnk${on}${hide}" href="${n.href}" data-ar="${n.ar}" data-en="${n.en}">${n.ar}</a>`;
  }).join('');
  return `<header class="site" id="hd">
    <a href="index.html" class="mark" aria-label="${BRAND.name}">
      <img src="assets/logo-mark.svg" alt="${BRAND.name}"></a>
    <nav class="mainnav">${links}</nav>
    <div class="hactions">
      <button class="langbtn" id="lang">EN</button>
      <a href="contact.html" class="quote hide-md" data-ar="تواصل معنا" data-en="Get in touch">تواصل معنا</a>
      <button class="burger" id="burger" aria-label="القائمة"><span></span><span></span></button>
    </div>
  </header>
  <div class="mobnav" id="mobnav"><nav>${links}</nav>
    <a href="contact.html" class="btn fill" data-ar="تواصل معنا" data-en="Get in touch">تواصل معنا</a></div>`;
}

const SOCIAL_SVG = {
  ig:'<path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.42.4.68.8.9 1.4.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2a3.9 3.9 0 0 1-.9 1.4c-.4.42-.8.68-1.4.9-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42a3.9 3.9 0 0 1-1.4-.9 3.9 3.9 0 0 1-.9-1.4c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.42.8-.68 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 10.55a4.15 4.15 0 1 1 0-8.3 4.15 4.15 0 0 1 0 8.3Zm8.15-10.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>',
  vm:'<path d="M22 7.4c-.1 2.1-1.6 5-4.4 8.7-2.9 3.9-5.4 5.8-7.4 5.8-1.2 0-2.3-1.2-3.1-3.5L5.4 12c-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.5.9L1 8.2c1-.8 1.9-1.7 2.8-2.6C5.1 4.5 6.1 4 6.7 3.9c1.5-.1 2.5.9 2.8 3.1.4 2.4.7 3.8.8 4.4.4 2 .9 3 1.4 3 .4 0 1-.6 1.8-1.9.8-1.3 1.2-2.2 1.3-2.9.1-1-.3-1.5-1.3-1.5-.5 0-.9.1-1.4.3 1-3.1 2.8-4.6 5.5-4.5 2 .1 2.9 1.4 2.8 3.9Z"/>',
  be:'<path d="M9.3 5.8c.7 0 1.4.06 2 .18.6.12 1.1.32 1.5.6.4.28.75.66.98 1.13.23.47.35 1.06.35 1.75 0 .75-.17 1.37-.5 1.87-.35.5-.85.9-1.5 1.2.9.26 1.58.72 2.03 1.37.45.65.67 1.44.67 2.36 0 .74-.14 1.38-.43 1.92-.29.54-.68.98-1.16 1.32-.49.34-1.05.6-1.68.76-.63.16-1.28.24-1.94.24H2V5.8h7.3Zm-.42 5.6c.6 0 1.1-.14 1.49-.43.39-.29.58-.75.58-1.4 0-.36-.06-.65-.19-.88a1.35 1.35 0 0 0-.51-.53 2.1 2.1 0 0 0-.73-.26 4.9 4.9 0 0 0-.86-.07H5.1v3.57h3.78Zm.2 5.9c.33 0 .65-.03.95-.1.3-.06.57-.17.8-.32.23-.15.41-.36.55-.62.14-.26.2-.6.2-1.01 0-.8-.22-1.37-.67-1.71-.45-.35-1.04-.52-1.78-.52H5.1v4.28h3.98ZM17.3 17.2c.42.4 1.02.61 1.8.61.57 0 1.05-.14 1.46-.42.4-.29.65-.59.75-.9h2.2c-.36 1.1-.9 1.88-1.63 2.35-.73.47-1.62.7-2.66.7-.72 0-1.38-.11-1.96-.35a4.1 4.1 0 0 1-1.48-1 4.4 4.4 0 0 1-.94-1.55 5.9 5.9 0 0 1-.33-2c0-.71.11-1.37.34-1.98a4.6 4.6 0 0 1 .96-1.57c.42-.44.92-.79 1.5-1.04a4.9 4.9 0 0 1 1.93-.38c.8 0 1.5.15 2.1.46.6.31 1.09.73 1.47 1.25.38.52.65 1.12.82 1.79.16.67.22 1.37.17 2.1h-6.79c0 .8.24 1.53.66 1.93Zm3.16-5.24c-.34-.36-.9-.56-1.6-.56-.46 0-.85.08-1.15.24-.3.15-.55.35-.73.58-.19.23-.32.47-.39.73-.07.25-.11.48-.13.68h4.2c-.12-.75-.36-1.31-.7-1.67ZM16.1 6.9h5.24v1.4H16.1V6.9Z"/>',
  li:'<path d="M6.94 5.5a2.06 2.06 0 1 1-4.12 0 2.06 2.06 0 0 1 4.12 0ZM3.1 21.5h3.6V8.9H3.1v12.6ZM14.6 8.6c-1.9 0-2.9 1-3.4 1.8h-.05V8.9H7.7c.05 1 0 12.6 0 12.6h3.5v-7c0-.34.02-.67.12-.91.27-.66.87-1.35 1.9-1.35 1.34 0 1.87 1 1.87 2.5v6.76h3.5v-7.17c0-3.24-1.73-4.73-4.04-4.73Z"/>'
};
const soc=(k,u,l)=>`<a href="${u}" target="_blank" rel="noopener" aria-label="${l}" title="${l}">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">${SOCIAL_SVG[k]}</svg></a>`;

function buildFooter(){
  return `<footer class="site">
    <div class="wrap" style="padding-inline:0">
      <div class="flogo"><img src="assets/logo-full.svg" alt="${BRAND.name}"></div>
      <div class="fgrid">
        <div class="fcol">
          <b data-ar="البريد الإلكتروني" data-en="EMAIL">البريد الإلكتروني</b>
          <a href="mailto:${BRAND.email}"><bdi dir="ltr">${BRAND.email}</bdi></a>
        </div>
        <div class="fcol">
          <b data-ar="الرياض — السعودية" data-en="RIYADH — SAUDI ARABIA">الرياض — السعودية</b>
          <a href="tel:+966567561619"><bdi dir="ltr">+966 56 756 1619</bdi></a>
          <a href="tel:+966531473116"><bdi dir="ltr">+966 53 147 3116</bdi></a>
        </div>
        <div class="fcol">
          <b data-ar="إسطنبول — تركيا" data-en="ISTANBUL — TURKEY">إسطنبول — تركيا</b>
          <a href="tel:+905412347978"><bdi dir="ltr">+90 541 234 79 78</bdi></a>
          <a href="tel:+905444888238"><bdi dir="ltr">+90 544 488 82 38</bdi></a>
        </div>
        <div class="fcol">
          <b data-ar="تابعنا" data-en="FOLLOW US">تابعنا</b>
          <div class="socials">
            ${soc('ig','https://www.instagram.com/blue_prohouse/','Instagram')}
            ${soc('vm','https://vimeo.com/user184653941','Vimeo')}
            ${soc('be','https://www.behance.net/blueprohouse','Behance')}
            ${soc('li','https://www.linkedin.com/company/blue-production-house','LinkedIn')}
          </div>
        </div>
      </div>
      <p class="fnote"><bdi dir="ltr">© 2026 ${BRAND.name}</bdi> — <bdi>${BRAND.domain}</bdi></p>
    </div>
  </footer>`;
}

/* ── الشريط المتحرك — الصفحة الرئيسية فقط ── */
function marqLine(words, lang, back){
  const unit = words.map((w,i)=>
    `<span class="w ${lang}" style="opacity:${OPACITY[i%OPACITY.length]}">${w}</span><span class="dash">—</span>`
  ).join('');
  const grp = `<div class="mgroup">${unit}</div>`;
  return `<div class="mline"><div class="mtrack${back?' back':''}">${grp}${grp}</div></div>`;
}
function buildMarquee(){
  return `<section class="marq">
    ${marqLine(FIELDS_AR,'ar',false)}
    ${marqLine(FIELDS_EN,'en',true)}
    <div class="mcta">
      <a href="contact.html" class="btn"><span data-ar="تواصل معنا" data-en="Get in touch">تواصل معنا</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M7 17 17 7M9 7h8v8"/></svg></a>
    </div>
  </section>`;
}

/* ── أيقونة الفكرة: علامة استفهام بثلاث شُرَط متدرّجة ── */
const IDEA_SVG = `<svg class="idea" viewBox="0 0 120 120" fill="none" aria-hidden="true"
  stroke="currentColor" stroke-width="8.6" stroke-linecap="round" stroke-linejoin="round">
  <path class="qhook" d="M30 42a20 20 0 1 1 27 18.8V70"/>
  <circle class="qdot" cx="57" cy="87" r="5" fill="currentColor" stroke="none"/>
  <path class="ray r1" d="M88.1 47.0L72.1 40.6" stroke-width="6.5"/>
  <path class="ray r2" d="M84.9 29.1L68.9 36.1" stroke-width="7.5"/>
  <path class="ray r3" d="M76.2 16.4L65.2 29.6" stroke-width="7.5"/>
</svg>`;

function buildCTA(){
  return `<section class="cta rev"><div class="wrap">
    <div class="cta-in nocon">
      <div class="cta-txt">
        <h2 class="big">
          <span data-ar="لديك فكرة؟" data-en="GOT AN IDEA?">لديك فكرة؟</span>
          <span class="two" data-ar="فلنحوّلها إلى واقع." data-en="LET'S MAKE IT REAL.">فلنحوّلها إلى واقع.</span>
        </h2>
        <p data-ar="أخبرنا عن مشروعك، وسنعود إليك بخطة متكاملة وعرض سعر خلال 48 ساعة."
           data-en="Tell us about your project and we will come back with a full plan and a quote within 48 hours.">
          أخبرنا عن مشروعك، وسنعود إليك بخطة متكاملة وعرض سعر خلال 48 ساعة.</p>
        <div class="cta-acts">
          <a class="btn fill lg" href="contact.html">
            <span data-ar="أرسل رسالة" data-en="Send a message">أرسل رسالة</span>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17 17 7M9 7h8v8"/></svg></a>
          <a class="btn lg" href="https://wa.me/966567561619" target="_blank" rel="noopener">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.6 14.2c-.2.7-1.2 1.3-2 1.4-.5.1-1.2.1-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.2-1.6-1.2-3.1 0-1.5.8-2.2 1-2.5.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.2.4 0 .7l-.4.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.3.1.2.1.8-.1 1.5Z"/></svg>
            <span data-ar="واتساب مباشر" data-en="WhatsApp us">واتساب مباشر</span></a>
        </div>
      </div>
    </div>
  </div></section>`;
}

/* ── شريط شعارات العملاء ── */
function buildLogos(){
  const row = CLIENTS.map(c=>`<span class="lg">${c}</span>`).join('');
  return `<section class="clients"><div class="cl-track">
    <div class="cl-grp">${row}</div><div class="cl-grp">${row}</div></div></section>`;
}

function buildMockbar(){
  return `<div class="mockbar">
    <span class="mb-fonts">خط القائمة:
      <button data-nf="plex" class="on">1</button>
      <button data-nf="almarai">2</button>
      <button data-nf="tajawal">3</button></span>
    <span class="mb-links"><a href="index.html">الرئيسية</a> · <a href="about.html">من نحن</a> ·
      <a href="services.html">الخدمات</a> · <a href="service-motion.html">خدمة</a> ·
      <a href="portfolio.html">الأعمال</a> · <a href="project.html">مشروع</a> ·
      <a href="blog.html">المدونة</a> · <a href="article.html">مقال</a> ·
      <a href="contact.html">تواصل</a> · <a href="404.html">404</a></span>
  </div>`;
}

function tile(p, size){
  return `<a href="project.html" class="tile ${size}" data-k="${p.k}">
    <img src="${p.img}" alt="" loading="lazy">
    <span class="play"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></span>
    <span class="ov"><span class="c" data-ar="${p.car}" data-en="${p.cen}">${p.car}</span>
    <span class="t" data-ar="${p.ar}" data-en="${p.en}">${p.ar}</span></span></a>`;
}

/* ─────────── التشغيل ─────────── */
document.addEventListener('DOMContentLoaded',()=>{
  const page = document.body.dataset.page || 'index.html';
  const isHome = page === 'index.html';

  const hSlot=document.getElementById('slot-header'); if(hSlot) hSlot.outerHTML=buildHeader(page);
  /* الشريط في الرئيسية فقط */
  document.querySelectorAll('[data-slot="marquee"]').forEach(s=>{
    if(isHome) s.outerHTML=buildMarquee(); else s.remove();
  });
  document.querySelectorAll('[data-slot="logos"]').forEach(s=>s.outerHTML=buildLogos());
  document.querySelectorAll('[data-slot="cta"]').forEach(s=>s.outerHTML=buildCTA());
  const fSlot=document.getElementById('slot-footer'); if(fSlot) fSlot.outerHTML=buildFooter();
  document.body.insertAdjacentHTML('beforeend',buildMockbar());

  /* المؤشر */
  const cur=document.createElement('div'); cur.className='cur';
  const ring=document.createElement('div'); ring.className='cur-ring';
  document.body.append(cur,ring);
  let mx=0,my=0,rx=0,ry=0;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;
    cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`});
  (function loop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;
    ring.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(loop)})();
  document.addEventListener('mouseover',e=>
    document.body.classList.toggle('hot',!!e.target.closest('a,button,summary,input,textarea,select')));

  const g=document.createElement('div'); g.className='grain'; document.body.appendChild(g);

  /* القائمة على الموبايل */
  const burger=document.getElementById('burger'), mob=document.getElementById('mobnav');
  if(burger) burger.onclick=()=>{
    const open=document.body.classList.toggle('navopen');
    document.body.style.overflow=open?'hidden':'';
  };
  if(mob) mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    document.body.classList.remove('navopen'); document.body.style.overflow='';
  }));

  /* تثبيت الترويسة */
  const hd=document.getElementById('hd');
  const hero=document.querySelector('.hero,.about-hero');
  if(hd && !hero) hd.classList.add('solid');
  addEventListener('scroll',()=>{
    if(hd && hero) hd.classList.toggle('stuck',scrollY>innerHeight*.8);
  },{passive:true});

  const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add('on')),
    {threshold:.1});
  /* يراقب أي عنصر .rev — بما فيه ما يُضاف لاحقاً بالجافاسكريبت */
  window.revealScan=()=>document.querySelectorAll('.rev:not([data-obs])').forEach(e=>{
    e.setAttribute('data-obs','1'); io.observe(e);
  });
  window.revealScan();
  setTimeout(()=>window.revealScan(),0);
  setTimeout(()=>window.revealScan(),250);

  /* الفلاتر */
  document.querySelectorAll('[data-filters]').forEach(box=>{
    const target=document.querySelector(box.dataset.filters);
    box.innerHTML=CATS.map((c,i)=>
      `<button class="${i===0?'on':''}" data-k="${c.k}" data-ar="${c.ar}" data-en="${c.en}">${c.ar}</button>`).join('');
    box.addEventListener('click',e=>{
      const b=e.target.closest('button'); if(!b) return;
      box.querySelectorAll('button').forEach(x=>x.classList.remove('on')); b.classList.add('on');
      target.querySelectorAll('.tile').forEach(t=>
        t.classList.toggle('hide', b.dataset.k!=='all' && t.dataset.k!==b.dataset.k));
    });
  });

  /* بارالاكس */
  const mos=document.querySelector('.mosaic');
  if(mos) addEventListener('scroll',()=>{
    mos.querySelectorAll('.tile').forEach((t,i)=>{
      const r=t.getBoundingClientRect();
      if(r.top<innerHeight&&r.bottom>0) t.style.transform=
        `translateY(${(((r.top-innerHeight/2)/innerHeight)*(i%2?-9:9)).toFixed(1)}px)`;
    });
  },{passive:true});

  /* اللغة */
  const apply=ar=>{
    document.documentElement.lang=ar?'ar':'en';
    document.documentElement.dir=ar?'rtl':'ltr';
    const b=document.getElementById('lang'); if(b) b.textContent=ar?'EN':'ع';
    document.querySelectorAll('[data-ar]').forEach(el=>el.textContent=ar?el.dataset.ar:el.dataset.en);
  };
  let isAr=true;
  try{ isAr = localStorage.getItem('bph_lang')!=='en'; }catch(e){}
  apply(isAr);
  const lb=document.getElementById('lang');
  if(lb) lb.onclick=()=>{ isAr=!isAr; try{localStorage.setItem('bph_lang',isAr?'ar':'en')}catch(e){} apply(isAr); };
  window.applyLang=()=>apply(isAr);
  setTimeout(()=>apply(isAr),0);

  /* مبدّل خط القائمة (للتجربة فقط) */
  const nfBox=document.querySelector('.mb-fonts');
  const setNF=v=>{ document.documentElement.dataset.navfont=v;
    try{localStorage.setItem('bph_navfont',v)}catch(e){}
    nfBox && nfBox.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.nf===v)); };
  let nf='plex'; try{ nf=localStorage.getItem('bph_navfont')||'plex'; }catch(e){}
  setNF(nf);
  if(nfBox) nfBox.addEventListener('click',e=>{
    const b=e.target.closest('button'); if(b) setNF(b.dataset.nf);
  });
});
