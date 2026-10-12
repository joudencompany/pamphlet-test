import { Link } from 'react-router-dom'
import '../App.css'
import okunaimapImg from '../assetsokunai/okunaimap.png'
import tempokunaiImg from '../assetsokunai/tempokunai.png'

/* ── 屋内企画写真の自動読み込み ──
   src/assetsokunai/ に 1.png, 2.png ... を配置。
   写真がない番号は tempokunai.png を表示します。
*/
const okunaiPhotoModules = import.meta.glob(
  '../assetsokunai/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
)

const OKUNAI_PHOTOS = Object.fromEntries(
  Object.entries(okunaiPhotoModules).flatMap(([path, url]) => {
    const match = path.match(/\/(\d+)\.(?:png|jpe?g|webp)$/i)
    return match ? [[Number(match[1]), url]] : []
  })
)

const getOkunaiPhoto = (no) => OKUNAI_PHOTOS[no] ?? tempokunaiImg

/* ── 屋内企画データ（学生会館：No.1〜4） ── */
const TENTS = [
  {
    no: 1,
    name: 'Rock in 黒髪',
    item: 'ロック研究会',
    desc: '轟音炸裂！！！',
  },
  {
    no: 2,
    name: 'ジャズ研演奏会',
    item: 'モダンジャズ研究会',
    desc: 'モダンジャズ研究会です！ジャズを中心に様々なジャンルの音楽を演奏します。ぜひ聴きに来てください！',
  },
  {
    no: 3,
    name: 'あつまれ！ピアノの森',
    item: '熊本大学ピアノの会',
    desc: '熊本大学ピアノの会です！黒髪北キャンパス学生会館大集会室にて演奏を行います！お待ちしております♪',
  },
  {
    no: 4,
    name: '紫熊祭屋内ライブ',
    item: 'フォークソング研究会',
    desc: 'フォークソング研究会は、POPSやロックなど幅広いジャンルのバンド演奏を披露します。是非来てください！',
  },
]

export default function OkunaiInfoPage() {
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
          <h2 className="section-title">屋内企画ー学生会館ー</h2>

          <div className="circles__map">
            <img
              src={okunaimapImg}
              alt="屋内企画学生会館マップ"
              className="circles__map-img"
            />
          </div>

          <div className="tent-list">
            {TENTS.map(t => (
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