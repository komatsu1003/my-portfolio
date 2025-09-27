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

// 工夫した点（技術的挑戦・UX改善・パフォーマンス・既存サービスとの差別化点など）

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
            "/images/id1/20240907data2.png",
        ],
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', '個人開発'],
        githubUrl: 'https://github.com/komatsu1003/my-portfolio',
        demoUrl: null,
    },
    {
        id: 2,
        title: '迷宮に迷い込んでしまった王様の脱出ゲーム',
        date: '2023/07/27',
        description: 'Processingで作成した脱出ゲーム',
        sections: [
            {
                heading: '概要',
                content: 'このゲームは、「迷宮に迷い込んでしまった王様の脱出ゲーム」をコンセプトに、ファンタジーチックなドット絵を使用して、ファミコンにあるような、レトロゲームを目指しました。脱出ゲームのコンセプトは、様々な謎やイベントをこなして鍵を集めて、その鍵が集まったら扉が開き、その扉の先にある脱出用のゲートから脱出するというものです。ストーリーは、ある日迷宮で異変が起こっていると聞いた王様が、迷宮の様子を見に騎士たちを連れて自らが出向いたところ、王様たちは転移罠を踏んでしまい、迷宮の中に迷い込んでしまったというストーリーです。',
            },
            {
                heading: '制作背景',
                content: '大学の講義の一環で制作しました。',
            },
            {
                heading: '開発期間',
                content: '2023/07/14 ~ 2023/07/27',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: '開発ツール・環境',
                        items: ['Processing'],
                    },
                ],
            },
            {
                heading: '苦労した点',
                content: 'キャラクターの動作と画像の同期が難しく、キャラクターの向きは変わるけどもその場から移動しなかったり、キャラクターは移動してもキャラクターの向きは一方向を向いたままだったりと、想定した挙動が得られませんでした。試行錯誤を重ねた結果、根本の部分の画像処理とキャラクター制御を分離して設計し直すことで改善しました。また、謎解き要素の実装では、キーの連続押しを判定する処理をbooleanを用いることで簡易的に設計しました。当初は仕組みが理解しきれず時間を要しましたが、flagを活用した条件分岐を取り入れることで判定が確実なものとなり、バグを減らすことができました。画面遷移においても、テレポートに触れるとシーン1へ戻す処理を実装する際に、画像やキャラクターのサイズ調整や条件分岐に工夫が必要な点に苦労しました。脱出ゲートの点滅処理では millis 関数を活用し、表示切り替えを制御する方法を導入しました。さらに、宝箱の開閉音に関しては、サウンドが鳴り続ける問題が発生しましたが、if 文と論理演算子を組み合わせて一度だけ再生されるように制御しました。',
            },
            {
                heading: '制作した感想',
                content: 'この作品を完成させた際、「一つのゲームを形にするためには多くの時間と工夫が必要である」と実感しました。キャラクターを動かす処理に苦労したり、コードを書いても意図した挙動が得られなかったりと、想定以上に時間を要しました。そのためデザインや脱出までの仕掛けといった細部まで作り込みたい部分に十分な時間を割けず、完成度としては満足しきれない点もありました。一方で、問題解決の過程で重要な学びも得られました。当初は一人で調べながら進めていましたが、情報が見つからず行き詰まる場面がありました。その際に周囲の人へ相談したところ、短時間で解決できました。この経験から、プログラミングにおいては「自ら調べる力」と同時に「人に聞く力」も非常に大切であると学びました。今後は、十分な開発時間を確保し、わからないことを相談できる環境を活用しながら、より完成度の高い作品づくりに挑戦していきたいと考えています。',
            },
            {
                heading: '制作するにあたって参考にしたもの',
                content: 'この作品を完成させた際、「一つのゲームを形にするためには多くの時間と工夫が必要である」と実感しました。キャラクターを動かす処理に苦労したり、コードを書いても意図した挙動が得られなかったりと、想定以上に時間を要しました。そのためデザインや脱出までの仕掛けといった細部まで作り込みたい部分に十分な時間を割けず、完成度としては満足しきれない点もありました。一方で、問題解決の過程で重要な学びも得られました。当初は一人で調べながら進めていましたが、情報が見つからず行き詰まる場面がありました。その際に周囲の人へ相談したところ、短時間で解決できました。この経験から、プログラミングにおいては「自ら調べる力」と同時に「人に聞く力」も非常に大切であると学びました。今後は、十分な開発時間を確保し、わからないことを相談できる環境を活用しながら、より完成度の高い作品づくりに挑戦していきたいと考えています。',
            },
        ],
        images: [
            "/images/id2/image1.png",
            "/images/id2/image2.png",
            "/images/id2/image3.png",
            "/images/id2/image4.png",
            "/images/id2/image5.png",
            "/images/id2/image6.png",
            "/images/id2/image7.png",
            "/images/id2/image8.png",
            "/images/id2/image9.png",
            "/images/id2/image10.png",
            "/images/id2/image11.png",
            "/images/id2/image12.png",
            "/images/id2/image13.png",
        ],
        tags: ['Processing', '個人開発', '講義',],
        githubUrl: 'https://github.com/komatsu1003/Escape-Game',
        demoUrl: null,
    },
    {
        id: 3,
        title: 'dino-game',
        date: '2023/12/27',
        description: 'JavaScriptで再現した接続待ちの時にやるあのゲーム',
        sections: [
            {
                heading: '概要',
                content: 'Google Chrome のオフラインゲーム「Chrome Dino Game」を Canvas API と JavaScript で再現した。',
            },
            {
                heading: '制作背景',
                content: 'ZEN StudyのWebアプリケーション開発コースで提供されていた教材をもとに制作。Canvas APIやJavaScriptのアニメーション処理を理解することを目的とした。',
            },
            {
                heading: '開発期間',
                content: '2023/09/12',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: 'フロントエンド',
                        items: ['HTML', 'JavaScript', 'Canvas API'],
                    },
                    {
                        subheading: '開発ツール・環境',
                        items: ['VSCode', 'ブラウザ（Chrome）での動作確認',],
                    },
                    {
                        subheading: 'デプロイ先',
                        items: ['GitHub Pages'],
                    }
                ],
            },
            {
                heading: '制作した感想',
                content: 'Canvas API の基本操作だけでなく、アニメーションや当たり判定の実装方法を体系的に理解できました。',
            },
        ],
        images: [
            "/images/id3/image1.png",
            "/images/id3/image2.png",
            "/images/id3/image3.png",
        ],
        tags: ['HTML/CSS', 'JavaScript', 'Canvas API', '個人開発',],
        githubUrl: 'https://github.com/komatsu1003/dino-game',
        demoUrl: 'https://komatsu1003.github.io/dino-game/',
    },
];
