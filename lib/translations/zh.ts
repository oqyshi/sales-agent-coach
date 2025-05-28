import { unknown } from "zod";

export const zh = {
    admin: {
        scenariosTitle: "场景",
        scenariosDescription: "添加、编辑或删除带有转录和分解的培训场景。",
        sessionsTitle: "代理会话",
        sessionsDescription: "查看销售代理提交的会话，包括反馈和统计信息。",
        usersTitle: "用户管理",
        usersDescription: "查看团队负责人和销售代理。按角色分配权限。",
        statsTitle: "统计信息",
        statsDescription: "查看录音趋势和用户活动洞察。",
        title: "管理仪表盘"
    },
    broadcast: {
        end: "结束广播",
        live: "直播中",
        start: "开始广播"
    },
    header: {
        title: "关于",
        about: "这是一个旨在演示如何在现代 Next 15 项目中使用 OpenAI 实时 API 和 WebRTC 的项目。它已安装了 shadcn/ui 组件并实现了 WebRTC 音频会话钩子。克隆项目并定义您自己的工具。",
        banner: "🎉 快来看看全新的 Next.js OpenAI 实时块用户界面库！",
        bannerLink: "了解更多 →",
        beta: "123ink",
        dark: "深色",
        dashboard: "仪表盘",
        login: "登录",
        logout: "登出",
        language: "语言",
        light: "浅色",
        logo: "WeWow 销售培训室",
        statistics: "统计",
        system: "系统",
        theme: "切换主题",
        twitter: "在推特上关注"
    },
    hero: {
        badge: "Next.js + shadcn/ui",
        subtitle: "点击下方按钮进行演示并尝试可用工具",
        title: "OpenAI 实时 API (WebRTC)"
    },
    messageControls: {
        content: "内容",
        filter: "按类型筛选",
        log: "控制台日志",
        logs: "对话记录",
        search: "搜索消息...",
        type: "类型",
        view: "查看日志"
    },
    recording: {
        title: "录音详情",
        agent: "代理",
        scenario: "场景",
        createdAt: "创建于",
        transcript: "转录",
        feedback: "反馈",
    },
    scenarios: {
        title: "场景",
        description: "场景描述",
        new: "新建场景",
        id: "场景 ID",
        by: "创建者",
        unknown: "未知",
        edit: "编辑",
        delete: "删除",
        confirmDelete: "您确定要删除此场景吗？",
        deleteFailed: "删除场景失败",
    },
    status: {
        error: "哎呀！",
        info: "正在切换语音助手...",
        language: "语言已从以下更改",
        session: "会话已建立",
        success: "我们已经开始直播了！",
        toggle: "正在切换语音助手..."
    },
    tokenUsage: {
        input: "输入令牌",
        output: "输出令牌",
        total: "总令牌数",
        usage: "令牌使用量"
    },
    tools: {
        availableTools: {
            title: "可用工具",
            copyFn: {
                description: '说"复制到剪贴板"以将其粘贴到某处。',
                name: "复制功能"
            },
            getTime: {
                description: '问"现在几点了？"以获取当前时间。',
                name: "获取时间"
            },
            launchWebsite: {
                description: '说"带我去[网站]"以在新标签页中打开网站。',
                name: "启动网站"
            },
            partyMode: {
                description: '说"开启派对模式"以启动动态彩带动画！',
                name: "派对模式"
            },
            themeSwitcher: {
                description: '说"更换背景"或"切换到深色模式"或"切换到浅色模式"。',
                name: "主题切换器"
            },
            scrapeWebsite: {
                name: "网页内容提取器",
                description: '说"提取[网站URL]的内容"来获取网页内容。'
            }
        },
        clipboard: {
            description: "您现在可以将其粘贴到某处。",
            success: "文本已复制到剪贴板。请让用户将其粘贴到某处。",
            toast: "文本已复制到剪贴板！"
        },
        launchWebsite: {
            description: "启动网站失败",
            success: "网站已启动！告诉用户网站已经打开。",
            toast: "正在启动网站 "
        },
        partyMode: {
            description: "无法激活派对模式",
            success: "派对模式已激活",
            toast: "派对模式！"
        },
        switchTheme: "主题已切换至 ",
        themeFailed: "主题切换失败",
        time: "向用户播报：当前时间是 ",
        scrapeWebsite: {
            success: "网页内容提取成功",
            description: "网页内容提取失败",
            toast: "正在提取网页内容..."
        }
    },
    transcriber: {
        title: "实时转录"
    },
    voice: {
        select: "选择语音",
        ash: "Ash - 温和专业",
        ballad: "Ballad - 温暖动人",
        coral: "Coral - 清晰友好",
        sage: "Sage - 权威平静",
        verse: "Verse - 富有表现力"
    },
    language: "Chinese",
    languagePrompt: "只用中文说话和回答。你一定要保持你的回答是中文的。如果用户说其他语言，你应该用中文回答。（Speak Chinese only）"
}