import React from 'react';
import { useParams } from 'react-router-dom';

const PAGEDATA = {
  'gem-life': {
    title: 'Gem Life',
    sections: [
      {
        content: '人は昔から、本能的に宝石に魅入られてきました。Gem Lifeは、宝石に対する固定観念にとらわれず、直感と本能を揺り起こし、自由に、創造的に、宝石を日常に取り入れ、その人自身のユニークなイメージや新しい価値観を創り出していく体験です。'
      },
      {
        content: '宝石はアートと同じで実用性はありません。必需品ではないのに高価で、論理的には必要がないのに、本能に突き動かされて宝石を購入します。時間が経つにつれて、だんだん意識や論理が本能に勝り、それは後悔に変わるかもしれません。'
      },
      {
        content: '意味と正解を求める現代の世の中で、自分が求めた宝石は、世間の物差しで贅沢品、使う機会のないコスパの悪さ、不確かな資産価値、自己顕示や承認の意味合いを帯びてくるのかもしれません。その時、宝石を持つ自分自身のこれからのイメージも歪んで描かれています。'
      },
      {
        content: '本物の宝石はただ買うだけではなく、その本質を自分の本能と直感を頼りに生み出していくことが大切です。Gem Lifeは、宝石のある生活を通して、大切で美しい何かを感じ、体現していく日常のアートな体験です。'
      },
      {
        content: 'Gem Lifeは、宝石によって精神的な安らぎや表現の喜びをもたらす「癒やし」の側面を持つ一方で、既成概念や自己の限界、あるいは社会的・心理的制約と対峙する「創造的な戦い」の側面も持っており、真実を追求し、既存の価値観を打ち破る力となります。'
      },
      {
        content: '人の精神は根源的に自由です。自己のイメージは、過去の自分や周りの主義や世界観からではなく、今からの自分の選択や試みによって作り出すことができます。ささやかでもGem Lifeがその一助にならんことを。'
      }
    ]
  },
  'who-we-are': {
    title: 'Who We Are',
    sections: [
      {
        content: 'RURI Social Innovation（RURI）は、Gemlife.worldのオンラインプラットフォームの開発・管理を無償で行うほか、Gem Lifeに関連するコンテンツの企画・編集やイベントの開催を行うことで、Gem LifersによるGem Lifeに貢献します。'
      },
      {
        content: 'Gem Lifeは十人十色ですが、宝石のある生活を通してその人自身の自己イメージや価値観がリアリティをもって体現されるためには、その宝石も本物でリアリティを持つ、つまり真に善で美なるイメージを描ける対象でなければならないとRURIは考えています。'
      },
      {
        content: 'このため、RURIは、スリランカにおいてフェアトレードの仕組みと、宝石の出所やトレーサビリティ、品質評価、コンプライアンス等を正しく記録し証明するプラットフォームを開発し、こうして調達・制作した宝石やジュエリーをRURI.shopにてご紹介・販売をしています。'
      },
      {
        content: 'またRURIでは、宝石のホリスティックな価値をデジタル化して表現・体験するGem Life Appを提供するほか、より豊かでリアリティのあるGem Lifeを実現するための製品やサービスを企画・提案していきます。'
      }
    ]
  },
  'social-engagement': {
    title: 'Social Engagement',
    sections: [
      {
        content: 'RURIのミッションは、テクノロジーと新たな発想による社会革新を通じて、より責任ある美しいお金の使い方を再構築することです。現在、スリランカにおいて、寄付（相互扶助）や消費（フェアトレード）の分野で、イノベーションの開発に注力しています。'
      },
      {
        content: '私たちは、この「セレンディピティの島」が、社会課題やアイデアの発見、革新的な解決策の開発、社会実験の実施、そしてその商業化を追求する上で、最も高い可能性を秘めたコミュニティの一つであると確信しています。'
      },
      {
        heading: 'Mutual Aid Platform（MAP）',
        content: 'スリランカでは公的医療保険が存在せず、民間保険加入者も極めて少ない状況にあります。特に宝石の原産地である農村部では、非正規雇用や季節労働に従事する人々が多く、定期的な保険料支払いも困難です。さらに、医療保険に関する知識が不足している人々も多数存在します。'
      },
      {
        content: 'RURIはスリランカにおける新たな解決策として、オンラインベースの相互扶助プラットフォームを提供します。相互扶助はスリランカで古くから親しまれてきた手法であり、参加者が資源をプールして困窮者を支援する仕組みです。'
      },
      {
        content: 'RURI MAPは分散型プラットフォームとブロックチェーン技術を活用し、保険業界における包括性と透明性を阻害する現実的な課題を解決し、会員同士が困難な時に支え合うことを可能にします。2026年からHatton National Bankと協力し、スリランカ全島でRURI MAPの社会実験を開始します。'
      }
    ]
  },
  'terms': {
    title: 'Terms of Service',
    sections: [
      { content: 'n/a' }
    ]
  },
  'privacy': {
    title: 'Privacy Policy',
    sections: [
      { content: 'n/a' }
    ]
  },
  'contact': {
    title: 'Contact',
    sections: [
      { content: 'Contact information.' }
    ]
  },
  'faq': {
    title: 'FAQ',
    sections: [
      { content: 'Frequently Asked Questions.' }
    ]
  }
};

const StaticPage = () => {
  const { slug } = useParams();
  const page = PAGEDATA[slug];

  if (!page) return <div className="p-24 text-center">Page not found</div>;

  return (
    <div className="min-h-screen bg-bg py-10 md:py-24 px-4">
      <div className="max-w-[800px] mx-auto">
         <h1 className="font-heading text-2xl md:text-4xl mb-6 border-b border-gray-200 pb-4">{page.title}</h1>
         <div className="space-y-6 text-secondary leading-relaxed">
           {page.sections.map((section, idx) => (
             <div key={idx}>
               {section.heading && (
                 <h2 className="font-heading text-2xl text-text mb-4 mt-8">{section.heading}</h2>
               )}
               <p className="text-base">{section.content}</p>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};

export default StaticPage;
