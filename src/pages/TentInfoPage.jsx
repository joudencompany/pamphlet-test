import { Link } from 'react-router-dom'
import '../App.css'
import tentmapImg from '../assetstent/tentmap.png'
import temptentImg from '../assetstent/temptent.png'

/* ── テント写真の自動読み込み ──
   src/assetstent/ フォルダに tent_01.png, tent_02.png ... の名前で入れるだけでOK。
   写真がない番号は temptent.png が代わりに表示されます。 */
const tentPhotoModules = import.meta.glob(
  '../assetstent/tent_*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
)

// { 1: '/assets/tent_01-xxxx.png', 2: ... } の形に変換
const TENT_PHOTOS = Object.fromEntries(
  Object.entries(tentPhotoModules).map(([path, url]) => {
    const match = path.match(/tent_(\d+)\./i)
    return [Number(match[1]), url]
  })
)

const getTentPhoto = (no) => TENT_PHOTOS[no] ?? temptentImg

/* ── テント出店データ（マップ①：No.1〜12・39〜45） ── */
const TENTS = [
  { no: 1, name: 'ビギナーズ', item: 'ポテト＆ナゲット', desc: 'ポテトとナゲットを販売しています！ぜひ買いに来てください！' },
  { no: 2, name: '蘇遙会', item: '揚げたて屋', desc: '揚げたてのおいしいグルメをお手頃価格で販売！コスプレ姿でお待ちしています！' },
  { no: 3, name: '映画研究部', item: 'チュロス', desc: '熊本大学映画研究部です。今年の紫熊祭では映画鑑賞のお供、チュロスを販売します！屋内でも部で撮影した作品上映、展示等行っております！ぜひお越し下さい♪' },
  { no: 4, name: '熊本大学手話サークル 手笑顔', item: 'わらびもちラテ・パンプディング・トッポギ', desc: '今年は毎年大好評のわらびもちラテと新商品のパンプディングとトッポギを販売します。ぜひお越しください！' },
  { no: 5, name: '熊本大学探検部', item: '串焼き', desc: '熊本大学探検部です！今年はぼんじり・鶏もも・ワニ肉の串焼き、ワニの手羽先を提供します！！お楽しみに〜' },
  { no: 6, name: '書道部', item: '', desc: 'こんにちは。書道部です。書道部は今年もテント、パフォーマンス、展示、書道体験と、紫熊祭を全力で盛り上げます！テントにも、書道体験にも、気軽に遊びに来てください！' },
  { no: 7, name: 'Match Point', item: '中華（チャーハン）', desc: '昨年大盛況のチャーハンが今年も登場！熱々のおいしさをぜひご賞味ください！' },
  { no: 8, name: '青藍会', item: '(°〜°)ｳﾏｯ', desc: 'こんにちは！青藍会です！美味しいものをお届けするのでぜひ！ぜひ！食べに来てください^^' },
  { no: 9, name: '技術部OB', item: 'たこ焼き', desc: '技術部OBが一つひとつ心を込めて焼き上げる、外はカリッと中はとろ〜り自慢のたこ焼きをぜひご賞味ください！' },
  { no: 10, name: '文芸部セピア', item: '馬汁・ガリバタトースト・ゼリー・部誌', desc: '文芸部セピアです！文芸部誌の他に馬汁、ガリバタトースト、ゼリー売ってます！是非お越しください！' },
  { no: 11, name: '熊本大学体育会幹事会', item: '揚げ餃子', desc: '熊本大学第50代体育会幹事会です！今回は揚げ餃子で気分アゲアゲ！みんな遊びにきてね！' },
  { no: 12, name: '柔道部', item: 'ホットサンド', desc: '柔道部特製！熱々ホットサンドでお腹も心も一本勝ち！' },
  { no: 39, name: 'Grand Maison用高', item: '本格中華', desc: 'Grand Maison用高にようこそお越しくださいました。当店は本格派中華をリーズナブルに提供することをモットーに食材や調味料に至るまでこだわりを持って考え抜きました。三日間限定の幻の味をぜひご堪能ください。' },
  { no: 40, name: '体育会少林寺拳法部', item: 'フレンチトースト', desc: '少林寺拳法部がフレンチトーストを出品します！心を込めて作ったのでぜひ食べてください！' },
  { no: 41, name: '教育学部 保健体育科', item: '麺タル強化焼きそば', desc: 'こんにちは、教育学部保健体育科です。保健体育科では今年も毎年恒例のやきそばを作ります。今年は「麺タル強化焼きそば」です！ぜひたくさん食べて心も体も鍛えていってください！' },
  { no: 42, name: '熊本大学体育会吹奏楽部', item: 'クレープ', desc: '吹奏楽部は、オープニング演奏とテントでのクレープ販売を行います！ぜひお越しください！' },
  { no: 43, name: '熊本大学珈琲研究會', item: 'コーヒー', desc: '珈琲研究會は今年も最高のコーヒーを皆様にお届けします。焙煎から抽出まで、こだわり抜いた1杯を是非飲みにきてください。' },
  { no: 44, name: '馬術部', item: 'ゼリードリンク', desc: 'こんにちは！馬術部です！私たちのテントではゼリードリンクを販売します！ぜひ足を運んでください！' },
  { no: 45, name: 'ネクサス', item: '焼きドーナツ・タピオカドリンク', desc: 'バレーボールサークルのネクサスです。焼きドーナツとタピオカドリンクを販売します！ぜひ来てください！' },
]

export default function TentInfoPage() {
  return (
    <div className="site">
      <header className="nav nav--solid">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </Link>
      </header>

      <section className="section" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <Link to="/" className="back-link">← 戻る</Link>
          
          <div className="section-label">Tent Booths</div>
          <h2 className="section-title">テント企画</h2>

          <div className="circles__map">
            <img
              src={tentmapImg}
              alt="テントマップ A・B"
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
                  <img src={getTentPhoto(t.no)} alt={t.name} />
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
        <p className="footer__copy">© 2026 紫熊祭実行委員会 All rights reserved.</p>
      </footer>
    </div>
  )
}