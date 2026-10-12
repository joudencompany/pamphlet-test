import { Link } from 'react-router-dom'
import '../App.css'
import okunaimap1F from '../assetsokunai2/okunaimap2-1.png'
import okunaimap2F from '../assetsokunai2/okunaimap2-2.png'
import okunaimap3F from '../assetsokunai2/okunaimap2-3.png'
import tempokunaiImg from '../assetsokunai/tempokunai.png'

/* ── 番号付き画像を自動読み込み ── */
const okunaiPhotoModules = import.meta.glob(
  '../assetsokunai2/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
)

const OKUNAI_PHOTOS = Object.fromEntries(
  Object.entries(okunaiPhotoModules).flatMap(([path, url]) => {
    const match = path.match(/\/(\d+)\.(?:png|jpe?g|webp)$/i)
    return match ? [[Number(match[1]), url]] : []
  })
)

const getOkunaiPhoto = (no) => OKUNAI_PHOTOS[no] ?? tempokunaiImg

/* ── 全学教育棟：No.5〜24 ── */
const TENTS = [
  {
    no: 5,
    floor: 1,
    name: 'MEZA 熊 Champions ～最強の MEGA 使いは誰だ～',
    item: 'ポケモンサークル めざめるパワー熊本',
    desc: 'ポケモンチャンピオンズ・カードの対戦会を行います！ポケモンを通じて遊びましょう！ぜひお越しください！',
  },
  {
    no: 6,
    floor: 1,
    name: '水中写真展',
    item: 'ダイビング部',
    desc: 'ダイビング部です！私たちが実際に海に潜って撮影した、リアルな水中世界をぜひ見に来てください！',
  },
  {
    no: 7,
    floor: 1,
    name: '映画研究部',
    item: '熊本大学映画研究部',
    desc: '映画研究部です！自主制作映画の上映・小道具や機材の展示をこなっています！お気軽にお越しください♪',
  },
  {
    no: 8,
    floor: 2,
    name: '建築展',
    item: '建築展',
    desc: '今年は「ぼくらの知らない地球展」というテーマで建築に関する展示を行います！皆さんぜひ来てください！',
  },
  {
    no: 9,
    floor: 2,
    name: 'お化け屋敷',
    item: '企画局',
    desc: '連絡を絶った先輩の足取りを追い、都会の廃屋へ。五感を刺激する恐怖の空間で、制限時間内に「遺留品」を捜索せよ！平穏な日常をぶち壊す最恐の体験。あなたは無事に生還し、サークルの謎を解けるか？',
  },
  {
    no: 10,
    floor: 2,
    name: 'ようこそ、みんなの美術部へ！',
    item: '美術部',
    desc: '私達、美術部では部員が描いたイラストやグッズを展示・販売しています！是非来てください！',
  },
  {
    no: 11,
    floor: 2,
    name: '漫研展覧会2026 秋',
    item: '漫画研究会こんぺいとう',
    desc: 'C201、C202教室にて作品の販売と展示を行っています！ぜひ足を運んでください！！',
  },
  {
    no: 12,
    floor: 2,
    name: 'お笑いライブ',
    item: 'お笑いサークルザブトゥーン',
    desc: 'お笑いサークル zabtoon です 全学教養棟C教室でライブをしています！是非来てみて！',
  },
  {
    no: 13,
    floor: 2,
    name: 'ユースカフェ',
    item: 'くまぴあ',
    desc: 'くまぴあです！月経・性感染症・性同意等をテーマに若者向けの性の相談室「ユースカフェ」を開催します。',
  },
  {
    no: 14,
    floor: 2,
    name: '紫熊クイズ杯',
    item: '熊本大学クイズ研究会',
    desc: '部員オリジナルの問題で大会開催！個人企画も満載です！初めての方もぜひご参加ください。',
  },
  {
    no: 15,
    floor: 2,
    name: '書道体験・展示',
    item: '書道部',
    desc: '書道部です！書道体験と書道展示を行います。誰でも参加可能です！',
  },
  {
    no: 16,
    floor: 2,
    name: 'ハンドメイド作品の販売',
    item: 'もこもこニット部',
    desc: '編み物サークルのもこもこニット部です！編み物をはじめとしたハンドメイド作品の販売をします！',
  },
  {
    no: 17,
    floor: 2,
    name: '子宮頸がんやワクチンの啓発',
    item: 'fromK',
    desc: '子宮頸がん検診やワクチンの啓発活動を行うとともに楽しい企画もご用意しています！',
  },
  {
    no: 18,
    floor: 2,
    name: 'フォトスポット',
    item: '企画局',
    desc: '思い出を写真に残せるフォトスポットをご用意しました！友達や家族、大切な人と一緒に、学園祭ならではの特別な一枚を撮影しませんか？ぜひお気軽にお立ち寄りいただき、素敵な思い出をお持ち帰りください。',
  },
  {
    no: 19,
    floor: 3,
    name: '熊大ウイルス研究展示',
    item: 'ウイルス研究者の会',
    desc: '熊本大学内で行われているウイルス・免疫の研究を現役の研究者が紹介します、実験体験とラボツアー情報も！',
  },
  {
    no: 20,
    floor: 3,
    name: 'ボードゲーム体験会',
    item: '熊本ボードゲーム・TRPG サークル',
    desc: '私たちボードゲームサークルは、ボードゲームの体験会を行っております。ぜひ遊びにきてください。',
  },
  {
    no: 21,
    floor: 3,
    name: '東方熊霊殿 例大祭2026',
    item: '東方特撮部',
    desc: 'こんにちは！東方熊霊殿です。東方Projectのボードゲーム、書籍や原作ゲームを遊べます！是非来てください！',
  },
  {
    no: 22,
    floor: 3,
    name: 'マジックショー',
    item: 'シュレディンガーの猫',
    desc: '私たちシュレディンガーの猫です！楽しいマジックをお届けします！',
  },
  {
    no: 23,
    floor: 3,
    name: '熊本大学 天文部',
    item: '熊本大学 天文部',
    desc: '熊本大学天文部では、季節ごとのプラネタリウム解説や物品販売を行っています。ぜひ遊びに来てください！',
  },
  {
    no: 24,
    floor: 3,
    name: '写真展示',
    item: '写真部',
    desc: 'こんにちは！写真部です 写真部では部員が撮った写真を様々なテーマで展示します！ぜひ見に来てください！',
  },
]

const FLOORS = [
  { floor: 1, map: okunaimap1F },
  { floor: 2, map: okunaimap2F },
  { floor: 3, map: okunaimap3F },
]

export default function OkunaiInfoPage2() {
  return (
    <div className="site">
      <header className="nav nav--solid">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </Link>
      </header>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <Link to="/" className="back-link">
            ← 戻る
          </Link>

          <div className="section-label">Indoor Events</div>
          <h2 className="section-title">屋内企画ー全学教育棟ー</h2>

          {FLOORS.map(({ floor, map }) => (
            <div key={floor} style={{ marginBottom: '3rem' }}>
              <h3 className="circles__subtitle">
                全学教育棟 {floor}F
              </h3>

              <div className="circles__map">
                <img
                  src={map}
                  alt={`屋内企画全学教育棟${floor}階マップ`}
                  className="circles__map-img"
                  loading="lazy"
                />
              </div>

              <div className="tent-list">
                {TENTS.filter(t => t.floor === floor).map(t => (
                  <div className="tent-item" key={t.no}>
                    <div className="tent-item__info">
                      <span className="tent-item__no">No.{t.no}</span>
                      <h3 className="tent-item__name">{t.name}</h3>
                      <p className="tent-item__food">{t.item}</p>
                      <p className="tent-item__desc">{t.desc}</p>
                    </div>

                    <div className="tent-item__photo">
                      <img
                        src={getOkunaiPhoto(t.no)}
                        alt={t.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="circles__cta">
            <Link to="/" className="circles__btn">
              ← トップに戻る
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__sigma">Σ</div>
        <p className="footer__title">第15回 紫熊祭実行委員会</p>
        <p className="footer__copy">
          © 2026 紫熊祭実行委員会 All rights reserved.
        </p>
      </footer>
    </div>
  )
}