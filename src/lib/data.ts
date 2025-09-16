export type SectionContent =
    | string
    | { subheading: string; items: string[] }[];

export type Section = {
    heading: string;
    content: SectionContent;
};

export type Work = {
    id: number;
    title: string;
    description: string;
    date: string;
    sections: { heading: string; content: string }[];
    images: string[]; // 必ず配列
    tags: string[];
    githubUrl: string;
    demoUrl: string | null;
};

// 以下、セクションでの項目例

// 概要（目的・背景）

// どんな課題を解決するために作ったのか(制作背景)

// どういう意図・モチベーションで開発したのか

// 開発内容（役割・工夫点）

// 自分が担当した部分（フロント・バック・設計など）

// 工夫した点（技術的挑戦・UX改善・パフォーマンスなど）

// 使用技術

// フレームワーク、言語、ツールなど

// 成果 / 実績

// 数値で示せる成果（ユーザー数、処理速度改善など）

// 期間（開発にかけた時間・期間）

// チーム人数と自分の役割、開発規模（チーム開発の場合）

// 今後の改善点 / 学び
export const worksData = [
    {
        id: 1,
        title: 'ポートフォリオサイト',
        date: '2025/09/03',
        description: '自身のスキルと制作物を紹介するためのWebサイト。',
        sections: [
            {
                heading: '概要',
                content: 'Next.jsとTypeScriptを用いて、制作物やスキルを分かりやすく見せるWebサイトを開発。',
            },
            {
                heading: '制作背景',
                content: '私自身のポートフォリオサイトを作成していなかったため、勉強も兼ねて作成してみました。',
            },
            {
                heading: '開発期間',
                content: '2024/08 ~',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: 'フロントエンド',
                        items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Swiper.js', 'Next/Image'],
                    },
                    {
                        subheading: '開発ツール・環境',
                        items: ['VSCode', 'Node.js', 'npm / pnpm / yarn', 'ESLint / Prettier'],
                    },
                    {
                        subheading: 'デプロイ先',
                        items: ['Cloudflare Pages'],
                    },
                ],
            },
            {
                heading: '工夫した点',
                content: 'Framer Motionでアニメーションをつけ、見た目だけでなくUXも向上させました。また、Filter機能をつけることで保守性を高めました。',
            },
        ],
        images: [
            "/images/20240907data2.png",
        ],
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', '個人開発'],
        githubUrl: 'https://github.com/komatsu1003/my-portfolio',
        demoUrl: null,
    },

    {
        id: 2,
        title: 'タスク管理アプリ',
        date: '2025/08/26',
        description: '日々のタスクを効率的に管理するアプリ。',
        sections: [
            {
                heading: '概要',
                content: 'ReactとFirebaseを使い、リアルタイムでタスクを同期できるアプリ。',
            },
            {
                heading: '工夫した点',
                content: 'ユーザー認証機能を実装し、個人ごとにタスクを管理可能にしました。',
            },
        ],
        images: [
            "/images/college.png",
            "/images/20240907data2.png",
        ],
        tags: ['React', 'Firebase', 'Material-UI', 'Java'],
        githubUrl: 'https://github.com/your-username/your-repo',
        demoUrl: 'https://example.com',
    },
    {
        id: 3,
        title: 'タスク管理アプリ',
        date: '2025/09/26',
        description: '日々のタスクを効率的に管理するアプリ。',
        sections: [
            {
                heading: '概要',
                content: 'ReactとFirebaseを使い、リアルタイムでタスクを同期できるアプリ。',
            },
            {
                heading: '工夫した点',
                content: 'ユーザー認証機能を実装し、個人ごとにタスクを管理可能にしました。',
            },
        ],
        images: [
            "/images/college.png",
            "/images/20240907data2.png",
        ],
        tags: ['React', 'Firebase', 'Material-UI', 'Java'],
        githubUrl: 'https://github.com/your-username/your-repo',
        demoUrl: 'https://example.com',
    },
];
