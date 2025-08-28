export const worksData = [
    {
        id: 1,
        title: 'ポートフォリオサイト',
        description: '自身のスキルと制作物を紹介するためのWebサイト。',
        sections: [
            {
                heading: '概要',
                content: 'Next.jsとTypeScriptを用いて、制作物やスキルを分かりやすく見せるWebサイトを開発。',
            },
            {
                heading: '制作背景',
                content: 'ポートフォリオサイトが古くなったため、React系技術で一から作り直しました。',
            },
            {
                heading: '工夫した点',
                content: 'Framer Motionでアニメーションをつけ、見た目だけでなくUXも向上させました。',
            },
        ],
        imageUrl: 'https://placehold.jp/32/3d4059/ffffff/1200x800.png?text=Portfolio',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        githubUrl: 'https://github.com/your-username/your-repo',
        demoUrl: null,
    },

    {
        id: 2,
        title: 'タスク管理アプリ',
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
