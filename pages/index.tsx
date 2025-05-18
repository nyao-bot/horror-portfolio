import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showScare, setShowScare] = useState(false);
  const scareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setShowScare(bottomReached);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const horrorWords = [
    '仕様書が… ない',
    '納期：昨日',
    'テストコード未提出',
    '本番環境で直接修正して',
    'Git履歴、壊れました',
    'マージコンフリクト大量発生',
    '要件がまた変わりました',
    'ログが…出てない',
    '今週リリースです',
    'npm install 全削除されました',
    'セキュリティホール発見（特大）',
    '上司がコードレビューします',
    'それ、Excelでできるよね？',
  ];

  return (
    <>
      <Head>
        <title>Horror Portfolio</title>
      </Head>

      <main
        className="min-h-screen text-orange-400 flex flex-col items-center justify-center px-6 relative overflow-hidden"
        style={{
          backgroundImage: `url("/zombie-silhouette.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.9)',
        }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.99)' }}
        ></div>
        <div className="fog-layer"></div>
        <div className="noise-layer"></div>
        <div className="torch-light z-10"></div>

        <div className="relative z-20 text-center max-w-3xl mt-20">
          <h1
            className="text-7xl font-creepster mb-8 animate-neonFlicker"
            style={{
              fontFamily: 'Creepster, cursive',
              color: '#7FFF00',
              textShadow: `
                0 0 3px #7FFF00,
                0 0 6px #6b8e23,
                0 0 8px #556b2f
              `,
            }}
          >
            闇の世界へようこそ
          </h1>

          <section
            className="text-lg leading-relaxed opacity-90 animate-neonFlickerSlow"
            style={{
              textShadow: `
                0 0 1px #7FFF00,
                0 0 3px #6b8e23
              `,
              color: '#9acd32',
            }}
          >
            <p>私は〇〇（あなたの名前）です。</p>
            <p>プログラミングとホラーをこよなく愛するクリエイター。</p>
            <p>
              このサイトでは私の作品や思考の断片を闇の中にひっそりと展示しています。
            </p>
            <p>どうぞゆっくりとご覧ください……</p>
          </section>
        </div>

        <section className="relative z-20 mt-20 max-w-2xl text-left text-green-200 bg-black/30 p-6 rounded-lg border border-green-700 shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-creepster mb-4 text-green-400">
            プロフィール
          </h2>
          <p>
            <strong>名前：</strong> 〇〇（あなたの名前）
          </p>
          <p>
            <strong>肩書：</strong> 闇の中から現れしシステムエンジニア
          </p>
          <p>
            <strong>出身：</strong> 東京（あるいは "かつて静寂が支配した町"）
          </p>
          <p>
            <strong>趣味：</strong> 深夜のコード儀式、無音の世界を歩くこと
          </p>
          <p className="mt-4">
            <strong>自己紹介：</strong>
            <br />
            幼少の頃よりテクノロジーに魅せられ、コードの奥底に潜む「意思」に魅了される。
            <br />
            平日は企業でコードと契約し、週末は闇の開発に身を捧げている。
            <br />
            このポートフォリオは、そんな私の断片を封じた場所である…。
          </p>
        </section>

        <section className="relative z-20 mt-20 max-w-2xl text-left text-green-200 bg-black/30 p-6 rounded-lg border border-green-700 shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-creepster mb-4 text-green-400">経歴</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">2015〜2019：</span> 闇の大学
              情報科学科 卒業
            </li>
            <li>
              <span className="font-bold">2020〜2022：</span>{' '}
              幽玄ソフトウェア株式会社 - バックエンドエンジニア
            </li>
            <li>
              <span className="font-bold">2023〜現在：</span> 黒霧テック合同会社
              - フルスタックエンジニア
            </li>
          </ul>
        </section>

        <section className="relative z-20 mt-20 max-w-2xl text-left text-green-200 bg-black/25 p-6 rounded-lg border border-green-700 shadow-lg backdrop-blur">
          <h2 className="text-3xl font-creepster mb-4 text-green-400">
            スキル
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            <li>🧠 JavaScript（黒魔術レベル）</li>
            <li>🔮 TypeScript（詠唱可能）</li>
            <li>🦴 Node.js（地獄のサーバー構築）</li>
            <li>🕸 React / Next.js（フロントの幻影操作）</li>
            <li>👻 Tailwind CSS（スタイルの召喚）</li>
            <li>🧪 Git / GitHub（時空を越える履歴操作）</li>
          </ul>
        </section>

        <section className="relative z-20 mt-20 max-w-2xl text-left text-green-200 bg-black/30 p-6 rounded-lg border border-green-700 shadow-xl backdrop-blur-md">
          <h2 className="text-3xl font-creepster mb-4 text-green-400">
            Contact
          </h2>
          <p>ご連絡は以下のいずれかからどうぞ。深淵より返信いたします…</p>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:dark.coder@example.com"
                className="underline text-green-400 hover:text-green-200"
              >
                dark.coder@example.com
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-400 hover:text-green-200"
              >
                github.com/your-github
              </a>
            </li>
            <li>
              <strong>X (旧Twitter):</strong>{' '}
              <a
                href="https://x.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-400 hover:text-green-200"
              >
                @yourhandle
              </a>
            </li>
          </ul>
        </section>

        <footer
          className="relative z-20 mt-24 text-sm opacity-60 animate-neonFlickerSlow"
          style={{ textShadow: '0 0 1px #7FFF00', color: '#6b8e23' }}
        >
          © 2025 あなたの名前 - Horror Portfolio
        </footer>

        {showScare && (
          <div
            ref={scareRef}
            className="fixed inset-0 z-50 bg-black bg-opacity-95 animate-fadeIn flex flex-wrap items-center justify-center"
          >
            {horrorWords.map((word, idx) => (
              <div
                key={idx}
                className="glitch text-red-500 text-xl md:text-3xl font-bold m-4"
                style={{
                  animationDelay: `${(idx % 5) * 0.3}s`,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        )}

        <style jsx>{`
          @keyframes flicker {
            0%,
            100% {
              opacity: 1;
              transform: translate(-50%, -50%) rotate(0deg);
              box-shadow: 0 0 100px 40px rgba(255, 140, 0, 0.7),
                0 0 150px 70px rgba(255, 69, 0, 0.5);
            }
            50% {
              opacity: 0.85;
              transform: translate(-48%, -52%) rotate(1deg);
              box-shadow: 0 0 80px 30px rgba(255, 140, 0, 0.5),
                0 0 110px 50px rgba(255, 69, 0, 0.3);
            }
          }

          @keyframes wander {
            0% {
              top: 10%;
              left: 10%;
            }
            25% {
              top: 65%;
              left: 25%;
            }
            50% {
              top: 50%;
              left: 75%;
            }
            75% {
              top: 75%;
              left: 55%;
            }
            100% {
              top: 10%;
              left: 10%;
            }
          }

          .torch-light {
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(
              circle,
              rgba(255, 140, 0, 0.8) 0%,
              rgba(255, 69, 0, 0.4) 45%,
              rgba(0, 0, 0, 0.95) 75%
            );
            filter: blur(60px);
            transform: translate(-50%, -50%);
            animation: flicker 3s infinite ease-in-out,
              wander 15s infinite ease-in-out;
            pointer-events: none;
            z-index: 10;
          }

          .fog-layer {
            position: absolute;
            inset: 0;
            background: url('/fog.png') repeat;
            opacity: 0.25;
            animation: moveFog 120s linear infinite;
            z-index: 5;
            pointer-events: none;
            mix-blend-mode: screen;
          }

          @keyframes moveFog {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 1500px 0;
            }
          }

          .noise-layer {
            position: absolute;
            inset: 0;
            background-image: url('/noise.gif');
            background-size: cover;
            background-repeat: repeat;
            opacity: 0.04;
            z-index: 20;
            pointer-events: none;
            mix-blend-mode: screen;
          }

          @keyframes neonFlicker {
            0%,
            19%,
            21%,
            23%,
            25%,
            54%,
            56%,
            100% {
              opacity: 1;
              text-shadow: 0 0 3px #7fff00, 0 0 6px #6b8e23, 0 0 8px #556b2f;
            }
            20%,
            22%,
            24%,
            55% {
              opacity: 0.8;
              text-shadow: 0 0 1px #7fff00, 0 0 3px #6b8e23;
            }
          }

          @keyframes neonFlickerSlow {
            0%,
            50%,
            100% {
              opacity: 1;
              text-shadow: 0 0 1px #7fff00, 0 0 3px #6b8e23;
            }
            25%,
            75% {
              opacity: 0.85;
              text-shadow: 0 0 0.5px #7fff00, 0 0 2px #556b2f;
            }
          }

          .animate-neonFlicker {
            animation: neonFlicker 2.5s infinite;
          }

          .animate-neonFlickerSlow {
            animation: neonFlickerSlow 4s infinite;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes glitch {
            0% {
              transform: translate(0);
              opacity: 1;
            }
            20% {
              transform: translate(-1px, 1px);
            }
            40% {
              transform: translate(1px, -1px);
            }
            60% {
              transform: translate(-1px, 1px);
            }
            80% {
              transform: translate(1px, -1px);
            }
            100% {
              transform: translate(0);
              opacity: 1;
            }
          }

          .glitch {
            text-shadow: 1px 1px red, -1px -1px cyan;
            transform: scale(1.05) rotate(1deg);
          }
        `}</style>
      </main>
    </>
  );
}
