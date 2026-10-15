import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "zh" | "en";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = (key: string) => translations[lang][key] ?? key;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be inside I18nProvider");
  return ctx;
}

const translations: Record<Lang, Record<string, string>> = {
  zh: {
    // Header
    nav_about: "栏目介绍",
    nav_host: "主理人",
    nav_cooperation: "合作模式",
    nav_contact: "联系我们",
    cta_book: "预约访谈",
    cta_menu: "菜单",

    // Hero
    hero_badge: "高端商业访谈栏目",
    hero_title: "THE UNICORN SHOW",
    hero_subtitle: "与世界企业家对话",
    hero_desc: "一档聚焦独角兽创始人、商业领袖与品牌主理人的深度访谈栏目。以电影级制作标准，记录商业思想的演化轨迹，连接全球资本与品牌势能。",
    hero_quote: "\u201C这不是一场普通采访，而是一次关于商业信仰的深度对话。\u201D",
    hero_cta_primary: "了解合作模式",
    hero_cta_secondary: "观看精选片段",

    // HostProfile
    host_label: "HOST",
    host_name: "Alan Voon",
    host_role: "栏目主理人 / 资深品牌顾问",
    host_bio: "20年品牌管理与营销经验，曾服务于多家世界500强企业。现任 Studio 2 品牌咨询创始人，致力于通过深度访谈连接中国企业家与全球商业视野。",
    host_tag_1: "品牌策略顾问",
    host_tag_2: "资深媒体人",
    host_tag_3: "独角兽研究专家",
    host_tag_4: "跨境商业 connector",
    host_tag_5: "AI 商业观察者",

    // Positioning
    pos_title: "五大核心定位",
    pos_desc: "聚焦全球商业生态中最具价值的连接节点",
    pos_1_title: "全球资本链接",
    pos_1_desc: "连接中国独角兽与全球顶级资本，搭建跨境投资对话桥梁",
    pos_2_title: "高端品牌叙事",
    pos_2_desc: "以电影级访谈记录品牌成长轨迹，打造可传播的商业叙事资产",
    pos_3_title: "AI & 科技前沿",
    pos_3_desc: "聚焦人工智能、硬科技领域独角兽，记录技术商业化的关键路径",
    pos_4_title: "企业出海赋能",
    pos_4_desc: "帮助中国品牌与企业家建立全球商业网络，加速国际化进程",
    pos_5_title: "品牌重塑升级",
    pos_5_desc: "通过深度内容访谈，助力成熟品牌完成年轻化与高端化转型",

    // ProgramFormats
    fmt_title: "节目形式",
    fmt_desc: "三大内容产品，覆盖品牌传播全链路",
    fmt_1_title: "深度访谈纪录片",
    fmt_1_desc: "45-60分钟深度对话，记录创始人商业哲学与品牌故事",
    fmt_2_title: "短视频精华系列",
    fmt_2_desc: "3-5分钟核心观点切片，适配社交媒体传播节奏",
    fmt_3_title: "商业圆桌论坛",
    fmt_3_desc: "多嘉宾对话形式，探讨行业趋势与商业洞察",

    // Production
    prod_title: "电影级制作标准",
    prod_desc: "每一期节目均以纪录片品质交付",
    prod_1_title: "4K 超高清摄制",
    prod_1_desc: "电影级摄影设备与灯光系统，确保每一帧画面具备品牌传播品质",
    prod_2_title: "专业后期团队",
    prod_2_desc: "调色、音效、剪辑全流程专业处理，适配多平台发布标准",
    prod_3_title: "全球化分发",
    prod_3_desc: "覆盖国内主流平台与海外 YouTube、LinkedIn 等渠道",

    // MediaSection
    media_title: "多媒体内容矩阵",
    media_desc: "视频、播客、图文，全形态内容覆盖",
    media_video_1: "品牌创始人访谈纪录片",
    media_video_2: "商业圆桌论坛精选",
    media_video_3: "行业洞察短视频系列",

    // ValueEcosystem
    val_title: "四位一体价值生态",
    val_desc: "为访谈嘉宾、赞助品牌、商业观众与资本机构创造共赢价值",
    val_1_title: "对访谈嘉宾",
    val_1_desc: "提升品牌势能，建立行业思想领导力，拓展资本与商业合作网络",
    val_2_title: "对赞助品牌",
    val_2_desc: "深度绑定高端商业内容，实现品牌调性与目标受众的精准匹配",
    val_3_title: "对商业观众",
    val_3_desc: "获取一线商业洞察，连接独角兽成长路径与投资机会",
    val_4_title: "对资本机构",
    val_4_desc: "提前触达高成长企业，通过内容建立投资信任与行业认知",

    // Stats
    stats_1_label: "全球观众覆盖",
    stats_1_value: "15M+",
    stats_2_label: "社交媒体粉丝",
    stats_2_value: "50,000+",
    stats_3_label: "平均完播率提升",
    stats_3_value: "1620%",
    stats_4_label: "合作品牌数量",
    stats_4_value: "100+",

    // Cooperation
    coop_title: "合作模式",
    coop_desc: "灵活多元的合作方案，适配不同阶段品牌需求",
    coop_1_title: "单期专访",
    coop_1_price: "¥29,800",
    coop_1_feature_1: "单期深度对话\n梳理创始人商业哲学",
    coop_1_feature_2: "1期 4K 纪实访谈",
    coop_1_feature_3: "3条 短视频精剪",
    coop_1_feature_4: "全网主流渠道分发",
    coop_2_title: "季度合作",
    coop_2_price: "¥69,800",
    coop_2_feature_1: "3期深度访谈系列",
    coop_2_feature_2: "9条 短视频矩阵",
    coop_2_feature_3: "品牌专题页面定制",
    coop_2_feature_4: "季度数据复盘报告",
    coop_3_title: "品牌年度合作",
    coop_3_price: "¥189,800+",
    coop_3_feature_1: "12期深度访谈年度系列",
    coop_3_feature_2: "品牌IP联名共建",
    coop_3_feature_3: "独家活动与发布会权益",
    coop_3_feature_4: "全渠道流量扶持",
    coop_4_title: "资本定制",
    coop_4_price: "面议",
    coop_4_feature_1: "投资组合品牌矩阵访谈",
    coop_4_feature_2: "LP/GP 品牌策略咨询",
    coop_4_feature_3: "独角兽榜单联合发布",
    coop_4_feature_4: "全球路演内容支持",

    // Process
    proc_title: "合作流程",
    proc_desc: "从洽谈到交付，六步高效闭环",
    proc_step_1: "初步洽谈",
    proc_step_1_desc: "需求沟通与目标对齐",
    proc_step_2: "评估匹配",
    proc_step_2_desc: "品牌调性与受众契合度分析",
    proc_step_3: "签约立项",
    proc_step_3_desc: "确认合作方案与排期",
    proc_step_4: "内容摄制",
    proc_step_4_desc: "专业团队执行深度访谈",
    proc_step_5: "后期制作",
    proc_step_5_desc: "剪辑、调色、包装全流程",
    proc_step_6: "交付分发",
    proc_step_6_desc: "多平台发布与数据追踪",

    // Contact
    contact_label: "CONTACT",
    contact_title: "联系我们",
    contact_desc: "无论是商务合作、媒体邀约，还是品牌咨询，我们的团队随时准备与您深入对话。期待与世界级的企业家和品牌同行。",
    contact_card_label_person: "联系人",
    contact_card_value_person: "Calvin Shen",
    contact_card_sub_person: "商务总监 / Business Director",
    contact_card_label_phone: "联系电话",
    contact_card_value_phone: "+86 139-1735-5922（中国内地）",
    contact_card_sub_phone: "+852 6939-3262（中国香港）",
    contact_card_label_email: "电子邮箱",
    contact_card_value_email: "shenzw22@gmail.com",
    contact_card_sub_email: "工作日 24 小时内回复",
    contact_card_label_address: "公司地址",
    contact_card_value_address: "上海 / 香港 / 海南 / 吉隆坡",
    contact_card_sub_address: "内地联络处：上海市杨浦滨江平凉路207号2层",
    contact_card_label_hours: "工作时间",
    contact_card_value_hours: "周一至周五",
    contact_card_sub_hours: "09:00 - 18:00 (GMT+8)",
    contact_social_label: "社交媒体",
    contact_social_desc: "关注 THE UNICORN SHOW，获取最新访谈与行业洞察",

    // Footer
    footer_brand_title: "独角兽访谈",
    footer_brand_desc: "与世界企业家对话，记录中国独角兽的成长轨迹。深度访谈、全球视野、资本链接。",
    footer_nav_title: "导航",
    footer_contact_title: "联系",
    footer_copyright: "(c) 2026 THE UNICORN SHOW. All rights reserved.",
    footer_tagline: "与世界企业家对话",

    // Lang switch
    lang_zh: "中",
    lang_en: "EN",
  },
  en: {
    // Header
    nav_about: "About",
    nav_host: "Host",
    nav_cooperation: "Cooperation",
    nav_contact: "Contact",
    cta_book: "Book Interview",
    cta_menu: "Menu",

    // Hero
    hero_badge: "Premium Business Interview Series",
    hero_title: "THE UNICORN SHOW",
    hero_subtitle: "Conversations with Global Entrepreneurs",
    hero_desc: "A premium interview series spotlighting unicorn founders, business leaders, and brand creators. Produced to documentary standards, capturing the evolution of business thought and connecting global capital with brand potential.",
    hero_quote: "\u201CThis is not an ordinary interview, but a deep dialogue about business belief.\u201D",
    hero_cta_primary: "Explore Cooperation",
    hero_cta_secondary: "Watch Highlights",

    // HostProfile
    host_label: "HOST",
    host_name: "Alan Voon",
    host_role: "Series Host / Senior Brand Consultant",
    host_bio: "20 years of brand management and marketing experience, having served multiple Fortune 500 companies. Founder of Studio 2 Brand Consulting, dedicated to connecting Chinese entrepreneurs with global business perspectives through in-depth interviews.",
    host_tag_1: "Brand Strategy Consultant",
    host_tag_2: "Senior Media Professional",
    host_tag_3: "Unicorn Research Expert",
    host_tag_4: "Cross-border Business Connector",
    host_tag_5: "AI Business Observer",

    // Positioning
    pos_title: "Five Core Positionings",
    pos_desc: "Focusing on the most valuable connection nodes in the global business ecosystem",
    pos_1_title: "Global Capital Link",
    pos_1_desc: "Connecting Chinese unicorns with top global capital, building cross-border investment dialogue bridges",
    pos_2_title: "Premium Brand Narrative",
    pos_2_desc: "Recording brand growth trajectories through cinematic interviews, creating distributable business narrative assets",
    pos_3_title: "AI & Tech Frontier",
    pos_3_desc: "Focusing on unicorns in AI and hard tech, recording key paths of technology commercialization",
    pos_4_title: "Global Expansion Enablement",
    pos_4_desc: "Helping Chinese brands and entrepreneurs build global business networks, accelerating internationalization",
    pos_5_title: "Brand Reinvention",
    pos_5_desc: "Through deep content interviews, helping established brands complete youth and premium transformation",

    // ProgramFormats
    fmt_title: "Program Formats",
    fmt_desc: "Three content products covering the full brand communication chain",
    fmt_1_title: "Documentary Interview",
    fmt_1_desc: "45-60 minute deep dialogue, recording founder business philosophy and brand stories",
    fmt_2_title: "Short-form Highlights",
    fmt_2_desc: "3-5 minute core insight clips, adapted for social media distribution rhythms",
    fmt_3_title: "Business Roundtable",
    fmt_3_desc: "Multi-guest dialogue format, exploring industry trends and business insights",

    // Production
    prod_title: "Cinematic Production Standards",
    prod_desc: "Every episode delivered with documentary quality",
    prod_1_title: "4K Ultra HD Production",
    prod_1_desc: "Cinematic camera equipment and lighting systems, ensuring every frame meets brand communication quality",
    prod_2_title: "Professional Post-production",
    prod_2_desc: "Full-process color grading, sound design, and editing, adapted for multi-platform publishing standards",
    prod_3_title: "Global Distribution",
    prod_3_desc: "Covering major domestic platforms and overseas channels including YouTube and LinkedIn",

    // MediaSection
    media_title: "Multi-media Content Matrix",
    media_desc: "Video, podcast, and editorial content covering all formats",
    media_video_1: "Brand Founder Documentary Interview",
    media_video_2: "Business Roundtable Highlights",
    media_video_3: "Industry Insight Short Video Series",

    // ValueEcosystem
    val_title: "Four-in-One Value Ecosystem",
    val_desc: "Creating win-win value for interview guests, sponsor brands, business audiences, and capital institutions",
    val_1_title: "For Interview Guests",
    val_1_desc: "Elevating brand potential, establishing industry thought leadership, expanding capital and business cooperation networks",
    val_2_title: "For Sponsor Brands",
    val_2_desc: "Deep integration with premium business content, achieving precise matching of brand tone and target audience",
    val_3_title: "For Business Audiences",
    val_3_desc: "Access first-hand business insights, connecting unicorn growth paths with investment opportunities",
    val_4_title: "For Capital Institutions",
    val_4_desc: "Early access to high-growth enterprises, building investment trust and industry recognition through content",

    // Stats
    stats_1_label: "Global Audience Reach",
    stats_1_value: "15M+",
    stats_2_label: "Social Media Followers",
    stats_2_value: "50,000+",
    stats_3_label: "Avg. Completion Rate Lift",
    stats_3_value: "1620%",
    stats_4_label: "Partner Brands",
    stats_4_value: "100+",

    // Cooperation
    coop_title: "Cooperation Models",
    coop_desc: "Flexible and diverse cooperation plans adapted to brands at different stages",
    coop_1_title: "Single Interview",
    coop_1_price: "¥29,800",
    coop_1_feature_1: "Single deep dialogue\nmapping founder business philosophy",
    coop_1_feature_2: "1 episode 4K documentary interview",
    coop_1_feature_3: "3 short-form video edits",
    coop_1_feature_4: "Distribution across major channels",
    coop_2_title: "Quarterly Plan",
    coop_2_price: "¥69,800",
    coop_2_feature_1: "3-episode deep interview series",
    coop_2_feature_2: "9 short-form video matrix",
    coop_2_feature_3: "Custom brand topic page",
    coop_2_feature_4: "Quarterly data review report",
    coop_3_title: "Annual Brand Partnership",
    coop_3_price: "¥189,800+",
    coop_3_feature_1: "12-episode annual deep interview series",
    coop_3_feature_2: "Brand IP co-creation",
    coop_3_feature_3: "Exclusive events and launch rights",
    coop_3_feature_4: "Full-channel traffic support",
    coop_4_title: "Capital Custom",
    coop_4_price: "Custom",
    coop_4_feature_1: "Investment portfolio brand matrix interviews",
    coop_4_feature_2: "LP/GP brand strategy consulting",
    coop_4_feature_3: "Unicorn ranking co-release",
    coop_4_feature_4: "Global roadshow content support",

    // Process
    proc_title: "Cooperation Process",
    proc_desc: "From inquiry to delivery, six-step efficient closed loop",
    proc_step_1: "Initial Inquiry",
    proc_step_1_desc: "Needs communication and goal alignment",
    proc_step_2: "Evaluation & Matching",
    proc_step_2_desc: "Brand tone and audience fit analysis",
    proc_step_3: "Contract & Kickoff",
    proc_step_3_desc: "Confirm cooperation plan and schedule",
    proc_step_4: "Content Production",
    proc_step_4_desc: "Professional team executes deep interview",
    proc_step_5: "Post-production",
    proc_step_5_desc: "Full-process editing, color grading, and packaging",
    proc_step_6: "Delivery & Distribution",
    proc_step_6_desc: "Multi-platform publishing and data tracking",

    // Contact
    contact_label: "CONTACT",
    contact_title: "Contact Us",
    contact_desc: "Whether for business cooperation, media collaboration, or brand consultation, our team is always ready for in-depth dialogue with you. We look forward to connecting with world-class entrepreneurs and brands.",
    contact_card_label_person: "Contact Person",
    contact_card_value_person: "Calvin Shen",
    contact_card_sub_person: "Business Director",
    contact_card_label_phone: "Phone",
    contact_card_value_phone: "+86 139-1735-5922 (Mainland China)",
    contact_card_sub_phone: "+852 6939-3262 (Hong Kong)",
    contact_card_label_email: "Email",
    contact_card_value_email: "shenzw22@gmail.com",
    contact_card_sub_email: "Reply within 24 hours on business days",
    contact_card_label_address: "Address",
    contact_card_value_address: "Shanghai / Hong Kong / Hainan / Kuala Lumpur",
    contact_card_sub_address: "Mainland Office: 2F, 207 Pingliang Road, Yangpu Binjiang, Shanghai",
    contact_card_label_hours: "Working Hours",
    contact_card_value_hours: "Mon - Fri",
    contact_card_sub_hours: "09:00 - 18:00 (GMT+8)",
    contact_social_label: "Social Media",
    contact_social_desc: "Follow THE UNICORN SHOW for latest interviews and industry insights",

    // Footer
    footer_brand_title: "Unicorn Interview",
    footer_brand_desc: "Conversations with global entrepreneurs, recording the growth trajectories of Chinese unicorns. Deep interviews, global vision, capital connections.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contact",
    footer_copyright: "(c) 2026 THE UNICORN SHOW. All rights reserved.",
    footer_tagline: "Conversations with Global Entrepreneurs",

    // Lang switch
    lang_zh: "中",
    lang_en: "EN",
  },
};
