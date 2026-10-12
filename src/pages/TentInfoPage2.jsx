import { Link } from 'react-router-dom'
import '../App.css'
import tentmapImg2 from '../assetstent2/tentmap2.png'
import temptentImg2 from '../assetstent2/temptent2.png'

/* ── テント写真の自動読み込み ──
   src/assetstent2/ に tent_13.png〜tent_38.png を配置。
   写真がない番号は temptent2.png を表示します。
*/
const tentPhotoModules = import.meta.glob(
  '../assetstent2/tent_*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true, import: 'default' }
)

const TENT_PHOTOS = Object.fromEntries(
  Object.entries(tentPhotoModules).flatMap(([path, url]) => {
    const match = path.match(/tent_(\d+)\./i)
    return match ? [[Number(match[1]), url]] : []
  })
)

const getTentPhoto = (no) => TENT_PHOTOS[no] ?? temptentImg2

/* ── テント出店データ（マップ②：No.13〜38） ── */
const TENTS = [
  { no: 13, name: '法学部実行委員会', item: 'ジャンボフランク', desc: 'ふっといフランクフルト 食べにき・て・ね♡' },
  { no: 14, name: 'フォークダンス部', item: 'ケサディーヤ', desc: 'こんにちは！熊本大学フォークダンス部です。野外ステージではダンス、テント企画ではケサディーヤを販売します。ぜひお越しください！' },
  { no: 15, name: 'Smash', item: 'チーズハットグなど', desc: 'Smashです！今年はチーズハットグと揚げマシュマロとドリンクを販売します！絶品です！' },
  { no: 16, name: 'バレーボール愛好会OB', item: '油そば・アフォガート', desc: '私たち、バレーボール愛好会OBのB4とM1で油そばとアフォガートを出店します。至高の一品をご賞味あれ。' },
  { no: 17, name: 'ダイビング部（幹部）', item: 'おでん', desc: 'こんにちは！私たちは熊大・県大ダイビング部の幹部です！皆さまの心も身体も温めるおでんをご用意しておりますのでぜひ来てくださいね！部員全員で作るダイビング部のたこ焼きもぜひよろしくお願いします！' },
  { no: 18, name: 'キャンパスミュージアム推進機構 teamCOCORO', item: '五高レトロ喫茶', desc: 'こんにちは！キャンパスミュージアム推進機構学生アンバサダーのteamCOCOROです！私達はメロンクリームソーダを販売します。ぜひお越しください！' },
  { no: 19, name: '生協組織部', item: 'クロッフル', desc: '生協組織部です！今年もクロッフルを発売します！数量限定の味もあるのでぜひ足を運んでください！' },
  { no: 20, name: '熊大医学部軟式テニス部', item: 'トルネードポテト・フルーツソーダ', desc: '私たちは医学部ソフトテニス部です。トルネードポテトとフルーツソーダを販売します。いろいろな味を用意するので楽しみにしてください。' },
  { no: 21, name: 'Cut-in', item: 'もちもちひとくちドーナツなど', desc: 'Cut-inです！今年はもちもちひとくちドーナツを販売します！ぜひ食べに来てください♪' },
  { no: 22, name: '麻雀部', item: '唐揚げ', desc: '熊大麻雀部は紫熊祭で唐揚げを販売いたします！麻雀も打てますのでぜひともお立ち寄り下さい！！！' },
  { no: 23, name: '日韓交流サークル KOGUMA', item: '韓国人が作る本場の韓国屋台', desc: '私たちは伝統的な韓国料理を作ります！韓国人留学生たちが作る本場の味を楽しみに来てください！' },
  { no: 24, name: 'wellness', item: 'カレー', desc: 'こんにちは！バドミントンサークルのwellnessです！美味しいカレーなので是非食べに来てください！' },
  { no: 25, name: 'CHAPS', item: '揚げダコ・ゼリードリンク', desc: '人の揚げ足、ウチの揚げダコ！絶品明太マヨと限定ゼリードリンクを揃え、皆様のご来店をお待ちしております。' },
  { no: 26, name: 'アコースティックギター愛好会', item: '揚げパン・揚げパンサンド', desc: '私たち”アコ愛”は揚げパンと揚げパンサンドを販売します！揚げたてのサクふわ食感をご賞味あれ！' },
  { no: 27, name: '準硬式野球部', item: 'ホットドッグ＆ワッフル', desc: '準硬式野球部です！みんなで楽しく野球やってます！今年はホットドッグとワッフルを売ります。みんな来てね♡' },
  { no: 28, name: 'BizCo', item: 'BizCoの唐揚げ', desc: '学生団体BizCoが紫熊祭にて初出店！例年大行列のあの唐揚げをBizCoが受け継ぎます。' },
  { no: 29, name: 'SIRKU', item: 'ホットク', desc: '本場の味を再現！韓国留学生と試作を重ねた絶品ホットク。もっちり食感は小腹がすいた時にぴったりです！' },
  { no: 30, name: '国際交流サークル C3', item: 'ポップコーン', desc: '熊本大学の公認国際交流サークルです！留学生と日本人学生がいろんなイベントを通して交流をしています！' },
  { no: 31, name: '卓球部', item: 'ミニパフェ', desc: '卓球部の特製ミニパフェ！可愛い見た目と美味しさで、あなたのお腹に美味しさをスマッシュ！' },
  { no: 32, name: '教育学部 英語科（英魂）', item: '英魂特製団子', desc: '教育学部英語科(英魂)です！個性的で料理の腕が立つメンバーが揃っているので、たくさんのご来店お待ちしております！' },
  { no: 33, name: '医学部保健学科バドミントンサークル', item: 'クロッフル', desc: '保健学科バドミントンサークルは、クロッフルを販売します！心を込めてご提供します！ぜひお越しください！' },
  { no: 34, name: '熊本大学放送部', item: '餃子の皮ピザ', desc: '放送部は大会に向け読みの練習や映像制作を行い、イベントの司会も務めています。' },
  { no: 35, name: '志法会', item: '焼き鳥', desc: '熊本大学法学部公認サークルの志法会です。焼き鳥屋さんやります！ぜひお越しください！' },
  { no: 36, name: 'バレーボール愛好会', item: 'たこ焼き・アイスクッキーサンド', desc: 'バレー愛好会です！今年はたこ焼きとアイスクッキーサンドを販売します！待ってるぴょん！！' },
  { no: 37, name: 'D-SEVEN', item: '高菜栗ご飯', desc: 'こんにちはD-SEVENです！私たちは高菜栗ご飯の販売を行います！とてもおいしいのでぜひ来てください！' },
  { no: 38, name: 'ダイビング部', item: 'ダイビング部伝統たこ焼き', desc: '39年の歴史を誇るダイビング部伝統の味！海のプロが焼き上げる、外カリ中トロ本気のたこ焼きを食らえ！' },
]

export default function TentInfoPage2() {
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
              src={tentmapImg2}
              alt="テントマップ②：No.13〜38"
              className="circles__map-img"
            />
          </div>

          <div className="tent-list">
            {TENTS.map(t => (
              <div className="tent-item" key={t.no}>
                <div className="tent-item__info">
                  <span className="tent-item__no">No.{t.no}</span>
                  <h3 className="tent-item__name">{t.name}</h3>
                  {t.item && (
                    <p className="tent-item__food">{t.item}</p>
                  )}
                  <p className="tent-item__desc">{t.desc}</p>
                </div>

                <div className="tent-item__photo">
                  <img
                    src={getTentPhoto(t.no)}
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