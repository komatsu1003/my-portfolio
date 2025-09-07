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
                content: '私のポートフォリオを作成していなかったため、勉強も兼ねて作成。',
            },
            {
                heading: '工夫した点',
                content: 'Framer Motionでアニメーションをつけ、見た目だけでなくUXも向上させました。',
            },
        ],
        imageUrl: '/images/20240907data2.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com/your-username/your-repo',
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
        imageUrl: 'https://placehold.jp/32/e07a5f/ffffff/1200x800.png?text=Task+App',
        tags: ['React', 'Firebase', 'Material-UI', 'Java'],
        githubUrl: 'https://github.com/your-username/your-repo',
        demoUrl: 'https://example.com',
    },
];
