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
    demoUrl?: string | null;
    slideUrl?: string | null;
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
        githubUrl: 'https://github.com/komatsu1003/my-portfolio'
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
        ],
        tags: ['Processing', '個人開発', '講義',],
        githubUrl: 'https://github.com/komatsu1003/Escape-Game'
    },
    {
        id: 3,
        title: 'dino-game',
        date: '2023/09/12',
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
        tags: ['HTML/CSS', 'JavaScript', 'Canvas API', '個人開発'],
        githubUrl: 'https://github.com/komatsu1003/dino-game',
        demoUrl: 'https://komatsu1003.github.io/dino-game/',
    },
    {
        id: 4,
        title: '水風船のスリットアニメーション',
        date: '2023/06/12',
        description: 'グリッドの移動で躍動的に動く水風船を作成しました。',
        sections: [
            {
                heading: '概要',
                content: 'GIMPで作成したデジタルスリットアニメーション。4枚の静止画を縦ストライプ状に切り出し、それを移動させることで、あたかも画像が動いているように見せる手法を用いています。',
            },
            {
                heading: '制作背景',
                content: '講義内にてアニメーション作品を自由に作成し提出するというものがあり、私はスリットアニメーションというものがPCで再現できると知り作成しました。',
            },
            {
                heading: '開発期間',
                content: '2023/06/08 ~ 2023/06/12',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: '画像編集・レイヤー操作',
                        items: ['GIMP'],
                    },
                    {
                        subheading: 'デプロイ先',
                        items: ['Youtube'],
                    }
                ],
            },
            {
                heading: '制作した感想',
                content: '静止画の集合から動きを生み出すアニメーション表現の面白さを実感しました。アナログ手法をデジタルで再現する際の難しさを知り、表現の幅を広げる学びとなった。また、自主的に調べて試行錯誤することで、制作のプロセス自体も貴重な経験になりました。',
            },
        ],
        images: [
            "/images/id4/image1.png",
        ],
        tags: ['GIMP', '講義', 'アニメーション', '個人開発'],
        demoUrl: 'https://youtu.be/mMEBRwy5mx8',
    },
    {
        id: 5,
        title: 'リアルタイム顔認証システム',
        date: '2025/06/28',
        description: 'Google Colab上で動作するリアルタイム顔認識システム。',
        sections: [
            {
                heading: '概要',
                content: 'パーソルクロステクノロジー1dayインターンでの制作物です。Google Colab上で動作し、顔を検出・表示しています。ブラウザからのカメラ入力をPythonで処理し、リアルタイムで結果を返す仕組みを構築しました。',
            },
            {
                heading: '開発期間',
                content: '2025/6/28',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: '主要ライブラリ',
                        items: ['discord.py', 'asyncio', 'emoji', 'random'],
                    },
                    {
                        subheading: '開発ツール・環境',
                        items: ['VScode', 'Python', 'ChatGPT'],
                    },
                ],
            },
            {
                heading: '得られた学び',
                content: 'このリアルタイム顔認識システムを制作する過程で、PythonとOpenCVを用いた画像処理の扱い方を実践的に学ぶことができました。',
            }
        ],
        images: [
            "/images/id5/image1.png",
        ],
        tags: ['Python', '個人開発', 'インターン'],
        githubUrl: 'https://github.com/komatsu1003/Persol-intern'
    },
    {
        id: 6,
        title: 'DiscordDuelBot',
        date: '2024/06/28',
        description: 'Hack-a-SEN優秀賞受賞作品',
        sections: [
            {
                heading: '概要',
                content: 'Discord上で2人のプレイヤーがリアクション操作によって対戦できる、ターン制バトルBotです。プレイヤーは「戦士」「魔法使い」「狩人」からクラスを選択し、それぞれ異なるステータスとスキルを駆使して戦います。攻撃やスキルはリアクションボタンで選択し、HPが0になったプレイヤーが敗北となります。テキストチャンネルで進行する手軽なゲームとして、友人同士で楽しめるBotを目指しました。',
            },
            {
                heading: '開発期間',
                content: '2024/11/09 ~ 2024/11/10',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: '主要ライブラリ',
                        items: ['discord.py', 'asyncio', 'emoji', 'random'],
                    },
                    {
                        subheading: '開発ツール・環境',
                        items: ['VSCode', 'Python', 'macOS', 'Discord API（Botトークン連携）'],
                    },
                ],
            },
            {
                heading: '作成してみて',
                content: 'Discord Botを今までに作成したことがなく、わからないことが多かったが恊働での開発でどのように進めていくかを話し、納得のいく物が作ることができました。また、Discord API活用や拡張性を意識した設計で、実践的なBot開発の知見を得ることができました。'
            }
        ],
        images: [
            "/images/id6/image1.png",
        ],
        tags: ['Python', 'チーム開発', 'Bot開発', 'ハッカソン'],
        githubUrl: 'https://github.com/komatsu1003/1v1Discordbot',
        demoUrl: 'https://youtu.be/IZloPmxBuyI',
        slideUrl: 'https://docs.google.com/presentation/d/1gBoRhIJFPGH_LWq_Lpi4ohQS_J3yiZz2pcMH964y2pc/edit?slide=id.p#slide=id.p'
    },
    {
        id: 7,
        title: '色検索アプリ',
        date: '2024/05/21 ~ ',
        description: 'ローカルライブラリにある画像を色で検索することができるスマホ向けアプリ',
        sections: [
            {
                heading: '概要',
                content: 'スマートフォン内の膨大な写真ライブラリから、「特定の色」をキーに画像を検索するFlutter製モバイルアプリケーションです。',
            },
            {
                heading: '開発期間',
                content: '2024/05/21 ~',
            },
            {
                heading: '使用技術',
                content: [
                    {
                        subheading: '言語・フレームワーク',
                        items: ['Dart', 'Flutter Framework']
                    },
                    {
                        subheading: '主要ライブラリ',
                        items: ['photo_manager (ローカル画像アクセス)', 'image', 'flutter_material_color_picker']
                    },
                    {
                        subheading: '開発ツール・環境',
                        items: ['VSCode', 'Flutter SDK', 'Xcode (iOSシミュレータ)', 'macOS']
                    }
                ],
            },
            {
                heading: '作成してみて',
                content: '「特定の色の写真を探したい」という自身の課題を解決するために開発しました。当初、全ピクセルを走査するアルゴリズムでは動作が重く、実用性に大きな課題がありました。速度改善のため「平均色」を導入しましたが、今度は「赤色の花」の写真がヒットしないなど、機械の計算と人間の感覚のズレという新たな問題に直面しました。その原因を分析し、RGB色空間から人間の知覚に近い「HSV色空間」での判定アルゴリズムに再設計することで、処理速度と検索精度の両立に成功しました。仮説と検証を繰り返し、アルゴリズムを改善していく実践的なプロセスを深く学ぶことができました。'
            }
        ],
        images: [
            "/images/id7/image1.png",
            "/images/id7/image2.png",
        ],
        tags: ['Flutter', 'Dart', '個人開発', '画像処理', 'モバイルアプリ'],
        githubUrl: 'https://github.com/komatsu1003/flutter-photo-search',
        demoUrl: 'https://youtube.com/shorts/j-jNRwy_0I8?feature=share',
    },
];
