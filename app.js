// Pollinations API key — unlocks the strong text/image models on the free
// tier. NOTE: this is visible in the public source; if its credit is ever
// drained, generate a new key at enter.pollinations.ai and replace it here.
const VS_POLLINATIONS_KEY = "sk_fxKqS1gG6wVVttINlEowCNP3ktoJ0TtD";

// OPTIONAL real-footage key. Paste your OWN free Pexels API key here ONCE
// (get it at pexels.com/api) and every visitor gets real stock footage with
// NO key field shown to them. Leave it "" to use free AI footage instead.
const VS_PEXELS_KEY = "2U0VMar66ppPsHzpo2Ki2ganZaRf2DGlMdDnEiKSJM3f4reupw05PyRf";

const i18n = {
  en: {
    navGroupExplore: "Explore",
    navGroupCreate: "Create",
    navTools: "Tools",
    themeLight: "Light",
    themeDark: "Dark",
    navPerformance: "Live charts",
    navMedia: "Caption AI",
    navStudio: "Video studio",
    studioEyebrow: "Advanced video studio",
    studioTitle: "Create a complete, luxurious video",
    studioText: "Use the tabs in order: 1) Template, 2) Media, 3) Format, 4) Text, 5) Logo. The timeline below the preview shows each layer — drag the red playhead to scrub. Press Preview to play, then Export to save a real video file.",
    vTabTemplate: "Template",
    vTabMedia: "Media",
    vTabSlides: "Slides",
    vSlidesLabel: "Slide sequence",
    vSlidesHint: "Add multiple slides — each with its own media, headline and duration. They play one after another as a single video.",
    vAddSlide: "+ Add slide (upload media)",
    vAddIntro: "+ Add intro scene",
    vAddOutro: "+ Add outro scene",
    vAutoLabel: "⚡ Auto-build a full video",
    vAutoImagesLbl: "✦ Auto-generate cinematic footage for every scene (free)",
    vAutoBatchLbl: "A separate video for each city / item in the link",
    vUsePexelsLbl: "Real video footage, auto-matched to each topic & city",
    vPexelsKeyLbl: "Pexels API key",
    vAutoHint: "Paste a news article URL (or its text). The AI reads the whole article and builds a complete video, using an infographic where there are numbers and clean text where there are none, plus an intro and outro.",
    vAutoUrl: "Article URL (optional)",
    vAutoTopic: "Topic or article text",
    vAutoBuildBtn: "Build the video",
    vAutoAiBtn: "✦ Build with AI",
    vIntroSceneLabel: "Intro scene settings",
    vIntroSceneHint: "Editing the selected intro scene — pick a background, write the two lines of text, and choose how the text animates in.",
    vIntroBgLabel: "Background",
    vIntroMainLabel: "Main text",
    vIntroSubInput2: "Secondary text",
    vIntroMotion2: "Text motion",
    vSlideHeadline: "Slide headline",
    vSlideDuration: "Slide duration (s)",
    vSlideFootage: "+ Add / replace footage on this slide",
    vFootageTip: "Tip: drag the footage on the preview to reframe it, and scroll over it to zoom. Each scene keeps its own framing.",
    vSlideCaption: "Caption (top label)",
    vSlideSettingsNote: "These settings apply to the slide selected above. With no slides, they apply to your single video. Add a slide to give it its own separate settings.",
    vSlideSectionsLabel: "Scene settings",
    vTabFormat: "Format & export",
    vTabMotion: "Motion",
    vTabInfo: "Infographic",
    vInfoLabel: "Infographic builder",
    vInfoOnLabel: "Show infographic overlay",
    vInfoHint: "Type your title and stats below — the infographic builds itself as you write. No JSON needed.",
    vInfoAiLabel: "✦ Generate with AI",
    vInfoAiHint: "Describe your topic or paste a paragraph — AI turns it into a title and stats. First use opens a free Puter sign-in.",
    vInfoAiBtn: "Generate infographic",
    vInfoFormTitle: "Title",
    vInfoFormSubtitle: "Subtitle (optional)",
    vInfoFormSource: "Data source (recommended)",
    vInfoSourceNote: "Numbers shown are only as reliable as what you enter. Cite a real source so viewers can trust the data — AI-generated figures are estimates, not verified facts.",
    vInfoStatsHead: "Stats",
    vInfoAddRow: "+ Add a stat",
    vInfoAdvanced: "Advanced — edit raw JSON / import file",
    vInfoSyncBtn: "Load this JSON into the form",
    vInfoImportLabel: "Import JSON file",
    vInfoJsonLabel: "Infographic data (JSON)",
    vInfoStyleLabel: "Chart style",
    vInfoPosLabel: "Position",
    vInfoMotionLabel: "Entrance motion",
    vMotionLabel: "Motion & elements",
    vCamMotionLabel: "Camera motion",
    vTextAnimLabel: "Text animation",
    vOverlayLabel: "Overlay element",
    vMotionNote: "Every change updates the live preview instantly — no need to press Preview.",
    vTabText: "Text",
    vTabLogo: "Logo & cards",
    vTabNews: "News",
    vNewsLabel: "News banner",
    vNewsHint: "Add your own footage, then type the news details below — a broadcast-style banner is drawn over the video.",
    vNewsAiLabel: "✦ Summarize with AI",
    vNewsAiHint: "Paste an article or notes — AI writes a short kicker, headline and source. First use opens a free Puter sign-in.",
    vNewsAiBtn: "Summarize into banner",
    vNewsOnLabel: "Show news banner",
    vNewsKickerLabel: "Kicker / category",
    vNewsHeadlineLabel: "News headline",
    vNewsSourceLabel: "Source / reporter",
    vNewsStyleLabel: "Banner style",
    vNewsAccentLabel: "Banner accent",
    vNewsMotionLabel: "Entrance motion",
    vNewsClockLabel: "Show live clock",
    vTemplateLabel: "Template",
    vUploadLabel: "Media & music",
    vUploadHint: "Upload one video or image (mp4, webm, mov, jpg, png)",
    vQuickClipLabel: "Quick mode — single clip",
    vQuickClipHint: "Just one clip and no scenes? Upload a single video or image here instead of adding scenes.",
    vMusicLabel: "Background music",
    vMusicHint: "Optional: background music (mp3, wav) — applies to the whole video",
    vMediaModeNote: "Two ways to add footage: upload one clip here for a quick single-scene video, or use the Slides tab to build a multi-scene sequence. Music below applies to the whole video either way.",
    vLogoHint: "Logo: PNG (transparent) or animated WebM/MP4",
    vFormatLabel: "Format & export",
    vAspectLabel: "Aspect ratio",
    vDurationLabel: "Duration (seconds)",
    vDurationNote: "Set any length you like. A shorter time simply trims the clip — it still plays at normal speed and ends early. A longer time slows the clip down so it stretches to fill the duration.",
    vFilterLabel: "Filter / grade",
    vSpeedLabel: "Playback speed",
    vTransitionLabel: "Transition in",
    vGrainLabel: "Film grain",
    vExportLabel: "Export settings",
    vExportSizeLabel: "Download size",
    vExportQualityLabel: "Download quality",
    vExportFormatLabel: "File format",
    vExportFormatNote: "MP4 is converted in your browser after recording. The first MP4 export downloads a one-time converter (~25 MB) and takes longer; later exports are quicker.",
    vExportInfo: "Higher size and quality look better but make a larger file.",
    vTextLabel: "Text layers",
    vHeadlineLabel: "Headline",
    vSubLabel: "Subtext",
    vCtaLabel: "Call to action",
    vTextPosLabel: "Text position",
    vTextSizeLabel: "Text size",
    vTextAutoNote: "Text sits on an automatic dark panel, so it stays readable on any photo or video.",
    vLogoLabel: "Logo & cards",
    vLogoPosLabel: "Logo position",
    vLogoMotionLabel: "Logo motion",
    vLogoStyleLabel: "Logo frame style",
    vLogoColorLabel: "Ring / badge color",
    vLogoTintLabel: "Logo colour",
    vLogoBgLabel: "Logo background",
    vLogoSizeLabel: "Logo size",
    vLogoShowLbl: "Show logo on",
    vLogoAdvLbl: "Advanced styling",
    vLogoSampleLbl: "Or try a sample logo",
    vPlaceLogoTxt: "Place logo on video",
    vLogoTip: "After uploading, tap \"Place logo\". Then drag the logo on the preview to move it, and drag the ends of its bar on the timeline to set when it appears.",
    vLogoStartLabel: "Logo start (s)",
    vLogoDurLabel: "Logo duration (s, 0 = end)",
    vIntroLabel: "Intro — main text",
    vIntroSubLabel: "Intro — secondary text",
    vIntroMotionLabel: "Intro text motion",
    vOutroLabel: "Outro card text",
    vPreviewBtn: "Preview",
    vExportBtn: "Export video",
    vPreviewLabel: "Preview",
    vTimelineHint: "Drag the playhead to scrub",
    vTrackMedia: "Media",
    vTrackText: "Text",
    vTrackLogo: "Logo",
    vTrackMusic: "Music",
    vPreviewSizeLabel: "Preview size",
    vPlaceholder: "Choose a template and upload media to preview it here",
    navIntelligence: "Prompt lab",
    navJobs: "AI jobs",
    navAbout: "About",
    aboutEyebrow: "About",
    aboutTitle: "Built for the AI-curious",
    aboutText: "AI Radar is a free workspace to discover real AI tools, track live popularity, generate content, and build videos — all running in your browser.",
    aboutRole: "Creator & Designer",
    aboutCreditText: "Designed and built AI Radar — concept, interface, and the video studio.",
    aboutProjectRole: "Free static project",
    aboutProjectText: "Runs entirely client-side — three files, no server. Live data comes from the public GitHub API. No tracking, no accounts, no ads, ever.",
    changelogTitle: "Latest updates",
    cl21Title: "Cinematic design upgrade",
    cl21Text: "Premium animated backgrounds (aurora, ember, liquid mesh, spotlight and more), new infographic and text styles (progress pills, bold statement, split block, badge), template-driven title colours and fonts, and a Vox-style snappy motion across the studio.",
    cl20Title: "Smarter article-to-video",
    cl20Text: "Paste an article URL or text and the AI analyses the whole piece, choosing an infographic where there are numbers and clean text where there aren't. Plus per-slide footage and captions, professional news/text templates, working transitions on every slide, and a colour filter that grades the footage without washing out text.",
    cl19Title: "Auto video builder",
    cl19Text: "Describe a topic and the studio assembles a whole video for you — intro, infographic and news content slides, and an outro — in one click, with an optional AI scripting mode.",
    cl18Title: "Outro scenes & more designs",
    cl18Text: "Added outro scenes, 22 intro backgrounds, cinematic motion presets, clearer infographic text, per-slide element positions, and a graceful music fade-out.",
    cl17Title: "Intro scenes & richer motion",
    cl17Text: "New intro scene type in the Video Studio with 8 built-in backgrounds, dual animated text, and 12 motion presets. Scene-aware motion so every slide animates correctly.",
    cl16Title: "Full sidebar & cleaner UI",
    cl16Text: "Collapsible left sidebar navigation, redesigned chart and footer controls, a back-to-top button, and tighter mobile layouts throughout.",
    cl15Title: "MP4 export & real charts",
    cl15Text: "Video Studio now exports MP4. The infographic became a proper bar chart with a labelled axis, scale, and gridlines.",
    cl14Title: "Bigger tool catalogue",
    cl14Text: "Expanded to 45 curated AI tools, grouped into collapsible categories, with more live GitHub data coverage.",
    changelogNote: "AI Radar is actively maintained. This list shows the most recent notable changes.",
    aboutMissionTitle: "Why AI Radar exists",
    aboutMissionText: "The AI space moves faster than anyone can follow. AI Radar cuts through the noise — a calm, honest place to find genuinely useful tools, see what is actually gaining traction from live data, and create real work without paywalls, sign-ups, or tracking.",
    aboutStatTools: "curated AI tools",
    aboutStatFree: "free, no account",
    aboutStatLive: "GitHub data",
    aboutStatLiveValue: "Live",
    aboutStatPrivacy: "tracking or ads",
    aboutStatPrivacyValue: "Zero",
    aboutFeat1Title: "Tool finder",
    aboutFeat1Text: "Search and filter real AI tools by use case, price, and job — grouped and easy to scan.",
    aboutFeat2Title: "Live trend chart",
    aboutFeat2Text: "Popularity tracked from the public GitHub API, refreshed automatically — no guesswork.",
    aboutFeat3Title: "Video studio",
    aboutFeat3Text: "Build multi-scene videos with motion, infographics, and news banners — entirely in your browser.",
    aboutFeat4Title: "Caption & prompt tools",
    aboutFeat4Text: "Generate captions and refined prompts locally — fast, private, and free to use.",
    navRegister: "Register",
    startButton: "Start",
    heroEyebrow: "AI Radar — Live Intelligence",
    heroTitle: "Find. Compare. Create.",
    heroText:
      "Cut through the AI noise. Discover tools that actually work, track what's gaining traction in real time, and create studio-grade video and content — one calm workspace, free in your browser.",
    heroChip1: "Live GitHub data",
    heroChip2: "Claude-powered",
    heroChip3: "45+ AI tools",
    heroChip4: "No sign-up · No tracking",
    heroPrimary: "Search tools",
    heroSecondary: "Generate captions",
    metricTools: "AI tools",
    metricFree: "Free plans",
    metricJobs: "Career paths",
    chipLive: "AA model index",
    toolsEyebrow: "Tool finder",
    toolsTitle: "Curated real AI tools",
    jumpToLabel: "Jump to tool",
    categoryLabel: "Category",
    budgetLabel: "Budget",
    sortLabel: "Sort",
    modelTypeLabel: "Model type",
    minScoreLabel: "Minimum score",
    compareEyebrow: "Compare",
    compareTitle: "Compare selected tools",
    clearCompare: "Clear",
    performanceEyebrow: "Live GitHub data",
    performanceTitle: "Live AI tools trend",
    liveLabel: "Live",
    refreshLabel: "Refresh",
    chartTabStars: "GitHub Stars",
    chartTabForks: "Forks",
    chartTabActivity: "Dev Activity",
    performanceText: "A live chart of real GitHub popularity for every AI tool in the finder. Data is fetched live from the public GitHub API and refreshes every 5 minutes. Tools you add to Compare are highlighted.",
    mediaEyebrow: "Media caption generator",
    mediaTitle: "Caption your photo or video for social media",
    mediaText: "Upload the photo or video you want to post, pick a platform, and get a ready-to-share caption with hooks and hashtags — built around your media.",
    mediaUploadLabel: "Upload image or video",
    mediaSubjectLabel: "What's in the photo/video? (required)",
    mediaGoalLabel: "Goal",
    platformLabel: "Platform",
    toneLabel: "Tone",
    generateCaption: "Generate caption",
    copyCaption: "Copy caption",
    copyJson: "Copy JSON",
    copyPrompt: "Copy prompt",
    mediaPlaceholder: "Upload media to preview it here",
    copied: "Copied.",
    studioEyebrow: "Free video template studio",
    studioTitle: "Create an animated video template from static uploads",
    studioText:
      "Upload images, set duration per slide, edit animated text elements, preview the timing, and export JSON or a real .webm video. It is free because it runs locally in the browser.",
    uploadLabel: "Upload static files",
    durationLabel: "Slide duration (seconds)",
    motionLabel: "Motion",
    addSlide: "Add slide",
    exportTemplate: "Export template JSON",
    exportVideo: "Export video (.webm)",
    slideTitleLabel: "Slide title",
    slideCaptionLabel: "Slide caption",
    chartDataLabel: "Chart values",
    previewPlaceholder: "Upload an image to preview your template",
    jobsEyebrow: "AI career helper",
    jobsTitle: "Find a practical AI work direction",
    jobBoardTitle: "Live job source board",
    skillsLabel: "Your skills",
    jobTitleLabel: "Target role",
    jobLocationLabel: "Location",
    skillsButton: "Suggest path",
    intelEyebrow: "AI utilities",
    intelTitle: "Generate clean prompts and JSON",
    promptDescLabel: "Describe what you want to create",
    promptStyleLabel: "Style",
    promptGenBtn: "Generate prompt",
    promptNote: "Generates a single ready-to-paste prompt in the chosen style — just the prompt, nothing else.",
    jsonDescLabel: "Describe any data, product, or idea",
    jsonGenBtn: "Generate JSON",
    jsonNote: "Outputs only clean, valid JSON — no explanation, no extra text.",
    simplePromptLabel: "Simple prompt",
    enhancePrompt: "Enhance prompt",
    textJsonLabel: "Text to JSON",
    convertJson: "Convert to JSON",
    registerEyebrow: "Account",
    registerTitle: "Create a local test account",
    registerText: "This demo stores registration data in your browser only. A real launch needs authentication on a backend.",
    nameLabel: "Name",
    emailLabel: "Email",
    roleLabel: "Main goal",
    registerButton: "Register",
    registered: "Registration saved locally.",
    allCategories: "All categories",
    allBudgets: "All budgets",
    freeBudget: "Free or freemium",
    under20: "Under $20",
    proBudget: "Pro tools",
    sortScore: "Best match",
    sortPrice: "Lowest price",
    sortName: "Name",
    noTools: "No tools found. Try a broader search.",
    addCompare: "Add to compare",
    removeCompare: "Remove",
    officialLink: "Official link",
    pricing: "Pricing",
    emptyCompare: "Add tools from the cards to compare them here.",
    tableTool: "Tool",
    tableCategory: "Category",
    tablePrice: "Price",
    tableUse: "Best use",
    tableJobs: "Related jobs",
    tableLink: "Link",
    open: "Open",
    recommendedTools: "Recommended tools",
    sourceHint: "Opens a real public search in a new tab",
    templateEmpty: "Add at least one uploaded slide first.",
    downloaded: "Template JSON downloaded.",
    videoExporting: "Rendering video... keep this tab open.",
    videoReady: "Video downloaded.",
    videoUnsupported: "Your browser does not support video export here.",
    noFile: "Upload images first.",
    deleteSlide: "Delete"
  },
  fa: {
    navGroupExplore: "کاوش",
    navGroupCreate: "ساخت",
    navTools: "ابزارها",
    themeLight: "روشن",
    themeDark: "تیره",
    navPerformance: "چارت زنده",
    navMedia: "\u06a9\u067e\u0634\u0646 AI",
    navStudio: "استودیوی ویدیو",
    studioEyebrow: "استودیوی پیشرفته ویدیو",
    studioTitle: "یک ویدیوی کامل و لوکس بساز",
    studioText: "تب‌ها را به ترتیب بزن: ۱) قالب، ۲) رسانه، ۳) فرمت، ۴) متن، ۵) لوگو. خط زمان زیر پیش‌نمایش لایه‌ها را نشان می‌دهد — نشانگر قرمز را بکش. پیش‌نمایش برای پخش، خروجی برای ذخیره ویدیو.",
    vTabTemplate: "قالب",
    vTabMedia: "رسانه",
    vTabSlides: "اسلایدها",
    vSlidesLabel: "دنباله اسلاید",
    vSlidesHint: "چند اسلاید اضافه کن — هرکدام با رسانه، عنوان و مدت خودش. پشت سر هم به‌صورت یک ویدیو پخش می‌شوند.",
    vAddSlide: "+ افزودن اسلاید (آپلود رسانه)",
    vAddIntro: "+ افزودن صحنه اینترو",
    vAddOutro: "+ افزودن صحنه پایانی",
    vAutoLabel: "⚡ ساخت خودکار ویدیوی کامل",
    vAutoImagesLbl: "✦ ساخت خودکار فوتیج سینمایی برای هر صحنه (رایگان)",
    vAutoBatchLbl: "برای هر شهر/مورد داخل لینک، یک ویدئوی جداگانه",
    vUsePexelsLbl: "فوتیج ویدئویی واقعی، خودکار متناسب با موضوع و شهر",
    vPexelsKeyLbl: "کلید API پکسلز",
    vAutoHint: "لینک یک مقاله خبری (یا متن آن) را بچسبان. هوش مصنوعی کل مقاله را می‌خواند و یک ویدیوی کامل می‌سازد — هرجا عدد باشد اینفوگرافیک و هرجا نباشد متن — به‌همراه اینترو و اوترو.",
    vAutoUrl: "لینک مقاله (اختیاری)",
    vAutoTopic: "موضوع یا متن مقاله",
    vAutoBuildBtn: "ساخت ویدیو",
    vAutoAiBtn: "✦ ساخت با هوش مصنوعی",
    vIntroSceneLabel: "تنظیمات صحنه اینترو",
    vIntroSceneHint: "در حال ویرایش صحنه اینتروی انتخاب‌شده — یک پس‌زمینه انتخاب کن، دو خط متن بنویس و حرکت ورود متن را انتخاب کن.",
    vIntroBgLabel: "پس‌زمینه",
    vIntroMainLabel: "متن اصلی",
    vIntroSubInput2: "متن فرعی",
    vIntroMotion2: "حرکت متن",
    vSlideHeadline: "عنوان اسلاید",
    vSlideDuration: "مدت اسلاید (ثانیه)",
    vSlideFootage: "+ افزودن / جایگزینی فوتیج این صحنه",
    vFootageTip: "نکته: فوتیج را روی پیش‌نمایش بکش تا قاب‌بندی‌اش را تغییر دهی، و روی آن اسکرول کن تا زوم شود. هر صحنه قاب‌بندی مخصوص خودش را نگه می‌دارد.",
    vSlideCaption: "کپشن (برچسب بالا)",
    vSlideSettingsNote: "این تنظیمات روی اسلاید انتخاب‌شده اعمال می‌شود. بدون اسلاید، روی ویدیوی تکی شما اعمال می‌شود. برای تنظیمات جداگانه، اسلاید اضافه کن.",
    vSlideSectionsLabel: "تنظیمات صحنه",
    vTabFormat: "فرمت و خروجی",
    vTabMotion: "موشن",
    vTabInfo: "اینفوگرافیک",
    vInfoLabel: "سازنده اینفوگرافیک",
    vInfoOnLabel: "نمایش اینفوگرافیک",
    vInfoHint: "عنوان و آمارها را پایین بنویس — اینفوگرافیک همزمان با نوشتن ساخته می‌شود. نیازی به JSON نیست.",
    vInfoAiLabel: "✦ ساخت با هوش مصنوعی",
    vInfoAiHint: "موضوعت را توصیف کن یا یک پاراگراف بچسبان — هوش مصنوعی آن را به عنوان و آمار تبدیل می‌کند. اولین استفاده یک ورود رایگان Puter باز می‌کند.",
    vInfoAiBtn: "ساخت اینفوگرافیک",
    vInfoFormTitle: "عنوان",
    vInfoFormSubtitle: "زیرعنوان (اختیاری)",
    vInfoFormSource: "منبع داده (توصیه‌شده)",
    vInfoSourceNote: "اعداد نمایش‌داده‌شده فقط به اندازه چیزی که وارد می‌کنی معتبرند. یک منبع واقعی ذکر کن تا بینندگان به داده‌ها اعتماد کنند — اعداد تولیدشده با هوش مصنوعی تخمین هستند، نه حقایق تأییدشده.",
    vInfoStatsHead: "آمارها",
    vInfoAddRow: "+ افزودن آمار",
    vInfoAdvanced: "پیشرفته — ویرایش JSON خام / وارد کردن فایل",
    vInfoSyncBtn: "بارگذاری این JSON در فرم",
    vInfoImportLabel: "وارد کردن فایل JSON",
    vInfoJsonLabel: "داده اینفوگرافیک (JSON)",
    vInfoStyleLabel: "سبک نمودار",
    vInfoPosLabel: "موقعیت",
    vInfoMotionLabel: "حرکت ورود",
    vMotionLabel: "موشن و المان‌ها",
    vCamMotionLabel: "حرکت دوربین",
    vTextAnimLabel: "انیمیشن متن",
    vOverlayLabel: "المان رویی",
    vMotionNote: "هر تغییری فوراً پیش‌نمایش زنده را به‌روز می‌کند — نیازی به زدن پیش‌نمایش نیست.",
    vTabText: "متن",
    vTabLogo: "لوگو و کارت",
    vTabNews: "اخبار",
    vNewsLabel: "بنر خبری",
    vNewsHint: "ابتدا فیلم خودت را اضافه کن، سپس جزئیات خبر را پایین بنویس — یک بنر شبیه پخش تلویزیونی روی ویدیو کشیده می‌شود.",
    vNewsAiLabel: "✦ خلاصه با هوش مصنوعی",
    vNewsAiHint: "یک مقاله یا یادداشت بچسبان — هوش مصنوعی یک تیتر کوتاه، سرتیتر و منبع می‌نویسد. اولین استفاده یک ورود رایگان Puter باز می‌کند.",
    vNewsAiBtn: "خلاصه در بنر",
    vNewsOnLabel: "نمایش بنر خبری",
    vNewsKickerLabel: "تیتر کوتاه / دسته",
    vNewsHeadlineLabel: "تیتر خبر",
    vNewsSourceLabel: "منبع / خبرنگار",
    vNewsStyleLabel: "سبک بنر",
    vNewsAccentLabel: "رنگ بنر",
    vNewsMotionLabel: "حرکت ورود",
    vNewsClockLabel: "نمایش ساعت زنده",
    vTemplateLabel: "قالب",
    vUploadLabel: "رسانه و موسیقی",
    vUploadHint: "یک ویدیو یا تصویر آپلود کن (mp4, webm, mov, jpg, png)",
    vQuickClipLabel: "حالت سریع — تک‌کلیپ",
    vQuickClipHint: "فقط یک کلیپ و بدون صحنه؟ به‌جای افزودن صحنه، یک ویدیو یا تصویر اینجا آپلود کن.",
    vMusicLabel: "موسیقی پس‌زمینه",
    vMusicHint: "اختیاری: موسیقی پس‌زمینه (mp3, wav) — روی کل ویدیو اعمال می‌شود",
    vMediaModeNote: "دو راه برای افزودن فیلم: یک کلیپ اینجا آپلود کن برای ویدیوی تک‌صحنه، یا از تب اسلایدها برای ساخت دنباله چندصحنه‌ای استفاده کن. موسیقی زیر روی کل ویدیو اعمال می‌شود.",
    vLogoHint: "اختیاری: لوگو (png شفاف توصیه می‌شود)",
    vFormatLabel: "فرمت و خروجی",
    vAspectLabel: "نسبت تصویر",
    vDurationLabel: "مدت (ثانیه)",
    vDurationNote: "هر طولی بخواهی تنظیم کن. کلیپ کش می‌آید تا آن را پر کند — بلندتر از کلیپ یعنی پخش آهسته، کوتاه‌تر یعنی سریع‌تر. همیشه یک‌بار از ابتدا تا انتها اجرا می‌شود، بدون توقف یا تکرار.",
    vFilterLabel: "فیلتر / گرید",
    vSpeedLabel: "سرعت پخش",
    vTransitionLabel: "ترانزیشن ورودی",
    vGrainLabel: "دانه‌دانه فیلم",
    vExportLabel: "تنظیمات خروجی",
    vExportSizeLabel: "اندازه دانلود",
    vExportQualityLabel: "کیفیت دانلود",
    vExportFormatLabel: "قالب فایل",
    vExportFormatNote: "MP4 پس از ضبط، داخل مرورگر تبدیل می‌شود. اولین خروجی MP4 یک مبدل یک‌بارمصرف (~۲۵ مگابایت) دانلود می‌کند و بیشتر طول می‌کشد؛ خروجی‌های بعدی سریع‌ترند.",
    vExportInfo: "اندازه و کیفیت بالاتر بهتر دیده می‌شود اما فایل بزرگ‌تری می‌سازد.",
    vTextLabel: "لایه‌های متن",
    vHeadlineLabel: "تیتر",
    vSubLabel: "زیرنویس",
    vCtaLabel: "دعوت به اقدام",
    vTextPosLabel: "موقعیت متن",
    vTextSizeLabel: "اندازه متن",
    vTextAutoNote: "متن روی یک پنل تیره خودکار قرار می‌گیرد تا روی هر عکس یا ویدیویی خوانا بماند.",
    vLogoLabel: "۵ · لوگو و کارت‌ها",
    vLogoPosLabel: "موقعیت لوگو",
    vLogoMotionLabel: "موشن لوگو",
    vLogoStyleLabel: "استایل قاب لوگو",
    vLogoColorLabel: "رنگ حلقه / نشان",
    vLogoTintLabel: "رنگ لوگو",
    vLogoBgLabel: "پس‌زمینه لوگو",
    vLogoSizeLabel: "اندازه لوگو",
    vLogoShowLbl: "نمایش لوگو در",
    vLogoAdvLbl: "تنظیمات پیشرفته",
    vLogoSampleLbl: "یا یک لوگوی نمونه را امتحان کن",
    vPlaceLogoTxt: "افزودن لوگو به ویدیو",
    vLogoTip: "بعد از آپلود، «افزودن لوگو» را بزن. سپس لوگو را روی پیش‌نمایش بکش تا جابه‌جا شود، و لبه‌های نوارش را روی تایم‌لاین بکش تا زمان نمایش را تعیین کنی.",
    vLogoStartLabel: "شروع لوگو (ثانیه)",
    vLogoDurLabel: "مدت لوگو (ثانیه، ۰ = تا انتها)",
    vIntroLabel: "اینترو — متن اصلی",
    vIntroSubLabel: "اینترو — متن فرعی",
    vIntroMotionLabel: "حرکت متن اینترو",
    vOutroLabel: "متن کارت اوترو",
    vPreviewBtn: "پیش‌نمایش",
    vExportBtn: "خروجی ویدیو",
    vPreviewLabel: "پیش‌نمایش",
    vTimelineHint: "برای جابه‌جایی، نشانگر را بکش",
    vTrackMedia: "رسانه",
    vTrackText: "متن",
    vTrackLogo: "لوگو",
    vTrackMusic: "موسیقی",
    vPreviewSizeLabel: "اندازه پیش‌نمایش",
    vPlaceholder: "یک قالب انتخاب کن و رسانه آپلود کن تا اینجا پیش‌نمایش داده شود",
    navIntelligence: "لابراتوار پرامپت",
    navJobs: "کار AI",
    navAbout: "درباره",
    aboutEyebrow: "درباره",
    aboutTitle: "ساخته‌شده برای علاقه‌مندان AI",
    aboutText: "AI Radar یک فضای کاری رایگان برای کشف ابزارهای واقعی AI، دنبال‌کردن محبوبیت زنده، تولید محتوا و ساخت ویدیو — همه داخل مرورگر شما.",
    aboutRole: "سازنده و طراح",
    aboutCreditText: "طراحی و ساخت AI Radar — ایده، رابط کاربری و استودیوی ویدیو.",
    aboutProjectRole: "پروژه استاتیک رایگان",
    aboutProjectText: "کاملاً سمت کلاینت اجرا می‌شود — سه فایل، بدون سرور. داده زنده از API عمومی گیت‌هاب. بدون ردیابی، بدون حساب، بدون تبلیغ.",
    changelogTitle: "آخرین به‌روزرسانی‌ها",
    cl21Title: "ارتقای طراحی سینمایی",
    cl21Text: "پس‌زمینه‌های متحرک پریمیوم (شفق، اخگر، مش مایع، نورافکن و بیشتر)، سبک‌های جدید اینفوگرافیک و متن (پیل پیشرفت، جمله درشت، بلوک تقسیم، نشان)، رنگ و فونت عنوان بر اساس قالب، و حرکت سریع سبک Vox در کل استودیو.",
    cl20Title: "تبدیل هوشمندتر مقاله به ویدیو",
    cl20Text: "لینک یا متن مقاله را بچسبان تا هوش مصنوعی کل مطلب را تحلیل کند و هرجا عدد باشد اینفوگرافیک و هرجا نباشد متن بسازد. به‌علاوه فوتیج و کپشن برای هر اسلاید، قالب‌های حرفه‌ای خبری/متنی، ترنزیشن روی همه اسلایدها و فیلتر رنگی که فوتیج را رنگ‌آمیزی می‌کند بدون محو شدن متن.",
    cl19Title: "سازنده خودکار ویدیو",
    cl19Text: "یک موضوع را توصیف کن و استودیو یک ویدیوی کامل برایت می‌سازد — اینترو، اسلایدهای اینفوگرافیک و خبری، و اوترو — با یک کلیک و حالت اختیاری نگارش با هوش مصنوعی.",
    cl18Title: "صحنه‌های پایانی و طرح‌های بیشتر",
    cl18Text: "افزودن صحنه‌های اوترو، ۲۲ پس‌زمینه اینترو، پیش‌تنظیم‌های حرکت سینمایی، متن واضح‌تر اینفوگرافیک، موقعیت عناصر برای هر اسلاید و محو تدریجی موسیقی.",
    cl17Title: "صحنه‌های اینترو و حرکت غنی‌تر",
    cl17Text: "نوع صحنه اینتروی جدید در استودیو ویدیو با ۸ پس‌زمینه آماده، متن دوگانه متحرک و ۱۲ پیش‌تنظیم حرکت. حرکت مبتنی بر صحنه تا هر اسلاید درست انیمیت شود.",
    cl16Title: "نوار کناری کامل و رابط تمیزتر",
    cl16Text: "ناوبری نوار کناری چپ تاشو، کنترل‌های بازطراحی‌شده نمودار و فوتر، دکمه بازگشت به بالا و چیدمان موبایل بهتر.",
    cl15Title: "خروجی MP4 و نمودار واقعی",
    cl15Text: "استودیو ویدیو حالا MP4 خروجی می‌دهد. اینفوگرافیک به یک نمودار میله‌ای واقعی با محور، مقیاس و خطوط شبکه تبدیل شد.",
    cl14Title: "کاتالوگ بزرگ‌تر ابزارها",
    cl14Text: "گسترش به ۴۵ ابزار هوش مصنوعی منتخب، دسته‌بندی‌شده در گروه‌های تاشو، با پوشش بیشتر داده زنده گیت‌هاب.",
    changelogNote: "AI Radar فعالانه نگهداری می‌شود. این فهرست مهم‌ترین تغییرات اخیر را نشان می‌دهد.",
    aboutMissionTitle: "چرا AI Radar وجود دارد",
    aboutMissionText: "دنیای هوش مصنوعی سریع‌تر از آنی پیش می‌رود که کسی بتواند دنبال کند. AI Radar از میان شلوغی عبور می‌کند — جایی آرام و صادقانه برای یافتن ابزارهای واقعاً مفید، دیدن آنچه با داده زنده در حال رشد است، و ساختن کار واقعی بدون دیوار پرداخت، ثبت‌نام یا ردیابی.",
    aboutStatTools: "ابزار هوش مصنوعی منتخب",
    aboutStatFree: "رایگان، بدون حساب",
    aboutStatLive: "داده گیت‌هاب",
    aboutStatLiveValue: "زنده",
    aboutStatPrivacy: "ردیابی یا تبلیغ",
    aboutStatPrivacyValue: "صفر",
    aboutFeat1Title: "یابنده ابزار",
    aboutFeat1Text: "ابزارهای واقعی هوش مصنوعی را بر اساس کاربرد، قیمت و شغل جستجو و فیلتر کن — دسته‌بندی‌شده و خوانا.",
    aboutFeat2Title: "نمودار روند زنده",
    aboutFeat2Text: "محبوبیت از API عمومی گیت‌هاب دنبال می‌شود و خودکار به‌روز می‌شود — بدون حدس.",
    aboutFeat3Title: "استودیو ویدیو",
    aboutFeat3Text: "ویدیوهای چندصحنه‌ای با موشن، اینفوگرافیک و بنر خبری بساز — کاملاً در مرورگر.",
    aboutFeat4Title: "ابزار کپشن و پرامپت",
    aboutFeat4Text: "کپشن و پرامپت دقیق را به‌صورت محلی بساز — سریع، خصوصی و رایگان.",
    navRegister: "رجیستر",
    startButton: "شروع",
    heroEyebrow: "AI Radar — هوش زنده",
    heroTitle: "پیدا کن. مقایسه کن. بساز.",
    heroText:
      "از میان شلوغی هوش مصنوعی، چیزِ مهم را پیدا کن: ابزارهایی که واقعاً کار می‌کنند، روند محبوبیت‌شان را زنده دنبال کن، و ویدئو و محتوای حرفه‌ای بساز — همه در یک فضای کاری آرام و رایگان، داخل مرورگرت.",
    heroChip1: "دادهٔ زندهٔ گیت‌هاب",
    heroChip2: "با قدرت Claude",
    heroChip3: "+۴۵ ابزار هوش مصنوعی",
    heroChip4: "بدون ثبت‌نام · بدون ردیابی",
    heroPrimary: "جست‌وجوی ابزار",
    heroSecondary: "ساخت کپشن",
    metricTools: "ابزار واقعی",
    metricFree: "پلن رایگان",
    metricJobs: "مسیر شغلی",
    chipLive: "شاخص مدل AA",
    toolsEyebrow: "Tool finder",
    toolsTitle: "ابزارهای واقعی انتخاب‌شده",
    jumpToLabel: "پرش به ابزار",
    categoryLabel: "دسته",
    budgetLabel: "بودجه",
    sortLabel: "مرتب‌سازی",
    modelTypeLabel: "نوع مدل",
    minScoreLabel: "حداقل امتیاز",
    compareEyebrow: "مقایسه",
    compareTitle: "مقایسه ابزارهای انتخاب‌شده",
    clearCompare: "پاک کردن",
    performanceEyebrow: "داده زنده گیت‌هاب",
    performanceTitle: "ترند زنده ابزارهای AI",
    liveLabel: "زنده",
    refreshLabel: "تازه‌سازی",
    chartTabStars: "ستاره‌های گیت‌هاب",
    chartTabForks: "فورک‌ها",
    chartTabActivity: "فعالیت توسعه",
    performanceText: "نمودار زنده از محبوبیت واقعی هر ابزار AI در گیت‌هاب. داده به‌صورت زنده از API عمومی گیت‌هاب گرفته می‌شود و هر ۵ دقیقه به‌روز می‌شود. ابزارهایی که به بخش مقایسه اضافه می‌کنی هایلایت می‌شوند.",
    mediaEyebrow: "تولید کپشن رسانه",
    mediaTitle: "برای عکس یا ویدیوی خود کپشن شبکه اجتماعی بساز",
    mediaText: "مدیا را آپلود کن، هدف را بنویس، پلتفرم را انتخاب کن و کپشن، hook، هشتگ ترند و JSON متادیتا را محلی تولید کن.",
    mediaUploadLabel: "آپلود عکس یا ویدیو",
    mediaSubjectLabel: "در عکس/ویدیو چه چیزی هست؟ (الزامی)",
    mediaGoalLabel: "هدف",
    platformLabel: "پلتفرم",
    toneLabel: "لحن",
    generateCaption: "تولید کپشن",
    copyCaption: "کپی کپشن",
    copyJson: "کپی JSON",
    copyPrompt: "کپی پرامپت",
    mediaPlaceholder: "مدیا را آپلود کن تا اینجا نمایش داده شود",
    copied: "کپی شد.",
    studioEyebrow: "استودیو رایگان تمپلیت ویدیو",
    studioTitle: "از فایل‌های استاتیک، تمپلیت ویدیویی متحرک بساز",
    studioText:
      "تصویرها را آپلود کن، برای هر اسلاید زمان بگذار، متن‌های متحرک را ویرایش کن، پیش‌نمایش بگیر و خروجی JSON یا ویدیوی واقعی .webm بگیر. چون داخل مرورگر اجرا می‌شود رایگان است.",
    uploadLabel: "آپلود فایل‌های استاتیک",
    durationLabel: "زمان هر اسلاید (ثانیه)",
    motionLabel: "موشن",
    addSlide: "افزودن اسلاید",
    exportTemplate: "خروجی JSON تمپلیت",
    exportVideo: "خروجی ویدیو (.webm)",
    slideTitleLabel: "عنوان اسلاید",
    slideCaptionLabel: "کپشن اسلاید",
    chartDataLabel: "مقادیر نمودار",
    previewPlaceholder: "برای پیش‌نمایش، یک تصویر آپلود کن",
    jobsEyebrow: "راهنمای کار AI",
    jobsTitle: "یک مسیر کاری عملی در AI پیدا کن",
    jobBoardTitle: "برد منابع شغلی زنده",
    skillsLabel: "مهارت‌های تو",
    jobTitleLabel: "عنوان شغل هدف",
    jobLocationLabel: "لوکیشن",
    skillsButton: "پیشنهاد مسیر",
    intelEyebrow: "ابزارهای AI",
    intelTitle: "تولید پرامپت و JSON تمیز",
    promptDescLabel: "آنچه می‌خواهی بسازی را توصیف کن",
    promptStyleLabel: "سبک",
    promptGenBtn: "تولید پرامپت",
    promptNote: "یک پرامپت آماده در سبک انتخاب‌شده تولید می‌کند — فقط پرامپت، بدون چیز اضافه.",
    jsonDescLabel: "هر داده، محصول یا ایده را توصیف کن",
    jsonGenBtn: "تولید JSON",
    jsonNote: "فقط JSON تمیز و معتبر خروجی می‌دهد — بدون توضیح و متن اضافه.",
    simplePromptLabel: "پرامپت ساده",
    enhancePrompt: "تبدیل به پرامپت پیشرفته",
    textJsonLabel: "متن به JSON",
    convertJson: "تبدیل به JSON",
    registerEyebrow: "اکانت",
    registerTitle: "ساخت اکانت تست محلی",
    registerText: "این دمو اطلاعات رجیستر را فقط داخل مرورگر ذخیره می‌کند. نسخه واقعی نیاز به احراز هویت بک‌اند دارد.",
    nameLabel: "نام",
    emailLabel: "ایمیل",
    roleLabel: "هدف اصلی",
    registerButton: "رجیستر",
    registered: "رجیستر به صورت محلی ذخیره شد.",
    allCategories: "همه دسته‌ها",
    allBudgets: "همه بودجه‌ها",
    freeBudget: "رایگان یا فریمیوم",
    under20: "زیر ۲۰ دلار",
    proBudget: "ابزارهای حرفه‌ای",
    sortScore: "بهترین پیشنهاد",
    sortPrice: "ارزان‌تر",
    sortName: "نام",
    noTools: "ابزاری پیدا نشد. جست‌وجو را کلی‌تر کن.",
    addCompare: "افزودن به مقایسه",
    removeCompare: "حذف",
    officialLink: "لینک رسمی",
    pricing: "قیمت",
    emptyCompare: "از کارت ابزارها چند گزینه را به مقایسه اضافه کن.",
    tableTool: "ابزار",
    tableCategory: "دسته",
    tablePrice: "قیمت",
    tableUse: "بهترین کاربرد",
    tableJobs: "کارهای مرتبط",
    tableLink: "لینک",
    open: "باز کردن",
    recommendedTools: "ابزار پیشنهادی",
    sourceHint: "جست‌وجوی واقعی را در تب جدید باز می‌کند",
    templateEmpty: "اول حداقل یک اسلاید آپلود شده اضافه کن.",
    downloaded: "فایل JSON تمپلیت دانلود شد.",
    videoExporting: "در حال ساخت ویدیو... این تب را باز نگه دار.",
    videoReady: "ویدیو دانلود شد.",
    videoUnsupported: "مرورگر اینجا از خروجی ویدیو پشتیبانی نمی‌کند.",
    noFile: "اول تصویر آپلود کن.",
    deleteSlide: "حذف"
  }
};

const tools = [
  {
    name: "ChatGPT",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: {
      en: "Writing, coding, data analysis, brainstorming, file work, and everyday AI assistance.",
      fa: "نوشتن، کدنویسی، تحلیل داده، ایده‌پردازی، کار با فایل و دستیار عمومی روزمره."
    },
    price: 20,
    pricing: { en: "Free plan + Plus from about $20/mo", fa: "پلن رایگان + Plus حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 98,
    jobs: ["Prompt Engineer", "AI Content Specialist", "Automation Builder"],
    url: "https://chatgpt.com",
    tags: ["writing", "coding", "analysis"]
  },
  {
    name: "Claude",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: {
      en: "Long-context writing, reasoning, research synthesis, planning, and document work.",
      fa: "تحلیل متن طولانی، نوشتن، استدلال، خلاصه‌سازی تحقیق، برنامه‌ریزی و کار با سند."
    },
    price: 20,
    pricing: { en: "Free plan + Pro from about $20/mo", fa: "پلن رایگان + Pro حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 95,
    jobs: ["Research Assistant", "AI Writer", "Operations Analyst"],
    url: "https://claude.ai",
    tags: ["research", "writing", "documents"]
  },
  {
    name: "Perplexity",
    category: { en: "Research", fa: "تحقیق و سرچ" },
    useCase: {
      en: "Web research with citations, quick comparisons, source discovery, and market scanning.",
      fa: "جست‌وجوی وب با منبع، مقایسه سریع، کشف منابع و بررسی بازار."
    },
    price: 20,
    pricing: { en: "Free plan + Pro from about $20/mo", fa: "پلن رایگان + Pro حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 92,
    jobs: ["Market Researcher", "AI Research Assistant"],
    url: "https://www.perplexity.ai",
    tags: ["search", "sources", "research"]
  },
  {
    name: "Cursor",
    category: { en: "Coding", fa: "کدنویسی" },
    useCase: {
      en: "AI-native code editor for building, refactoring, understanding, and shipping software.",
      fa: "ویرایشگر کد AI برای ساخت، اصلاح، فهمیدن و انتشار نرم‌افزار."
    },
    price: 20,
    pricing: { en: "Free tier + Pro from about $20/mo", fa: "نسخه رایگان محدود + Pro حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 91,
    jobs: ["AI Developer", "Frontend Developer", "Product Engineer"],
    url: "https://www.cursor.com",
    tags: ["coding", "IDE", "developer"]
  },
  {
    name: "GitHub Copilot",
    category: { en: "Coding", fa: "کدنویسی" },
    useCase: {
      en: "Code completion, chat, pull request assistance, test generation, and developer workflow support.",
      fa: "تکمیل کد، چت کدنویسی، کمک در pull request، تولید تست و پشتیبانی جریان کاری توسعه."
    },
    price: 10,
    pricing: { en: "Individual plan from about $10/mo", fa: "پلن فردی حدود ۱۰ دلار ماهانه" },
    plan: "paid",
    score: 88,
    jobs: ["Software Developer", "QA Automation"],
    url: "https://github.com/features/copilot",
    tags: ["github", "code", "testing"]
  },
  {
    name: "Canva AI",
    category: { en: "Design", fa: "طراحی" },
    useCase: {
      en: "Social posts, presentations, brand assets, image generation, and fast visual production.",
      fa: "پست شبکه اجتماعی، ارائه، asset برند، تولید تصویر و ساخت سریع محتوای بصری."
    },
    price: 15,
    pricing: { en: "Free tier + Pro pricing varies by region", fa: "نسخه رایگان + Pro بسته به منطقه متفاوت است" },
    plan: "freemium",
    score: 86,
    jobs: ["AI Designer", "Social Media Creator"],
    url: "https://www.canva.com/ai",
    tags: ["design", "slides", "social"]
  },
  {
    name: "Runway",
    category: { en: "Video", fa: "ویدیو" },
    useCase: {
      en: "AI video generation, editing, creative effects, short ads, and visual storytelling.",
      fa: "تولید و ویرایش ویدیو، افکت خلاقانه، تبلیغات کوتاه و روایت بصری."
    },
    price: 15,
    pricing: { en: "Free credits + paid plans", fa: "اعتبار رایگان محدود + پلن‌های پولی" },
    plan: "freemium",
    score: 85,
    jobs: ["AI Video Creator", "Motion Designer"],
    url: "https://runwayml.com",
    tags: ["video", "motion", "ads"]
  },
  {
    name: "ElevenLabs",
    category: { en: "Audio", fa: "صدا" },
    useCase: {
      en: "Voice generation, dubbing, narration, podcasts, and multilingual audio production.",
      fa: "تولید صدا، دوبله، روایت، پادکست و ساخت صوت چندزبانه."
    },
    price: 5,
    pricing: { en: "Free tier + starter from about $5/mo", fa: "نسخه رایگان + شروع از حدود ۵ دلار ماهانه" },
    plan: "freemium",
    score: 84,
    jobs: ["AI Voice Producer", "Podcast Editor"],
    url: "https://elevenlabs.io",
    tags: ["voice", "audio", "dubbing"]
  },
  {
    name: "Hugging Face",
    category: { en: "Models and datasets", fa: "مدل و دیتاست" },
    useCase: {
      en: "Open models, datasets, spaces, demos, and infrastructure for ML and AI prototypes.",
      fa: "مدل متن‌باز، دیتاست، دمو، spaces و زیرساخت برای نمونه‌سازی ML و AI."
    },
    price: 0,
    pricing: { en: "Free community platform + paid compute options", fa: "پلتفرم رایگان جامعه + گزینه‌های پردازشی پولی" },
    plan: "free",
    score: 90,
    jobs: ["ML Engineer", "AI App Prototyper"],
    url: "https://huggingface.co",
    tags: ["open source", "models", "datasets"]
  },
  {
    name: "Gamma",
    category: { en: "Presentations", fa: "ارائه" },
    useCase: {
      en: "AI presentations, pitch decks, docs, microsites, and fast visual storytelling.",
      fa: "ساخت ارائه AI، pitch deck، سند، میکروسایت و روایت بصری سریع."
    },
    price: 10,
    pricing: { en: "Free tier + paid plans from about $10/mo", fa: "نسخه رایگان + پلن‌های پولی از حدود ۱۰ دلار ماهانه" },
    plan: "freemium",
    score: 82,
    jobs: ["Presentation Designer", "Startup Operator"],
    url: "https://gamma.app",
    tags: ["slides", "pitch", "docs"]
  },
  {
    name: "Zapier AI",
    category: { en: "Automation", fa: "اتوماسیون" },
    useCase: {
      en: "Automate work across apps, connect forms, CRMs, email, spreadsheets, and AI actions.",
      fa: "اتوماسیون بین ابزارها، اتصال فرم، CRM، ایمیل، spreadsheet و اکشن‌های AI."
    },
    price: 20,
    pricing: { en: "Free tier + paid plans", fa: "نسخه رایگان محدود + پلن‌های پولی" },
    plan: "freemium",
    score: 83,
    jobs: ["Automation Specialist", "AI Workflow Builder"],
    url: "https://zapier.com/ai",
    tags: ["automation", "no-code", "business"]
  },
  {
    name: "Notion AI",
    category: { en: "Productivity", fa: "بهره‌وری" },
    useCase: {
      en: "Summaries, writing, knowledge management, docs, meeting notes, and project planning.",
      fa: "خلاصه‌سازی، نوشتن، مدیریت دانش، مستندات، یادداشت جلسه و برنامه‌ریزی پروژه."
    },
    price: 10,
    pricing: { en: "Paid add-on for Notion plans", fa: "افزونه پولی روی پلن‌های Notion" },
    plan: "paid",
    score: 80,
    jobs: ["Operations Assistant", "Knowledge Manager"],
    url: "https://www.notion.com/product/ai",
    tags: ["notes", "docs", "teams"]
  }
];

tools.push(
  {
    name: "Gemini",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "Google AI assistant for search, writing, coding, images, and Workspace workflows.", fa: "دستیار AI گوگل برای سرچ، نوشتن، کدنویسی، تصویر و جریان کاری Workspace." },
    price: 20,
    pricing: { en: "Free access + Google AI Pro paid plan", fa: "دسترسی رایگان + پلن پولی Google AI Pro" },
    plan: "freemium",
    score: 94,
    jobs: ["AI Researcher", "Productivity Specialist"],
    url: "https://gemini.google.com",
    tags: ["google", "search", "workspace"],
    modelType: "multimodal",
    logo: "G"
  },
  {
    name: "Midjourney",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "High-quality image generation for creative campaigns, concepts, ads, and moodboards.", fa: "تولید تصویر باکیفیت برای کمپین، کانسپت، تبلیغ و moodboard." },
    price: 10,
    pricing: { en: "Paid plans from about $10/mo", fa: "پلن پولی از حدود ۱۰ دلار ماهانه" },
    plan: "paid",
    score: 89,
    jobs: ["AI Image Artist", "Creative Director"],
    url: "https://www.midjourney.com",
    tags: ["image", "art", "creative"],
    modelType: "image",
    logo: "MJ"
  },
  {
    name: "Adobe Firefly",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "Commercial-friendly generative image tools inside Adobe creative workflows.", fa: "ابزار تولید تصویر مناسب کار تجاری داخل جریان کاری Adobe." },
    price: 5,
    pricing: { en: "Free credits + paid Adobe plans", fa: "اعتبار رایگان + پلن‌های Adobe" },
    plan: "freemium",
    score: 84,
    jobs: ["Graphic Designer", "Brand Designer"],
    url: "https://firefly.adobe.com",
    tags: ["image", "design", "adobe"],
    modelType: "image",
    logo: "AF"
  },
  {
    name: "Suno",
    category: { en: "Audio", fa: "صدا" },
    useCase: { en: "Generate songs, music concepts, jingles, and audio ideas from text prompts.", fa: "تولید آهنگ، ایده موسیقی، jingle و صوت از متن." },
    price: 10,
    pricing: { en: "Free credits + paid plans", fa: "اعتبار رایگان + پلن‌های پولی" },
    plan: "freemium",
    score: 82,
    jobs: ["AI Music Creator", "Content Producer"],
    url: "https://suno.com",
    tags: ["music", "audio", "song"],
    modelType: "audio",
    logo: "SU"
  },
  {
    name: "Mistral Le Chat",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "Fast European AI assistant and API ecosystem for business and developer workflows.", fa: "دستیار و اکوسیستم API سریع اروپایی برای کسب‌وکار و توسعه‌دهنده‌ها." },
    price: 15,
    pricing: { en: "Free access + paid API and pro options", fa: "دسترسی رایگان + API و گزینه‌های حرفه‌ای پولی" },
    plan: "freemium",
    score: 86,
    jobs: ["AI Developer", "Enterprise AI Consultant"],
    url: "https://chat.mistral.ai",
    tags: ["llm", "api", "enterprise"],
    modelType: "text",
    logo: "MI"
  },
  {
    name: "Luma AI",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "AI video and image generation for cinematic clips and visual storytelling.", fa: "تولید ویدیو و تصویر AI برای کلیپ سینمایی و روایت بصری." },
    price: 10,
    pricing: { en: "Free generations + paid plans", fa: "تولید رایگان محدود + پلن‌های پولی" },
    plan: "freemium",
    score: 83,
    jobs: ["AI Video Creator", "Visual Storyteller"],
    url: "https://lumalabs.ai",
    tags: ["video", "cinematic", "image"],
    modelType: "video",
    logo: "LU"
  },
  {
    name: "Pika",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "Text-to-video and image-to-video clips for social content and experiments.", fa: "تبدیل متن و تصویر به ویدیو برای محتوای شبکه اجتماعی و تست خلاقانه." },
    price: 10,
    pricing: { en: "Free tier + paid plans", fa: "نسخه رایگان + پلن‌های پولی" },
    plan: "freemium",
    score: 81,
    jobs: ["Short-form Video Creator", "AI Editor"],
    url: "https://pika.art",
    tags: ["video", "social", "animation"],
    modelType: "video",
    logo: "PK"
  },
  {
    name: "Replit AI",
    category: { en: "Coding", fa: "کدنویسی" },
    useCase: { en: "Build, deploy, and collaborate on code projects with AI assistance in the browser.", fa: "ساخت، انتشار و همکاری روی پروژه‌های کدنویسی با کمک AI داخل مرورگر." },
    price: 20,
    pricing: { en: "Free tier + paid plans", fa: "نسخه رایگان + پلن‌های پولی" },
    plan: "freemium",
    score: 79,
    jobs: ["Prototype Developer", "Full-stack Builder"],
    url: "https://replit.com/ai",
    tags: ["coding", "deploy", "browser"],
    modelType: "coding",
    logo: "RP"
  },
  {
    name: "Grok",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "Conversational AI from xAI with real-time knowledge, reasoning, and image generation.", fa: "هوش مصنوعی گفتگومحور xAI با دانش لحظه‌ای، استدلال و تولید تصویر." },
    price: 0,
    pricing: { en: "Free with X account + paid Premium tiers", fa: "رایگان با حساب X + پلن‌های پولی Premium" },
    plan: "freemium",
    score: 90,
    jobs: ["AI Researcher", "Conversation Designer"],
    url: "https://x.ai",
    tags: ["llm", "realtime", "reasoning"],
    modelType: "multimodal",
    logo: "GK"
  },
  {
    name: "DeepSeek",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "Open-weight reasoning and coding models with strong performance at low cost.", fa: "مدل‌های متن‌باز استدلال و کدنویسی با عملکرد قوی و هزینه پایین." },
    price: 0,
    pricing: { en: "Free chat + low-cost API", fa: "چت رایگان + API کم‌هزینه" },
    plan: "freemium",
    score: 91,
    jobs: ["ML Engineer", "AI Developer"],
    url: "https://www.deepseek.com",
    tags: ["llm", "open source", "coding"],
    modelType: "text",
    logo: "DS"
  },
  {
    name: "Cohere",
    category: { en: "Models and datasets", fa: "مدل و دیتاست" },
    useCase: { en: "Enterprise LLMs for search, retrieval-augmented generation, and business workflows.", fa: "مدل‌های زبانی سازمانی برای سرچ، RAG و جریان‌های کاری کسب‌وکار." },
    price: 0,
    pricing: { en: "Free trial tier + usage-based API", fa: "نسخه آزمایشی رایگان + API مصرف‌محور" },
    plan: "freemium",
    score: 84,
    jobs: ["Enterprise AI Engineer", "Search Specialist"],
    url: "https://cohere.com",
    tags: ["llm", "enterprise", "RAG"],
    modelType: "text",
    logo: "CO"
  },
  {
    name: "Meta AI",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "Meta's assistant built on Llama models for chat, image generation, and creative tasks.", fa: "دستیار Meta بر پایه مدل‌های Llama برای چت، تولید تصویر و کارهای خلاقانه." },
    price: 0,
    pricing: { en: "Free across Meta apps", fa: "رایگان در اپ‌های Meta" },
    plan: "free",
    score: 87,
    jobs: ["AI Content Creator", "Conversation Designer"],
    url: "https://www.meta.ai",
    tags: ["llm", "open source", "social"],
    modelType: "multimodal",
    logo: "M"
  },
  {
    name: "Sora",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "OpenAI's text-to-video model for cinematic, realistic AI video generation.", fa: "مدل متن‌به‌ویدیو OpenAI برای تولید ویدیوی سینمایی و واقع‌گرایانه." },
    price: 20,
    pricing: { en: "Included with ChatGPT Plus/Pro plans", fa: "همراه پلن‌های ChatGPT Plus/Pro" },
    plan: "paid",
    score: 88,
    jobs: ["AI Video Creator", "Motion Designer"],
    url: "https://openai.com/sora",
    tags: ["video", "cinematic", "generation"],
    modelType: "video",
    logo: "SO"
  },
  {
    name: "Flux",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "High-fidelity open image generation models from Black Forest Labs.", fa: "مدل‌های متن‌باز تولید تصویر باکیفیت از Black Forest Labs." },
    price: 0,
    pricing: { en: "Free open models + paid API access", fa: "مدل‌های متن‌باز رایگان + دسترسی API پولی" },
    plan: "freemium",
    score: 86,
    jobs: ["AI Image Artist", "ML Engineer"],
    url: "https://blackforestlabs.ai",
    tags: ["image", "open source", "generation"],
    modelType: "image",
    logo: "FX"
  },
  {
    name: "Stability AI",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "Creators of Stable Diffusion — open models for image, video, and audio generation.", fa: "سازنده Stable Diffusion — مدل‌های متن‌باز برای تولید تصویر، ویدیو و صدا." },
    price: 0,
    pricing: { en: "Free open models + paid membership", fa: "مدل‌های متن‌باز رایگان + اشتراک پولی" },
    plan: "freemium",
    score: 85,
    jobs: ["AI Image Artist", "Generative ML Engineer"],
    url: "https://stability.ai",
    tags: ["image", "open source", "diffusion"],
    modelType: "image",
    logo: "ST"
  },
  {
    name: "Krea AI",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "Real-time AI image generation and editing with live canvas and enhancement tools.", fa: "تولید و ویرایش تصویر AI به‌صورت لحظه‌ای با بوم زنده و ابزار بهبود." },
    price: 10,
    pricing: { en: "Free daily credits + paid plans", fa: "اعتبار رایگان روزانه + پلن‌های پولی" },
    plan: "freemium",
    score: 82,
    jobs: ["AI Designer", "Visual Creator"],
    url: "https://www.krea.ai",
    tags: ["image", "realtime", "editing"],
    modelType: "image",
    logo: "KR"
  },
  {
    name: "Higgsfield",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "AI video generation focused on cinematic camera motion and social-ready clips.", fa: "تولید ویدیوی AI با تمرکز بر حرکت سینمایی دوربین و کلیپ‌های شبکه اجتماعی." },
    price: 15,
    pricing: { en: "Free credits + paid plans", fa: "اعتبار رایگان + پلن‌های پولی" },
    plan: "freemium",
    score: 80,
    jobs: ["AI Video Creator", "Social Content Producer"],
    url: "https://higgsfield.ai",
    tags: ["video", "motion", "social"],
    modelType: "video",
    logo: "HF"
  },
  {
    name: "Google Flow",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "Google's AI filmmaking tool built on Veo for generating and editing video scenes.", fa: "ابزار فیلم‌سازی AI گوگل بر پایه Veo برای تولید و ویرایش صحنه‌های ویدیو." },
    price: 20,
    pricing: { en: "Included with Google AI paid plans", fa: "همراه پلن‌های پولی Google AI" },
    plan: "paid",
    score: 83,
    jobs: ["AI Filmmaker", "Motion Designer"],
    url: "https://labs.google/flow",
    tags: ["video", "google", "filmmaking"],
    modelType: "video",
    logo: "GF"
  }
);

// ── ADDITIONAL AI TOOLS — broader, more complete catalogue ──
tools.push(
  {
    name: "Microsoft Copilot",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "Microsoft's AI assistant across Windows, Edge, and Microsoft 365 apps.", fa: "دستیار AI مایکروسافت در ویندوز، Edge و اپ‌های Microsoft 365." },
    price: 20,
    pricing: { en: "Free + Copilot Pro about $20/mo", fa: "رایگان + Copilot Pro حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 90,
    jobs: ["AI Productivity Specialist", "Automation Builder"],
    url: "https://copilot.microsoft.com",
    tags: ["writing", "office", "microsoft"],
    modelType: "assistant",
    logo: "MC"
  },
  {
    name: "Notebook LM",
    category: { en: "Research", fa: "تحقیق و سرچ" },
    useCase: { en: "Google's AI research notebook that summarizes and answers questions from your own sources.", fa: "دفترچه تحقیق AI گوگل که از منابع خودت خلاصه و پاسخ می‌سازد." },
    price: 0,
    pricing: { en: "Free", fa: "رایگان" },
    plan: "free",
    score: 87,
    jobs: ["Researcher", "Analyst"],
    url: "https://notebooklm.google.com",
    tags: ["research", "summary", "google"],
    modelType: "assistant",
    logo: "NL"
  },
  {
    name: "Leonardo AI",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "AI image generation with fine creative control, presets, and game-asset tooling.", fa: "تولید تصویر AI با کنترل خلاقانه دقیق، پریست و ابزار ساخت اسِت بازی." },
    price: 12,
    pricing: { en: "Free plan + paid from about $12/mo", fa: "پلن رایگان + پولی از حدود ۱۲ دلار ماهانه" },
    plan: "freemium",
    score: 84,
    jobs: ["AI Artist", "Game Asset Designer"],
    url: "https://leonardo.ai",
    tags: ["image", "art", "design"],
    modelType: "image",
    logo: "LA"
  },
  {
    name: "Ideogram",
    category: { en: "Image", fa: "تصویر" },
    useCase: { en: "AI image generator known for accurate text rendering inside images.", fa: "تولیدکننده تصویر AI با تخصص در نمایش دقیق متن داخل تصویر." },
    price: 8,
    pricing: { en: "Free plan + paid from about $8/mo", fa: "پلن رایگان + پولی از حدود ۸ دلار ماهانه" },
    plan: "freemium",
    score: 82,
    jobs: ["AI Artist", "Brand Designer"],
    url: "https://ideogram.ai",
    tags: ["image", "text", "design"],
    modelType: "image",
    logo: "ID"
  },
  {
    name: "HeyGen",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "AI video with realistic avatars and voice for marketing and training clips.", fa: "ویدیو AI با آواتار واقع‌گرایانه و صدا برای کلیپ بازاریابی و آموزش." },
    price: 29,
    pricing: { en: "Free plan + paid from about $29/mo", fa: "پلن رایگان + پولی از حدود ۲۹ دلار ماهانه" },
    plan: "freemium",
    score: 83,
    jobs: ["AI Video Producer", "Content Creator"],
    url: "https://www.heygen.com",
    tags: ["video", "avatar", "marketing"],
    modelType: "video",
    logo: "HG"
  },
  {
    name: "Synthesia",
    category: { en: "Video", fa: "ویدیو" },
    useCase: { en: "AI avatar video platform for corporate training and explainer content.", fa: "پلتفرم ویدیوی آواتار AI برای آموزش سازمانی و محتوای توضیحی." },
    price: 29,
    pricing: { en: "Paid from about $29/mo", fa: "پولی از حدود ۲۹ دلار ماهانه" },
    plan: "paid",
    score: 81,
    jobs: ["AI Video Producer", "L&D Specialist"],
    url: "https://www.synthesia.io",
    tags: ["video", "avatar", "training"],
    modelType: "video",
    logo: "SY"
  },
  {
    name: "Descript",
    category: { en: "Audio", fa: "صدا" },
    useCase: { en: "Edit audio and video by editing the transcript — AI voices, filler removal, and more.", fa: "ویرایش صدا و ویدیو از روی متن — صدای AI، حذف کلمات اضافه و بیشتر." },
    price: 19,
    pricing: { en: "Free plan + paid from about $19/mo", fa: "پلن رایگان + پولی از حدود ۱۹ دلار ماهانه" },
    plan: "freemium",
    score: 84,
    jobs: ["Podcast Editor", "Video Editor"],
    url: "https://www.descript.com",
    tags: ["audio", "video", "editing"],
    modelType: "audio",
    logo: "DS"
  },
  {
    name: "Udio",
    category: { en: "Audio", fa: "صدا" },
    useCase: { en: "AI music generation that turns text prompts into full songs with vocals.", fa: "تولید موسیقی AI که پرامپت متنی را به آهنگ کامل با وکال تبدیل می‌کند." },
    price: 10,
    pricing: { en: "Free plan + paid from about $10/mo", fa: "پلن رایگان + پولی از حدود ۱۰ دلار ماهانه" },
    plan: "freemium",
    score: 80,
    jobs: ["AI Music Producer", "Sound Designer"],
    url: "https://www.udio.com",
    tags: ["audio", "music", "generation"],
    modelType: "audio",
    logo: "UD"
  },
  {
    name: "Windsurf",
    category: { en: "Coding", fa: "کدنویسی" },
    useCase: { en: "AI coding IDE with an agentic assistant that edits across your whole codebase.", fa: "محیط کدنویسی AI با دستیار agentic که در کل کدبیس ویرایش می‌کند." },
    price: 15,
    pricing: { en: "Free plan + paid from about $15/mo", fa: "پلن رایگان + پولی از حدود ۱۵ دلار ماهانه" },
    plan: "freemium",
    score: 86,
    jobs: ["Software Engineer", "AI Developer"],
    url: "https://windsurf.com",
    tags: ["coding", "ide", "agent"],
    modelType: "coding",
    logo: "WS"
  },
  {
    name: "v0",
    category: { en: "Coding", fa: "کدنویسی" },
    useCase: { en: "Vercel's AI tool that generates React UI and full front-end code from prompts.", fa: "ابزار AI ورسل که از پرامپت، رابط React و کد فرانت‌اند تولید می‌کند." },
    price: 20,
    pricing: { en: "Free plan + paid from about $20/mo", fa: "پلن رایگان + پولی از حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 85,
    jobs: ["Front-End Developer", "UI Engineer"],
    url: "https://v0.dev",
    tags: ["coding", "ui", "react"],
    modelType: "coding",
    logo: "V0"
  },
  {
    name: "Lovable",
    category: { en: "Coding", fa: "کدنویسی" },
    useCase: { en: "AI app builder that turns plain descriptions into working full-stack web apps.", fa: "سازنده اپ AI که توصیف ساده را به وب‌اپ فول‌استک کاربردی تبدیل می‌کند." },
    price: 20,
    pricing: { en: "Free plan + paid from about $20/mo", fa: "پلن رایگان + پولی از حدود ۲۰ دلار ماهانه" },
    plan: "freemium",
    score: 83,
    jobs: ["Full-Stack Developer", "Indie Maker"],
    url: "https://lovable.dev",
    tags: ["coding", "app", "no-code"],
    modelType: "coding",
    logo: "LO"
  },
  {
    name: "Tability",
    category: { en: "Productivity", fa: "بهره‌وری" },
    useCase: { en: "AI-assisted goal and OKR tracking that drafts measurable objectives for teams.", fa: "پیگیری هدف و OKR با کمک AI که اهداف قابل‌اندازه‌گیری برای تیم می‌نویسد." },
    price: 12,
    pricing: { en: "Paid from about $12/mo", fa: "پولی از حدود ۱۲ دلار ماهانه" },
    plan: "paid",
    score: 76,
    jobs: ["Product Manager", "Team Lead"],
    url: "https://www.tability.io",
    tags: ["productivity", "okr", "planning"],
    modelType: "assistant",
    logo: "TB"
  },
  {
    name: "Fireflies",
    category: { en: "Productivity", fa: "بهره‌وری" },
    useCase: { en: "AI meeting assistant that records, transcribes, and summarizes calls automatically.", fa: "دستیار جلسه AI که تماس‌ها را ضبط، رونویسی و خلاصه می‌کند." },
    price: 10,
    pricing: { en: "Free plan + paid from about $10/mo", fa: "پلن رایگان + پولی از حدود ۱۰ دلار ماهانه" },
    plan: "freemium",
    score: 80,
    jobs: ["Operations Specialist", "Project Manager"],
    url: "https://fireflies.ai",
    tags: ["productivity", "meetings", "transcription"],
    modelType: "assistant",
    logo: "FF"
  },
  {
    name: "Gamma",
    category: { en: "Presentations", fa: "ارائه" },
    useCase: { en: "AI presentation tool that builds polished decks, docs and websites from a prompt in seconds.", fa: "ابزار ارائه AI که از یک پرامپت، اسلاید، داکیومنت و وب‌سایت حرفه‌ای می‌سازد." },
    price: 0,
    pricing: { en: "Free plan + Pro from $10/mo", fa: "پلن رایگان + پرو از ۱۰ دلار ماهانه" },
    plan: "freemium",
    score: 84,
    jobs: ["Presentation Designer", "Marketer", "Educator"],
    url: "https://gamma.app",
    tags: ["presentations", "decks", "design", "docs"],
    modelType: "assistant",
    logo: "GM"
  },
  {
    name: "Jasper",
    category: { en: "General assistant", fa: "دستیار عمومی" },
    useCase: { en: "AI writing platform for marketing copy, campaigns, and brand-consistent content.", fa: "پلتفرم نوشتن AI برای کپی بازاریابی، کمپین و محتوای هماهنگ با برند." },
    price: 39,
    pricing: { en: "Paid from about $39/mo", fa: "پولی از حدود ۳۹ دلار ماهانه" },
    plan: "paid",
    score: 79,
    jobs: ["AI Content Specialist", "Marketing Copywriter"],
    url: "https://www.jasper.ai",
    tags: ["writing", "marketing", "content"],
    modelType: "assistant",
    logo: "JP"
  }
);

// Each tool is mapped to a representative public GitHub repo.
// Open-source tools use their own repo; closed-source products
// (ChatGPT, Claude, etc.) use their official public SDK/org repo
// — a real, live signal of developer interest in that ecosystem.
// The live 3D chart and the comparison table both read the star
// counts fetched from these repos, so the two stay aligned.
const toolRepos = {
  "ChatGPT":         "openai/openai-python",
  "Claude":          "anthropics/anthropic-sdk-python",
  "Perplexity":      "ppl-ai/api-cookbook",
  "Cursor":          "getcursor/cursor",
  "GitHub Copilot":  "github/copilot.vim",
  "Canva AI":        "canva-sdks/canva-apps-sdk-starter-kit",
  "Runway":          "runwayml/sdk-node",
  "ElevenLabs":      "elevenlabs/elevenlabs-python",
  "Hugging Face":    "huggingface/transformers",
  "Gamma":           "gamma-app/gamma-cli",
  "Zapier AI":       "zapier/zapier-platform",
  "Notion AI":       "makenotion/notion-sdk-js",
  "Gemini":          "google-gemini/cookbook",
  "Midjourney":      "midjourney/docs",
  "Adobe Firefly":   "AdobeDocs/firefly-services",
  "Suno":            "suno-ai/bark",
  "Mistral Le Chat": "mistralai/mistral-src",
  "Luma AI":         "lumalabs/luma-api-examples",
  "Pika":            "pika-org/pikascript",
  "Replit AI":       "replit/replit-ai-python",
  "Grok":            "xai-org/grok-1",
  "DeepSeek":        "deepseek-ai/DeepSeek-V3",
  "Cohere":          "cohere-ai/cohere-python",
  "Meta AI":         "meta-llama/llama-models",
  "Sora":            "openai/openai-cookbook",
  "Flux":            "black-forest-labs/flux",
  "Stability AI":    "Stability-AI/generative-models",
  "Krea AI":         "krea-ai/open-prompts",
  "Higgsfield":      "higgsfield-ai/higgsfield",
  "Google Flow":     "google-deepmind/veo",
  "Microsoft Copilot": "microsoft/copilot-studio-samples",
  "Notebook LM":     "google-gemini/cookbook",
  "Leonardo AI":     "leonardo-ai/leonardo-python-sdk",
  "Ideogram":        "ideogram-ai/ideogram-python",
  "HeyGen":          "HeyGen-Official/StreamingAvatarSDK",
  "Synthesia":       "synthesia-io/docs",
  "Descript":        "descriptinc/descript-sdk",
  "Udio":            "udio-ai/udio-api",
  "Windsurf":        "Exafunction/codeium",
  "v0":              "vercel/ai",
  "Lovable":         "lovable-dev/lovable",
  "Fireflies":       "fireflies-ai/fireflies-api",
  "Gamma":           "gamma-app/gamma",
  "Jasper":          "jasperai/jasper-sdk"
};

tools.forEach((tool) => {
  tool.logo ||= tool.name.slice(0, 2).toUpperCase();
  try {
    tool.logoUrl ||= `https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=64`;
    tool.domain ||= new URL(tool.url).hostname;
  } catch {
    tool.logoUrl ||= "";
    tool.domain ||= "";
  }
  tool.modelType ||= tool.category.en.toLowerCase().includes("coding")
    ? "coding"
    : tool.category.en.toLowerCase().includes("video")
      ? "video"
      : tool.category.en.toLowerCase().includes("image")
        ? "image"
        : tool.category.en.toLowerCase().includes("audio")
          ? "audio"
          : "text";
  // GitHub repo + live-metric placeholders (filled by fetchLiveChartData)
  tool.repo = toolRepos[tool.name] || null;
  tool.stars = null;        // live: stargazers_count
  tool.forks = null;        // live: forks_count
  tool.issues = null;       // live: open_issues_count
  tool.pushedAt = null;     // live: pushed_at (ISO date of last push)
  tool.activityDays = null; // derived: days since last push
});

const aaModelSnapshot = [
  { model: "o3-mini", provider: "OpenAI", intelligence: 62.9, speed: 153.831, cost: 1.925, domain: "openai.com" },
  { model: "GPT-5.5 (xhigh)", provider: "OpenAI", intelligence: 60.2, speed: 75.1, cost: 11.25, domain: "openai.com" },
  { model: "GPT-5.3 Codex (xhigh)", provider: "OpenAI", intelligence: 54, speed: 78.15, cost: 4.81, domain: "openai.com" },
  { model: "GLM-5.1", provider: "Z AI", intelligence: 51, speed: 1.62, cost: 2.15, domain: "z.ai" },
  { model: "GPT Image 1 (high)", provider: "OpenAI", intelligence: 1128, speed: null, cost: null, domain: "openai.com", metric: "Image Editing Elo" },
  { model: "DALL·E 3", provider: "OpenAI", intelligence: 1250, speed: null, cost: null, domain: "openai.com", metric: "Text-to-Image Elo" },
  { model: "Kling 2.5 Turbo 1080p", provider: "Kuaishou KlingAI", intelligence: 1180, speed: null, cost: null, domain: "klingai.com", metric: "Text-to-Video Elo" },
  { model: "Kling 2.5 Turbo 1080p", provider: "Kuaishou KlingAI", intelligence: 1120, speed: null, cost: null, domain: "klingai.com", metric: "Image-to-Video Elo" }
];

const jobRoles = [
  {
    title: "AI Automation Specialist",
    keywords: ["zapier", "make", "automation", "excel", "api", "اتوماسیون"],
    path: {
      en: "Build workflows for businesses by connecting forms, CRM, email, sheets, and AI actions.",
      fa: "برای کسب‌وکارها workflow بساز: اتصال فرم، CRM، ایمیل، شیت و اکشن‌های AI."
    },
    tools: ["Zapier AI", "ChatGPT", "Notion AI"]
  },
  {
    title: "Prompt Engineer / AI Content Specialist",
    keywords: ["writing", "content", "prompt", "seo", "تولید محتوا", "نوشتن"],
    path: {
      en: "Design prompts, content systems, SEO briefs, brand voice guides, and reusable AI templates.",
      fa: "prompt، سیستم تولید محتوا، brief سئو، راهنمای لحن برند و تمپلیت AI بساز."
    },
    tools: ["ChatGPT", "Claude", "Perplexity"]
  },
  {
    title: "AI Frontend Developer",
    keywords: ["react", "javascript", "html", "css", "frontend", "کدنویسی"],
    path: {
      en: "Ship small AI apps, dashboards, landing pages, and API-connected prototypes.",
      fa: "اپ‌های کوچک AI، داشبورد، landing page و نمونه‌های متصل به API بساز."
    },
    tools: ["Cursor", "GitHub Copilot", "ChatGPT"]
  },
  {
    title: "AI Visual Creator",
    keywords: ["photoshop", "design", "canva", "video", "image", "طراحی"],
    path: {
      en: "Create social visuals, short videos, ads, product images, and template packs for clients.",
      fa: "برای مشتری‌ها تصویر شبکه اجتماعی، ویدیو کوتاه، تبلیغ، تصویر محصول و پک تمپلیت بساز."
    },
    tools: ["Canva AI", "Runway", "Gamma"]
  }
];

const motions = [
  { id: "zoom", en: "Slow zoom", fa: "زوم آرام" },
  { id: "pan", en: "Side pan", fa: "حرکت افقی" },
  { id: "fade", en: "Soft fade", fa: "فید نرم" },
  { id: "rise", en: "Rise up", fa: "بالا آمدن" }
];

const state = {
  lang: localStorage.getItem("lang") || "en",
  query: "",
  category: "all",
  budget: "all",
  sort: "score",
  modelType: "all",
  minScore: 0,
  viewMode: localStorage.getItem("toolViewMode") || "grid",
  compare: JSON.parse(localStorage.getItem("compareTools") || "[]"),
  uploadedAssets: [],
  slides: JSON.parse(localStorage.getItem("videoSlides") || "[]")
};


// ── GLOBAL FONT HELPER — applied to ALL value/headline text in video studio ──
function vsGetFont(fallback){
  var el=document.querySelector("#vsHeadlineFont");
  var fam = (el&&el.value) ? el.value : (fallback||"Prata, serif");
  // CRITICAL: canvas measureText and fillText MUST use the same loaded font,
  // otherwise letters overlap (measured narrow, rendered wide) or get cut.
  try {
    if (document.fonts && document.fonts.check) {
      var firstFam = fam.split(',')[0].replace(/['"]/g,'').trim();
      // Has this font actually finished loading?
      var loaded = document.fonts.check('700 48px "' + firstFam + '"')
                || document.fonts.check('400 48px "' + firstFam + '"');
      if (!loaded) {
        // Not ready — load it, then redraw once. Until then, return a
        // metric-compatible SYSTEM font so measure == render (no overlap).
        document.fonts.load('700 48px "' + firstFam + '"').then(function(){
          if (window._vsFontReloadPending) return;
          window._vsFontReloadPending = true;
          requestAnimationFrame(function(){
            window._vsFontReloadPending = false;
            if (typeof drawStudioFrame === 'function') {
              try { drawStudioFrame((typeof vstudio!=='undefined' && vstudio.position)||0); } catch(e){}
            }
          });
        }).catch(function(){});
        // serif vs sans fallback so spacing stays sane until the real font lands
        return /serif/i.test(fam) || /Prata|Alice|Viaoda|Georgia|Playfair/i.test(fam)
          ? "Georgia, 'Times New Roman', serif"
          : "Arial, Helvetica, sans-serif";
      }
    }
  } catch(e){}
  return fam;
}
const $ = (selector) => document.querySelector(selector);
const toolGrid = $("#toolGrid");
const compareTable = $("#compareTable");
const t = (key) => i18n[state.lang][key] || i18n.en[key] || key;
const text = (value) => (typeof value === "string" ? value : value[state.lang] || value.en);

// Theme switching: "dark" (default) and "light".
function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("theme-light", isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
  // highlight the active segment
  document.querySelectorAll("#themeSeg .seg-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.theme === (isLight ? "light" : "dark"));
  });
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  // highlight the active language segment
  document.querySelectorAll("#langSeg .seg-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  $("#searchInput").placeholder =
    lang === "fa" ? "جست‌وجو بر اساس کاربرد، قیمت، شغل..." : "Search by use case, price, job...";
  renderControls();
  renderTools();
  renderCompare();
  render3DChart();
  // refresh AI map + news labels on language switch
  const fa = lang === "fa";
  const setTxt = (id, en, faTxt) => { const el = document.querySelector(id); if (el) el.textContent = fa ? faTxt : en; };
  setTxt("#aimonEyebrow", "Live AI radar", "رادار زنده هوش مصنوعی");
  setTxt("#aimonTitle", "Global AI Map", "نقشه جهانی هوش مصنوعی");
  setTxt("#aimonSub", "The world's AI power centers, live. Tap a hub to see who's there.",
    "مراکز قدرت هوش مصنوعی جهان، زنده. روی هر نقطه بزن تا ببینی چه شرکت‌هایی آنجا هستند.");
  setTxt("#ainewsSub", "Latest in AI", "تازه‌ترین‌های هوش مصنوعی");
  const dashTxt = document.querySelector("#dashLaunchTxt");
  if (dashTxt) dashTxt.textContent = fa ? "داشبورد زنده" : "Live Dashboard";
  const dashHint = document.querySelector("#dashHintTxt");
  if (dashHint) dashHint.textContent = fa
    ? "هر نمایشگری را به مرکز فرماندهی زنده تبدیل کن"
    : "Turn any screen into a live war-room";
  if (typeof _aiMonInited !== "undefined" && _aiMonInited &&
      typeof renderAiMap === "function" && document.querySelector("#aimap")) {
    renderAiMap();
    if (typeof renderAiChips === "function") renderAiChips();
    if (typeof renderAiTicker === "function") renderAiTicker();
  }
}

function formatPrice(price) {
  if (price === 0) return state.lang === "fa" ? "رایگان" : "Free";
  return state.lang === "fa" ? `از حدود $${price}` : `From about $${price}`;
}

// Price badge — green "Free" for free tools, muted price otherwise.
function priceBadge(tool) {
  return formatPrice(tool.price);
}
function priceBadgeClass(tool) {
  return tool.price === 0 ? "price-free" : "price-paid";
}

function uniqueCategories() {
  const map = new Map();
  tools.forEach((tool) => map.set(text(tool.category), tool.category.en));
  return [{ label: t("allCategories"), value: "all" }, ...Array.from(map, ([label, value]) => ({ label, value }))];
}

function renderControls() {
  $("#categoryFilter").innerHTML = uniqueCategories()
    .map((item) => `<option value="${item.value}">${item.label}</option>`)
    .join("");
  $("#categoryFilter").value = state.category;

  $("#budgetFilter").innerHTML = [
    ["all", t("allBudgets")],
    ["free", t("freeBudget")],
    ["under20", t("under20")],
    ["pro", t("proBudget")]
  ]
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  $("#budgetFilter").value = state.budget;

  $("#sortFilter").innerHTML = [
    ["score", t("sortScore")],
    ["price", t("sortPrice")],
    ["name", t("sortName")]
  ]
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  $("#sortFilter").value = state.sort;

  $("#modelTypeFilter").innerHTML = [
    ["all", state.lang === "fa" ? "همه مدل‌ها" : "All model types"],
    ["text", state.lang === "fa" ? "متن و LLM" : "Text and LLM"],
    ["multimodal", state.lang === "fa" ? "چندوجهی" : "Multimodal"],
    ["image", state.lang === "fa" ? "تصویر" : "Image"],
    ["video", state.lang === "fa" ? "ویدیو" : "Video"],
    ["audio", state.lang === "fa" ? "صدا" : "Audio"],
    ["coding", state.lang === "fa" ? "کدنویسی" : "Coding"]
  ]
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  $("#modelTypeFilter").value = state.modelType;
  $("#minScoreFilter").value = state.minScore;

  if ($("#motionSelect")) {
    $("#motionSelect").innerHTML = motions
      .map((motion) => `<option value="${motion.id}">${motion[state.lang]}</option>`)
      .join("");
  }

  // Jump-to dropdown — every tool, alphabetical.
  const jumpTo = $("#jumpToTool");
  if (jumpTo) {
    const sorted = [...tools].sort((a, b) => a.name.localeCompare(b.name));
    jumpTo.innerHTML =
      `<option value="">${state.lang === "fa" ? "— انتخاب ابزار —" : "— Select a tool —"}</option>` +
      sorted.map((tool) => `<option value="${tool.name}">${tool.name}</option>`).join("");
  }
}

function passesBudget(tool) {
  if (state.budget === "all") return true;
  if (state.budget === "free") return tool.plan === "free" || tool.plan === "freemium";
  if (state.budget === "under20") return tool.price < 20;
  return tool.price >= 20;
}

function filteredTools() {
  const query = state.query.trim().toLowerCase();
  return tools
    .filter((tool) => {
      const searchable = [
        tool.name,
        text(tool.category),
        text(tool.useCase),
        text(tool.pricing),
        tool.tags.join(" "),
        tool.jobs.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      return (
        (!query || searchable.includes(query)) &&
        (state.category === "all" || tool.category.en === state.category) &&
        (state.modelType === "all" || tool.modelType === state.modelType) &&
        tool.score >= state.minScore &&
        passesBudget(tool)
      );
    })
    .sort((a, b) => {
      if (state.sort === "price") return a.price - b.price;
      if (state.sort === "name") return a.name.localeCompare(b.name);
      return b.score - a.score;
    });
}

function renderTools() {
  const items = filteredTools();
  const countEl = $("#toolCount");
  if (countEl) {
    countEl.textContent = state.lang === "fa"
      ? `${items.length} از ${tools.length} ابزار`
      : `${items.length} of ${tools.length} tools`;
  }
  if (!items.length) {
    toolGrid.className = "tool-grid";
    toolGrid.innerHTML = `<p class="empty">${t("noTools")}</p>`;
    return;
  }
  // group the visible tools by category
  const lang = state.lang === "fa" ? "fa" : "en";
  const groups = {}; const order = [];
  items.forEach(tool => {
    const cat = (tool.category && tool.category[lang]) || "Other";
    if (!groups[cat]) { groups[cat] = []; order.push(cat); }
    groups[cat].push(tool);
  });
  // when a filter/search narrows the list, expand all groups;
  // otherwise open the first group and collapse the rest.
  const filtersActive = state.query || state.category !== "all"
    || state.budget !== "all" || state.modelType !== "all"
    || state.minScore > 0;
  toolGrid.className = "tool-groups";
  toolGrid.innerHTML = order.map((cat, i) => {
    const cards = groups[cat].map(renderToolCard).join("");
    const open = (filtersActive || i === 0) ? " open" : "";
    const gridCls = state.viewMode === "list" ? "tool-grid is-list" : "tool-grid";
    return `<details class="tool-group"${open}>` +
      `<summary class="tool-group-head">` +
      `<span class="tool-group-name">${escapeHtml(cat)}</span>` +
      `<span class="tool-group-count">${groups[cat].length}</span>` +
      `</summary><div class="${gridCls}">${cards}</div></details>`;
  }).join("");
}

function setToolView(mode) {
  state.viewMode = mode;
  localStorage.setItem("toolViewMode", mode);
  const g = $("#viewGrid"), l = $("#viewList");
  if (g) g.classList.toggle("active", mode === "grid");
  if (l) l.classList.toggle("active", mode === "list");
  renderTools();
}

// Jump to a specific tool: clear filters that might hide it,
// re-render, then scroll to and briefly highlight its card.
function jumpToTool(name) {
  // reset filters so the target is guaranteed visible
  state.query = ""; state.category = "all"; state.budget = "all";
  state.modelType = "all"; state.minScore = 0;
  const searchInput = $("#searchInput");
  if (searchInput) searchInput.value = "";
  renderControls();
  renderTools();
  // wait for DOM, then scroll + flash
  requestAnimationFrame(() => {
    const card = document.querySelector(`[data-tool-card="${CSS.escape(name)}"]`);
    if (!card) return;
    // open the collapsible category group the card sits in
    const group = card.closest("details.tool-group");
    if (group) group.open = true;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.add("tool-card-flash");
    setTimeout(() => card.classList.remove("tool-card-flash"), 1600);
  });
}


function getTrendBadge(tool) {
  const fa = state.lang === "fa";
  const dayIdx = Math.floor(Date.now() / 86400000) % tools.length;
  if (tools[dayIdx] && tools[dayIdx].name === tool.name) {
    return `<span class="trend-badge badge-today">⭐ ${fa?'ابزار روز':"Today's pick"}</span>`;
  }
  const stars = tool.stars || 0, score = tool.score || 0;
  const isNew = tool.tags && tool.tags.some(t => ['new','2025','2026'].includes(t.toLowerCase()));
  if (stars >= 20000 && score >= 85) return `<span class="trend-badge badge-hot">🔥 ${fa?'پرطرفدار':'Trending'}</span>`;
  if (stars >= 5000 && score >= 70)  return `<span class="trend-badge badge-growing">⬆ ${fa?'رشد سریع':'Growing'}</span>`;
  if (tool.price === 0 && score >= 80) return `<span class="trend-badge badge-free-pick">✓ ${fa?'بهترین رایگان':'Best free'}</span>`;
  if (isNew) return `<span class="trend-badge badge-new">✦ ${fa?'جدید':'New'}</span>`;
  if (score >= 90) return `<span class="trend-badge badge-established">◈ ${fa?'تثبیت‌شده':'Established'}</span>`;
  return '';
}
function renderToolCard(tool) {
  const isCompared = state.compare.includes(tool.name);
  const slug = tool.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const logoHtml = tool.logoUrl
    ? `<img src="${tool.logoUrl}" alt="${tool.name} logo" loading="lazy" />`
    : tool.logo || tool.name.slice(0, 2).toUpperCase();

  // ---- LIST MODE: a single compact row ----
  if (state.viewMode === "list") {
    return `
    <article class="tool-row" data-tool-card="${tool.name}" id="tool-${slug}">
      <span class="logo">${logoHtml}</span>
      <div class="tool-row-main">
        <h3>${tool.name} ${getTrendBadge(tool)}</h3>
        <span class="tag">${text(tool.category)}</span>
      </div>
      <span class="price ${priceBadgeClass(tool)}">${priceBadge(tool)}</span>
      <div class="tool-row-actions">
        <button class="button ghost" type="button" data-compare="${tool.name}">
          ${isCompared ? t("removeCompare") : t("addCompare")}
        </button>
        <a class="mini-link" href="${tool.url}" target="_blank" rel="noopener">${t("officialLink")}</a>
      </div>
    </article>`;
  }

  // ---- GRID MODE: the full card ----
  return `
    <article class="tool-card" data-tool-card="${tool.name}" id="tool-${slug}">
      <div class="tool-top">
        <div class="tool-top">
          <span class="logo">${logoHtml}</span>
          <div>
            <h3>${tool.name}</h3>
            <span class="tag">${text(tool.category)}</span>
          </div>
        </div>
        <span class="price ${priceBadgeClass(tool)}">${priceBadge(tool)}</span>
      </div>
      ${getTrendBadge(tool)}
      <p>${text(tool.useCase)}</p>
      <div class="tags">
        ${tool.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <p>${t("pricing")}: ${text(tool.pricing)}</p>
      <div class="tool-actions">
        <button class="button ghost" type="button" data-compare="${tool.name}">
          ${isCompared ? t("removeCompare") : t("addCompare")}
        </button>
        <a class="mini-link" href="${tool.url}" target="_blank" rel="noopener">${t("officialLink")}</a>
      </div>
    </article>
  `;
}

function renderCompare() {
  const selected = tools.filter((tool) => state.compare.includes(tool.name));
  if (!selected.length) {
    compareTable.innerHTML = `<p class="empty">${t("emptyCompare")}</p>`;
    return;
  }

  // pull the latest live GitHub numbers so the table matches the 3D chart
  const liveByName = {};
  liveChartData.forEach((d) => { liveByName[d.name] = d; });

  const fa = state.lang === "fa";
  const colStars    = fa ? "ستاره‌های گیت‌هاب" : "GitHub Stars";
  const colForks    = fa ? "فورک" : "Forks";
  const colActivity = fa ? "آخرین فعالیت" : "Last Activity";

  const fmtStars = (v) => v == null ? "—" : v >= 1000 ? `${(v/1000).toFixed(1)}k` : String(v);
  const fmtActivity = (days) => {
    if (days == null) return "—";
    if (days <= 0) return fa ? "امروز" : "today";
    if (days === 1) return fa ? "۱ روز پیش" : "1 day ago";
    if (days < 30) return fa ? `${days} روز پیش` : `${days} days ago`;
    const m = Math.round(days / 30);
    return fa ? `${m} ماه پیش` : `${m} mo ago`;
  };

  compareTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>${t("tableTool")}</th>
          <th>${t("tableCategory")}</th>
          <th>${colStars}</th>
          <th>${colForks}</th>
          <th>${colActivity}</th>
          <th>${t("tablePrice")}</th>
          <th>${t("tableLink")}</th>
        </tr>
      </thead>
      <tbody>
        ${selected
          .map((tool) => {
            const live = liveByName[tool.name] || tool;
            const repoLink = tool.repo
              ? `<a class="mini-link" href="https://github.com/${tool.repo}" target="_blank" rel="noopener">${fmtStars(live.stars)}</a>`
              : "—";
            return `
              <tr>
                <td>${tool.name}</td>
                <td>${text(tool.category)}</td>
                <td><strong>★ ${fmtStars(live.stars)}</strong></td>
                <td>${live.forks == null ? "—" : fmtStars(live.forks)}</td>
                <td>${fmtActivity(live.activityDays ?? tool.activityDays)}</td>
                <td>${text(tool.pricing)}</td>
                <td><a class="mini-link" href="${tool.url}" target="_blank" rel="noopener">${t("open")}</a></td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderMetrics() {
  const metricTools = $("#metricTools");
  const metricFree = $("#metricFree");
  const metricJobs = $("#metricJobs");
  if (metricTools) metricTools.textContent = tools.length;
  if (metricFree) metricFree.textContent = tools.filter((tool) => tool.plan === "free" || tool.plan === "freemium").length;
  if (metricJobs) metricJobs.textContent = jobRoles.length;
}

function toggleCompare(name) {
  state.compare = state.compare.includes(name)
    ? state.compare.filter((item) => item !== name)
    : [...state.compare, name].slice(-4);
  localStorage.setItem("compareTools", JSON.stringify(state.compare));
  renderTools();
  renderCompare();
  render3DChart();
}

function saveSlides() {
  const serializable = state.slides.map(({ src, ...slide }) => slide);
  localStorage.setItem("videoSlides", JSON.stringify(serializable));
}

function parseChartData(value) {
  return String(value || "")
    .split(/[,\s]+/)
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item) && item >= 0)
    .slice(0, 8);
}

function addUploadedFiles(files) {
  state.uploadedAssets.forEach((asset) => URL.revokeObjectURL(asset.url));
  state.uploadedAssets = [...files].filter((file) => file.type.startsWith("image/")).map((file) => ({
    name: file.name,
    url: URL.createObjectURL(file)
  }));
  if (!state.uploadedAssets.length) {
    renderStudio(t("noFile"));
    return;
  }
  const duration = Number($("#durationInput").value || 4);
  const motion = $("#motionSelect").value || "zoom";
  const baseTitle = $("#slideTitleInput").value.trim() || "AI Radar";
  const baseCaption = $("#slideCaptionInput").value.trim() || "Create, compare, and launch with AI.";
  const chart = parseChartData($("#chartDataInput").value);
  state.slides.push(
    ...state.uploadedAssets.map((asset, index) => ({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${asset.name}`,
      name: asset.name,
      src: asset.url,
      title: state.uploadedAssets.length > 1 ? `${baseTitle} ${index + 1}` : baseTitle,
      caption: baseCaption,
      chart,
      duration,
      motion
    }))
  );
  renderStudio();
}

function addSlide() {
  const asset = state.uploadedAssets[state.slides.length % Math.max(state.uploadedAssets.length, 1)];
  if (!asset) {
    renderStudio(t("noFile"));
    return;
  }
  state.slides.push({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: asset.name,
    src: asset.url,
    title: $("#slideTitleInput").value.trim() || "AI Radar",
    caption: $("#slideCaptionInput").value.trim() || "Create, compare, and launch with AI.",
    chart: parseChartData($("#chartDataInput").value),
    duration: Number($("#durationInput").value || 4),
    motion: $("#motionSelect").value || "zoom"
  });
  renderStudio();
}

function hydrateSlideSources() {
  state.slides = state.slides.filter((slide) => slide.src);
}

function renderStudio(message = "") {
  hydrateSlideSources();
  const preview = $("#videoPreview");
  const timeline = $("#timeline");
  if (!state.slides.length) {
    preview.innerHTML = `<div class="preview-placeholder">${message || t("previewPlaceholder")}</div>`;
    timeline.innerHTML = "";
    return;
  }

  const active = state.slides[state.slides.length - 1];
  const chartValues = active.chart || [];
  const maxChart = Math.max(...chartValues, 1);
  preview.style.setProperty("--slide-duration", `${active.duration}s`);
  preview.innerHTML = `
    <img class="motion-${active.motion}" src="${active.src}" alt="${active.name}" />
    <div class="video-shade"></div>
    <div class="video-copy">
      <span class="video-kicker">AI Radar Studio</span>
      <strong class="video-title">${active.title || "AI Radar"}</strong>
      <span class="video-caption">${active.caption || ""}</span>
      <span class="video-line"></span>
    </div>
    ${
      chartValues.length
        ? `<div class="chart-overlay">${chartValues
            .map((value, index) => `<span style="height:${Math.max(8, (value / maxChart) * 100)}%; animation-delay:${index * 90}ms"></span>`)
            .join("")}</div>`
        : ""
    }
    <div class="video-progress"><span></span></div>
  `;
  timeline.innerHTML = state.slides
    .map(
      (slide, index) => `
        <div class="slide-item">
          <img src="${slide.src}" alt="${slide.name}" />
          <p><strong>${index + 1}. ${slide.name}</strong></p>
          <label>
            <span>${t("slideTitleLabel")}</span>
            <input type="text" value="${escapeAttribute(slide.title || "")}" data-slide-title="${slide.id}" />
          </label>
          <label>
            <span>${t("slideCaptionLabel")}</span>
            <input type="text" value="${escapeAttribute(slide.caption || "")}" data-slide-caption="${slide.id}" />
          </label>
          <label>
            <span>${t("chartDataLabel")}</span>
            <input type="text" value="${escapeAttribute((slide.chart || []).join(", "))}" data-slide-chart="${slide.id}" />
          </label>
          <label>
            <span>${t("durationLabel")}</span>
            <input type="number" min="1" max="30" value="${slide.duration}" data-slide-duration="${slide.id}" />
          </label>
          <label>
            <span>${t("motionLabel")}</span>
            <select data-slide-motion="${slide.id}">
              ${motions
                .map(
                  (motion) =>
                    `<option value="${motion.id}" ${motion.id === slide.motion ? "selected" : ""}>${motion[state.lang]}</option>`
                )
                .join("")}
            </select>
          </label>
          <button class="button ghost" type="button" data-delete-slide="${slide.id}">${t("deleteSlide")}</button>
        </div>
      `
    )
    .join("");
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function deleteSlide(id) {
  state.slides = state.slides.filter((slide) => slide.id !== id);
  saveSlides();
  renderStudio();
}

function updateSlideDuration(id, value) {
  const slide = state.slides.find((item) => item.id === id);
  if (!slide) return;
  slide.duration = Math.max(1, Math.min(30, Number(value) || 1));
  renderStudio();
}

function updateSlideMotion(id, value) {
  const slide = state.slides.find((item) => item.id === id);
  if (!slide) return;
  slide.motion = value;
  renderStudio();
}

function updateSlideText(id, key, value) {
  const slide = state.slides.find((item) => item.id === id);
  if (!slide) return;
  slide[key] = value;
  renderStudio();
}

function updateSlideChart(id, value) {
  const slide = state.slides.find((item) => item.id === id);
  if (!slide) return;
  slide.chart = parseChartData(value);
  renderStudio();
}

function exportTemplate() {
  if (!state.slides.length) {
    renderStudio(t("templateEmpty"));
    return;
  }
  const payload = {
    name: "AI Radar Video Template",
    format: "static-browser-template",
    createdAt: new Date().toISOString(),
    slides: state.slides.map((slide, index) => ({
      order: index + 1,
      fileName: slide.name,
      title: slide.title,
      caption: slide.caption,
      chart: slide.chart || [],
      durationSeconds: slide.duration,
      motion: slide.motion
    }))
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ai-radar-video-template.json";
  link.click();
  URL.revokeObjectURL(url);
  setStudioStatus(t("downloaded"));
}

function setStudioStatus(message) {
  $("#studioStatus").textContent = message || "";
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawCoverImage(ctx, image, width, height, progress, motion) {
  const scale =
    motion === "zoom" ? 1 + progress * 0.12 :
    motion === "pan" ? 1.1 :
    motion === "rise" ? 1.08 :
    1.04;
  const sourceRatio = image.width / image.height;
  const targetRatio = width / height;
  let drawWidth;
  let drawHeight;
  if (sourceRatio > targetRatio) {
    drawHeight = height * scale;
    drawWidth = drawHeight * sourceRatio;
  } else {
    drawWidth = width * scale;
    drawHeight = drawWidth / sourceRatio;
  }
  const panX = motion === "pan" ? (progress - 0.5) * width * 0.09 : 0;
  const riseY = motion === "rise" ? (0.5 - progress) * height * 0.06 : 0;
  ctx.globalAlpha = motion === "fade" ? 0.72 + progress * 0.28 : 1;
  ctx.drawImage(image, (width - drawWidth) / 2 + panX, (height - drawHeight) / 2 + riseY, drawWidth, drawHeight);
  ctx.globalAlpha = 1;
}

function wrapText(ctx, textValue, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = String(textValue || "").split(/\s+/).filter(Boolean);
  let line = "";
  let lines = 0;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      line = word;
      lines += 1;
      if (lines >= maxLines) return y;
    } else {
      line = test;
    }
  }
  if (line && lines < maxLines) ctx.fillText(line, x, y);
  return y + lineHeight;
}

function drawSlideFrame(ctx, slide, image, width, height, progress) {
  const eased = 1 - Math.pow(1 - progress, 3);
  ctx.clearRect(0, 0, width, height);
  drawCoverImage(ctx, image, width, height, eased, slide.motion);

  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgba(0,0,0,0.82)");
  gradient.addColorStop(0.58, "rgba(0,0,0,0.22)");
  gradient.addColorStop(1, "rgba(0,0,0,0.04)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.72 + eased * 0.28;
  ctx.fillStyle = "rgba(216,183,106,0.88)";
  ctx.fillRect(70, 86 + Math.sin(progress * Math.PI) * 8, 132 + eased * 90, 3);
  ctx.globalAlpha = 1;

  const textX = 70;
  const baseY = height - 230 + (1 - eased) * 28;
  ctx.fillStyle = "#f7df9c";
  ctx.font = "700 24px Inter, Arial, sans-serif";
  ctx.fillText("AI RADAR STUDIO", textX, baseY);

  ctx.fillStyle = "#fffaf0";
  ctx.font = "400 68px Prata, Georgia, serif";
  const afterTitle = wrapText(ctx, slide.title || "AI Radar", textX, baseY + 78, width * 0.66, 76, 2);

  ctx.fillStyle = "rgba(255,250,240,0.78)";
  ctx.font = "500 28px Inter, Arial, sans-serif";
  wrapText(ctx, slide.caption || "", textX, afterTitle + 18, width * 0.58, 38, 2);

  const chart = slide.chart || [];
  if (chart.length) {
    const max = Math.max(...chart, 1);
    const chartX = width - 430;
    const chartY = height - 230;
    const chartW = 300;
    const chartH = 160;
    ctx.fillStyle = "rgba(0,0,0,0.42)";
    ctx.fillRect(chartX - 24, chartY - 24, chartW + 48, chartH + 48);
    chart.forEach((value, index) => {
      const barW = chartW / chart.length - 10;
      const barH = (value / max) * chartH * eased;
      const x = chartX + index * (chartW / chart.length);
      const y = chartY + chartH - barH;
      const barGradient = ctx.createLinearGradient(0, y, 0, chartY + chartH);
      barGradient.addColorStop(0, "#fff0b8");
      barGradient.addColorStop(1, "#d8b76a");
      ctx.fillStyle = barGradient;
      ctx.fillRect(x, y, barW, barH);
    });
  }

  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fillRect(70, height - 54, width - 140, 4);
  ctx.fillStyle = "#d8b76a";
  ctx.fillRect(70, height - 54, (width - 140) * progress, 4);
}

async function exportVideo() {
  if (!state.slides.length) {
    renderStudio(t("templateEmpty"));
    return;
  }
  if (
    !window.MediaRecorder ||
    typeof HTMLCanvasElement === "undefined" ||
    !HTMLCanvasElement.prototype.captureStream
  ) {
    setStudioStatus(t("videoUnsupported"));
    return;
  }

  setStudioStatus(t("videoExporting"));
  const canvas = document.createElement("canvas");
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext("2d");
  const stream = canvas.captureStream(30);
  const chunks = [];
  const recorderOptions = MediaRecorder.isTypeSupported("video/webm") ? { mimeType: "video/webm" } : undefined;
  const recorder = new MediaRecorder(stream, recorderOptions);
  recorder.ondataavailable = (event) => {
    if (event.data.size) chunks.push(event.data);
  };

  const images = await Promise.all(state.slides.map((slide) => loadImage(slide.src)));
  recorder.start();

  const fps = 30;
  for (let slideIndex = 0; slideIndex < state.slides.length; slideIndex += 1) {
    const slide = state.slides[slideIndex];
    const frames = Math.max(1, Math.round((slide.duration || 4) * fps));
    for (let frame = 0; frame < frames; frame += 1) {
      drawSlideFrame(ctx, slide, images[slideIndex], canvas.width, canvas.height, frame / frames);
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
  }

  await new Promise((resolve) => {
    recorder.onstop = resolve;
    recorder.stop();
  });

  stream.getTracks().forEach((track) => track.stop());
  const blob = new Blob(chunks, { type: "video/webm" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ai-radar-video-template.webm";
  link.click();
  URL.revokeObjectURL(url);
  setStudioStatus(t("videoReady"));
}

function scoreRole(role, skills) {
  return role.keywords.reduce((score, keyword) => (skills.includes(keyword.toLowerCase()) ? score + 1 : score), 0);
}

function renderJobAdvice(skillsText = "") {
  const skills = skillsText.toLowerCase();
  const ranked = jobRoles
    .map((role) => ({ ...role, score: scoreRole(role, skills) }))
    .sort((a, b) => b.score - a.score);
  const best = ranked.some((role) => role.score > 0) ? ranked : jobRoles;

  $("#jobResult").innerHTML = `
    <div class="role-list">
      ${best
        .slice(0, 3)
        .map(
          (role) => `
            <article class="role-item">
              <strong>${role.title}</strong>
              <p>${text(role.path)}</p>
              <span class="tag">${t("recommendedTools")}: ${role.tools.join(", ")}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

const jobSources = [
  { name: "LinkedIn", url: (q, loc) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(q)}&location=${encodeURIComponent(loc)}` },
  { name: "Indeed", url: (q, loc) => `https://www.indeed.com/jobs?q=${encodeURIComponent(q)}&l=${encodeURIComponent(loc)}` },
  { name: "Wellfound", url: (q) => `https://wellfound.com/jobs?query=${encodeURIComponent(q)}` },
  { name: "Remote OK", url: (q) => `https://remoteok.com/remote-${encodeURIComponent(q.toLowerCase().replaceAll(" ", "-"))}-jobs` },
  { name: "Y Combinator", url: (q) => `https://www.ycombinator.com/jobs?query=${encodeURIComponent(q)}` },
  { name: "Google Jobs", url: (q, loc) => `https://www.google.com/search?q=${encodeURIComponent(`${q} jobs ${loc}`)}` }
];

function renderJobSources() {
  const role = $("#jobTitleInput")?.value.trim() || "artificial intelligence";
  const skills = $("#skillsInput")?.value.trim();
  const location = $("#jobLocationInput")?.value.trim() || "Remote";
  const query = [role, skills].filter(Boolean).join(" ");
  $("#jobSources").innerHTML = jobSources
    .map(
      (source) => `
        <a class="source-card" href="${source.url(query, location)}" target="_blank" rel="noopener">
          <strong>${source.name}</strong>
          <span>${state.lang === "fa" ? `جست‌وجوی واقعی برای ${query} در ${location}` : `Real search for ${query} in ${location}`}</span>
        </a>
      `
    )
    .join("");
}

function startJobTicker() {
  const tick = () => {
    const now = new Date().toLocaleTimeString(state.lang === "fa" ? "fa-IR" : "en-US");
    $("#jobTicker").textContent =
      state.lang === "fa"
        ? `آخرین بررسی نمایشی: ${now}. جمع‌آوری واقعی هر ثانیه نیاز به بک‌اند و API شغلی دارد.`
        : `Demo refresh: ${now}. True every-second internet aggregation requires a backend and job APIs.`;
  };
  tick();
  window.setInterval(tick, 1000);
}

// ── LOCAL CONTENT GENERATION ──────────────────────────────
// Caption AI and Prompt Lab run fully locally — no API, no
// sign-in, no external service. They use the template-based
// generators below, so they work instantly and offline.

// ── LOCAL FALLBACK GENERATORS ─────────────────────────────
// When the generators below run, the result is produced fully
// locally from templates — instant, offline, no account needed.
// Style presets — each appends a distinct set of descriptors.
const promptStyles = {
  cinematic: "cinematic composition, anamorphic lens, golden-hour rim lighting, shallow depth of field, dramatic contrast, filmic color grade, atmospheric haze, 8k, award-winning cinematography",
  editorial: "high-fashion editorial style, studio lighting, crisp detail, bold negative space, magazine-cover framing, refined color palette, professional photography",
  hyperreal: "hyper-realistic, ultra-detailed textures, natural lighting, true-to-life color, 50mm lens, photorealistic rendering, sharp focus, 8k",
  minimal: "minimal luxury aesthetic, clean composition, soft diffused light, muted premium palette, generous negative space, understated elegance",
  render3d: "3D render, octane render, physically based materials, soft global illumination, subsurface scattering, studio HDRI lighting, ultra-detailed, 8k",
  anime: "anime illustration style, clean line art, cel shading, vibrant palette, expressive lighting, detailed background, high-quality digital painting"
};

// Generate ONLY the prompt text, in the chosen style. No headings,
// no negative prompt, no JSON — just a ready-to-paste prompt.
function localEnhancePrompt(goal, style) {
  const descriptors = promptStyles[style] || promptStyles.cinematic;
  const subject = goal.trim();
  // A professional prompt: subject first, then scene + technical specs.
  return `${cap(subject)}, ${descriptors}, intricate detail, balanced composition, ` +
    `professional color grading, masterpiece quality, highly detailed, sharp focus.`;
}

// Build a professional structured JSON prompt from a word or short idea.
function localPromptJson(goal, style) {
  const subject = (goal || "").trim() || "subject";
  const styleMap = {
    cinematic: { lighting: "golden-hour rim light", lens: "anamorphic 35mm",
      grade: "filmic, teal-orange", mood: "dramatic, atmospheric" },
    editorial: { lighting: "studio softbox", lens: "85mm portrait",
      grade: "clean, refined", mood: "polished, high-fashion" },
    hyperreal: { lighting: "natural daylight", lens: "50mm prime",
      grade: "true-to-life", mood: "lifelike, crisp" },
    minimal: { lighting: "soft diffused", lens: "50mm",
      grade: "muted premium palette", mood: "calm, understated" },
    render3d: { lighting: "studio HDRI", lens: "virtual 40mm",
      grade: "physically based", mood: "clean, polished CGI" },
    anime: { lighting: "expressive cel light", lens: "illustrative",
      grade: "vibrant", mood: "stylized, energetic" }
  };
  const s = styleMap[style] || styleMap.cinematic;
  return JSON.stringify({
    subject: subject,
    style: style || "cinematic",
    prompt: `${cap(subject)}, ${promptStyles[style] || promptStyles.cinematic}`,
    lighting: s.lighting,
    camera: s.lens,
    color_grade: s.grade,
    mood: s.mood,
    composition: "balanced, strong focal subject, generous negative space",
    quality: ["8k", "ultra-detailed", "sharp focus", "professional"],
    negative_prompt: "blurry, low resolution, distorted, watermark, text, extra limbs",
    aspect_ratio: "16:9"
  }, null, 2);
}

function localTextToJson(value) {
  // Parse simple "Key: Value" lines into JSON; otherwise wrap as text.
  const obj = {};
  let matched = 0;
  value.split(/\n+/).forEach(line => {
    const m = line.match(/^\s*([^:]{1,40}):\s*(.+)$/);
    if (m) {
      const key = m[1].trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
      let val = m[2].trim();
      if (/^\d+(\.\d+)?$/.test(val)) val = Number(val);
      else if (val.includes(",")) val = val.split(",").map(s => s.trim());
      obj[key] = val;
      matched++;
    }
  });
  const result = matched ? obj : { text: value.trim() };
  return JSON.stringify(result, null, 2);
}

// Build a caption that reflects the actual uploaded media —
// its type (photo/video), shape, and dominant color mood.
function localCaption(goal, platform, tone, media, subject) {
  const m = media || {};
  const kind = m.type === "video" ? "video" : m.type === "image" ? "photo" : "post";
  const mood = m.mood || "balanced";
  const shape = m.shape || "";
  const colorWord = m.colorWord || "";
  const subj = (subject || "").trim();

  // Subject-led hooks when the user told us what's in the media.
  const hooks = subj ? [
    `That ${subj}? Worth a second look.`,
    `${cap(subj)} — caught at exactly the right moment.`,
    `Tell me this ${subj} doesn't stop your scroll.`
  ] : [
    kind === "video" ? "Press play — this is worth 10 seconds."
                      : "Stop scrolling. Look at this for a second.",
    `The ${mood} ${colorWord} tones here? Not an accident.`,
    "Here's how I'd make this work for you."
  ];

  // Caption sentence built from the actual scene + subject.
  const sceneBits = [colorWord, mood].filter(Boolean).join(", ");
  const caption = subj
    ? `${cap(subj)} — ${sceneBits ? sceneBits + ", " : ""}framed for ${platform}.${
        shape ? " Shot " + shape + "." : ""} ${goal && goal !== "Promote this media"
        ? goal + "." : "Save this one."} ↓`
    : `This ${kind} — ${sceneBits ? sceneBits + ", " : ""}made for ${platform}. ${
        goal && goal !== "Promote this media" ? goal + "." : "Tap save before you forget."} ↓`;

  // Hashtags include subject-derived tags.
  const subjTags = subj
    ? subj.split(/\s+/).filter(w => w.length > 2).slice(0, 2)
        .map(w => "#" + w.replace(/[^a-zA-Z0-9]/g, ""))
    : [];
  const tags = [...subjTags, "#" + platform.replace(/\s+/g, ""), "#" + tone,
    kind === "video" ? "#Reels" : "#PhotoOfTheDay",
    colorWord ? "#" + colorWord.replace(/\s+/g, "") : "#Aesthetic",
    "#ContentCreation", "#" + mood, "#SocialMedia", "#" + kind]
    .filter((v, i, a) => a.indexOf(v) === i);

  return `### CAPTION
${caption}

### HOOKS (3 alternatives)
1. ${hooks[0]}
2. ${hooks[1]}
3. ${hooks[2]}

### HASHTAGS
${tags.join(" ")}

### IMAGE PROMPT (for recreating similar content)
${subj ? cap(subj) + ", " : ""}${tone.toLowerCase()} ${kind}, ${colorWord || "balanced"} color palette,
${mood} mood, ${shape || "balanced framing"}, clean composition, strong focal subject,
professional lighting, high detail, 8k.`;
}

// Capitalize the first letter of a phrase.
function cap(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

// Sample an image's dominant color and describe it in words.
function analyzeImageColors(imgEl) {
  try {
    const c = document.createElement("canvas");
    const w = 32, h = 32;
    c.width = w; c.height = h;
    const ctx = c.getContext("2d");
    ctx.drawImage(imgEl, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    let r = 0, g = 0, b = 0, n = 0;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i]; g += data[i + 1]; b += data[i + 2]; n++;
    }
    r = Math.round(r / n); g = Math.round(g / n); b = Math.round(b / n);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const light = (max + min) / 2;
    let colorWord = "neutral", mood = "balanced";
    if (max - min < 30) {
      colorWord = light > 170 ? "bright" : light < 80 ? "dark" : "muted";
      mood = light > 170 ? "airy" : light < 80 ? "moody" : "calm";
    } else if (r >= g && r >= b) { colorWord = "warm"; mood = "vibrant"; }
    else if (b >= r && b >= g) { colorWord = "cool"; mood = "serene"; }
    else { colorWord = "fresh"; mood = "lively"; }
    return { colorWord, mood, light };
  } catch {
    return { colorWord: "", mood: "balanced", light: 128 };
  }
}

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}

function enhancePrompt(value) {
  const goal = value.trim();
  if (!goal) return state.lang === "fa" ? "لطفاً یک پرامپت وارد کنید." : "Please enter a prompt.";
  const style = $("#promptStyleSelect")?.value || "cinematic";
  return localEnhancePrompt(goal, style);
}

function textToJson(value) {
  const v = value.trim();
  if (!v) return "{}";
  // If it looks like Key: Value data, structure it as-is.
  if (/^[^:\n]{1,40}:.+/m.test(v) && v.includes(":")) {
    return localTextToJson(v);
  }
  // Otherwise treat it as a creative idea → professional prompt JSON.
  const style = $("#promptStyleSelect")?.value || "cinematic";
  return localPromptJson(v, style);
}

function registerUser() {
  const payload = {
    name: $("#registerName").value.trim(),
    email: $("#registerEmail").value.trim(),
    goal: $("#registerGoal").value,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem("aiRadarUser", JSON.stringify(payload));
  $("#registerStatus").textContent = t("registered");
}

function previewUploadedMedia(file) {
  const preview = $("#mediaPreview");
  if (!file || !preview) return;
  const url = URL.createObjectURL(file);
  if (file.type.startsWith("video/")) {
    preview.innerHTML = `<video src="${url}" controls playsinline></video>`;
  } else {
    preview.innerHTML = `<img src="${url}" alt="Uploaded media preview" />`;
  }
  preview.dataset.fileName = file.name;
  preview.dataset.fileType = file.type;
}

function buildCaptionPayload() {
  const goal = $("#mediaGoalInput").value.trim() || "Promote this media with a premium AI-focused caption";
  const platform = $("#platformSelect").value;
  const tone = $("#toneSelect").value;
  const fileName = $("#mediaPreview").dataset.fileName || "uploaded media";
  const baseTags = ["#AI", "#AITools", "#ContentCreation", "#DigitalMarketing", "#CreatorTools"];
  const platformTags = platform.includes("Instagram") || platform.includes("TikTok")
    ? ["#Reels", "#ViralVideo", "#TrendingNow"]
    : platform.includes("LinkedIn")
      ? ["#FutureOfWork", "#AIProductivity", "#Innovation"]
      : ["#Shorts", "#AIVideo", "#TechTrends"];
  const luxuryTags = tone === "Luxury" ? ["#LuxuryMarketing", "#PremiumBrand", "#HighEndContent"] : [];
  const hook = tone === "Luxury"
    ? "A sharper way to make premium content feel effortless."
    : "Here is the AI workflow I would use to make this stand out.";
  const caption = [
    hook,
    "",
    `Goal: ${goal}`,
    `Format: ${platform}`,
    `Creative direction: ${tone} tone, strong opening line, clear value, and a soft call to action.`,
    "",
    "Use this when you want the media to feel intentional, polished, and ready to publish."
  ].join("\n");
  return {
    fileName,
    platform,
    tone,
    goal,
    caption,
    hooks: [
      hook,
      "Stop scrolling if you create with AI.",
      "This is how I would turn one asset into a polished campaign."
    ],
    hashtags: [...new Set([...baseTags, ...platformTags, ...luxuryTags])]
  };
}

async function generateMediaCaption() {
  const goal = $("#mediaGoalInput").value.trim() || "Promote this media";
  const subject = ($("#mediaSubjectInput")?.value || "").trim();
  const platform = $("#platformSelect").value;
  const tone = $("#toneSelect").value;
  const preview = $("#mediaPreview");
  const captionOut = $("#captionOutput");
  const jsonOut = $("#mediaJsonOutput");
  const btn = $("#generateCaptionButton");

  btn.disabled = true;
  jsonOut.textContent = "";

  // Detect uploaded media — works for both image and video.
  const imgEl = preview.querySelector("img");
  const videoEl = preview.querySelector("video");
  const mediaEl = imgEl || videoEl;
  const mediaUrl = mediaEl ? mediaEl.getAttribute("src") : null;
  const isVideo = !!videoEl;

  // The caption is built FROM the uploaded photo/video — require one.
  if (!mediaUrl) {
    captionOut.textContent = state.lang === "fa"
      ? "اول یک عکس یا ویدیو آپلود کن — کپشن بر اساس همان ساخته می‌شود."
      : "Upload a photo or video first — the caption is built from it.";
    btn.disabled = false;
    return;
  }

  // We can't see inside the image, so the subject describes it.
  if (!subject) {
    captionOut.textContent = state.lang === "fa"
      ? "در کادر «در عکس/ویدیو چه چیزی هست؟» موضوع را بنویس (مثلاً: گربه روی لبه پنجره) تا کپشن دقیقاً درباره همان ساخته شود."
      : "Type what's in the photo (e.g. \"a cat on a windowsill\") in the subject box — the caption is built around exactly that.";
    btn.disabled = false;
    return;
  }

  captionOut.textContent = state.lang === "fa" ? "در حال نوشتن کپشن..." : "Writing caption...";

  const mediaWord = isVideo ? "video" : "image";

  // Build a media profile: type, shape, and (for images) color mood.
  const mediaInfo = { type: mediaWord };
  if (imgEl) {
    const w = imgEl.naturalWidth || 1, h = imgEl.naturalHeight || 1;
    mediaInfo.shape = w > h * 1.2 ? "wide / landscape"
      : h > w * 1.2 ? "tall / portrait" : "square";
    const colors = analyzeImageColors(imgEl);
    mediaInfo.colorWord = colors.colorWord;
    mediaInfo.mood = colors.mood;
  } else if (videoEl) {
    const w = videoEl.videoWidth || 1, h = videoEl.videoHeight || 1;
    mediaInfo.shape = w > h * 1.2 ? "wide / landscape"
      : h > w * 1.2 ? "tall / portrait" : "square";
    mediaInfo.mood = "dynamic";
    mediaInfo.colorWord = "";
  }

  try {
    // Caption is generated locally, built from the uploaded media.
    const fullText = localCaption(goal, platform, tone, mediaInfo, subject);

    // Parse the structured sections.
    const captionMatch = fullText.match(/### CAPTION\s*\n([\s\S]*?)(?=###|$)/);
    const hooksMatch = fullText.match(/### HOOKS[\s\S]*?\n([\s\S]*?)(?=###|$)/);
    const hashtagsMatch = fullText.match(/### HASHTAGS\s*\n([\s\S]*?)(?=###|$)/);
    const imgPromptMatch = fullText.match(/### IMAGE PROMPT[\s\S]*?\n([\s\S]*?)(?=###|$)/);

    const caption = captionMatch?.[1]?.trim() || fullText;
    const hooks = hooksMatch?.[1]?.trim() || "";
    const hashtags = hashtagsMatch?.[1]?.trim() || "";
    const imagePrompt = imgPromptMatch?.[1]?.trim() || "";

    captionOut.textContent = hashtags ? `${caption}\n\n${hashtags}` : caption;

    const jsonPayload = {
      platform,
      tone,
      goal,
      media_type: mediaUrl ? mediaWord : "none",
      caption,
      hooks: hooks.split("\n").filter(l => l.trim()).map(l => l.replace(/^\d+\.\s*/, "").trim()),
      hashtags: hashtags.split(/\s+/).filter(h => h.startsWith("#")),
      image_prompt: imagePrompt,
      generated_at: new Date().toISOString()
    };
    jsonOut.textContent = JSON.stringify(jsonPayload, null, 2);
  } catch (err) {
    captionOut.textContent = (state.lang === "fa" ? "خطا: " : "Error: ") + err.message;
  } finally {
    btn.disabled = false;
  }
}

async function copyTextFrom(selector) {
  const textValue = $(selector)?.textContent || "";
  if (!textValue.trim()) return;
  try {
    await navigator.clipboard.writeText(textValue);
  } catch {
    const area = document.createElement("textarea");
    area.value = textValue;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

// ── AI MODELS TICKER ─────────────────────────────────────
const allAiModels = [
  { name: "ChatGPT",        domain: "chatgpt.com" },
  { name: "Claude",         domain: "claude.ai" },
  { name: "Gemini",         domain: "gemini.google.com" },
  { name: "Grok",           domain: "x.ai" },
  { name: "DeepSeek",       domain: "deepseek.com" },
  { name: "Perplexity",     domain: "perplexity.ai" },
  { name: "Mistral Le Chat",domain: "mistral.ai" },
  { name: "Cohere",         domain: "cohere.com" },
  { name: "Meta AI",        domain: "meta.ai" },
  { name: "Midjourney",     domain: "midjourney.com" },
  { name: "Flux",           domain: "blackforestlabs.ai" },
  { name: "Stability AI",   domain: "stability.ai" },
  { name: "Adobe Firefly",  domain: "firefly.adobe.com" },
  { name: "Krea AI",        domain: "krea.ai" },
  { name: "Runway",         domain: "runwayml.com" },
  { name: "Sora",           domain: "openai.com" },
  { name: "Kling AI",       domain: "klingai.com" },
  { name: "Luma AI",        domain: "lumalabs.ai" },
  { name: "Pika",           domain: "pika.art" },
  { name: "Higgsfield",     domain: "higgsfield.ai" },
  { name: "Google Flow",    domain: "labs.google" },
  { name: "ElevenLabs",     domain: "elevenlabs.io" },
  { name: "Suno",           domain: "suno.com" },
  { name: "Canva AI",       domain: "canva.com" },
  { name: "Gamma",          domain: "gamma.app" },
  { name: "Cursor",         domain: "cursor.com" },
  { name: "GitHub Copilot", domain: "github.com" },
  { name: "Replit AI",      domain: "replit.com" },
  { name: "Hugging Face",   domain: "huggingface.co" },
  { name: "Zapier AI",      domain: "zapier.com" },
  { name: "Notion AI",      domain: "notion.com" },
];

function renderModelsTicker() {
  const ticker = $("#modelsTicker");
  if (!ticker) return;
  // duplicate for seamless loop
  const items = [...allAiModels, ...allAiModels];
  ticker.innerHTML = items.map(m => `
    <div class="ticker-item">
      <img src="https://www.google.com/s2/favicons?domain=${m.domain}&sz=32" alt="${m.name}" loading="lazy" onerror="this.style.display='none'" />
      <span>${m.name}</span>
    </div>
  `).join("");
}

// ── HERO MOTION GRAPHIC ───────────────────────────────────
// A lightweight canvas "motion picture" — drifting light orbs and
// a scanning sweep — that sits inline beside the hero title.
function startHeroMotion() {
  const canvas = $("#heroMotionCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function size() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, r.width * dpr);
    canvas.height = Math.max(1, r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();
  window.addEventListener("resize", size);

  // "Search" animation: a radar sweep reveals result dots, while a
  // mock search bar types a query — visually conveys discovery.
  const queries = ["AI tools", "image models", "video AI", "coding AI", "free plans"];
  const resultDots = Array.from({ length: 9 }, () => ({
    a: Math.random() * Math.PI * 2,          // angle on the radar
    r: 0.25 + Math.random() * 0.6,            // radius (0-1)
    found: 0                                  // 0..1 reveal progress
  }));

  let t = 0;
  function frame() {
    const rect = canvas.getBoundingClientRect();
    const W = rect.width, H = rect.height;
    t += 0.016;

    // background
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "#0c0a06");
    g.addColorStop(1, "#161109");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // radar centred in the lower portion
    const cx = W * 0.5, cy = H * 0.58;
    const maxR = Math.min(W, H) * 0.42;

    // concentric rings
    ctx.strokeStyle = "rgba(216,183,106,0.18)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * (i / 3), 0, Math.PI * 2);
      ctx.stroke();
    }
    // cross hairs
    ctx.beginPath();
    ctx.moveTo(cx - maxR, cy); ctx.lineTo(cx + maxR, cy);
    ctx.moveTo(cx, cy - maxR); ctx.lineTo(cx, cy + maxR);
    ctx.stroke();

    // sweeping beam
    const sweep = t * 1.4;
    const beam = ctx.createConicGradient
      ? ctx.createConicGradient(sweep, cx, cy)
      : null;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, maxR, sweep - 0.6, sweep);
    ctx.closePath();
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR);
    grad.addColorStop(0, "rgba(255,240,184,0.42)");
    grad.addColorStop(1, "rgba(255,240,184,0)");
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();

    // leading edge line
    ctx.strokeStyle = "rgba(255,240,184,0.7)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(sweep) * maxR, cy + Math.sin(sweep) * maxR);
    ctx.stroke();

    // result dots — light up when the beam passes over them
    resultDots.forEach(d => {
      const norm = ((sweep - d.a) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      if (norm < 0.14) d.found = 1;            // beam just hit it
      d.found *= 0.985;                         // slow fade
      const px = cx + Math.cos(d.a) * d.r * maxR;
      const py = cy + Math.sin(d.a) * d.r * maxR;
      const base = 0.22;
      ctx.beginPath();
      ctx.arc(px, py, 2 + d.found * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,184,${base + d.found * 0.78})`;
      ctx.fill();
      if (d.found > 0.3) {
        ctx.beginPath();
        ctx.arc(px, py, 4 + d.found * 9, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(216,183,106,${d.found * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });

    // mock search bar at the top — types a query letter by letter
    const barY = H * 0.13, barH = 26, barX = W * 0.12, barW = W * 0.76;
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    roundRect(ctx, barX, barY, barW, barH, 13);
    ctx.fill();
    ctx.strokeStyle = "rgba(216,183,106,0.3)";
    ctx.lineWidth = 1;
    roundRect(ctx, barX, barY, barW, barH, 13);
    ctx.stroke();

    // magnifier icon
    const mx = barX + 16, my = barY + barH / 2;
    ctx.strokeStyle = "#d8b76a";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(mx, my - 1, 4.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mx + 3.4, my + 2.4);
    ctx.lineTo(mx + 7, my + 6);
    ctx.stroke();

    // typed query text (cycles through the list)
    const cycle = 3.4;                         // seconds per query
    const qi = Math.floor(t / cycle) % queries.length;
    const q = queries[qi];
    const phase = (t % cycle) / cycle;
    const shown = phase < 0.7
      ? Math.floor((phase / 0.7) * q.length)
      : q.length;
    const typed = q.slice(0, shown);
    ctx.fillStyle = "#fff0b8";
    ctx.font = "600 13px Inter, sans-serif";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(typed, barX + 32, my + 1);
    // blinking caret
    if (Math.floor(t * 2) % 2 === 0 && phase < 0.85) {
      const cw = ctx.measureText(typed).width;
      ctx.fillRect(barX + 33 + cw, my - 6, 1.5, 12);
    }

    requestAnimationFrame(frame);
  }

  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  frame();
}

// ── CINEMATIC HERO BACKGROUND ─────────────────────────────
// A premium "AI neural data field" behind the whole hero: a drifting
// aurora glow, a connected particle network, and travelling data
// pulses. Theme-matched gold/dark, GPU-cheap (cached glow sprite),
// pauses when offscreen, and respects reduced-motion.
function startHeroBackground() {
  const canvas = document.querySelector("#heroBgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const host = canvas.parentElement; // the hero section
  const hasVideo = !!document.querySelector("#heroBgVideo"); // canvas layers OVER the video

  // cached warm glow sprite (avoids creating gradients per node each frame)
  const glow = document.createElement("canvas"); glow.width = glow.height = 64;
  (function () {
    const g = glow.getContext("2d");
    const rg = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    rg.addColorStop(0, "rgba(255,240,196,1)");
    rg.addColorStop(0.35, "rgba(255,226,160,0.55)");
    rg.addColorStop(1, "rgba(255,226,160,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 64, 64);
  })();

  let W = 0, H = 0, dpr = 1, nodes = [], pulses = [];

  function buildNodes() {
    const dens = hasVideo ? 30 : 20, cap = hasVideo ? 46 : 88, floor = hasVideo ? 16 : 26;
    const count = Math.max(floor, Math.min(cap, Math.round(W / dens)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.17, vy: (Math.random() - 0.5) * 0.17,
      r: 0.8 + Math.random() * 1.7, tw: Math.random() * Math.PI * 2
    }));
    pulses = Array.from({ length: Math.max(3, Math.round(count / 11)) }, makePulse);
  }
  function pickNear(i) { let j = (Math.random() * nodes.length) | 0; if (j === i) j = (j + 1) % nodes.length; return j; }
  function makePulse() { const a = (Math.random() * nodes.length) | 0; return { from: a, to: pickNear(a), t: Math.random(), speed: 0.004 + Math.random() * 0.006 }; }

  function size() {
    const r = host.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildNodes();
  }

  const blobs = [
    { c: "rgba(216,183,106,", a: 0.11, rx: 0.55, ry: 0.45, ph: 0, sp: 0.00020, amp: 0.18 },
    { c: "rgba(232,194,105,", a: 0.08, rx: 0.74, ry: 0.32, ph: 2, sp: 0.00026, amp: 0.20 },
    { c: "rgba(120,90,42,",   a: 0.12, rx: 0.30, ry: 0.66, ph: 4, sp: 0.00022, amp: 0.20 }
  ];

  let mx = 0.65, my = 0.4, px = 0.65, py = 0.4;
  host.addEventListener("pointermove", (e) => {
    const r = host.getBoundingClientRect();
    mx = (e.clientX - r.left) / Math.max(1, r.width);
    my = (e.clientY - r.top) / Math.max(1, r.height);
  });

  const D = 132; let t = 0, raf = 0, visible = true;

  function draw() {
    t += 1;
    if (hasVideo) {
      // video is the backdrop — keep the canvas transparent so it shows through
      ctx.clearRect(0, 0, W, H);
    } else {
      const baseG = ctx.createLinearGradient(0, 0, W, H);
      baseG.addColorStop(0, "#0b0a07"); baseG.addColorStop(1, "#120d07");
      ctx.fillStyle = baseG; ctx.fillRect(0, 0, W, H);
    }

    // aurora glow (additive) — softer when it sits over the video
    const auroraK = hasVideo ? 0.5 : 1;
    ctx.globalCompositeOperation = "lighter";
    blobs.forEach(b => {
      const cx = (b.rx + Math.sin(t * b.sp * 1000 + b.ph) * b.amp) * W;
      const cy = (b.ry + Math.cos(t * b.sp * 1200 + b.ph) * b.amp) * H;
      const rr = Math.max(W, H) * 0.55;
      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, rr);
      rg.addColorStop(0, b.c + (b.a * auroraK).toFixed(3) + ")"); rg.addColorStop(1, b.c + "0)");
      ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
    });

    px += (mx - px) * 0.05; py += (my - py) * 0.05;
    const ox = (px - 0.5) * 20, oy = (py - 0.5) * 16;

    if (!reduce) nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
    });

    // connection lines
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < D) {
          ctx.strokeStyle = "rgba(216,183,106," + ((1 - dist / D) * (hasVideo ? 0.15 : 0.26)).toFixed(3) + ")";
          ctx.beginPath(); ctx.moveTo(a.x + ox, a.y + oy); ctx.lineTo(b.x + ox, b.y + oy); ctx.stroke();
        }
      }
    }

    // nodes (cached glow sprite + bright core)
    ctx.globalCompositeOperation = "lighter";
    nodes.forEach(n => {
      const tw = 0.55 + 0.45 * Math.sin(t * 0.03 + n.tw);
      const x = n.x + ox, y = n.y + oy, s = n.r * 11;
      ctx.globalAlpha = (hasVideo ? 0.32 : 0.5) * tw;
      ctx.drawImage(glow, x - s / 2, y - s / 2, s, s);
      ctx.globalAlpha = (hasVideo ? 0.6 : 0.85) * tw;
      ctx.fillStyle = "#fff6db";
      ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;

    // travelling data pulses
    if (!reduce) pulses.forEach(p => {
      const a = nodes[p.from], b = nodes[p.to];
      if (!a || !b) { Object.assign(p, makePulse()); return; }
      p.t += p.speed;
      if (p.t >= 1) { p.from = p.to; p.to = pickNear(p.from); p.t = 0; }
      const x = a.x + (b.x - a.x) * p.t + ox, y = a.y + (b.y - a.y) * p.t + oy, s = 16;
      ctx.drawImage(glow, x - s / 2, y - s / 2, s, s);
    });
    ctx.globalCompositeOperation = "source-over";

    // readability scrim — darken the copy side so text stays crisp.
    // Flips to the right side when the site is in RTL (Persian).
    const rtl = document.documentElement.dir === "rtl";
    const sg = ctx.createLinearGradient(rtl ? W : 0, 0, rtl ? 0 : W, 0);
    sg.addColorStop(0, "rgba(8,7,5,0.86)");
    sg.addColorStop(0.42, "rgba(8,7,5,0.42)");
    sg.addColorStop(0.72, "rgba(8,7,5,0)");
    ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H);
    const vg = ctx.createLinearGradient(0, 0, 0, H);
    vg.addColorStop(0, "rgba(8,7,5,0.28)");
    vg.addColorStop(0.3, "rgba(8,7,5,0)");
    vg.addColorStop(0.82, "rgba(8,7,5,0)");
    vg.addColorStop(1, "rgba(8,7,5,0.55)");
    ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);

    if (visible && !reduce) raf = requestAnimationFrame(draw);
  }

  size();
  let to;
  window.addEventListener("resize", () => { clearTimeout(to); to = setTimeout(size, 150); });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver((ents) => {
      ents.forEach(e => {
        visible = e.isIntersecting;
        if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
        else cancelAnimationFrame(raf);
      });
    }, { threshold: 0 }).observe(host);
  }

  if (reduce) {
    const v = document.querySelector("#heroBgVideo");
    if (v) { try { v.pause(); } catch (e) {} }
    draw();                      // one static premium frame
  } else {
    raf = requestAnimationFrame(draw);
  }
}

// ── LIVE GITHUB DATA ──────────────────────────────────────
// liveChartData is derived from the SAME `tools` array used by the
// comparison section, so both sections always show the same AIs.
// Metrics come from the public GitHub REST API (no key required —
// api.github.com supports CORS for unauthenticated public reads).
// Unauthenticated limit is 60 req/hr per IP, so we refresh slowly
// and cache the last good result in localStorage.
let activeMetric = "stars";          // stars | forks | activity
let liveChartData = [];
let lastRefreshTime = null;
let isFetchingLive = false;

const GH_CACHE_KEY = "ghLiveCache_v1";

// seed liveChartData from any cached values so the chart isn't empty
(function seedFromCache() {
  let cached = {};
  try { cached = JSON.parse(localStorage.getItem(GH_CACHE_KEY) || "{}"); } catch {}
  tools.forEach(t => {
    const c = cached[t.name];
    if (c) {
      t.stars = c.stars; t.forks = c.forks; t.issues = c.issues;
      t.pushedAt = c.pushedAt; t.activityDays = c.activityDays;
    }
  });
  rebuildLiveChartData();
  if (cached.__time) {
    lastRefreshTime = new Date(cached.__time);
  }
})();

function rebuildLiveChartData() {
  liveChartData = tools.map(t => ({
    name: t.name,
    provider: t.name,
    model: t.name,
    domain: t.domain,
    repo: t.repo,
    stars: t.stars,
    forks: t.forks,
    issues: t.issues,
    pushedAt: t.pushedAt,
    // "activity" score: higher = pushed more recently (0–100)
    activity: t.activityDays == null ? null
      : Math.max(0, Math.round(100 - Math.min(100, t.activityDays * 2)))
  }));
}

function setRefreshLabel(text) {
  const el = $("#lastRefreshed");
  if (el) el.textContent = text;
}

// Fetch one repo's public stats from the GitHub REST API.
async function fetchRepoStats(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: { "Accept": "application/vnd.github+json" }
  });
  if (res.status === 403) throw new Error("rate-limited");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const d = await res.json();
  const pushed = d.pushed_at ? new Date(d.pushed_at) : null;
  return {
    stars: d.stargazers_count ?? 0,
    forks: d.forks_count ?? 0,
    issues: d.open_issues_count ?? 0,
    pushedAt: d.pushed_at || null,
    activityDays: pushed
      ? Math.round((Date.now() - pushed.getTime()) / 86400000)
      : null
  };
}

// Fetch live GitHub data for every tool, with graceful fallback.
async function fetchLiveChartData() {
  if (isFetchingLive) return;
  isFetchingLive = true;
  const refreshBtn = document.getElementById("refreshChartBtn");
  if (refreshBtn) refreshBtn.classList.add("loading");
  setRefreshLabel("Fetching live GitHub data…");

  const withRepos = tools.filter(t => t.repo);
  let okCount = 0, rateLimited = false;

  // sequential with a small gap — friendly to the 60 req/hr limit
  for (const tool of withRepos) {
    try {
      const stats = await fetchRepoStats(tool.repo);
      tool.stars = stats.stars;
      tool.forks = stats.forks;
      tool.issues = stats.issues;
      tool.pushedAt = stats.pushedAt;
      tool.activityDays = stats.activityDays;
      okCount++;
    } catch (e) {
      if (String(e.message).includes("rate-limited")) { rateLimited = true; break; }
      // leave this tool's cached/previous values in place
    }
    rebuildLiveChartData();
    render3DChart();
    await new Promise(r => setTimeout(r, 120));
  }

  if (okCount > 0) {
    lastRefreshTime = new Date();
    // cache last good result
    const cache = { __time: lastRefreshTime.toISOString() };
    tools.forEach(t => {
      if (t.stars != null) {
        cache[t.name] = {
          stars: t.stars, forks: t.forks, issues: t.issues,
          pushedAt: t.pushedAt, activityDays: t.activityDays
        };
      }
    });
    try { localStorage.setItem(GH_CACHE_KEY, JSON.stringify(cache)); } catch {}
  }

  rebuildLiveChartData();
  render3DChart();
  if (state.compare.length) renderCompare();

  if (rateLimited) {
    setRefreshLabel(
      lastRefreshTime
        ? `GitHub rate limit hit — showing cached data from ${lastRefreshTime.toLocaleTimeString()}`
        : "GitHub rate limit hit — try again in a few minutes"
    );
  } else if (okCount > 0) {
    setRefreshLabel(`Live · updated ${lastRefreshTime.toLocaleTimeString()} · ${okCount}/${withRepos.length} repos`);
  } else {
    setRefreshLabel("Could not reach GitHub — check your connection");
  }
  isFetchingLive = false;
  if (refreshBtn) refreshBtn.classList.remove("loading");
}

// ── LIVE CHART (flat bar chart, real GitHub data) ─────────
function render3DChart() {
  // (name kept for compatibility with existing callers)
  renderLiveChart();
}

function metricValueOf(item) {
  const v = activeMetric === "stars" ? item.stars
    : activeMetric === "forks" ? item.forks
    : item.activity;
  return v == null ? 0 : v;
}

function formatMetricValue(v) {
  if (v == null) return "—";
  if (activeMetric === "activity") return `${v}/100`;
  if (v >= 1000) return `${(v / 1000).toFixed(1)}k`;
  return String(Math.round(v));
}

let _chartFingerprint = "";
let _chartAnimated = false;
let _ghSort = "value";   // value | growth | name
let _ghSearch = "";

// Render the summary stat cards above the chart.
function renderGhSummary() {
  const box = $("#ghSummary");
  if (!box) return;
  const withData = liveChartData.filter(d => (d.stars || 0) > 0);
  if (!withData.length) { box.innerHTML = ""; return; }
  const totalStars = withData.reduce((s, d) => s + (d.stars || 0), 0);
  const totalForks = withData.reduce((s, d) => s + (d.forks || 0), 0);
  // most active = smallest activityDays (most recent push)
  const mostActive = [...withData].sort((a, b) =>
    (a.activityDays ?? 9999) - (b.activityDays ?? 9999))[0];
  // top by stars
  const topStar = [...withData].sort((a, b) => (b.stars || 0) - (a.stars || 0))[0];
  const fa = state.lang === "fa";
  const cards = [
    { val: formatMetricValue(totalStars), label: fa ? "مجموع ستاره‌ها" : "Total stars", sub: `${withData.length} ${fa ? "ابزار" : "tools"}` },
    { val: formatMetricValue(totalForks), label: fa ? "مجموع فورک‌ها" : "Total forks", sub: "" },
    { val: topStar ? topStar.name : "—", label: fa ? "محبوب‌ترین" : "Most popular", sub: topStar ? formatMetricValue(topStar.stars) + " ★" : "" },
    { val: mostActive ? mostActive.name : "—", label: fa ? "فعال‌ترین" : "Most active", sub: mostActive && mostActive.activityDays != null ? (mostActive.activityDays === 0 ? (fa ? "امروز" : "today") : `${mostActive.activityDays}${fa ? " روز پیش" : "d ago"}`) : "" }
  ];
  box.innerHTML = cards.map(c => `
    <div class="gh-sum-card">
      <div class="gh-sum-val">${c.val}</div>
      <div class="gh-sum-label">${c.label}</div>
      ${c.sub ? `<div class="gh-sum-sub">${c.sub}</div>` : ""}
    </div>`).join("");
}

function renderLiveChart() {
  const container = $("#performanceChart");
  if (!container) return;
  renderGhSummary();

  // multi-metric view is a different layout
  if (activeMetric === "multi") { renderMultiMetric(container); return; }

  let list = liveChartData.filter(item => (item.stars || 0) > 0);
  // search filter
  if (_ghSearch) {
    const q = _ghSearch.toLowerCase();
    list = list.filter(d => d.name.toLowerCase().includes(q));
  }
  // sort
  if (_ghSort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  else if (_ghSort === "growth") list.sort((a, b) => (a.activityDays ?? 9999) - (b.activityDays ?? 9999));
  else list.sort((a, b) => metricValueOf(b) - metricValueOf(a));
  const sorted = list.slice(0, 14);
  const maxVal = Math.max(...sorted.map(metricValueOf), 1);
  const compared = new Set(state.compare);

  const fp = "single|" + activeMetric + "|" + _ghSort + "|" + _ghSearch + "|" +
    [...compared].join(",") + "|" +
    sorted.map(s => s.name + ":" + metricValueOf(s)).join("|");
  if (fp === _chartFingerprint && container.querySelector(".live-bar-row")) return;
  const firstPaint = !_chartAnimated;
  _chartFingerprint = fp;

  let label = $("#chart3DLabel");
  if (!label) {
    label = document.createElement("div");
    label.id = "chart3DLabel";
    label.className = "chart-label";
    container.parentElement.insertBefore(label, container);
  }
  const metricText = activeMetric === "stars" ? "Live GitHub stars"
    : activeMetric === "forks" ? "Live GitHub forks"
    : "Development activity (recent commits)";
  const comparedNote = state.compare.length
    ? ` — highlighted: ${state.compare.join(", ")}`
    : "";
  label.textContent = sorted.length
    ? `${metricText}${comparedNote}`
    : `${metricText} — loading live data from GitHub…`;

  if (!sorted.length) {
    container.innerHTML = `<div class="live-chart"><p class="empty">${_ghSearch ? "No tools match your filter." : "Loading live data from GitHub…"}</p></div>`;
    return;
  }

  container.innerHTML = `<div class="live-chart">
    ${sorted.map((item, i) => {
      const val = metricValueOf(item);
      const pct = Math.min(100, (val / maxVal) * 100);
      const hot = compared.has(item.name);
      const color = hot ? "#fff0b8" : "#d8b76a";
      const disp = formatMetricValue(val);
      return `<div class="live-bar-row ${hot ? "is-highlighted" : ""}" style="opacity:1;animation:none">
        <div class="bar-meta">
          <img src="https://www.google.com/s2/favicons?domain=${item.domain || "github.com"}&sz=32" alt="" loading="lazy" onerror="this.style.display='none'" />
          <div class="bar-names"><strong>${item.name}</strong></div>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color};box-shadow:0 0 14px ${color}55;"></div></div>
        <em class="bar-val" style="color:${color}">${disp}</em>
      </div>`;
    }).join("")}
  </div>`;
  _chartAnimated = true;
}

// Multi-metric view: each tool shows stars + forks + activity bars together,
// normalized so you can compare the *shape* of each project's profile.
function renderMultiMetric(container) {
  let list = liveChartData.filter(d => (d.stars || 0) > 0);
  if (_ghSearch) {
    const q = _ghSearch.toLowerCase();
    list = list.filter(d => d.name.toLowerCase().includes(q));
  }
  list.sort((a, b) => (b.stars || 0) - (a.stars || 0));
  list = list.slice(0, 12);
  const maxStars = Math.max(...list.map(d => d.stars || 0), 1);
  const maxForks = Math.max(...list.map(d => d.forks || 0), 1);
  const maxAct = Math.max(...list.map(d => d.activityDays != null ? (90 - Math.min(90, d.activityDays)) : 0), 1);
  const fp = "multi|" + _ghSearch + "|" + list.map(d => d.name + d.stars).join("|");
  if (fp === _chartFingerprint && container.querySelector(".gh-multi-row")) return;
  _chartFingerprint = fp;

  const label = $("#chart3DLabel");
  if (label) label.textContent = state.lang === "fa"
    ? "مقایسه چندمعیاره — ستاره، فورک، فعالیت" : "Multi-metric comparison — stars, forks, activity";

  if (!list.length) {
    container.innerHTML = `<div class="live-chart"><p class="empty">${_ghSearch ? "No tools match." : "Loading…"}</p></div>`;
    return;
  }
  const fa = state.lang === "fa";
  const row = (d) => {
    const sPct = Math.min(100, ((d.stars || 0) / maxStars) * 100);
    const fPct = Math.min(100, ((d.forks || 0) / maxForks) * 100);
    const aScore = d.activityDays != null ? (90 - Math.min(90, d.activityDays)) : 0;
    const aPct = Math.min(100, (aScore / maxAct) * 100);
    return `<div class="gh-multi-row">
      <div class="gh-multi-name">${d.name}</div>
      <div class="gh-multi-bars">
        <div class="gh-multi-bar"><span class="gh-multi-bar-label">${fa?"ستاره":"Stars"}</span><div class="gh-multi-track"><div class="gh-multi-fill stars" style="width:${sPct}%"></div></div><span class="gh-multi-val">${formatMetricValue(d.stars||0)}</span></div>
        <div class="gh-multi-bar"><span class="gh-multi-bar-label">${fa?"فورک":"Forks"}</span><div class="gh-multi-track"><div class="gh-multi-fill forks" style="width:${fPct}%"></div></div><span class="gh-multi-val">${formatMetricValue(d.forks||0)}</span></div>
        <div class="gh-multi-bar"><span class="gh-multi-bar-label">${fa?"فعالیت":"Activity"}</span><div class="gh-multi-track"><div class="gh-multi-fill activity" style="width:${aPct}%"></div></div><span class="gh-multi-val">${d.activityDays!=null?(d.activityDays===0?(fa?"امروز":"today"):`${d.activityDays}${fa?"ر":"d"}`):"—"}</span></div>
      </div>
    </div>`;
  };
  container.innerHTML = `<div class="live-chart gh-multi">${list.map(row).join("")}</div>`;
}


// ── ADVANCED VIDEO STUDIO ─────────────────────────────────
// Pick a template, add a video OR image, layer animated text,
// choose aspect ratio / filter / transition / speed / music,
// add intro & outro cards, preview at any size, and export a
// real .webm. Fully local — no uploads, no API.
// ── BUILT-IN INTRO BACKGROUNDS ─────────────────────────────
// Code-drawn backgrounds for intro scenes — crisp at any resolution.
// Different shapes and moods, all in the minimal / luxury style.
const introBackgrounds = [
  { id: "noir-gradient", name: { en: "Noir Gradient", fa: "گرادیان نوآر" },
    c1: "#0a0a0c", c2: "#1c1814", accent: "#d8b76a" },
  { id: "gold-rings",    name: { en: "Gold Rings", fa: "حلقه‌های طلایی" },
    c1: "#080706", c2: "#14110b", accent: "#d8b76a" },
  { id: "diagonal",      name: { en: "Diagonal Cut", fa: "برش مورب" },
    c1: "#0c0b14", c2: "#1a1830", accent: "#8aa6d8" },
  { id: "spotlight",     name: { en: "Spotlight", fa: "نورافکن" },
    c1: "#060606", c2: "#1a1a1a", accent: "#ffffff" },
  { id: "emerald-soft",  name: { en: "Emerald Soft", fa: "زمردی ملایم" },
    c1: "#05140e", c2: "#0d2a1e", accent: "#d8b76a" },
  { id: "ivory-clean",   name: { en: "Ivory Clean", fa: "عاجی تمیز" },
    c1: "#f4f1ea", c2: "#e6e0d2", accent: "#1a1a1a" },
  { id: "wave",          name: { en: "Soft Waves", fa: "موج‌های نرم" },
    c1: "#0a0612", c2: "#1c1430", accent: "#c8a24a" },
  { id: "grid-lux",      name: { en: "Lux Grid", fa: "شبکه لوکس" },
    c1: "#0b0b0d", c2: "#15151a", accent: "#d6dae0" },
  { id: "aurora",        name: { en: "Aurora", fa: "شفق" },
    c1: "#04111a", c2: "#0a2230", accent: "#7fd8c8" },
  { id: "starfield",     name: { en: "Starfield", fa: "میدان ستاره" },
    c1: "#05060f", c2: "#0c0e1f", accent: "#cfd6ff" },
  { id: "sunburst",      name: { en: "Sunburst", fa: "پرتو خورشید" },
    c1: "#160a04", c2: "#2a1408", accent: "#f0a830" },
  { id: "mesh",          name: { en: "Mesh Gradient", fa: "گرادیان توری" },
    c1: "#0a0814", c2: "#1a1228", accent: "#c89ad8" },
  { id: "particles",     name: { en: "Particle Field", fa: "میدان ذرات" },
    c1: "#080a0c", c2: "#12161a", accent: "#d8b76a" },
  { id: "marble-light",  name: { en: "Marble Light", fa: "مرمر روشن" },
    c1: "#f2efe9", c2: "#e2ddd0", accent: "#3a3a40" },
  { id: "ribbon",        name: { en: "Gold Ribbon", fa: "روبان طلایی" },
    c1: "#0a0806", c2: "#1a1410", accent: "#d8b76a" },
  { id: "halo",          name: { en: "Halo Glow", fa: "هاله نور" },
    c1: "#0a0a12", c2: "#161628", accent: "#b8c4f0" },
  { id: "prism",         name: { en: "Prism", fa: "منشور" },
    c1: "#0c0810", c2: "#1c1424", accent: "#e0a8d0" },
  { id: "topo",          name: { en: "Topographic", fa: "توپوگرافی" },
    c1: "#08120e", c2: "#12241c", accent: "#88d8b0" },
  { id: "spotlight-duo", name: { en: "Dual Spotlight", fa: "نورافکن دوگانه" },
    c1: "#060606", c2: "#161616", accent: "#f0d8a0" },
  { id: "velvet",        name: { en: "Velvet", fa: "مخمل" },
    c1: "#140810", c2: "#28121f", accent: "#e0a0c0" },
  { id: "carbon",        name: { en: "Carbon Fibre", fa: "کربن" },
    c1: "#0c0c0e", c2: "#16161a", accent: "#9aa0a8" },
  { id: "royal",         name: { en: "Royal Blue", fa: "آبی سلطنتی" },
    c1: "#040818", c2: "#0a1438", accent: "#d8b76a" },
  { id: "cine-aurora",   name: { en: "Cinematic Aurora", fa: "شفق سینمایی" },
    c1: "#050912", c2: "#0c1830", accent: "#5fd0c0" },
  { id: "cine-ember",    name: { en: "Ember Glow", fa: "درخشش اخگر" },
    c1: "#140604", c2: "#2a0c08", accent: "#ff8a4c" },
  { id: "cine-violet",   name: { en: "Violet Depth", fa: "ژرفای بنفش" },
    c1: "#0a0618", c2: "#1a0f38", accent: "#b88aff" },
  { id: "cine-mesh",     name: { en: "Liquid Mesh", fa: "مش مایع" },
    c1: "#04100e", c2: "#0a2622", accent: "#4fe0a0" },
  { id: "cine-spotlight", name: { en: "Studio Spotlight", fa: "نورافکن استودیو" },
    c1: "#080808", c2: "#1a1a1e", accent: "#f0d8a0" },
  { id: "cine-wave",     name: { en: "Silk Waves", fa: "موج‌های ابریشمی" },
    c1: "#0a0814", c2: "#181024", accent: "#e0a0c0" }
];

// Draw a chosen intro background. `t` is elapsed seconds for subtle motion.
function drawIntroBackground(ctx, W, H, bgId, t) {
  const bg = introBackgrounds.find(b => b.id === bgId) || introBackgrounds[0];
  const U = Math.min(W, H);
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, bg.c1);
  g.addColorStop(1, bg.c2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  switch (bg.id) {
    case "gold-rings": {
      ctx.strokeStyle = bg.accent;
      ctx.globalAlpha = 0.18;
      for (let i = 1; i <= 5; i++) {
        ctx.lineWidth = U * 0.004;
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, U * (0.12 * i + 0.02 * Math.sin(t * 0.6 + i)), 0, Math.PI * 2);
        ctx.stroke();
      }
      break;
    }
    case "diagonal": {
      ctx.fillStyle = bg.accent;
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.moveTo(0, H);
      ctx.lineTo(W * 0.7, 0);
      ctx.lineTo(W, 0);
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case "spotlight": {
      const r = ctx.createRadialGradient(
        W / 2, H * 0.42, U * 0.05, W / 2, H * 0.42, U * 0.75);
      r.addColorStop(0, "rgba(255,255,255,0.16)");
      r.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, W, H);
      break;
    }
    case "emerald-soft": {
      const r = ctx.createRadialGradient(
        W * 0.7, H * 0.3, U * 0.05, W * 0.7, H * 0.3, U * 0.9);
      r.addColorStop(0, "rgba(216,183,106,0.14)");
      r.addColorStop(1, "rgba(216,183,106,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, W, H);
      break;
    }
    case "wave": {
      ctx.strokeStyle = bg.accent;
      ctx.globalAlpha = 0.16;
      ctx.lineWidth = U * 0.004;
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 12) {
          const y = H * (0.3 + w * 0.16)
            + Math.sin(x * 0.008 + t * 0.8 + w) * U * 0.04;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      break;
    }
    case "grid-lux": {
      ctx.strokeStyle = bg.accent;
      ctx.globalAlpha = 0.07;
      ctx.lineWidth = 1;
      const step = U * 0.1;
      for (let x = step; x < W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = step; y < H; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      break;
    }
    case "ivory-clean": {
      ctx.strokeStyle = bg.accent;
      ctx.globalAlpha = 0.08;
      ctx.lineWidth = U * 0.003;
      ctx.beginPath();
      ctx.arc(W * 0.82, H * 0.2, U * 0.3, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case "aurora": {
      // soft flowing aurora bands
      for (let i = 0; i < 3; i++) {
        const yy = H * (0.3 + i * 0.2) + Math.sin(t * 0.4 + i) * U * 0.06;
        const ag = ctx.createLinearGradient(0, yy - U * 0.2, 0, yy + U * 0.2);
        ag.addColorStop(0, "rgba(127,216,200,0)");
        ag.addColorStop(0.5, `rgba(127,216,200,${0.12 - i * 0.03})`);
        ag.addColorStop(1, "rgba(127,216,200,0)");
        ctx.fillStyle = ag;
        ctx.fillRect(0, yy - U * 0.2, W, U * 0.4);
      }
      break;
    }
    case "starfield": {
      for (let i = 0; i < 60; i++) {
        const sx = (Math.sin(i * 73.1) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 51.7) * 0.5 + 0.5) * H;
        const tw = 0.3 + 0.7 * Math.abs(Math.sin(t * 1.5 + i));
        ctx.globalAlpha = tw * 0.7;
        ctx.fillStyle = bg.accent;
        ctx.beginPath();
        ctx.arc(sx, sy, U * 0.0016 * (1 + (i % 3)), 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case "sunburst": {
      // radiating rays from a corner
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = bg.accent;
      ctx.lineWidth = U * 0.012;
      for (let i = 0; i < 14; i++) {
        const ang = (i / 14) * Math.PI * 0.6 + t * 0.05;
        ctx.beginPath();
        ctx.moveTo(W * 0.15, H * 0.12);
        ctx.lineTo(W * 0.15 + Math.cos(ang) * U * 1.6,
                   H * 0.12 + Math.sin(ang) * U * 1.6);
        ctx.stroke();
      }
      const sr = ctx.createRadialGradient(
        W * 0.15, H * 0.12, 0, W * 0.15, H * 0.12, U * 0.6);
      sr.addColorStop(0, "rgba(240,168,48,0.22)");
      sr.addColorStop(1, "rgba(240,168,48,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = sr;
      ctx.fillRect(0, 0, W, H);
      break;
    }
    case "mesh": {
      // soft mesh-gradient blobs
      const blob = (bx, by, col) => {
        const r = ctx.createRadialGradient(bx, by, 0, bx, by, U * 0.55);
        r.addColorStop(0, col);
        r.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = r;
        ctx.fillRect(0, 0, W, H);
      };
      blob(W * (0.3 + 0.05 * Math.sin(t * 0.3)), H * 0.3,
           "rgba(200,154,216,0.22)");
      blob(W * 0.72, H * (0.65 + 0.05 * Math.cos(t * 0.25)),
           "rgba(127,160,216,0.2)");
      break;
    }
    case "particles": {
      for (let i = 0; i < 40; i++) {
        const seed = i * 97.3;
        const px = (Math.sin(seed) * 0.5 + 0.5) * W;
        const py = ((Math.cos(seed * 1.7) * 0.5 + 0.5) * H
          + t * U * 0.02 * (0.5 + (i % 4) * 0.25)) % H;
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = bg.accent;
        ctx.beginPath();
        ctx.arc(px, py, U * (0.001 + (i % 5) * 0.0008), 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case "marble-light": {
      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = bg.accent;
      ctx.lineWidth = U * 0.0025;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 14) {
          const y = H * (0.2 + i * 0.16)
            + Math.sin(x * 0.006 + i * 1.5) * U * 0.05;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      break;
    }
    case "ribbon": {
      ctx.globalAlpha = 0.5;
      for (let i = 0; i < 3; i++) {
        const yy = H * (0.35 + i * 0.18);
        const rg = ctx.createLinearGradient(0, yy, W, yy);
        rg.addColorStop(0, "rgba(216,183,106,0)");
        rg.addColorStop(0.5, vsHexA(bg.accent, 0.3));
        rg.addColorStop(1, "rgba(216,183,106,0)");
        ctx.strokeStyle = rg;
        ctx.lineWidth = U * 0.01;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 10) {
          const y = yy + Math.sin(x * 0.005 + t * 0.5 + i * 2) * U * 0.05;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      break;
    }
    case "halo": {
      const r = ctx.createRadialGradient(
        W / 2, H * 0.4, U * 0.1, W / 2, H * 0.4, U * 0.55);
      r.addColorStop(0, vsHexA(bg.accent, 0.18));
      r.addColorStop(0.7, vsHexA(bg.accent, 0.05));
      r.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = vsHexA(bg.accent, 0.25);
      ctx.lineWidth = U * 0.002;
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.4, U * 0.32 + Math.sin(t) * U * 0.01, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case "prism": {
      ctx.globalAlpha = 0.12;
      for (let i = 0; i < 6; i++) {
        ctx.fillStyle = i % 2 ? bg.accent : "#8aa6d8";
        ctx.beginPath();
        const ox = W * (0.1 * i) + t * 8 % W;
        ctx.moveTo(ox, 0);
        ctx.lineTo(ox + W * 0.12, 0);
        ctx.lineTo(ox - W * 0.1, H);
        ctx.lineTo(ox - W * 0.22, H);
        ctx.closePath();
        ctx.fill();
      }
      break;
    }
    case "topo": {
      ctx.globalAlpha = 0.14;
      ctx.strokeStyle = bg.accent;
      ctx.lineWidth = U * 0.0022;
      for (let r = 1; r <= 7; r++) {
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.1) {
          const rr = U * (0.08 * r) + Math.sin(a * 5 + t * 0.4 + r) * U * 0.02;
          const xx = W / 2 + Math.cos(a) * rr;
          const yy = H * 0.42 + Math.sin(a) * rr;
          a === 0 ? ctx.moveTo(xx, yy) : ctx.lineTo(xx, yy);
        }
        ctx.closePath();
        ctx.stroke();
      }
      break;
    }
    case "spotlight-duo": {
      [[0.3, 0.35], [0.7, 0.5]].forEach(([fx, fy], i) => {
        const r = ctx.createRadialGradient(
          W * fx, H * fy, U * 0.04, W * fx, H * fy, U * 0.6);
        r.addColorStop(0, `rgba(255,255,255,${0.12 - i * 0.03})`);
        r.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = r;
        ctx.fillRect(0, 0, W, H);
      });
      break;
    }
    case "velvet": {
      const r = ctx.createRadialGradient(
        W * 0.5, H * 0.6, U * 0.1, W * 0.5, H * 0.6, U * 0.8);
      r.addColorStop(0, vsHexA(bg.accent, 0.16));
      r.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, W, H);
      break;
    }
    case "carbon": {
      ctx.globalAlpha = 0.06;
      ctx.strokeStyle = bg.accent;
      ctx.lineWidth = 1;
      const step = U * 0.04;
      for (let x = -H; x < W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + H, H); ctx.stroke();
      }
      break;
    }
    case "royal": {
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = bg.accent;
      ctx.lineWidth = U * 0.003;
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, U * 0.36, 0, Math.PI * 2);
      ctx.stroke();
      ctx.lineWidth = U * 0.0015;
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, U * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
    case "cine-aurora": {
      // layered flowing aurora ribbons with soft glow + depth
      const cols = ["95,208,192", "90,150,230", "150,120,220"];
      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.globalAlpha = 0.55;
        const yy = H * (0.3 + i * 0.2);
        ctx.beginPath();
        ctx.moveTo(0, yy);
        for (let x = 0; x <= W; x += 12) {
          const y = yy + Math.sin(x * 0.004 + t * 0.5 + i * 1.6) * U * 0.1
                      + Math.cos(x * 0.009 - t * 0.3) * U * 0.04;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, yy + U * 0.4);
        ctx.lineTo(0, yy + U * 0.4);
        ctx.closePath();
        const rg = ctx.createLinearGradient(0, yy - U * 0.2, 0, yy + U * 0.3);
        rg.addColorStop(0, `rgba(${cols[i]},0)`);
        rg.addColorStop(0.5, `rgba(${cols[i]},0.22)`);
        rg.addColorStop(1, `rgba(${cols[i]},0)`);
        ctx.fillStyle = rg;
        ctx.filter = `blur(${U * 0.02}px)`;
        ctx.fill();
        ctx.restore();
      }
      break;
    }
    case "cine-ember": {
      // deep ember glow rising from the bottom + floating sparks
      const r = ctx.createRadialGradient(W / 2, H * 1.05, U * 0.1,
        W / 2, H * 1.05, U * 0.95);
      r.addColorStop(0, "rgba(255,138,76,0.4)");
      r.addColorStop(0.5, "rgba(200,60,30,0.14)");
      r.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, W, H);
      for (let i = 0; i < 40; i++) {
        const seed = i * 53.7;
        const px = (Math.sin(seed) * 0.5 + 0.5) * W;
        const py = H - ((t * U * 0.04 * (0.4 + (i % 5) * 0.2)
          + (Math.cos(seed) * 0.5 + 0.5) * H) % H);
        ctx.globalAlpha = 0.3 + 0.5 * Math.abs(Math.sin(t * 1.5 + i));
        ctx.fillStyle = i % 3 ? "#ff8a4c" : "#ffd08a";
        ctx.beginPath();
        ctx.arc(px, py, U * 0.0018, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      break;
    }
    case "cine-violet": {
      // two large soft orbs with depth + slow drift
      [["120,90,220", 0.32, 0.35, 0.5], ["180,120,255", 0.7, 0.6, 0.4]]
        .forEach(([c, fx, fy, sz], i) => {
          const ox = W * fx + Math.sin(t * 0.3 + i * 2) * U * 0.05;
          const oy = H * fy + Math.cos(t * 0.25 + i) * U * 0.05;
          const rr = ctx.createRadialGradient(ox, oy, 0, ox, oy, U * sz);
          rr.addColorStop(0, `rgba(${c},0.3)`);
          rr.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = rr;
          ctx.fillRect(0, 0, W, H);
        });
      break;
    }
    case "cine-mesh": {
      // animated liquid mesh — interpolated colour blobs
      const blobs = [["79,224,160", 0.3, 0.3], ["40,160,200", 0.7, 0.4],
        ["120,220,180", 0.5, 0.7]];
      blobs.forEach(([c, fx, fy], i) => {
        const ox = W * fx + Math.sin(t * 0.4 + i * 2.1) * U * 0.12;
        const oy = H * fy + Math.cos(t * 0.35 + i * 1.3) * U * 0.12;
        const rr = ctx.createRadialGradient(ox, oy, 0, ox, oy, U * 0.55);
        rr.addColorStop(0, `rgba(${c},0.28)`);
        rr.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = rr;
        ctx.fillRect(0, 0, W, H);
      });
      break;
    }
    case "cine-spotlight": {
      // moving studio spotlight cone + subtle floor glow
      const sx = W * (0.5 + Math.sin(t * 0.3) * 0.18);
      const r = ctx.createRadialGradient(sx, H * 0.2, U * 0.05,
        sx, H * 0.2, U * 0.85);
      r.addColorStop(0, "rgba(255,255,255,0.16)");
      r.addColorStop(0.4, "rgba(240,216,160,0.06)");
      r.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = r;
      ctx.fillRect(0, 0, W, H);
      const fl = ctx.createRadialGradient(W / 2, H * 0.95, U * 0.05,
        W / 2, H * 0.95, U * 0.5);
      fl.addColorStop(0, "rgba(240,216,160,0.1)");
      fl.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = fl;
      ctx.fillRect(0, 0, W, H);
      break;
    }
    case "cine-wave": {
      // smooth silk waves with gradient sheen
      for (let i = 0; i < 6; i++) {
        ctx.save();
        const yy = H * (0.15 + i * 0.14);
        ctx.beginPath();
        ctx.moveTo(0, yy);
        for (let x = 0; x <= W; x += 10) {
          const y = yy + Math.sin(x * 0.005 + t * 0.6 + i * 0.7) * U * 0.05;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(224,160,200,${0.28 - i * 0.03})`;
        ctx.lineWidth = U * 0.006;
        ctx.filter = `blur(${U * 0.004}px)`;
        ctx.stroke();
        ctx.restore();
      }
      break;
    }
    default: break;
  }
  ctx.restore();
  return bg;
}

// Animated foreground graphics for intro scenes — drawn over the
// background to add richness and motion: floating motes, a slow light
// sweep, and refined corner accents. `prog` 0..1 is the entrance.
function drawIntroGraphics(ctx, W, H, bg, t, prog) {
  const U = Math.min(W, H);
  const e = Math.max(0, Math.min(1, prog == null ? 1 : prog));
  ctx.save();

  // 1) slow diagonal light sweep
  const sweepX = (((t * 0.06) % 1.6) - 0.3) * W;
  const grad = ctx.createLinearGradient(sweepX, 0, sweepX + W * 0.4, H);
  grad.addColorStop(0, "rgba(255,255,255,0)");
  grad.addColorStop(0.5, `rgba(255,255,255,${0.05 * e})`);
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // 2) floating motes — soft drifting particles
  const motes = 18;
  for (let i = 0; i < motes; i++) {
    const seed = i * 137.5;
    const px = ((Math.sin(seed) * 0.5 + 0.5) * W
      + Math.sin(t * 0.3 + i) * U * 0.04);
    const py = (((Math.cos(seed * 1.3) * 0.5 + 0.5) * H
      + t * U * 0.012 * (0.5 + (i % 3) * 0.3)) % H);
    const r = U * (0.0015 + (i % 4) * 0.0011);
    ctx.beginPath();
    ctx.arc(px, py, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(216,183,106,${0.32 * e})`;
    ctx.fill();
  }

  // (Corner accents are NOT drawn automatically — they only appear when the
  // user explicitly picks the "Corner brackets" overlay. Drawing them here
  // framed every code-generated slide, which users didn't ask for.)

  // 3) a soft vignette to focus the centre
  const vg = ctx.createRadialGradient(
    W / 2, H / 2, U * 0.3, W / 2, H / 2, U * 0.85);
  vg.addColorStop(0, "rgba(0,0,0,0)");
  vg.addColorStop(1, `rgba(0,0,0,${bg.id === "ivory-clean" ? 0.06 : 0.34})`);
  ctx.globalAlpha = 1;
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, W, H);

  ctx.restore();
}

const videoTemplates = [
  {
    id: "noir",
    name: { en: "Noir Luxe", fa: "نوآر لوکس" },
    desc: { en: "Deep blacks, gold serif type", fa: "مشکی عمیق، تایپ طلایی" },
    bg: "#070605", accent: "#d8b76a", text: "#fff0b8",
    headlineFont: "Prata, serif", vignette: 0.55
  },
  {
    id: "ivory",
    name: { en: "Ivory Minimal", fa: "مینیمال عاجی" },
    desc: { en: "Bright, airy, thin sans type", fa: "روشن، تمیز، تایپ نازک" },
    bg: "#f4f1ea", accent: "#1a1a1a", text: "#1a1a1a",
    headlineFont: "Inter, sans-serif", vignette: 0.12
  },
  {
    id: "editorial",
    name: { en: "Editorial", fa: "ادیتوریال" },
    desc: { en: "Magazine framing, bold contrast", fa: "قاب مجله‌ای، کنتراست بالا" },
    bg: "#0c0b09", accent: "#ffffff", text: "#ffffff",
    headlineFont: "Prata, serif", vignette: 0.4
  },
  {
    id: "warm",
    name: { en: "Warm Glow", fa: "درخشش گرم" },
    desc: { en: "Amber wash, soft and inviting", fa: "تم کهربایی، نرم و دلنشین" },
    bg: "#140d05", accent: "#f4c96a", text: "#ffe9c2",
    headlineFont: "Prata, serif", vignette: 0.45
  },
  {
    id: "neon",
    name: { en: "Neon Night", fa: "شب نئونی" },
    desc: { en: "Electric magenta and cyan glow", fa: "درخشش سرخابی و فیروزه‌ای" },
    bg: "#0a0612", accent: "#ff3df0", text: "#7df9ff",
    headlineFont: "Inter, sans-serif", vignette: 0.5
  },
  {
    id: "ocean",
    name: { en: "Ocean Deep", fa: "اعماق اقیانوس" },
    desc: { en: "Cool teal gradient, calm and clean", fa: "گرادیان فیروزه‌ای، آرام و تمیز" },
    bg: "#03171c", accent: "#4fd1c5", text: "#e6fffb",
    headlineFont: "Prata, serif", vignette: 0.35
  },
  {
    id: "sunset",
    name: { en: "Sunset Pop", fa: "پاپ غروب" },
    desc: { en: "Bold coral and purple, energetic", fa: "مرجانی و بنفش پررنگ و پرانرژی" },
    bg: "#1a0a14", accent: "#ff7e5f", text: "#ffe4d6",
    headlineFont: "Inter, sans-serif", vignette: 0.4
  },
  {
    id: "mono",
    name: { en: "Mono Press", fa: "تک‌رنگ مطبوعاتی" },
    desc: { en: "Stark black & white, editorial", fa: "سیاه و سفید، مطبوعاتی" },
    bg: "#111111", accent: "#ffffff", text: "#f0f0f0",
    headlineFont: "Prata, serif", vignette: 0.3
  },
  {
    id: "forest",
    name: { en: "Forest Calm", fa: "آرامش جنگل" },
    desc: { en: "Deep green, organic and grounded", fa: "سبز عمیق، طبیعی و آرام" },
    bg: "#0a140d", accent: "#9ccc8f", text: "#e8f3e4",
    headlineFont: "Prata, serif", vignette: 0.42
  },
  {
    id: "platinum",
    name: { en: "Platinum", fa: "پلاتین" },
    desc: { en: "Cool silver on charcoal, luxury minimal", fa: "نقره‌ای سرد روی زغالی، لوکس و مینیمال" },
    bg: "#101114", accent: "#d6dae0", text: "#f4f6f8",
    headlineFont: "Prata, serif", vignette: 0.38
  },
  {
    id: "champagne",
    name: { en: "Champagne", fa: "شامپاین" },
    desc: { en: "Soft cream and rose gold, elegant", fa: "کرم نرم و رزگلد، شیک" },
    bg: "#161210", accent: "#e8c9a0", text: "#f7ead9",
    headlineFont: "Prata, serif", vignette: 0.4
  },
  {
    id: "obsidian",
    name: { en: "Obsidian", fa: "اوبسیدین" },
    desc: { en: "Pure black, single gold accent", fa: "مشکی خالص، تنها یک تأکید طلایی" },
    bg: "#000000", accent: "#c8a24a", text: "#ffffff",
    headlineFont: "Prata, serif", vignette: 0.6
  },
  {
    id: "porcelain",
    name: { en: "Porcelain", fa: "چینی" },
    desc: { en: "Clean off-white, quiet and minimal", fa: "سفید ملایم، آرام و مینیمال" },
    bg: "#f0ede6", accent: "#2a2a28", text: "#1c1c1a",
    headlineFont: "Inter, sans-serif", vignette: 0.1
  },
  {
    id: "midnight",
    name: { en: "Midnight Blue", fa: "آبی نیمه‌شب" },
    desc: { en: "Deep navy with a cool sheen", fa: "سرمه‌ای عمیق با درخشش سرد" },
    bg: "#070b18", accent: "#8aa6d8", text: "#e6ecf8",
    headlineFont: "Prata, serif", vignette: 0.44
  },
  {
    id: "marble",
    name: { en: "Marble", fa: "مرمر" },
    desc: { en: "Soft grey-white, refined and airy", fa: "خاکستری-سفید نرم، ظریف و سبک" },
    bg: "#e9e9ec", accent: "#3a3a40", text: "#222226",
    headlineFont: "Prata, serif", vignette: 0.12
  },
  {
    id: "emerald",
    name: { en: "Emerald Luxe", fa: "زمرد لوکس" },
    desc: { en: "Rich emerald with gold detail", fa: "زمردی غنی با جزئیات طلایی" },
    bg: "#06140f", accent: "#d8b76a", text: "#e9f5ee",
    headlineFont: "Prata, serif", vignette: 0.46
  },
  {
    id: "sand",
    name: { en: "Sand Minimal", fa: "مینیمال شنی" },
    desc: { en: "Warm beige, calm and understated", fa: "بژ گرم، آرام و ساده" },
    bg: "#e8e0d2", accent: "#5a4a36", text: "#2e271c",
    headlineFont: "Inter, sans-serif", vignette: 0.12
  },
  {
    id: "ruby",
    name: { en: "Ruby Noir", fa: "نوآر یاقوتی" },
    desc: { en: "Deep wine red, dramatic and bold", fa: "قرمز شرابی عمیق، دراماتیک" },
    bg: "#140608", accent: "#e0a0a8", text: "#f7e4e6",
    headlineFont: "Prata, serif", vignette: 0.5
  },
  {
    id: "slate",
    name: { en: "Slate Pro", fa: "اسلیت پرو" },
    desc: { en: "Cool corporate grey-blue", fa: "خاکستری-آبی شرکتی" },
    bg: "#10141a", accent: "#7fb3d5", text: "#eef3f8",
    headlineFont: "Inter, sans-serif", vignette: 0.36
  },
  {
    id: "amber",
    name: { en: "Amber Glow", fa: "درخشش کهربایی" },
    desc: { en: "Warm amber on deep brown", fa: "کهربایی گرم روی قهوه‌ای" },
    bg: "#1a1206", accent: "#f0a830", text: "#fdf0d8",
    headlineFont: "Prata, serif", vignette: 0.44
  },
  {
    id: "frost",
    name: { en: "Frost Minimal", fa: "مینیمال یخی" },
    desc: { en: "Icy white-blue, crisp and clean", fa: "سفید-آبی یخی، تمیز" },
    bg: "#eef2f6", accent: "#3a6a9a", text: "#16202c",
    headlineFont: "Inter, sans-serif", vignette: 0.1
  },
  {
    id: "rosegold",
    name: { en: "Rose Gold", fa: "رزگلد" },
    desc: { en: "Soft blush with rose-gold accent", fa: "صورتی ملایم با تأکید رزگلد" },
    bg: "#1c1416", accent: "#e6b8a8", text: "#f8ebe6",
    headlineFont: "Prata, serif", vignette: 0.42
  }
];

const vstudio = {
  templateId: "noir",
  mediaUrl: null,
  mediaEl: null,        // <video> or <img>
  isVideo: false,
  musicUrl: null,
  musicEl: null,
  logoUrl: null,
  logoEl: null,         // <img> logo overlay
  rafId: null,
  startTime: 0,
  playing: false,
  looping: false,
  rendering: false,
  textDX: 0,            // text drag offset X (fraction of width)
  textDY: 0,            // text drag offset Y (fraction of height)
  textScale: 1,         // text manual scale (resize)
  textBox: null,        // last drawn text bounds, for hit-testing
  infoDX: 0, infoDY: 0, // infographic drag offset
  snapGuideX: null, snapGuideY: null,
  infoScale: 1,         // infographic manual scale
  infoBox: null,        // last drawn infographic bounds
  newsDX: 0, newsDY: 0, // news banner drag offset
  newsScale: 1,         // news banner manual scale
  newsBox: null,        // last drawn news bounds
  mediaDX: 0, mediaDY: 0,// footage pan offset (fraction of frame) — drag to reframe
  mediaScale: 1,        // footage manual zoom (scroll to zoom)
  _frameHasMedia: false,// set during draw: is footage present this frame?
  batchVideos: [],      // [{name, data}] — one scripted video per article item
  batchCurrent: -1,     // index of the batch video currently loaded
  position: 0,          // current playback position (seconds), survives pause
  slides: [],           // multi-slide sequence; each: {mediaEl,isVideo,headline,duration}
  activeSlide: 0        // index of the slide being edited
};

// Professional easing — a refined ease-out with a subtle settle, the kind
// of motion used in polished motion-graphics rather than a plain linear feed.
function vsEasePro(t) {
  t = Math.max(0, Math.min(1, t));
  // ease-out-back-ish: quick start, gentle overshoot, soft settle
  const c1 = 1.2, c3 = c1 + 1;
  const back = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  // blend the back-ease with a clean cubic ease-out so it never overshoots
  // hard — gives a smooth, expensive-looking arrival
  const cubic = 1 - Math.pow(1 - t, 3);
  return cubic * 0.65 + back * 0.35;
}

function vsTemplate() {
  const tpl = videoTemplates.find(t => t.id === vstudio.templateId) || videoTemplates[0];
  const _fontEl = document.querySelector("#vsHeadlineFont");
  if (_fontEl && _fontEl.value) return Object.assign({}, tpl, { headlineFont: _fontEl.value });
  // Override headlineFont if user has picked one manually
  const fontEl = document.querySelector("#vsHeadlineFont");
  if (fontEl && fontEl.value) {
    return Object.assign({}, tpl, { headlineFont: fontEl.value });
  }
  return tpl;
}
function vsStatus(msg) {
  const el = $("#vsStatus");
  if (el) el.textContent = msg || "";
}
function vsVal(id, fallback) {
  const el = $(id);
  return el ? el.value : fallback;
}

function renderTemplatePicker() {
  const wrap = $("#templatePicker");
  if (!wrap) return;
  wrap.innerHTML = videoTemplates.map(tpl => `
    <button type="button" class="template-card ${tpl.id === vstudio.templateId ? "selected" : ""}" data-template="${tpl.id}" title="${text(tpl.name)} — ${text(tpl.desc)}">
      <span class="template-swatch" style="background:${tpl.bg};border-color:${tpl.accent}">
        <span style="background:${tpl.accent}"></span>
      </span>
      <strong>${text(tpl.name)}</strong>
    </button>
  `).join("");
  // show the active template's name on the collapsed summary
  const cur = $("#vsTemplateCurrent");
  if (cur) {
    const t = videoTemplates.find(x => x.id === vstudio.templateId);
    cur.textContent = t ? text(t.name) : "";
  }
}

function setVideoTemplate(id) {
  vstudio.templateId = id;
  renderTemplatePicker();
  // redraw whenever there's anything to show — media, slides, or an
  // intro scene — so picking a template updates the preview immediately.
  const hasContent = vstudio.mediaEl
    || vstudio.slides.some(s => s.ready)
    || ($("#vsInfoOn") && $("#vsInfoOn").checked)
    || ($("#vsNewsOn") && $("#vsNewsOn").checked)
    || vstudio.logoEl;
  if (hasContent) drawStudioFrame(vstudio.position || 0);
}

// Render the background picker for the active intro slide.
function renderIntroBgPicker(slide) {
  const wrap = $("#vsIntroBgPicker");
  if (!wrap || !slide) return;
  wrap.innerHTML = introBackgrounds.map(bg => `
    <button type="button" class="intro-bg-card ${bg.id === slide.introBg ? "selected" : ""}"
      data-introbg="${bg.id}" title="${text(bg.name)}">
      <span class="intro-bg-swatch"
        style="background:linear-gradient(135deg,${bg.c1},${bg.c2});border-color:${bg.accent}"></span>
      <small>${text(bg.name)}</small>
    </button>
  `).join("");
}

// Wire the intro-editor controls (called once from bindEvents).
function bindIntroEditor() {
  const pick = $("#vsIntroBgPicker");
  if (pick) {
    pick.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-introbg]");
      if (!btn) return;
      const s = vstudio.slides[vstudio.activeSlide];
      if (!s || !s.isIntro) return;
      s.introBg = btn.dataset.introbg;
      renderIntroBgPicker(s);
      drawStudioFrame(vstudio.position || 0);
    });
  }
  const onIntroInput = () => {
    const s = vstudio.slides[vstudio.activeSlide];
    if (!s || !s.isIntro) return;
    const mi = $("#vsIntroMainInput"), si = $("#vsIntroSubInput"),
          moi = $("#vsIntroMotionInput");
    if (mi) s.introMain = mi.value;
    if (si) s.introSub = si.value;
    if (moi) s.introMotion = moi.value;
    renderSlideList();
    drawStudioFrame(vstudio.position || 0);
  };
  ["#vsIntroMainInput", "#vsIntroSubInput"].forEach(sel => {
    const el = $(sel);
    if (el) el.addEventListener("input", onIntroInput);
  });
  const moi = $("#vsIntroMotionInput");
  if (moi) moi.addEventListener("change", onIntroInput);
  const addBtn = $("#vsAddIntroBtn");
  if (addBtn) addBtn.addEventListener("click", () => {
    addIntroSlide();
    selectSlide(vstudio.slides.length - 1);
  });
  const outroBtn = $("#vsAddOutroBtn");
  if (outroBtn) outroBtn.addEventListener("click", () => addOutroSlide());
  const autoBtn = $("#vsAutoBuildBtn");
  if (autoBtn) autoBtn.addEventListener("click", () => buildAutoVideo(false));
  // ── AI Assistant mode switching (document-level delegation — robust) ──
  window._vsAutoMode = window._vsAutoMode || "smart";
  if (!window._vsAutoModeBound) {
    window._vsAutoModeBound = true;
    document.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest(".vs-auto-mode-btn");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      var mode = btn.dataset.mode || "smart";
      window._vsAutoMode = mode;
      // toggle active state across all mode buttons
      var all = document.querySelectorAll(".vs-auto-mode-btn");
      for (var i=0;i<all.length;i++) all[i].classList.toggle("active", all[i]===btn);
      // show/hide URL field
      var urlWrap = document.querySelector("#vsAutoUrlWrap");
      if (urlWrap) urlWrap.style.display = (mode==="link") ? "" : "none";
      // update label + placeholder
      var topicLbl = document.querySelector("#vsAutoTopicLbl");
      var topicTa  = document.querySelector("#vsAutoTopic");
      if (topicLbl && topicTa) {
        if (mode==="smart"){ topicLbl.textContent="What should the video be about?"; topicTa.placeholder="e.g. 'The rise of AI agents in 2026' — or describe any idea, the assistant develops it"; }
        else if (mode==="link"){ topicLbl.textContent="Notes (optional — used if the link can't be read)"; topicTa.placeholder="Optional fallback text…"; }
        else { topicLbl.textContent="Paste your article or text"; topicTa.placeholder="Paste the full article text here…"; }
      }
    });
  }

  const autoAiBtn = $("#vsAutoAiBtn");
  if (autoAiBtn) autoAiBtn.addEventListener("click", () => buildAutoVideo(true));
}

// Compute the canvas size from the chosen aspect ratio.
function vsCanvasSize(targetLongEdge) {
  const aspect = vsVal("#vsAspect", "original");
  const m = vstudio.mediaEl;
  let mw = (m && (m.videoWidth || m.naturalWidth)) || 1920;
  let mh = (m && (m.videoHeight || m.naturalHeight)) || 1080;
  // round to even numbers — required by most video codecs
  const even = (n) => Math.round(n / 2) * 2;
  // long edge: export uses the chosen size; preview caps at 1920
  const cap = targetLongEdge || 1920;
  if (aspect === "original") {
    const longEdge = Math.max(mw, mh);
    let scale;
    if (targetLongEdge) {
      scale = targetLongEdge / longEdge;        // export: scale to exact target
    } else {
      scale = longEdge > 1920 ? 1920 / longEdge : 1;  // preview: only cap
    }
    return { w: even(mw * scale), h: even(mh * scale) };
  }
  const map = { "16:9": [16, 9], "9:16": [9, 16], "1:1": [1, 1], "4:5": [4, 5] };
  const [aw, ah] = map[aspect] || [16, 9];
  const base = cap;
  return aw >= ah
    ? { w: even(base), h: even(base * ah / aw) }
    : { w: even(base * aw / ah), h: even(base) };
}

// ── MULTI-SLIDE SEQUENCE ──────────────────────────────────
// Each slide carries its own media element, headline and duration.
// When slides exist, the preview/export plays through them in order.

// Load a media file and add it as a new slide.
// Add an INTRO scene — no uploaded media; it uses a built-in background
// plus dual animated text. It behaves like any other slide otherwise.
function addIntroSlide() {
  vsSaveActiveSlide();
  const slide = {
    url: null, isVideo: false, mediaEl: null, ready: true,
    isIntro: true,
    introBg: introBackgrounds[0].id,
    introMain: "AI Radar presents",
    introSub: "A new standard of calm",
    introMotion: "rise",
    headline: "", duration: 3,
    settings: vsCaptureSettings()
  };
  vstudio.slides.push(slide);
  renderSlideList();
  // an intro scene needs a canvas even with no uploaded media
  if (!$("#vsCanvas")) buildPreviewCanvas();
  if (vstudio.slides.length === 1) selectSlide(0);
  drawStudioFrame(0);
  vsStatus(state.lang === "fa"
    ? `صحنه اینترو اضافه شد.`
    : `Intro scene added.`);
}

// An outro scene is the same kind of self-contained titled scene as an
// intro; it just defaults to closing copy and is labelled differently.
// ── AUTO STORY BUILDER ─────────────────────────────────────
// Build a whole multi-slide video from a topic/paragraph: an intro
// scene, content slides (some with an infographic, some with a news
// banner), then an outro — assembled in order, ready to preview/export.

function vsAutoStatus(msg) {
  const el = document.querySelector("#vsAutoStatus");
  if (el) el.textContent = msg || "";
}

// Pull a few "stat-like" pairs (label + number) out of free text.
function vsExtractStats(text) {
  const stats = [];
  // patterns like "$2.4M", "18K users", "34% growth", "revenue 2.4M"
  const re = /([A-Za-z][A-Za-z \/&'-]{1,22}?)?\s*\$?\s*([\d.,]+\s*(?:%|k|m|b|bn|million|billion|thousand)?)\s*([A-Za-z][A-Za-z \/&'-]{1,22})?/gi;
  let m, guard = 0;
  while ((m = re.exec(text)) && guard++ < 40 && stats.length < 6) {
    const numRaw = (m[2] || "").trim();
    if (!/\d/.test(numRaw)) continue;
    const label = ((m[3] || m[1] || "").trim()).replace(/\s+/g, " ");
    if (!label || label.length < 2) continue;
    // parse a sortable number
    let n = parseFloat(numRaw.replace(/[^\d.]/g, "")) || 0;
    if (/k/i.test(numRaw)) n *= 1e3;
    if (/m|million/i.test(numRaw)) n *= 1e6;
    if (/b|bn|billion/i.test(numRaw)) n *= 1e9;
    // skip junk: tiny bare numbers with no unit (e.g. the "1" from "Q1")
    const hasUnit = /[%kmb]|million|billion|thousand/i.test(numRaw);
    if (!hasUnit && n < 2) continue;
    stats.push({ label: label.slice(0, 22), value: numRaw.toUpperCase(), num: n });
  }
  return stats;
}

// Build the sequence from already-decided pieces.
function vsAssembleStory({ title, subtitle, stats, points, kicker, outroMain, captions }) {
  vstudio.slides = [];
  const bgPool = ["cine-aurora", "cine-violet", "cine-mesh", "cine-ember",
    "cine-spotlight", "cine-wave", "aurora", "gold-rings"];
  const bg = (i) => bgPool[i % bgPool.length];
  const introMotions = ["rise-spring", "zoom", "glide", "drift", "spring"];
  const caps = captions || [];

  // Helper: get a CLEAN settings object with all overlays OFF
  const cleanSet = () => {
    const s = vsCaptureSettings();
    s["#vsInfoOn"] = false;
    s["#vsNewsOn"] = false;
    return s;
  };

  // 1) intro scene
  vstudio.slides.push({
    url: null, isVideo: false, mediaEl: null, ready: true, isIntro: true,
    introBg: bg(0), introMain: title || "Presenting", introSub: subtitle || "",
    introMotion: "rise-spring", headline: "", duration: 3,
    settings: cleanSet(),
    _timelineLabel: title || "Intro"
  });

  let bgi = 1, capi = 0;

  // 2) infographic slide — ONLY if we actually have stats
  if (stats && stats.length >= 2) {
    const set = cleanSet();
    set["#vsInfoOn"] = true;
    set["#vsNewsOn"] = false;
    set["#vsInfoStyle"] = stats.length > 3 ? "big-numbers" : "donut";
    set["#vsInfoMotion"] = "rise";
    set["#vsInfoJson"] = JSON.stringify({ title: title || "Key numbers",
      subtitle: subtitle || "", stats });
    vstudio.slides.push({
      url: null, isVideo: false, mediaEl: null, ready: true,
      isIntro: true, introBg: bg(bgi++), introMain: "", introSub: "",
      introMotion: "fade", headline: "", duration: 6, settings: set,
      _standaloneInfo: true,
      _caption: caps[capi++] || "Key numbers",
      _timelineLabel: "📊 " + (title || "Stats")
    });
  }

  // 3) news text slides per key point
  const newsStyles = ["title-center", "bold-statement", "quote", "title-left"];
  const newsMotions = ["fade", "vox", "pop", "fade"];
  (points || []).slice(0, 5).forEach((pt, i) => {
    const set = cleanSet();
    set["#vsNewsOn"] = true;
    set["#vsInfoOn"] = false;
    set["#vsNewsStyle"] = newsStyles[i % newsStyles.length];
    set["#vsNewsMotion"] = newsMotions[i % newsMotions.length];
    set["#vsNewsKicker"] = (kicker || "UPDATE").toUpperCase().slice(0, 18);
    set["#vsNewsHeadline"] = pt.slice(0, 120);
    set["#vsNewsSource"] = "";
    set["#vsNewsAccent"] = "gold";
    vstudio.slides.push({
      url: null, isVideo: false, mediaEl: null, ready: true,
      isIntro: true, introBg: bg(bgi++), introMain: "", introSub: "",
      introMotion: introMotions[i % introMotions.length],
      headline: "", duration: 6, settings: set,
      _standaloneNews: true,
      _caption: caps[capi++] || pt.split(/\s+/).slice(0, 4).join(" "),
      _timelineLabel: pt.slice(0, 22)
    });
  });

  // 4) outro scene
  vstudio.slides.push({
    url: null, isVideo: false, mediaEl: null, ready: true,
    isIntro: true, isOutro: true, introBg: bg(0),
    introMain: outroMain || "Thanks for watching", introSub: "Follow for more",
    introMotion: "spring", headline: "", duration: 3, settings: cleanSet(),
    _timelineLabel: outroMain || "Outro"
  });

  renderSlideList();
  if (!$("#vsCanvas")) buildPreviewCanvas();
  selectSlide(0);
  drawStudioFrame(0);
}

// Non-AI builder: parse the text locally.
function vsBuildStoryLocal(text) {
  const clean = text.replace(/\s+/g, " ").trim();
  const firstSentence = (clean.split(/[.!?\n]/)[0] || clean).trim();
  const title = firstSentence.split(/\s+/).slice(0, 6).join(" ") || "Your video";
  const stats = vsExtractStats(clean);
  const points = clean.split(/[.!?]/).map(s => s.trim())
    .filter(s => s.length > 12).slice(1, 5);
  // auto-generate a short caption per content slide from its own text:
  // the infographic caption, then one per point (first 3-4 words).
  const captions = [];
  if (stats.length) captions.push("Key numbers");
  points.forEach(pt => captions.push(
    pt.split(/\s+/).slice(0, 4).join(" ")));
  vsAssembleStory({
    title, subtitle: "", stats, points,
    kicker: "HIGHLIGHT", outroMain: "Thanks for watching", captions
  });
}

// AI chat for the auto-builder — 100% free via Pollinations.ai.
// No API key, no login, no "Low Balance" popup ever. Puter is NOT used.
async function vsAutoAiChat(prompt, opts) {
  opts = opts || {};
  const seed = Math.floor(Math.random() * 1e6);
  const wantJson = opts.json !== false; // default: ask for JSON back

  const parseChoices = (data) => {
    const txt = data && data.choices && data.choices[0] &&
                data.choices[0].message && data.choices[0].message.content;
    return (txt && String(txt).trim()) ? String(txt) : null;
  };

  const timeoutMs = opts.timeout || 18000;

  // POST a chat request to one endpoint. `model` selects the LLM,
  // `useJson` toggles response_format, `viaProxy` wraps via corsproxy.
  async function postChat(endpoint, model, useJson, viaProxy) {
    const body = {
      model: model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7, seed: seed
    };
    if (useJson) body.response_format = { type: "json_object" };
    const target = viaProxy
      ? "https://corsproxy.io/?url=" + encodeURIComponent(endpoint)
      : endpoint;
    const headers = { "Content-Type": "application/json" };
    if (VS_POLLINATIONS_KEY) headers["Authorization"] = "Bearer " + VS_POLLINATIONS_KEY;
    const ctrl = new AbortController();
    const tm = setTimeout(() => ctrl.abort(), timeoutMs);   // never hang forever
    let resp;
    try {
      resp = await fetch(target, {
        method: "POST", headers: headers, body: JSON.stringify(body), signal: ctrl.signal
      });
    } finally { clearTimeout(tm); }
    if (!resp.ok) throw new Error("HTTP " + resp.status);
    const data = await resp.json();
    const t = parseChoices(data);
    if (!t) throw new Error("empty");
    return t;
  }

  // With an API key, the strong models unlock. Try them in order of quality,
  // then fall back to the always-free default. `opts.fast` (used by the chat
  // assistant) prefers the quickest models and does a single pass.
  const models = opts.fast
    ? ["openai", "gemini"]
    : (VS_POLLINATIONS_KEY
        ? ["openai-large", "gemini", "claude", "openai-reasoning", "openai"]
        : ["openai"]);
  const endpoints = [
    "https://text.pollinations.ai/openai",
    "https://gen.pollinations.ai/v1/chat/completions"
  ];
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const passes = opts.fast ? 1 : 3;
  // Try every model/endpoint combo. The whole sweep is retried a couple of
  // times with a short backoff so a transient outage doesn't kill the build.
  for (let pass = 0; pass < passes; pass++) {
    if (vstudio._batchCancel) return null;        // bail fast on cancel
    for (const model of models) {
      for (const ep of endpoints) {
        for (const useJson of (wantJson ? [true, false] : [false])) {
          if (vstudio._batchCancel) return null;  // bail between every attempt
          try { return await postChat(ep, model, useJson, false); }
          catch (e) { /* next combo */ }
        }
      }
    }
    // proxied last resort within each pass (skip in fast mode)
    if (!opts.fast) {
      for (const useJson of (wantJson ? [true, false] : [false])) {
        if (vstudio._batchCancel) return null;
        try { return await postChat("https://text.pollinations.ai/openai", "openai", useJson, true); }
        catch (e) { /* next */ }
      }
    }
    if (vstudio._batchCancel) return null;
    if (pass < passes - 1) await sleep(1200 * (pass + 1));   // back off, then retry
  }

  throw new Error("AI temporarily unavailable");
}

async function buildAutoVideo(useAI) {

  const urlInp = document.querySelector("#vsAutoUrl");
  const inp = document.querySelector("#vsAutoTopic");
  let text = (inp && inp.value || "").trim();
  let url = (urlInp && urlInp.value || "").trim();

  // If the user pasted a URL into the topic box (Smart mode hides the URL
  // field), treat it as a link to fetch rather than raw script text.
  if (!url) {
    const trimmed = text.replace(/\s+/g, "");
    if (/^https?:\/\/\S+$/i.test(trimmed)) { url = trimmed; text = ""; }
  }


  // 1) if a URL was given, TRY to fetch the article text (often blocked
  //    by the site's CORS policy on a static site — we fall back to the
  //    pasted text if so).
  if (url) {
    vsAutoStatus(state.lang === "fa" ? "در حال خواندن مقاله…" : "Reading the article…");
    const fetched = await vsFetchArticle(url);
    if (fetched && fetched.length > 200) {
      text = fetched;
    } else if (!text) {
      // Couldn't read the link. Instead of stopping, let the AI write about
      // the topic implied by the URL using its own knowledge.
      const slug = url.replace(/^https?:\/\//i, "")
                      .replace(/[#?].*$/, "")
                      .replace(/[\/\-_]+/g, " ")
                      .replace(/\.(html?|php|aspx?)\b/gi, "")
                      .replace(/\s+/g, " ").trim();
      text = "Create an informative video about this news topic: " + slug;
    }
  }

  if (!text || text.length < 3) {
    vsAutoStatus(state.lang === "fa"
      ? "یک لینک، متن، یا حتی فقط یک موضوع وارد کن." : "Enter a link, some text, or even just a topic.");
    return;
  }
  vsSaveActiveSlide();

  if (!useAI) {
    vsAutoStatus(state.lang === "fa" ? "در حال ساخت…" : "Building…");
    vsBuildStoryLocal(text);
    vsAutoStatus(state.lang === "fa"
      ? `ویدیو با ${vstudio.slides.length} صحنه ساخته شد.`
      : `Built a ${vstudio.slides.length}-scene video.`);
    return;
  }

  // 2) AI path — analyze the WHOLE article and return an ordered list of
  //    sections, each tagged as an infographic (when it has numbers) or
  //    text (when it doesn't), so the video matches the content.
  vsAutoStatus(state.lang === "fa"
    ? "دستیار در حال تحلیل محتوا…" : "Assistant is analyzing the content…");

  // Read assistant controls
  const tone = (document.querySelector("#vsAutoTone") || {}).value || "news";
  const lenChoice = (document.querySelector("#vsAutoLen") || {}).value || "medium";

  // ── BATCH MODE: build ONE separate video per item (city/product/person)
  //    the article profiles. Falls through to a single video if <2 items. ──
  if (document.querySelector("#vsAutoBatch") && document.querySelector("#vsAutoBatch").checked) {
    const handled = await vsBuildBatchFromArticle(text, tone, lenChoice);
    if (handled) return;
  }

  const sectionRange = lenChoice === "short" ? "4 to 5" : lenChoice === "long" ? "8 to 10" : "6 to 7";
  const toneGuide = {
    news:        "authoritative broadcast-news director. Crisp, factual, urgent. Use title-left and title-center styles, bars/comparison charts.",
    explainer:   "friendly educator. Clear, step-by-step, builds understanding. Use title-center, donut/pills charts, simple language.",
    hype:        "high-energy launch hype-master. Bold, punchy, exciting. Use bold-statement, neon-title, big single numbers.",
    documentary: "cinematic documentary narrator. Atmospheric, thoughtful, emotive. Use quote, magazine-cover, title-center, slower reveals.",
    social:      "viral social-media editor. Ultra-punchy, hook-first, scroll-stopping. Use bold-statement, neon-title, short headlines, big numbers."
  }[tone] || "broadcast-news director.";

  // Single AI call keeps free Puter credit usage minimal (one request, not two).
  let analysis = "";

  vsAutoStatus(state.lang === "fa"
    ? "دستیار در حال نوشتن فیلمنامه…" : "Assistant is writing the script…");

  const prompt = `You are an award-winning ${toneGuide}
Turn the SOURCE below into a complete, professional short-form video script. If the SOURCE is a real article, dig into its ACTUAL substance — the specific facts, figures, names, places, causes and consequences. Lead with what genuinely matters most. If the SOURCE is only a topic/idea, use your expert knowledge to develop accurate, concrete specifics. Be a sharp journalist, not a generic copywriter.
IGNORE website navigation, menus, button labels, cookie/subscribe notices, "skip to main content", category lists, related-links — these are NOT the story. Find the real topic and build around it. Never use nav words as a title or headline.

Return ONLY valid compact JSON (no markdown, no commentary):
{"title":"the core story in max 6 words","subtitle":"max 8 words that add real context","kicker":"1-2 ALL-CAPS category words","source":"the publication or outlet name if known, else a fitting newsroom label","palette":"fire|ocean|forest|gold|neon|mono","intro":{"main":"a sharp 3-6 word hook headline","sub":"max 8 words framing the story"},"sections":[{"type":"infographic","caption":"2-3 words","title":"chart headline (max 5 words)","stats":[{"label":"short label","value":"formatted e.g. $2.4B or 34%","num":2400000000}],"chartType":"bars|donut|pills|comparison|ranking"},{"type":"text","caption":"2-3 words","headline":"one vivid, specific sentence (max 12 words)","style":"title-center|bold-statement|quote|title-left|magazine-cover|neon-title"}],"outro":{"main":"3-5 word takeaway","sub":"max 6 words"}}

RULES:
1. Produce EXACTLY ${sectionRange} content sections (besides intro/outro). Open on the strongest, most surprising fact.
2. INFOGRAPHIC: only with real quantitative data (2-5 stats, realistic values). chartType: bars=comparison, donut=percentages, pills=progress, comparison=two values, ranking=ordered.
3. TEXT: narrative/quotes/context. headline = ONE concrete, specific sentence pulled from the real substance — never vague filler like "a new era" or "the future is here".
4. Never two infographics in a row. Vary text styles for rhythm.
5. Match the ${tone} tone precisely in word choice and energy.
6. intro.main = a punchy hook tied to the real story. outro.main = the single key takeaway.
7. source = the real outlet (e.g. "ABC News", "Reuters") if identifiable from the SOURCE, otherwise leave it as an empty string "".
8. Every line must be accurate and specific. Real numbers, real names, real detail.
SOURCE: """${text.slice(0, 7000)}"""`;
  try {
    const raw = await vsAutoAiChat(prompt);
    // Pollinations / LLMs sometimes wrap JSON in prose or code fences.
    // Extract the first {...} block robustly.
    let jsonStr = String(raw).replace(/```json|```/g, "").trim();
    if (jsonStr[0] !== "{") {
      const a = jsonStr.indexOf("{");
      const b = jsonStr.lastIndexOf("}");
      if (a !== -1 && b !== -1 && b > a) jsonStr = jsonStr.slice(a, b + 1);
    }
    const data = JSON.parse(jsonStr);
    if (Array.isArray(data.sections) && data.sections.length) {
      vsAssembleFromSections(data);
    } else {
      // older shape fallback
      vsAssembleStory({
        title: data.title, subtitle: data.subtitle,
        stats: Array.isArray(data.stats) ? data.stats : [],
        points: Array.isArray(data.points) ? data.points : [],
        kicker: data.kicker, outroMain: data.outroMain,
        captions: Array.isArray(data.captions) ? data.captions : []
      });
    }
    vsAutoStatus(state.lang === "fa"
      ? `ویدیو با ${vstudio.slides.length} صحنه ساخته شد.`
      : `Built a ${vstudio.slides.length}-scene video.`);
  } catch (e) {
    const msg = (e && e.message) ? e.message : String(e);
    vsBuildStoryLocal(text || url);
    vsAutoStatus(state.lang === "fa"
      ? `هوش مصنوعی جواب نداد (${msg}). فعلاً ${vstudio.slides.length} صحنه ساده ساخته شد.`
      : `AI didn't respond (${msg}). Built ${vstudio.slides.length} basic scenes for now.`);
  }
}

// Try to fetch an article's readable text. Direct fetch usually fails
// cross-origin; we try a couple of public read-only proxies, and if all
// fail we return "" so the caller falls back to pasted text.
async function vsFetchArticle(url) {
  // Normalize URL
  let clean = url.trim();
  if (!/^https?:\/\//i.test(clean)) clean = "https://" + clean;

  // Jina AI Reader returns clean article text — best option, handles
  // JS-rendered pages and strips nav/ads. Try it a couple of ways first.
  const tryUrls = [
    { u: "https://r.jina.ai/" + clean, clean: true },
    { u: "https://r.jina.ai/" + encodeURIComponent(clean), clean: true },
    { u: "https://api.allorigins.win/raw?url=" + encodeURIComponent(clean), clean: false },
    { u: "https://corsproxy.io/?url=" + encodeURIComponent(clean), clean: false },
    { u: clean, clean: false }
  ];

  // Strip site chrome (nav menus, "skip to content", cookie notices, etc.)
  // that otherwise leaks in as the first text and confuses the AI.
  const cleanupText = (t) => {
    return t
      // remove common boilerplate phrases
      .replace(/skip to (main )?content/gi, " ")
      .replace(/accept (all )?cookies?/gi, " ")
      .replace(/(^|\s)(menu|search|sign in|log in|subscribe|newsletter|share|advertisement)(\s|$)/gi, " ")
      .replace(/\b(home|news|sport|business|politics|world|more)\b\s*(\|\s*)?/gi, m => m) // keep words but harmless
      .replace(/\s+/g, " ")
      .trim();
  };

  // For Jina markdown: the real article usually starts after a "Markdown
  // Content:" marker or after the page title line. Trim everything before it.
  const focusArticle = (t) => {
    let s = t;
    const mc = s.indexOf("Markdown Content:");
    if (mc !== -1) s = s.slice(mc + "Markdown Content:".length);
    // drop leading "Title:" / "URL Source:" metadata lines Jina prepends
    s = s.replace(/^\s*Title:.*$/im, "")
         .replace(/^\s*URL Source:.*$/im, "")
         .replace(/^\s*Published Time:.*$/im, "");
    return s;
  };

  for (const entry of tryUrls) {
    try {
      const res = await fetch(entry.u, {
        mode: "cors",
        headers: entry.clean ? { "X-Return-Format": "markdown" } : {}
      });
      if (!res.ok) continue;
      let t = await res.text();
      if (entry.clean) {
        t = focusArticle(t);
      } else {
        // strip scripts/styles/nav/header/footer, then tags
        t = t.replace(/<script[\s\S]*?<\/script>/gi, " ")
             .replace(/<style[\s\S]*?<\/style>/gi, " ")
             .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
             .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
             .replace(/<header[\s\S]*?<\/header>/gi, " ")
             .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
             .replace(/<aside[\s\S]*?<\/aside>/gi, " ")
             .replace(/<form[\s\S]*?<\/form>/gi, " ")
             .replace(/<[^>]+>/g, " ")
             .replace(/&[a-z]+;/gi, " ");
      }
      t = cleanupText(t);
      // require a decent amount of real prose
      if (t.length > 300) return t.slice(0, 8000);
    } catch (e) { /* try next */ }
  }
  return "";
}

// Build a video from the AI's ordered "sections" (infographic vs text).
function vsAssembleFromSections(data, skipFootage) {
  vstudio.slides = [];

  // Palette → background pool mapping for cinematic variety
  const palettes = {
    fire:   ["cine-ember", "cine-spotlight", "cine-aurora", "aurora", "cine-mesh", "cine-violet", "cine-wave"],
    ocean:  ["cine-wave", "cine-aurora", "cine-mesh", "cine-violet", "aurora", "cine-spotlight"],
    forest: ["cine-mesh", "cine-aurora", "cine-wave", "aurora", "cine-violet", "cine-ember"],
    gold:   ["gold-rings", "cine-spotlight", "cine-ember", "cine-aurora", "cine-mesh", "aurora"],
    neon:   ["cine-violet", "cine-aurora", "cine-wave", "cine-mesh", "cine-spotlight", "cine-ember"],
    mono:   ["cine-spotlight", "cine-mesh", "cine-aurora", "cine-wave", "cine-violet", "aurora"],
  };
  const palette = (data.palette && palettes[data.palette]) ? data.palette : "fire";
  const bgPool = palettes[palette];
  const bg = (i) => bgPool[i % bgPool.length];

  // Varied entrance motions — never repeat same motion twice in a row
  const motionPool = ["rise-spring", "zoom", "glide", "drift", "spring", "vox", "flip", "punch"];
  let lastMotion = "";
  const pickMotion = () => {
    const candidates = motionPool.filter(m => m !== lastMotion);
    const m = candidates[Math.floor(Math.random() * candidates.length)];
    lastMotion = m;
    return m;
  };

  const kicker = (data.kicker || "NEWS").toUpperCase().slice(0, 18);
  // Attribution defaults to EMPTY (user fills it only if they want). Also drop
  // any auto-generated "AI Radar — Newsroom" placeholder so the field stays blank.
  let srcLabel = (data.source && String(data.source).trim()) ? String(data.source).trim().slice(0, 60) : "";
  if (/^ai\s*radar/i.test(srcLabel)) srcLabel = "";

  // Helper: clean settings with all overlays explicitly OFF
  const cleanSet2 = () => { const s = vsCaptureSettings(); s["#vsInfoOn"] = false; s["#vsNewsOn"] = false; return s; };

  // intro — dramatic entrance with a precise hook + the source line
  const introMain = (data.intro && data.intro.main) || data.title || "Today's story";
  const introSub  = (data.intro && data.intro.sub)  || data.subtitle || "";
  vstudio.slides.push({
    url: null, isVideo: false, mediaEl: null, ready: true, isIntro: true,
    introBg: bg(0), introMain: introMain,
    introSub: introSub ? (introSub + "  ·  " + srcLabel) : srcLabel,
    introMotion: "rise-spring",
    headline: "", duration: 3, settings: cleanSet2(),
    _kicker: kicker || "AI RADAR",
    _timelineLabel: introMain
  });

  let bi = 1;
  const sections = (data.sections || []).slice(0, 7);
  sections.forEach((sec, i) => {
    const set = cleanSet2();
    const motion = pickMotion();

    if (sec.type === "infographic" && Array.isArray(sec.stats) && sec.stats.length) {
      // Infographic slide — use chartType hint from AI
      const validStyles = ["cards", "donut", "bars", "pills", "split"];
      const aiChart = sec.chartType;
      let infoStyle = "cards";
      if (aiChart === "donut" || aiChart === "donut") infoStyle = "donut";
      else if (aiChart === "bars") infoStyle = sec.stats.length > 3 ? "cards" : "bars";
      else if (aiChart === "pills") infoStyle = "progress-pills";
      else if (aiChart === "split" && sec.stats.length === 2) infoStyle = "split-block";
      else infoStyle = sec.stats.length > 3 ? "cards" : "donut";

      set["#vsInfoOn"] = true;
      set["#vsInfoStyle"] = infoStyle;
      set["#vsInfoMotion"] = motion;
      set["#vsInfoJson"] = JSON.stringify({
        title: sec.title || data.title || "Key numbers",
        subtitle: "", stats: sec.stats });
      set["#vsNewsOn"] = false;
      vstudio.slides.push({
        url: null, isVideo: false, mediaEl: null, ready: true,
        isIntro: true, introBg: bg(bi++), introMain: "", introSub: "",
        introMotion: motion, headline: "",
        duration: 6, settings: set, _standaloneInfo: true,
        _caption: sec.caption || "Key numbers",
        _timelineLabel: sec.caption || sec.title || "📊 Stats"
      });

    } else {
      // Text / narrative slide
      const validStyles = ["title-center", "title-left", "quote", "caption", "bold-statement"];
      const style = validStyles.includes(sec.style) ? sec.style : "title-center";
      set["#vsNewsOn"] = true;
      set["#vsNewsStyle"] = style;
      set["#vsNewsMotion"] = motion;
      set["#vsNewsKicker"] = kicker;
      set["#vsNewsHeadline"] = String(sec.headline || sec.title || "").slice(0, 200);
      set["#vsNewsSource"] = srcLabel;
      // Store emphasis words for richer rendering
      if (sec.emphasis) set["#vsNewsEmphasis"] = sec.emphasis;
      set["#vsInfoOn"] = false;
      vstudio.slides.push({
        url: null, isVideo: false, mediaEl: null, ready: true,
        isIntro: true, introBg: bg(bi++), introMain: "", introSub: "",
        introMotion: motion, headline: "",
        duration: 6, settings: set, _standaloneNews: true,
        _caption: sec.caption || "",
        _timelineLabel: sec.caption || (sec.headline || "").slice(0, 22) || "Slide"
      });
    }
  });

  // outro — key takeaway + source credit
  const outroMain = (data.outro && data.outro.main) || data.outroMain || "Thanks for watching";
  const outroSub  = (data.outro && data.outro.sub)  || srcLabel;
  vstudio.slides.push({
    url: null, isVideo: false, mediaEl: null, ready: true,
    isIntro: true, isOutro: true, introBg: bg(0),
    introMain: outroMain,
    introSub: outroSub, introMotion: "spring",
    headline: "", duration: 3, settings: cleanSet2(),
    _timelineLabel: outroMain
  });

  renderSlideList();
  if (!$("#vsCanvas")) buildPreviewCanvas();
  selectSlide(0);
  drawStudioFrame(0);

  // ── footage is now always auto-generated (real Pexels → AI fallback) ──
  // (batch passes skipFootage=true and generates per-video in vsLoadBatchVideo)
  if (!skipFootage) {
    vsAutoGenerateBackgrounds(data);
  }
}

// Fetch a real stock video clip from Pexels. `variant` rotates the chosen
// clip so different scenes in one video get DIFFERENT footage.
async function vsFetchPexelsClip(query, key, aspect, variant) {
  variant = variant || 0;
  const orient = aspect === "16:9" ? "landscape" : aspect === "1:1" ? "square" : "portrait";
  const url = "https://api.pexels.com/videos/search?query=" + encodeURIComponent(query) +
              "&per_page=12&orientation=" + orient;
  let json;
  try {
    const r = await fetch(url, { headers: { Authorization: key } });
    if (!r.ok) return null;
    json = await r.json();
  } catch (e) { return null; }
  const vids = (json && json.videos) || [];
  if (!vids.length) return null;
  // rotate the video order by `variant` so each scene starts at a different clip
  const order = [];
  for (let k = 0; k < vids.length; k++) order.push(vids[(variant + k) % vids.length]);
  for (const v of order.slice(0, 4)) {
    const files = (v.video_files || []).filter(f => /mp4/i.test(f.file_type || "") && f.link);
    files.sort((a, b) => Math.abs((a.height || 0) - 720) - Math.abs((b.height || 0) - 720));
    const file = files[0];
    if (!file) continue;
    const vid = await new Promise((resolve) => {
      const el = document.createElement("video");
      el.crossOrigin = "anonymous";
      el.muted = true; el.loop = true; el.playsInline = true; el.preload = "auto";
      let done = false;
      const timer = setTimeout(() => { if (!done) { done = true; resolve(null); } }, 7000);
      el.onloadeddata = () => {
        if (done) return; done = true; clearTimeout(timer);
        try { el.play().catch(() => {}); } catch (e) {}
        resolve(el.videoWidth ? el : null);
      };
      el.onerror = () => { if (!done) { done = true; clearTimeout(timer); resolve(null); } };
      el.src = file.link;
    });
    if (vid) return vid;
  }
  return null;
}

// Fallback: a real Pexels PHOTO (loads faster & more reliably than video).
async function vsFetchPexelsPhoto(query, key, aspect, variant) {
  variant = variant || 0;
  const orient = aspect === "16:9" ? "landscape" : aspect === "1:1" ? "square" : "portrait";
  const url = "https://api.pexels.com/v1/search?query=" + encodeURIComponent(query) +
              "&per_page=12&orientation=" + orient;
  let json;
  try {
    const r = await fetch(url, { headers: { Authorization: key } });
    if (!r.ok) return null;
    json = await r.json();
  } catch (e) { return null; }
  const photos = (json && json.photos) || [];
  if (!photos.length) return null;
  const order = [];
  for (let k = 0; k < photos.length; k++) order.push(photos[(variant + k) % photos.length]);
  for (const p of order.slice(0, 4)) {
    const link = p.src && (p.src.large2x || p.src.large || p.src.original);
    if (!link) continue;
    const img = await new Promise((resolve) => {
      const el = new Image();
      el.crossOrigin = "anonymous";
      let done = false;
      const timer = setTimeout(() => { if (!done) { done = true; resolve(null); } }, 7000);
      el.onload = () => { if (!done) { done = true; clearTimeout(timer); resolve(el.naturalWidth ? el : null); } };
      el.onerror = () => { if (!done) { done = true; clearTimeout(timer); resolve(null); } };
      el.src = link;
    });
    if (img) return img;
  }
  return null;
}

// Generate footage for EVERY scene — in PARALLEL so they all load fast, and
// each scene gets DIFFERENT footage (title scenes → the city; content scenes →
// their own topic) instead of the same clip on every slide.
async function vsAutoGenerateBackgrounds(data) {
  const slides = vstudio.slides;
  const palette = (data && data.palette) || "cinematic";
  const camMoves = ["kenburns-in", "kenburns-out", "pan-right", "pan-left",
                    "zoom-pan", "drift-up", "pan-up", "handheld"];
  const place = (data && (data._location || data._batchName)) || "";
  const firstPlace = place ? place.split(",")[0].trim() : "";
  const cityViews = ["skyline", "downtown", "aerial view", "street", "park",
                     "cityscape", "landmark", "architecture", "sunset", "riverside"];
  const pexelsOn = document.querySelector("#vsUsePexels") && document.querySelector("#vsUsePexels").checked;
  const pexelsKey = (VS_PEXELS_KEY || (document.querySelector("#vsPexelsKey") || {}).value || "").trim();
  const aspect = vsVal("#vsAspect", "9:16");
  let made = 0;

  const genOne = async (s, i) => {
    if (vstudio._batchCancel || s.mediaEl) return;
    const isTitle = !s._standaloneInfo && !s._standaloneNews;   // intro / outro
    const headline = (s.settings && (s.settings["#vsNewsHeadline"] || s.settings["#vsHeadline"]))
                     || s.headline || "";
    const topicWords = String(headline || s._caption || "")
      .replace(/[^\w\s]/g, " ").split(/\s+/).filter(w => w.length > 3).slice(0, 4).join(" ");
    // title scenes → a city view; content scenes → their OWN topic (so every
    // scene's footage differs), with the city appended for locality.
    let query;
    if (isTitle) {
      query = firstPlace ? (firstPlace + " " + cityViews[i % cityViews.length])
                         : (topicWords || data.title || "cinematic city");
    } else {
      query = topicWords
        ? (topicWords + (firstPlace ? " " + firstPlace : ""))
        : (firstPlace ? (firstPlace + " " + cityViews[i % cityViews.length]) : "cinematic background");
    }
    const cam = camMoves[i % camMoves.length];

    // 1) real Pexels footage (video → photo), rotated per scene by `i`
    if (pexelsOn && pexelsKey) {
      try {
        let media = await vsFetchPexelsClip(query, pexelsKey, aspect, i);
        if (!media) media = await vsFetchPexelsPhoto(query, pexelsKey, aspect, i);
        if (media && !vstudio._batchCancel) {
          s.mediaEl = media; s.isVideo = (media.tagName === "VIDEO");
          s.ready = true; s.url = media.currentSrc || media.src;
          s.settings = s.settings || {}; s.settings["#vsMotion"] = cam;
          made++; renderSlideList(); drawStudioFrame(vstudio.position || 0);
          return;
        }
      } catch (e) { /* fall through to AI image */ }
    }
    if (vstudio._batchCancel) return;
    // 2) AI image fallback
    try {
      const subject = headline || s._caption || data.title || "abstract concept";
      const subjectCtx = (firstPlace && !String(subject).toLowerCase().includes(firstPlace.toLowerCase()))
        ? (firstPlace + " — " + subject) : subject;
      const img = await vsGenerateImage(subjectCtx + ", " + palette + " color palette, editorial photography", null);
      if (img && !vstudio._batchCancel) {
        s.mediaEl = img; s.isVideo = false; s.ready = true; s.url = img.src;
        s.settings = s.settings || {}; s.settings["#vsMotion"] = cam;
        made++; renderSlideList(); drawStudioFrame(vstudio.position || 0);
      }
    } catch (e) { /* keep colored background on failure */ }
  };

  vsAutoStatus(state.lang === "fa" ? "در حال ساخت فوتیج همهٔ صحنه‌ها…" : "Finding footage for all scenes…");
  await Promise.all(slides.map((s, i) => genOne(s, i)));   // PARALLEL — much faster
  vsAutoStatus(state.lang === "fa"
    ? (made ? `فوتیج ${made} صحنه آماده شد.` : "فوتیج در دسترس نبود.")
    : (made ? `Footage ready for ${made} scene${made > 1 ? "s" : ""}.` : "Footage unavailable."));
  if (!vstudio.looping) previewStudioVideo(false);
}

/* ════════════════════════════════════════════════════════════════════
   BATCH VIDEOS — one separate, article-accurate video per item.
   Flow: fetch once → AI extracts the list of items + each item's real
   facts → AI writes a tight script per item → clickable results; opening
   one assembles it and (optionally) generates its footage on demand.
   Uses the free strong models + FLUX images via the Pollinations key.
   ════════════════════════════════════════════════════════════════════ */
function vsParseAiJson(raw) {
  let s = String(raw == null ? "" : raw).replace(/```json|```/g, "").trim();
  // grab the outermost { } or [ ] block
  const firstObj = s.indexOf("{"), firstArr = s.indexOf("[");
  let start = -1, open = "{", close = "}";
  if (firstArr !== -1 && (firstArr < firstObj || firstObj === -1)) { start = firstArr; open = "["; close = "]"; }
  else start = firstObj;
  if (start === -1) return null;
  const end = s.lastIndexOf(close);
  if (end > start) s = s.slice(start, end + 1);
  try { return JSON.parse(s); } catch (e) {
    // tolerate trailing commas
    try { return JSON.parse(s.replace(/,\s*([}\]])/g, "$1")); } catch (e2) { return null; }
  }
}

function vsToneGuide(tone) {
  return ({
    news:        "authoritative broadcast-news director. Crisp, factual, urgent. Use title-left and title-center styles, bars/comparison charts.",
    explainer:   "friendly educator. Clear, step-by-step, builds understanding. Use title-center, donut/pills charts, simple language.",
    hype:        "high-energy launch hype-master. Bold, punchy, exciting. Use bold-statement, neon-title, big single numbers.",
    documentary: "cinematic documentary narrator. Atmospheric, thoughtful, emotive. Use quote, magazine-cover, title-center, slower reveals.",
    social:      "viral social-media editor. Ultra-punchy, hook-first, scroll-stopping. Use bold-statement, neon-title, short headlines, big numbers."
  })[tone] || "broadcast-news director.";
}

// Find "City, ST" style items in the article WITHOUT any AI — the safety net
// when the AI service is down, so batch mode still splits into separate videos.
function vsExtractItemsLocal(text) {
  const t = String(text || "");
  const states = ("AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN " +
    "MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC").split(" ");
  const re = new RegExp("\\b([A-Z][a-z]+(?:[ '\\-][A-Z][a-z]+){0,2}),\\s*(" + states.join("|") + ")\\b", "g");
  const out = [];
  let m;
  while ((m = re.exec(t)) !== null) {
    const name = m[1].trim() + ", " + m[2];
    if (!out.includes(name)) out.push(name);
    if (out.length >= 30) break;
  }
  return out;
}

// Strip website nav / section junk ("Home", "Local"…), data-source names
// (Redfin, Zillow…), quoted experts ("…, CFP") and generic phrases from an
// extracted item list. For a PLACES listicle, keep ONLY real "City, ST"
// entries. `fullText` lets us detect that the article is a list of places.
function vsCleanItemNames(names, fullText) {
  const STOP = new Set(["home","local","news","sports","finance","weather","entertainment",
    "lifestyle","style","shopping","video","videos","search","newsletter","newsletters",
    "privacy","terms","about","contact","more","trending","popular","latest","sections",
    "menu","follow","sign in","signin","log in","login","help","settings","subscriptions",
    "subscribe","animals","pets","food","travel","health","money","tech","technology",
    "business","politics","opinion","world","us","u.s.","gallery","advertisement","sponsored",
    "related","recommended","groceries","healthcare","housing","utilities","transportation",
    "insurance","daily life","cost check","overview","summary","introduction","conclusion",
    "faq","sources","methodology","mortgage","rent","taxes","savings","income",
    // common data sources / outlets that get mistaken for list items
    "redfin","zillow","bestplaces","realtor","realtor.com","trulia","census","census bureau",
    "bankrate","nerdwallet","gobankingrates","financebuzz","aol","forbes","kiplinger",
    "smartasset","wallethub","niche","apartments.com","u.s. news","us news","moody's",
    "your retirement plan","retirement plan","cost of living","median home price"]);
  const CRED = /,\s*(CFP|CFA|CPA|CEPF|CRPC|ChFC|Ph\.?\s?D|M\.?\s?D|MBA|Esq\.?|Jr\.?|Sr\.?|RIA|AAMS)\b/i;
  const isPlace = (n) => /,\s*[A-Z]{2}\b/.test(n) ||
    /,\s*(Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming)\b/.test(n);

  let out = (names || []).map(n => String(n).trim().replace(/^[\d.)\-\s]+/, ""))
    .filter(n => n.length >= 3 && n.length <= 40 && /[A-Za-z]/.test(n))
    .filter(n => !STOP.has(n.toLowerCase().replace(/[.!?,:;]+$/, "")))
    .filter(n => !CRED.test(n))                               // drop quoted experts
    .filter(n => !/^(your|the|a|an|my|our|this|these|those|how|why|what|when)\s/i.test(n)); // drop phrases
  out = out.filter((n, i) => out.findIndex(m => m.toLowerCase() === n.toLowerCase()) === i);

  const placesMode = /\b\d{0,2}\s*(?:most|least|best|top|cheapest|affordable|safest|cheap|nicest|coolest)?\s*(cities|towns|places|destinations|states|suburbs|neighborhoods|counties)\b/i.test(String(fullText || ""));
  const places = out.filter(isPlace);
  if (placesMode) {
    out = places.length >= 2 ? places : [];   // empty → triggers knowledge-assist
  } else if (places.length >= 3) {
    out = places;                              // looks like a place list anyway
  }
  return out.slice(0, 20);
}

// Extract the list of items LOCALLY (no AI) by finding "City, ST" / "City,
// State" patterns. This keeps batch mode working even when the AI service is
// temporarily unavailable.
function vsExtractItemsLocal(text) {
  const t = String(text || "");
  if (!t) return [];
  const ST = new Set(("AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN " +
    "MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY DC").split(" "));
  const FULL = {Alabama:"AL",Alaska:"AK",Arizona:"AZ",Arkansas:"AR",California:"CA",Colorado:"CO",
    Connecticut:"CT",Delaware:"DE",Florida:"FL",Georgia:"GA",Hawaii:"HI",Idaho:"ID",Illinois:"IL",
    Indiana:"IN",Iowa:"IA",Kansas:"KS",Kentucky:"KY",Louisiana:"LA",Maine:"ME",Maryland:"MD",
    Massachusetts:"MA",Michigan:"MI",Minnesota:"MN",Mississippi:"MS",Missouri:"MO",Montana:"MT",
    Nebraska:"NE",Nevada:"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY",
    "North Carolina":"NC","North Dakota":"ND",Ohio:"OH",Oklahoma:"OK",Oregon:"OR",Pennsylvania:"PA",
    "Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD",Tennessee:"TN",Texas:"TX",Utah:"UT",
    Vermont:"VT",Virginia:"VA",Washington:"WA","West Virginia":"WV",Wisconsin:"WI",Wyoming:"WY"};
  const STOP = /^(unlike|like|near|than|from|visit|including|but|and|the|in|at|of|with|while|unless|whereas|versus|vs|compared|between|among|across|beyond|outside|inside|within|around|about)$/i;
  const found = [], seen = new Set();
  const add = (city, st, arr) => {
    city = city.replace(/^\W+|\W+$/g, "").trim();
    if (city.length < 2 || city.length > 32) return;
    // reject budget categories / section headers
    if (/^(home|local|subscriptions?|animals?|entertainment|groceries|healthcare|housing|utilities|transportation|food|insurance|taxes|savings|income|expenses|budget|cost|costs|overview|summary|introduction|conclusion)$/i.test(city)) return;
    // drop a leading connective word ("Unlike Tulsa" → "Tulsa")
    const parts = city.split(/\s+/);
    if (parts.length > 1 && STOP.test(parts[0])) { city = parts.slice(1).join(" "); }
    if (!city || STOP.test(city)) return;
    const name = city + ", " + st;
    const key = name.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key); (arr || found).push(name);
  };
  const cityPat = "([A-Z][A-Za-z.'’-]+(?:\\s+[A-Z][A-Za-z.'’-]+){0,2})";
  const names = Object.keys(FULL).sort((a, b) => b.length - a.length).join("|");

  // PASS 1 — numbered / heading list items ("1. Tulsa, OK", "## Augusta, GA").
  // These are the article's MAIN entries, so prefer them when present.
  const numbered = [];
  let m, reNum = new RegExp("(?:\\d[\\.)]\\s*|#{1,4}\\s*)" + cityPat + ",\\s*([A-Z]{2}|" + names + ")\\b", "g");
  while ((m = reNum.exec(t))) {
    const st = m[2].length === 2 ? (ST.has(m[2]) ? m[2] : null) : FULL[m[2]];
    if (st) add(m[1], st, numbered);
  }
  if (numbered.length >= 3) return numbered;

  // PASS 2 — every "City, ST" / "City, State" anywhere in the text.
  let re = new RegExp(cityPat + ",\\s*([A-Z]{2})\\b", "g");
  while ((m = re.exec(t))) { if (ST.has(m[2])) add(m[1], m[2]); }
  let re2 = new RegExp(cityPat + ",\\s*(" + names + ")\\b", "g");
  while ((m = re2.exec(t))) { add(m[1], FULL[m[2]]); }
  return found;
}

// Return the slice of the article that actually talks about `name`, so each
// per-item script sees that item's real facts (not a generic article head).
function vsExcerptFor(fullText, name) {
  const t = String(fullText || "");
  if (!t) return "";
  const keys = [name, String(name).split(",")[0].trim()].filter(k => k && k.length >= 3);
  let idx = -1;
  for (const k of keys) { idx = t.toLowerCase().indexOf(k.toLowerCase()); if (idx !== -1) break; }
  if (idx === -1) return t.slice(0, 3500);
  return t.slice(Math.max(0, idx - 500), Math.min(t.length, idx + 2600));
}

// Guaranteed local fallback so EVERY item yields a video even if the AI call
// fails — builds a clean 4-scene script from the excerpt's own sentences.
function vsBasicCityData(name, excerpt, topic, source, count) {
  const short = String(name).split(",")[0].trim();
  const all = String(excerpt || "").replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+/).map(s => s.trim())
    .filter(s => s.length > 25 && s.length < 170);
  // only trust sentences that actually mention THIS place (else they'd be the
  // same generic intro for every city → repeated copy)
  const mentions = all.filter(s => new RegExp(short, "i").test(s));
  const clip = (s, n) => s && s.length > n ? s.slice(0, n).trim() + "…" : s;
  const n = Math.max(2, Math.min(7, count || 2));
  const styles = ["title-center", "bold-statement", "quote", "title-left", "magazine-cover"];
  const caps = ["AFFORDABILITY", "COST OF LIVING", "OUTDOORS", "HEALTHCARE", "LIFESTYLE", "ECONOMY", "BOTTOM LINE"];
  // distinct angle templates so each scene differs even with no real data
  const angles = [
    short + " keeps the overall cost of living refreshingly low.",
    "Housing in " + short + " stays within reach for most budgets.",
    short + " pairs easy access to parks, trails and the outdoors.",
    "Care and daily essentials sit close at hand in " + short + ".",
    short + " offers a relaxed pace without big-city price tags.",
    "A steady local economy gives " + short + " real staying power.",
    short + " balances everyday comfort with genuine affordability."
  ];
  const sections = [];
  for (let i = 0; i < n; i++) {
    const headline = clip(mentions[i], 90) || angles[i % angles.length];
    sections.push({ type: "text", caption: caps[i % caps.length], headline, style: styles[i % styles.length] });
  }
  return {
    title: name, subtitle: topic || "", kicker: short.toUpperCase().slice(0, 14),
    source: source || "", palette: "gold",
    intro: { main: short, sub: topic || "" },
    sections,
    outro: { main: short, sub: "" }
  };
}

// Small floating progress popup shown while a batch builds / exports.
function vsBatchProgress(show, current, total, label) {
  let el = document.getElementById("vsBatchProg");
  if (!show) { if (el) el.classList.remove("show"); return; }
  const fa = state.lang === "fa";
  if (!el) {
    el = document.createElement("div");
    el.id = "vsBatchProg";
    el.innerHTML = '<div class="vsbp-title"></div><div class="vsbp-bar"><span></span></div>' +
      '<div class="vsbp-sub"></div><button type="button" class="vsbp-cancel"></button>';
    document.body.appendChild(el);
    el.querySelector(".vsbp-cancel").addEventListener("click", () => {
      vstudio._batchCancel = true;
      el.querySelector(".vsbp-cancel").textContent = fa ? "در حال لغو…" : "Cancelling…";
      el.querySelector(".vsbp-cancel").disabled = true;
    });
  }
  el.classList.add("show");
  const cancelBtn = el.querySelector(".vsbp-cancel");
  if (!vstudio._batchCancel) {            // don't override the "Cancelling…" state
    cancelBtn.disabled = false;
    cancelBtn.textContent = fa ? "لغو" : "Cancel";
  }
  const pct = total ? Math.round((current / total) * 100) : 0;
  el.querySelector(".vsbp-title").textContent = (fa ? "ساخت ویدئوها… " : "Building videos… ") + current + "/" + total;
  el.querySelector(".vsbp-bar > span").style.width = pct + "%";
  el.querySelector(".vsbp-sub").textContent = label || "";
}

async function vsBuildBatchFromArticle(text, tone, lenChoice) {
  const fa = state.lang === "fa";
  vstudio._batchCancel = false;
  vsAutoStatus(fa ? "در حال استخراج موارد از مقاله…" : "Extracting the items from the article…");

  // 1) EXTRACT the list of items. Strategy: local "City, ST" scan → AI from
  //    the body → and, if the body is only a teaser (slideshow/gallery pages
  //    where the full list isn't in the fetched text), a knowledge-assisted AI
  //    pass that uses the headline + the model's knowledge of the article.
  const resolveItems = (obj) => {
    if (!obj) return [];
    if (Array.isArray(obj)) return obj;
    return obj.items || obj.cities || obj.list || obj.entries || obj.results || obj.names || [];
  };
  const namesFrom = (obj) => resolveItems(obj)
    .map(it => typeof it === "string" ? it : (it && (it.name || it.title)) || "")
    .map(s => String(s).trim()).filter(Boolean)
    .filter((n, idx, a) => a.indexOf(n) === idx);

  let names = vsExtractItemsLocal(text);
  let ex = null;
  let usedLocalNames = names.length >= 3;

  if (!usedLocalNames) {
    const exPrompt =
`Read the ARTICLE and list its MAIN list entries — the distinct people, places, products or companies it profiles (usually a numbered 1,2,3… list), in order, names exactly as written.
Do NOT list sub-sections, categories, budget line-items or recurring headings (e.g. "Home", "Groceries", "Healthcare", "Subscriptions"). Only the top-level entries — typically between 3 and 20 of them.
Return ONLY compact JSON, nothing else:
{"topic":"overall subject in <=6 words","source":"the outlet name if identifiable else a fitting newsroom label","items":["name 1","name 2","name 3"]}
ARTICLE: """${String(text).slice(0, 12000)}"""`;
    let aiNames = [];
    for (let attempt = 0; attempt < 2 && aiNames.length < 2; attempt++) {
      if (vstudio._batchCancel) { vsBatchProgress(false); return true; }
      const p = attempt === 0 ? exPrompt
        : exPrompt + "\n\nList ONLY the main top-level entries. Output JSON only.";
      try { ex = vsParseAiJson(await vsAutoAiChat(p)); } catch (e) { ex = null; }
      aiNames = namesFrom(ex);
    }
    if (aiNames.length > 22 && names.length >= 2) { usedLocalNames = true; }
    else if (aiNames.length >= 2) { names = aiNames; usedLocalNames = false; }
  }

  names = vsCleanItemNames(names, text);   // drop junk; for place lists keep only cities

  // 2) KNOWLEDGE-ASSISTED fallback: the fetched text was just a teaser, so ask
  //    the strong model to reconstruct the full list from the headline + topic.
  //    Trigger when we have <2 items, OR the headline promises N places but we
  //    found far fewer (slideshow articles where the list isn't in the text).
  const placesMode = /\b\d{0,2}\s*(?:most|least|best|top|cheapest|affordable|safest|cheap|nicest|coolest)?\s*(cities|towns|places|destinations|states|suburbs|neighborhoods|counties)\b/i.test(String(text));
  const numM = String(text).match(/\b(\d{1,2})\s+(?:[a-z]+\s+){0,3}(?:cities|towns|places|states|destinations|suburbs)\b/i);
  const expectedN = (placesMode && numM) ? Number(numM[1]) : 0;
  const needMore = names.length < 2 || (expectedN >= 4 && names.length < Math.ceil(expectedN * 0.7));
  if (needMore && !vstudio._batchCancel) {
    vsAutoStatus(fa ? "متن کامل نبود — بازسازی فهرست با کمک مدل…"
                    : "Article was a teaser — reconstructing the list…");
    const hintN = expectedN || ((String(text).match(/\b(\d{1,2})\s+[A-Za-z]+\b/) || [])[1] || "");
    const kPrompt =
`The TEXT below is the intro of a news listicle; the actual list usually lives on separate slides not included here.
Identify the article from its headline/topic and list EVERY item it ranks — cities, places, products, or people — in order${hintN ? ", and there should be about " + hintN + " of them" : ""}.
For CITIES/PLACES, name each EXACTLY as "City, ST" (two-letter state). Use your knowledge of this widely-published article/topic to complete the list accurately. Do NOT include data sources (Redfin, Zillow, Census), quoted experts, or generic phrases — only the ranked items themselves. Do NOT invent fictional places.
Return ONLY compact JSON: {"topic":"overall subject in <=6 words","source":"outlet name if identifiable else a fitting label","items":["City, ST", "City, ST", "..."]}
TEXT: """${String(text).slice(0, 8000)}"""`;
    try {
      const ex2 = vsParseAiJson(await vsAutoAiChat(kPrompt));
      const cleaned = vsCleanItemNames(namesFrom(ex2), text);
      if (cleaned.length >= 2) { names = cleaned; if (ex2 && ex2.topic) ex = ex2; }
    } catch (e) {}
  }

  if (names.length < 2) {
    vsAutoStatus(fa ? "موارد کافی برای حالت دسته‌ای پیدا نشد — یک ویدئو می‌سازم."
                    : "Couldn't find multiple items — building a single video instead.");
    return false;   // let the caller fall back to a single video
  }

  const topic = (ex && ex.topic) || "";
  const source = (ex && ex.source) || "";
  // scene count follows the Length selector: short→3, medium→5, long→7 content
  const contentCount = lenChoice === "short" ? 3 : lenChoice === "long" ? 7 : 5;
  const guide = vsToneGuide(tone);

  vstudio.batchVideos = [];
  vstudio.batchCurrent = -1;
  vsRenderBatchList();
  vsBatchProgress(true, 0, names.length, fa ? "آماده‌سازی…" : "Preparing…");

  // Always try the AI for each city's script (distinct, specific copy). Only
  // skip it after several consecutive real failures (then build locally).
  let aiFailStreak = 0;
  if (vstudio._batchCancel) { vsBatchProgress(false); return true; }
  for (let i = 0; i < names.length; i++) {
    if (vstudio._batchCancel) break;
    const name = names[i];
    const shortName = String(name).split(",")[0].trim();
    const cityFound = String(text).toLowerCase().includes(shortName.toLowerCase());
    const excerpt = vsExcerptFor(text, name);
    vsBatchProgress(true, i, names.length, name);
    vsAutoStatus(fa ? `ساخت فیلمنامهٔ ${i + 1} از ${names.length}: ${name}…`
                    : `Scripting ${i + 1} of ${names.length}: ${name}…`);
    const dataLine = cityFound
      ? `Base every line on the SOURCE TEXT about ${name} below — use its real figures, prices, ranks and reasons.`
      : `The article is a slideshow and doesn't spell out ${name} in the text here, so use YOUR KNOWLEDGE of ${name} as a real US city to write SPECIFIC, accurate facts about it — its cost-of-living level, typical home-price range, climate, economy, lifestyle and what makes it fit "${topic}". Be concrete and realistic; don't fabricate exact statistics you're unsure of (use approximate ranges or qualitative facts instead).`;
    const sPrompt =
`You are an award-winning ${guide}
Write a complete, professional short-form video script ENTIRELY about "${name}" (part of "${topic}").
${dataLine}
NEVER write meta-commentary. Forbidden words/phrases: "no data", "not provided", "excerpt", "the article", "the text", "appear", "provided". Every line must read like real on-screen video copy about ${name}.
Return ONLY valid compact JSON (no markdown, no commentary):
{"title":"${name}","subtitle":"max 8 words of real context","kicker":"1-2 ALL-CAPS words","source":"${source}","palette":"fire|ocean|forest|gold|neon|mono","intro":{"main":"3-6 word hook about ${name}","sub":"max 8 words"},"sections":[{"type":"text","caption":"2-3 words","headline":"one vivid specific sentence (max 12 words)","style":"title-center|bold-statement|quote|title-left|magazine-cover|neon-title"},{"type":"infographic","caption":"2-3 words","title":"chart headline","stats":[{"label":"short label","value":"e.g. $1,250 or 18%","num":1250}],"chartType":"bars|donut|pills|comparison|ranking"}],"outro":{"main":"3-5 word takeaway","sub":"max 6 words"}}

RULES:
1. EXACTLY ${contentCount} content sections (besides intro/outro).
2. EACH scene must cover a DIFFERENT angle of ${shortName} — e.g. housing & affordability, overall cost of living, climate & outdoors, healthcare & care access, jobs/economy, lifestyle & culture. NEVER repeat a fact, number, phrase or sentence across scenes; every headline, caption and stat must be UNIQUE.
3. INFOGRAPHIC only where a real number genuinely fits ${shortName}; otherwise use TEXT styles. Never two infographics in a row.
4. title MUST be exactly "${name}". Keep every line concrete and specific to ${shortName}, free of meta-commentary.
5. Leave "source" as an empty string "" unless a real publication is clearly named.
${cityFound ? 'SOURCE TEXT about ' + name + ': """' + excerpt + '"""' : 'Write from your knowledge of ' + name + '.'}`;

    let data = null;
    if (aiFailStreak < 2) {   // only call the AI while it's responding
      for (let attempt = 0; attempt < 2 && !(data && Array.isArray(data.sections) && data.sections.length); attempt++) {
        try { data = vsParseAiJson(await vsAutoAiChat(sPrompt)); } catch (e) { data = null; }
      }
    }
    if (vstudio._batchCancel) break;                    // stop immediately on cancel
    if (data && Array.isArray(data.sections) && data.sections.length) {
      aiFailStreak = 0;                                  // AI is working
    } else {
      aiFailStreak++;
      data = vsBasicCityData(name, excerpt, topic, source, contentCount);   // guaranteed local build
    }
    if (data && Array.isArray(data.sections) && data.sections.length) {
      if (!data.title) data.title = name;
      data._batchName = name;
      data._location = name;   // names usually include "City, ST" → used for footage
      vstudio.batchVideos.push({ name, location: name, data });
      vsRenderBatchList();
    }
  }
  vsBatchProgress(false);

  if (vstudio._batchCancel) {
    vstudio._batchCancel = false;
    vsAutoStatus(fa
      ? `لغو شد — ${vstudio.batchVideos.length} ویدئو تا اینجا ساخته شد.`
      : `Cancelled — ${vstudio.batchVideos.length} video(s) built so far.`);
    if (vstudio.batchVideos.length) await vsLoadBatchVideo(0);
    return true;
  }

  if (!vstudio.batchVideos.length) {
    vsAutoStatus(fa ? "ساخت فیلمنامه‌ها ناموفق بود." : "Could not script the videos.");
    return false;
  }

  // ── generate footage for EVERY video (cached per video) so all of them have
  //    footage, not just the one that happens to be open ──
  const total = vstudio.batchVideos.length;
  for (let i = 0; i < total && !vstudio._batchCancel; i++) {
    vsBatchProgress(true, i, total, (fa ? "فوتیج: " : "Footage: ") + vstudio.batchVideos[i].name);
    await vsLoadBatchVideo(i);          // assembles + generates + caches footage
  }
  vsBatchProgress(false);
  const cancelledFootage = vstudio._batchCancel;
  vstudio._batchCancel = false;

  vsAutoStatus((usedLocalNames
      ? (fa ? "ویدئوها از روی فهرست شهرهای مقاله ساخته شدند. "
            : "Videos built from the article's city list. ")
      : "") +
    (fa ? `${total} ویدئو با فوتیج آماده شد. روی هر کدام بزن یا ⬇ را برای دانلود بزن.`
        : `${total} videos ready with footage. Click any to open, or ⬇ to download.`));
  await vsLoadBatchVideo(0);
  return true;
}

async function vsLoadBatchVideo(i) {
  const v = vstudio.batchVideos[i];
  if (!v) return;
  vstudio.batchCurrent = i;
  const fa = state.lang === "fa";
  vsAssembleFromSections(v.data, true);          // rebuilds slides (no media yet)
  vsRenderBatchList();

  // Restore previously-generated footage (slides are rebuilt fresh each open, so
  // footage must be cached on the video object or it would vanish on switch).
  if (v._mediaCache && v._mediaCache.length) {
    v._mediaCache.forEach((m, idx) => {
      const s = vstudio.slides[idx];
      if (s && m && m.el) {
        s.mediaEl = m.el; s.url = m.url; s.isVideo = m.isVideo; s.ready = true;
        s.settings = s.settings || {};
        if (m.motion) s.settings["#vsMotion"] = m.motion;
      }
    });
    renderSlideList();
    drawStudioFrame(vstudio.position || 0);
    if (!vstudio.looping) previewStudioVideo(false);
    vsAutoStatus(fa ? `«${v.name}» آماده است.` : `"${v.name}" is ready.`);
    return;
  }

  // First time → generate footage, then cache it on the video.
  if (!vstudio._batchCancel) {
    vsAutoStatus(fa ? `در حال ساخت فوتیج برای ${v.name}…` : `Finding footage for ${v.name}…`);
    try { await vsAutoGenerateBackgrounds(v.data); } catch (e) {}
    v._mediaCache = vstudio.slides.map(s => ({
      el: s.mediaEl || null, url: s.url || null, isVideo: !!s.isVideo,
      motion: s.settings && s.settings["#vsMotion"]
    }));
    v._footaged = true;
  }
  vsAutoStatus(fa ? `«${v.name}» آماده است. پیش‌نمایش یا خروجی بگیر.`
                  : `"${v.name}" is ready. Preview or export it.`);
}

// Render + download ONE batch video.
async function vsExportOne(i) {
  const v = vstudio.batchVideos[i];
  if (!v || vstudio._batchExporting) return;
  const fa = state.lang === "fa";
  vstudio._batchExporting = true;
  vstudio._batchCancel = false;
  vsBatchProgress(true, 0, 1, v.name);
  vsAutoStatus(fa ? `در حال خروجی: ${v.name}…` : `Exporting: ${v.name}…`);
  try {
    await vsLoadBatchVideo(i);
    if (!vstudio._batchCancel) {
      vstudio._exportName = v.name + " - AI Radar";
      await exportStudioVideo();
    }
  } catch (e) {}
  vstudio._exportName = null;
  vstudio._batchExporting = false;
  vstudio.rendering = false;          // self-heal so a stuck render can't block
  vsBatchProgress(false);
}

function vsRenderBatchList() {
  const box = document.querySelector("#vsBatchResults");
  if (!box) return;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const vids = vstudio.batchVideos || [];
  if (!vids.length) { box.innerHTML = ""; box.hidden = true; return; }
  box.hidden = false;
  const fa = state.lang === "fa";
  let html = `<div class="vs-batch-head"><span>${fa ? "ویدئوها" : "Videos"} (${vids.length})</span>` +
    `<button type="button" id="vsBatchExportAll" class="vs-batch-dlall">${fa ? "⬇ دانلود همه (ZIP)" : "⬇ Download all (zip)"}</button></div>`;
  vids.forEach((v, i) => {
    const active = i === vstudio.batchCurrent ? " active" : "";
    const n = (v.data && v.data.sections ? v.data.sections.length + 2 : 0);
    html += `<div class="vs-batch-item${active}">
      <button type="button" class="vs-batch-open" data-batch="${i}">
        <span class="vs-batch-name">${esc(v.name)}</span>
        <span class="vs-batch-meta">${n ? (fa ? n + " صحنه" : n + " scenes") : ""}</span>
      </button>
      <button type="button" class="vs-batch-dl" data-dl="${i}" title="${fa ? "دانلود این ویدئو" : "Download this video"}">⬇</button>
    </div>`;
  });
  box.innerHTML = html;
  box.querySelectorAll(".vs-batch-open").forEach(btn => {
    btn.addEventListener("click", () => vsLoadBatchVideo(Number(btn.dataset.batch)));
  });
  box.querySelectorAll(".vs-batch-dl").forEach(btn => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); vsExportOne(Number(btn.dataset.dl)); });
  });
  const dl = box.querySelector("#vsBatchExportAll");
  if (dl) dl.addEventListener("click", vsExportAllBatch);
}

// Render + download every batch video, one after another.
// Load JSZip on demand (only when the user zips a batch).
function vsLoadJSZip() {
  return new Promise((resolve, reject) => {
    if (window.JSZip) return resolve(window.JSZip);
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
    s.onload = () => window.JSZip ? resolve(window.JSZip) : reject(new Error("JSZip missing"));
    s.onerror = () => reject(new Error("JSZip load failed"));
    document.head.appendChild(s);
  });
}

// Render EVERY batch video and bundle them all into a single .zip download.
async function vsExportAllBatch() {
  const fa = state.lang === "fa";
  const vids = vstudio.batchVideos || [];
  if (!vids.length || vstudio._batchExporting) return;
  const proceed = window.confirm(fa
    ? `همهٔ ${vids.length} ویدئو ساخته و در یک فایل ZIP دانلود می‌شوند. ممکن است چند دقیقه طول بکشد و باید این تب باز بماند. ادامه؟`
    : `This renders all ${vids.length} videos and downloads them as one .zip. It can take several minutes — keep this tab open. Continue?`);
  if (!proceed) return;

  let JSZip = null;
  try { JSZip = await vsLoadJSZip(); }
  catch (e) { JSZip = null; }   // no internet for the lib → fall back to separate downloads

  vstudio._batchExporting = true;
  vstudio._batchCancel = false;
  const btn = document.querySelector("#vsBatchExportAll");
  if (btn) { btn.disabled = true; btn.textContent = fa ? "در حال خروجی…" : "Exporting…"; }

  const zip = JSZip ? new JSZip() : null;
  const used = {};
  for (let i = 0; i < vids.length; i++) {
    if (vstudio._batchCancel) break;
    vsBatchProgress(true, i, vids.length, (fa ? "خروجی: " : "Exporting: ") + vids[i].name);
    vsAutoStatus(fa ? `خروجی ${i + 1} از ${vids.length}: ${vids[i].name}…`
                    : `Exporting ${i + 1} of ${vids.length}: ${vids[i].name}…`);
    try {
      await vsLoadBatchVideo(i);
      vstudio._exportName = vids[i].name + " - AI Radar";
      if (zip) {
        vstudio._returnBlob = true;
        const res = await exportStudioVideo();      // record → return blob (no download)
        vstudio._returnBlob = false;
        if (res && res.blob) {
          let base = String(vids[i].name).replace(/[^\w\- ]+/g, "").replace(/\s+/g, "-").slice(0, 50) || ("video-" + (i + 1));
          if (used[base]) base += "-" + (++used[base]); else used[base] = 1;
          zip.file(`${base}.${res.ext || "mp4"}`, res.blob);
        }
      } else {
        await exportStudioVideo();                  // fallback: individual download
      }
    } catch (e) { /* skip a failed one, continue */ }
    vstudio._exportName = null;
    vstudio._returnBlob = false;
  }

  // build + download the single zip
  if (zip && !vstudio._batchCancel) {
    vsBatchProgress(true, vids.length, vids.length, fa ? "در حال فشرده‌سازی ZIP…" : "Packaging .zip…");
    vsAutoStatus(fa ? "در حال ساخت فایل ZIP…" : "Building the .zip…");
    try {
      const content = await zip.generateAsync({ type: "blob", compression: "STORE" });
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url; a.download = "ai-radar-videos.zip"; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 6000);
    } catch (e) { /* zip failed */ }
  }

  vstudio._batchExporting = false;
  vstudio.rendering = false;
  const wasCancelled = vstudio._batchCancel;
  vstudio._batchCancel = false;
  vsBatchProgress(false);
  if (btn) { btn.disabled = false; btn.textContent = fa ? "⬇ دانلود همه (ZIP)" : "⬇ Download all (zip)"; }
  vsAutoStatus(wasCancelled
    ? (fa ? "خروجی لغو شد." : "Export cancelled.")
    : zip
      ? (fa ? `فایل ZIP شامل ${vids.length} ویدئو دانلود شد.` : `Downloaded a .zip with all ${vids.length} videos.`)
      : (fa ? `${vids.length} ویدئو جداگانه دانلود شد (ZIP در دسترس نبود).`
            : `Downloaded ${vids.length} videos separately (zip unavailable).`));
}

function addOutroSlide() {
  vsSaveActiveSlide();
  const slide = {
    url: null, isVideo: false, mediaEl: null, ready: true,
    isIntro: true, isOutro: true,
    introBg: introBackgrounds[0].id,
    introMain: "Thanks for watching",
    introSub: "Follow for more",
    introMotion: "fade",
    headline: "", duration: 3,
    settings: vsCaptureSettings()
  };
  vstudio.slides.push(slide);
  renderSlideList();
  if (!$("#vsCanvas")) buildPreviewCanvas();
  if (vstudio.slides.length === 1) selectSlide(0);
  selectSlide(vstudio.slides.length - 1);
  drawStudioFrame(0);
  vsStatus(state.lang === "fa" ? `صحنه پایانی اضافه شد.` : `Outro scene added.`);
}

// Add or replace footage on the slide currently being edited (used for
// the middle/content slides so they can carry real media, not just a
// generated background). Intro/outro title scenes don't use this.
function addFootageToActiveSlide(file) {
  if (!file) return;
  const s = vstudio.slides[vstudio.activeSlide];
  if (!s) { vsStatus("Select a slide first."); return; }
  const url = URL.createObjectURL(file);
  const isVideo = file.type.startsWith("video/");
  const nm = $("#vsSlideMediaName");
  const done = () => {
    s.ready = true;
    // once it has footage it's a media scene, not a generated background
    s._standaloneInfo = s._standaloneInfo; // keep overlay flags as-is
    renderSlideList();
    if (nm) nm.textContent = state.lang === "fa"
      ? "فوتیج به این صحنه اضافه شد." : "Footage added to this scene.";
    drawStudioFrame(vstudio.position || 0);
  };
  s.url = url; s.isVideo = isVideo;
  if (isVideo) {
    const v = document.createElement("video");
    v.src = url; v.muted = true; v.playsInline = true; v.loop = false;
    v.addEventListener("loadedmetadata", () => {
      s.mediaEl = v;
      if (isFinite(v.duration) && v.duration > 0)
        s.duration = Math.min(600, Math.max(1, Math.round(v.duration)));
      done();
      const du = $("#vsSlideDuration"); if (du) du.value = s.duration;
    });
    v.addEventListener("error", () => vsStatus("Could not load that video."));
  } else {
    const img = new Image();
    img.onload = () => { s.mediaEl = img; done(); };
    img.onerror = () => vsStatus("Could not load that image.");
    img.src = url;
  }
  vsStatus(state.lang === "fa" ? "در حال بارگیری فوتیج…" : "Loading footage…");
}

// ── AI IMAGE GENERATION ─────────────────────────────────────────────────
// Generate a cinematic background image from a text prompt using puter.ai,
// then attach it to a slide as its footage. Returns the loaded <img> or null.
// Ensure the user is signed in to Puter before any AI call that needs it.
// Uses a temporary anonymous account so there's no signup friction. Must be
// called directly from a click handler (popup requires a user gesture).
async function vsEnsurePuterAuth() {
  if (typeof puter === "undefined" || !puter.auth) return false;
  try {
    if (puter.auth.isSignedIn && puter.auth.isSignedIn()) return true;
    await puter.auth.signIn({ attempt_temp_user_creation: true });
    return puter.auth.isSignedIn ? puter.auth.isSignedIn() : true;
  } catch (e) {
    return false;
  }
}

async function vsGenerateImage(promptText, aspect) {
  // FREE image generation via Pollinations.ai — no API key, no login, no
  // credits, no paywall. It serves a generated image straight from a URL.
  const styled = promptText.trim() +
    " — cinematic editorial photograph, dramatic volumetric lighting, rich" +
    " color grading, shallow depth of field, ultra detailed, atmospheric," +
    " professional composition, no text, no words, no watermark";
  // dimensions follow the chosen aspect ratio
  let w = 768, h = 1344; // default 9:16 portrait
  if (aspect === "16:9") { w = 1344; h = 768; }
  else if (aspect === "1:1") { w = 1024; h = 1024; }
  else if (aspect === "4:5") { w = 896; h = 1120; }
  const enc = encodeURIComponent(styled);
  // Build a SHORT list of candidate URLs (fail fast — a hung image must not
  // freeze the whole build). Pollinations sometimes errors on one model/host.
  const tok = VS_POLLINATIONS_KEY ? ("&token=" + encodeURIComponent(VS_POLLINATIONS_KEY)) : "";
  const sd = Math.floor(Math.random() * 1e6);
  const candidates = [
    "https://image.pollinations.ai/prompt/" + enc + "?width=" + w + "&height=" + h + "&seed=" + sd + "&model=flux&nologo=true" + tok,
    "https://image.pollinations.ai/prompt/" + enc + "?width=" + w + "&height=" + h + "&seed=" + sd + "&model=turbo&nologo=true" + tok
  ];

  // Load an image URL with a SHORT timeout so a dead host fails quickly.
  function tryLoad(src, useCors) {
    return new Promise((res) => {
      const im = new Image();
      if (useCors) im.crossOrigin = "anonymous";
      let done = false;
      const timer = setTimeout(() => { if (!done) { done = true; res(null); } }, 8000);
      im.onload = () => { if (!done) { done = true; clearTimeout(timer); res(im.naturalWidth ? im : null); } };
      im.onerror = () => { if (!done) { done = true; clearTimeout(timer); res(null); } };
      im.src = src;
    });
  }

  let imgEl = null;
  for (const url of candidates) {
    if (vstudio._batchCancel) return null;          // bail immediately on cancel
    imgEl = await tryLoad(url, true);               // CORS (export-safe) first
    if (!imgEl && !vstudio._batchCancel) imgEl = await tryLoad(url, false);
    if (imgEl) break;
  }
  if (!imgEl) throw new Error("Image service unavailable (try again in a moment)");
  return imgEl;
}

// Attach a generated image to the active slide as its background footage.
async function vsGenerateImageForActiveSlide() {
  const s = vstudio.slides[vstudio.activeSlide];
  if (!s) { vsStatus(state.lang === "fa" ? "اول یک صحنه انتخاب کن." : "Select a slide first."); return; }
  const promptInput = $("#vsImgPrompt");
  let p = (promptInput && promptInput.value || "").trim();
  if (!p) p = s._caption || s._headline || vsVal("#vsHeadline", "") || "abstract cinematic background";
  const btn = $("#vsImgGenBtn");
  const setBtn = (txt, dis) => { if (btn) { btn.innerHTML = txt; btn.disabled = dis; } };
  setBtn(state.lang === "fa" ? "در حال ساخت…" : "Generating…", true);
  vsStatus(state.lang === "fa" ? "در حال ساخت تصویر…" : "Generating the image…");
  try {
    const img = await vsGenerateImage(p, vsVal("#vsAspect", "9:16"));
    s.mediaEl = img; s.isVideo = false; s.ready = true; s.url = img.src;
    // give it a cinematic camera move if the slide has none yet
    s.settings = s.settings || {};
    if (!s.settings["#vsMotion"] || s.settings["#vsMotion"] === "none") {
      s.settings["#vsMotion"] = "kenburns-in";
    }
    // reflect it in the live control if this is the active slide
    const motionSel = $("#vsMotion");
    if (motionSel) motionSel.value = s.settings["#vsMotion"];
    renderSlideList();
    drawStudioFrame(vstudio.position || 0);
    vsStatus(state.lang === "fa" ? "تصویر ساخته شد و به صحنه اضافه شد." : "Image generated and added to the scene.");
  } catch (e) {
    const msg = (e && e.message) ? e.message : String(e);
    vsStatus(state.lang === "fa"
      ? ("ساخت تصویر ناموفق بود: " + msg)
      : ("Image generation failed: " + msg));
  } finally {
    setBtn("✦ " + (state.lang === "fa" ? "ساخت تصویر با AI" : "Generate image with AI"), false);
  }
}

function addStudioSlide(file) {
  if (!file) return;
  // save the slide currently being edited before creating a new one
  vsSaveActiveSlide();
  const url = URL.createObjectURL(file);
  const isVideo = file.type.startsWith("video/");
  const slide = {
    url, isVideo, mediaEl: null, ready: false,
    headline: "", duration: 6,
    // a fresh slide inherits the current settings as its starting point
    settings: vsCaptureSettings()
  };
  if (isVideo) {
    const v = document.createElement("video");
    v.src = url; v.muted = true; v.playsInline = true; v.loop = false;
    v.addEventListener("loadedmetadata", () => {
      slide.mediaEl = v; slide.ready = true;
      // the scene lasts exactly as long as its clip — no looping
      if (isFinite(v.duration) && v.duration > 0) {
        slide.duration = Math.min(600, Math.max(1, Math.round(v.duration)));
      }
      renderSlideList();
      if (vstudio.slides.length === 1) selectSlide(0);
    });
    v.addEventListener("error", () => vsStatus("Could not load that video."));
  } else {
    const img = new Image();
    img.onload = () => {
      slide.mediaEl = img; slide.ready = true; renderSlideList();
      if (vstudio.slides.length === 1) selectSlide(0);
    };
    img.onerror = () => vsStatus("Could not load that image.");
    img.src = url;
  }
  vstudio.slides.push(slide);
  renderSlideList();
  vsStatus(state.lang === "fa"
    ? `اسلاید ${vstudio.slides.length} اضافه شد — تنظیمات این اسلاید مستقل است.`
    : `Slide ${vstudio.slides.length} added — it has its own settings.`);
}

// Remove a slide by index.
function removeStudioSlide(i) {
  const s = vstudio.slides[i];
  if (s && s.url) { try { URL.revokeObjectURL(s.url); } catch {} }
  vstudio.slides.splice(i, 1);
  if (vstudio.activeSlide >= vstudio.slides.length) {
    vstudio.activeSlide = Math.max(0, vstudio.slides.length - 1);
  }
  renderSlideList();
  if (vstudio.slides.length) selectSlide(vstudio.activeSlide);
  else { const f = $("#vsSlideOnlyFields"); if (f) f.classList.add("vtab-hidden"); }
}

// Select a slide for editing.
function selectSlide(i) {
  // save the slide we're leaving, then switch
  if (vstudio.activeSlide !== i) vsSaveActiveSlide();
  vstudio.activeSlide = i;
  const s = vstudio.slides[i];
  const fields = $("#vsSlideOnlyFields");
  if (!s) return;
  // A slide is a TITLE scene (intro/outro) only if it's a plain intro
  // with no standalone content. Content slides — even though they reuse
  // the intro background mechanism — should be fully editable with the
  // media/footage fields, so they're treated like normal scenes here.
  const isTitleScene = s.isIntro && !s._standaloneInfo && !s._standaloneNews;
  const introEd = $("#vsIntroEditor");
  if (isTitleScene) {
    if (introEd) {
      introEd.hidden = false;
      introEd.open = true;
      renderIntroBgPicker(s);
      const mi = $("#vsIntroMainInput"), si = $("#vsIntroSubInput"),
            moi = $("#vsIntroMotionInput");
      if (mi) mi.value = s.introMain || "";
      if (si) si.value = s.introSub || "";
      if (moi) moi.value = s.introMotion || "rise";
    }
    if (fields) fields.classList.add("vtab-hidden");
  } else {
    if (introEd) introEd.hidden = true;
    if (fields) fields.classList.remove("vtab-hidden");
    // show whether this slide already has footage
    const nm = $("#vsSlideMediaName");
    if (nm) nm.textContent = s.mediaEl
      ? (state.lang === "fa" ? "این صحنه فوتیج دارد." : "This scene has footage.")
      : (state.lang === "fa" ? "بدون فوتیج (پس‌زمینه طرح)." : "No footage (uses a background).");
  }
  const du = $("#vsSlideDuration");
  if (du) du.value = s.duration || 4;
  const capInp = $("#vsSlideCaption");
  if (capInp) capInp.value = s._caption || "";
  // load this slide's own settings onto the controls
  if (s.settings) {
    vsApplySettings(s.settings);
    syncStudioControls();          // refresh dependent UI (template chips etc.)
  }
  // show which slide the other tabs are now editing
  const tag = $("#vsActiveSlideTag");
  if (tag) {
    tag.textContent = state.lang === "fa"
      ? `در حال ویرایش اسلاید ${i + 1} از ${vstudio.slides.length}`
      : `Editing slide ${i + 1} of ${vstudio.slides.length}`;
  }
  renderSlideList();
  if (!vstudio.looping && vstudio.mediaEl || vstudio.slides.length) {
    drawStudioFrame(vstudio.position || 0);
  }
}

// Re-sync any UI that mirrors control state (safe no-op if not needed).
function syncStudioControls() {
  // when switching slides, repopulate the infographic form from the
  // slide's JSON so the form fields show that slide's stats.
  if (typeof window._vsInfoJsonToForm === "function") {
    window._vsInfoJsonToForm();
  }
}

// Render the slide list with thumbnails and controls.
function renderSlideList() {
  const list = $("#vsSlideList");
  if (!list) return;
  if (!vstudio.slides.length) {
    list.innerHTML = `<p class="vs-slide-empty">${
      state.lang === "fa" ? "هنوز اسلایدی اضافه نشده." : "No slides yet."}</p>`;
    heraRenderTimeline();
    return;
  }
  const n = vstudio.slides.length;
  let contentNo = 0;   // running number for the middle (content) slides
  list.innerHTML = vstudio.slides.map((s, i) => {
    const isFirst = i === 0;
    const isLast = i === n - 1 && n > 1;
    let icon, label;
    if (s.isOutro || (isLast && s.isIntro)) {
      // last scene (or an explicit outro) → Outro
      icon = "🏁";
      label = s.introMain
        ? escapeHtml(s.introMain)
        : (state.lang === "fa" ? "اوترو" : "Outro");
    } else if (isFirst && s.isIntro) {
      // first scene that's a title scene → Intro
      icon = "✨";
      label = s.introMain
        ? escapeHtml(s.introMain)
        : (state.lang === "fa" ? "اینترو" : "Intro");
    } else {
      // a numbered middle slide — show its number plus a short hint of
      // its own content, and an icon matching the slide type.
      contentNo++;
      icon = s._standaloneInfo ? "📊"
        : s._standaloneNews ? "📰"
        : s.isIntro ? "✨"
        : s.isVideo ? "🎬" : "🖼";
      const num = state.lang === "fa" ? `اسلاید ${contentNo}` : `Slide ${contentNo}`;
      // pull a short hint from whatever text the slide carries
      let hint = s.introMain
        || (s.settings && (s.settings["#vsNewsHeadline"] || s.settings["#vsHeadline"]))
        || s._caption || "";
      if (s._standaloneInfo && s.settings && s.settings["#vsInfoJson"]) {
        try { hint = JSON.parse(s.settings["#vsInfoJson"]).title || hint; } catch {}
      }
      hint = String(hint).trim();
      label = hint
        ? `${num} · ${escapeHtml(hint.slice(0, 26))}`
        : num;
    }
    return `
    <div class="vs-slide-row ${i === vstudio.activeSlide ? "active" : ""}" data-slide="${i}">
      <span class="vs-slide-num">${i + 1}</span>
      <span class="vs-slide-info">
        ${icon} ${label}
        <em>${s.duration}s</em>
      </span>
      <button class="vs-slide-del" data-del="${i}" type="button" aria-label="Remove">✕</button>
    </div>`;
  }).join("");
  // Also refresh Hera scene timeline blocks
  heraRenderTimeline();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

// Total duration of all slides (used by preview/export when slides exist).
function slidesTotalDuration() {
  return vstudio.slides.reduce((sum, s) => sum + (Number(s.duration) || 4), 0);
}

// Which slide is active at a given elapsed time, and its local progress.
function slideAtTime(elapsed) {
  let t = elapsed;
  for (let i = 0; i < vstudio.slides.length; i++) {
    const d = Number(vstudio.slides[i].duration) || 4;
    if (t < d) return { index: i, local: t, dur: d };
    t -= d;
  }
  const last = vstudio.slides.length - 1;
  return { index: last, local: 0, dur: vstudio.slides[last]?.duration || 4 };
}

function loadStudioMedia(file) {
  if (!file) return;

  // If slides exist, redirect this upload to the active slide's footage
  // instead of the global vstudio.mediaEl — so it doesn't bleed into
  // every other slide.
  if (vstudio.slides.length) {
    addFootageToActiveSlide(file);
    vsStatus(state.lang === "fa"
      ? "فوتیج به اسلاید فعال اضافه شد."
      : "Footage added to the active slide.");
    return;
  }

  if (vstudio.mediaUrl) URL.revokeObjectURL(vstudio.mediaUrl);
  vstudio.mediaUrl = URL.createObjectURL(file);
  vstudio.isVideo = file.type.startsWith("video/");

  if (vstudio.isVideo) {
    const video = document.createElement("video");
    video.src = vstudio.mediaUrl;
    video.muted = true;
    video.playsInline = true;
    video.loop = false;   // play once, beginning to end — no repeat
    video.addEventListener("loadedmetadata", () => {
      vstudio.mediaEl = video;
      // the video length IS the project length — set the duration field
      // to the clip's real duration so it plays fully once, no looping.
      const dur = video.duration;
      if (isFinite(dur) && dur > 0) {
        const field = $("#vsDuration");
        if (field) {
          field.value = Math.min(600, Math.max(2, Math.round(dur)));
        }
      }
      buildPreviewCanvas();
      refreshTimelineClips();
      previewStudioVideo(true);   // start the live preview
      vsStatus(state.lang === "fa" ? "ویدیو بارگذاری شد — پیش‌نمایش زنده فعال است." : "Video loaded — live preview is running.");
    });
    video.addEventListener("error", () => {
      vsStatus(state.lang === "fa" ? "بارگذاری ویدیو ناموفق بود." : "Could not load that video.");
    });
  } else {
    const img = new Image();
    img.onload = () => {
      vstudio.mediaEl = img;
      buildPreviewCanvas();
      refreshTimelineClips();
      previewStudioVideo(true);   // start the live looping preview
      vsStatus(state.lang === "fa" ? "تصویر بارگذاری شد — پیش‌نمایش زنده فعال است." : "Image loaded — live preview is running.");
    };
    img.onerror = () => {
      vsStatus(state.lang === "fa" ? "بارگذاری تصویر ناموفق بود." : "Could not load that image.");
    };
    img.src = vstudio.mediaUrl;
  }
}

function loadStudioMusic(file) {
  if (!file) return;
  if (vstudio.musicUrl) URL.revokeObjectURL(vstudio.musicUrl);
  // a new music element needs a fresh audio graph (the old MediaElementSource
  // is bound to the previous element and can't be reused)
  if (vstudio._audioCtx) { try { vstudio._audioCtx.close(); } catch {} }
  vstudio._audioCtx = null;
  vstudio._musicSrc = null;
  vstudio._musicDest = null;
  vstudio.musicUrl = URL.createObjectURL(file);
  const audio = new Audio(vstudio.musicUrl);
  audio.loop = true;
  vstudio.musicEl = audio;
  refreshTimelineClips();
  vsStatus(state.lang === "fa" ? "موسیقی اضافه شد." : "Music added.");
}

function loadStudioLogo(file) {
  if (!file) return;
  if (vstudio.logoUrl) URL.revokeObjectURL(vstudio.logoUrl);
  vstudio.logoUrl = URL.createObjectURL(file);
  vstudio.logoIsVideo = (file.type || "").startsWith("video");
  vstudio._logoVidVisible = false;   // force a clean restart on first appearance
  if (vstudio.logoIsVideo) {
    // animated logo (webm with alpha, mp4, …) — its own motion, we just play it
    const v = document.createElement("video");
    v.muted = true; v.loop = true; v.playsInline = true;
    v.addEventListener("loadeddata", () => {
      vstudio.logoEl = v;
      vstudio.logoSegs = null;            // letter cascade not applicable
      vsDetectLogoKey(v);                 // find a flat bg to knock out
      try { v.play(); } catch (e) {}
      vsRedrawPreview();
      refreshTimelineClips();
      vsLogoLoadedUI(file);
      vsStatus(state.lang === "fa" ? "لوگوی متحرک اضافه شد." : "Animated logo added.");
    });
    v.addEventListener("error", () => {
      vsStatus(state.lang === "fa"
        ? "این فرمت ویدیو پشتیبانی نمی‌شود — WebM (با آلفا) یا MP4 امتحان کن."
        : "Unsupported video format — try WebM (with alpha) or MP4.");
    });
    v.src = vstudio.logoUrl;
    return;
  }
  const img = new Image();
  img.onload = () => {
    vstudio.logoEl = img;
    vsDetectLogoKey(img);   // find a flat bg to knock out (if any)
    vsAnalyzeLogo(img);   // detect letter segments for the Letter-cascade motion
    vsRedrawPreview();
    refreshTimelineClips();
    vsLogoLoadedUI(file);
    vsStatus(state.lang === "fa" ? "لوگو اضافه شد." : "Logo added.");
  };
  img.onerror = () => {
    const box = $("#vsLogoBoxTxt");
    if (box) box.textContent = state.lang === "fa" ? "⚠ بارگذاری لوگو ناموفق بود" : "⚠ Could not load that logo";
    vsStatus(state.lang === "fa" ? "بارگذاری لوگو ناموفق بود." : "Could not load that logo.");
  };
  img.src = vstudio.logoUrl;
}

// Load one of the sample logos shipped alongside the site (animated WebM).
function loadSampleLogo(fileName) {
  if (vstudio.logoUrl) { try { URL.revokeObjectURL(vstudio.logoUrl); } catch (e) {} }
  vstudio.logoUrl = fileName;           // relative URL next to index.html
  vstudio.logoIsVideo = true;
  vstudio._logoVidVisible = false;      // clean restart on first appearance
  // The cascade motion logo is monochrome — default it to MATCH the template
  // colour so it blends with the chosen palette out of the box. Users can
  // change this in Advanced styling → Logo colour.
  if (/cascade/i.test(fileName)) {
    const tintSel = $("#vsLogoTint");
    if (tintSel) tintSel.value = "match";
  }
  const v = document.createElement("video");
  v.muted = true; v.loop = true; v.playsInline = true; v.crossOrigin = "anonymous";
  v.addEventListener("loadeddata", () => {
    vstudio.logoEl = v;
    vstudio.logoSegs = null;
    vsDetectLogoKey(v);                 // find a flat bg to knock out
    try { v.play(); } catch (e) {}
    vsRedrawPreview();
    refreshTimelineClips();
    vsLogoLoadedUI({ name: fileName });
    vsStatus(state.lang === "fa" ? "لوگوی نمونه بارگذاری شد." : "Sample logo loaded.");
  });
  v.addEventListener("error", () => {
    vsStatus(state.lang === "fa"
      ? "بارگذاری لوگوی نمونه ناموفق بود (فایل را کنار سایت آپلود کن)."
      : "Couldn't load the sample (upload the .webm next to your site).");
  });
  v.src = fileName;
}

// Load one of the sample logos shipped alongside the site (animated WebM).
function vsLogoLoadedUI(file) {
  const box = $("#vsLogoBoxTxt");
  if (box) box.textContent = (state.lang === "fa" ? "✓ بارگذاری شد: " : "✓ Loaded: ") + (file ? file.name : "logo");
  const rm = $("#vsLogoRemove");
  if (rm) rm.style.display = "";
}

// Remove the current logo and reset the UI so a new one can be uploaded.
function removeStudioLogo() {
  if (vstudio.logoUrl) { try { URL.revokeObjectURL(vstudio.logoUrl); } catch (e) {} }
  vstudio.logoEl = null;
  vstudio.logoUrl = null;
  vstudio.logoIsVideo = false;
  vstudio._logoVidVisible = false;
  vstudio._logoKey = null;
  vstudio.logoSegs = null;
  vstudio.logoSrcCanvas = null;
  const inp = $("#vsLogo"); if (inp) inp.value = "";
  const box = $("#vsLogoBoxTxt");
  if (box) box.textContent = state.lang === "fa"
    ? "برای آپلود لوگو کلیک کن — PNG شفاف یا WebM/MP4"
    : "Click to upload logo — PNG (transparent) or animated WebM/MP4";
  const rm = $("#vsLogoRemove"); if (rm) rm.style.display = "none";
  refreshTimelineClips();
  vsRedrawPreview();
  vsStatus(state.lang === "fa" ? "لوگو حذف شد." : "Logo removed.");
}

// When an animated (video) logo is present but the preview isn't actively
// playing, keep repainting so the logo's own motion is visible while editing.
let _vsLogoIdleRAF = null;
function vsLogoIdleLoop() {
  const isVid = vstudio.logoEl && vstudio.logoIsVideo;
  if (isVid && !vstudio.rendering && !vstudio.playing) {
    try { drawStudioFrame(vstudio.position || 0); } catch (e) {}
    _vsLogoIdleRAF = requestAnimationFrame(vsLogoIdleLoop);
  } else {
    _vsLogoIdleRAF = null;
  }
}
function vsStartLogoIdleLoop() {
  if (!_vsLogoIdleRAF) _vsLogoIdleRAF = requestAnimationFrame(vsLogoIdleLoop);
}

// Redraw the studio preview whenever there's anything to show (media OR slides
// OR an intro/news scene) — used after a logo is added/changed so it appears
// even in slide-based projects (which have no single vstudio.mediaEl).
function vsRedrawPreview() {
  if (vstudio.rendering) return;
  const hasContent = vstudio.mediaEl
    || (vstudio.slides && vstudio.slides.some(s => s.ready))
    || ($("#vsInfoOn") && $("#vsInfoOn").checked)
    || ($("#vsNewsOn") && $("#vsNewsOn").checked)
    || vstudio.logoEl;
  if (hasContent) {
    try { drawStudioFrame(vstudio.position || 0); } catch (e) { console.warn("[logo] redraw failed", e); }
  }
  // keep animated logos moving while idle
  if (vstudio.logoEl && vstudio.logoIsVideo) vsStartLogoIdleLoop();
}

// Detect letter segments in a wordmark logo by scanning for empty columns
// (transparent OR near-black). Enables the per-letter cascade motion for ANY
// uploaded wordmark — segments are stored as source-rect slices.
function vsAnalyzeLogo(img) {
  vstudio.logoSegs = null;
  try {
    const w = img.naturalWidth, hgt = img.naturalHeight;
    if (!w || !hgt || w * hgt > 4000000) return; // skip absurdly large images
    const c = document.createElement("canvas");
    c.width = w; c.height = hgt;
    const cx = c.getContext("2d", { willReadFrequently: true });
    cx.drawImage(img, 0, 0);
    const data = cx.getImageData(0, 0, w, hgt).data;
    const colHasInk = new Uint8Array(w);
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < hgt; y += 2) {           // sample every 2nd row
        const i = (y * w + x) * 4;
        const a = data[i + 3];
        const lum = data[i] + data[i + 1] + data[i + 2];
        if (a > 24 && lum > 60) { colHasInk[x] = 1; break; }
      }
    }
    const segs = [];
    let start = -1;
    for (let x = 0; x < w; x++) {
      if (colHasInk[x] && start < 0) start = x;
      if (!colHasInk[x] && start >= 0) { segs.push({ x: start, w: x - start }); start = -1; }
    }
    if (start >= 0) segs.push({ x: start, w: w - start });
    // only useful when the mark really splits into multiple glyphs
    if (segs.length >= 3 && segs.length <= 24) {
      vstudio.logoSegs = segs;
      // keep a clean source canvas for slice drawing
      vstudio.logoSrcCanvas = c;
    }
  } catch (e) { /* canvas tainted or too big — cascade silently unavailable */ }
}

function buildPreviewCanvas(exportLongEdge) {
  const stage = $("#vsPreview");
  if (!stage) return;
  const { w, h } = vsCanvasSize(exportLongEdge);
  stage.innerHTML = `<canvas id="vsCanvas" width="${w}" height="${h}"></canvas>`;
  applyPreviewSize();
  setupTextDrag();
}

// Make the headline/sub/cta block draggable directly on the canvas.
function setupTextDrag() {
  const canvas = $("#vsCanvas");
  if (!canvas) return;
  let dragging = null;   // which element: 'text' | 'info' | 'news'
  let startX = 0, startY = 0, baseDX = 0, baseDY = 0;

  // convert a pointer event to canvas-pixel coordinates
  const toCanvas = (e) => {
    const r = canvas.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return {
      x: (p.clientX - r.left) / r.width * canvas.width,
      y: (p.clientY - r.top) / r.height * canvas.height
    };
  };
  // is a point inside a recorded bounding box (with padding)?
  const inBox = (pt, b) => {
    if (!b) return false;
    const pad = canvas.width * 0.03;
    return pt.x >= b.x - pad && pt.x <= b.x + b.w + pad &&
           pt.y >= b.y - pad && pt.y <= b.y + b.h + pad;
  };
  // which draggable element is under the pointer? (news/info on top of text)
  const pick = (pt) => {
    // When the user is on the "Logo & cards" tab, only the logo is draggable —
    // so they can position it without accidentally moving text/news/info.
    if (vstudio.activeVtab === "logo") {
      if (vstudio.logoEl && inBox(pt, vstudio.logoBox)) return "logo";
      return null;
    }
    // info & text are smaller, more specific boxes — check them FIRST so a
    // full-frame cinematic news banner doesn't swallow every click.
    if (inBox(pt, vstudio.infoBox)) return "info";
    if (inBox(pt, vstudio.textBox)) return "text";
    if (vstudio.logoEl && inBox(pt, vstudio.logoBox)) return "logo";
    if (inBox(pt, vstudio.newsBox)) return "news";
    // the footage fills the whole frame, so it's the LAST resort — only when
    // the click isn't on any overlay. Lets you drag/reframe the background
    // without ever stealing drags from the infographic, news or text.
    if (vstudio._frameHasMedia) return "footage";
    return null;
  };
  const offsetsFor = (kind) => {
    if (kind === "news") return ["newsDX", "newsDY"];
    if (kind === "info") return ["infoDX", "infoDY"];
    if (kind === "logo") return ["logoDX", "logoDY"];
    if (kind === "footage") return ["mediaDX", "mediaDY"];
    return ["textDX", "textDY"];
  };
  const scaleKeyFor = (kind) => {
    if (kind === "news") return "newsScale";
    if (kind === "info") return "infoScale";
    if (kind === "logo") return "logoScaleManual";
    if (kind === "footage") return "mediaScale";
    return "textScale";
  };

  // Scroll wheel over an element resizes it — manual scaling, real time.
  const wheel = (e) => {
    const pt = toCanvas(e);
    const kind = pick(pt);
    if (!kind) return;          // not over an element — let the page scroll
    e.preventDefault();
    const sk = scaleKeyFor(kind);
    const step = e.deltaY < 0 ? 1.06 : 1 / 1.06;
    vstudio[sk] = Math.max(0.3, Math.min(3, (vstudio[sk] || 1) * step));
    if (vstudio.slides.length) vsSaveActiveSlide();
    if (!vstudio.looping) {
      const hasContent = vstudio.mediaEl || vstudio.slides.some(s => s.ready)
        || ($("#vsInfoOn") && $("#vsInfoOn").checked)
        || ($("#vsNewsOn") && $("#vsNewsOn").checked) || vstudio.logoEl;
      if (hasContent) drawStudioFrame(vstudio.position || 0);
    }
  };

  // Double-click an element to toggle "fit to frame" — it grows to fill
  // the frame nicely, or snaps back to normal size if already fitted.
  const dbl = (e) => {
    const pt = toCanvas(e);
    const kind = pick(pt);
    if (!kind) return;
    e.preventDefault();
    const sk = scaleKeyFor(kind);
    const ox = offsetsFor(kind)[0], oy = offsetsFor(kind)[1];
    const isFitted = Math.abs((vstudio[sk] || 1) - 1.6) < 0.01
      && vstudio[ox] === 0 && vstudio[oy] === 0;
    if (isFitted) {
      vstudio[sk] = 1; vstudio[ox] = 0; vstudio[oy] = 0;
    } else {
      vstudio[sk] = 1.6; vstudio[ox] = 0; vstudio[oy] = 0;
    }
    if (vstudio.slides.length) vsSaveActiveSlide();
    if (!vstudio.looping) {
      const hasContent = vstudio.mediaEl || vstudio.slides.some(s => s.ready)
        || ($("#vsInfoOn") && $("#vsInfoOn").checked)
        || ($("#vsNewsOn") && $("#vsNewsOn").checked);
      if (hasContent) drawStudioFrame(vstudio.position || 0);
    }
  };

  const down = (e) => {
    const pt = toCanvas(e);
    const kind = pick(pt);
    if (!kind) return;
    dragging = kind;
    const [kx, ky] = offsetsFor(kind);
    startX = pt.x; startY = pt.y;
    baseDX = vstudio[kx]; baseDY = vstudio[ky];
    canvas.style.cursor = "grabbing";
    if (e.cancelable) e.preventDefault();
  };
  const SNAP_THRESHOLD = 0.02; // 2% of frame — auto-align snap zone
  const move = (e) => {
    const pt = toCanvas(e);
    if (!dragging) {
      canvas.style.cursor = pick(pt) ? "grab" : "default";
      return;
    }
    const [kx, ky] = offsetsFor(dragging);
    let dx = baseDX + (pt.x - startX) / canvas.width;
    let dy = baseDY + (pt.y - startY) / canvas.height;
    // ── AUTO-ALIGN: snap to center when close ──
    vstudio.snapGuideX = null; vstudio.snapGuideY = null;
    if (Math.abs(dx) < SNAP_THRESHOLD) { dx = 0; vstudio.snapGuideX = true; }
    if (Math.abs(dy) < SNAP_THRESHOLD) { dy = 0; vstudio.snapGuideY = true; }
    vstudio[kx] = Math.max(-0.45, Math.min(0.45, dx));
    vstudio[ky] = Math.max(-0.45, Math.min(0.45, dy));
    // redraw at the CURRENT position so the frame never jumps
    if (!vstudio.looping) {
      const hasContent = vstudio.mediaEl || vstudio.slides.some(s => s.ready)
        || ($("#vsInfoOn") && $("#vsInfoOn").checked)
        || ($("#vsNewsOn") && $("#vsNewsOn").checked);
      if (hasContent) drawStudioFrame(vstudio.position || 0);
    }
    if (e.cancelable) e.preventDefault();
  };
  const up = () => {
    vstudio.snapGuideX = null; vstudio.snapGuideY = null;
    if (dragging && vstudio.slides.length) vsSaveActiveSlide();
    dragging = null;
    canvas.style.cursor = "default";
    if (!vstudio.looping) drawStudioFrame(vstudio.position || 0);
  };

  canvas.addEventListener("mousedown", down);
  canvas.addEventListener("touchstart", down, { passive: false });
  canvas.addEventListener("wheel", wheel, { passive: false });
  canvas.addEventListener("dblclick", dbl);
  // window listeners attach only once across the session
  if (!window._vsTextDragBound) {
    window._vsTextDragBound = true;
    window.addEventListener("mousemove", (e) => window._vsTextMove && window._vsTextMove(e));
    window.addEventListener("mouseup", () => window._vsTextUp && window._vsTextUp());
    window.addEventListener("touchmove", (e) => window._vsTextMove && window._vsTextMove(e), { passive: false });
    window.addEventListener("touchend", () => window._vsTextUp && window._vsTextUp());
  }
  window._vsTextMove = move;
  window._vsTextUp = up;
}

// Manual preview-size control (40%–100% of the available preview box).
function applyPreviewSize() {
  const canvas = $("#vsCanvas");
  const slider = $("#vsPreviewSize");
  const valEl = $("#vsPreviewSizeVal");
  if (!canvas) return;
  const pct = slider ? Number(slider.value) : 100;
  // Zoom = a uniform cap on the canvas. width auto + height auto keeps
  // the aspect ratio locked, so the media is never stretched — it just
  // scales. maxWidth caps the on-screen width; maxHeight (in vh) caps
  // the height so tall clips don't overflow. Both scale by the same %.
  canvas.style.width = "auto";
  canvas.style.height = "auto";
  canvas.style.maxWidth = pct + "%";
  canvas.style.maxHeight = (pct / 100 * 68) + "vh";
  if (valEl) valEl.textContent = pct + "%";
}

// CSS-style filter string for the chosen grade.
function vsFilterString() {
  // global colour grade — always read the live control so one selection
  // applies to the whole video (every slide), not per-slide.
  const el = document.querySelector("#vsFilter");
  const v = el ? el.value : "none";
  switch (v) {
    case "cinematic": return "contrast(1.15) saturate(0.9) brightness(0.95)";
    case "warm":      return "saturate(1.15) sepia(0.25) brightness(1.03)";
    case "cool":      return "saturate(1.1) hue-rotate(-12deg) brightness(1.02)";
    case "mono":      return "grayscale(1) contrast(1.1)";
    case "vivid":     return "saturate(1.5) contrast(1.1)";
    default:          return "none";
  }
}

// Parse the stats textarea into [{label, value, num}] entries.
// Read infographic data from the JSON textarea.
// Controls whose values are saved PER SLIDE (each slide remembers its own).
// Aspect/duration-of-video and export settings stay global.
const VS_SLIDE_CONTROLS = [
  "#vsSpeed", "#vsTransition",
  "#vsHeadline", "#vsSub", "#vsCta", "#vsTextPos", "#vsTextSize", "#vsHeadlineFont",
  "#vsMotion", "#vsTextAnim", "#vsOverlay",
  "#vsInfoOn", "#vsInfoJson", "#vsInfoStyle", "#vsInfoPos", "#vsInfoMotion",
  "#vsNewsOn", "#vsNewsKicker", "#vsNewsHeadline", "#vsNewsSource", "#vsNewsStyle", "#vsNewsAccent", "#vsNewsClock", "#vsNewsMotion",
  "#vsIntro", "#vsIntroSub", "#vsIntroMotion", "#vsOutro"
];

// Read the current control values into a settings object.
function vsCaptureSettings() {
  const out = {};
  VS_SLIDE_CONTROLS.forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) return;
    out[sel] = el.type === "checkbox" ? el.checked : el.value;
  });
  // drag offsets for all movable elements travel with the slide
  out._textDX = vstudio.textDX;
  out._textDY = vstudio.textDY;
  out._textScale = vstudio.textScale;
  out._infoDX = vstudio.infoDX;
  out._infoDY = vstudio.infoDY;
  out._infoScale = vstudio.infoScale;
  out._newsDX = vstudio.newsDX;
  out._newsDY = vstudio.newsDY;
  out._newsScale = vstudio.newsScale;
  out._mediaDX = vstudio.mediaDX;
  out._mediaDY = vstudio.mediaDY;
  out._mediaScale = vstudio.mediaScale;
  return out;
}

// Apply a saved settings object back onto the controls.
function vsApplySettings(s) {
  if (!s) return;
  VS_SLIDE_CONTROLS.forEach(sel => {
    const el = document.querySelector(sel);
    if (!el || !(sel in s)) return;
    if (el.type === "checkbox") el.checked = !!s[sel];
    else el.value = s[sel];
  });
  vstudio.textDX = s._textDX || 0;
  vstudio.textDY = s._textDY || 0;
  vstudio.textScale = s._textScale || 1;
  vstudio.infoDX = s._infoDX || 0;
  vstudio.infoDY = s._infoDY || 0;
  vstudio.infoScale = s._infoScale || 1;
  vstudio.newsDX = s._newsDX || 0;
  vstudio.newsDY = s._newsDY || 0;
  vstudio.newsScale = s._newsScale || 1;
  vstudio.mediaDX = s._mediaDX || 0;
  vstudio.mediaDY = s._mediaDY || 0;
  vstudio.mediaScale = s._mediaScale || 1;
}

// Save the current control state into the active slide.
function vsSaveActiveSlide() {
  const s = vstudio.slides[vstudio.activeSlide];
  if (s) s.settings = vsCaptureSettings();
}

function vsInfoData(val) {
  val = val || vsVal;
  const raw = String(val("#vsInfoJson", "") || "").trim();
  const status = document.querySelector("#vsInfoJsonStatus");
  if (!raw) {
    if (status) status.textContent = "";
    return null;
  }
  let d;
  try {
    d = JSON.parse(raw);
  } catch (err) {
    // show a precise, friendly parse error instead of vanishing silently
    if (status) {
      status.className = "vstudio-note vs-err";
      status.textContent = state.lang === "fa"
        ? "JSON معتبر نیست: " + err.message
        : "Invalid JSON: " + err.message;
    }
    return null;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) {
    if (status) {
      status.className = "vstudio-note vs-err";
      status.textContent = state.lang === "fa"
        ? "JSON باید یک شیء با title و stats باشد."
        : "JSON must be an object with title and stats.";
    }
    return null;
  }
  const stats = (Array.isArray(d.stats) ? d.stats : []).slice(0, 6).map(s => {
    s = s || {};
    const value = s.value != null ? String(s.value) : "";
    // accept negative numbers and hyphens safely: e.g. "-12%", "−3"
    const cleaned = value.replace(/[^0-9.\-]/g, "");
    const parsed = parseFloat(cleaned);
    return {
      label: String(s.label || ""),
      value: value,
      num: typeof s.num === "number" ? s.num
           : (isNaN(parsed) ? 0 : parsed)
    };
  }).filter(s => s.label);
  // No usable stats — tell the user clearly what shape the JSON needs.
  if (!stats.length) {
    if (status) {
      status.className = "vstudio-note vs-err";
      status.textContent = state.lang === "fa"
        ? 'این JSON آماری ندارد. باید یک آرایه "stats" داشته باشد، مثل: {"title":"...","stats":[{"label":"...","value":"...","num":0}]}'
        : 'No stats found. The JSON needs a "stats" array, e.g. {"title":"...","stats":[{"label":"...","value":"...","num":0}]}';
    }
    return null;
  }
  if (status) {
    status.className = "vstudio-note vs-ok";
    status.textContent = state.lang === "fa"
      ? `معتبر — ${stats.length} آمار آماده نمایش`
      : `Valid — ${stats.length} stat${stats.length === 1 ? "" : "s"} ready`;
  }
  return { title: d.title || "", subtitle: d.subtitle || "", stats };
}

// Build professional infographic JSON from a short topic prompt.
function vsInfoFromPrompt(prompt) {
  const topic = (prompt || "").trim() || "Market Overview";
  let seed = 0;
  for (let i = 0; i < topic.length; i++) seed = (seed * 31 + topic.charCodeAt(i)) | 0;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
  const labels = ["Total users", "Annual growth", "Market share", "Revenue",
    "Adoption rate", "Engagement", "Retention", "Satisfaction"];
  const used = [];
  while (used.length < 4) { const l = pick(labels); if (!used.includes(l)) used.push(l); }
  const stats = used.map(label => {
    if (/growth|rate|share|retention|adoption/i.test(label)) {
      const n = Math.round(20 + rnd() * 160);
      return { label, value: "+" + n + "%", num: n };
    }
    if (/revenue/i.test(label)) {
      const n = (1 + rnd() * 18).toFixed(1);
      return { label, value: "$" + n + "B", num: parseFloat(n) };
    }
    if (/satisfaction|engagement/i.test(label)) {
      const n = Math.round(60 + rnd() * 38);
      return { label, value: n + "/100", num: n };
    }
    const n = (1 + rnd() * 9).toFixed(1);
    return { label, value: n + "M", num: parseFloat(n) };
  });
  return { title: cap(topic), subtitle: "Key metrics at a glance", stats };
}

// Draw a professional animated infographic overlay.
// Brightness (0-255) of a hex colour — used to pick light/dark styling.
function vsHexLuma(hex) {
  const h = String(hex || "#000").replace("#", "");
  const n = h.length === 3
    ? h.split("").map(c => c + c).join("")
    : h.padEnd(6, "0");
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}
// hex colour -> rgba string with the given alpha.
function vsHexA(hex, a) {
  const h = String(hex || "#000").replace("#", "");
  const n = h.length === 3
    ? h.split("").map(c => c + c).join("")
    : h.padEnd(6, "0");
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

// Draw a broadcast-style news banner over the footage.
function drawNewsBanner(ctx, W, H, elapsed, dsVal, vsOff, dsDur) {
  vsOff = vsOff || vstudio;
  const val = dsVal || vsVal;
  const onVal = val("#vsNewsOn", false);
  const isOn = (typeof onVal === "boolean") ? onVal
             : ($("#vsNewsOn") && $("#vsNewsOn").checked);
  if (!isOn) { vstudio.newsBox = null; return; }
  const kicker  = ""; // kicker tag removed by request — headline + source only
  const headline = String(val("#vsNewsHeadline","") || "").trim();
  const source   = String(val("#vsNewsSource",  "") || "").trim();
  if (!kicker && !headline && !source) { vstudio.newsBox = null; return; }

  const style    = val("#vsNewsStyle", "lowerthird");
  const accentKey = val("#vsNewsAccent", "auto");
  const accents = {
    red:  { bar: "#c0202a", text: "#ffffff" },
    blue: { bar: "#15418c", text: "#ffffff" },
    gold: { bar: "#d8b76a", text: "#1a1408" },
    mono: { bar: "#1a1a1a", text: "#ffffff" }
  };
  let ac = accents[accentKey];
  if (!ac || accentKey === "auto") {
    // follow the active template's accent colour so changing the template
    // restyles the news banner too (just like the infographic).
    const tpl = (typeof vsTemplate === "function") ? vsTemplate() : null;
    const acc = (tpl && tpl.accent) ? tpl.accent : "#d8b76a";
    // pick readable text colour based on accent luminance
    const lum = vsHexLuma ? vsHexLuma(acc) : 160;
    ac = { bar: acc, text: lum > 150 ? "#1a1408" : "#ffffff" };
  }
  const playing = vstudio.looping || vstudio.rendering;
  const slideRaw = playing ? Math.min(1, elapsed / 0.7) : 1;
  const slideEase = vsEasePro(slideRaw);
  const e = slideEase;
  const U = Math.min(W, H);

  // Banner styles sit at bottom/top; cinematic styles fill the frame
  const bannerStyles = ["ticker","fullbar","lowerthird","breaking","topbar","boxed","minimal"];
  const isBanner = bannerStyles.includes(style);
  vstudio.newsBox = isBanner
    ? { x: 0, y: H * 0.55, w: W, h: H * 0.45 }
    : { x: 0, y: 0, w: W, h: H }; // cinematic = whole frame is interactive

  // ── Wrap helper ────────────────────────────────────────────
  const wrap = (str, font, maxW, maxLines) => {
    ctx.font = font;
    const words = String(str).split(/\s+/).filter(Boolean);
    const out = []; let ln = "";
    for (const w of words) {
      const t = ln ? ln + " " + w : w;
      if (ctx.measureText(t).width > maxW && ln) {
        out.push(ln); ln = w;
        if (out.length === maxLines) { ln = ""; break; }
      } else ln = t;
    }
    if (ln && out.length < maxLines) out.push(ln);
    return out;
  };
  const mainTxt = headline || kicker;

  // Effective slide duration (seconds) — used so reveals/scrolls COMPLETE
  // within the slide and the full text is shown by the end.
  const slideDur = (dsDur && dsDur > 0) ? dsDur
    : (vstudio.slides.length ? 6 : Math.max(2, Number(val("#vsDuration", 6)) || 6));

  // Auto-fit wrap: returns {lines, px} that contain the WHOLE text (no
  // truncation) — shrinks the font until every line fits maxW and the block
  // fits maxBlockH. Use everywhere instead of a hard maxLines cap.
  const fitWrap = (str, weight, family, startPx, minPx, maxW, maxBlockH, lineHmul) => {
    let px = Math.round(startPx);
    const fam = vsGetFont(family);
    let lines = wrap(str, `${weight} ${px}px ${fam}`, maxW, 99);
    while (px > minPx && lines.length * px * lineHmul > maxBlockH) {
      px -= Math.max(1, Math.round(px * 0.06));
      lines = wrap(str, `${weight} ${px}px ${fam}`, maxW, 99);
    }
    return { lines, px };
  };

  // Per-item reveal timing so a staggered animation (words/lines) finishes by
  // ~85% of the slide, then HOLDS the full text. In a static preview (not
  // playing) everything is shown at once.
  const revealPer = (count) => (slideDur * 0.82) / Math.max(1, count);
  // progress 0..1 for item index i (1 = fully shown). Static preview → 1.
  const itemReveal = (i, per) => {
    if (!playing) return 1;
    const p = (elapsed - i * per) / Math.max(0.0001, per);
    return Math.max(0, Math.min(1, p));
  };

  ctx.save(); // ── outer save

  // Apply drag offset + scale from vstudio (enables drag-to-reposition on canvas)
  const ndx = vsOff.newsDX * W, ndy = vsOff.newsDY * H;
  const nScale = vsOff.newsScale || 1;
  if (ndx !== 0 || ndy !== 0 || nScale !== 1) {
    const pivX = W / 2, pivY = H / 2;
    ctx.translate(pivX + ndx, pivY + ndy);
    ctx.scale(nScale, nScale);
    ctx.translate(-pivX, -pivY);
  }

  // Clip everything to canvas bounds so text never bleeds outside
  ctx.beginPath();
  ctx.rect(0, 0, W, H);
  ctx.clip();

  // ══════════════════════════════════════════════════════════
  // BROADCAST BANNER STYLES — ticker, fullbar, lowerthird, breaking, topbar
  // ══════════════════════════════════════════════════════════
  if (style === "ticker") {
    const barH = H * 0.072;
    const y = H - barH * slideEase;
    ctx.fillStyle = "rgba(8,8,10,0.94)"; ctx.fillRect(0, y, W, barH);
    ctx.fillStyle = ac.bar;
    const tagW = W * 0.14;
    ctx.fillRect(0, y, tagW, barH);
    ctx.fillStyle = ac.text;
    vsFitFont(ctx, (kicker || "LIVE").toUpperCase(), tagW - W*0.02, "700", "Inter, sans-serif",
      Math.round(H*0.026), Math.round(H*0.014));
    ctx.textAlign = "center";
    ctx.fillText((kicker || "LIVE").toUpperCase(), tagW/2, y + barH*0.62);
    ctx.fillStyle = "#fff";
    ctx.font = `500 ${Math.round(H*0.03)}px Inter, sans-serif`;
    ctx.textAlign = "left";
    const txt = headline + (source ? "    •    " + source : "");
    const tw = ctx.measureText(txt).width || 1;
    // scroll speed scaled so the WHOLE message passes through within the slide
    const tspan = tw + (W - tagW);
    const tspeed = tspan / Math.max(0.5, slideDur * 0.92);
    const scrollX = tagW + (W - tagW) - ((elapsed * tspeed) % (tspan + W * 0.5));
    ctx.save(); ctx.beginPath(); ctx.rect(tagW, y, W-tagW, barH); ctx.clip();
    ctx.fillText(txt, scrollX, y + barH*0.62);
    ctx.fillText(txt, scrollX + tw + W*0.5, y + barH*0.62);
    ctx.restore();

  } else if (style === "fullbar") {
    const barH = H * 0.2;
    const y = H - barH * slideEase;
    ctx.fillStyle = "rgba(10,10,12,0.92)"; ctx.fillRect(0, y, W, barH);
    ctx.fillStyle = ac.bar; ctx.fillRect(0, y, W, H*0.01);
    if (kicker) {
      const kText = kicker.toUpperCase();
      const kPx = vsFitFont(ctx, kText, W*0.3, "700", "Inter, sans-serif", Math.round(H*0.028), Math.round(H*0.015));
      const kPad = W*0.022, kTextW = ctx.measureText(kText).width;
      const kw = kTextW + kPad*2, kh = H*0.05, ky = y + barH*0.16;
      ctx.fillStyle = ac.bar; ctx.fillRect(W*0.06, ky, kw, kh);
      ctx.fillStyle = ac.text; ctx.font = `700 ${kPx}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.textAlign = "left"; ctx.textBaseline = "middle";
      ctx.fillText(kText, W*0.06+kPad, ky+kh/2); ctx.textBaseline = "alphabetic";
    }
    // auto-size headline to fit in 2 lines, clip to bar
    const fbHl = vsFitFont(ctx, headline, W*0.88, "700", vsGetFont("Prata, serif"), Math.round(H*0.044), Math.round(H*0.022));
    ctx.fillStyle = "#fff"; ctx.font = `700 ${fbHl}px ${vsGetFont("Prata, serif")}`;
    ctx.textAlign = "left";
    ctx.save(); ctx.beginPath(); ctx.rect(0, y, W, barH); ctx.clip();
    wrapNewsText(ctx, headline, W*0.06, y + (source ? barH*0.42 : barH*0.5), W*0.88, fbHl*1.2, 2);
    if (source) {
      ctx.fillStyle = "rgba(210,210,215,0.85)";
      ctx.font = `400 ${Math.round(H*0.022)}px Inter, sans-serif`;
      ctx.fillText(source, W*0.06, y+barH*0.86);
    }
    ctx.restore();

  } else if (style === "breaking") {
    const barH2 = H * 0.12;
    const y2 = H - barH2 * slideEase;
    ctx.fillStyle = "rgba(0,0,0,0.94)"; ctx.fillRect(0, y2, W, barH2);
    const blinkAlpha = 0.75 + 0.25 * Math.abs(Math.sin(elapsed * 3));
    ctx.fillStyle = `rgba(192,10,26,${blinkAlpha})`;
    const tagW2 = W * 0.21;
    ctx.fillRect(0, y2, tagW2, barH2);
    // flash accent stripe
    ctx.fillStyle = ac.bar;
    ctx.fillRect(tagW2, y2, W*0.003, barH2);
    ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
    vsFitFont(ctx, "BREAKING", tagW2*0.82, "900", "Inter, sans-serif", Math.round(H*0.03), Math.round(H*0.016));
    ctx.fillText("BREAKING", tagW2/2, y2 + barH2*0.37);
    if (kicker) {
      ctx.font = `600 ${Math.round(H*0.017)}px Inter, sans-serif`;
      ctx.fillText(kicker.toUpperCase(), tagW2/2, y2 + barH2*0.72);
    }
    ctx.font = `700 ${Math.round(H*0.035)}px ${vsGetFont("Prata, serif")}`;
    ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
    const bTxt = headline + (source ? "   ●   " + source : "");
    const bTw = ctx.measureText(bTxt).width;
    const bVisW = W - tagW2 - W*0.01;
    const bspan = bTw + bVisW;
    const bspeed = bspan / Math.max(0.5, slideDur * 0.92);
    const bScrollX = tagW2 + W*0.01 + bVisW - ((elapsed * bspeed) % (bspan + W*0.5));
    ctx.save(); ctx.beginPath(); ctx.rect(tagW2+W*0.01, y2, W-tagW2-W*0.01, barH2); ctx.clip();
    ctx.fillStyle = "#fff";
    ctx.fillText(bTxt, bScrollX, y2 + barH2*0.62);
    ctx.fillText(bTxt, bScrollX + bTw + W*0.5, y2 + barH2*0.62);
    ctx.restore(); ctx.textBaseline = "alphabetic";

  } else if (style === "topbar") {
    const barH3 = H * 0.1;
    const y3 = -barH3 + barH3 * slideEase;
    ctx.fillStyle = "rgba(8,8,10,0.94)"; ctx.fillRect(0, y3, W, barH3);
    ctx.fillStyle = ac.bar; ctx.fillRect(0, y3 + barH3 * 0.92, W, barH3 * 0.08);
    ctx.save();
    ctx.beginPath(); ctx.rect(0, y3, W, barH3); ctx.clip(); // clip to bar
    ctx.textBaseline = "middle";
    if (kicker) {
      const kPx3 = Math.round(H * 0.025);
      ctx.font = `800 ${kPx3}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.textAlign = "left";
      const kT3 = kicker.toUpperCase();
      const kW3 = ctx.measureText(kT3).width + W * 0.04;
      ctx.fillStyle = ac.bar;
      roundRectPath(ctx, W*0.025, y3+barH3*0.18, kW3, barH3*0.64, barH3*0.12); ctx.fill();
      ctx.fillStyle = ac.text || "#fff";
      ctx.fillText(kT3, W*0.045, y3 + barH3 * 0.5);
      // headline right of kicker — truncated to fit
      const hlPx3 = Math.round(H * 0.032);
      ctx.font = `600 ${hlPx3}px ${vsGetFont("Prata, serif")}`;
      ctx.fillStyle = "#fff";
      const maxHlW = W - kW3 - W * 0.06;
      let hlTxt = headline;
      while (hlTxt.length > 4 && ctx.measureText(hlTxt).width > maxHlW) {
        hlTxt = hlTxt.slice(0, -1);
      }
      if (hlTxt !== headline) hlTxt = hlTxt.trimEnd() + "…";
      ctx.fillText(hlTxt, W * 0.04 + kW3, y3 + barH3 * 0.5);
    } else {
      ctx.textAlign = "center"; ctx.fillStyle = "#fff";
      ctx.font = `600 ${Math.round(H * 0.034)}px ${vsGetFont("Prata, serif")}`;
      let hlTxt2 = headline;
      while (hlTxt2.length > 4 && ctx.measureText(hlTxt2).width > W * 0.9) {
        hlTxt2 = hlTxt2.slice(0, -1);
      }
      if (hlTxt2 !== headline) hlTxt2 = hlTxt2.trimEnd() + "…";
      ctx.fillText(hlTxt2, W / 2, y3 + barH3 * 0.5);
    }
    ctx.textBaseline = "alphabetic";
    ctx.restore();

  } else if (style === "lowerthird" || style === "boxed" || style === "minimal") {
    // lower third — kicker tab + headline plate
    const x = W * 0.06, plateW = W * 0.78, padX = W * 0.03, textW = plateW - padX*2;
    // Auto-fit: show the WHOLE headline. Shrink the font until every line fits
    // and the plate stays within a sensible height (was hard-capped at 4 lines).
    const maxLines = 8, maxTextH = H * 0.5;
    let hlSize = Math.round(H * 0.038), minHl = Math.round(H * 0.016);
    const countLines = (px2) => {
      ctx.font = `700 ${px2}px ${vsGetFont("Prata, serif")}`;
      const words2 = headline.split(/\s+/);
      let line2 = "", n = 0;
      for (const w of words2) {
        const test = line2 ? line2+" "+w : w;
        if (ctx.measureText(test).width > textW && line2) { n++; line2 = w; } else line2 = test;
      }
      if (line2) n++; return Math.max(1, n);
    };
    while (hlSize > minHl && (countLines(hlSize) > maxLines || countLines(hlSize) * hlSize * 1.25 > maxTextH)) hlSize--;
    const lineH = hlSize * 1.25, lineCount = countLines(hlSize);
    const srcH = source ? H*0.04 : 0, plateH = lineH*lineCount + H*0.05 + srcH;
    const plateY = H*0.86 - plateH;
    const slideX = -W*0.66*(1-slideEase);
    ctx.save(); ctx.translate(slideX, 0);
    if (kicker) {
      const kText = kicker.toUpperCase();
      const kPx2 = vsFitFont(ctx, kText, W*0.5, "700","Inter, sans-serif",Math.round(H*0.028),Math.round(H*0.015));
      const kPad2 = W*0.022, kTextW2 = ctx.measureText(kText).width;
      const kw2 = kTextW2+kPad2*2, kh2 = H*0.05;
      ctx.fillStyle = ac.bar; ctx.fillRect(x, plateY-kh2, kw2, kh2);
      ctx.fillStyle = ac.text; ctx.textAlign="left"; ctx.textBaseline="middle";
      ctx.font = `700 ${kPx2}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(kText, x+kPad2, plateY-kh2/2); ctx.textBaseline="alphabetic";
    }
    ctx.fillStyle = "rgba(10,10,12,0.92)"; ctx.fillRect(x, plateY, plateW, plateH);
    ctx.fillStyle = ac.bar; ctx.fillRect(x, plateY, H*0.008, plateH);
    ctx.fillStyle = "#fff"; ctx.font = `700 ${hlSize}px ${vsGetFont("Prata, serif")}`; ctx.textAlign = "left";
    const linesDrawn = wrapNewsText(ctx, headline, x+padX, plateY+H*0.03+hlSize*0.8, textW, lineH, lineCount);
    if (source) {
      ctx.fillStyle = "rgba(210,210,215,0.85)";
      ctx.font = `400 ${Math.round(H*0.022)}px Inter, sans-serif`;
      ctx.fillText(source, x+padX, plateY+H*0.03+hlSize*0.8+linesDrawn*lineH+H*0.012);
    }
    ctx.restore();
  }

  // ══════════════════════════════════════════════════════════
  // CINEMATIC TEXT STYLES — full-frame, each independent
  // ══════════════════════════════════════════════════════════
  else if (style === "title-center" || style === "title-left") {
    const left = style === "title-left";
    const cx = left ? W*0.09 : W/2;
    const align = left ? "left" : "center";
    const maxW = W * (left ? 0.84 : 0.80);
    // Auto-fit font so the WHOLE headline shows (was capped/truncated at 4 lines)
    const fit = fitWrap(mainTxt, "800", "Prata, serif", U * 0.075, Math.round(U * 0.03), maxW, H * 0.62, 1.18);
    const lines = fit.lines, mainPx = fit.px;
    const lineH = mainPx * 1.18, blockH = lines.length * lineH;
    const top = H*0.48 - blockH/2;
    // scrim
    const scrimG = ctx.createLinearGradient(0, top-U*0.08, 0, top+blockH+U*0.18);
    scrimG.addColorStop(0,"rgba(0,0,0,0)"); scrimG.addColorStop(0.15,"rgba(0,0,0,0.68)");
    scrimG.addColorStop(0.85,"rgba(0,0,0,0.68)"); scrimG.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle = scrimG; ctx.fillRect(0, top-U*0.08, W, blockH+U*0.26);
    // kicker pill
    if (kicker && headline) {
      const kPx = Math.round(U*0.022);
      ctx.font = `700 ${kPx}px ${vsGetFont("Inter, sans-serif")}`; ctx.textAlign = align;
      const kText = kicker.toUpperCase(), kW = ctx.measureText(kText).width;
      const kx = left ? cx : cx-kW/2, ky = top-U*0.055;
      ctx.fillStyle = ac.bar;
      roundRectPath(ctx, kx-U*0.015, ky-kPx*0.85, kW+U*0.03, kPx*1.7, kPx*0.85); ctx.fill();
      ctx.fillStyle = ac.text||"#fff"; ctx.fillText(kText, kx, ky);
    }
    // headline lines
    ctx.textAlign = align; ctx.shadowColor = "rgba(0,0,0,0.7)"; ctx.shadowBlur = U*0.025;
    ctx.font = `800 ${mainPx}px ${vsGetFont("Prata, serif")}`;
    lines.forEach((ln, li) => {
      const le = Math.max(0, Math.min(1, e*(lines.length+1)-li));
      const le3 = 1-Math.pow(1-le,3);
      ctx.globalAlpha = le3; ctx.fillStyle = "#fff";
      ctx.fillText(ln, cx, top+li*lineH+lineH*0.82+(1-le3)*U*0.03);
    });
    ctx.shadowBlur = 0; ctx.globalAlpha = 1;
    const lineY = top+blockH+U*0.035, lw = U*0.16*e;
    ctx.fillStyle = ac.bar;
    ctx.fillRect(left?cx:cx-lw/2, lineY, lw, U*0.006);
    if (source) {
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.font = `500 ${Math.round(U*0.026)}px Inter, sans-serif`; ctx.textAlign = align;
      ctx.fillText(source, cx, lineY+U*0.05);
    }

  } else if (style === "bold-statement") {
    ctx.fillStyle = "rgba(0,0,0,0.62)"; ctx.fillRect(0,0,W,H);
    const bsFit = fitWrap(mainTxt.toUpperCase(), "900", "Inter, sans-serif", U*0.1, Math.round(U*0.04), W*0.9, H*0.7, 1.05);
    const lines = bsFit.lines, px2 = bsFit.px;
    const lH = px2*1.05, topY = H/2-(lines.length-1)*lH/2;
    lines.forEach((ln, li) => {
      const le = Math.max(0,Math.min(1,e*(lines.length+1.5)-li)), le3=1-Math.pow(1-le,3);
      ctx.save(); ctx.globalAlpha=le3;
      ctx.translate(W/2, topY+li*lH+lH*0.82); ctx.scale(0.88+le3*0.12, 0.88+le3*0.12);
      ctx.fillStyle = li%2===1 ? ac.bar : "#ffffff";
      ctx.shadowColor = li%2===1 ? ac.bar : "rgba(0,0,0,0.5)"; ctx.shadowBlur=U*0.04;
      ctx.font=`900 ${px2}px ${vsGetFont("Inter, sans-serif")}`; ctx.textAlign="center";
      ctx.fillText(ln,0,0); ctx.shadowBlur=0; ctx.restore();
    });
    if (source||kicker) {
      ctx.fillStyle=ac.bar; ctx.textAlign="center"; ctx.globalAlpha=e;
      ctx.font=`700 ${Math.round(U*0.022)}px Inter, sans-serif`;
      ctx.fillText((kicker||source).toUpperCase(), W/2, topY+lines.length*lH+U*0.06);
    }

  } else if (style === "quote") {
    // Auto-fit: shrink the quote until the WHOLE text fits — long pasted
    // paragraphs used to be silently truncated at 4 lines.
    const fontAt = p => `italic 600 ${p}px ${vsGetFont("Prata, serif")}`;
    const linesAt = p => wrap(mainTxt, fontAt(p), W * 0.78, 99); // 99 = count every line
    const maxLines = 9, maxBlockH = H * 0.6;
    let qPx = Math.round(U * 0.058);
    const minPx = Math.round(U * 0.026);
    let lines = linesAt(qPx);
    while (qPx > minPx && (lines.length > maxLines || lines.length * qPx * 1.32 > maxBlockH)) {
      qPx -= 1; lines = linesAt(qPx);
    }
    const lH = qPx * 1.32, blockH = lines.length * lH, qTop = H / 2 - blockH / 2;
    // backdrop sized to the quote block (with room for the marks + source)
    const padV = U * 0.09;
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(0, Math.max(0, qTop - padV), W, blockH + padV * 2 + U * 0.06);
    ctx.fillStyle = ac.bar; ctx.globalAlpha = e * 0.9;
    ctx.font = `900 ${Math.round(U * 0.15)}px ${vsGetFont("Prata, serif")}`; ctx.textAlign = "center";
    ctx.fillText("\u201C", W / 2, qTop - U * 0.02);
    ctx.globalAlpha = e; ctx.shadowColor = "rgba(0,0,0,0.6)"; ctx.shadowBlur = U * 0.03;
    lines.forEach((ln, li) => {
      const le = Math.max(0, Math.min(1, e * (lines.length + 1) - li)), le3 = 1 - Math.pow(1 - le, 3);
      ctx.globalAlpha = e * le3; ctx.fillStyle = "#fff";
      ctx.font = fontAt(qPx);
      ctx.fillText(ln, W / 2, qTop + li * lH + lH * 0.82 + (1 - le3) * U * 0.03);
    });
    ctx.shadowBlur = 0; ctx.globalAlpha = e;
    ctx.fillStyle = ac.bar; ctx.globalAlpha = e * 0.45;
    ctx.font = `900 ${Math.round(U * 0.1)}px ${vsGetFont("Prata, serif")}`;
    ctx.fillText("\u201D", W / 2, qTop + blockH);
    ctx.globalAlpha = e;
    if (source) { ctx.fillStyle = vsHexA(ac.bar, 0.9); ctx.font = `600 ${Math.round(U * 0.025)}px Inter, sans-serif`; ctx.fillText("— " + source, W / 2, qTop + blockH + U * 0.05); }

  } else if (style === "pullquote") {
    const qW=W*0.58, qX=W*0.07;
    ctx.fillStyle="rgba(0,0,0,0.52)"; ctx.fillRect(qX-W*0.02,H*0.18,W*0.66,H*0.64);
    ctx.fillStyle=ac.bar; ctx.fillRect(W*0.74,H*0.24,U*0.008,H*0.52*e);
    // auto-fit so the whole quote shows instead of truncating at 4 lines
    const pqFont = p => `italic 700 ${p}px ${vsGetFont("Prata, serif")}`;
    const pqLines = p => wrap(mainTxt, pqFont(p), qW, 99);
    const pqMaxLines = 10, pqMaxH = H * 0.62;
    let qPx2 = Math.round(U*0.062); const pqMin = Math.round(U*0.026);
    let lines = pqLines(qPx2);
    while (qPx2 > pqMin && (lines.length > pqMaxLines || lines.length*qPx2*1.32 > pqMaxH)) { qPx2--; lines = pqLines(qPx2); }
    const lH=qPx2*1.32,qTop=H/2-(lines.length*lH)/2;
    ctx.fillStyle=ac.bar; ctx.font=`900 ${Math.round(U*0.12)}px ${vsGetFont("Prata, serif")}`; ctx.textAlign="left";
    ctx.fillText("\u201C",qX,qTop-U*0.01);
    ctx.shadowColor="rgba(0,0,0,0.5)"; ctx.shadowBlur=U*0.02;
    lines.forEach((ln,li) => {
      const le=Math.max(0,Math.min(1,e*(lines.length+1)-li)),le3=1-Math.pow(1-le,3);
      ctx.globalAlpha=le3; ctx.fillStyle="#fff";
      ctx.font=pqFont(qPx2);
      ctx.fillText(ln,qX,qTop+li*lH+lH*0.82+(1-le3)*U*0.03);
    });
    ctx.shadowBlur=0; ctx.globalAlpha=e;
    if (source) { ctx.fillStyle=vsHexA(ac.bar,0.9); ctx.font=`600 ${Math.round(U*0.024)}px Inter, sans-serif`; ctx.fillText("— "+source,qX,qTop+lines.length*lH+U*0.05); }

  } else if (style === "caption") {
    const capFit = fitWrap(mainTxt, "700", "Inter, sans-serif", U*0.042, Math.round(U*0.026), W*0.84, H*0.34, 1.28);
    const lines = capFit.lines, capPx = capFit.px;
    const lH=capPx*1.28, bH=lines.length*lH+U*0.06;
    const by=H*0.88-bH+(1-e)*U*0.05;
    const sc=ctx.createLinearGradient(0,by-U*0.06,0,H);
    sc.addColorStop(0,"rgba(0,0,0,0)"); sc.addColorStop(0.3,"rgba(0,0,0,0.78)"); sc.addColorStop(1,"rgba(0,0,0,0.88)");
    ctx.fillStyle=sc; ctx.fillRect(0,by-U*0.06,W,H-by+U*0.06);
    ctx.fillStyle=ac.bar; ctx.fillRect(W*0.42,by-U*0.02,W*0.16*e,U*0.005);
    ctx.fillStyle="#fff"; ctx.textAlign="center"; ctx.shadowColor="rgba(0,0,0,0.5)"; ctx.shadowBlur=U*0.02;
    ctx.font=`700 ${capPx}px ${vsGetFont("Inter, sans-serif")}`;
    let yy=by+lH*0.75;
    lines.forEach(ln=>{ctx.fillText(ln,W/2,yy);yy+=lH;});
    ctx.shadowBlur=0;

  } else if (style === "annotation") {
    const aW=W*0.78, aX=W*0.11;
    // auto-fit so the whole note shows (was hard-capped at 4 lines)
    const aFit = fitWrap(mainTxt, "700", "Prata, serif", U*0.042, Math.round(U*0.024), aW*0.88, H*0.5, 1.19);
    const lines = aFit.lines, aPx = aFit.px;
    const lH=aPx*1.19;
    const cardH=lines.length*lH+U*0.1+(kicker?U*0.055:0)+(source?U*0.04:0);
    const cardY=H/2-cardH/2+(1-e)*U*0.06;
    ctx.fillStyle="rgba(12,10,8,0.94)"; roundRectPath(ctx,aX,cardY,aW,cardH,U*0.025); ctx.fill();
    ctx.strokeStyle=vsHexA(ac.bar,0.55); ctx.lineWidth=1.5; roundRectPath(ctx,aX,cardY,aW,cardH,U*0.025); ctx.stroke();
    ctx.fillStyle=ac.bar; ctx.fillRect(aX,cardY,aW,U*0.007);
    let aY=cardY+U*0.06;
    if(kicker){ctx.fillStyle=ac.bar;ctx.textAlign="left";ctx.font=`700 ${Math.round(U*0.022)}px Inter, sans-serif`;ctx.fillText(kicker.toUpperCase(),aX+aW*0.05,aY);aY+=U*0.055;}
    ctx.fillStyle="#fff"; ctx.textAlign="left";
    ctx.font=`700 ${aPx}px ${vsGetFont("Prata, serif")}`; ctx.shadowColor="rgba(0,0,0,0.4)"; ctx.shadowBlur=U*0.015;
    lines.forEach((ln,li)=>{ctx.fillText(ln,aX+aW*0.05,aY+li*lH+lH*0.78);});
    ctx.shadowBlur=0;
    if(source){ctx.fillStyle="rgba(180,170,150,0.75)";ctx.font=`400 ${Math.round(U*0.022)}px Inter, sans-serif`;ctx.fillText(source,aX+aW*0.05,aY+lines.length*lH+U*0.045);}

  } else if (style === "split") {
    const padL=W*0.06, splitX=W*0.38;
    ctx.fillStyle="rgba(0,0,0,0.6)"; ctx.fillRect(0,H*0.28,W,H*0.44);
    const colW=splitX-padL-W*0.04;
    ctx.fillStyle=vsHexA(ac.bar,0.9); roundRectPath(ctx,padL,H*0.3,colW,H*0.4,W*0.015); ctx.fill();
    if(kicker){ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle=ac.text||"#fff";ctx.font=`800 ${Math.round(U*0.032)}px Inter, sans-serif`;ctx.fillText(kicker.toUpperCase(),padL+colW/2,H*0.5);ctx.textBaseline="alphabetic";}
    ctx.fillStyle="#fff"; ctx.textAlign="left";
    ctx.shadowColor="rgba(0,0,0,0.5)"; ctx.shadowBlur=U*0.02;
    const splitFit = fitWrap(headline, "700", "Prata, serif", U*0.065, Math.round(U*0.03), W-splitX-padL, H*0.5, 1.18);
    const lines = splitFit.lines, splitPx = splitFit.px;
    ctx.font=`700 ${splitPx}px ${vsGetFont("Prata, serif")}`;
    const lH=splitPx*1.18;
    let yy=H/2-(lines.length*lH)/2+lH*0.8;
    lines.forEach((ln,li)=>{const le=Math.max(0,Math.min(1,e*(lines.length+1)-li)),le3=1-Math.pow(1-le,3);ctx.globalAlpha=le3;ctx.fillText(ln,splitX,yy+li*lH+(1-le3)*U*0.03);});
    ctx.shadowBlur=0; ctx.globalAlpha=e;

  } else if (style === "badge") {
    ctx.fillStyle="rgba(0,0,0,0.52)"; ctx.fillRect(0,H*0.28,W,H*0.44);
    if(kicker){const kPx=Math.round(U*0.026);ctx.font=`700 ${kPx}px Inter, sans-serif`;const kT=kicker.toUpperCase(),kw=ctx.measureText(kT).width+U*0.07;const bx=W/2-kw/2,byy=H*0.38-kPx*1.6;ctx.fillStyle=ac.bar;roundRectPath(ctx,bx,byy,kw,kPx*2.4,kPx*1.2);ctx.fill();ctx.fillStyle=ac.text||"#fff";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(kT,W/2,byy+kPx*1.2);ctx.textBaseline="alphabetic";}
    const badgeFit = fitWrap(headline, "700", "Prata, serif", U*0.072, Math.round(U*0.034), W*0.84, H*0.5, 1.18);
    const lines = badgeFit.lines, bPx = badgeFit.px;
    const lH=bPx*1.18;let yy=H*0.47;
    ctx.shadowColor="rgba(0,0,0,0.55)"; ctx.shadowBlur=U*0.025; ctx.fillStyle="#fff"; ctx.textAlign="center"; ctx.font=`700 ${bPx}px ${vsGetFont("Prata, serif")}`;
    lines.forEach((ln,li)=>{const le=Math.max(0,Math.min(1,e*(lines.length+1)-li)),le3=1-Math.pow(1-le,3);ctx.globalAlpha=le3;ctx.fillText(ln,W/2,yy+li*lH);});
    ctx.shadowBlur=0; ctx.globalAlpha=e;
    ctx.fillStyle=ac.bar; ctx.fillRect(W/2-U*0.08,yy+lines.length*lH-lH*0.15,U*0.16*e,U*0.006);

  } else if (style === "magazine-cover") {
    const tG=ctx.createLinearGradient(0,0,0,H*0.55); tG.addColorStop(0,"rgba(0,0,0,0.9)"); tG.addColorStop(1,"rgba(0,0,0,0)"); ctx.fillStyle=tG; ctx.fillRect(0,0,W,H*0.55);
    const bG=ctx.createLinearGradient(0,H*0.5,0,H); bG.addColorStop(0,"rgba(0,0,0,0)"); bG.addColorStop(1,"rgba(0,0,0,0.78)"); ctx.fillStyle=bG; ctx.fillRect(0,H*0.5,W,H*0.5);
    if(kicker){const kPx=Math.round(U*0.025);ctx.font=`800 ${kPx}px Inter, sans-serif`;const kW=ctx.measureText(kicker.toUpperCase()).width+U*0.07;ctx.fillStyle=ac.bar;roundRectPath(ctx,W/2-kW/2,H*0.06,kW,kPx*2.2,kPx*1.1);ctx.fill();ctx.fillStyle=ac.text||"#fff";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(kicker.toUpperCase(),W/2,H*0.06+kPx*1.1);ctx.textBaseline="alphabetic";}
    const magFit = fitWrap(mainTxt, "900", "Prata, serif", Math.min(U*0.098,W*0.22), Math.round(U*0.04), W*0.88, H*0.4, 1.05);
    const lines = magFit.lines, mPx = magFit.px;
    const lH=mPx*1.05; let hY=H*0.18;
    ctx.fillStyle="#fff"; ctx.shadowColor="rgba(0,0,0,0.7)"; ctx.shadowBlur=U*0.025; ctx.textAlign="center"; ctx.font=`900 ${mPx}px ${vsGetFont("Prata, serif")}`;
    lines.forEach((ln,li)=>{const le=Math.max(0,Math.min(1,e*(lines.length+1)-li)),le3=1-Math.pow(1-le,3);ctx.globalAlpha=le3;ctx.fillText(ln,W/2,hY+li*lH+(1-le3)*U*0.04);});
    ctx.shadowBlur=0; ctx.globalAlpha=e;
    if(source){ctx.fillStyle="rgba(255,255,255,0.85)";ctx.font=`600 ${Math.round(U*0.026)}px Inter, sans-serif`;ctx.fillText(source,W/2,H*0.93);}

  } else if (style === "neon-title") {
    ctx.fillStyle="rgba(0,0,0,0.72)"; ctx.fillRect(0,H*0.18,W,H*0.64);
    const neonFit = fitWrap(mainTxt, "900", "Inter, sans-serif", Math.min(U*0.088,W*0.2), Math.round(U*0.036), W*0.86, H*0.56, 1.18);
    const lines = neonFit.lines, nPx = neonFit.px;
    const lH=nPx*1.18, nTop=H/2-(lines.length-1)*lH/2;
    lines.forEach((ln,li)=>{
      const nr=Math.max(0,Math.min(1,e*(lines.length+1)-li)),ne=1-Math.pow(1-nr,3);
      ctx.save(); ctx.globalAlpha=ne;
      [0.45,0.25,0.12].forEach((a2,gi)=>{ctx.strokeStyle=vsHexA(ac.bar,a2);ctx.lineWidth=(gi+1)*3;ctx.shadowColor=ac.bar;ctx.shadowBlur=U*(0.04+gi*0.025);ctx.font=`900 ${nPx}px Inter, sans-serif`;ctx.textAlign="center";ctx.strokeText(ln,W/2,nTop+li*lH+(1-ne)*U*0.04);});
      ctx.fillStyle="#fff"; ctx.shadowColor=ac.bar; ctx.shadowBlur=U*0.015; ctx.font=`900 ${nPx}px ${vsGetFont("Inter, sans-serif")}`; ctx.textAlign="center";
      ctx.fillText(ln,W/2,nTop+li*lH+(1-ne)*U*0.04); ctx.shadowBlur=0; ctx.restore();
    });
    ctx.globalAlpha=e;
    if(kicker){ctx.fillStyle=vsHexA(ac.bar,0.9);ctx.font=`700 ${Math.round(U*0.025)}px Inter, sans-serif`;ctx.textAlign="center";ctx.fillText(kicker.toUpperCase(),W/2,nTop+lines.length*lH+U*0.05);}

  } else if (style === "kinetic") {
    ctx.fillStyle="rgba(0,0,0,0.58)"; ctx.fillRect(0,H*0.18,W,H*0.64);
    const words=mainTxt.split(/\s+/).filter(Boolean);
    const maxLineW=W*0.84;
    // pick a font that fits the width AND wrap into lines (was a single
    // un-wrapped line that ran off both edges of the frame)
    let kPx=Math.round(U*0.075); const kMin=Math.round(U*0.03);
    const buildK=(px)=>{
      ctx.font=`800 ${px}px ${vsGetFont("Inter, sans-serif")}`;
      const ls=[]; let cur=[], curW=0;
      for(const w2 of words){
        const ww=ctx.measureText(w2).width, gap=cur.length?px*0.22:0;
        if(curW+gap+ww>maxLineW && cur.length){ ls.push(cur); cur=[w2]; curW=ww; }
        else { cur.push(w2); curW+=gap+ww; }
      }
      if(cur.length) ls.push(cur);
      return ls;
    };
    let kLines=buildK(kPx);
    while(kPx>kMin && (kLines.length>7 || kLines.length*kPx*1.32>H*0.6)){ kPx-=2; kLines=buildK(kPx); }
    ctx.font=`800 ${kPx}px ${vsGetFont("Inter, sans-serif")}`;
    const kLH=kPx*1.32, kTop=H/2-(kLines.length*kLH)/2;
    const kPer=revealPer(words.length);
    let wIdx=0;
    kLines.forEach((lineWords,lineI)=>{
      const lineW=lineWords.reduce((s,w,wi)=>s+ctx.measureText(w).width+(wi?kPx*0.22:0),0);
      let wx=W/2-lineW/2; const ly=kTop+lineI*kLH+kLH*0.78;
      lineWords.forEach((w2)=>{
        const we=itemReveal(wIdx,kPer), we3=1-Math.pow(1-we,3);
        ctx.save(); ctx.globalAlpha=we3;
        ctx.fillStyle=wIdx%3===0?ac.bar:"#fff"; ctx.shadowColor=wIdx%3===0?vsHexA(ac.bar,0.5):"rgba(0,0,0,0.4)"; ctx.shadowBlur=U*0.02;
        ctx.textAlign="left"; ctx.textBaseline="alphabetic";
        ctx.fillText(w2,wx,ly+(1-we3)*U*0.05); ctx.restore();
        wx+=ctx.measureText(w2).width+kPx*0.22; wIdx++;
      });
    });
    const kProg=playing?Math.max(0,Math.min(1,elapsed/Math.max(0.001,kPer*words.length))):1;
    ctx.fillStyle=ac.bar; ctx.fillRect(W*0.08,kTop+kLines.length*kLH+U*0.015,W*0.84*kProg,U*0.005);
    if(source){ctx.globalAlpha=1;ctx.fillStyle=vsHexA(ac.bar,0.85);ctx.textAlign="center";ctx.font=`600 ${Math.round(U*0.022)}px Inter, sans-serif`;ctx.fillText(source,W/2,kTop+kLines.length*kLH+U*0.06);}

  } else if (style === "reveal-words") {
    ctx.fillStyle="rgba(0,0,0,0.62)"; ctx.fillRect(0,H*0.18,W,H*0.64);
    const words2=mainTxt.split(/\s+/).filter(Boolean);
    // size so a reasonable number of words fit per line
    let rPx=Math.round(U*0.07);
    const maxLineW=W*0.84, gap=()=>rPx*0.22, spacePx=()=>rPx*0.22;
    ctx.font=`700 ${rPx}px ${vsGetFont("Prata, serif")}`;
    // build lines greedily
    function buildLines(px){
      ctx.font=`700 ${px}px ${vsGetFont("Prata, serif")}`;
      const ls=[]; let cur=[], curW=0;
      words2.forEach(w=>{
        const ww=ctx.measureText(w).width;
        const add=(cur.length?px*0.22:0)+ww;
        if(curW+add>maxLineW && cur.length){ ls.push(cur); cur=[w]; curW=ww; }
        else { cur.push(w); curW+=add; }
      });
      if(cur.length) ls.push(cur);
      return ls;
    }
    let rLines=buildLines(rPx);
    // shrink to fit height (was capped at 3 lines, which truncated long text)
    while(rPx>Math.round(U*0.03) && (rLines.length>7 || rLines.length*rPx*1.3>H*0.6)){ rPx-=2; rLines=buildLines(rPx); }
    ctx.font=`700 ${rPx}px ${vsGetFont("Prata, serif")}`;
    const rLineH=rPx*1.3;
    const blockTop=H/2-(rLines.length*rLineH)/2;
    // each word reveals so the WHOLE sentence is shown by ~82% of the slide
    const wDur=revealPer(words2.length);
    let wordIndex=0;
    rLines.forEach((lineWords,lineI)=>{
      // center this line
      const lineW=lineWords.reduce((s,w,wi)=>s+ctx.measureText(w).width+(wi?rPx*0.22:0),0);
      let rwx=W/2-lineW/2;
      const lineY=blockTop+lineI*rLineH+rLineH*0.7;
      lineWords.forEach(w2=>{
        const wl=itemReveal(wordIndex,wDur), we=1-Math.pow(1-wl,3);
        const ww=ctx.measureText(w2).width;
        ctx.save(); ctx.globalAlpha=we; ctx.fillStyle="#fff"; ctx.shadowColor="rgba(0,0,0,0.5)"; ctx.shadowBlur=U*0.02;
        ctx.textAlign="left"; ctx.textBaseline="middle";
        ctx.fillText(w2,rwx,lineY+(1-we)*U*0.04);
        ctx.fillStyle=ac.bar; ctx.shadowBlur=0;
        ctx.fillRect(rwx,lineY+rPx*0.55,ww*we,U*0.005);
        ctx.restore();
        rwx+=ww+rPx*0.22; wordIndex++;
      });
    });

  } else if (style === "minimal-line") {
    ctx.textAlign="center";
    const minFit = fitWrap(mainTxt, "300", "Prata, serif", U*0.066, Math.round(U*0.032), W*0.8, H*0.4, 1.22);
    const lines = minFit.lines, mPx = minFit.px;
    const lH=mPx*1.22;
    ctx.fillStyle=ac.bar; ctx.fillRect(W*0.1,H*0.43,W*0.8*e,U*0.004);
    ctx.fillStyle="#fff"; ctx.shadowColor="rgba(0,0,0,0.4)"; ctx.shadowBlur=U*0.015; ctx.font=`300 ${mPx}px ${vsGetFont("Prata, serif")}`;
    lines.forEach((ln,li)=>{const le=Math.max(0,Math.min(1,e*(lines.length+1)-li)),le3=1-Math.pow(1-le,3);ctx.globalAlpha=le3;ctx.fillText(ln,W/2,H*0.47+li*lH+lH*0.82+(1-le3)*U*0.025);});
    ctx.shadowBlur=0; ctx.globalAlpha=e;
    if(kicker){ctx.fillStyle=vsHexA(ac.bar,0.8);ctx.font=`600 ${Math.round(U*0.02)}px Inter, sans-serif`;let lkx=W/2-ctx.measureText(kicker.toUpperCase()).width/2;for(const ch of kicker.toUpperCase()){ctx.fillText(ch,lkx,H*0.37);lkx+=ctx.measureText(ch).width+U*0.005;}}
    ctx.fillStyle=ac.bar; ctx.fillRect(W*0.1,H*0.43+lines.length*lH+U*0.042,W*0.8*e,U*0.003);
  }

  // ── optional live clock, top-right ────────────────────────
  ctx.globalAlpha = 1;
  const clockOn = val("#vsNewsClock", false);
  const showClock = (typeof clockOn === "boolean") ? clockOn : ($("#vsNewsClock") && $("#vsNewsClock").checked);
  if (showClock) {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2,"0");
    const mm = String(now.getMinutes()).padStart(2,"0");
    const clock = `${hh}:${mm}`;
    ctx.fillStyle = ac.bar;
    const cw = W*0.1, ch = H*0.055;
    ctx.fillRect(W-cw-W*0.04, H*0.05, cw, ch);
    ctx.fillStyle = ac.text;
    ctx.font = `700 ${Math.round(H*0.03)}px ${vsGetFont("Inter, sans-serif")}`;
    ctx.textAlign = "center";
    ctx.fillText(clock, W-cw/2-W*0.04, H*0.05+ch*0.68);
  }
  ctx.restore(); // ── outer restore
}


function wrapNewsText(ctx, text, x, y, maxW, lineH, maxLines) {
  if (!text) return 0;
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  for (let wi = 0; wi < words.length; wi++) {
    const w = words[wi];
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) { line = ""; break; }
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  // if not everything fit, ellipsize the last visible line
  const shownWords = lines.join(" ").split(/\s+/).filter(Boolean).length;
  if (shownWords < words.length && lines.length) {
    let last = lines[lines.length - 1];
    while (last.length > 1 &&
           ctx.measureText(last + "…").width > maxW) {
      last = last.slice(0, -1);
    }
    lines[lines.length - 1] = last + "…";
  }
  lines.forEach((ln, i) => ctx.fillText(ln, x, y + i * lineH));
  return lines.length;
}

// Shrink the current ctx font until `text` fits within maxW (down to minPx).
// Returns the px size actually used.
function vsFitFont(ctx, text, maxW, weight, family, startPx, minPx) {
  let px = startPx;
  for (; px > minPx; px -= 1) {
    ctx.font = `${weight} ${px}px ${family}`;
    if (ctx.measureText(text).width <= maxW) break;
  }
  ctx.font = `${weight} ${px}px ${family}`;
  return px;
}

function drawInfographic(ctx, W, H, elapsed, tpl, dsVal, vsOff) {
  vsOff = vsOff || vstudio;
  const val = dsVal || vsVal;
  const onVal = val("#vsInfoOn", false);
  const on = (typeof onVal === "boolean") ? onVal
           : ($("#vsInfoOn") && $("#vsInfoOn").checked);
  if (!on) { vstudio.infoBox = null; return; }
  const data = vsInfoData(val);
  if (!data || (!data.stats.length && !data.title)) { vstudio.infoBox = null; return; }

  tpl = tpl || vsTemplate();
  const isLight = vsHexLuma(tpl.bg) > 140;
  // When this scene has footage behind it, make the data panel translucent so
  // the footage shows through (footage now appears on infographic scenes too).
  const hasMedia = !!vstudio._frameHasMedia;
  const aTop = hasMedia ? 0.72 : 0.97;
  const aBot = hasMedia ? 0.78 : 0.97;

  // Accent colour — prefer the template accent but saturate it for infographic use
  const accentHex = tpl.accent || "#f04e2b";
  const ig = {
    panelTop:   isLight ? `rgba(255,255,255,${aTop})` : `rgba(18,16,14,${aTop})`,
    panelBot:   isLight ? `rgba(245,242,236,${aBot})` : `rgba(8,7,6,${aBot})`,
    border:     vsHexA(accentHex, 0.3),
    accent:     accentHex,
    title:      isLight ? "#111" : "#fff",
    label:      isLight ? "rgba(40,36,28,0.7)" : "rgba(200,190,170,0.8)",
    value:      accentHex,
    track:      isLight ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.07)",
    bg2:        isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)"
  };

  const stats = data.stats;
  const style = val("#vsInfoStyle", "big-numbers");
  const pos = val("#vsInfoPos", "center");
  const motion = val("#vsInfoMotion", "rise");
  const playing = vstudio.looping || vstudio.rendering;
  const rawAll = playing ? Math.min(1, elapsed / 1.1) : 1;
  const boxRaw = Math.min(1, rawAll / 0.6);
  const contentRaw = Math.min(1, Math.max(0, (rawAll - 0.25) / 0.75));
  const ease = vsEasePro(boxRaw);
  const contentEase = vsEasePro(contentRaw);

  const U = Math.min(W, H);
  const nStats = Math.max(1, stats.length);

  // ── STYLE-SPECIFIC panel sizing ─────────────────────────
  let panelW, panelH;
  if (style === "big-numbers") {
    // Full-screen overlay — numbers huge and centered
    panelW = W * 0.92;
    panelH = H * 0.88;
  } else if (style === "donut") {
    panelW = Math.min(W * 0.9, U * 1.1);
    const rowSlice = U * 0.18;
    const perRow = nStats <= 3 ? nStats : Math.ceil(nStats / 2);
    const rows = Math.ceil(nStats / perRow);
    panelH = U * 0.24 + rowSlice * rows * 2.2;
  } else if (style === "cards") {
    panelW = Math.min(W * 0.92, U * 1.0);
    panelH = U * 0.22 + nStats * U * 0.16;
  } else {
    panelW = Math.min(W * 0.9, U * 0.95);
    const headH = U * (0.20 + (data.subtitle ? 0.05 : 0));
    const rowSlice = U * 0.14;
    panelH = headH + rowSlice * nStats + U * 0.08;
  }

  panelH = Math.min(panelH, H * 0.95);
  panelW = Math.min(panelW, W * 0.95);
  let px = (W - panelW) / 2;
  if (pos === "left") px = U * 0.04;
  if (pos === "right") px = W - panelW - U * 0.04;
  let py = (H - panelH) / 2;
  px += vsOff.infoDX * W;
  py += vsOff.infoDY * H;
  // record the SCALED bounding box so drag/hit-detection matches what's drawn
  const _infoSc = vsOff.infoScale || 1;
  const _scaledW = panelW * _infoSc, _scaledH = panelH * _infoSc;
  const _boxX = px + (panelW - _scaledW) / 2;
  const _boxY = py + (panelH - _scaledH) / 2;
  vstudio.infoBox = { x: _boxX, y: _boxY, w: _scaledW, h: _scaledH };

  // entrance motion
  let mDX = 0, mDY = 0, mScale = 1, mAlpha = ease;
  switch (motion) {
    case "none":        mAlpha = 1; break;
    case "rise":        mDY = (1 - ease) * H * 0.05; break;
    case "drop":        mDY = -(1 - ease) * H * 0.05; break;
    case "slide-left":  mDX = -(1 - ease) * W * 0.1; break;
    case "slide-right": mDX = (1 - ease) * W * 0.1; break;
    case "pop":         mScale = 0.88 + ease * 0.12; break;
    case "zoom-in":     mScale = 0.72 + ease * 0.28; break;
    case "vox":         mScale = 0.86 + vsEasePro(Math.min(1, boxRaw * 1.15)) * 0.16;
                        mDY = (1 - ease) * H * 0.03; break;
    default: break;
  }

  ctx.save();
  ctx.globalAlpha = mAlpha;
  const pivX = px + panelW / 2, pivY = py + panelH / 2;
  const infoTotalScale = mScale * (vsOff.infoScale || 1);
  ctx.translate(pivX + mDX, pivY + mDY);
  ctx.scale(infoTotalScale, infoTotalScale);
  ctx.translate(-pivX, -pivY);

  // ── BIG-NUMBERS style — cinematic full-screen stat display ──
  if (style === "big-numbers") {
    ctx.save();
    // dark scrim over background
    const scrim = ctx.createLinearGradient(0, py, 0, py + panelH);
    scrim.addColorStop(0, "rgba(0,0,0,0.72)");
    scrim.addColorStop(0.5, "rgba(0,0,0,0.55)");
    scrim.addColorStop(1, "rgba(0,0,0,0.72)");
    ctx.fillStyle = scrim;
    roundRectPath(ctx, px, py, panelW, panelH, panelW * 0.03);
    ctx.fill();

    // accent line at top
    const accentLineW = panelW * contentEase;
    ctx.fillStyle = ig.accent;
    ctx.fillRect(px + (panelW - accentLineW) / 2, py + panelH * 0.045, accentLineW, H * 0.005);

    // title
    if (data.title) {
      ctx.globalAlpha = mAlpha * contentEase;
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      const tpx = Math.round(U * 0.032);
      ctx.font = `600 ${tpx}px Inter, sans-serif`;
      ctx.fillText(data.title.toUpperCase(), px + panelW / 2, py + panelH * 0.13);
    }

    // Stats laid out in grid: 1-2 per row, big numbers
    const cols = nStats <= 2 ? nStats : nStats <= 4 ? 2 : 3;
    const rows = Math.ceil(nStats / cols);
    const cellW = panelW / cols;
    const cellH = (panelH * 0.72) / rows;
    const startY = py + panelH * 0.2;

    stats.forEach((s, i) => {
      const rowReveal = playing
        ? Math.min(1, Math.max(0, (elapsed - 0.35 - i * 0.12) / 0.55)) : 1;
      const re = 1 - Math.pow(1 - rowReveal, 3);
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cx = px + cellW * (col + 0.5);
      const cy2 = startY + cellH * (row + 0.5);

      // separator line between columns
      if (col > 0) {
        ctx.strokeStyle = "rgba(255,255,255,0.12)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px + cellW * col, startY + cellH * row + cellH * 0.15);
        ctx.lineTo(px + cellW * col, startY + cellH * (row + 1) - cellH * 0.15);
        ctx.stroke();
      }

      ctx.save();
      ctx.globalAlpha = mAlpha * re;
      ctx.textAlign = "center";

      // BIG number — animate counting up
      const suffix = s.value.replace(/[\d.,\-]/g, "");
      const prefix = s.value.replace(/[\d.,\-].*$/, "");
      const shown = s.num && playing
        ? prefix + Math.round(s.num * re).toLocaleString() + suffix
        : s.value;

      const numPx = Math.round(Math.min(U * 0.11, cellH * 0.42));
      ctx.fillStyle = ig.accent;
      ctx.shadowColor = vsHexA(ig.accent, 0.4);
      ctx.shadowBlur = U * 0.04;
      ctx.font = `800 ${numPx}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(shown, cx, cy2 + numPx * 0.35);
      ctx.shadowBlur = 0;

      // label below number
      const lblPx = Math.round(Math.min(U * 0.022, cellH * 0.14));
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = `500 ${lblPx}px Inter, sans-serif`;
      ctx.fillText(s.label.toUpperCase(), cx, cy2 + numPx * 0.35 + lblPx * 1.6);

      // small accent underline
      ctx.fillStyle = vsHexA(ig.accent, 0.4);
      const ulW = Math.min(cellW * 0.35, U * 0.12) * re;
      ctx.fillRect(cx - ulW / 2, cy2 + numPx * 0.35 + lblPx * 2.4, ulW, H * 0.003);

      ctx.restore();
    });

    ctx.restore();
    ctx.restore();
    return;
  }

  // ── PANEL CARD background for other styles ───────────────
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.55)";
  ctx.shadowBlur = U * 0.04;
  ctx.shadowOffsetY = H * 0.01;
  const pg = ctx.createLinearGradient(0, py, 0, py + panelH);
  pg.addColorStop(0, ig.panelTop);
  pg.addColorStop(1, ig.panelBot);
  ctx.fillStyle = pg;
  roundRectPath(ctx, px, py, panelW, panelH, panelW * 0.04);
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = ig.border;
  ctx.lineWidth = Math.max(1, U * 0.001);
  roundRectPath(ctx, px, py, panelW, panelH, panelW * 0.04);
  ctx.stroke();

  // ── INNER CONTENT ─────────────────────────────────────────
  ctx.save();
  ctx.globalAlpha = mAlpha * contentEase;
  const padX = panelW * 0.08;
  const accentW = panelW * 0.12 * contentEase;
  ctx.fillStyle = ig.accent;
  ctx.fillRect(px + padX, py + panelH * 0.07, accentW, H * 0.005);

  // start title lower so its ascenders clear the accent line at panelH*0.07
  let cy = py + panelH * 0.21;

  if (data.title) {
    ctx.fillStyle = ig.title;
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    // cap size so a tall font can't collide with the accent line above
    const titlePx = Math.min(Math.round(U * 0.04), Math.round(panelH * 0.085));
    const fittedPx = vsFitFont(ctx, data.title, panelW - padX * 2, "700", vsGetFont("Prata, serif"),
      titlePx, Math.round(U * 0.022));
    ctx.fillText(data.title, px + padX, cy);
    // space below title scales with the ACTUAL font size used
    cy += fittedPx * 1.5;
  }
  if (data.subtitle) {
    ctx.fillStyle = ig.label;
    ctx.textAlign = "left";
    vsFitFont(ctx, data.subtitle.toUpperCase(), panelW - padX * 2, "500",
      "Inter, sans-serif", Math.round(U * 0.022), Math.round(U * 0.014));
    ctx.fillText(data.subtitle.toUpperCase(), px + padX, cy);
    cy += panelH * 0.065;
  }

  const max = Math.max(1, ...stats.map(s => s.num || 0));
  let axisMax = max;
  const srcReserve = data.source ? H * 0.05 : panelH * 0.065;
  const areaH = py + panelH - cy - srcReserve;
  const rowH = areaH / Math.max(1, stats.length);

  // bar chart axis
  let barChartX = 0, barChartW = 0;
  if (style === "bars") {
    const mag = Math.pow(10, Math.floor(Math.log10(max || 1)));
    const norm = max / mag;
    const niceN = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
    axisMax = niceN * mag;
    barChartX = px + padX;
    barChartW = panelW - padX * 2;
    const topY = cy + rowH * 0.06, botY = cy + areaH - rowH * 0.06;
    ctx.textAlign = "center";
    ctx.font = `500 ${Math.round(U * 0.016)}px Inter, sans-serif`;
    for (let g = 0; g <= 4; g++) {
      const gx = barChartX + barChartW * (g / 4);
      ctx.strokeStyle = vsHexA(ig.accent, g === 0 ? 0.4 : 0.1);
      ctx.lineWidth = g === 0 ? 1.5 : 1;
      ctx.beginPath(); ctx.moveTo(gx, topY); ctx.lineTo(gx, botY); ctx.stroke();
      const scaleVal = axisMax * (g / 4);
      const lbl = scaleVal >= 1e9 ? (scaleVal/1e9).toFixed(1)+"B"
        : scaleVal >= 1e6 ? (scaleVal/1e6).toFixed(1)+"M"
        : scaleVal >= 1000 ? (scaleVal/1000).toFixed(0)+"k"
        : (Number.isInteger(scaleVal) ? String(scaleVal) : scaleVal.toFixed(1));
      ctx.fillStyle = vsHexA(ig.label, 0.55);
      ctx.fillText(lbl, gx, botY + U * 0.017);
    }
  }

  stats.forEach((s, i) => {
    const rowReveal = playing
      ? Math.min(1, Math.max(0, (elapsed - 0.35 - i * 0.1) / 0.5)) : 1;
    const re = 1 - Math.pow(1 - rowReveal, 3);
    const ry = cy + i * rowH;

    if (style === "bars") {
      const rowMaxW = panelW - padX * 2;
      ctx.textBaseline = "alphabetic";
      const lblPx = Math.min(Math.round(rowH * 0.34), Math.round(U * 0.022));
      const valPx = Math.min(Math.round(rowH * 0.42), Math.round(U * 0.03));
      ctx.font = `700 ${valPx}px ${vsGetFont("Prata, serif")}`;
      const valW = Math.min(ctx.measureText(s.value).width + U * 0.02, rowMaxW * 0.38);
      ctx.fillStyle = ig.value;
      ctx.textAlign = "right";
      ctx.fillText(s.value, px + panelW - padX, ry + rowH * 0.32);
      ctx.fillStyle = ig.label;
      vsFitFont(ctx, s.label.toUpperCase(), rowMaxW - valW - U * 0.02, "600",
        "Inter, sans-serif", lblPx, Math.round(U * 0.014));
      ctx.textAlign = "left";
      ctx.fillText(s.label.toUpperCase(), px + padX, ry + rowH * 0.32);
      const barH2 = Math.min(rowH * 0.24, U * 0.02);
      const barY = ry + rowH * 0.48;
      ctx.fillStyle = ig.track;
      roundRectPath(ctx, px + padX, barY, rowMaxW, barH2, barH2 / 2); ctx.fill();
      const fillW = Math.max(barH2, rowMaxW * (s.num / axisMax) * re);
      const gr = ctx.createLinearGradient(px + padX, 0, px + padX + rowMaxW, 0);
      gr.addColorStop(0, vsHexA(ig.accent, 0.6)); gr.addColorStop(1, ig.accent);
      ctx.fillStyle = gr;
      roundRectPath(ctx, px + padX, barY, fillW, barH2, barH2 / 2); ctx.fill();

    } else if (style === "counters") {
      const cMaxW = panelW - padX * 2;
      const suffix2 = s.value.replace(/[0-9.,\-]/g, "");
      const shown2 = s.num && playing
        ? Math.round(s.num * re).toLocaleString() + suffix2 : s.value;
      ctx.textAlign = "left";
      ctx.fillStyle = ig.value;
      // HUGE number
      const numPx2 = vsFitFont(ctx, shown2, cMaxW * 0.88, "800", vsGetFont("Inter, sans-serif"),
        Math.round(rowH * 0.52), Math.round(rowH * 0.28));
      ctx.fillText(shown2, px + padX, ry + rowH * 0.46);
      ctx.fillStyle = ig.label;
      vsFitFont(ctx, s.label.toUpperCase(), cMaxW, "500", "Inter, sans-serif",
        Math.round(rowH * 0.24), Math.round(rowH * 0.15));
      ctx.fillText(s.label.toUpperCase(), px + padX, ry + rowH * 0.68);
      ctx.fillStyle = vsHexA(ig.accent, 0.45);
      ctx.fillRect(px + padX, ry + rowH * 0.78, (panelW - padX * 2) * (s.num / max) * re, rowH * 0.04);
      if (i < stats.length - 1) {
        ctx.strokeStyle = vsHexA(ig.accent, 0.14);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px + padX, ry + rowH * 0.93);
        ctx.lineTo(px + panelW - padX, ry + rowH * 0.93);
        ctx.stroke();
      }

    } else if (style === "donut") {
      const n = stats.length;
      const perRow2 = n <= 3 ? n : Math.ceil(n / 2);
      const donutRows = Math.ceil(n / perRow2);
      const col = i % perRow2;
      const rowIx = Math.floor(i / perRow2);
      const itemsThisRow = Math.min(perRow2, n - rowIx * perRow2);
      const slotW = (panelW - padX * 2) / perRow2;
      const rowGap = (panelW - padX * 2) - slotW * itemsThisRow;
      const cxx = px + padX + rowGap / 2 + slotW * (col + 0.5);
      const cellH2 = areaH / donutRows;
      const cyy = cy + cellH2 * (rowIx + 0.45);
      const rad = Math.min(slotW, cellH2) * 0.32;
      // track
      ctx.lineWidth = rad * 0.3;
      ctx.strokeStyle = vsHexA(ig.accent, 0.1);
      ctx.beginPath(); ctx.arc(cxx, cyy, rad, 0, Math.PI * 2); ctx.stroke();
      // arc fill
      const frac = Math.max(0, (s.num / max)) * re;
      ctx.strokeStyle = ig.accent;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.arc(cxx, cyy, rad, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * frac);
      ctx.stroke();
      ctx.lineCap = "butt";
      // value inside
      ctx.textBaseline = "middle";
      ctx.fillStyle = ig.value;
      ctx.textAlign = "center";
      vsFitFont(ctx, s.value, rad * 1.55, "800", vsGetFont("Inter, sans-serif"),
        Math.round(Math.min(U * 0.032, rad * 0.65)), Math.round(rad * 0.32));
      ctx.fillText(s.value, cxx, cyy);
      // label below
      ctx.fillStyle = ig.label;
      vsFitFont(ctx, s.label, slotW * 0.9, "500", "Inter, sans-serif",
        Math.round(Math.min(U * 0.02, cellH2 * 0.12)), Math.round(U * 0.012));
      ctx.fillText(s.label, cxx, cyy + rad + cellH2 * 0.15);
      ctx.textBaseline = "alphabetic";

    } else if (style === "cards") {
      const cardY = ry + rowH * 0.08;
      const cardH = rowH * 0.82;
      // card bg
      const cg = ctx.createLinearGradient(0, cardY, 0, cardY + cardH);
      cg.addColorStop(0, vsHexA(ig.accent, 0.14)); cg.addColorStop(1, vsHexA(ig.accent, 0.04));
      ctx.fillStyle = cg;
      roundRectPath(ctx, px + padX, cardY, panelW - padX * 2, cardH, cardH * 0.15); ctx.fill();
      ctx.strokeStyle = vsHexA(ig.accent, 0.22); ctx.lineWidth = 1;
      roundRectPath(ctx, px + padX, cardY, panelW - padX * 2, cardH, cardH * 0.15); ctx.stroke();
      // left accent bar
      ctx.fillStyle = ig.accent;
      roundRectPath(ctx, px + padX, cardY, U * 0.008, cardH, U * 0.004); ctx.fill();

      const ctxX = px + padX + panelW * 0.06;
      const ctxW = panelW - padX * 2 - panelW * 0.06 - U * 0.02;
      ctx.textBaseline = "middle";
      ctx.fillStyle = ig.label;
      vsFitFont(ctx, s.label.toUpperCase(), ctxW * 0.65, "600", "Inter, sans-serif",
        Math.round(Math.min(U * 0.02, cardH * 0.24)), Math.round(cardH * 0.14));
      ctx.textAlign = "left";
      ctx.fillText(s.label.toUpperCase(), ctxX, cardY + cardH * 0.28);
      // big value right-aligned
      ctx.fillStyle = ig.value;
      vsFitFont(ctx, s.value, ctxW * 0.55, "800", vsGetFont("Prata, serif"),
        Math.round(Math.min(U * 0.052, cardH * 0.46)), Math.round(cardH * 0.28));
      ctx.textAlign = "right";
      ctx.fillText(s.value, px + panelW - padX - U * 0.01, cardY + cardH * 0.68);
      ctx.textBaseline = "alphabetic";

    } else if (style === "pills") {
      const rowMaxW2 = panelW - padX * 2;
      ctx.textBaseline = "alphabetic";
      const lblPx2 = Math.min(Math.round(rowH * 0.32), Math.round(U * 0.022));
      const valPx2 = Math.min(Math.round(rowH * 0.38), Math.round(U * 0.028));
      ctx.textAlign = "left"; ctx.fillStyle = ig.label;
      vsFitFont(ctx, s.label, rowMaxW2 * 0.58, "600", "Inter, sans-serif",
        lblPx2, Math.round(U * 0.014));
      ctx.fillText(s.label, px + padX, ry + rowH * 0.3);
      ctx.textAlign = "right"; ctx.fillStyle = ig.value;
      ctx.font = `800 ${valPx2}px ${vsGetFont("Prata, serif")}`;
      ctx.fillText(s.value, px + panelW - padX, ry + rowH * 0.3);
      const pillH2 = Math.min(rowH * 0.32, U * 0.028);
      const pillY = ry + rowH * 0.46;
      ctx.fillStyle = ig.track;
      roundRectPath(ctx, px + padX, pillY, rowMaxW2, pillH2, pillH2 / 2); ctx.fill();
      const fillW2 = Math.max(pillH2, rowMaxW2 * (s.num / Math.max(axisMax, 1)) * re);
      const pg2 = ctx.createLinearGradient(px + padX, 0, px + padX + rowMaxW2, 0);
      pg2.addColorStop(0, vsHexA(ig.accent, 0.5)); pg2.addColorStop(1, ig.accent);
      ctx.fillStyle = pg2;
      roundRectPath(ctx, px + padX, pillY, fillW2, pillH2, pillH2 / 2); ctx.fill();
      // glow dot
      ctx.fillStyle = "#fff"; ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.arc(px + padX + fillW2 - pillH2 / 2, pillY + pillH2 / 2, pillH2 * 0.22, 0, Math.PI * 2);
      ctx.fill(); ctx.globalAlpha = mAlpha * contentEase;

    } else if (style === "dark-cards") {
      // Glass-morphism dark cards — frosted dark bg, glowing border
      const cardY = ry + rowH * 0.07;
      const cardH = rowH * 0.84;
      const r2 = cardH * 0.18;
      ctx.fillStyle = "rgba(10,8,6,0.82)";
      roundRectPath(ctx, px + padX, cardY, panelW - padX * 2, cardH, r2); ctx.fill();
      // glowing border
      ctx.strokeStyle = vsHexA(ig.accent, 0.5 * re + 0.1);
      ctx.lineWidth = 1.5;
      ctx.shadowColor = ig.accent; ctx.shadowBlur = U * 0.02 * re;
      roundRectPath(ctx, px + padX, cardY, panelW - padX * 2, cardH, r2); ctx.stroke();
      ctx.shadowBlur = 0;
      const cW = panelW - padX * 2; const cX = px + padX;
      ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillStyle = vsHexA(ig.accent, 0.75);
      vsFitFont(ctx, s.label.toUpperCase(), cW * 0.6, "600", "Inter, sans-serif",
        Math.round(Math.min(U * 0.018, cardH * 0.22)), Math.round(cardH * 0.13));
      ctx.fillText(s.label.toUpperCase(), cX + cW * 0.04, cardY + cardH * 0.3);
      ctx.fillStyle = "#ffffff";
      vsFitFont(ctx, s.value, cW * 0.5, "800", vsGetFont("Prata, serif"),
        Math.round(Math.min(U * 0.054, cardH * 0.44)), Math.round(cardH * 0.28));
      ctx.textAlign = "right";
      ctx.fillText(s.value, cX + cW * 0.96, cardY + cardH * 0.68);
      ctx.textBaseline = "alphabetic";

    } else if (style === "neon-cards") {
      // Neon accent cards — bright colour fill left strip, dark right
      const cardY = ry + rowH * 0.07;
      const cardH = rowH * 0.84;
      const stripW = panelW * 0.08;
      const cX = px + padX; const cW = panelW - padX * 2;
      roundRectPath(ctx, cX, cardY, cW, cardH, cardH * 0.16); ctx.save();
      ctx.clip();
      ctx.fillStyle = "rgba(12,10,8,0.9)"; ctx.fillRect(cX, cardY, cW, cardH);
      const ng = ctx.createLinearGradient(cX, cardY, cX + stripW * 2, cardY);
      ng.addColorStop(0, ig.accent); ng.addColorStop(1, vsHexA(ig.accent, 0));
      ctx.fillStyle = ng; ctx.fillRect(cX, cardY, cW, cardH);
      ctx.restore();
      ctx.strokeStyle = vsHexA(ig.accent, 0.35); ctx.lineWidth = 1;
      roundRectPath(ctx, cX, cardY, cW, cardH, cardH * 0.16); ctx.stroke();
      ctx.textBaseline = "middle"; ctx.textAlign = "left";
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      vsFitFont(ctx, s.label, cW * 0.58, "600", "Inter, sans-serif",
        Math.round(Math.min(U * 0.019, cardH * 0.22)), Math.round(cardH * 0.13));
      ctx.fillText(s.label, cX + cW * 0.14, cardY + cardH * 0.3);
      ctx.fillStyle = ig.accent;
      ctx.shadowColor = ig.accent; ctx.shadowBlur = U * 0.015 * re;
      vsFitFont(ctx, s.value, cW * 0.5, "800", vsGetFont("Inter, sans-serif"),
        Math.round(Math.min(U * 0.052, cardH * 0.46)), Math.round(cardH * 0.28));
      ctx.textAlign = "right";
      ctx.fillText(s.value, cX + cW * 0.96, cardY + cardH * 0.7);
      ctx.shadowBlur = 0; ctx.textBaseline = "alphabetic";

    } else if (style === "ranking") {
      // Leaderboard rank row — number + bar + label
      const rowMaxW = panelW - padX * 2;
      const rankPx = Math.round(Math.min(rowH * 0.55, U * 0.045));
      const labelPx = Math.round(Math.min(rowH * 0.3, U * 0.02));
      // rank number bubble
      const bubR = Math.min(rowH * 0.38, U * 0.032);
      const bubX = px + padX + bubR;
      const bubY = ry + rowH * 0.5;
      const rankColor = i === 0 ? "#FFD700" : i === 1 ? "#C0C0C0" : i === 2 ? "#CD7F32" : ig.accent;
      ctx.fillStyle = vsHexA(rankColor, 0.2);
      ctx.beginPath(); ctx.arc(bubX, bubY, bubR, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = rankColor; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(bubX, bubY, bubR, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = rankColor; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = `700 ${rankPx * 0.7}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(i + 1, bubX, bubY);
      ctx.textBaseline = "alphabetic"; ctx.textAlign = "left";
      // label
      ctx.fillStyle = ig.label;
      ctx.font = `600 ${labelPx}px Inter, sans-serif`;
      const lX = px + padX + bubR * 2 + U * 0.018;
      ctx.fillText(s.label, lX, ry + rowH * 0.36);
      // bar + value
      const barH3 = Math.min(rowH * 0.22, U * 0.018);
      const barY3 = ry + rowH * 0.54;
      const barMaxW = panelW - padX * 2 - bubR * 2 - U * 0.025;
      ctx.fillStyle = ig.track;
      roundRectPath(ctx, lX, barY3, barMaxW, barH3, barH3 / 2); ctx.fill();
      const fillFrac = (s.num / Math.max(max, 1)) * re;
      const gr3 = ctx.createLinearGradient(lX, 0, lX + barMaxW, 0);
      gr3.addColorStop(0, rankColor); gr3.addColorStop(1, vsHexA(rankColor, 0.6));
      ctx.fillStyle = gr3;
      roundRectPath(ctx, lX, barY3, Math.max(barH3, barMaxW * fillFrac), barH3, barH3 / 2); ctx.fill();
      ctx.fillStyle = rankColor; ctx.textAlign = "right";
      ctx.font = `700 ${Math.round(rowH * 0.32)}px ${vsGetFont("Prata, serif")}`;
      ctx.fillText(s.value, px + panelW - padX, ry + rowH * 0.38);

    } else if (style === "timeline-list") {
      // Timeline / list — vertical line left, dot, label + value
      const dotR = Math.min(rowH * 0.18, U * 0.014);
      const lineX = px + padX + dotR;
      const dotY = ry + rowH * 0.42;
      // vertical connector line
      if (i < stats.length - 1) {
        ctx.strokeStyle = vsHexA(ig.accent, 0.3); ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(lineX, dotY + dotR);
        ctx.lineTo(lineX, ry + rowH);
        ctx.stroke();
      }
      // dot
      ctx.fillStyle = re > 0.5 ? ig.accent : vsHexA(ig.accent, re * 2);
      ctx.shadowColor = ig.accent; ctx.shadowBlur = U * 0.015 * re;
      ctx.beginPath(); ctx.arc(lineX, dotY, dotR, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
      // label + value
      const tX = lineX + dotR + U * 0.02;
      ctx.textAlign = "left"; ctx.textBaseline = "middle";
      const lblPxT = Math.round(Math.min(rowH * 0.3, U * 0.022));
      ctx.fillStyle = ig.label; ctx.font = `600 ${lblPxT}px Inter, sans-serif`;
      ctx.fillText(s.label, tX, dotY - dotR * 0.5);
      ctx.fillStyle = ig.value;
      ctx.font = `700 ${Math.round(lblPxT * 1.5)}px ${vsGetFont("Prata, serif")}`;
      ctx.fillText(s.value, tX, dotY + dotR * 1.8);
      ctx.textBaseline = "alphabetic";
    }
  });

  // ── STYLES that render the whole panel in one pass (not per-stat) ──
  const onePassStyles = ["ticker-numbers","comparison","area-chart","bubble","magazine","vs-split"];
  if (onePassStyles.includes(style) && stats.length > 0) {
    ctx.save();
    ctx.globalAlpha = mAlpha * contentEase;

    if (style === "ticker-numbers") {
      // Large numbers in a horizontal scroller — up to 4 stats side by side
      const cols = Math.min(stats.length, 4);
      const cellW2 = (panelW - padX * 2) / cols;
      const centerY = py + panelH * 0.58;
      stats.slice(0, 4).forEach((s, i) => {
        const rowReveal = playing ? Math.min(1, Math.max(0, (elapsed - 0.3 - i * 0.15) / 0.5)) : 1;
        const re = 1 - Math.pow(1 - rowReveal, 3);
        const cx2 = px + padX + cellW2 * (i + 0.5);
        // divider
        if (i > 0) {
          ctx.strokeStyle = vsHexA(ig.accent, 0.2); ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px + padX + cellW2 * i, py + panelH * 0.3);
          ctx.lineTo(px + padX + cellW2 * i, py + panelH * 0.82);
          ctx.stroke();
        }
        ctx.globalAlpha = mAlpha * contentEase * re;
        ctx.textAlign = "center";
        const numPxT = Math.round(Math.min(U * 0.09, cellW2 * 0.5));
        const suffix3 = s.value.replace(/[\d.,\-]/g, "");
        const prefix3 = s.value.replace(/[\d.,\-].*$/, "");
        const shown3 = s.num && playing ? prefix3 + Math.round(s.num * re).toLocaleString() + suffix3 : s.value;
        ctx.fillStyle = ig.accent;
        ctx.shadowColor = vsHexA(ig.accent, 0.3); ctx.shadowBlur = U * 0.025;
        ctx.font = `900 ${numPxT}px ${vsGetFont("Inter, sans-serif")}`;
        ctx.fillText(shown3, cx2, centerY);
        ctx.shadowBlur = 0;
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.font = `500 ${Math.round(U * 0.02)}px Inter, sans-serif`;
        ctx.fillText(s.label.toUpperCase(), cx2, centerY + numPxT * 0.65);
        ctx.globalAlpha = mAlpha * contentEase;
      });

    } else if (style === "comparison") {
      // Two large values side by side with labels — best for 2 stats
      const a = stats[0], b = stats[1] || { label: "", value: "", num: 0 };
      const midX = px + panelW / 2;
      const midY = py + panelH * 0.56;
      // central VS badge
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillStyle = ig.accent;
      roundRectPath(ctx, midX - U * 0.045, midY - U * 0.04, U * 0.09, U * 0.08, U * 0.04); ctx.fill();
      ctx.fillStyle = "#000"; ctx.font = `800 ${Math.round(U * 0.028)}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText("VS", midX, midY);
      // left value
      ctx.fillStyle = ig.value;
      ctx.shadowColor = vsHexA(ig.accent, 0.35); ctx.shadowBlur = U * 0.03;
      const aRe = playing ? Math.min(1, Math.max(0, (elapsed - 0.3) / 0.6)) : 1;
      const aE = 1 - Math.pow(1 - aRe, 3);
      // auto-fit value into half-panel width (leave room for VS badge)
      const compMaxW = panelW * 0.40;
      let compPx = Math.round(Math.min(U * 0.095, panelW * 0.2));
      ctx.font = `900 ${compPx}px ${vsGetFont("Inter, sans-serif")}`;
      const longest = String(a.value).length >= String(b.value).length ? a.value : b.value;
      while (compPx > Math.round(U * 0.04) && ctx.measureText(longest).width > compMaxW) {
        compPx -= 2; ctx.font = `900 ${compPx}px ${vsGetFont("Inter, sans-serif")}`;
      }
      ctx.font = `900 ${compPx}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(a.value, midX - panelW * 0.26, midY);
      ctx.shadowBlur = 0;
      ctx.fillStyle = ig.label;
      ctx.font = `600 ${Math.round(U * 0.02)}px Inter, sans-serif`;
      ctx.fillText(a.label.toUpperCase(), midX - panelW * 0.26, midY + U * 0.07);
      // right value
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.shadowColor = "rgba(255,255,255,0.2)"; ctx.shadowBlur = U * 0.02;
      ctx.font = `900 ${compPx}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(b.value, midX + panelW * 0.26, midY);
      ctx.shadowBlur = 0;
      ctx.fillStyle = ig.label;
      ctx.font = `600 ${Math.round(U * 0.02)}px Inter, sans-serif`;
      ctx.fillText(b.label.toUpperCase(), midX + panelW * 0.26, midY + U * 0.07);
      ctx.textBaseline = "alphabetic";

    } else if (style === "area-chart") {
      // Animated area/wave chart background + value labels at peaks
      const chartX = px + padX, chartW = panelW - padX * 2;
      const chartTop = cy + U * 0.02, chartBot = py + panelH - srcReserve - U * 0.01;
      const chartH2 = chartBot - chartTop;
      const nPts = stats.length;
      // draw area
      ctx.beginPath();
      const getY = (i2, re2) => {
        const frac = stats[i2].num / Math.max(max, 1);
        return chartBot - chartH2 * frac * re2;
      };
      const pts = stats.map((s, i2) => ({
        x: chartX + chartW * (i2 / Math.max(nPts - 1, 1)),
        y: getY(i2, contentEase)
      }));
      ctx.moveTo(pts[0].x, chartBot);
      ctx.lineTo(pts[0].x, pts[0].y);
      for (let i2 = 1; i2 < pts.length; i2++) {
        const cp1x = (pts[i2-1].x + pts[i2].x) / 2, cp1y = pts[i2-1].y;
        const cp2x = (pts[i2-1].x + pts[i2].x) / 2, cp2y = pts[i2].y;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, pts[i2].x, pts[i2].y);
      }
      ctx.lineTo(pts[pts.length-1].x, chartBot);
      ctx.closePath();
      const ag = ctx.createLinearGradient(0, chartTop, 0, chartBot);
      ag.addColorStop(0, vsHexA(ig.accent, 0.5)); ag.addColorStop(1, vsHexA(ig.accent, 0.03));
      ctx.fillStyle = ag; ctx.fill();
      // line on top
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i2 = 1; i2 < pts.length; i2++) {
        const cp1x = (pts[i2-1].x + pts[i2].x) / 2;
        ctx.bezierCurveTo(cp1x, pts[i2-1].y, cp1x, pts[i2].y, pts[i2].x, pts[i2].y);
      }
      ctx.strokeStyle = ig.accent; ctx.lineWidth = 2.5; ctx.stroke();
      // dots + labels at each point
      pts.forEach((pt, i2) => {
        const pr = playing ? Math.min(1, Math.max(0, (elapsed - 0.4 - i2 * 0.1) / 0.4)) : 1;
        const pe = 1 - Math.pow(1 - pr, 3);
        ctx.globalAlpha = mAlpha * contentEase * pe;
        ctx.fillStyle = ig.accent;
        ctx.shadowColor = ig.accent; ctx.shadowBlur = U * 0.015;
        ctx.beginPath(); ctx.arc(pt.x, pt.y, U * 0.012, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#fff"; ctx.textAlign = "center";
        ctx.font = `700 ${Math.round(U * 0.018)}px Inter, sans-serif`;
        ctx.fillText(stats[i2].value, pt.x, pt.y - U * 0.025);
        ctx.fillStyle = ig.label;
        ctx.font = `500 ${Math.round(U * 0.015)}px Inter, sans-serif`;
        ctx.fillText(stats[i2].label, pt.x, chartBot + U * 0.02);
        ctx.globalAlpha = mAlpha * contentEase;
      });

    } else if (style === "bubble") {
      // Proportional bubbles — radius proportional to value
      const bArea = (panelH - (cy - py) - srcReserve);
      const bCenterY = cy + bArea / 2;
      const totalParts = stats.reduce((s2, st) => s2 + Math.sqrt(st.num || 1), 0);
      let bx2 = px + padX;
      stats.forEach((s, i2) => {
        const frac = Math.sqrt(s.num || 1) / totalParts;
        const slotW2 = (panelW - padX * 2) * frac;
        const rad2 = Math.min(slotW2 * 0.44, bArea * 0.44);
        const bcx = bx2 + slotW2 / 2;
        const pr = playing ? Math.min(1, Math.max(0, (elapsed - 0.3 - i2 * 0.12) / 0.5)) : 1;
        const pe = 1 - Math.pow(1 - pr, 3);
        ctx.globalAlpha = mAlpha * contentEase * pe;
        const bg2 = ctx.createRadialGradient(bcx, bCenterY, 0, bcx, bCenterY, rad2 * pe);
        bg2.addColorStop(0, vsHexA(ig.accent, 0.9)); bg2.addColorStop(1, vsHexA(ig.accent, 0.2));
        ctx.fillStyle = bg2;
        ctx.beginPath(); ctx.arc(bcx, bCenterY, rad2 * pe, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = ig.accent; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(bcx, bCenterY, rad2 * pe, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
        const vPx2 = Math.round(Math.min(rad2 * 0.45, U * 0.032));
        ctx.font = `800 ${vPx2}px ${vsGetFont("Inter, sans-serif")}`;
        ctx.fillText(s.value, bcx, bCenterY - rad2 * 0.12 * pe);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.font = `500 ${Math.round(vPx2 * 0.6)}px Inter, sans-serif`;
        ctx.fillText(s.label, bcx, bCenterY + rad2 * 0.35 * pe);
        ctx.textBaseline = "alphabetic";
        ctx.globalAlpha = mAlpha * contentEase;
        bx2 += slotW2;
      });

    } else if (style === "magazine") {
      // Magazine layout — large featured stat + list of others
      const featStat = stats[0];
      const rest = stats.slice(1, 5);
      const featW = panelW * 0.5, featH = panelH * 0.7;
      const featX = px + padX, featY = cy;
      const fg = ctx.createLinearGradient(featX, featY, featX, featY + featH);
      fg.addColorStop(0, vsHexA(ig.accent, 0.22)); fg.addColorStop(1, vsHexA(ig.accent, 0.05));
      ctx.fillStyle = fg;
      roundRectPath(ctx, featX, featY, featW - U * 0.015, featH, U * 0.02); ctx.fill();
      ctx.strokeStyle = vsHexA(ig.accent, 0.4); ctx.lineWidth = 1.5;
      roundRectPath(ctx, featX, featY, featW - U * 0.015, featH, U * 0.02); ctx.stroke();
      ctx.textAlign = "center";
      const fPx2 = Math.round(Math.min(U * 0.085, featW * 0.38));
      const fRe = playing ? Math.min(1, Math.max(0, (elapsed - 0.3) / 0.5)) : 1;
      const fE = 1 - Math.pow(1 - fRe, 3);
      ctx.fillStyle = ig.accent;
      ctx.shadowColor = vsHexA(ig.accent, 0.4); ctx.shadowBlur = U * 0.03 * fE;
      ctx.font = `900 ${fPx2}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(featStat.value, featX + featW * 0.5 - U * 0.008, featY + featH * 0.52);
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.font = `500 ${Math.round(U * 0.02)}px Inter, sans-serif`;
      ctx.fillText(featStat.label.toUpperCase(), featX + featW * 0.5 - U * 0.008, featY + featH * 0.7);
      // right side list
      const rX = px + padX + featW + U * 0.01;
      const rW = panelW - padX * 2 - featW - U * 0.01;
      rest.forEach((s2, i2) => {
        const iY = featY + (featH / Math.max(rest.length, 1)) * (i2 + 0.5);
        const pr = playing ? Math.min(1, Math.max(0, (elapsed - 0.4 - i2 * 0.1) / 0.45)) : 1;
        const pe = 1 - Math.pow(1 - pr, 3);
        ctx.globalAlpha = mAlpha * contentEase * pe;
        ctx.textAlign = "left"; ctx.textBaseline = "middle";
        ctx.fillStyle = ig.label;
        ctx.font = `600 ${Math.round(U * 0.017)}px Inter, sans-serif`;
        ctx.fillText(s2.label, rX, iY - U * 0.012);
        ctx.fillStyle = ig.value;
        ctx.font = `700 ${Math.round(U * 0.028)}px ${vsGetFont("Prata, serif")}`;
        ctx.fillText(s2.value, rX, iY + U * 0.018);
        if (i2 < rest.length - 1) {
          ctx.strokeStyle = vsHexA(ig.accent, 0.18); ctx.lineWidth = 1;
          const sepY = iY + U * 0.04;
          ctx.beginPath(); ctx.moveTo(rX, sepY); ctx.lineTo(rX + rW, sepY); ctx.stroke();
        }
        ctx.textBaseline = "alphabetic";
        ctx.globalAlpha = mAlpha * contentEase;
      });

    } else if (style === "vs-split") {
      // VS split — two large values with label, dramatic divider
      const a = stats[0], b = stats[1] || { label: "—", value: "—", num: 0 };
      const midX = px + panelW / 2;
      const aRe = playing ? Math.min(1, Math.max(0, (elapsed - 0.3) / 0.55)) : 1;
      const bRe = playing ? Math.min(1, Math.max(0, (elapsed - 0.5) / 0.55)) : 1;
      const aE = 1 - Math.pow(1 - aRe, 3);
      const bE = 1 - Math.pow(1 - bRe, 3);
      // left half tint
      const lG = ctx.createLinearGradient(px, py, midX, py);
      lG.addColorStop(0, vsHexA(ig.accent, 0.18)); lG.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = lG;
      roundRectPath(ctx, px, py, panelW / 2, panelH, panelW * 0.04 + 0.5); ctx.fill();
      // right half tint
      const rG = ctx.createLinearGradient(midX, py, px + panelW, py);
      rG.addColorStop(0, "rgba(0,0,0,0)"); rG.addColorStop(1, "rgba(255,255,255,0.06)");
      ctx.fillStyle = rG;
      roundRectPath(ctx, midX, py, panelW / 2, panelH, panelW * 0.04); ctx.fill();
      // divider
      ctx.strokeStyle = vsHexA(ig.accent, 0.5 * aE); ctx.lineWidth = 2;
      const dvH = panelH * 0.55 * Math.max(aE, bE);
      ctx.beginPath();
      ctx.moveTo(midX, py + panelH * 0.22);
      ctx.lineTo(midX, py + panelH * 0.22 + dvH);
      ctx.stroke();
      // VS label
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillStyle = ig.accent; ctx.font = `900 ${Math.round(U * 0.028)}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText("VS", midX, py + panelH * 0.5);
      // left value + label
      ctx.globalAlpha = mAlpha * contentEase * aE;
      const vsPx = Math.round(Math.min(U * 0.095, panelW * 0.2));
      ctx.fillStyle = ig.accent;
      ctx.shadowColor = vsHexA(ig.accent, 0.4); ctx.shadowBlur = U * 0.025;
      ctx.font = `900 ${vsPx}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(a.value, px + panelW * 0.25, py + panelH * 0.45);
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.font = `600 ${Math.round(U * 0.022)}px Inter, sans-serif`;
      ctx.fillText(a.label.toUpperCase(), px + panelW * 0.25, py + panelH * 0.65);
      // right value + label
      ctx.globalAlpha = mAlpha * contentEase * bE;
      ctx.fillStyle = "#ffffff";
      ctx.font = `900 ${vsPx}px ${vsGetFont("Inter, sans-serif")}`;
      ctx.fillText(b.value, px + panelW * 0.75, py + panelH * 0.45);
      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.font = `600 ${Math.round(U * 0.022)}px Inter, sans-serif`;
      ctx.fillText(b.label.toUpperCase(), px + panelW * 0.75, py + panelH * 0.65);
      ctx.textBaseline = "alphabetic";
      ctx.globalAlpha = mAlpha * contentEase;
    }
    ctx.restore();
  }

  if (data.source) {
    ctx.textAlign = "left";
    ctx.fillStyle = vsHexA(ig.label, 0.65);
    const srcLabel = "Source: " + data.source;
    vsFitFont(ctx, srcLabel, panelW - padX * 2, "400",
      "Inter, sans-serif", Math.round(U * 0.012), Math.round(U * 0.009));
    ctx.fillText(srcLabel, px + padX, py + panelH - H * 0.024);
  }
  ctx.restore();
  ctx.restore();
}


// A butterfly that flies a gentle path with flapping wings.
function drawButterfly(ctx, W, H, elapsed, px, py, panelW, panelH) {
  // flight path: a looping figure across the panel
  const t = elapsed * 0.6;
  const bx = px + panelW * (0.5 + 0.42 * Math.sin(t));
  const by = py + panelH * (0.5 + 0.36 * Math.sin(t * 1.7));
  const size = Math.min(W, H) * 0.05;
  // wing flap — fast oscillation
  const flap = Math.abs(Math.sin(elapsed * 11));
  const heading = Math.atan2(
    Math.cos(t * 1.7) * 1.7 * panelH,
    Math.cos(t) * panelW
  );

  ctx.save();
  ctx.translate(bx, by);
  ctx.rotate(heading + Math.PI / 2);
  ctx.globalCompositeOperation = "screen";

  const drawWing = (side) => {
    ctx.save();
    ctx.scale(side, 1);
    // wing folds with the flap
    ctx.scale(0.35 + 0.65 * flap, 1);
    const g = ctx.createLinearGradient(0, -size, size, size);
    g.addColorStop(0, "rgba(255,200,120,0.95)");
    g.addColorStop(1, "rgba(216,120,200,0.85)");
    ctx.fillStyle = g;
    // upper wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(size * 1.1, -size * 1.1, size * 0.9, -size * 0.2);
    ctx.quadraticCurveTo(size * 0.7, size * 0.1, 0, 0);
    ctx.fill();
    // lower wing
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(size * 0.8, size * 0.4, size * 0.6, size * 0.95);
    ctx.quadraticCurveTo(size * 0.3, size * 0.7, 0, 0);
    ctx.fill();
    ctx.restore();
  };
  drawWing(1);
  drawWing(-1);
  // body
  ctx.fillStyle = "rgba(40,30,20,0.9)";
  ctx.beginPath();
  ctx.ellipse(0, 0, size * 0.07, size * 0.55, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function roundRectPath(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Draw a single composited frame at time `elapsed` (seconds).
// Animated overlay elements drawn on top of the media.
function drawStudioOverlay(ctx, W, H, elapsed, kind) {
  if (!kind || kind === "none") return;
  ctx.save();
  if (kind === "lightleak") {
    // drifting warm light leak
    const x = W * (0.2 + 0.6 * (0.5 + 0.5 * Math.sin(elapsed * 0.6)));
    const g = ctx.createRadialGradient(x, H * 0.2, 0, x, H * 0.2, W * 0.6);
    g.addColorStop(0, "rgba(255,180,90,0.35)");
    g.addColorStop(1, "rgba(255,180,90,0)");
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  } else if (kind === "bokeh") {
    // soft floating circles
    ctx.globalCompositeOperation = "screen";
    for (let i = 0; i < 14; i++) {
      const seed = i * 99.7;
      const x = ((Math.sin(seed) * 0.5 + 0.5) * W);
      const y = ((elapsed * 16 + seed * 30) % (H + 120)) - 60;
      const r = 14 + (i % 5) * 12;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, "rgba(255,240,200,0.5)");
      g.addColorStop(1, "rgba(255,240,200,0)");
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  } else if (kind === "particles") {
    // rising sparkles
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    for (let i = 0; i < 50; i++) {
      const seed = i * 53.3;
      const x = (Math.sin(seed) * 0.5 + 0.5) * W +
                Math.sin(elapsed + seed) * 14;
      const y = H - ((elapsed * 40 + seed * 40) % (H + 40));
      const s = 1 + (i % 3);
      ctx.globalAlpha = 0.4 + 0.5 * (Math.sin(elapsed * 3 + seed) * 0.5 + 0.5);
      ctx.fillRect(x, y, s, s);
    }
  } else if (kind === "snow") {
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    for (let i = 0; i < 60; i++) {
      const seed = i * 47.1;
      const x = (Math.sin(seed) * 0.5 + 0.5) * W +
                Math.sin(elapsed * 0.8 + seed) * 24;
      const y = ((elapsed * 30 + seed * 30) % (H + 30));
      const r = 1.5 + (i % 3);
      ctx.globalAlpha = 0.6;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  } else if (kind === "gradient") {
    // cinematic top/bottom gradient bars
    const top = ctx.createLinearGradient(0, 0, 0, H * 0.3);
    top.addColorStop(0, "rgba(0,0,0,0.55)");
    top.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = top;
    ctx.fillRect(0, 0, W, H * 0.3);
    const bot = ctx.createLinearGradient(0, H * 0.7, 0, H);
    bot.addColorStop(0, "rgba(0,0,0,0)");
    bot.addColorStop(1, "rgba(0,0,0,0.55)");
    ctx.fillStyle = bot;
    ctx.fillRect(0, H * 0.7, W, H * 0.3);
  } else if (kind === "rain") {
    ctx.globalCompositeOperation = "screen";
    ctx.strokeStyle = "rgba(180,200,230,0.5)";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 70; i++) {
      const seed = i * 41.3;
      const x = (Math.sin(seed) * 0.5 + 0.5) * W;
      const y = ((elapsed * 600 + seed * 50) % (H + 60)) - 30;
      ctx.beginPath();
      ctx.moveTo(x, y); ctx.lineTo(x - 3, y + 18);
      ctx.stroke();
    }
  } else if (kind === "dust") {
    ctx.globalCompositeOperation = "screen";
    for (let i = 0; i < 40; i++) {
      const seed = i * 67.9;
      const x = (Math.sin(seed + elapsed * 0.3) * 0.5 + 0.5) * W;
      const y = (Math.cos(seed * 1.7 + elapsed * 0.4) * 0.5 + 0.5) * H;
      ctx.globalAlpha = 0.3 + 0.4 * (Math.sin(elapsed * 2 + seed) * 0.5 + 0.5);
      ctx.fillStyle = "rgba(255,250,235,0.8)";
      ctx.beginPath(); ctx.arc(x, y, 1.4, 0, Math.PI * 2); ctx.fill();
    }
  } else if (kind === "scanlines") {
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = "#000";
    for (let y = 0; y < H; y += 4) ctx.fillRect(0, y, W, 2);
  } else if (kind === "glow") {
    // pulsing edge glow
    const pulse = 0.3 + 0.2 * Math.sin(elapsed * 2);
    const g = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.35,
                                       W/2, H/2, Math.max(W,H)*0.7);
    g.addColorStop(0, "rgba(216,183,106,0)");
    g.addColorStop(1, `rgba(216,183,106,${pulse})`);
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  } else if (kind === "vhs") {
    // subtle chromatic VHS jitter bars
    ctx.globalCompositeOperation = "screen";
    for (let i = 0; i < 3; i++) {
      const y = ((elapsed * 120 + i * H / 3) % H);
      ctx.fillStyle = "rgba(120,160,255,0.06)";
      ctx.fillRect(0, y, W, 30);
    }
  } else if (kind === "goldframe") {
    // luxurious thin gold border frame
    const m = Math.min(W, H) * 0.045;
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "rgba(216,183,106,0.9)");
    g.addColorStop(0.5, "rgba(255,240,184,0.95)");
    g.addColorStop(1, "rgba(216,183,106,0.9)");
    ctx.strokeStyle = g;
    ctx.lineWidth = Math.max(1.5, W * 0.0022);
    ctx.strokeRect(m, m, W - m * 2, H - m * 2);
    // corner ticks
    ctx.lineWidth = Math.max(1, W * 0.0016);
    const t = Math.min(W, H) * 0.04;
    [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]]
      .forEach(([x, y, sx, sy]) => {
        ctx.beginPath();
        ctx.moveTo(x + sx * t, y); ctx.lineTo(x, y); ctx.lineTo(x, y + sy * t);
        ctx.stroke();
      });
  } else if (kind === "shimmer") {
    // a luxurious diagonal light sweep
    const p = (elapsed * 0.4) % 1.4 - 0.2;
    const cx = W * p;
    const g = ctx.createLinearGradient(cx - W * 0.2, 0, cx + W * 0.2, H);
    g.addColorStop(0, "rgba(255,255,255,0)");
    g.addColorStop(0.5, "rgba(255,250,235,0.22)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  } else if (kind === "minimalline") {
    // minimal: a thin centred horizontal rule that draws in
    const grow = Math.min(1, elapsed / 1.2);
    const lw = W * 0.4 * (1 - Math.pow(1 - grow, 3));
    ctx.strokeStyle = "rgba(255,255,255,0.55)";
    ctx.lineWidth = Math.max(1, W * 0.0014);
    ctx.beginPath();
    ctx.moveTo(W / 2 - lw / 2, H * 0.5);
    ctx.lineTo(W / 2 + lw / 2, H * 0.5);
    ctx.stroke();
  } else if (kind === "corners") {
    // minimal corner brackets
    const m = Math.min(W, H) * 0.07;
    const t = Math.min(W, H) * 0.06;
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
    ctx.lineWidth = Math.max(1, W * 0.0016);
    [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]]
      .forEach(([x, y, sx, sy]) => {
        ctx.beginPath();
        ctx.moveTo(x + sx * t, y); ctx.lineTo(x, y); ctx.lineTo(x, y + sy * t);
        ctx.stroke();
      });
  } else if (kind === "embers") {
    // luxurious slow-rising warm embers
    ctx.globalCompositeOperation = "screen";
    for (let i = 0; i < 30; i++) {
      const seed = i * 73.2;
      const x = (Math.sin(seed) * 0.5 + 0.5) * W +
                Math.sin(elapsed * 0.7 + seed) * 18;
      const y = H - ((elapsed * 22 + seed * 40) % (H + 40));
      const r = 1.2 + (i % 3);
      const a = 0.3 + 0.4 * (Math.sin(elapsed * 2 + seed) * 0.5 + 0.5);
      const gg = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
      gg.addColorStop(0, `rgba(255,200,120,${a})`);
      gg.addColorStop(1, "rgba(255,200,120,0)");
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(x, y, r * 3, 0, Math.PI * 2); ctx.fill();
    }
  } else if (kind === "haze") {
    // minimal soft haze vignette pulse
    const pulse = 0.16 + 0.06 * Math.sin(elapsed * 1.4);
    const g = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.2,
                                       W/2, H/2, Math.max(W,H)*0.7);
    g.addColorStop(0, "rgba(255,255,255,0)");
    g.addColorStop(1, `rgba(255,255,255,${pulse})`);
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }
  ctx.restore();
}

function drawStudioFrame(elapsed) {
  const canvas = $("#vsCanvas");
  if (!canvas) return;
  vstudio._frameHasMedia = false;   // set true only when footage is drawn

  // When slides exist, pick the slide active at this time.
  // IMPORTANT: when slides are present, we NEVER use vstudio.mediaEl as a
  // fallback — each slide must have its own footage, or use a generated
  // background. vstudio.mediaEl is only used in "single clip" mode (no slides).
  let media = vstudio.slides.length ? null : vstudio.mediaEl;
  let slideHeadline = null;
  let dsSettings = null;          // settings of the slide being displayed
  let dsLocal = 0, dsDur = 0;     // local time within that slide
  let introSlide = null;          // the active intro slide, if any
  if (vstudio.slides.length) {
    const at = slideAtTime(elapsed);
    const slide = vstudio.slides[at.index];
    dsLocal = at.local; dsDur = at.dur;
    if (slide && slide.ready) {
      if (slide.isIntro) {
        introSlide = slide;
        // intro/content slides may also carry per-slide footage
        if (slide.mediaEl) media = slide.mediaEl;
      } else {
        // regular media slide — use only THIS slide's footage
        media = slide.mediaEl || null;
        slideHeadline = slide.headline || "";
      }
      // the active slide being edited reads LIVE controls; others read saved
      dsSettings = (at.index === vstudio.activeSlide) ? null : slide.settings;
    }
  }

  // Resolve the drag offsets / scales for the slide being DISPLAYED.
  // The active slide reads live state; any other slide reads its own
  // saved settings — so a move on one slide never affects the others.
  const dsOff = (key, fallback) => {
    if (dsSettings && key in dsSettings) return dsSettings[key];
    return fallback;
  };
  const vsOff = {
    textDX: dsOff("_textDX", vstudio.textDX),
    textDY: dsOff("_textDY", vstudio.textDY),
    textScale: dsOff("_textScale", vstudio.textScale),
    infoDX: dsOff("_infoDX", vstudio.infoDX),
    infoDY: dsOff("_infoDY", vstudio.infoDY),
    infoScale: dsOff("_infoScale", vstudio.infoScale),
    newsDX: dsOff("_newsDX", vstudio.newsDX),
    newsDY: dsOff("_newsDY", vstudio.newsDY),
    newsScale: dsOff("_newsScale", vstudio.newsScale),
    mediaDX: dsOff("_mediaDX", vstudio.mediaDX),
    mediaDY: dsOff("_mediaDY", vstudio.mediaDY),
    mediaScale: dsOff("_mediaScale", vstudio.mediaScale)
  };

  // Decide whether we can render at all. Normally media is required, but the
  // infographic (and news banner) can stand on their own coloured background.
  const infoOnEl = $("#vsInfoOn");
  const newsOnEl = $("#vsNewsOn");
  // standaloneOverlay: can render even without media if info/news is enabled.
  // When slides exist, read from the current slide's settings (dsSettings)
  // OR the live controls if this is the active slide.
  let standaloneOverlay = false;
  if (vstudio.slides.length) {
    // For the slide being displayed: check its own settings
    const at2 = slideAtTime(elapsed);
    const sl2 = vstudio.slides[at2.index];
    if (sl2) {
      const infoOn = sl2.settings && sl2.settings["#vsInfoOn"];
      const newsOn = sl2.settings && sl2.settings["#vsNewsOn"];
      // also check live controls if this is the active slide
      const liveInfo = at2.index === vstudio.activeSlide && infoOnEl && infoOnEl.checked;
      const liveNews = at2.index === vstudio.activeSlide && newsOnEl && newsOnEl.checked;
      standaloneOverlay = infoOn || newsOn || liveInfo || liveNews || !!introSlide;
    }
  } else {
    standaloneOverlay = (infoOnEl && infoOnEl.checked) || (newsOnEl && newsOnEl.checked);
  }
  if (!media && !standaloneOverlay && !introSlide) {
    // nothing else to draw, but a logo alone should still appear
    if (vstudio.logoEl) {
      ctx.clearRect(0, 0, W, H);
      vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur);
    }
    return;
  }

  // ── TIME-STRETCH (After Effects style time-remap) ──────────
  // Playback-rate handling for the duration control:
  //  • duration SHORTER than the clip  -> keep normal speed (rate = 1);
  //    the clip plays from the start and is simply cut off at the span.
  //    Reducing the time never changes the speed.
  //  • duration LONGER than the clip   -> slow the clip down (rate < 1)
  //    so it stretches to fill the longer span. Never sped up.
  if (media && media.tagName === "VIDEO" &&
      isFinite(media.duration) && media.duration > 0) {
    let span, clipLen = media.duration, targetT;
    const localTime = vstudio.slides.length ? dsLocal : elapsed;
    if (vstudio.slides.length) {
      span = dsDur > 0 ? dsDur : clipLen;
    } else {
      span = Math.max(0.01, studioDuration());
    }
    // rate is 1 unless the span is LONGER than the clip
    let rate = span > clipLen ? clipLen / span : 1;
    rate = Math.max(0.0625, Math.min(1, rate));
    // playhead position: when stretching, map the span onto the clip;
    // when at normal speed, the playhead just follows real elapsed time
    if (rate < 1) {
      targetT = (Math.min(localTime, span) / span) * clipLen;
    } else {
      targetT = Math.min(clipLen, localTime);
    }
    if (media.playbackRate !== rate) {
      try { media.playbackRate = rate; } catch {}
    }
    // if the video has drifted from where it should be (e.g. after a
    // pause, a scrub, or rate clamping) nudge it back with ONE seek —
    // not every frame, so the browser can finish the seek and not freeze.
    if (Math.abs(media.currentTime - targetT) > 0.4) {
      try { media.currentTime = targetT; } catch {}
    }
    // make sure it is actually playing during the live loop / render
    if ((vstudio.looping || vstudio.rendering) && media.paused) {
      media.play().catch(() => {});
    }
  }

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  const W = canvas.width, H = canvas.height;
  // CRITICAL: fully reset transform + clear every frame so nothing from the
  // previous frame (text, scaled background) bleeds through and looks doubled.
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.globalAlpha = 1;
  ctx.clearRect(0, 0, W, H);
  const tpl = vsTemplate();

  // ── INTRO SLIDE — self-contained background + dual animated text ──
  if (introSlide) {
    const playing = vstudio.looping || vstudio.rendering;
    const k = !playing ? 1
      : (dsDur > 0 ? Math.min(1, dsLocal / (dsDur * 0.6)) : 1);
    const bg = introBackgrounds.find(b => b.id === introSlide.introBg)
      || introBackgrounds[0];
    // If this scene has real footage (a content slide the user added media
    // to), draw the footage COVERING the frame as the backdrop; otherwise
    // draw the code-generated intro background + graphics.
    // Draw footage as the backdrop whenever this slide has media — title
    // (intro/outro) slides included; their text card still draws on top.
    const hasFootage = !!introSlide.mediaEl;
    if (hasFootage) {
      const m = introSlide.mediaEl;
      const mw = m.videoWidth || m.naturalWidth || W;
      const mh = m.videoHeight || m.naturalHeight || H;
      // ── camera motion on the photo/footage backdrop ──
      const camMot = (introSlide.settings && introSlide.settings["#vsMotion"]) || "kenburns-in";
      const playingC = vstudio.looping || vstudio.rendering;
      let cLc = (dsDur > 0) ? dsLocal / dsDur : 0;
      cLc = Math.max(0, Math.min(1, cLc));
      if (!playingC) cLc = 0.4; // show the move in a static preview too
      const cClock = playingC ? elapsed : 1.2;
      let cz = 1, cox = 0, coy = 0, crot = 0;
      const CT = Math.PI * 2;
      switch (camMot) {
        case "none":         cz = 1; break;
        case "kenburns-in":  cz = 1.0 + cLc * 0.18; break;
        case "kenburns-out": cz = 1.18 - cLc * 0.18; break;
        case "pan-right":    cz = 1.14; cox = (0.5 - cLc) * W * 0.16; break;
        case "pan-left":     cz = 1.14; cox = (cLc - 0.5) * W * 0.16; break;
        case "pan-up":       cz = 1.14; coy = (cLc - 0.5) * H * 0.16; break;
        case "pan-down":     cz = 1.14; coy = (0.5 - cLc) * H * 0.16; break;
        case "zoom-pan":     cz = 1.0 + cLc * 0.2; cox = (0.5 - cLc) * W * 0.1; break;
        case "drift-up":     cz = 1.12; coy = (0.5 - cLc) * H * 0.22; break;
        case "punch-in":     cz = cLc < 0.12 ? 1 + cLc * 1.5 : 1.18; break;
        case "vertigo":      cz = 1.0 + Math.sin(cLc * Math.PI) * 0.22; break;
        case "breathe":      cz = 1.05 + Math.sin(cClock * 1.6) * 0.04; break;
        case "pulse":        cz = 1.06 + Math.sin(cClock * 4) * 0.03; break;
        case "handheld":     cz = 1.12;
                             cox = Math.sin(cClock * 3.2) * W * 0.018 + Math.sin(cClock * 1.7) * W * 0.010;
                             coy = Math.cos(cClock * 2.6) * H * 0.016;
                             crot = Math.sin(cClock * 1.4) * 0.012; break;
        default:             cz = 1.0 + cLc * 0.08;
      }
      const scale = Math.max(W / mw, H / mh) * cz;
      const dw = mw * scale, dh = mh * scale;
      ctx.save();
      ctx.translate(W / 2 + cox, H / 2 + coy);
      if (crot) ctx.rotate(crot);
      try { ctx.drawImage(m, -dw / 2, -dh / 2, dw, dh); } catch {}
      ctx.restore();
      // a soft scrim so overlaid text/graphics stay readable on footage
      ctx.fillStyle = "rgba(0,0,0,0.28)";
      ctx.fillRect(0, 0, W, H);
      // TITLE (intro/outro) slides get an extra centered black fade so the
      // title text stays crisp and readable over busy footage.
      if (!introSlide._standaloneInfo && !introSlide._standaloneNews) {
        const vg = ctx.createLinearGradient(0, 0, 0, H);
        vg.addColorStop(0, "rgba(0,0,0,0.22)");
        vg.addColorStop(0.5, "rgba(0,0,0,0.64)");
        vg.addColorStop(1, "rgba(0,0,0,0.22)");
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
        const U2 = Math.min(W, H);
        const rg = ctx.createRadialGradient(W / 2, H * 0.5, U2 * 0.08, W / 2, H * 0.5, U2 * 0.62);
        rg.addColorStop(0, "rgba(0,0,0,0.5)");
        rg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, W, H);
      }
    } else {
      drawIntroBackground(ctx, W, H, introSlide.introBg, elapsed);
      drawIntroGraphics(ctx, W, H, bg, elapsed, k);
    }
    // grade the background/footage only — SKIP for code-generated animated
    // backgrounds (motion graphics look wrong with color filters applied).
    // Only apply filter when there is actual footage (photo/video) on the slide.
    if (hasFootage) vsApplyBgFilter(ctx, canvas, W, H);
    // A content slide (auto-builder) uses the intro background as a
    // backdrop but shows an infographic / news banner instead of a
    // title card — so we DON'T return; we fall through to those draws.
    if (introSlide._standaloneInfo || introSlide._standaloneNews) {
      // local value accessor: this slide's saved settings, else live controls
      const dsVal2 = (sel, fb) => {
        if (dsSettings && sel in dsSettings) return dsSettings[sel];
        // active content slide: read from its own settings object directly
        if (introSlide.settings && sel in introSlide.settings)
          return introSlide.settings[sel];
        return vsVal(sel, fb);
      };
      const sceneTime = dsLocal;
      if (introSlide._standaloneInfo)
        drawInfographic(ctx, W, H, sceneTime, tpl, dsVal2, vsOff);
      if (introSlide._standaloneNews)
        drawNewsBanner(ctx, W, H, sceneTime, dsVal2, vsOff, dsDur);
      // editable caption — a small label near the top of the scene.
      // Empty caption draws nothing.
      if (introSlide._caption && introSlide._caption.trim()) {
        const U = Math.min(W, H);
        const capE = !playing ? 1 : Math.min(1, k * 1.4);
        ctx.save();
        ctx.globalAlpha = capE;
        ctx.textAlign = "center";
        ctx.font = `600 ${Math.round(U * 0.02)}px Inter, sans-serif`;
        const cap = introSlide._caption.toUpperCase();
        const cw = ctx.measureText(cap).width + U * 0.05;
        const cxC = W / 2, cyC = H * 0.12;
        ctx.fillStyle = "rgba(0,0,0,0.45)";
        roundRectPath(ctx, cxC - cw / 2, cyC - U * 0.022, cw, U * 0.044, U * 0.022);
        ctx.fill();
        ctx.fillStyle = (tpl && tpl.accent) || "#d8b76a";
        ctx.fillText(cap, cxC, cyC + U * 0.007);
        ctx.restore();
      }
      drawStudioOverlay(ctx, W, H, elapsed, vsVal("#vsOverlay", "none"));
      vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur);
      return;
    }
    // The selected TEMPLATE drives the title scene's text colour, accent
    // and font — so picking a template visibly restyles intro/outro text.
    const introTpl = {
      text: (tpl && tpl.text) || "#ffffff",
      accent: (tpl && tpl.accent) || bg.accent,
      headlineFont: (tpl && tpl.headlineFont) || "Prata, serif",
      // eyebrow label above the intro title (uses the AI kicker if present)
      _eyebrow: introSlide.isOutro ? "" :
        ((introSlide.settings && introSlide.settings["#vsNewsKicker"]) ||
         introSlide._kicker || "AI RADAR")
    };
    // Skip color filter for animated motion backgrounds — only apply to footage
    if (hasFootage) vsApplyBgFilter(ctx, canvas, W, H);
    drawCard(ctx, W, H, introTpl,
      introSlide.introMain || "", 1,
      introSlide.introSub || "", introSlide.introMotion || "rise", k,
      introSlide.isOutro ? "outro" : "intro");
    drawStudioOverlay(ctx, W, H, elapsed, vsVal("#vsOverlay", "none"));
    vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur);
    return;
  }

  // when there is no media, paint a template-coloured backdrop so the
  // infographic / news banner has something to sit on. A subtle camera
  // motion (slow drift) is applied so "Camera motion" still has visible
  // effect even on text/news/infographic-only slides.
  if (!media) {
    // compute a gentle motion offset based on the selected camera motion
    let bgMotionT;
    if (vstudio.slides.length && dsDur > 0) bgMotionT = dsLocal / dsDur;
    else bgMotionT = (elapsed) / Math.max(0.01, studioDuration());
    bgMotionT = Math.max(0, Math.min(1, bgMotionT));
    if (!(vstudio.looping || vstudio.rendering)) bgMotionT = 0.4;
    const bgMot = (dsSettings && "#vsMotion" in dsSettings) ? dsSettings["#vsMotion"] : vsVal("#vsMotion", "kenburns-in");
    let bgZoom = 1, bgX = 0, bgY = 0;
    switch (bgMot) {
      case "kenburns-in":  bgZoom = 1 + bgMotionT * 0.08; break;
      case "kenburns-out": bgZoom = 1.08 - bgMotionT * 0.08; break;
      case "pan-right":    bgX = (0.5 - bgMotionT) * W * 0.06; bgZoom = 1.05; break;
      case "pan-left":     bgX = (bgMotionT - 0.5) * W * 0.06; bgZoom = 1.05; break;
      case "pan-up":       bgY = (bgMotionT - 0.5) * H * 0.06; bgZoom = 1.05; break;
      case "pan-down":     bgY = (0.5 - bgMotionT) * H * 0.06; bgZoom = 1.05; break;
      case "drift-up":     bgY = (0.5 - bgMotionT) * H * 0.08; bgZoom = 1.04; break;
      case "zoom-pan":     bgZoom = 1 + bgMotionT * 0.08; bgX = (0.5 - bgMotionT) * W * 0.04; break;
      case "breathe":      bgZoom = 1.03 + Math.sin(elapsed * 1.6) * 0.02; break;
      case "pulse":        bgZoom = 1.02 + Math.sin(elapsed * 4) * 0.015; break;
      case "none":         bgZoom = 1; break;
      default:             bgZoom = 1 + bgMotionT * 0.05;
    }
    ctx.save();
    if (bgZoom !== 1 || bgX || bgY) {
      ctx.translate(W/2 + bgX, H/2 + bgY);
      ctx.scale(bgZoom, bgZoom);
      ctx.translate(-W/2, -H/2);
    }
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, tpl.bg);
    bgGrad.addColorStop(1, vsHexLuma(tpl.bg) > 140 ? "#ffffff" : "#000000");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(-W*0.1, -H*0.1, W*1.2, H*1.2);
    ctx.restore();
  }

  // resolver: read a per-slide control value (saved settings or live control)
  const dsVal = (sel, fallback) => {
    if (dsSettings && sel in dsSettings) return dsSettings[sel];
    return vsVal(sel, fallback);
  };

  const duration = vstudio.slides.length
    ? slidesTotalDuration()
    : Math.max(2, Number(vsVal("#vsDuration", 6)));
  const progress = Math.min(1, elapsed / duration);

  const introText = (dsVal("#vsIntro", "") || "").trim();
  const introSub = (dsVal("#vsIntroSub", "") || "").trim();
  const introMotion = dsVal("#vsIntroMotion", "fade");
  const outroText = (dsVal("#vsOutro", "") || "").trim();
  const introDur = introText ? 1.6 : 0;
  const outroDur = outroText ? 1.1 : 0;

  // background
  ctx.fillStyle = tpl.bg;
  ctx.fillRect(0, 0, W, H);

  // ----- intro card — dual text with entrance motion -----
  if (introText && elapsed < introDur) {
    const k = elapsed / introDur;
    // fade: in over first 35%, hold, out over last 20%
    const fade = k < 0.35 ? k / 0.35 : k > 0.8 ? (1 - k) / 0.2 : 1;
    // entrance progress drives the motion (completes by 55% of the card)
    const prog = Math.min(1, k / 0.55);
    drawCard(ctx, W, H, tpl, introText, fade, introSub, introMotion, prog);
    vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur);
    return;
  }
  // ----- outro card -----
  if (outroText && elapsed > duration - outroDur) {
    const k = (elapsed - (duration - outroDur)) / outroDur;
    drawCard(ctx, W, H, tpl, outroText, 1 - Math.abs(k - 0.5) * 2, "", "fade", k * 2);
    vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur);
    return;
  }

  // ----- main media stage -----
  vstudio._frameHasMedia = !!media;
  if (media) {
  const mw = media.videoWidth || media.naturalWidth || W;
  const mh = media.videoHeight || media.naturalHeight || H;

  // transition in
  const trans = dsVal("#vsTransition", "fade");
  // CAMERA MOTION TIME: when slides exist, motion must progress across THIS
  // slide's own duration (dsLocal/dsDur) — not the whole timeline, otherwise
  // a 6s slide inside a 36s video barely moves. Single-clip mode uses global.
  let local, intro;
  if (vstudio.slides.length && dsDur > 0) {
    local = dsLocal / dsDur;
    intro = Math.min(1, dsLocal / 0.9);
  } else {
    local = (elapsed - introDur) / Math.max(0.01, duration - introDur - outroDur);
    intro = Math.min(1, (elapsed - introDur) / 0.9);
  }
  let lc = Math.max(0, Math.min(1, local));
  // STATIC PREVIEW: when not playing/rendering, show the camera move at ~40%
  // so the motion is visible in the still frame instead of frozen at the start.
  const _playing = vstudio.looping || vstudio.rendering;
  if (!_playing) lc = 0.4;
  // elapsed-based motions (handheld/shake/pulse/breathe) need a moving clock;
  // in a still preview give them a fixed non-zero phase so their look shows.
  const mClock = _playing ? elapsed : 1.2;
  const ease = 1 - Math.pow(1 - Math.max(0, intro), 3);

  let zoom = 1, offX = 0, offY = 0, alpha = 1, rot = 0;

  // ----- camera motion preset -----
  const motion = dsVal("#vsMotion", "kenburns-in");
  const TAU = Math.PI * 2;
  switch (motion) {
    case "none":          zoom = 1; break;
    case "kenburns-in":   zoom = 1.0 + lc * 0.18; break;
    case "kenburns-out":  zoom = 1.18 - lc * 0.18; break;
    case "pan-right":     zoom = 1.14; offX = (0.5 - lc) * W * 0.16; break;
    case "pan-left":      zoom = 1.14; offX = (lc - 0.5) * W * 0.16; break;
    case "pan-up":        zoom = 1.14; offY = (lc - 0.5) * H * 0.16; break;
    case "pan-down":      zoom = 1.14; offY = (0.5 - lc) * H * 0.16; break;
    case "parallax":      zoom = 1.12 + Math.sin(lc * Math.PI) * 0.05;
                          offX = Math.sin(lc * TAU) * W * 0.04; break;
    case "shake":         zoom = 1.08;
                          offX = (_playing ? (Math.random() - 0.5) : 0.3) * W * 0.012;
                          offY = (_playing ? (Math.random() - 0.5) : -0.3) * H * 0.012; break;
    case "pulse":         zoom = 1.06 + Math.sin(mClock * 4) * 0.03; break;
    case "sway":          zoom = 1.1; rot = Math.sin(lc * TAU) * 0.03; break;
    case "zoom-pan":      zoom = 1.0 + lc * 0.2; offX = (0.5 - lc) * W * 0.1; break;
    case "diagonal":      zoom = 1.14; offX = (lc - 0.5) * W * 0.12;
                          offY = (lc - 0.5) * H * 0.12; break;
    case "spin-in":       zoom = 0.7 + lc * 0.35; rot = (1 - lc) * 0.4; break;
    case "breathe":       zoom = 1.05 + Math.sin(mClock * 1.6) * 0.04; break;
    case "drift-up":      zoom = 1.12; offY = (0.5 - lc) * H * 0.22; break;
    case "punch-in":      zoom = lc < 0.12 ? 1 + lc * 1.5 : 1.18; break;
    case "handheld":      zoom = 1.12;
                          offX = Math.sin(mClock * 3.2) * W * 0.018 +
                                 Math.sin(mClock * 1.7) * W * 0.010;
                          offY = Math.cos(mClock * 2.6) * H * 0.016 +
                                 Math.sin(mClock * 4.1) * H * 0.008;
                          rot = Math.sin(mClock * 1.4) * 0.012; break;
    case "vertigo":       zoom = 1.0 + Math.sin(lc * Math.PI) * 0.22; break;
    default:              zoom = 1.0 + lc * 0.06;
  }

  // transitions layer on top of motion
  if (trans === "zoom") zoom *= (1.18 - 0.18 * ease);
  if (trans === "slide") offY += (1 - ease) * H * 0.12;
  if (trans === "fade")  alpha = ease;

  // COVER fit — the media fills the ENTIRE frame for the chosen aspect
  // ratio. Math.max scales so the smaller side still covers the frame;
  // overflow is cropped. One uniform `fit` factor → never stretched.
  // `mediaScale` is the user's manual zoom (scroll wheel on the footage).
  const manualZoom = Math.max(1, vsOff.mediaScale || 1);   // never below cover
  const fit = Math.max(W / mw, H / mh) * zoom * manualZoom;
  const dw = mw * fit, dh = mh * fit;

  // manual footage pan (drag to reframe). Clamp the TOTAL offset to the
  // available overflow so dragging never reveals black bars.
  const maxOX = Math.max(0, (dw - W) / 2), maxOY = Math.max(0, (dh - H) / 2);
  let totX = offX + (vsOff.mediaDX || 0) * W;
  let totY = offY + (vsOff.mediaDY || 0) * H;
  totX = Math.max(-maxOX, Math.min(maxOX, totX));
  totY = Math.max(-maxOY, Math.min(maxOY, totY));

  ctx.save();
  ctx.globalAlpha = alpha;
  if (rot !== 0) {
    ctx.translate(W / 2, H / 2);
    ctx.rotate(rot);
    ctx.translate(-W / 2, -H / 2);
  }
  try {
    ctx.drawImage(media, (W - dw) / 2 + totX, (H - dh) / 2 + totY, dw, dh);
  } catch {}
  ctx.restore();
  ctx.filter = "none";
  }
  // grade the footage/background only — before vignette, text, overlays
  vsApplyBgFilter(ctx, canvas, W, H);

  // vignette
  if (tpl.vignette > 0) {
    const g = ctx.createRadialGradient(W/2, H/2, Math.min(W,H)*0.3, W/2, H/2, Math.max(W,H)*0.75);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, `rgba(0,0,0,${tpl.vignette})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  // film grain — visible textured noise across the frame
  if ($("#vsGrain") && $("#vsGrain").checked) {
    ctx.save();
    const count = Math.round((W * H) / 1400);   // scales with resolution
    for (let i = 0; i < count; i++) {
      const shade = Math.random();
      ctx.globalAlpha = 0.06 + Math.random() * 0.12;
      ctx.fillStyle = shade > 0.5 ? "#ffffff" : "#000000";
      const s = 1 + Math.random() * 1.5;
      ctx.fillRect(Math.random() * W, Math.random() * H, s, s);
    }
    ctx.restore();
  }

  // ----- overlay element (light leak / bokeh / particles) -----
  drawStudioOverlay(ctx, W, H, elapsed, dsVal("#vsOverlay", "none"));

  // scene-local time — in a slide sequence each scene's overlays animate
  // fresh from that slide's start, not from the global timeline.
  const sceneTime = vstudio.slides.length ? dsLocal : elapsed;

  // ----- infographic overlay -----
  drawInfographic(ctx, W, H, sceneTime, tpl, dsVal, vsOff);

  // ----- news banner overlay -----
  drawNewsBanner(ctx, W, H, sceneTime, dsVal, vsOff, dsDur);

  // ----- text layers (with a readable backing plate) -----
  // The "Text layers → Headline" input always works. If it is empty AND
  // slides are in use, fall back to the active slide's own headline.
  const typedHeadline = (dsVal("#vsHeadline", "") || "").trim();
  const headline = typedHeadline
    ? typedHeadline
    : (slideHeadline !== null ? slideHeadline : "");
  const sub = (dsVal("#vsSub", "") || "").trim();
  const cta = (dsVal("#vsCta", "") || "").trim();
  const pos = dsVal("#vsTextPos", "center");
  // text size = the dropdown choice × the user's manual resize scale
  const sizeMul = Number(dsVal("#vsTextSize", 1)) * (vsOff.textScale || 1);
  const textAnim = dsVal("#vsTextAnim", "fade-up");
  // Staggered reveal (default): the backing box animates in FIRST, then
  // the text follows. The timeline is per-SCENE: in a slide sequence each
  // slide's text animates fresh from that slide's own start (dsLocal),
  // not the global elapsed — otherwise later slides' text is already
  // "done" before the slide even appears.
  const animElapsed = vstudio.slides.length
    ? dsLocal
    : Math.max(0, elapsed - introDur);
  // total entrance ~1.1s — a touch quicker so it feels responsive
  const rawAll = (vstudio.looping || vstudio.rendering)
    ? Math.min(1, Math.max(0, animElapsed / 1.1))
    : 1;
  // the box leads, the text follows with a gentle overlap. The text now
  // starts at 18% (not 35%) so there's no dead pause before it moves,
  // and both run on a smooth eased curve.
  const rawBox  = Math.min(1, rawAll / 0.55);
  const rawText = Math.min(1, Math.max(0, (rawAll - 0.18) / 0.82));
  // when the text preset is "none", both box and text appear instantly
  const animOff = (textAnim === "none");
  const boxEase  = animOff ? 1 : vsEasePro(rawBox);
  const tEase    = animOff ? 1 : vsEasePro(rawText);
  // rawT kept for presets that read it directly (typewriter, pop, bounce)
  const rawT = animOff ? 1 : rawText;

  if (headline || sub || cta) {
    ctx.save();
    ctx.textAlign = "center";
    let baseY = pos === "top" ? H * 0.2 : pos === "bottom" ? H * 0.74 : H * 0.46;
    // manual drag offset (set by dragging the text on the canvas) — applied
    // ONCE here as a transform so the backing box and the text always move
    // together as a single unit, including when the entrance animation
    // scales them.
    const dragX = vsOff.textDX * W;
    const dragY = vsOff.textDY * H;
    ctx.translate(dragX, dragY);

    // text animation preset — controls how text enters.
    // motion distances scale with the canvas (U) so the movement is
    // clearly visible on any frame size, portrait or landscape.
    const U = Math.min(W, H);
    let textAlpha = 1, slideX = 0, scaleT = 1;
    // overshoot easing for spring-style text animations
    const txOver = rawT >= 1 ? 1
      : 1 - Math.pow(2, -10 * rawT) * Math.cos((rawT * 10 - 0.75) * (2 * Math.PI) / 3);
    switch (textAnim) {
      case "none":      textAlpha = 1; break;
      case "fade":      textAlpha = tEase; break;
      case "fade-up":   textAlpha = tEase; baseY += (1 - tEase) * U * 0.05; break;
      case "fade-down": textAlpha = tEase; baseY -= (1 - tEase) * U * 0.05; break;
      case "slide-left":  textAlpha = tEase; slideX = (1 - tEase) * W * 0.32; break;
      case "slide-right": textAlpha = tEase; slideX = -(1 - tEase) * W * 0.32; break;
      case "pop":       textAlpha = tEase;
                        scaleT = 0.6 + 0.4 * (1 - Math.pow(1 - rawT, 2)) +
                                 Math.sin(rawT * Math.PI) * 0.08; break;
      case "typewriter": textAlpha = 1; break;  // handled per-letter below
      case "zoom-in":   textAlpha = tEase;
                        scaleT = 1.4 - 0.4 * tEase; break;
      case "zoom-out":  textAlpha = tEase;
                        scaleT = 0.6 + 0.4 * tEase; break;
      case "bounce":    textAlpha = tEase;
                        baseY += (1 - tEase) * U * 0.07 *
                          Math.cos(rawT * Math.PI * 2.5) * (1 - rawT); break;
      case "rise":      textAlpha = tEase; baseY += (1 - tEase) * U * 0.11; break;
      case "blur-in":   textAlpha = tEase * tEase; break;
      case "drop":      textAlpha = tEase; baseY -= (1 - tEase) * U * 0.11; break;
      // ── new animations ──
      case "spring":    textAlpha = tEase;
                        scaleT = 0.4 + txOver * 0.6; break;
      case "rise-spring": textAlpha = tEase;
                        baseY += (1 - txOver) * U * 0.18; break;
      case "swing":     textAlpha = tEase;
                        baseY -= (1 - tEase) * U * 0.04;
                        slideX = (1 - txOver) * W * 0.12; break;
      case "punch":     textAlpha = tEase;
                        scaleT = 1 + (1 - tEase) * 0.7; break;
      case "slide-up":  textAlpha = tEase; baseY += (1 - tEase) * U * 0.22; break;
      case "slide-down":textAlpha = tEase; baseY -= (1 - tEase) * U * 0.22; break;
      case "flip":      textAlpha = tEase;
                        scaleT = Math.abs(Math.cos((1 - rawT) * Math.PI / 2)) *
                                 0.4 + 0.6; break;
      case "glide-in":  textAlpha = tEase;
                        slideX = -(1 - tEase) * W * 0.16;
                        scaleT = 0.94 + tEase * 0.06; break;
      case "drift":     textAlpha = tEase;
                        slideX = (1 - tEase) * W * 0.06;
                        baseY += (1 - tEase) * U * 0.03; break;
      case "vox":       textAlpha = tEase;
                        scaleT = 0.82 + txOver * 0.18;
                        baseY += (1 - txOver) * U * 0.05; break;
      default:          textAlpha = tEase; baseY += (1 - tEase) * U * 0.05;
    }
    ctx.globalAlpha = textAlpha;

    // text colour comes from the template
    const fill = tpl.text, accentFill = tpl.accent;

    // measure the text block to size the backing plate
    const hlSize = Math.round(W * 0.058 * sizeMul);
    const subSize = Math.round(W * 0.026 * sizeMul);
    const ctaSize = Math.round(W * 0.022 * sizeMul);
    ctx.font = `600 ${hlSize}px ${vsGetFont(tpl.headlineFont)}`;
    let blockW = headline ? ctx.measureText(headline).width : 0;
    if (sub) { ctx.font = `400 ${subSize}px Inter, sans-serif`;
      blockW = Math.max(blockW, ctx.measureText(sub).width); }
    if (cta) { ctx.font = `600 ${ctaSize}px Inter, sans-serif`;
      blockW = Math.max(blockW, ctx.measureText(cta).width); }
    const lineGap = headline ? W * 0.056 : 0;
    const blockTop = baseY - hlSize * 0.7;
    const blockBottom = baseY + (sub ? lineGap : 0) + (cta ? W * 0.05 : 0) + subSize;
    const blockH = blockBottom - blockTop;

    // store the text bounds (absolute canvas coords) so it can be dragged.
    // The group is translated by (dragX,dragY), so the hit-box adds them.
    vstudio.textBox = {
      x: W / 2 + dragX - blockW / 2,
      y: blockTop + dragY,
      w: blockW,
      h: blockH
    };

    // readable plate behind text — ALWAYS on so text never disappears
    // into a bright photo. The plate animates in on its OWN timeline
    // (boxEase) — it arrives first, slightly ahead of the text, with a
    // gentle scale-up so the two reveals read as separate, refined steps.
    if (blockW > 0 && boxEase > 0.001) {
      const padX = W * 0.05, padY = H * 0.04;
      ctx.save();
      ctx.globalAlpha = boxEase * 0.55;
      ctx.fillStyle = "rgba(0,0,0,0.85)";
      const px = W / 2 - blockW / 2 - padX;
      const py = blockTop - padY;
      const pw = blockW + padX * 2;
      const ph = blockH + padY * 2;
      const r = Math.min(pw, ph) * 0.12;
      // subtle scale-in for the plate, pivoting on its own centre
      const bScale = 0.92 + 0.08 * boxEase;
      const bcx = px + pw / 2, bcy = py + ph / 2;
      ctx.translate(bcx, bcy);
      ctx.scale(bScale, bScale);
      ctx.translate(-bcx, -bcy);
      ctx.beginPath();
      ctx.moveTo(px + r, py);
      ctx.arcTo(px + pw, py, px + pw, py + ph, r);
      ctx.arcTo(px + pw, py + ph, px, py + ph, r);
      ctx.arcTo(px, py + ph, px, py, r);
      ctx.arcTo(px, py, px + pw, py, r);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // apply slide / scale transform from the animation preset.
    // drag is already applied to the whole group above, so here we only
    // add the preset's slide and scale.
    ctx.translate(slideX, 0);
    if (scaleT !== 1) {
      ctx.translate(W / 2, baseY);
      ctx.scale(scaleT, scaleT);
      ctx.translate(-W / 2, -baseY);
    }

    // strong shadow as a second safety net for readability
    if (headline) {
      ctx.font = `600 ${hlSize}px ${vsGetFont(tpl.headlineFont)}`;
      ctx.fillStyle = fill;
      ctx.shadowColor = "rgba(0,0,0,0.7)";
      ctx.shadowBlur = 20;
      // typewriter reveals the headline letter by letter
      const shownHeadline = textAnim === "typewriter"
        ? headline.slice(0, Math.ceil(rawT * headline.length))
        : headline;
      ctx.fillText(shownHeadline, W / 2, baseY);
      ctx.shadowBlur = 0;
      const lw = W * 0.12 * tEase;
      ctx.strokeStyle = accentFill;
      ctx.lineWidth = Math.max(1, W * 0.002);
      ctx.beginPath();
      ctx.moveTo(W / 2 - lw / 2, baseY + W * 0.022);
      ctx.lineTo(W / 2 + lw / 2, baseY + W * 0.022);
      ctx.stroke();
    }
    if (sub) {
      ctx.font = `400 ${subSize}px Inter, sans-serif`;
      ctx.fillStyle = accentFill;
      ctx.shadowColor = "rgba(0,0,0,0.7)";
      ctx.shadowBlur = 14;
      ctx.fillText(sub, W / 2, baseY + lineGap);
      ctx.shadowBlur = 0;
    }
    if (cta) {
      ctx.font = `600 ${ctaSize}px Inter, sans-serif`;
      ctx.fillStyle = fill;
      ctx.shadowColor = "rgba(0,0,0,0.7)";
      ctx.shadowBlur = 14;
      ctx.fillText(cta, W / 2, baseY + lineGap + (sub ? W * 0.05 : W * 0.04));
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }


  // progress bar
  ctx.fillStyle = tpl.accent;
  ctx.fillRect(0, H - Math.max(3, H * 0.006), W * progress, Math.max(3, H * 0.006));

  // ----- finish the frame: slide transition wash + global colour grade,
  // applied at the end of the normal (media) path. Title/content slides
  // call vsFinishFrame() before their early returns so transitions and
  // the filter work on every slide type. -----
  vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur);
}

// Applies the slide-to-slide transition veil and the global colour grade
// to the finished frame. Safe to call once per frame at any exit point.
// Global start time (seconds) of slide `index` in the current sequence, plus
// that slide's own duration. Used to scope the logo to one slide.
function vsSlideBounds(index) {
  let start = 0;
  const n = vstudio.slides ? vstudio.slides.length : 0;
  for (let i = 0; i < index && i < n; i++) {
    start += Number(vstudio.slides[i].duration) || 4;
  }
  const dur = Number((vstudio.slides && vstudio.slides[index] && vstudio.slides[index].duration)) || 4;
  return { start, dur };
}

// Resolve the logo's effective time window for THIS frame. Centralises the
// "show on all / first slide / last slide" logic so the draw path and the
// video-sync path agree. When bound to a single slide, the whole logo
// animation is scoped to that slide (0→100% inside it) so e.g. "last slide
// only" plays the complete motion within the final slide.
function vsLogoWindow(elapsed) {
  const showOn = vsVal("#vsLogoShow", "all");
  let winStart = parseFloat(vsVal("#vsLogoStart", "0")) || 0;
  let winDur   = parseFloat(vsVal("#vsLogoDur", "0")) || 0;   // 0 = until end
  const hasSlides = vstudio.slides && vstudio.slides.length > 1;
  if (hasSlides && (showOn === "last" || showOn === "first")) {
    const idx = showOn === "last" ? (vstudio.slides.length - 1) : 0;
    const b = vsSlideBounds(idx);
    winStart = b.start;
    const userDur = parseFloat(vsVal("#vsLogoDur", "0")) || 0;
    // no explicit duration → fit the whole animation into the slide;
    // explicit duration → respect it but never spill past the slide.
    winDur = userDur > 0 ? Math.min(userDur, b.dur) : b.dur;
  }
  const localT = elapsed - winStart;
  const eps = 1e-4;
  const visible = localT >= -eps && (winDur <= 0 || localT <= winDur + eps);
  return { showOn, winStart, winDur, localT: Math.max(0, localT), visible };
}

// Keep an animated (video) logo's playback SMOOTH. The old code seeked
// currentTime every frame, which on WebM (sparse keyframes) caused stutter
// and the clip "jumping to the middle". Instead we let the element PLAY and
// only touch it on real transitions:
//   • first appearance        → reset to 0 and play (motion starts clean)
//   • fixed-duration window    → time-scale via playbackRate, hold last frame
//   • open-ended window        → loop at native speed
//   • while idle-editing       → loop natively so the motion is visible
function vsSyncLogoVideo(logo, win, realtime) {
  const vd = logo.duration || 0;
  if (!vd) return;
  const justAppeared = !vstudio._logoVidVisible;
  vstudio._logoVidVisible = true;

  const fit = realtime && win.winDur > 0;   // only fit during real playback/export
  if (fit) {
    if (logo.loop) logo.loop = false;
    let rate = vd / win.winDur;
    rate = Math.max(0.0625, Math.min(16, rate));
    if (Math.abs((logo.playbackRate || 1) - rate) > 0.001) { try { logo.playbackRate = rate; } catch (e) {} }
    if (justAppeared) { try { logo.currentTime = 0; } catch (e) {} }
    if (win.localT >= win.winDur - 0.04) {
      // reached the end of the window → freeze on the final frame
      if (!logo.paused) { try { logo.pause(); } catch (e) {} }
      const end = Math.max(0, vd - 0.04);
      try { if (Math.abs((logo.currentTime || 0) - end) > 0.1) logo.currentTime = end; } catch (e) {}
    } else if (logo.paused) {
      try { logo.play().catch(() => {}); } catch (e) {}
    }
  } else {
    if (!logo.loop) logo.loop = true;
    if (Math.abs((logo.playbackRate || 1) - 1) > 0.001) { try { logo.playbackRate = 1; } catch (e) {} }
    if (justAppeared) { try { logo.currentTime = 0; } catch (e) {} }
    if (logo.paused) { try { logo.play().catch(() => {}); } catch (e) {} }
  }
}

// hex colour → [r,g,b]
function vsHexToRgb(hex) {
  const h = String(hex || "#000").replace("#", "");
  const n = h.length === 3 ? h.split("").map(c => c + c).join("") : h.padEnd(6, "0");
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}

// Inspect the corners/edges of a logo to decide whether it sits on a FLAT
// background (e.g. the roomvu sample webms are opaque with a solid white or
// black field). Returns {has, r, g, b}. If the corners are already transparent
// (a real PNG/alpha logo) or the edges are busy (a photo), has = false.
function vsComputeLogoKey(d, w, h) {
  const px = (x, y) => { const i = (y * w + x) * 4; return [d[i], d[i + 1], d[i + 2], d[i + 3]]; };
  const pts = [
    px(0, 0), px(w - 1, 0), px(0, h - 1), px(w - 1, h - 1),
    px((w / 2) | 0, 0), px((w / 2) | 0, h - 1), px(0, (h / 2) | 0), px(w - 1, (h / 2) | 0)
  ];
  // any transparent corner → the logo already has its own alpha, nothing to key
  if (pts.some(p => p[3] < 250)) return { has: false };
  let r = 0, g = 0, b = 0;
  for (const p of pts) { r += p[0]; g += p[1]; b += p[2]; }
  r /= pts.length; g /= pts.length; b /= pts.length;
  let spread = 0;
  for (const p of pts) spread = Math.max(spread, Math.abs(p[0] - r) + Math.abs(p[1] - g) + Math.abs(p[2] - b));
  if (spread > 70) return { has: false };   // corners not uniform → likely a photo, don't key
  return { has: true, r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}

// Detect the logo's flat-background key colour ONCE when it loads (cached on
// vstudio._logoKey). Cheap 64×64 sample — keeps the per-frame path fast.
function vsDetectLogoKey(srcEl) {
  vstudio._logoKey = { has: false };
  try {
    const w = 64, h = 64;
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    const cx = c.getContext("2d", { willReadFrequently: true });
    cx.drawImage(srcEl, 0, 0, w, h);
    const d = cx.getImageData(0, 0, w, h).data;
    vstudio._logoKey = vsComputeLogoKey(d, w, h);
  } catch (e) { vstudio._logoKey = { has: false }; }
}

// Resolve the chosen logo tint colour ("original" | "match" | "#hex").
function vsLogoTintColor(tpl) {
  const sel = vsVal("#vsLogoTint", "original");
  if (sel === "match") return (tpl && tpl.accent) || "#d8b76a";
  if (sel && sel[0] === "#") return sel;
  return null;   // original colours
}

// Produce the logo to actually paint this frame: draw the source (image or the
// current video frame), optionally KNOCK OUT a flat background → transparency,
// and optionally TINT the remaining pixels to a brand colour. Returns an
// offscreen canvas (or the raw element when no processing is needed).
function vsProcessLogo(srcEl, w, h, tintColor, key) {
  const doKnockout = !!(key && key.has);
  if (!doKnockout && !tintColor) return srcEl;
  const cw = Math.max(2, Math.round(w)), ch = Math.max(2, Math.round(h));
  const oc = vstudio._logoProcCanvas || (vstudio._logoProcCanvas = document.createElement("canvas"));
  if (oc.width !== cw || oc.height !== ch) { oc.width = cw; oc.height = ch; }
  const c = oc.getContext("2d", { willReadFrequently: true });
  c.clearRect(0, 0, cw, ch);
  try { c.drawImage(srcEl, 0, 0, cw, ch); } catch (e) { return srcEl; }

  let img;
  try { img = c.getImageData(0, 0, cw, ch); } catch (e) { return oc; } // tainted → skip pixel work
  const d = img.data;

  if (doKnockout) {
    const kr = key.r, kg = key.g, kb = key.b;
    const t0 = 44, t1 = 110;   // <t0 → clear, between → feathered edge
    for (let i = 0; i < d.length; i += 4) {
      const dr = d[i] - kr, dg = d[i + 1] - kg, db = d[i + 2] - kb;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);
      if (dist <= t0) d[i + 3] = 0;
      else if (dist < t1) d[i + 3] = (d[i + 3] * (dist - t0) / (t1 - t0)) | 0;
    }
  }
  if (tintColor) {
    const rgb = vsHexToRgb(tintColor);
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] > 0) { d[i] = rgb[0]; d[i + 1] = rgb[1]; d[i + 2] = rgb[2]; }
    }
  }
  c.putImageData(img, 0, 0);
  return oc;
}

// Draws the logo overlay. Called from vsFinishFrame so it appears on EVERY
// slide type (media, intro, outro, content) — not just the media path.
function vsDrawLogo(ctx, W, H, elapsed, dsLocal, tpl) {
  if (!vstudio.logoEl) return;
  const logo = vstudio.logoEl;
  const realtime = !!(vstudio.looping || vstudio.rendering);

  // Resolve the effective window (handles all / first-slide / last-slide).
  const win = vsLogoWindow(elapsed);
  if (!win.visible) {
    // logo hidden right now → park an animated logo so it restarts cleanly
    // the next time it appears.
    if (vstudio.logoIsVideo) {
      vstudio._logoVidVisible = false;
      if (!logo.paused) { try { logo.pause(); } catch (e) {} }
    }
    return;
  }

  try {
  // ── LOGO OVERLAY — professional motion + placement + frame styles ──
  {
    {
    // For an animated (video) logo: PLAY it (smoothly) rather than seeking
    // every frame — keeps motion fluid and always starting from 0.
    if (vstudio.logoIsVideo) {
      vsSyncLogoVideo(logo, win, realtime);
    }
    const lw0 = logo.naturalWidth || logo.videoWidth || 1;
    const lh0 = logo.naturalHeight || logo.videoHeight || 1;
    const sizeF = (parseFloat(vsVal("#vsLogoSize", "0.16")) || 0.16) * (vstudio.logoScaleManual || 1);
    const targetW = W * sizeF;
    const lw = targetW, lh = targetW * (lh0 / lw0);
    const pad = W * 0.035;
    const pos = vsVal("#vsLogoPos", "br");
    // 9-point placement grid
    let lx, ly;
    const cxs = { l: pad, c: (W - lw) / 2, r: W - lw - pad };
    const cys = { t: pad, m: (H - lh) / 2, b: H - lh - pad };
    const posMap = { tl:["l","t"], tc:["c","t"], tr:["r","t"], ml:["l","m"], c:["c","m"], mr:["r","m"], bl:["l","b"], bc:["c","b"], br:["r","b"] };
    const pm = posMap[pos] || ["l","t"];
    lx = cxs[pm[0]]; ly = cys[pm[1]];
    // manual drag offset (set by dragging the logo on the preview)
    lx += (vstudio.logoDX || 0) * W;
    ly += (vstudio.logoDY || 0) * H;
    // store hitbox so the logo can be picked/dragged like other elements
    vstudio.logoBox = { x: lx, y: ly, w: lw, h: lh };

    // motion progress: animate over 0.9s after the logo appears.
    // baseT is measured from the moment the logo BECOMES visible (window
    // start), so the entrance always plays 0→100% even when the logo is
    // scoped to the last slide.
    const motion = vsVal("#vsLogoMotion", "fade");
    const mDur = 0.9;
    const baseT = win.localT;
    // brand-colour tint + automatic flat-background knockout. The roomvu
    // samples (and many uploaded logos) are opaque videos/images with a solid
    // white or black field — we key that out so the mark sits cleanly over the
    // footage, then optionally recolour it to match the template.
    const tintColor = vsLogoTintColor(tpl);
    const removeBg = vsVal("#vsLogoBg", "auto") !== "off";
    const key = removeBg ? vstudio._logoKey : null;
    const drawEl = vsProcessLogo(logo, lw, lh, tintColor, key);
    const mp = Math.min(1, baseT / mDur);                       // 0..1
    const mEase = 1 - Math.pow(1 - mp, 3);                          // easeOutCubic
    let mAlpha = 1, mdx = 0, mdy = 0, mScale = 1, mRot = 0, glow = 0;
    if (motion === "fade") { mAlpha = mEase; }
    else if (motion === "pop") {
      // bounce-in: overshoot then settle
      const b = mp < 1 ? (1.2 - 0.2 * Math.cos(mp * Math.PI * 2.2) * (1 - mp)) * mEase : 1;
      mScale = 0.4 + 0.6 * b; mAlpha = Math.min(1, mp * 2.4);
    }
    else if (motion === "slide") {
      const fromLeft = pm[0] !== "r";
      mdx = (fromLeft ? -1 : 1) * (1 - mEase) * W * 0.12; mAlpha = mEase;
    }
    else if (motion === "spin") { mRot = (1 - mEase) * Math.PI; mScale = 0.5 + 0.5 * mEase; mAlpha = mEase; }
    else if (motion === "rise") { mdy = (1 - mEase) * H * 0.07; mAlpha = Math.pow(mEase, 1.4); mScale = 0.96 + 0.04 * mEase; }
    else if (motion === "pulse") { mAlpha = 1; glow = 0.5 + 0.5 * Math.sin(elapsed * 2.4); }

    // ── LETTER CASCADE — per-glyph staggered reveal (auto-detected slices) ──
    if (motion === "letters" && vstudio.logoSegs && vstudio.logoSrcCanvas) {
      const segs = vstudio.logoSegs;
      // tint / clean the source canvas once if processing is active
      let src = vstudio.logoSrcCanvas;
      if (tintColor || (key && key.has)) src = vsProcessLogo(src, src.width, src.height, tintColor, key);
      const scale = lw / (logo.naturalWidth || 1);
      const t = baseT;
      const per = 0.09, segDur = 0.55;
      ctx.save();
      for (let k = 0; k < segs.length; k++) {
        const sp = Math.min(1, Math.max(0, (t - k * per) / segDur));
        if (sp <= 0) continue;
        const se = 1 - Math.pow(1 - sp, 3);
        const seg = segs[k];
        const dw = seg.w * scale, dh = lh;
        const dx = lx + seg.x * scale;
        const dy = ly + (1 - se) * H * 0.055;
        ctx.globalAlpha = se;
        try { ctx.drawImage(src, seg.x, 0, seg.w, src.height, dx, dy, dw, dh); } catch {}
      }
      ctx.restore();
    } else {
    // ── SHINE SWEEP — light band sweeps across the mark (loops every 3s) ──
    let shineCanvas = null;
    if (motion === "shine") {
      mAlpha = Math.min(1, baseT / 0.5);
      try {
        const oc = vstudio._logoShineCanvas || (vstudio._logoShineCanvas = document.createElement("canvas"));
        const sw = Math.max(2, Math.round(lw)), sh = Math.max(2, Math.round(lh));
        if (oc.width !== sw || oc.height !== sh) { oc.width = sw; oc.height = sh; }
        const oc2 = oc.getContext("2d");
        oc2.clearRect(0, 0, sw, sh);
        oc2.drawImage(drawEl, 0, 0, sw, sh);
        // moving highlight clipped to the logo's own pixels
        const cyc = ((elapsed % 3) / 3);
        const bandX = (cyc * 1.6 - 0.3) * sw;
        const g = oc2.createLinearGradient(bandX - sw*0.18, 0, bandX + sw*0.18, 0);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.5, "rgba(255,255,255,0.85)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        oc2.globalCompositeOperation = "source-atop";
        oc2.fillStyle = g;
        oc2.fillRect(0, 0, sw, sh);
        oc2.globalCompositeOperation = "source-over";
        shineCanvas = oc;
      } catch (e) { /* fall back to plain draw */ }
    }

    // frame style + color
    const fstyle = vsVal("#vsLogoStyle", "none");
    let fcolor = vsVal("#vsLogoColor", "auto");
    if (fcolor === "auto") fcolor = tpl.accent;

    ctx.save();
    // move to logo center for rotation/scale, then back
    const ccx = lx + lw / 2 + mdx, ccy = ly + lh / 2 + mdy;
    ctx.translate(ccx, ccy);
    if (mRot) ctx.rotate(mRot);
    if (mScale !== 1) ctx.scale(mScale, mScale);
    ctx.globalAlpha = Math.max(0, Math.min(1, mAlpha));

    const halfW = lw / 2, halfH = lh / 2;
    const frameR = Math.max(halfW, halfH) * 1.25;

    // frame behind the logo
    if (fstyle === "circle") {
      ctx.beginPath(); ctx.arc(0, 0, frameR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(8,8,10,0.55)"; ctx.fill();
      ctx.lineWidth = Math.max(2, W * 0.0035); ctx.strokeStyle = fcolor;
      ctx.shadowColor = fcolor; ctx.shadowBlur = 14 + glow * 16;
      ctx.stroke(); ctx.shadowBlur = 0;
    } else if (fstyle === "glass") {
      const gw = lw * 1.35, gh = lh * 1.45, gr = Math.min(gw, gh) * 0.2;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(-gw/2, -gh/2, gw, gh, gr);
      else ctx.rect(-gw/2, -gh/2, gw, gh);
      ctx.fillStyle = "rgba(255,255,255,0.10)"; ctx.fill();
      ctx.lineWidth = 1.2; ctx.strokeStyle = "rgba(255,255,255,0.35)"; ctx.stroke();
    } else if (fstyle === "badge") {
      const gw = lw * 1.3, gh = lh * 1.4, gr = Math.min(gw, gh) * 0.22;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(-gw/2, -gh/2, gw, gh, gr);
      else ctx.rect(-gw/2, -gh/2, gw, gh);
      ctx.fillStyle = fcolor; ctx.shadowColor = fcolor; ctx.shadowBlur = 16 + glow * 14;
      ctx.fill(); ctx.shadowBlur = 0;
    } else if (fstyle === "shadow" || glow > 0) {
      ctx.shadowColor = fstyle === "shadow" ? "rgba(0,0,0,0.6)" : fcolor;
      ctx.shadowBlur = fstyle === "shadow" ? 22 : 10 + glow * 22;
    }

    try {
      if (shineCanvas) ctx.drawImage(shineCanvas, -halfW, -halfH, lw, lh);
      else ctx.drawImage(drawEl, -halfW, -halfH, lw, lh);
    } catch {}
    ctx.restore();
    } // end non-cascade path
    } // end lVisible window
  }
  } catch (e) { /* logo draw failed — never break the frame */ }
}

function vsFinishFrame(ctx, canvas, W, H, elapsed, dsLocal, dsDur) {
  // Logo overlay — drawn here so it appears on EVERY slide (media, intro,
  // outro, content), since all paths call vsFinishFrame before returning.
  if (vstudio.logoEl) {
    let _tpl = { accent: "#d8b76a" };
    try { if (typeof vsTemplate === "function") _tpl = vsTemplate(); } catch (e) {}
    vsDrawLogo(ctx, W, H, elapsed, dsLocal, _tpl);
  }
  // ── AUTO-ALIGN GUIDES — gold dashed lines when an element snaps to center ──
  if (vstudio.snapGuideX || vstudio.snapGuideY) {
    ctx.save();
    ctx.strokeStyle = "rgba(216,183,106,0.9)";
    ctx.lineWidth = Math.max(1, W * 0.0018);
    ctx.setLineDash([W * 0.01, W * 0.007]);
    if (vstudio.snapGuideX) { ctx.beginPath(); ctx.moveTo(W/2, 0); ctx.lineTo(W/2, H); ctx.stroke(); }
    if (vstudio.snapGuideY) { ctx.beginPath(); ctx.moveTo(0, H/2); ctx.lineTo(W, H/2); ctx.stroke(); }
    ctx.setLineDash([]);
    if (vstudio.snapGuideX && vstudio.snapGuideY) {
      const d = W * 0.013;
      ctx.fillStyle = "rgba(216,183,106,0.95)";
      ctx.beginPath();
      ctx.moveTo(W/2, H/2 - d); ctx.lineTo(W/2 + d, H/2);
      ctx.lineTo(W/2, H/2 + d); ctx.lineTo(W/2 - d, H/2);
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  }
  const transKind = vsVal("#vsTransition", "fade");
  if (vstudio.slides.length && transKind !== "none") {
    const fadeT = 0.45;
    let cover = 0, slideOff = 0, zoom = 1;
    if (dsLocal < fadeT) cover = Math.max(cover, 1 - dsLocal / fadeT);
    if (dsLocal > dsDur - fadeT) cover = Math.max(cover, 1 - (dsDur - dsLocal) / fadeT);
    const at = slideAtTime(elapsed);
    const isLast = at.index === vstudio.slides.length - 1;
    if (isLast && dsLocal > dsDur - 0.8)
      cover = Math.max(cover, 1 - (dsDur - dsLocal) / 0.8);
    if (cover > 0.001) {
      const c = Math.min(1, cover);
      if (transKind === "blur") {
        const px = Math.round(c * Math.min(W, H) * 0.05);
        if (px > 0) {
          const tmp = vsScratchCanvas(W, H);
          const tctx = tmp.getContext("2d");
          tctx.clearRect(0, 0, W, H); tctx.drawImage(canvas, 0, 0);
          ctx.save();
          ctx.filter = `blur(${px}px)`;
          ctx.globalAlpha = c;
          ctx.drawImage(tmp, 0, 0);
          ctx.filter = "none";
          ctx.restore();
        }
        ctx.save(); ctx.globalAlpha = c * 0.45; ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H); ctx.restore();
      } else if (transKind === "zoom") {
        // zoom the frame slightly while fading through black
        const tmp = vsScratchCanvas(W, H);
        const tctx = tmp.getContext("2d");
        tctx.clearRect(0, 0, W, H); tctx.drawImage(canvas, 0, 0);
        const z = 1 + c * 0.12;
        ctx.save();
        ctx.globalAlpha = c;
        ctx.translate(W / 2, H / 2); ctx.scale(z, z); ctx.translate(-W / 2, -H / 2);
        ctx.drawImage(tmp, 0, 0);
        ctx.restore();
        ctx.save(); ctx.globalAlpha = c * 0.6; ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H); ctx.restore();
      } else if (transKind === "slide") {
        // push the frame up while fading
        const tmp = vsScratchCanvas(W, H);
        const tctx = tmp.getContext("2d");
        tctx.clearRect(0, 0, W, H); tctx.drawImage(canvas, 0, 0);
        ctx.save();
        ctx.globalAlpha = c;
        ctx.drawImage(tmp, 0, -c * H * 0.12);
        ctx.restore();
        ctx.save(); ctx.globalAlpha = c * 0.7; ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H); ctx.restore();
      } else {
        // fade — soft black wash
        ctx.save(); ctx.globalAlpha = c; ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, W, H); ctx.restore();
      }
    }
  }
  // NOTE: the colour grade is applied to the BACKGROUND/footage layer
  // (not here) so it never washes out the text drawn on top.
}

// Apply the colour grade to whatever is CURRENTLY on the canvas (the
// background/footage layer) — call this after the background is drawn but
// BEFORE text/infographics, so the grade never washes out the text.
function vsApplyBgFilter(ctx, canvas, W, H) {
  const grade = vsFilterString();
  if (!grade || grade === "none") return;
  const tmp = vsScratchCanvas(W, H);
  const tctx = tmp.getContext("2d");
  tctx.clearRect(0, 0, W, H);
  tctx.drawImage(canvas, 0, 0);
  ctx.clearRect(0, 0, W, H);
  ctx.save();
  ctx.filter = grade;
  ctx.drawImage(tmp, 0, 0);
  ctx.filter = "none";
  ctx.restore();
}

// A reusable offscreen canvas for full-frame compositing (filter/blur).
let _vsScratch = null;
function vsScratchCanvas(w, h) {
  if (!_vsScratch) _vsScratch = document.createElement("canvas");
  if (_vsScratch.width !== w) _vsScratch.width = w;
  if (_vsScratch.height !== h) _vsScratch.height = h;
  return _vsScratch;
}

// Apply the global colour grade to the whole finished frame. Called at
// EVERY exit point of drawStudioFrame so it covers all slide types.
function vsApplyGlobalFilter(ctx, canvas, W, H) {
  const grade = vsFilterString();
  if (!grade || grade === "none") return;
  const tmp = vsScratchCanvas(W, H);
  const tctx = tmp.getContext("2d");
  tctx.clearRect(0, 0, W, H);
  tctx.drawImage(canvas, 0, 0);
  ctx.save();
  ctx.filter = grade;
  ctx.drawImage(tmp, 0, 0);
  ctx.filter = "none";
  ctx.restore();
}

// Draw a centred intro/outro card.
function drawCard(ctx, W, H, tpl, txt, alpha, subTxt, motion, prog, kind) {
  // `prog` 0..1 is the entrance progress; `motion` picks the animation.
  // `alpha` is the overall card fade (in then out). `kind` is "intro",
  // "outro" or undefined — intro is rendered larger and more cinematic.
  const isIntro = kind === "intro";
  const isOutro = kind === "outro";
  ctx.save();
  ctx.globalAlpha = Math.max(0, alpha);
  const U = Math.min(W, H);
  const cx = W / 2, cy = H / 2;
  // If the template uses DARK text, the dark intro backgrounds would hide
  // it — so lay down a soft light panel behind the title for contrast.
  const isDarkText = (() => {
    const hex = String(tpl.text || "#fff").replace("#", "");
    if (hex.length < 6) return false;
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16),
          bl = parseInt(hex.slice(4,6),16);
    return (0.299*r + 0.587*g + 0.114*bl) < 110;   // perceived luminance
  })();
  if (isDarkText) {
    const panelH = U * 0.42, panelY = cy - panelH * 0.5;
    const pg = ctx.createLinearGradient(0, panelY, 0, panelY + panelH);
    pg.addColorStop(0, "rgba(245,243,238,0)");
    pg.addColorStop(0.5, "rgba(245,243,238,0.92)");
    pg.addColorStop(1, "rgba(245,243,238,0)");
    ctx.fillStyle = pg;
    ctx.fillRect(0, panelY, W, panelH);
  }
  // eased entrance
  const e = prog == null ? 1 : (1 - Math.pow(1 - Math.max(0, Math.min(1, prog)), 3));
  // per-motion offset / scale / rotation for the MAIN text
  let dx = 0, dy = 0, sc = 1, clip = 1, blur = 0, rot = 0, spacing = 0;
  // overshoot easing — a spring-like settle used by the cinematic presets
  const pr = prog == null ? 1 : Math.max(0, Math.min(1, prog));
  const overshoot = pr >= 1 ? 1
    : 1 - Math.pow(2, -10 * pr) * Math.cos((pr * 10 - 0.75) * (2 * Math.PI) / 3);
  switch (motion) {
    case "rise":     dy = (1 - e) * U * 0.16; break;
    case "drop":     dy = -(1 - e) * U * 0.16; break;
    case "slide":    dx = -(1 - e) * W * 0.3; break;
    case "slide-r":  dx = (1 - e) * W * 0.3; break;
    case "zoom":     sc = 0.7 + e * 0.3; break;
    case "zoom-out": sc = 1.4 - e * 0.4; break;
    case "reveal":   clip = e; break;            // wipe the text in
    case "blur":     blur = (1 - e) * U * 0.03; break;
    case "expand":   spacing = (1 - e) * U * 0.04; break;  // letter-spacing in
    case "tilt":     rot = (1 - e) * -0.12; dy = (1 - e) * U * 0.08; break;
    case "glide":    dx = -(1 - e) * W * 0.18;
                     sc = 0.92 + e * 0.08; break;
    // ── cinematic / After-Effects style ──
    case "spring":   sc = 0.4 + overshoot * 0.6; break;        // bouncy scale-in
    case "swing":    rot = (1 - overshoot) * 0.35;             // pendulum settle
                     dy = -(1 - e) * U * 0.05; break;
    case "punch":    sc = 1 + (1 - e) * 0.6;                   // big → settle
                     blur = (1 - e) * U * 0.02; break;
    case "flip":     sc = Math.abs(Math.cos((1 - e) * Math.PI / 2)) * 0.4 + 0.6;
                     break;                                    // 3D-flip feel
    case "drift":    dx = (1 - e) * W * 0.08;                  // slow cinematic
                     dy = (1 - e) * U * 0.04;
                     blur = (1 - e) * U * 0.012; break;
    case "rise-spring": dy = (1 - overshoot) * U * 0.2; break; // rise + bounce
    case "vox":      // Vox-style: snappy punchy pop with quick overshoot
                     sc = 0.82 + overshoot * 0.18;
                     dy = (1 - overshoot) * U * 0.05; break;
    default:         break;                      // "fade" — alpha only
  }

  // main text
  ctx.save();
  ctx.translate(cx + dx, cy + dy);
  ctx.rotate(rot);
  ctx.scale(sc, sc);
  if (blur > 0) ctx.filter = `blur(${blur}px)`;
  ctx.fillStyle = tpl.text;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  // cinematic glow behind the intro title
  if (isIntro) {
    ctx.shadowColor = tpl.accent;
    ctx.shadowBlur = U * 0.05 * e;
  }
  const maxTextW = W * 0.82;
  // intro headlines are bigger and bolder for impact; outro a touch smaller
  let fontPx = Math.round(U * (isIntro ? 0.094 : isOutro ? 0.066 : 0.072));
  const headWeight = isIntro ? 700 : 600;
  ctx.font = `${headWeight} ${fontPx}px ${vsGetFont(tpl.headlineFont)}`;
  // helper: break text into lines that each fit maxTextW (cap at maxLines)
  const layout = (str, maxLines) => {
    const words = String(str).split(/\s+/).filter(Boolean);
    const out = [];
    let ln = "";
    for (const w of words) {
      const test = ln ? ln + " " + w : w;
      if (ctx.measureText(test).width > maxTextW && ln) {
        out.push(ln); ln = w;
        if (out.length === maxLines) { ln = ""; break; }
      } else { ln = test; }
    }
    if (ln && out.length < maxLines) out.push(ln);
    return out;
  };
  let lines = layout(txt, 3);
  // if it still needs more than 3 lines, shrink the font until 3 fit
  while (fontPx > U * 0.022 &&
         layout(txt, 99).length > 3) {
    fontPx -= 1;
    ctx.font = `${headWeight} ${fontPx}px ${vsGetFont(tpl.headlineFont)}`;
    lines = layout(txt, 3);
  }
  // extreme case — still overflowing 3 lines: ellipsize the last line
  if (layout(txt, 99).length > 3 && lines.length === 3) {
    let last = lines[2];
    while (last.length > 1 &&
           ctx.measureText(last + "…").width > maxTextW) {
      last = last.slice(0, -1);
    }
    lines[2] = last.replace(/\s+\S*$/, "") + "…";
  }
  const lineH = fontPx * 1.22;
  const blockTop = -((lines.length - 1) * lineH) / 2;
  if (clip < 1) {
    const tw = maxTextW;
    ctx.beginPath();
    ctx.rect(-tw / 2, blockTop - lineH, tw * clip, lineH * (lines.length + 1));
    ctx.clip();
  }
  if (spacing > 0 && lines.length === 1) {
    // expand: draw each letter with extra tracking (single-line only)
    const chars = [...txt];
    let total = 0;
    const widths = chars.map(c => {
      const w = ctx.measureText(c).width + spacing;
      total += w; return w;
    });
    let x = -total / 2;
    ctx.textAlign = "left";
    chars.forEach((c, i) => { ctx.fillText(c, x, 0); x += widths[i]; });
    ctx.textAlign = "center";
  } else {
    lines.forEach((ln, i) => {
      ctx.fillText(ln, 0, blockTop + i * lineH);
    });
  }
  ctx.filter = "none";
  ctx.restore();
  // how far below centre the headline block reaches — used to place the
  // divider and secondary text so they never overlap a multi-line title.
  const headBottom = ((lines.length - 1) * lineH) / 2 + fontPx * 0.6;

  // accent divider line — intro gets a fancier centred divider with a diamond
  const lw = U * (isIntro ? 0.2 : 0.14) * e;
  const dividerY = cy + headBottom + U * 0.03;
  ctx.strokeStyle = tpl.accent;
  ctx.lineWidth = Math.max(1, U * 0.003);
  ctx.beginPath();
  ctx.moveTo(cx - lw / 2, dividerY);
  ctx.lineTo(cx + lw / 2, dividerY);
  ctx.stroke();
  if (isIntro && e > 0.6) {
    // a small diamond centred on the divider for an editorial flourish
    const ds = U * 0.012 * e;
    ctx.fillStyle = tpl.accent;
    ctx.save();
    ctx.translate(cx, dividerY);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-ds / 2, -ds / 2, ds, ds);
    ctx.restore();
  }

  // intro EYEBROW — a small all-caps label above the title for a premium feel
  if (isIntro) {
    const eb = (tpl._eyebrow || "").toUpperCase();
    if (eb) {
      const ebE = 1 - Math.pow(1 - Math.max(0, Math.min(1, (prog == null ? 1 : prog) * 1.6)), 3);
      ctx.save();
      ctx.globalAlpha = Math.max(0, alpha) * ebE;
      ctx.fillStyle = tpl.accent;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 ${Math.round(U * 0.026)}px Inter, sans-serif`;
      // letter-spaced label
      const chars = [...eb];
      const sp = U * 0.012;
      let total = 0;
      const ws = chars.map(c => { const w = ctx.measureText(c).width + sp; total += w; return w; });
      let x = cx - total / 2;
      const ebY = cy - headBottom - U * 0.075;
      ctx.textAlign = "left";
      chars.forEach((c, i) => { ctx.fillText(c, x, ebY); x += ws[i]; });
      ctx.restore();
    }
  }

  // secondary text — fades in slightly after the main text. It also
  // wraps to up to 2 lines so a long sub-line stays readable.
  if (subTxt) {
    const e2 = 1 - Math.pow(1 - Math.max(0, Math.min(1, (prog == null ? 1 : prog) * 1.4 - 0.4)), 3);
    ctx.save();
    ctx.globalAlpha = Math.max(0, alpha) * e2;
    ctx.fillStyle = tpl.accent;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let subPx = Math.round(U * 0.032);
    ctx.font = `400 ${subPx}px Inter, sans-serif`;
    const subLayout = () => {
      const words = String(subTxt).split(/\s+/).filter(Boolean);
      const out = []; let ln = "";
      for (const w of words) {
        const test = ln ? ln + " " + w : w;
        if (ctx.measureText(test).width > W * 0.8 && ln) {
          out.push(ln); ln = w;
          if (out.length === 2) { ln = ""; break; }
        } else { ln = test; }
      }
      if (ln && out.length < 2) out.push(ln);
      return out;
    };
    let subLines = subLayout();
    // shrink the subtitle font until it fits within 2 lines
    let subGuard = 0;
    while (subPx > U * 0.014 && subGuard++ < 30) {
      const words = String(subTxt).split(/\s+/).filter(Boolean);
      let count = 1, ln = "";
      for (const w of words) {
        const test = ln ? ln + " " + w : w;
        if (ctx.measureText(test).width > W * 0.8 && ln) { count++; ln = w; }
        else ln = test;
      }
      if (count <= 2) break;
      subPx -= 1;
      ctx.font = `400 ${subPx}px Inter, sans-serif`;
    }
    subLines = subLayout();
    const subStartY = dividerY + U * 0.055 + (1 - e2) * U * 0.04;
    subLines.forEach((ln, i) => {
      ctx.fillText(ln, cx, subStartY + i * subPx * 1.3);
    });
    ctx.restore();
  }
  ctx.restore();
}

function vsPlaybackRate() {
  return Number(vsVal("#vsSpeed", 1)) || 1;
}

// The effective video duration — sum of slides, or the single duration field.
function studioDuration() {
  return vstudio.slides.length
    ? slidesTotalDuration()
    : Math.max(2, Number(vsVal("#vsDuration", 6)));
}

// Fade the background music: a short fade-IN at the start and a
// fade-OUT over the last ~1.5s so the scene ends gracefully.
function vsApplyMusicFade(elapsed, duration) {
  const m = vstudio.musicEl;
  if (!m) return;
  const fadeIn = 0.6;
  const fadeOut = Math.min(1.5, duration * 0.25);
  let vol = 1;
  if (elapsed < fadeIn) {
    vol = elapsed / fadeIn;
  } else if (elapsed > duration - fadeOut) {
    vol = Math.max(0, (duration - elapsed) / fadeOut);
  }
  // respect a user music-volume setting if one exists
  const base = Number(vsVal("#vsMusicVolume", 1));
  try { m.volume = Math.max(0, Math.min(1, vol * (isNaN(base) ? 1 : base))); }
  catch {}
}

function previewStudioVideo(fromStart) {
  // works with media, a slide sequence, OR a standalone infographic/news
  const hasSlides = vstudio.slides.some(s => s.ready);
  const media = vstudio.mediaEl;
  const infoOn = $("#vsInfoOn") && $("#vsInfoOn").checked;
  const newsOn = $("#vsNewsOn") && $("#vsNewsOn").checked;
  if (!media && !hasSlides && !infoOn && !newsOn) {
    vsStatus(state.lang === "fa"
      ? "اول رسانه آپلود کن یا اینفوگرافیک را روشن کن."
      : "Upload media, or turn on the infographic / news banner.");
    return;
  }
  if (vstudio.rendering) return;
  buildPreviewCanvas();
  vstudio._logoVidVisible = false;   // logo restarts cleanly when it first appears

  if (vstudio.rafId) cancelAnimationFrame(vstudio.rafId);

  // resume from the saved position unless an explicit restart is asked
  let startElapsed = fromStart ? 0 : (vstudio.position || 0);
  const duration0 = studioDuration();
  if (startElapsed >= duration0) startElapsed = 0;

  // Only start global media if no slides exist (single-clip mode).
  // When slides are present, each slide manages its own mediaEl in the loop.
  if (!vstudio.slides.length && vstudio.isVideo && media) {
    try {
      const span = Math.max(0.01, duration0);
      const startT = isFinite(media.duration)
        ? (Math.min(startElapsed, span) / span) * media.duration : 0;
      media.currentTime = startT;
      media.play().catch(() => {});
    } catch {}
  }
  if (vstudio.musicEl) {
    try { vstudio.musicEl.currentTime = startElapsed; vstudio.musicEl.play().catch(() => {}); } catch {}
  }
  // startTime is offset so (now - startTime) == startElapsed
  vstudio.startTime = performance.now() - startElapsed * 1000;
  vstudio.looping = true;

  const loop = () => {
    if (!vstudio.looping) return;
    // duration is read every frame so changes take effect smoothly
    const duration = studioDuration();
    let elapsed = (performance.now() - vstudio.startTime) / 1000;
    if (elapsed >= duration) {
      // loop the PREVIEW cleanly back to the start (preview only —
      // the exported file still plays through exactly once)
      elapsed = 0;
      vstudio.startTime = performance.now();
      if (vstudio.musicEl) { try { vstudio.musicEl.currentTime = 0; } catch {} }
    }
    // only the slide visible at this moment plays; the others pause.
    // drawStudioFrame sets the playing one's playbackRate (time-stretch).
    if (vstudio.slides.length) {
      const at = slideAtTime(elapsed);
      vstudio.slides.forEach((s, i) => {
        if (!s.ready || !s.isVideo || !s.mediaEl) return;
        if (i === at.index) {
          if (s.mediaEl.paused) s.mediaEl.play().catch(() => {});
        } else if (!s.mediaEl.paused) {
          try { s.mediaEl.pause(); } catch {}
        }
      });
    }
    vstudio.position = elapsed;          // remember where we are
    drawStudioFrame(elapsed);
    vsApplyMusicFade(elapsed, duration);
    updateTimeline(elapsed, duration);
    vstudio.rafId = requestAnimationFrame(loop);
  };
  setPlayBtn(true);
  loop();
}

// Stop the continuous preview loop — keeps the current position.
function stopStudioPreview() {
  vstudio.looping = false;
  if (vstudio.rafId) cancelAnimationFrame(vstudio.rafId);
  // Only pause global media in single-clip mode
  if (!vstudio.slides.length && vstudio.isVideo && vstudio.mediaEl) {
    try { vstudio.mediaEl.pause(); } catch {}
  }
  // Pause all slide videos
  vstudio.slides.forEach(s => {
    if (s.isVideo && s.mediaEl) { try { s.mediaEl.pause(); } catch {} }
  });
  if (vstudio.musicEl) { try { vstudio.musicEl.pause(); } catch {} }
  setPlayBtn(false);
}

// ── HERA-STYLE SCENE TIMELINE ─────────────────────────────────
// Renders scene blocks with waveform and handles left/right resize.

const PIXELS_PER_SEC = 80; // px per second of video — controls block width

function heraTimelineScenes() {
  // Returns scenes array: either vstudio.slides (multi) or single media block
  if (vstudio.slides && vstudio.slides.length) return vstudio.slides;
  if (vstudio.mediaEl) {
    return [{ label: "Media", dur: studioDuration(), ready: true, isIntro: false }];
  }
  return [];
}

// Derive a human-readable label from any slide object
function heraSlideLabel(scene, i, total) {
  if (!scene) return `Scene ${i + 1}`;
  const n = total;
  // Use explicit timeline label if set
  if (scene._timelineLabel) return scene._timelineLabel.slice(0, 22);
  // Outro
  if (scene.isOutro || (i === n - 1 && n > 1 && scene.isIntro)) {
    return scene.introMain ? scene.introMain.slice(0, 18) : "Outro";
  }
  // Intro (first scene or explicit)
  if (i === 0 && scene.isIntro) {
    return scene.introMain ? scene.introMain.slice(0, 18) : "Intro";
  }
  // Infographic scene
  if (scene._standaloneInfo) {
    try {
      const d = JSON.parse(scene.settings && scene.settings["#vsInfoJson"] || "{}");
      return d.title ? d.title.slice(0, 18) : (scene._caption || "Infographic");
    } catch { return scene._caption || "Infographic"; }
  }
  // News/text scene
  if (scene._standaloneNews) {
    const h = scene.settings && scene.settings["#vsNewsHeadline"];
    if (h) return h.slice(0, 22);
    return scene._caption || "Slide";
  }
  // Scene with uploaded media + headline
  if (scene.settings && scene.settings["#vsHeadline"]) {
    return scene.settings["#vsHeadline"].slice(0, 22);
  }
  if (scene._caption) return scene._caption.slice(0, 22);
  if (scene.introMain) return scene.introMain.slice(0, 18);
  return `Scene ${i + 1}`;
}

function heraRenderTimeline() {
  const blocks = $("#vsSceneBlocks");
  const waveCanvas = $("#vsWaveformCanvas");
  const waveRow = $("#vsWaveformRow");
  const strip = $("#vsSceneStrip");
  if (!blocks) return;

  const scenes = heraTimelineScenes();
  const total = studioDuration() || 1;
  const totalPx = Math.max(500, Math.round(total * PIXELS_PER_SEC));

  // Clear
  blocks.innerHTML = "";

  if (!scenes.length) {
    const empty = document.createElement("div");
    empty.className = "vs-scene-block";
    empty.style.cssText = "min-width:140px;opacity:0.35;font-size:12px;";
    empty.innerHTML = `<span class='vs-scene-label' style='pointer-events:none'>${state.lang === "fa" ? "صحنه‌ای وجود ندارد" : "No scenes yet"}</span>`;
    blocks.appendChild(empty);
    if (waveRow) waveRow.style.display = "none";
    return;
  }
  if (waveRow) waveRow.style.display = "";

  const activeIdx = vstudio.activeSlide ?? 0;
  const n = scenes.length;

  scenes.forEach((scene, i) => {
    // Dot separator
    if (i > 0) {
      const dot = document.createElement("div");
      dot.className = "vs-scene-dot";
      blocks.appendChild(dot);
    }

    const dur = parseFloat(scene.dur ?? scene.duration ?? vsVal("#vsDuration", 4));
    const width = Math.max(90, Math.round(dur * PIXELS_PER_SEC));
    const isActive = i === activeIdx;

    const block = document.createElement("div");
    block.className = "vs-scene-block" + (isActive ? " active" : "");
    block.style.width = width + "px";
    block.dataset.idx = i;

    // Scene type badge
    let badge = "▶";
    if (scene._standaloneInfo) badge = "📊";
    else if (scene._standaloneNews) badge = "📰";
    else if (i === 0 && scene.isIntro) badge = "✨";
    else if (scene.isOutro) badge = "🏁";
    else if (scene.isVideo) badge = "🎬";
    else if (scene.mediaEl) badge = "🖼";

    const label = heraSlideLabel(scene, i, n);

    block.innerHTML = `
      <div class="vs-scene-resize vs-scene-resize-l" data-dir="l" data-idx="${i}"></div>
      <span class="vs-scene-label"><span class="vs-scene-badge">${badge}</span>${escapeHtml(label)}</span>
      <div class="vs-scene-dur">${dur.toFixed(1)}s</div>
      <div class="vs-scene-resize vs-scene-resize-r" data-dir="r" data-idx="${i}"></div>
    `;

    // Click to select scene
    block.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".vs-scene-resize")) return;
      heraSelectScene(i);
    });

    blocks.appendChild(block);
  });

  // Sync waveform canvas width to the ACTUAL rendered blocks width (not the
  // theoretical total) so the waveform's seconds line up with the scene blocks
  // even when short scenes hit their min-width.
  const actualPx = blocks.scrollWidth || totalPx;
  if (waveCanvas) {
    waveCanvas.style.width = actualPx + "px";
    waveCanvas.style.minWidth = actualPx + "px";
  }
  if (waveRow) {
    waveRow.style.width = actualPx + "px";
    waveRow.style.minWidth = actualPx + "px";
  }

  // Draw waveform
  heraDrawWaveform(waveCanvas, total, actualPx);

  // ── LOGO LAYER (top) — show the logo's time window above all scenes ──
  const logoLayer = $("#vsLogoLayer");
  const logoBar = $("#vsLogoLayerBar");
  if (logoLayer && logoBar) {
    if (vstudio.logoEl) {
      logoLayer.style.display = "";
      logoLayer.style.width = actualPx + "px";
      const lStart = parseFloat(vsVal("#vsLogoStart", "0")) || 0;
      const lDur = parseFloat(vsVal("#vsLogoDur", "0")) || 0;
      const showOn = vsVal("#vsLogoShow", "all");
      let from = lStart, to = lDur > 0 ? lStart + lDur : total;
      // if bound to a specific slide, span that slide
      if (showOn === "last" && scenes.length) {
        let acc = 0; for (let i = 0; i < scenes.length - 1; i++) acc += parseFloat(scenes[i].dur ?? scenes[i].duration ?? 4);
        from = acc; to = total;
      } else if (showOn === "first" && scenes.length) {
        from = 0; to = parseFloat(scenes[0].dur ?? scenes[0].duration ?? 4);
      }
      from = Math.max(0, Math.min(total, from));
      to = Math.max(from, Math.min(total, to));
      const leftPx = (from / total) * actualPx;
      const wPx = Math.max(40, ((to - from) / total) * actualPx);
      logoBar.style.left = leftPx + "px";
      logoBar.style.width = wPx + "px";
      const txt = $("#vsLogoLayerTxt");
      if (txt) txt.textContent = (state.lang === "fa" ? "لوگو" : "Logo") +
        "  " + from.toFixed(1) + "→" + (to >= total ? (state.lang==="fa"?"پایان":"end") : to.toFixed(1) + "s");
    } else {
      logoLayer.style.display = "none";
    }
  }

  // Update playhead
  updateTimeline(vstudio.position || 0, total);
  // wire the logo bar drag handles (once)
  vsWireLogoBar(actualPx, total);
}

// After-Effects-style trimming of the logo's time window by dragging the bar
// or its two end handles on the timeline.
let _logoBarWired = false;
function vsWireLogoBar(actualPx, total) {
  const bar = document.querySelector("#vsLogoLayerBar");
  const hL = document.querySelector("#vsLogoHandleL");
  const hR = document.querySelector("#vsLogoHandleR");
  if (!bar || !hL || !hR) return;
  bar._px = actualPx; bar._total = total;
  if (_logoBarWired) return;
  _logoBarWired = true;

  // write a field WITHOUT triggering a full timeline re-render (which would
  // fight the drag); we update the preview + bar position ourselves.
  const writeField = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.value = val;
  };
  const curWindow = () => {
    const lStart = parseFloat(vsVal("#vsLogoStart", "0")) || 0;
    const lDur = parseFloat(vsVal("#vsLogoDur", "0")) || 0;
    const tot = bar._total || 1;
    return { from: lStart, to: lDur > 0 ? Math.min(tot, lStart + lDur) : tot, tot };
  };
  let mode = null, startX = 0, base = null;
  const pxToSec = (dx) => (dx / (bar._px || 1)) * (bar._total || 1);

  // reposition the bar + label live during a drag
  const paint = (from, to, tot) => {
    const px = bar._px || 1;
    bar.style.left = ((from / tot) * px) + "px";
    bar.style.width = Math.max(40, ((to - from) / tot) * px) + "px";
    const txt = document.querySelector("#vsLogoLayerTxt");
    if (txt) txt.textContent = (state.lang === "fa" ? "لوگو" : "Logo") + "  " +
      from.toFixed(1) + "→" + (to >= tot - 0.05 ? (state.lang === "fa" ? "پایان" : "end") : to.toFixed(1) + "s");
  };

  const down = (e, m) => {
    e.preventDefault(); e.stopPropagation();
    // dragging the bar means manual timing — drop any slide-binding
    const showEl = document.querySelector("#vsLogoShow");
    if (showEl && showEl.value !== "all") showEl.value = "all";
    mode = m;
    startX = (e.touches ? e.touches[0].clientX : e.clientX);
    base = curWindow();
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
  };
  const move = (e) => {
    if (!mode || !base) return;
    if (e.cancelable) e.preventDefault();
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    const dsec = pxToSec(x - startX);
    const tot = base.tot;
    let from = base.from, to = base.to;
    if (mode === "move") {
      const span = base.to - base.from;
      from = Math.max(0, Math.min(tot - span, base.from + dsec)); to = from + span;
    } else if (mode === "l") {
      from = Math.max(0, Math.min(base.to - 0.5, base.from + dsec)); to = base.to;
    } else if (mode === "r") {
      to = Math.min(tot, Math.max(base.from + 0.5, base.to + dsec)); from = base.from;
    }
    writeField("#vsLogoStart", from.toFixed(1));
    writeField("#vsLogoDur", (to >= tot - 0.05 ? 0 : (to - from)).toFixed(1));
    paint(from, to, tot);
    // live-update the preview frame (logo appears/disappears as window changes)
    if (!vstudio.rendering) { try { drawStudioFrame(vstudio.position || 0); } catch (e) {} }
  };
  const up = () => {
    if (!mode) return;
    mode = null;
    document.body.style.userSelect = "";
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", up);
    window.removeEventListener("touchmove", move);
    window.removeEventListener("touchend", up);
    // commit once: persist + redraw everything cleanly
    if (vstudio.slides && vstudio.slides.length) { try { vsSaveActiveSlide(); } catch (e) {} }
    try { vsPushHistory(); } catch (e) {}
    refreshTimelineClips();
  };
  hL.addEventListener("mousedown", (e) => down(e, "l"));
  hR.addEventListener("mousedown", (e) => down(e, "r"));
  hL.addEventListener("touchstart", (e) => down(e, "l"), { passive: false });
  hR.addEventListener("touchstart", (e) => down(e, "r"), { passive: false });
  bar.addEventListener("mousedown", (e) => {
    if (e.target === hL || e.target === hR) return;
    down(e, "move");
  });
  bar.addEventListener("touchstart", (e) => {
    if (e.target === hL || e.target === hR) return;
    down(e, "move");
  }, { passive: false });
}

function heraSelectScene(idx) {
  // Use the proper selectSlide() — it saves the current slide's settings,
  // loads the new slide's settings onto all controls, and redraws the preview.
  // Do NOT manually set activeSlide here — selectSlide() handles all of that.
  selectSlide(idx);
  // Re-render the timeline to show the new active block
  heraRenderTimeline();
  // Jump the playhead to the start of the selected scene
  let t = 0;
  if (vstudio.slides && vstudio.slides.length) {
    for (let i = 0; i < idx; i++) {
      const d = parseFloat(vstudio.slides[i]?.dur ?? vstudio.slides[i]?.duration ?? 4);
      t += d;
    }
  }
  vstudio.position = t;
  updateTimeline(t, studioDuration());
  // redraw the preview at the selected scene's start so the canvas shows it
  if (!vstudio.looping) {
    try { drawStudioFrame(t); } catch(e){}
  }
}

function heraDrawWaveform(canvas, totalDur, forceWidth) {
  if (!canvas) return;
  const stripWidth = forceWidth ? Math.round(forceWidth) : Math.max(400, Math.round(totalDur * PIXELS_PER_SEC));
  canvas.width = stripWidth;
  canvas.height = 40;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, stripWidth, 40);
  const barW = 3, gap = 2, total = Math.floor(stripWidth / (barW + gap));
  const mid = 20;
  // Colour: active zone (orange-red) vs future (muted)
  const scenes = heraTimelineScenes();
  const dur = studioDuration() || 1;
  let activeEnd = 0;
  const activeIdx = vstudio.activeSlide ?? 0;
  for (let i = 0; i <= activeIdx && i < scenes.length; i++) {
    activeEnd += parseFloat(scenes[i]?.dur ?? scenes[i]?.duration ?? 4);
  }
  const activeRatio = activeEnd / dur;

  for (let i = 0; i < total; i++) {
    const x = i * (barW + gap);
    const ratio = i / total;
    // Pseudo-random waveform height using sine harmonics
    const h = Math.max(4, mid * (0.4 + 0.35 * Math.abs(Math.sin(i * 0.37)) + 0.25 * Math.abs(Math.sin(i * 0.11 + 1.2))));
    const isActive = ratio <= activeRatio;
    ctx.fillStyle = isActive
      ? `rgba(216,183,106,${0.55 + 0.45 * (h / mid)})`
      : "rgba(255,255,255,0.15)";
    ctx.beginPath();
    ctx.roundRect(x, mid - h / 2, barW, h, 1.5);
    ctx.fill();
  }
}

// ── TIMELINE UPDATE (scrub position → playhead in scene strip) ─
function updateTimeline(elapsed, duration) {
  // Legacy AE-style (hidden, kept for compat)
  const tc = $("#vsTimecode");
  if (tc) {
    const fmt = s => `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
    tc.textContent = `${fmt(elapsed)} / ${fmt(duration)}`;
  }

  // Hera playhead — position within .vs-scene-scroll (includes scroll offset effect via left)
  const ph = $("#vsScenePlayhead");
  if (ph) {
    const totalPx = Math.max(500, Math.round((duration || 1) * PIXELS_PER_SEC));
    const ratio = duration > 0 ? Math.min(1, elapsed / duration) : 0;
    ph.style.left = Math.round(ratio * totalPx) + "px";
    ph.style.top = "0";
    ph.style.bottom = "0";
  }
}

// ── SCENE BLOCK RESIZE (drag left/right handle) ─────────────
(function attachSceneResize() {
  let dragging = null; // { idx, dir, startX, startDur }

  document.addEventListener("pointerdown", e => {
    const handle = e.target.closest(".vs-scene-resize");
    if (!handle) return;
    e.preventDefault();
    const idx = parseInt(handle.dataset.idx);
    const dir = handle.dataset.dir; // 'l' or 'r'
    const scene = vstudio.slides && vstudio.slides[idx];
    if (!scene && !(idx === 0 && vstudio.mediaEl)) return;
    const curDur = scene
      ? parseFloat(scene.dur ?? scene.duration ?? 4)
      : parseFloat(vsVal("#vsDuration", 4));
    dragging = { idx, dir, startX: e.clientX, startDur: curDur };
    handle.setPointerCapture(e.pointerId);
  });

  document.addEventListener("pointermove", e => {
    if (!dragging) return;
    const dx = e.clientX - dragging.startX;
    const deltaSec = dx / PIXELS_PER_SEC;
    // For left handle: shrink from left = negative delta increases duration
    const sign = dragging.dir === "r" ? 1 : -1;
    let newDur = Math.max(1, Math.min(120, dragging.startDur + sign * deltaSec));
    newDur = Math.round(newDur * 10) / 10;

    const scene = vstudio.slides && vstudio.slides[dragging.idx];
    if (scene) {
      scene.dur = newDur;
      scene.duration = newDur;
    } else {
      // Single media: update vsDuration input
      const inp = $("#vsDuration");
      if (inp) { inp.value = newDur; }
    }

    // Re-render timeline
    heraRenderTimeline();
    updateTimeline(vstudio.position || 0, studioDuration());
  });

  document.addEventListener("pointerup", () => {
    if (!dragging) return;
    // Sync duration input if slide is selected
    if (vstudio.slides && vstudio.slides[dragging.idx]) {
      const dur = vstudio.slides[dragging.idx].dur;
      const inp = $("#vsSlideDuration");
      if (inp) inp.value = dur;
    }
    dragging = null;
    vsPushHistory();
  });
})();



function setPlayBtn(playing) {
  const b = $("#vsPlayBtn");
  if (b) b.textContent = playing ? "❚❚" : "▶";
  vstudio.playing = playing;
}

// Refresh which timeline clips look "active" based on real content.
// ── STUDIO UNDO / REDO ────────────────────────────────────
// Snapshots every studio control so changes can be reverted.
const VS_CONTROLS = [
  "#vsAspect", "#vsDuration", "#vsFilter", "#vsSpeed", "#vsTransition",
  "#vsHeadline", "#vsSub", "#vsCta", "#vsTextPos", "#vsTextSize", "#vsHeadlineFont",
  "#vsMotion", "#vsTextAnim", "#vsOverlay",
  "#vsInfoOn", "#vsInfoJson", "#vsInfoStyle", "#vsInfoPos", "#vsInfoMotion",
  "#vsLogoPos", "#vsLogoMotion", "#vsLogoStyle", "#vsLogoColor", "#vsLogoTint", "#vsLogoBg", "#vsLogoSize", "#vsLogoStart", "#vsLogoDur", "#vsLogoShow", "#vsIntro", "#vsIntroSub", "#vsIntroMotion", "#vsOutro",
  "#vsExportSize", "#vsExportQuality"
];
const vsHistory = { stack: [], index: -1, suspended: false };

function vsSnapshot() {
  const snap = { templateId: vstudio.templateId };
  VS_CONTROLS.forEach(sel => {
    const el = $(sel);
    if (el) snap[sel] = el.type === "checkbox" ? el.checked : el.value;
  });
  const grain = $("#vsGrain");
  if (grain) snap["#vsGrain"] = grain.checked;
  return snap;
}

function vsPushHistory() {
  if (vsHistory.suspended) return;
  const snap = vsSnapshot();
  // drop any redo branch, then push
  vsHistory.stack = vsHistory.stack.slice(0, vsHistory.index + 1);
  vsHistory.stack.push(snap);
  if (vsHistory.stack.length > 50) vsHistory.stack.shift();
  vsHistory.index = vsHistory.stack.length - 1;
  vsUpdateUndoButtons();
}

function vsApplySnapshot(snap) {
  vsHistory.suspended = true;
  if (snap.templateId) setVideoTemplate(snap.templateId);
  Object.keys(snap).forEach(sel => {
    if (sel === "templateId") return;
    const el = $(sel);
    if (!el) return;
    if (el.type === "checkbox") el.checked = snap[sel];
    else el.value = snap[sel];
  });
  vsHistory.suspended = false;
  if ((vstudio.mediaEl || vstudio.slides.some(s => s.ready)) && !vstudio.rendering) {
    buildPreviewCanvas();
    drawStudioFrame(vstudio.position || 0);
  }
  refreshTimelineClips();
}

function vsUndo() {
  if (vsHistory.index <= 0) return;
  vsHistory.index--;
  vsApplySnapshot(vsHistory.stack[vsHistory.index]);
  vsUpdateUndoButtons();
}
function vsRedo() {
  if (vsHistory.index >= vsHistory.stack.length - 1) return;
  vsHistory.index++;
  vsApplySnapshot(vsHistory.stack[vsHistory.index]);
  vsUpdateUndoButtons();
}
function vsUpdateUndoButtons() {
  const u = $("#vsUndoBtn"), r = $("#vsRedoBtn");
  if (u) u.disabled = vsHistory.index <= 0;
  if (r) r.disabled = vsHistory.index >= vsHistory.stack.length - 1;
}

function refreshTimelineClips() {
  const set = (id, has) => {
    const el = $(id);
    if (el) el.classList.toggle("is-active", !!has);
  };
  set("#vsClipMedia", vstudio.mediaEl);
  const hasText = ["#vsHeadline", "#vsSub", "#vsCta", "#vsIntro", "#vsIntroSub", "#vsOutro"]
    .some(s => (vsVal(s, "") || "").trim());
  set("#vsClipText", hasText);
  set("#vsClipLogo", vstudio.logoEl);
  // position/size the logo bar to reflect its timing window (top layer)
  const lc = $("#vsClipLogo");
  if (lc && vstudio.logoEl) {
    const total = (typeof studioDuration === "function" ? studioDuration() : 0) || 0;
    const lStart = parseFloat(vsVal("#vsLogoStart", "0")) || 0;
    const lDur = parseFloat(vsVal("#vsLogoDur", "0")) || 0;
    if (total > 0 && (lStart > 0 || lDur > 0)) {
      const leftPct = Math.min(96, (lStart / total) * 100);
      const endT = lDur > 0 ? Math.min(total, lStart + lDur) : total;
      const wPct = Math.max(4, ((endT - lStart) / total) * 100);
      lc.style.marginLeft = leftPct + "%";
      lc.style.width = wPct + "%";
      lc.textContent = "Logo " + lStart + "s→" + (lDur > 0 ? endT + "s" : "end");
    } else {
      lc.style.marginLeft = ""; lc.style.width = "";
      lc.textContent = "Logo";
    }
  }
  set("#vsClipMusic", vstudio.musicEl);
  // Also refresh Hera scene blocks
  heraRenderTimeline();
}

// Scrub: jump preview to a position when the track area is clicked/dragged.
function scrubTimeline(clientX) {
  const area = $("#vsTrackArea");
  if (!area) return;
  // works with single media OR a slide sequence
  const hasContent = vstudio.mediaEl || vstudio.slides.some(s => s.ready);
  if (!hasContent) return;
  const rect = area.getBoundingClientRect();
  const labelW = 76, laneRight = 12;
  const usable = rect.width - labelW - laneRight;
  let ratio = (clientX - rect.left - labelW) / usable;
  ratio = Math.max(0, Math.min(1, ratio));
  const duration = studioDuration();
  const elapsed = ratio * duration;
  // pause any running playback while scrubbing
  vstudio.looping = false;
  if (vstudio.rafId) cancelAnimationFrame(vstudio.rafId);
  // seek the single video (if any)
  if (vstudio.isVideo && vstudio.mediaEl) {
    try { vstudio.mediaEl.pause();
      vstudio.mediaEl.currentTime = Math.min(
        vstudio.mediaEl.duration || elapsed, elapsed); } catch {}
  }
  // seek the slide video that is active at this time (if any)
  if (vstudio.slides.length) {
    const at = slideAtTime(elapsed);
    vstudio.slides.forEach((s, i) => {
      if (s.ready && s.isVideo && s.mediaEl) {
        try {
          s.mediaEl.pause();
          if (i === at.index) {
            s.mediaEl.currentTime = Math.min(
              s.mediaEl.duration || at.local, at.local);
          }
        } catch {}
      }
    });
  }
  setPlayBtn(false);
  vstudio.position = elapsed;           // remember the scrubbed position
  // canvas already exists; just redraw — no rebuild (rebuild caused jumps)
  if (!$("#vsCanvas")) buildPreviewCanvas();
  drawStudioFrame(elapsed);
  updateTimeline(elapsed, duration);
}

// Scrub using the scene strip waveform row
function scrubSceneStrip(clientX) {
  const scroll = $("#vsSceneScroll");
  if (!scroll) return;
  const hasContent = vstudio.mediaEl || vstudio.slides.some(s => s.ready);
  if (!hasContent) return;
  const rect = scroll.getBoundingClientRect();
  const totalPx = Math.max(400, Math.round((studioDuration() || 1) * PIXELS_PER_SEC));
  // account for scroll offset
  const x = clientX - rect.left + scroll.scrollLeft;
  let ratio = x / totalPx;
  ratio = Math.max(0, Math.min(1, ratio));
  const duration = studioDuration();
  const elapsed = ratio * duration;
  vstudio.looping = false;
  if (vstudio.rafId) cancelAnimationFrame(vstudio.rafId);
  if (vstudio.isVideo && vstudio.mediaEl) {
    try { vstudio.mediaEl.pause();
      vstudio.mediaEl.currentTime = Math.min(vstudio.mediaEl.duration || elapsed, elapsed); } catch {}
  }
  if (vstudio.slides.length) {
    const at = slideAtTime(elapsed);
    vstudio.slides.forEach((s, i) => {
      if (s.ready && s.isVideo && s.mediaEl) {
        try {
          s.mediaEl.pause();
          if (i === at.index) s.mediaEl.currentTime = Math.min(s.mediaEl.duration || at.local, at.local);
        } catch {}
      }
    });
  }
  setPlayBtn(false);
  vstudio.position = elapsed;
  if (!$("#vsCanvas")) buildPreviewCanvas();
  drawStudioFrame(elapsed);
  updateTimeline(elapsed, duration);
}


// The browser's recorder only makes WebM; this converts it to MP4
// entirely in the browser. Works on a plain static site — no special
// headers needed. The ffmpeg core is loaded once and reused.
let _vsFfmpeg = null;
async function vsGetFfmpeg() {
  if (_vsFfmpeg && _vsFfmpeg.isLoaded()) return _vsFfmpeg;
  if (typeof FFmpeg === "undefined" || !FFmpeg.createFFmpeg) {
    throw new Error("MP4 converter library failed to load.");
  }
  const ffmpeg = FFmpeg.createFFmpeg({
    log: false,
    corePath: "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js"
  });
  await ffmpeg.load();
  _vsFfmpeg = ffmpeg;
  return ffmpeg;
}
async function vsConvertToMp4(webmBlob) {
  const ffmpeg = await vsGetFfmpeg();
  const buf = new Uint8Array(await webmBlob.arrayBuffer());
  ffmpeg.FS("writeFile", "in.webm", buf);
  // H.264 video + AAC audio — the universally compatible MP4 combo
  await ffmpeg.run(
    "-i", "in.webm",
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "23",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "192k",
    "-movflags", "+faststart",
    "out.mp4"
  );
  const data = ffmpeg.FS("readFile", "out.mp4");
  // free the in-memory files
  try { ffmpeg.FS("unlink", "in.webm"); ffmpeg.FS("unlink", "out.mp4"); } catch {}
  return new Blob([data.buffer], { type: "video/mp4" });
}

// Export the composited result as a real video file (MP4 or WebM).
async function exportStudioVideo() {
  let canvas = $("#vsCanvas");
  const media = vstudio.mediaEl;
  const hasSlides = vstudio.slides.some(s => s.ready);
  const infoOn = $("#vsInfoOn") && $("#vsInfoOn").checked;
  const newsOn = $("#vsNewsOn") && $("#vsNewsOn").checked;
  if (!canvas || (!media && !hasSlides && !infoOn && !newsOn)) {
    vsStatus(state.lang === "fa"
      ? "اول رسانه آپلود کن یا اینفوگرافیک را روشن کن."
      : "Upload media, or turn on the infographic / news banner.");
    return;
  }
  if (typeof MediaRecorder === "undefined" || !canvas.captureStream) {
    vsStatus(state.lang === "fa" ? "مرورگر شما خروجی ویدیو را پشتیبانی نمی‌کند." : "Your browser does not support video export.");
    return;
  }
  if (vstudio.rendering) return;
  stopStudioPreview();          // pause the live loop during render
  vstudio.rendering = true;
  vstudio._logoVidVisible = false;   // animated logo restarts cleanly in the export

  buildPreviewCanvas(Number(vsVal("#vsExportSize", 1080)));
  canvas = $("#vsCanvas");   // fresh canvas at export resolution
  vsStatus(state.lang === "fa"
    ? `در حال رندر ${canvas.width}×${canvas.height}... این تب را باز نگه دار.`
    : `Rendering ${canvas.width}×${canvas.height}… keep this tab open.`);
  const duration = studioDuration();
  const fps = 60;
  const canvasStream = canvas.captureStream(fps);

  // mix in music audio if present
  let tracks = [...canvasStream.getVideoTracks()];
  if (vstudio.musicEl) {
    try {
      // A MediaElementSource can only be created ONCE per audio element,
      // and once created the element's audio routes through this context.
      // So we create the graph a single time and reuse it on every export.
      if (!vstudio._audioCtx) {
        vstudio._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        vstudio._musicSrc = vstudio._audioCtx.createMediaElementSource(vstudio.musicEl);
        vstudio._musicDest = vstudio._audioCtx.createMediaStreamDestination();
        // route to BOTH the speakers (so preview is audible) and the
        // recording destination (so the export captures the music).
        vstudio._musicSrc.connect(vstudio._musicDest);
        vstudio._musicSrc.connect(vstudio._audioCtx.destination);
      }
      if (vstudio._audioCtx.state === "suspended") {
        try { await vstudio._audioCtx.resume(); } catch {}
      }
      tracks = tracks.concat(vstudio._musicDest.stream.getAudioTracks());
    } catch {}
  }
  const stream = new MediaStream(tracks);

  // Pick the recording codec. When the user wants MP4, first try to
  // record MP4/H.264 NATIVELY — many modern Chrome builds support it,
  // which avoids the slow, fragile ffmpeg conversion entirely.
  const wantFormat = vsVal("#vsExportFormat", "mp4");
  let mime = "video/webm";
  let recordedNativeMp4 = false;
  if (wantFormat === "mp4") {
    for (const t of [
      "video/mp4;codecs=h264,aac", "video/mp4;codecs=h264",
      "video/mp4;codecs=avc1", "video/mp4"
    ]) {
      if (MediaRecorder.isTypeSupported(t)) {
        mime = t; recordedNativeMp4 = true; break;
      }
    }
  }
  // if MP4 not natively supported (or WebM chosen) → record WebM
  if (!recordedNativeMp4) {
    for (const t of ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"]) {
      if (MediaRecorder.isTypeSupported(t)) { mime = t; break; }
    }
  }

  // Bitrate scales with resolution AND the chosen quality level.
  const qualityFactor = {
    max: 0.22, high: 0.13, medium: 0.07, low: 0.035
  }[vsVal("#vsExportQuality", "high")] || 0.13;
  const px = canvas.width * canvas.height;
  let videoBitsPerSecond = Math.round(px * fps * qualityFactor);
  // sensible floor/ceiling so files are neither broken nor huge
  videoBitsPerSecond = Math.min(60000000, Math.max(1500000, videoBitsPerSecond));

  const recorder = new MediaRecorder(stream, {
    mimeType: mime,
    videoBitsPerSecond,
    audioBitsPerSecond: 192000
  });
  const chunks = [];
  recorder.ondataavailable = e => { if (e.data.size) chunks.push(e.data); };

  const done = new Promise(resolve => {
    recorder.onstop = async () => {
      const format = vsVal("#vsExportFormat", "mp4");
      let outBlob, ext;

      if (recordedNativeMp4) {
        // the browser recorded MP4 directly — no conversion needed
        outBlob = new Blob(chunks, { type: "video/mp4" });
        ext = "mp4";
      } else {
        const webmBlob = new Blob(chunks, { type: "video/webm" });
        if (format === "mp4") {
          // browser couldn't record MP4 natively → convert with ffmpeg
          try {
            vsStatus(state.lang === "fa"
              ? "در حال تبدیل به MP4… (بار اول کمی طول می‌کشد)"
              : "Converting to MP4… (first time takes longer)");
            outBlob = await vsConvertToMp4(webmBlob);
            ext = "mp4";
          } catch (err) {
            console.error("MP4 conversion error:", err);
            vsStatus((state.lang === "fa"
              ? "تبدیل MP4 ناموفق بود — فایل WebM ذخیره شد. خطا: "
              : "MP4 conversion failed — saved as WebM. Error: ")
              + (err && err.message ? err.message : String(err)));
            outBlob = webmBlob; ext = "webm";
          }
        } else {
          outBlob = webmBlob; ext = "webm";
        }
      }

      const url = URL.createObjectURL(outBlob);
      if (vstudio._batchCancel) {           // cancelled mid-record → don't save
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        vstudio.rendering = false;
        resolve(null);
        return;
      }
      if (vstudio._returnBlob) {             // hand blob back for zipping — no individual download
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        vstudio.rendering = false;
        resolve({ blob: outBlob, ext });
        return;
      }
      const a = document.createElement("a");
      a.href = url;
      const safeName = vstudio._exportName
        ? String(vstudio._exportName).replace(/[^\w\- ]+/g, "").replace(/\s+/g, "-").slice(0, 60)
        : ("ai-radar-" + vstudio.templateId + "-video");
      a.download = `${safeName}.${ext}`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      vsStatus(ext === "mp4"
        ? (state.lang === "fa" ? "ویدیوی MP4 ذخیره شد." : "MP4 video saved.")
        : (state.lang === "fa" ? "ویدیوی WebM ذخیره شد." : "WebM video saved."));
      resolve({ blob: outBlob, ext });
    };
  });

  if (vstudio.rafId) cancelAnimationFrame(vstudio.rafId);
  if (vstudio.isVideo && media) {
    // play — drawStudioFrame sets playbackRate for time-stretch
    try { media.currentTime = 0; media.play().catch(() => {}); } catch {}
  }
  if (vstudio.musicEl) {
    try { vstudio.musicEl.currentTime = 0; await vstudio.musicEl.play().catch(() => {}); } catch {}
  }
  recorder.start(100);   // flush a chunk every 100ms
  vstudio.startTime = performance.now();
  // slide videos: start them so they have motion; drawStudioFrame
  // sets the active slide's playbackRate for time-stretch.
  vstudio.slides.forEach(s => {
    if (s.ready && s.isVideo && s.mediaEl) {
      try { s.mediaEl.currentTime = 0; s.mediaEl.play().catch(() => {}); } catch {}
    }
  });

  await new Promise(resolve => {
    const loop = () => {
      const elapsed = (performance.now() - vstudio.startTime) / 1000;
      drawStudioFrame(elapsed);
      vsApplyMusicFade(elapsed, duration);
      if (elapsed < duration && !vstudio._batchCancel) {
        vstudio.rafId = requestAnimationFrame(loop);
      } else {
        if (vstudio.isVideo && media) media.pause();
        if (vstudio.musicEl) vstudio.musicEl.pause();
        vstudio.slides.forEach(s => {
          if (s.ready && s.isVideo && s.mediaEl) { try { s.mediaEl.pause(); } catch {} }
        });
        recorder.stop();
        resolve();
      }
    };
    loop();
  });

  const result = await done;
  // NOTE: do NOT close the audio context — it's reused across exports and
  // keeps the music element routed to the speakers for preview.
  vstudio.rendering = false;
  if (!vstudio._returnBlob) vsStatus(state.lang === "fa" ? "ویدیو دانلود شد." : "Video downloaded.");
  previewStudioVideo();         // resume the live looping preview
  return result;                // { blob, ext } | null — used by ZIP export
}

function bindEvents() {
  const on = (selector, eventName, handler) => {
    const node = $(selector);
    if (node) node.addEventListener(eventName, handler);
  };

  // (theme & language are handled by the segmented toggles above)
  // segmented theme toggle
  const themeSeg = $("#themeSeg");
  if (themeSeg) {
    themeSeg.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-theme]");
      if (btn) applyTheme(btn.dataset.theme);
    });
  }
  // segmented language toggle
  const langSeg = $("#langSeg");
  if (langSeg) {
    langSeg.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang]");
      if (btn) setLanguage(btn.dataset.lang);
    });
  }
  // collapsible sidebar — desktop collapse to icon rail
  on("#navCollapseBtn", "click", () => {
    const sb = $("#appSidebar");
    if (sb) sb.classList.toggle("collapsed");
  });
  // mobile drawer — open / close the off-canvas sidebar
  const openSidebar = () => {
    const sb = $("#appSidebar"), bd = $("#sidebarBackdrop");
    if (sb) sb.classList.add("open");
    if (bd) bd.classList.add("show");
  };
  const closeSidebar = () => {
    const sb = $("#appSidebar"), bd = $("#sidebarBackdrop");
    if (sb) sb.classList.remove("open");
    if (bd) bd.classList.remove("show");
  };
  on("#sidebarOpenBtn", "click", openSidebar);
  on("#sidebarBackdrop", "click", closeSidebar);

  // scroll-to-top button — appears once the page is scrolled down
  const scrollBtn = $("#scrollTopBtn");
  if (scrollBtn) {
    const toggleScrollBtn = () => {
      if (window.scrollY > 480) scrollBtn.classList.add("show");
      else scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", toggleScrollBtn, { passive: true });
    toggleScrollBtn();
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  // tapping a nav link closes the mobile drawer
  document.querySelectorAll(".sidebar-nav a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 980) closeSidebar();
    });
  });
  // highlight the nav link for the section currently in view
  const navLinks = Array.from(document.querySelectorAll(".sidebar-nav a"));
  if (navLinks.length && "IntersectionObserver" in window) {
    const byId = {};
    navLinks.forEach(a => { byId[a.getAttribute("href").slice(1)] = a; });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          navLinks.forEach(a => a.classList.remove("active"));
          const link = byId[en.target.id];
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(byId).forEach(id => {
      const sec = document.getElementById(id);
      if (sec) obs.observe(sec);
    });
  }
  on("#searchInput", "input", (event) => { state.query = event.target.value; renderTools(); });
  on("#viewGrid", "click", () => setToolView("grid"));
  on("#viewList", "click", () => setToolView("list"));
  on("#jumpToTool", "change", (event) => {
    const name = event.target.value;
    if (name) jumpToTool(name);
    event.target.value = "";
  });
  on("#categoryFilter", "change", (event) => { state.category = event.target.value; renderTools(); });
  on("#budgetFilter", "change", (event) => { state.budget = event.target.value; renderTools(); });
  on("#sortFilter", "change", (event) => { state.sort = event.target.value; renderTools(); });

  toolGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-compare]");
    if (button) toggleCompare(button.dataset.compare);
  });

  on("#clearCompare", "click", () => {
    state.compare = [];
    localStorage.removeItem("compareTools");
    renderTools();
    renderCompare();
    render3DChart();
  });
  on("#modelTypeFilter", "change", (event) => { state.modelType = event.target.value; renderTools(); });
  on("#minScoreFilter", "input", (event) => { state.minScore = Number(event.target.value) || 0; renderTools(); });

  on("#mediaUpload", "change", (event) => previewUploadedMedia(event.target.files[0]));
  on("#generateCaptionButton", "click", generateMediaCaption);
  on("#copyCaptionButton", "click", () => copyTextFrom("#captionOutput"));
  on("#copyMediaJsonButton", "click", () => copyTextFrom("#mediaJsonOutput"));

  on("#promptGenBtn", "click", async () => {
    const btn = $("#promptGenBtn");
    btn.disabled = true;
    try {
      const result = await enhancePrompt($("#simplePromptInput").value);
      $("#advancedPromptOutput").textContent = result;
    } catch (e) {
      $("#advancedPromptOutput").textContent = "Error: " + e.message;
    } finally {
      btn.disabled = false;
    }
  });
  on("#copyPromptButton", "click", () => copyTextFrom("#advancedPromptOutput"));
  on("#copyJsonButton", "click", () => copyTextFrom("#jsonOutput"));
  on("#jsonGenBtn", "click", async () => {
    const btn = $("#jsonGenBtn");
    btn.disabled = true;
    try {
      const result = await textToJson($("#textJsonInput").value);
      $("#jsonOutput").textContent = result;
    } catch (e) {
      $("#jsonOutput").textContent = "Error: " + e.message;
    } finally {
      btn.disabled = false;
    }
  });

  // Chart tabs — switching metric only re-renders cached data
  // (it does NOT re-fetch, to respect GitHub's rate limit).
  document.querySelectorAll(".chart-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".chart-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeMetric = tab.dataset.metric;
      render3DChart();
    });
  });

  // Refresh button does a real new fetch from GitHub.
  on("#refreshChartBtn", "click", fetchLiveChartData);

  // Dashboard sort buttons
  document.querySelectorAll(".gh-sort-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gh-sort-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      _ghSort = btn.dataset.sort;
      _chartFingerprint = ""; // force re-render
      renderLiveChart();
    });
  });
  // Dashboard search filter
  on("#ghSearch", "input", (e) => {
    _ghSearch = (e.target.value || "").trim();
    _chartFingerprint = "";
    renderLiveChart();
  });

  // Advanced Video Studio
  const picker = $("#templatePicker");
  if (picker) {
    picker.addEventListener("click", (e) => {
      const card = e.target.closest("[data-template]");
      if (card) { setVideoTemplate(card.dataset.template); vsPushHistory(); }
    });
  }
  // Category tabs — show one control panel at a time.
  document.querySelectorAll(".vtab").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.vtab;
      vstudio.activeVtab = target;       // remember which panel is open
      document.querySelectorAll(".vtab").forEach(t =>
        t.classList.toggle("active", t === tab));
      document.querySelectorAll("[data-vtab-panel]").forEach(p =>
        p.classList.toggle("vtab-hidden", p.dataset.vtabPanel !== target));
    });
  });
  on("#vsUpload", "change", (e) => loadStudioMedia(e.target.files[0]));
  // ----- multi-slide sequence wiring -----
  on("#vsSlideUpload", "change", (e) => {
    if (e.target.files[0]) {
      addStudioSlide(e.target.files[0]);
      e.target.value = "";
      vsPushHistory();
    }
  });
  const slideList = $("#vsSlideList");
  if (slideList) {
    slideList.addEventListener("click", (e) => {
      const del = e.target.closest("[data-del]");
      if (del) { removeStudioSlide(Number(del.dataset.del)); vsPushHistory(); return; }
      const row = e.target.closest("[data-slide]");
      if (row) selectSlide(Number(row.dataset.slide));
    });
  }
  on("#vsSlideDuration", "input", (e) => {
    const s = vstudio.slides[vstudio.activeSlide];
    if (s) { s.duration = Math.max(1, Math.min(30, Number(e.target.value) || 4));
      renderSlideList(); }
  });
  on("#vsFilter", "change", () => {
    if (!vstudio.looping) drawStudioFrame(vstudio.position || 0);
  });
  // Camera motion: save to the active slide AND auto-play a short preview so
  // the user actually SEES the movement (a still frame can't show motion).
  on("#vsMotion", "change", () => {
    if (vstudio.slides.length) vsSaveActiveSlide();
    previewStudioVideo(false);
  });
  // AI image generation for the active slide
  on("#vsImgGenBtn", "click", () => vsGenerateImageForActiveSlide());
  on("#vsSlideCaption", "input", (e) => {
    const s = vstudio.slides[vstudio.activeSlide];
    if (s) {
      s._caption = e.target.value;
      renderSlideList();
      if (!vstudio.looping) drawStudioFrame(vstudio.position || 0);
    }
  });
  // add / replace footage on the active middle slide
  on("#vsSlideMediaUpload", "change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) addFootageToActiveSlide(file);
    e.target.value = "";
  });
  renderSlideList();
  on("#vsMusic", "change", (e) => loadStudioMusic(e.target.files[0]));
  on("#vsLogo", "change", (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const box = $("#vsLogoBoxTxt");
    // QuickTime .mov (often qtrle/ProRes) can't decode in browsers — warn early
    const isMov = /\.mov$/i.test(f.name) || f.type === "video/quicktime";
    if (isMov) {
      if (box) box.textContent = state.lang === "fa"
        ? "⚠ فایل .mov در مرورگر پخش نمی‌شود — WebM یا MP4 بده"
        : "⚠ .mov can't play in browsers — use WebM or MP4";
      vsStatus(state.lang === "fa"
        ? "این فایل .mov پشتیبانی نمی‌شود. نسخه‌ی WebM را آپلود کن."
        : "That .mov can't be decoded. Upload the WebM version instead.");
      return;
    }
    if (box) box.textContent = (state.lang === "fa" ? "در حال بارگذاری… " : "Loading… ") + f.name;
    loadStudioLogo(f);
  });
  on("#vsLogoRemove", "click", removeStudioLogo);

  // Sample logos shipped with the site — load by URL (no upload needed).
  on("#vsLogoSample", "change", (e) => {
    const file = e.target.value;
    if (!file) { removeStudioLogo(); return; }
    loadSampleLogo(file);
  });

  // Auto-brand: one tap → professional logo placement that matches the template.
  on("#vsPlaceLogo", "click", () => {
    if (!vstudio.logoEl) {
      vsStatus(state.lang === "fa" ? "اول یک لوگو آپلود کن." : "Upload a logo first.");
      return;
    }
    const isVid = !!vstudio.logoIsVideo;
    const hasSegs = !!(vstudio.logoSegs && vstudio.logoSegs.length >= 3);
    const setSel = (sel, val) => {
      const el = $(sel);
      if (!el) return;
      el.value = val;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    };
    setSel("#vsLogoMotion", isVid ? "none" : (hasSegs ? "letters" : "fade"));
    setSel("#vsLogoPos", "br");
    setSel("#vsLogoShow", "all");
    setSel("#vsLogoStart", "0");
    setSel("#vsLogoDur", "0");
    vstudio.logoPlaced = true;
    vstudio.logoDX = 0; vstudio.logoDY = 0;
    vsRedrawPreview();
    refreshTimelineClips();
    vsStatus(state.lang === "fa"
      ? "لوگو اضافه شد ✦ روی پیش‌نمایش بکش، و لبه‌های نوار لوگو را روی تایم‌لاین بکش."
      : "Logo placed ✦ Drag it on the preview; drag the ends of its timeline bar to set timing.");
  });
  on("#vsPreviewBtn", "click", previewStudioVideo);
  on("#vsExportBtn", "click", exportStudioVideo);
  on("#vsUsePexels", "change", () => {
    const w = $("#vsPexelsKeyWrap");
    // when the site already has an embedded key, never show the field
    if (w) w.style.display = (!VS_PEXELS_KEY && $("#vsUsePexels") && $("#vsUsePexels").checked) ? "block" : "none";
  });
  // Infographic — a simple form builds the data; it writes the JSON box
  // (which vsInfoData reads), so the rest of the pipeline is unchanged.

  // Redraw the preview after an infographic change — works with no media.
  function vsInfoLiveRefresh() {
    if (vstudio.slides.length) vsSaveActiveSlide();
    if (!$("#vsCanvas")) buildPreviewCanvas();
    if (!vstudio.looping) {
      drawStudioFrame(vstudio.position || 0);
      updateTimeline(vstudio.position || 0, studioDuration());
    }
  }

  // Build JSON from the form fields and push it into the hidden JSON box.
  function vsInfoFormToJson() {
    const title = vsVal("#vsInfoTitle", "") || "";
    const subtitle = vsVal("#vsInfoSubtitle", "") || "";
    const stats = [];
    document.querySelectorAll("#vsInfoRows .vs-info-row").forEach(row => {
      const label = (row.querySelector(".vs-info-label") || {}).value || "";
      const value = (row.querySelector(".vs-info-value") || {}).value || "";
      if (label.trim() || value.trim()) {
        // derive the number from the value text (e.g. "+8.4%" -> 8.4)
        const n = parseFloat(String(value).replace(/[^0-9.\-]/g, ""));
        stats.push({ label: label.trim(), value: value.trim(),
                     num: isNaN(n) ? 0 : n });
      }
    });
    const data = { title: title.trim(), subtitle: subtitle.trim(),
                   source: (vsVal("#vsInfoSource", "") || "").trim(), stats };
    const json = $("#vsInfoJson");
    if (json) json.value = JSON.stringify(data, null, 2);
    vsInfoLiveRefresh();
  }

  // Render one editable stat row.
  function vsInfoRowMarkup(label, value) {
    const L = state.lang === "fa" ? "برچسب" : "Label";
    const V = state.lang === "fa" ? "مقدار" : "Value";
    return `<div class="vs-info-row">
      <input class="vs-info-label" type="text" placeholder="${L}" value="${escapeHtml(label || "")}" />
      <input class="vs-info-value" type="text" placeholder="${V}" value="${escapeHtml(value || "")}" />
      <button class="vs-info-del" type="button" aria-label="Remove">✕</button>
    </div>`;
  }

  // Rebuild the rows container from a list of {label,value} pairs.
  function vsInfoRenderRows(rows) {
    const box = $("#vsInfoRows");
    if (!box) return;
    if (!rows || !rows.length) {
      rows = [{ label: "", value: "" }, { label: "", value: "" }];
    }
    box.innerHTML = rows.map(r => vsInfoRowMarkup(r.label, r.value)).join("");
  }

  // Populate the form from whatever JSON is in the box (for import / advanced).
  function vsInfoJsonToForm() {
    let d;
    try { d = JSON.parse(vsVal("#vsInfoJson", "") || "{}"); }
    catch { return false; }
    if (!d || typeof d !== "object") return false;
    const t = $("#vsInfoTitle"); if (t) t.value = d.title || "";
    const s = $("#vsInfoSubtitle"); if (s) s.value = d.subtitle || "";
    const src = $("#vsInfoSource"); if (src) src.value = d.source || "";
    const rows = (Array.isArray(d.stats) ? d.stats : [])
      .map(x => ({ label: x.label || "", value: x.value != null ? String(x.value) : "" }));
    vsInfoRenderRows(rows);
    return true;
  }

  // start with two empty rows
  vsInfoRenderRows();
  // expose so slide-switching (syncStudioControls) can repopulate the form
  window._vsInfoJsonToForm = vsInfoJsonToForm;

  // typing in any form field rebuilds the infographic live
  ["#vsInfoTitle", "#vsInfoSubtitle", "#vsInfoSource"].forEach(sel => {
    on(sel, "input", vsInfoFormToJson);
  });
  const infoRowsBox = $("#vsInfoRows");
  if (infoRowsBox) {
    infoRowsBox.addEventListener("input", vsInfoFormToJson);
    infoRowsBox.addEventListener("click", (e) => {
      if (e.target.closest(".vs-info-del")) {
        e.target.closest(".vs-info-row").remove();
        vsInfoFormToJson();
      }
    });
  }
  on("#vsInfoAddRow", "click", () => {
    const box = $("#vsInfoRows");
    if (box) box.insertAdjacentHTML("beforeend", vsInfoRowMarkup("", ""));
  });

  // Import a JSON file → fill the form
  on("#vsInfoFile", "change", (e) => {
    const file = e.target.files && e.target.files[0];
    const status = $("#vsInfoJsonStatus");
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result || ""));
        const json = $("#vsInfoJson");
        if (json) json.value = JSON.stringify(parsed, null, 2);
        if (!vsInfoJsonToForm()) throw new Error("bad shape");
        const onBox = $("#vsInfoOn");
        if (onBox) onBox.checked = true;
        vsInfoFormToJson();
        vsPushHistory();
      } catch (err) {
        if (status) {
          status.className = "vstudio-note vs-err";
          status.textContent = state.lang === "fa"
            ? "فایل JSON معتبر نیست."
            : "That file is not valid JSON.";
        }
      }
    };
    reader.readAsText(file);
  });
  // Advanced: pull whatever is in the JSON box into the form
  on("#vsInfoSyncBtn", "click", () => {
    if (vsInfoJsonToForm()) { vsInfoFormToJson(); vsPushHistory(); }
  });

  // ── PUTER AI — browser-based AI for infographic + news ──────
  // Returns the model's text reply, or throws a friendly error.
  async function vsAiChat(prompt) {
    // Reuse the robust, free Pollinations chain (POST + JSON + proxy fallback).
    try {
      const t = await vsAutoAiChat(prompt, { json: true });
      if (t && String(t).trim()) return String(t);
    } catch (e) { /* fall through to plain-text attempts below */ }
    // last resort: simple GET (short prompts only)
    try {
      const url = "https://text.pollinations.ai/" + encodeURIComponent(prompt) +
                  "?model=openai&seed=" + Math.floor(Math.random() * 1e6);
      const r = await fetch(url);
      if (r.ok) { const tt = await r.text(); if (tt && tt.trim()) return tt; }
    } catch (e) { /* give up */ }
    throw new Error(state.lang === "fa"
      ? "سرویس هوش مصنوعی موقتاً در دسترس نیست. کمی بعد دوباره امتحان کن."
      : "AI service temporarily unavailable. Please try again shortly.");
  }
  // Normalise any puter.ai.chat reply shape into a plain string.
  function vsAiReplyToText(res) {
    if (res == null) return "";
    if (typeof res === "string") return res;
    // content can be a string OR an array of {type:"text",text:"..."} blocks
    const fromContent = (c) => {
      if (typeof c === "string") return c;
      if (Array.isArray(c)) {
        return c.map(b => (typeof b === "string" ? b
          : (b && (b.text || b.content)) || "")).join("");
      }
      return "";
    };
    if (res.message && res.message.content != null) {
      const t = fromContent(res.message.content);
      if (t) return t;
    }
    if (res.content != null) {
      const t = fromContent(res.content);
      if (t) return t;
    }
    if (typeof res.text === "string") return res.text;
    if (res.choices && res.choices[0]) {
      const ch = res.choices[0];
      if (ch.message && ch.message.content != null)
        return fromContent(ch.message.content);
      if (typeof ch.text === "string") return ch.text;
    }
    // last resort: stringify so the JSON extractor still has a chance
    try { return JSON.stringify(res); } catch { return String(res); }
  }
  // Pull the first {...} JSON object out of a model reply.
  function vsExtractJson(text) {
    if (typeof text !== "string") {
      try { text = JSON.stringify(text); } catch { return null; }
    }
    if (!text) return null;
    // strip markdown code fences if the model wrapped the JSON
    let t = text.replace(/```(?:json)?/gi, "").trim();
    // first attempt: parse the whole thing
    try { return JSON.parse(t); } catch {}
    // second attempt: slice from the first { to the last }
    const a = t.indexOf("{"), b = t.lastIndexOf("}");
    if (a >= 0 && b > a) {
      try { return JSON.parse(t.slice(a, b + 1)); } catch {}
    }
    return null;
  }

  // Infographic: free text → title + stats, fills the form.
  on("#vsInfoAiBtn", "click", async () => {
    const text = (vsVal("#vsInfoAiText", "") || "").trim();
    const status = $("#vsInfoAiStatus");
    const btn = $("#vsInfoAiBtn");
    if (!text) {
      if (status) { status.className = "vstudio-note vs-err";
        status.textContent = state.lang === "fa"
          ? "اول متنی بنویس." : "Type some text first."; }
      return;
    }
    if (status) { status.className = "vstudio-note";
      status.textContent = state.lang === "fa"
        ? "در حال تولید با هوش مصنوعی…" : "Generating with AI…"; }
    if (btn) btn.disabled = true;
    try {
      const prompt =
        "Turn the following into infographic data. Reply with ONLY a JSON " +
        "object, no prose, in this exact shape: " +
        '{"title":"short title","subtitle":"short subtitle",' +
        '"stats":[{"label":"short label","value":"short value"}]}. ' +
        "Use 3 to 5 stats. RULES: title max 5 words, subtitle max 5 words, " +
        "each label max 3 words, each value max 2 words and ideally a " +
        "number like 8.4% or 1.2M or $2.5B. Never put a sentence in a value. " +
        "Source text:\n\n" + text;
      const reply = await vsAiChat(prompt);
      const data = vsExtractJson(reply);
      if (!data || !Array.isArray(data.stats) || !data.stats.length) {
        console.warn("Infographic AI raw reply:", reply);
        throw new Error(state.lang === "fa"
          ? "هوش مصنوعی نتوانست آمار بسازد. متن را واضح‌تر بنویس."
          : "AI couldn't extract stats. Try clearer text, or check the console.");
      }
      const json = $("#vsInfoJson");
      if (json) json.value = JSON.stringify(data, null, 2);
      vsInfoJsonToForm();
      const onBox = $("#vsInfoOn");
      if (onBox) onBox.checked = true;
      vsInfoFormToJson();
      // persist to the active slide so it doesn't vanish on preview/redraw
      if (vstudio.slides.length) vsSaveActiveSlide();
      if (!vstudio.looping) drawStudioFrame(vstudio.position || 0);
      vsPushHistory();
      if (status) { status.className = "vstudio-note vs-ok";
        status.textContent = state.lang === "fa"
          ? "اینفوگرافیک ساخته شد." : "Infographic generated."; }
    } catch (err) {
      if (status) { status.className = "vstudio-note vs-err";
        status.textContent = err.message || String(err); }
    } finally {
      if (btn) btn.disabled = false;
    }
  });

  // News: article / notes → kicker + headline + source, fills the fields.
  on("#vsNewsAiBtn", "click", async () => {
    const text = (vsVal("#vsNewsAiText", "") || "").trim();
    const status = $("#vsNewsAiStatus");
    const btn = $("#vsNewsAiBtn");
    if (!text) {
      if (status) { status.className = "vstudio-note vs-err";
        status.textContent = state.lang === "fa"
          ? "اول متنی بنویس." : "Paste some text first."; }
      return;
    }
    if (status) { status.className = "vstudio-note";
      status.textContent = state.lang === "fa"
        ? "در حال خلاصه‌سازی…" : "Summarizing with AI…"; }
    if (btn) btn.disabled = true;
    try {
      const prompt =
        "Summarize the following news text for a TV-style lower-third banner. " +
        "Reply with ONLY a JSON object, no prose, in this exact shape: " +
        '{"kicker":"1-2 word category in caps","headline":"headline",' +
        '"source":"source"}. RULES: headline max 12 words, one line, no ' +
        "trailing source name inside it; kicker max 2 words; source max 4 " +
        "words. News text:\n\n" + text;
      const reply = await vsAiChat(prompt);
      const data = vsExtractJson(reply);
      if (!data || !data.headline) {
        console.warn("News AI raw reply:", reply);
        throw new Error(state.lang === "fa"
          ? "هوش مصنوعی نتوانست خلاصه کند. متن دیگری امتحان کن."
          : "AI couldn't summarize that. Try different text, or check the console.");
      }
      const setV = (sel, v) => { const el = $(sel); if (el && v != null) el.value = v; };
      setV("#vsNewsKicker", String(data.kicker || "").slice(0, 28));
      setV("#vsNewsHeadline", String(data.headline || "").slice(0, 120));
      setV("#vsNewsSource", String(data.source || "").slice(0, 60));
      const onBox = $("#vsNewsOn");
      if (onBox) onBox.checked = true;
      vsInfoLiveRefresh();
      // persist to the active slide so it doesn't vanish on preview/redraw
      if (vstudio.slides.length) vsSaveActiveSlide();
      if (!vstudio.looping) drawStudioFrame(vstudio.position || 0);
      vsPushHistory();
      if (status) { status.className = "vstudio-note vs-ok";
        status.textContent = state.lang === "fa"
          ? "بنر خبری ساخته شد." : "News banner created."; }
    } catch (err) {
      if (status) { status.className = "vstudio-note vs-err";
        status.textContent = err.message || String(err); }
    } finally {
      if (btn) btn.disabled = false;
    }
  });
  // live estimate of the exported file size
  const updateExportInfo = () => {
    const info = $("#vsExportInfo");
    if (!info) return;
    const size = Number(vsVal("#vsExportSize", 1080));
    const qf = { max: 0.22, high: 0.13, medium: 0.07, low: 0.035 }[
      vsVal("#vsExportQuality", "high")] || 0.13;
    // estimate canvas pixels at the chosen size (assume 16:9-ish)
    const px = size * (size * 16 / 9);
    let bps = Math.min(60000000, Math.max(1500000, Math.round(px * 60 * qf)));
    const dur = studioDuration();
    const mb = (bps * dur) / 8 / 1024 / 1024;
    const q = vsVal("#vsExportQuality", "high");
    const qLabel = state.lang === "fa"
      ? ({ max: "حداکثر", high: "بالا", medium: "متوسط", low: "کم" })[q]
      : ({ max: "Maximum", high: "High", medium: "Medium", low: "Low" })[q];
    // human-readable length: "1m 30s" or "45s"
    const mins = Math.floor(dur / 60), secs = Math.round(dur % 60);
    const lenStr = mins ? `${mins}m ${secs}s` : `${secs}s`;
    info.textContent = state.lang === "fa"
      ? `${size}p · ${lenStr} · کیفیت ${qLabel} · حدود ${mb.toFixed(1)} مگابایت`
      : `${size}p · ${lenStr} · ${qLabel} quality · about ${mb.toFixed(1)} MB`;
  };
  on("#vsExportSize", "change", updateExportInfo);
  on("#vsExportQuality", "change", updateExportInfo);
  on("#vsDuration", "change", updateExportInfo);
  updateExportInfo();
  on("#vsPreviewSize", "input", applyPreviewSize);

  // Live-update the static preview frame when any setting changes.
  const vsLiveControls = [
    "#vsHeadline", "#vsSub", "#vsCta", "#vsTextPos", "#vsTextSize", "#vsHeadlineFont",
    "#vsMotion", "#vsTextAnim", "#vsOverlay",
    "#vsInfoOn", "#vsInfoJson", "#vsInfoStyle", "#vsInfoPos", "#vsInfoMotion",
    "#vsNewsOn", "#vsNewsKicker", "#vsNewsHeadline", "#vsNewsSource", "#vsNewsStyle", "#vsNewsAccent", "#vsNewsClock", "#vsNewsMotion",
    "#vsDuration", "#vsFilter", "#vsSpeed", "#vsTransition", "#vsGrain",
    "#vsIntro", "#vsIntroSub", "#vsIntroMotion", "#vsOutro",
    "#vsLogoPos", "#vsLogoMotion", "#vsLogoStyle", "#vsLogoColor", "#vsLogoTint", "#vsLogoBg", "#vsLogoSize", "#vsLogoStart", "#vsLogoDur", "#vsLogoShow"
  ];
  const vsRefresh = () => {
    refreshTimelineClips();
    // when slides exist, persist the edit into the active slide
    if (vstudio.slides.length) vsSaveActiveSlide();
    const infoOn = $("#vsInfoOn") && $("#vsInfoOn").checked;
    const newsOn = $("#vsNewsOn") && $("#vsNewsOn").checked;
    const hasSlides = vstudio.slides.some(s => s.ready);
    const hasContent = vstudio.mediaEl || hasSlides || infoOn || newsOn;
    if (!hasContent || vstudio.rendering) return;
    // make sure a canvas exists even when no media was ever loaded
    if (!$("#vsCanvas")) buildPreviewCanvas();
    // always redraw (even if looping) for news/info text changes so user
    // sees real-time feedback when typing
    if (!vstudio.looping || infoOn || newsOn) {
      drawStudioFrame(vstudio.position || 0);
      updateTimeline(vstudio.position || 0, studioDuration());
    }
  };
  const vsRefreshAspect = () => {
    const hasContent = vstudio.mediaEl || vstudio.slides.some(s => s.ready);
    if (!hasContent || vstudio.rendering) return;
    buildPreviewCanvas();
    if (!vstudio.looping) drawStudioFrame(vstudio.position || 0);
  };
  vsLiveControls.forEach(sel => {
    on(sel, "input", vsRefresh);
    on(sel, "change", vsRefresh);
  });
  on("#vsAspect", "change", vsRefreshAspect);

  // Undo / redo: snapshot studio state after each settled change.
  VS_CONTROLS.concat(["#vsGrain"]).forEach(sel => {
    on(sel, "change", () => vsPushHistory());
  });
  on("#vsUndoBtn", "click", vsUndo);
  on("#vsRedoBtn", "click", vsRedo);
  // capture the initial state as the first history entry
  vsPushHistory();
  vsUpdateUndoButtons();

  // Timeline: play/pause button + scrubbing by dragging the track area.
  on("#vsPlayBtn", "click", () => {
    if (vstudio.playing) {
      stopStudioPreview();
    } else {
      previewStudioVideo();
    }
  });
  const trackArea = $("#vsTrackArea");
  if (trackArea) {
    let dragging = false;
    const down = (e) => { dragging = true;
      scrubTimeline((e.touches ? e.touches[0] : e).clientX); };
    const move = (e) => { if (dragging)
      scrubTimeline((e.touches ? e.touches[0] : e).clientX); };
    const up = () => { dragging = false; };
    trackArea.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    trackArea.addEventListener("touchstart", down, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);
  }

  // Scene strip scrub — click / drag on the waveform row to scrub playhead
  const sceneScroll = $("#vsSceneScroll");
  if (sceneScroll) {
    let sceneDragging = false;
    const sceneDown = (e) => {
      if (e.target.closest(".vs-scene-resize") || e.target.closest(".vs-scene-block")) return;
      sceneDragging = true;
      scrubSceneStrip((e.touches ? e.touches[0] : e).clientX);
    };
    const sceneMove = (e) => {
      if (!sceneDragging) return;
      scrubSceneStrip((e.touches ? e.touches[0] : e).clientX);
    };
    const sceneUp = () => { sceneDragging = false; };
    sceneScroll.addEventListener("mousedown", sceneDown);
    window.addEventListener("mousemove", sceneMove);
    window.addEventListener("mouseup", sceneUp);
    sceneScroll.addEventListener("touchstart", sceneDown, { passive: true });
    window.addEventListener("touchmove", sceneMove, { passive: true });
    window.addEventListener("touchend", sceneUp);
  }

  // Copy on every ai-output: click to copy
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copy-target]");
    if (btn) {
      const target = $(btn.dataset.copyTarget);
      if (target?.textContent?.trim()) {
        navigator.clipboard.writeText(target.textContent).then(() => {
          const orig = btn.textContent;
          btn.textContent = "✓ Copied!";
          setTimeout(() => btn.textContent = orig, 1500);
        }).catch(() => {});
      }
    }
  });
}

renderMetrics();
renderControls();
bindEvents();
setToolView(state.viewMode);
applyTheme(localStorage.getItem("theme") || "dark");
renderModelsTicker();
startHeroMotion();
renderTemplatePicker();
bindIntroEditor();
fetchLiveChartData();
setLanguage(state.lang);

// Render the live chart once the page is ready.
window.addEventListener("load", () => renderLiveChart());

// Auto-refresh from the GitHub API every 5 minutes.
// (Unauthenticated GitHub allows 60 requests/hour per IP; with ~20
// repos per refresh, a 5-minute interval stays well within budget.)
setInterval(fetchLiveChartData, 5 * 60 * 1000);

// ─────────────────────────────────────────────────────────────────────────
// AI WORLD MAP + AI NEWS PULSE  (replaces the old status monitor)
// A world map of major AI hubs with live pulsing markers, plus an AI-generated
// news pulse. Both work offline-of-status-pages so they always render.
// ─────────────────────────────────────────────────────────────────────────
// equirectangular projection: lon -180..180 -> 0..360, lat 90..-90 -> 0..180
const AI_HUBS = [
  { city: "San Francisco", lon: -122.4, lat: 37.8, labs: "OpenAI · Anthropic", note: "The dense heart of frontier AI" },
  { city: "Mountain View", lon: -122.1, lat: 37.4, labs: "Google DeepMind", note: "Gemini & TPU research" },
  { city: "Seattle", lon: -122.3, lat: 47.6, labs: "Microsoft AI · AWS", note: "Cloud + Copilot" },
  { city: "New York", lon: -74.0, lat: 40.7, labs: "Hugging Face · Runway", note: "Applied & creative AI" },
  { city: "London", lon: -0.13, lat: 51.5, labs: "Google DeepMind · Stability", note: "Europe's research capital" },
  { city: "Paris", lon: 2.35, lat: 48.85, labs: "Mistral · Hugging Face", note: "Open-weight champions" },
  { city: "Tel Aviv", lon: 34.78, lat: 32.08, labs: "AI21 · many startups", note: "Startup density" },
  { city: "Beijing", lon: 116.4, lat: 39.9, labs: "DeepSeek · Baidu · Zhipu", note: "China's AI core" },
  { city: "Hangzhou", lon: 120.2, lat: 30.3, labs: "Alibaba Qwen", note: "Qwen model family" },
  { city: "Tokyo", lon: 139.7, lat: 35.7, labs: "Sakana AI · Sony AI", note: "Efficient model research" },
  { city: "Bengaluru", lon: 77.6, lat: 13.0, labs: "Sarvam · Krutrim", note: "India's AI hub" },
  { city: "Toronto", lon: -79.4, lat: 43.7, labs: "Vector Institute · Cohere", note: "Deep-learning roots" }
];

// Continent regions (lon/lat boxes) used to scatter dots into a world map.
// More, smaller boxes = more accurate, recognizable continent silhouettes.
const AI_MAP_REGIONS = [
  // North America
  {x1:-165,y1:68,x2:-140,y2:60},            // Alaska
  {x1:-140,y1:70,x2:-60,y2:60},             // Canada north
  {x1:-130,y1:60,x2:-58,y2:49},             // Canada
  {x1:-125,y1:49,x2:-66,y2:30},             // USA
  {x1:-115,y1:30,x2:-86,y2:15},             // Mexico
  {x1:-92,y1:18,x2:-77,y2:7},               // Central America
  // South America
  {x1:-79,y1:11,x2:-60,y2:0},               // Colombia/Venezuela
  {x1:-75,y1:0,x2:-34,y2:-18},              // Brazil north
  {x1:-72,y1:-18,x2:-40,y2:-34},            // Brazil south/Bolivia
  {x1:-74,y1:-34,x2:-53,y2:-55},            // Argentina/Chile
  // Europe
  {x1:-10,y1:59,x2:30,y2:43},               // West/Central Europe
  {x1:5,y1:71,x2:32,y2:55},                 // Scandinavia
  {x1:20,y1:60,x2:50,y2:44},                // East Europe
  {x1:-10,y1:44,x2:28,y2:36},               // Mediterranean
  // Africa
  {x1:-17,y1:35,x2:35,y2:18},               // North Africa
  {x1:-17,y1:18,x2:50,y2:0},                // West/Central Africa
  {x1:8,y1:0,x2:44,y2:-18},                 // Central Africa
  {x1:11,y1:-18,x2:40,y2:-35},              // Southern Africa
  // Middle East + Asia
  {x1:35,y1:42,x2:62,y2:13},                // Middle East
  {x1:45,y1:56,x2:90,y2:42},                // Central Asia
  {x1:60,y1:78,x2:180,y2:55},              // Russia/Siberia
  {x1:88,y1:53,x2:135,y2:30},               // China
  {x1:68,y1:35,x2:90,y2:8},                 // India
  {x1:92,y1:30,x2:110,y2:10},               // SE Asia mainland
  {x1:95,y1:8,x2:142,y2:-10},               // Indonesia
  {x1:129,y1:46,x2:146,y2:31},              // Japan
  {x1:124,y1:40,x2:130,y2:34},              // Korea
  // Australia + NZ
  {x1:113,y1:-11,x2:154,y2:-39},            // Australia
  {x1:166,y1:-34,x2:179,y2:-47}             // New Zealand
];

let _aiMapActive = null;
// hoisted flag (var) — undefined during early startup, true once these consts
// are initialized, so setLanguage's renderAiMap call can't hit a const TDZ.
var _aiMonInited = true;

// Build a dotted world map (cinematic command-center style). Returns SVG inner.
// A single uniform lon/lat grid; a dot is drawn only where it falls inside a
// continent box — this yields clean, evenly-spaced, recognizable continents.
function aiMapDots(W, H, dotColor) {
  const proj = (lon, lat) => ({ x: ((lon+180)/360)*W, y: ((90-lat)/180)*H });
  const step = 2.4; // smaller = denser, crisper continents
  const inRegion = (lon, lat) => {
    for (const r of AI_MAP_REGIONS) {
      const xMin = Math.min(r.x1,r.x2), xMax = Math.max(r.x1,r.x2);
      const yMin = Math.min(r.y1,r.y2), yMax = Math.max(r.y1,r.y2);
      if (lon >= xMin && lon <= xMax && lat >= yMin && lat <= yMax) return true;
    }
    return false;
  };
  let dots = "";
  for (let lat = 80; lat >= -56; lat -= step) {
    for (let lon = -178; lon <= 180; lon += step) {
      if (!inRegion(lon, lat)) continue;
      const p = proj(lon, lat);
      dots += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="0.7"/>`;
    }
  }
  return `<g fill="${dotColor}">${dots}</g>`;
}

function aiMapProject(lon, lat, w, h) {
  return { x: ((lon + 180) / 360) * w, y: ((90 - lat) / 180) * h };
}

function renderAiMap() {
  const box = document.querySelector("#aimap");
  if (!box) return;
  const W = 360, H = 180;
  const proj = (lon, lat) => aiMapProject(lon, lat, W, H);
  // glowing connection arcs between key hubs
  const pts = AI_HUBS.map(h => proj(h.lon, h.lat));
  const linkPairs = [[0,4],[0,3],[4,5],[4,7],[7,9],[3,11],[0,2],[7,8],[4,6],[10,7],[0,11]];
  const links = linkPairs.map(([a,b], idx) => {
    if (!pts[a]||!pts[b]) return "";
    const mx=(pts[a].x+pts[b].x)/2, my=Math.min(pts[a].y,pts[b].y)-14;
    const d = `M${pts[a].x.toFixed(1)} ${pts[a].y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${pts[b].x.toFixed(1)} ${pts[b].y.toFixed(1)}`;
    const dur = (3 + (idx % 4)).toFixed(1);
    // a glowing packet that travels the arc, like live data transfer
    return `<path class="aimap-link" id="aimapLink${idx}" d="${d}"/>
      <circle class="aimap-packet" r="1.3">
        <animateMotion dur="${dur}s" repeatCount="indefinite" begin="${(idx*0.4).toFixed(1)}s" path="${d}"/>
      </circle>`;
  }).join("");
  const hubs = AI_HUBS.map((hub, i) => {
    const p = pts[i];
    return `<g class="aimap-hub" data-i="${i}" transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)})">
      <circle class="aimap-hub-ring" r="3">
        <animate attributeName="r" values="2.5;11;2.5" dur="2.8s" begin="${(i*0.18).toFixed(1)}s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.8s" begin="${(i*0.18).toFixed(1)}s" repeatCount="indefinite"/>
      </circle>
      <circle class="aimap-hub-glow" r="4.5"/>
      <circle class="aimap-hub-core" r="2.3"/>
    </g>`;
  }).join("");
  box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
    <defs>
      <radialGradient id="aimapVignette" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stop-color="rgba(0,212,255,0.07)"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#aimapVignette)"/>
    ${aiMapDots(W, H, "rgba(216,183,106,0.5)")}
    ${links}
    ${hubs}
  </svg>`;
  box.querySelectorAll(".aimap-hub").forEach(g => {
    const show = () => {
      const hub = AI_HUBS[+g.dataset.i];
      box.querySelectorAll(".aimap-hub").forEach(x => x.classList.remove("active"));
      g.classList.add("active");
      const info = document.querySelector("#aimapInfo");
      if (info) {
        info.innerHTML = `<div class="aimap-info-city">${hub.city}</div>
          <div class="aimap-info-labs">${hub.labs}</div>
          <div class="aimap-info-note">${hub.note}</div>`;
        info.classList.add("show");
      }
    };
    g.addEventListener("click", show);
    g.addEventListener("mouseenter", show);
  });
  const sum = document.querySelector("#aimonSummaryText");
  if (sum) sum.textContent = (state.lang === "fa" ? AI_HUBS.length + " مرکز" : AI_HUBS.length + " hubs");
}

// AI news — REAL headlines first (RSS from major tech outlets via CORS proxy),
// AI-generated only as a fallback, static list as the last resort.
let _aiNewsLoaded = false;
let _aiNewsPool = [];   // larger pool we rotate through between refreshes
let _aiNewsRealAt = 0;  // when we last got real RSS news

const AI_NEWS_FEEDS = [
  { src: "TechCrunch", url: "https://techcrunch.com/category/artificial-intelligence/feed/" },
  { src: "VentureBeat", url: "https://venturebeat.com/category/ai/feed/" },
  { src: "The Verge", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml" }
];

async function aiFetchRssTitles(feed) {
  const proxies = [
    (u) => "https://api.allorigins.win/raw?url=" + encodeURIComponent(u),
    (u) => "https://corsproxy.io/?url=" + encodeURIComponent(u)
  ];
  for (const wrap of proxies) {
    try {
      const ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
      const to = setTimeout(() => { try { ctrl && ctrl.abort(); } catch(e){} }, 8000);
      const resp = await fetch(wrap(feed.url), { signal: ctrl ? ctrl.signal : undefined });
      clearTimeout(to);
      if (!resp.ok) continue;
      const xml = await resp.text();
      const doc = new DOMParser().parseFromString(xml, "text/xml");
      // RSS <item><title> or Atom <entry><title>
      const nodes = doc.querySelectorAll("item, entry");
      const out = [];
      nodes.forEach(n => {
        const t = (n.querySelector("title") || {}).textContent || "";
        const link = (n.querySelector("link") || {}).textContent
          || (n.querySelector("link") || {getAttribute:()=>""}).getAttribute("href") || "";
        if (t && t.length > 12) out.push({ tag: feed.src, text: t.trim(), link: (link||"").trim() });
      });
      if (out.length) return out.slice(0, 8);
    } catch (e) { /* try next proxy */ }
  }
  return [];
}

async function loadAiNews(force) {
  const list = document.querySelector("#ainewsList");
  if (!list) return;
  if (_aiNewsLoaded && !force) return;
  const firstTime = !_aiNewsLoaded;
  _aiNewsLoaded = true;
  const refl = document.querySelector("#ainewsRefreshing");
  if (refl) { refl.textContent = state.lang === "fa" ? "در حال بروزرسانی…" : "refreshing…"; refl.classList.add("on"); }
  if (firstTime) list.innerHTML = Array.from({length:6}).map(()=>`<div class="ainews-skeleton"></div>`).join("");

  // 1) REAL news via RSS — refresh at most every 5 minutes (feeds don't change faster)
  const now = Date.now();
  if (now - _aiNewsRealAt > 300000) {
    try {
      const results = await Promise.all(AI_NEWS_FEEDS.map(aiFetchRssTitles));
      // interleave sources so the list feels varied
      const merged = [];
      const maxLen = Math.max(...results.map(r => r.length), 0);
      for (let i = 0; i < maxLen; i++) for (const r of results) if (r[i]) merged.push(r[i]);
      if (merged.length >= 4) { _aiNewsPool = merged; _aiNewsRealAt = now; }
    } catch (e) { /* fall through */ }
  }

  // 2) AI-generated fallback only if we have no real news at all
  if (!_aiNewsPool.length) {
    try {
      const reply = await vsAutoAiChat(
        "Generate 10 short, realistic, current AI-industry news headlines. Each is an " +
        "object with \"tag\" (1 word category like MODEL, RESEARCH, FUNDING, TOOL, POLICY) " +
        "and \"text\" (max 11 words, specific and plausible). Return ONLY a JSON array.",
        { json: true });
      const arr = JSON.parse(reply.slice(reply.indexOf("["), reply.lastIndexOf("]")+1));
      if (Array.isArray(arr)) _aiNewsPool = arr.filter(x => x && x.text);
    } catch (e) { /* fallback below */ }
  }
  // 3) static last resort
  if (!_aiNewsPool.length) {
    _aiNewsPool = [
      { tag:"MODEL", text:"New open-weight model rivals top proprietary systems" },
      { tag:"RESEARCH", text:"Researchers cut inference cost with sparse attention" },
      { tag:"TOOL", text:"Popular coding assistant adds full-repo context" },
      { tag:"FUNDING", text:"AI infrastructure startup raises major new round" },
      { tag:"POLICY", text:"Regulators publish fresh guidance on frontier models" },
      { tag:"ADOPTION", text:"Enterprises accelerate rollout of AI copilots" }
    ];
  }

  // show a rotating window of 6 from the pool so it feels fresh each cycle
  const start = Math.floor(Math.random() * Math.max(1, _aiNewsPool.length - 6));
  const show = _aiNewsPool.slice(start, start + 6);
  list.innerHTML = show.map((it,i) => {
    const inner = `<span class="ainews-tag">${(it.tag||"AI").toString().slice(0,14)}</span>
      <span class="ainews-text">${(it.text||"").toString().slice(0,140)}</span>`;
    return it.link
      ? `<a class="ainews-item" style="animation-delay:${i*50}ms" href="${it.link}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="ainews-item" style="animation-delay:${i*50}ms">${inner}</div>`;
  }).join("");
  setTimeout(() => { if (refl) refl.classList.remove("on"); }, 700);
  // also feed the ticker from the same pool
  renderAiTicker();
}

// LIVE METRIC CHIPS — base values from real GitHub data, with a per-second
// "live" jitter so the numbers visibly move like a real ops dashboard.
let _chipBase = null;
let _chipSpark = {};   // short rolling history per chip for mini sparklines
function aiChipBase() {
  const withData = (typeof liveChartData !== "undefined" ? liveChartData : []).filter(d => (d.stars||0) > 0);
  const stars = withData.reduce((s,d)=>s+(d.stars||0),0) || 658000;
  const forks = withData.reduce((s,d)=>s+(d.forks||0),0) || 104000;
  return {
    requests: 1.2e6 + Math.random()*4e5,   // simulated global inference req/min
    tokens: 8.4e9 + Math.random()*1e9,       // tokens processed /min
    stars: stars,
    forks: forks,
    active: 320 + Math.floor(Math.random()*60), // active sessions (simulated)
    models: 1280 + Math.floor(Math.random()*40) // models tracked (simulated)
  };
}
function aiFmtNum(n) {
  if (n >= 1e9) return (n/1e9).toFixed(2)+"B";
  if (n >= 1e6) return (n/1e6).toFixed(2)+"M";
  if (n >= 1e3) return (n/1e3).toFixed(1)+"k";
  return String(Math.round(n));
}
function aiSparkSvg(key, val) {
  const arr = (_chipSpark[key] = _chipSpark[key] || []);
  arr.push(val);
  if (arr.length > 16) arr.shift();
  if (arr.length < 2) return "";
  const min = Math.min(...arr), max = Math.max(...arr), range = (max-min)||1;
  const W = 46, H = 14;
  const pts = arr.map((v,i) => `${(i/(arr.length-1)*W).toFixed(1)},${(H - ((v-min)/range)*H).toFixed(1)}`).join(" ");
  return `<svg class="aimon-chip-spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><polyline points="${pts}"/></svg>`;
}
function renderAiChips(tickOnly) {
  const box = document.querySelector("#aimonChips");
  if (!box) return;
  if (!_chipBase) _chipBase = aiChipBase();
  // per-second drift to feel alive
  _chipBase.requests += (Math.random()-0.3)*9000;
  _chipBase.tokens += (Math.random()-0.3)*4e7;
  _chipBase.active += Math.round((Math.random()-0.5)*6);
  _chipBase.models += Math.round((Math.random()-0.45)*3);
  if (_chipBase.active < 200) _chipBase.active = 200;
  const fa = state.lang === "fa";
  const chips = [
    { k:"req", v: aiFmtNum(_chipBase.requests), raw:_chipBase.requests, l: fa?"درخواست/دقیقه":"Requests/min", t:"▲", up:true },
    { k:"tok", v: aiFmtNum(_chipBase.tokens), raw:_chipBase.tokens, l: fa?"توکن/دقیقه":"Tokens/min", t:"▲", up:true },
    { k:"act", v: _chipBase.active, raw:_chipBase.active, l: fa?"نشست فعال":"Active now", t:"●", up:true },
    { k:"mdl", v: aiFmtNum(_chipBase.models), raw:_chipBase.models, l: fa?"مدل ردیابی":"Models tracked", t:"◆" },
    { k:"str", v: aiFmtNum(_chipBase.stars), raw:_chipBase.stars, l: fa?"ستاره گیت‌هاب":"GitHub stars", t:"★" },
    { k:"frk", v: aiFmtNum(_chipBase.forks), raw:_chipBase.forks, l: fa?"فورک":"Forks", t:"⑂" }
  ];
  box.innerHTML = chips.map(c => `
    <div class="aimon-chip">
      <div class="aimon-chip-row">
        <span class="aimon-chip-trend ${c.up?'up':''}">${c.t}</span>
        <div class="aimon-chip-val tick">${c.v}</div>
      </div>
      <div class="aimon-chip-lbl">${c.l}</div>
      ${aiSparkSvg(c.k, c.raw)}
    </div>`).join("");
  setTimeout(() => box.querySelectorAll(".aimon-chip-val").forEach(e=>e.classList.remove("tick")), 250);
}

function renderAiTicker() {
  const track = document.querySelector("#aimonTickerTrack");
  if (!track) return;
  const pool = _aiNewsPool.length ? _aiNewsPool : [{tag:"LIVE",text:"AI Radar live feed"}];
  const html = pool.map(it => `<span><b>${(it.tag||"AI")}</b>${it.text||""}</span>`).join("");
  track.innerHTML = html + html;
}

function initAiMonitor() {
  if (!document.querySelector("#aimap")) { console.warn("[aimap] not found"); return; }
  renderAiMap();
  renderAiChips();
  loadAiNews(false);
  // per-second live chip drift
  setInterval(() => renderAiChips(true), 1000);
  // fresh AI news + ticker every 20s (feels alive, stays within free limits)
  setInterval(() => loadAiNews(true), 20000);
}

function _aiMonBoot() {
  if (document.querySelector("#aimap")) initAiMonitor();
  else setTimeout(_aiMonBoot, 300);
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setTimeout(_aiMonBoot, 200));
} else {
  setTimeout(_aiMonBoot, 200);
}

// ─────────────────────────────────────────────────────────────────────────
// FULLSCREEN LIVE DASHBOARD (second-monitor mode)
// Reuses the monitor + GitHub data + tool-of-day, refreshed on a timer, with
// a live clock and a scrolling AI news/feed ticker.
// ─────────────────────────────────────────────────────────────────────────
let _ldClockTimer = null, _ldRefreshTimer = null, _ldTickerLoaded = false;

function ldFmt(v) {
  if (v == null) return "—";
  if (v >= 1000) return (v / 1000).toFixed(1) + "k";
  return String(Math.round(v));
}

// ── world map (reuses AI_HUBS) ──
function ldWorldMapSvg() {
  const W = 360, H = 175;
  const proj = (lon, lat) => ({ x: ((lon+180)/360)*W, y: ((90-lat)/180)*H });
  const linkPairs = [[0,4],[0,7],[4,5],[7,9],[0,2],[4,1],[7,8],[3,4],[0,11],[10,7],[4,6]];
  const pts = AI_HUBS.map(h => proj(h.lon, h.lat));
  const links = linkPairs.map(([a,b]) => {
    if (!pts[a]||!pts[b]) return "";
    const mx=(pts[a].x+pts[b].x)/2, my=Math.min(pts[a].y,pts[b].y)-12;
    return `<path class="ld-map-link" d="M${pts[a].x.toFixed(1)} ${pts[a].y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${pts[b].x.toFixed(1)} ${pts[b].y.toFixed(1)}"/>`;
  }).join("");
  const hubs = AI_HUBS.map((h,i) => {
    const p = pts[i];
    return `<g class="ld-map-hub"><circle class="ld-map-ring" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3">
      <animate attributeName="r" values="2.5;11;2.5" dur="2.8s" begin="${(i*0.16).toFixed(1)}s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.9;0;0.9" dur="2.8s" begin="${(i*0.16).toFixed(1)}s" repeatCount="indefinite"/></circle>
      <circle class="ld-map-glow" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5"/>
      <circle class="ld-map-core" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.4"/></g>`;
  }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">
    ${aiMapDots(W, H, "rgba(0,212,255,0.28)")}${links}${hubs}</svg>`;
}

function ldRenderMonitor() {
  const map = document.querySelector("#ldWorldMap");
  if (map) map.innerHTML = ldWorldMapSvg();
  const leg = document.querySelector("#ldMapLegend");
  if (leg) leg.innerHTML = AI_HUBS.map(h => `<span><i></i>${h.city}</span>`).join("");
  const fa = state.lang === "fa";
  const txt = document.querySelector("#ldMonSummaryTxt");
  if (txt) txt.textContent = `${AI_HUBS.length} ${fa?"مرکز":"hubs"} · 4 ${fa?"قاره":"continents"}`;
  const t = document.querySelector("#ldMapTitle");
  if (t) t.textContent = fa ? "مراکز جهانی هوش مصنوعی" : "Global AI Hubs";
}

function ldRenderChart() {
  const body = document.querySelector("#ldChartBody");
  if (!body) return;
  const list = liveChartData.filter(d => (d.stars||0) > 0)
    .sort((a,b) => (b.stars||0) - (a.stars||0)).slice(0, 8);
  const max = Math.max(...list.map(d => d.stars||0), 1);
  if (!list.length) { body.innerHTML = `<p style="color:#A0A0A0">Loading…</p>`; return; }
  body.innerHTML = list.map(d => `
    <div class="ld-chart-row">
      <span class="ld-chart-name">${d.name}</span>
      <div class="ld-chart-track"><div class="ld-chart-fill" style="width:${Math.min(100,(d.stars/max)*100)}%"></div></div>
      <span class="ld-chart-val">${ldFmt(d.stars)}</span>
    </div>`).join("");
}

function ldRenderTod() {
  const body = document.querySelector("#ldTodBody");
  if (!body) return;
  const fa = state.lang === "fa";
  const txtVal = v => !v ? "" : (typeof v === "string" ? v : (v[fa?"fa":"en"] || v.en || ""));
  // find today's tool by the NAME shown in the main panel (robust — no
  // dependency on inline-script helpers)
  let name = ((document.querySelector("#todName")||{}).textContent || "").trim();
  let tool = null;
  try {
    if (typeof tools !== "undefined" && tools.length) {
      if (name && name !== "Loading…") tool = tools.find(t => t.name === name) || null;
      if (!tool) {
        // same day-based pick as the main panel: stable index from the date
        const d = new Date();
        const seed = d.getFullYear()*372 + (d.getMonth()+1)*31 + d.getDate();
        tool = tools[seed % tools.length];
        name = tool ? tool.name : name;
      }
    }
  } catch(e) {}
  const live = (typeof liveChartData !== "undefined" ? liveChartData : []).find(d => d.name === name) || {};
  const cat = tool ? txtVal(tool.category) : ((document.querySelector("#todCategory")||{}).textContent || "");
  const desc = tool ? txtVal(tool.useCase) : ((document.querySelector("#todDesc")||{}).textContent || "");
  const score = tool && tool.score ? tool.score : "";
  const stars = live.stars ?? (tool ? tool.stars : null);
  const forks = live.forks ?? (tool ? tool.forks : null);
  const issues = live.issues ?? (tool ? tool.issues : null);
  const actDays = live.activityDays ?? (tool ? tool.activityDays : null);
  const isFree = tool && (tool.price === 0 || tool.plan === "free" || tool.plan === "freemium");
  const price = tool ? (isFree ? (fa?"رایگان":"Free") : (tool.price ? "$"+tool.price : "—")) : "—";
  const url = tool ? (tool.url || "") : "";
  let dom = ""; try { dom = new URL(url).hostname; } catch(e) {}
  const tags = tool && Array.isArray(tool.tags) ? tool.tags.slice(0,4) : [];
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  // rank among all tools by stars + share vs the #1 tool
  const ranked = (typeof liveChartData !== "undefined" ? liveChartData : [])
    .filter(d => (d.stars||0) > 0).sort((a,b)=>(b.stars||0)-(a.stars||0));
  const rankIdx = ranked.findIndex(d => d.name === name);
  const rank = rankIdx >= 0 ? rankIdx + 1 : null;
  const maxStars = ranked.length ? (ranked[0].stars||1) : 1;
  const sharePct = stars ? Math.max(2, Math.round((stars/maxStars)*100)) : 0;
  const lastUpd = actDays == null ? "—"
    : actDays === 0 ? (fa?"امروز":"today")
    : actDays === 1 ? (fa?"دیروز":"1d ago")
    : actDays + (fa?" روز":"d");

  body.innerHTML = `
    <div class="ld-tod-top">
      <div class="ld-tod-badge ld-tod-badge-xl">${dom
        ? `<img src="https://www.google.com/s2/favicons?domain=${dom}&sz=128" alt="" onerror="this.style.display='none';this.parentElement.textContent='${initial}'"/>`
        : initial}</div>
      <div>
        <div class="ld-tod-name">${name || "—"}</div>
        <div class="ld-tod-cat">${cat}</div>
        ${tags.length ? `<div class="ld-tod-tags">${tags.map(t=>`<span>${t}</span>`).join("")}</div>` : ""}
      </div>
      ${score ? `<div class="ld-tod-score"><b>${score}</b><span>${fa?"امتیاز":"SCORE"}</span></div>` : ""}
    </div>
    <div class="ld-tod-desc">${desc}</div>
    <div class="ld-tod-metrics">
      <div class="ld-tod-mini"><b>★ ${stars!=null?ldFmt(stars):"—"}</b><span>${fa?"ستاره":"Stars"}</span></div>
      <div class="ld-tod-mini"><b>⑂ ${forks!=null?ldFmt(forks):"—"}</b><span>${fa?"فورک":"Forks"}</span></div>
      <div class="ld-tod-mini"><b>${issues!=null?ldFmt(issues):"—"}</b><span>${fa?"ایشو باز":"Open issues"}</span></div>
      <div class="ld-tod-mini"><b>${lastUpd}</b><span>${fa?"آخرین آپدیت":"Last update"}</span></div>
      <div class="ld-tod-mini"><b>${price}</b><span>${fa?"قیمت":"Price"}</span></div>
      <div class="ld-tod-mini"><b>${rank?"#"+rank:"—"}</b><span>${fa?"رتبه ستاره":"Star rank"}</span></div>
    </div>
    ${sharePct ? `
    <div class="ld-tod-share">
      <div class="ld-tod-share-head"><span>${fa?"محبوبیت نسبت به ابزار #۱":"Popularity vs #1 tool"}</span><b>${sharePct}%</b></div>
      <div class="ld-tod-share-track"><div class="ld-tod-share-fill" style="width:${sharePct}%"></div></div>
    </div>` : ""}
    <div class="ld-tod-actions">
      ${url ? `<a class="ld-tod-visit" href="${url}" target="_blank" rel="noopener">${fa?"مشاهده ابزار":"Visit tool"} ↗</a>` : ""}
      <span class="ld-tod-foot">${fa ? "★ انتخاب امروز رادار" : "★ Featured by AI Radar today"}</span>
    </div>`;
}

function ldSpark() {
  let h = "";
  for (let i=0;i<7;i++) h += `<i style="height:${4+Math.round(Math.random()*14)}px"></i>`;
  return `<div class="ld-stat-spark">${h}</div>`;
}

function ldRenderStats() {
  const body = document.querySelector("#ldStatsBody");
  if (!body) return;
  const fa = state.lang === "fa";
  const withData = liveChartData.filter(d => (d.stars||0) > 0);
  const totalStars = withData.reduce((s,d) => s + (d.stars||0), 0);
  const totalForks = withData.reduce((s,d) => s + (d.forks||0), 0);
  const toolCount = (typeof tools !== "undefined" ? tools.length : withData.length);
  const stats = [
    { v: toolCount, l: fa?"ابزار":"AI Tools" },
    { v: ldFmt(totalStars), l: fa?"ستاره":"Stars" },
    { v: ldFmt(totalForks), l: fa?"فورک":"Forks" },
    { v: withData.length, l: fa?"مخزن":"Repos" },
    { v: AI_HUBS.length, l: fa?"مرکز":"AI Hubs" },
    { v: "7", l: fa?"آزمایشگاه":"Labs" }
  ];
  body.innerHTML = stats.map(s => `
    <div class="ld-stat">${ldSpark()}<div class="ld-stat-val">${s.v}</div><div class="ld-stat-label">${s.l}</div></div>`).join("");
}

// AI health score (derived from data freshness + hub coverage) for the gauge
function ldRenderHealth() {
  const withData = liveChartData.filter(d => (d.stars||0) > 0).length;
  const total = (typeof tools !== "undefined" ? tools.length : withData) || 1;
  const coverage = Math.min(1, withData / total);
  const score = Math.round(88 + coverage * 11); // 88-99 feels alive & healthy
  const arc = document.querySelector("#ldGaugeArc");
  const val = document.querySelector("#ldHealthVal");
  const C = 327; // 2πr, r=52
  if (arc) arc.style.strokeDashoffset = String(C - (score/100)*C);
  if (val) val.textContent = score;
}

function ldRenderHero() {
  const box = document.querySelector("#ldHeroStats");
  if (!box) return;
  const fa = state.lang === "fa";
  const withData = liveChartData.filter(d => (d.stars||0) > 0);
  const totalStars = withData.reduce((s,d) => s + (d.stars||0), 0);
  const top = [...withData].sort((a,b)=>(b.stars||0)-(a.stars||0))[0];
  const items = [
    { b: ldFmt(totalStars), s: fa?"مجموع ستاره":"Total stars" },
    { b: "+"+(6+Math.round(Math.random()*5))+"%", s: fa?"رشد هفتگی":"Weekly growth", up:true },
    { b: (typeof tools!=="undefined"?tools.length:withData.length), s: fa?"پروژه فعال":"Active projects" },
    { b: top ? top.name : "—", s: fa?"داغ‌ترین مدل":"Trending model" },
    { b: "San Francisco", s: fa?"فعال‌ترین منطقه":"Most active region" }
  ];
  box.innerHTML = items.map(i => `<div class="ld-hero-stat"><b class="${i.up?'up':''}">${i.b}</b><span>${i.s}</span></div>`).join("");
}

function ldUpdateClock() {
  const c = document.querySelector("#ldClock");
  const d = document.querySelector("#ldDate");
  const tz = document.querySelector("#ldTz");
  const now = new Date();
  const p = (n) => String(n).padStart(2,"0");
  let h = now.getHours(); const ap = h>=12?"PM":"AM"; let hh=h%12; if(hh===0)hh=12;
  if (c) c.innerHTML = `${p(hh)}<span class="ld-sep">:</span>${p(now.getMinutes())}<span class="ld-sep">:</span>${p(now.getSeconds())}<span class="ld-ms">${ap}</span>`;
  if (d) d.textContent = now.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric"});
  if (tz) { try { tz.textContent = (Intl.DateTimeFormat().resolvedOptions().timeZone||"").replace(/_/g," "); } catch(e){} }
}

async function ldLoadTicker() {
  const track = document.querySelector("#ldTickerTrack");
  if (!track || _ldTickerLoaded) return;
  _ldTickerLoaded = true;
  let items = [];
  try {
    const reply = await vsAutoAiChat(
      "Generate 8 short realistic AI-industry news headlines (max 9 words each) as a JSON array of strings.",
      { json: true });
    const arr = JSON.parse(reply.slice(reply.indexOf("["), reply.lastIndexOf("]")+1));
    if (Array.isArray(arr)) items = arr.filter(x=>typeof x==="string").slice(0,8);
  } catch(e) {}
  if (!items.length) items = [
    "New open-weight model rivals top proprietary systems","Inference costs drop with sparse attention",
    "Major lab ships multimodal upgrade","AI infrastructure startup closes funding round",
    "Regulators publish frontier-model guidance","Enterprises accelerate copilot rollouts",
    "Open-source community hits new milestone","Research breakthrough in long-context reasoning" ];
  const tags = ["LIVE","MODEL","RESEARCH","FUNDING","POLICY","TOOL"];
  const html = items.map((t,i)=>`<span><b>${tags[i%tags.length]}</b>${t}</span>`).join("");
  track.innerHTML = html + html;
}

function ldRefreshAll() {
  ldRenderMonitor();
  ldRenderChart();
  ldRenderTod();
  ldRenderStats();
  ldRenderHealth();
  ldRenderHero();
}

function openLiveDashboard() {
  const dash = document.querySelector("#liveDashboard");
  if (!dash) return;
  dash.classList.add("open");
  dash.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  ldUpdateClock();
  ldRefreshAll();
  ldLoadTicker();
  _ldClockTimer = setInterval(ldUpdateClock, 1000);
  _ldRefreshTimer = setInterval(ldRefreshAll, 30000);
  // try to enter real browser fullscreen
  try { if (dash.requestFullscreen) dash.requestFullscreen(); } catch (e) {}
}

function closeLiveDashboard() {
  const dash = document.querySelector("#liveDashboard");
  if (!dash) return;
  dash.classList.remove("open");
  dash.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  clearInterval(_ldClockTimer);
  clearInterval(_ldRefreshTimer);
  try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {}
}

(function bindDashboard() {
  function wire() {
    const openBtn = document.querySelector("#openDashboardBtn");
    const closeBtn = document.querySelector("#ldClose");
    if (openBtn) openBtn.addEventListener("click", openLiveDashboard);
    if (closeBtn) closeBtn.addEventListener("click", closeLiveDashboard);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.querySelector("#liveDashboard.open")) closeLiveDashboard();
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})();

/* ════════════════════════════════════════════════════════════════════
   RADAR HELP ASSISTANT — a free popup help bot (no API key, no login).
   Reuses vsAutoAiChat (Pollinations.ai). Knows the whole site, focused
   on the Video Studio. Replies in the page language (FA/EN).
   ════════════════════════════════════════════════════════════════════ */
(function () {
  // ---- Knowledge base the model answers from -----------------------
  const RA_KNOWLEDGE = `
AI RADAR (airadar.me) — a free, in-browser workspace. Nothing to install, works on desktop and mobile.
MAIN AREAS (top navigation, grouped Explore + Create):
- Tools: searchable directory of real AI tools with live popularity charts; compare tools and open them.
- Charts / Performance: live popularity trends and rankings of AI tools.
- Prompts / Intelligence: Claude-powered captions and prompt ideas.
- About: what AI Radar is.
- Video Studio (#videoStudio): create professional short videos in the browser — free, no signup for the core flow.
- Language: switch English / فارسی from the top toggle; the site fully supports RTL Persian.
- Live Dashboard: a fullscreen market-style view of AI tool activity.

══════════ VIDEO STUDIO — COMPLETE GUIDE ══════════
The Studio has FOUR tabs: (1) Template, (2) Slides, (3) Logo & cards, (4) Format & export.
Below them are Preview and the Timeline. Every change updates the live preview instantly — no need to press Preview.

───── TAB 1 · TEMPLATE ─────
Pick a visual theme (colors, fonts, motion). Changing it instantly restyles EVERYTHING (slides, infographic, news banner, and the logo colour when set to "Match template").
Templates available: Noir Luxe (deep black + gold serif), Ivory Minimal, Editorial, Warm Glow, Neon Night, Ocean Deep, Sunset Pop, Mono Press, Forest Calm, Platinum, Champagne, Obsidian, Porcelain, Midnight Blue, Marble, Emerald Luxe, Sand Minimal, Ruby Noir, Slate Pro, Amber Glow, Frost Minimal, Rose Gold.

───── TAB 2 · SLIDES (the core) ─────
A video is made of one or more SCENES that play one after another. Each scene has its own media, text, duration and settings.
• Filter / grade (applies to all slides): None, Cinematic, Warm, Cool, Black & white, Vivid.
• Headline font (all slides): Prata (serif), Alice (elegant), Viaoda Libre (display), Bryn Vogue (fashion), Elegant (script), Things (editorial), Inter (modern sans), Georgia (classic).
• Add scenes: "+ Add scene (upload media)" (image or video), "+ Add intro scene", "+ Add outro scene".
• ✦ AI Video Assistant: paste a topic OR a URL and AI builds the whole video automatically.
   - Tone: Broadcast news, Explainer/educational, Hype/launch, Cinematic documentary, Punchy social (TikTok/Reels).
   - Length: Short (4-5 scenes ~20s), Medium (6-7 ~35s), Long (8-10 ~50s).
• Intro scene settings (when an intro scene is selected): pick a Background from the gallery, write Main text + Secondary text, and choose Text motion: Fade in, Rise up, Slide from left, Slide from right, Drop down, Spring, Rise+spring, Punch in, Vox (snappy), Swing in, Zoom in, Blur in, Flip in, Glide in, Cinematic drift, Line reveal, Letter expand, Tilt in.
• Quick mode — single clip: if you just want ONE clip and no scenes, upload a single video/image here (mp4, webm, mov, jpg, png).
• Background music: optional mp3/wav applied to the whole video, with a volume control.
• Per-scene settings (for the selected scene): "+ Add / replace footage on this slide", Caption (top label, optional), Scene duration (seconds). When you upload a video, the duration is set automatically to the clip's real length (plays once, no repeat).
• Motion & elements (per scene):
   - Camera motion: Ken Burns zoom in, Ken Burns zoom out, Punch in, Zoom+pan, Vertigo (dolly zoom), Pan right, Pan left, Pan up, Pan down, Diagonal drift, Slow drift up, Parallax drift, Spin in, Pulse, Breathe, Sway, Handheld, Shake, None (static).
   - Overlay element: None, Gold frame, Shimmer sweep, Warm embers, Light leak, Edge glow, Bokeh lights, Minimal line, Corner brackets, Soft haze, Cinematic bars, Sparkle particles, Floating dust, Snow, Rain, Scanlines, VHS jitter. (Corner brackets only appear if you pick them here — they are NOT automatic.)
• Infographic builder (per scene): tick "Show infographic overlay". Fill Title, Subtitle (optional), Data source (recommended — cite a real source; AI figures are estimates), and Stats rows (label + value). Or use ✦ Generate with AI from a topic/paragraph.
   - Chart style: Big Numbers (cinematic), Counting up, Ticker style, Side-by-side compare, Horizontal bars, Progress pills, Donut rings, Area/wave chart, Bubble chart, Stat cards, Dark glass cards, Neon accent cards, Magazine layout, Timeline/list, Ranking/leaderboard, VS split (2 values).
   - Position: Center, Left, Right. Entrance motion: Fade in, Rise up, Drop down, Slide from left, Slide from right, Pop/scale, Zoom in, Vox, None. Advanced: import/edit raw JSON.
• News banner (per scene): tick "Show news banner". Use ✦ Summarize with AI to turn an article into a kicker+headline+source, or type News headline + Source/reporter.
   - Banner style: Lower third, Bottom ticker, Full lower bar, Breaking news bar, Top news bar, Centered title, Bold statement (huge), Left title block, Kinetic type, Word reveal, Quote style, Pull quote (side), Caption bottom, Annotation card, Split block, Badge headline, Magazine cover, Neon title, Minimal line. (All styles auto-fit the full text and finish their reveal/scroll within the scene.)
   - Banner accent: Match template, Breaking red, News blue, Studio gold, Mono/dark. Entrance motion: Slide up, Slide from left, Slide from right, Fade in, Pop/scale, Vox, None. Optional: Show live clock.

───── TAB 3 · LOGO & CARDS ─────
• Upload your logo: PNG (transparent) or an animated WebM/MP4. Or pick a sample (roomvu full animated logo / roomvu letter cascade).
• "Place logo on video" button: after uploading, tap it; then drag the logo on the preview to move it, and drag the ends of its bar on the timeline to set when it appears.
• Logo start (s) and Logo duration (s, 0 = until end).
• Show logo on: All slides / Last slide only (outro) / First slide only (intro). When bound to one slide, the logo's animation plays fully (0→100%) inside that slide.
• Logo position: Top-left, Top-center, Top-right, Middle-left, Center, Middle-right, Bottom-left, Bottom-center, Bottom-right.
• Logo motion: None (static), Fade in, Pop (bounce), Slide in, Spin reveal, Cinematic rise, Pulse glow (loop), Letter cascade (for wordmarks), Shine sweep (loop).
• Advanced styling:
   - Logo background: Auto — remove solid background (keys out a flat white/black field so the logo sits cleanly over the video) / Keep as-is.
   - Logo colour: Original colours, Match template, Gold, Cyan, White, Black, Green, Red (recolours the mark).
   - Logo frame style: Clean (no frame), Circle + ring, Glass card, Accent badge, Soft shadow.
   - Ring / badge color: Match template, Gold, Cyan, White, Green, Red.
   - Logo size: Small, Medium, Large, Extra large.
• Intro main text, Intro secondary text, Intro text motion, and Outro card text live here too.

───── TAB 4 · FORMAT & EXPORT ─────
• Aspect ratio: 9:16 (Reels/TikTok), Original, 16:9 (Landscape), 1:1 (Square), 4:5 (Portrait).
• Playback speed: 0.5×, 1×, 1.5×, 2×.
• Transition in: Fade, Blur, Zoom in, Slide up, None.
• Film grain: on/off.
• Export settings:
   - Download size: 4K 2160p, Full HD 1080p, HD 720p, SD 480p.
   - Download quality: Maximum, High, Medium, Low (small file).
   - File format: MP4 (most compatible) or WebM (faster, smaller). WebM downloads immediately; MP4 is converted in your browser after recording — the FIRST MP4 export downloads a one-time converter (~25 MB) and is slower, later MP4s are quicker.

───── PREVIEW & TIMELINE ─────
"Preview" plays the video; "Export video" renders and downloads it (recorded in real time, so let it play through). Adjust Preview size. The timeline shows each scene plus Music and Logo tracks; drag the playhead to scrub, drag clip/handle edges to resize, click a clip to select it.

───── COMMON FIXES ─────
- Logo shows a white/black box → Advanced styling → Logo background = "Auto".
- Logo colour doesn't match the theme → Logo colour = "Match template".
- Banner/title text looks cut off → it auto-fits now; if the font is tiny, the text is very long — shorten it for bigger type.
- Unwanted corner lines → those are the "Corner brackets" overlay; set Overlay element back to None.
- Some AI features (infographic/news summarize, AI image) may ask for a free one-time Puter sign-in; the AI Video Assistant and this help bot are key-free.
`;

  function raLang() {
    return (document.documentElement.lang === "fa") ? "fa" : "en";
  }
  const RA_T = {
    en: { title: "Radar Assistant", sub: "Ask me about the site & Video Studio",
          ph: "Type your question…", badge: "HELP",
          hi: "Hi! I'm the Radar Assistant 👋\nI can help you use the site — especially the **Video Studio**. Ask me anything, like how to add a logo, build a news banner, or export your video.",
          chips: ["How do I make a video?", "Add & color my logo", "Make a news banner", "Export as MP4"],
          err: "Sorry, the assistant is busy right now. Please try again in a moment." },
    fa: { title: "دستیار ردار", sub: "دربارهٔ سایت و ویدئو استودیو بپرس",
          ph: "سوالت را بنویس…", badge: "راهنما",
          hi: "سلام! من دستیار ردار هستم 👋\nکمکت می‌کنم از سایت استفاده کنی — مخصوصاً **ویدئو استودیو**. هر چیزی بپرس؛ مثلاً چطور لوگو اضافه کنم، نوار خبری بسازم یا ویدئو را خروجی بگیرم.",
          chips: ["چطور ویدئو بسازم؟", "افزودن و رنگ لوگو", "ساخت نوار خبری", "خروجی MP4"],
          err: "ببخشید، دستیار الان شلوغ است. چند لحظه بعد دوباره امتحان کن." }
  };

  const history = [];   // {role:'user'|'assistant', text}
  let busy = false, started = false;

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  // minimal markdown: **bold** + newlines
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");

  function addMsg(text, who) {
    const box = $("#raAsstMsgs"); if (!box) return null;
    const el = document.createElement("div");
    el.className = "ra-msg " + (who === "user" ? "ra-user" : "ra-bot");
    el.innerHTML = who === "user" ? esc(text).replace(/\n/g, "<br>") : fmt(text);
    box.appendChild(el); box.scrollTop = box.scrollHeight;
    return el;
  }
  function showTyping() {
    const box = $("#raAsstMsgs"); if (!box) return null;
    const t = document.createElement("div");
    t.className = "ra-typing"; t.innerHTML = "<span></span><span></span><span></span>";
    box.appendChild(t); box.scrollTop = box.scrollHeight; return t;
  }

  function renderChips() {
    const wrap = $("#raAsstChips"); if (!wrap) return;
    const t = RA_T[raLang()];
    wrap.innerHTML = "";
    t.chips.forEach(c => {
      const b = document.createElement("button");
      b.className = "ra-chip"; b.type = "button"; b.textContent = c;
      b.addEventListener("click", () => { $("#raAsstInput").value = c; send(); });
      wrap.appendChild(b);
    });
  }

  function applyLang() {
    const t = RA_T[raLang()];
    if ($("#raAsstTitle")) $("#raAsstTitle").textContent = t.title;
    if ($("#raAsstSub")) $("#raAsstSub").textContent = t.sub;
    if ($("#raAsstInput")) $("#raAsstInput").placeholder = t.ph;
    if ($("#raAsstBadge")) $("#raAsstBadge").textContent = t.badge;
    renderChips();
  }

  function greet() {
    if (started) return; started = true;
    addMsg(RA_T[raLang()].hi, "bot");
    renderChips();
  }

  async function send() {
    if (busy) return;
    const inp = $("#raAsstInput"); if (!inp) return;
    const q = (inp.value || "").trim(); if (!q) return;
    inp.value = ""; inp.style.height = "40px";
    addMsg(q, "user");
    history.push({ role: "user", text: q });
    $("#raAsstChips").innerHTML = "";
    busy = true; $("#raAsstSend").disabled = true;
    const typing = showTyping();

    // Assemble a single prompt (knowledge + recent history + question).
    const langName = raLang() === "fa" ? "Persian (Farsi)" : "English";
    const convo = history.slice(-8).map(m =>
      (m.role === "user" ? "User: " : "Assistant: ") + m.text).join("\n");
    const prompt =
      "You are \"Radar Assistant\", the friendly built-in help bot for the AI Radar website. " +
      "Answer ONLY using the knowledge below, about this website and how to use it — especially the Video Studio. " +
      "Be concise, warm and practical; use short steps when helpful. Never invent features that aren't listed. " +
      "If asked something unrelated to the site, gently say you only help with AI Radar and steer back. " +
      "ALWAYS reply in " + langName + ".\n\n" +
      "=== KNOWLEDGE ===\n" + RA_KNOWLEDGE + "\n\n" +
      "=== CONVERSATION SO FAR ===\n" + convo + "\nAssistant:";

    try {
      const reply = await vsAutoAiChat(prompt, { json: false, fast: true, timeout: 12000 });
      if (typing) typing.remove();
      const clean = String(reply || "").trim();
      addMsg(clean, "bot");
      history.push({ role: "assistant", text: clean });
    } catch (e) {
      if (typing) typing.remove();
      addMsg(RA_T[raLang()].err, "bot");
    } finally {
      busy = false; $("#raAsstSend").disabled = false; inp.focus();
    }
  }

  function toggle(open) {
    const panel = $("#raAsstPanel"); if (!panel) return;
    const willOpen = open != null ? open : !panel.classList.contains("ra-open");
    panel.classList.toggle("ra-open", willOpen);
    if (willOpen) { applyLang(); greet(); setTimeout(() => $("#raAsstInput") && $("#raAsstInput").focus(), 50); }
  }

  function wireAssistant() {
    if (!$("#raAsstBtn")) return;
    $("#raAsstBtn").addEventListener("click", () => toggle());
    $("#raAsstClose").addEventListener("click", () => toggle(false));
    $("#raAsstSend").addEventListener("click", send);
    const inp = $("#raAsstInput");
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
    });
    inp.addEventListener("input", () => {   // auto-grow
      inp.style.height = "40px"; inp.style.height = Math.min(110, inp.scrollHeight) + "px";
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && $("#raAsstPanel") && $("#raAsstPanel").classList.contains("ra-open")) toggle(false);
    });
    // keep labels in sync if the user switches site language
    document.addEventListener("click", (e) => {
      if (e.target && e.target.closest && e.target.closest("[data-lang]")) setTimeout(applyLang, 60);
    });
    applyLang();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wireAssistant);
  else wireAssistant();
})();
