import { useEffect, useState, useRef } from 'react'
import './App.css'

import terrabalImg from './assets/terrabal.jpg'
import terrabalImg2 from './assets/terrabal2.jpg'
import chuoImg from './assets/chuo.png'
import linemoImg from './assets/linemo.png'
import seikyou from './assets/seikyou.png'
import konntakuto from './assets/konntakuto.png'
import ouesu from './assets/ouesu.png'
import onetimeforever from './assets/1time4ever.png'


/* ── データ（第14回 昨年データ） ──
   TODO: 今年のデータに差し替える際は各定数を更新してください
   ─────────────────────────────── */

// TODO: 今年の日程・曜日に更新
const DAYS = [
  { label: '11/2', day: '日', color: '#e03c3c' },
  { label: '11/3', day: '月', color: '#e03c3c' },
  { label: '11/4', day: '火', color: '#2a8c4a' },
]

// TODO: 今年のタイムテーブルに更新
const TIMETABLE = {
  '11/2': [
    { time: '10:00', name: '開会式・委員長挨拶',        stage: 'メインステージ', type: 'special' },
    { time: '10:30', name: 'よさこい演舞',               stage: 'メインステージ', type: 'dance'   },
    { time: '11:30', name: '軽音楽部 ライブ①',           stage: '野外ステージ',   type: 'music'   },
    { time: '13:00', name: 'ダンスサークル発表',          stage: 'メインステージ', type: 'dance'   },
    { time: '14:30', name: 'お笑いライブ',                stage: '屋内ステージ',   type: 'comedy'  },
    { time: '16:00', name: '軽音楽部 ライブ②',           stage: '野外ステージ',   type: 'music'   },
    { time: '17:30', name: 'ゲストアーティストライブ',    stage: 'メインステージ', type: 'special' },
  ],
  '11/3': [
    { time: '10:00', name: 'ストリートダンス発表',        stage: '野外ステージ',   type: 'dance'   },
    { time: '11:00', name: '演劇サークル 公演',           stage: '屋内ステージ',   type: 'circle'  },
    { time: '12:30', name: '軽音楽部 ライブ③',           stage: '野外ステージ',   type: 'music'   },
    { time: '14:00', name: 'ミスコン・ミスターコン',      stage: 'メインステージ', type: 'special' },
    { time: '16:00', name: 'チアリーディング演技披露',    stage: 'メインステージ', type: 'dance'   },
    { time: '17:00', name: 'ナイトライブ',                stage: 'メインステージ', type: 'music'   },
  ],
  '11/4': [
    { time: '10:00', name: '文化系サークル展示・発表',    stage: '学生会館',       type: 'circle'  },
    { time: '11:00', name: '軽音楽部 ライブ④',           stage: '野外ステージ',   type: 'music'   },
    { time: '12:30', name: 'ボードゲーム大会（参加型）',  stage: '屋内ステージ',   type: 'comedy'  },
    { time: '14:00', name: 'よさこい演舞（再演）',        stage: 'メインステージ', type: 'dance'   },
    { time: '15:30', name: 'クロージングセレモニー',      stage: 'メインステージ', type: 'special' },
    { time: '16:30', name: '閉会式',                      stage: 'メインステージ', type: 'special' },
  ],
}

// TODO: 今年の出店・サークルに更新
const CIRCLES = [
  { name: '軽音楽部',         genre: '音楽',   desc: '3日間にわたる熱いライブパフォーマンス。多彩なジャンルのバンドが野外ステージを盛り上げます。' },
  { name: 'よさこいサークル', genre: 'ダンス', desc: '色鮮やかな衣装と力強い踊りで会場を沸かせます。開会・最終日の2回公演。' },
  { name: 'ストリートダンス部', genre: 'ダンス', desc: 'ヒップホップ・ポッピング・ロッキングなど多彩なジャンルの実力派が集結。' },
  { name: '演劇サークル',     genre: '演劇',   desc: '脚本から演出・舞台美術まで全て学生手作りの本格公演。感動の90分。' },
  { name: 'チアリーディング部', genre: 'ダンス', desc: '華麗なアクロバットとチームワークで観客を魅了。全国大会経験メンバーも在籍。' },
  { name: '写真部',           genre: '展示',   desc: '1年間の活動で撮り溜めた作品を一挙展示。学内外の絶景・ポートレート多数。' },
  { name: '漫画研究会',       genre: '展示',   desc: '部員の力作を展示・頒布。似顔絵コーナーも大人気！' },
  { name: '国際交流サークル', genre: '文化',   desc: '世界の料理・文化を紹介。留学生と一緒に楽しめるコーナーも。' },
  { name: 'たこ焼き屋台',     genre: 'グルメ', desc: '外はカリッと中はとろっとろ。秘伝のソースで仕上げる自慢のたこ焼き。' },
  { name: 'クレープ＆スムージー', genre: 'グルメ', desc: '手作りクレープと季節のフルーツスムージー。インスタ映えな一品。' },
  { name: 'から揚げ専門店',   genre: 'グルメ', desc: '熊本産鶏肉を使ったジューシーから揚げ。馬刺し入り特製だれで絶品。' },
  { name: 'ボードゲーム部',   genre: '参加型', desc: '最新作から定番まで100種以上揃えて対戦。初心者も大歓迎！' },
]

const TYPE_COLOR = {
  special: '#6c3fc7',
  music:   '#e03c3c',
  dance:   '#e07c00',
  comedy:  '#2a8c4a',
  circle:  '#1a6ab5',
}

// TODO: 今年の企画紹介に更新
const KIKAKU = [
  { tag: '特別企画', color: '#6c3fc7', name: 'ゲストアーティストライブ', day: '11/2', time: '17:30', stage: 'メインステージ',
    desc: '毎年大好評のゲストアーティスト企画。豪華アーティストが紫熊祭初日のフィナーレを飾ります。詳細は当日発表！' },
  { tag: '特別企画', color: '#6c3fc7', name: 'ミスコン・ミスターコン', day: '11/3', time: '14:00', stage: 'メインステージ',
    desc: '熊大の顔を決める恒例イベント。ルックス・トーク・パフォーマンスで審査員と観客を魅了する学祭最大の人気企画。' },
  { tag: 'お笑い', color: '#2a8c4a', name: 'お笑いライブ', day: '11/2', time: '14:30', stage: '屋内ステージ',
    desc: 'プロ・アマ混合の本格お笑いステージ。ネタあり・トークありの盛りだくさんな内容で笑い飯確定！' },
  { tag: 'ナイト', color: '#1a1a4e', name: 'ナイトライブ', day: '11/3', time: '17:00', stage: 'メインステージ',
    desc: '紫熊祭2日目のクライマックスを彩る夜の野外ライブ。ライトアップされた会場で一生の思い出を。' },
  { tag: 'よさこい', color: '#e03c3c', name: 'よさこい演舞', day: '11/2', time: '10:30', stage: 'メインステージ',
    desc: '開会を彩る力強いよさこい演舞。色鮮やかな法被姿のダンサー総勢30名が熊本を舞い踊ります。' },
  { tag: '演劇', color: '#e07c00', name: '演劇サークル公演', day: '11/3', time: '11:00', stage: '屋内ステージ',
    desc: '脚本・演出・舞台美術まで全て学生手作りの本格舞台。笑いと感動の90分。入場無料・全席自由。' },
  { tag: '参加型', color: '#0a9396', name: 'ボードゲーム大会', day: '11/4', time: '12:30', stage: '屋内ステージ',
    desc: '誰でも参加OK！100種類以上のゲームで誰とでも盛り上がれる。優勝者には豪華景品プレゼント。' },
  { tag: 'チア', color: '#b5179e', name: 'チアリーディング演技', day: '11/4', time: '14:00', stage: 'メインステージ',
    desc: '全国大会レベルの技術とチームワークが光る圧巻のパフォーマンス。アクロバットに会場が沸きます。' },
]

const SPONSOR_GROUPS = [
  { label: 'Gold Sponsor',   ja: 'ゴールドスポンサー',  accent: '#f5c842', tiers: [1, 2] },
  { label: 'Silver Sponsor', ja: 'シルバースポンサー', accent: '#b0b8c8', tiers: [3]    },
  { label: 'Bronze Sponsor', ja: 'ブロンズスポンサー', accent: '#cd7f32', tiers: [4, 5] },
  { label: 'Supporter',      ja: 'サポーター',          accent: '#999',    tiers: [6, 7, 8] },
]

const ADS = [
  { img: chuoImg,        name: '中央自動車学校',     url: 'https://chuo-ds.jp',     tier: 1 },
  { img: linemoImg,      name: 'LINEMO',             url: 'https://linemo.jp',      tier: 3 },
  { img: terrabalImg,    name: 'テラバル自動車学校',  url: 'https://terrabal.co.jp', tier: 4 },
  { img: terrabalImg2,   name: 'テラバル',            url: 'https://terrabal.co.jp', tier: 4 },
  { img: seikyou,        name: '生協',                url: 'https://coop.kyushu-bauc.or.jp/kumamoto-u/index.html', tier: 5 },
  { img: konntakuto,     name: 'コンタクトアイシティ', url: '#',                     tier: 6 },
  { img: ouesu,          name: 'オーエス',             url: '#',                     tier: 6 },
  { img: onetimeforever, name: '1TIME 4EVER',         url: '#',                     tier: 7 },
]
const GOLD_ADS     = ADS.filter(a => a.tier <= 2)          // 単独・最大
const SILVER_ADS   = ADS.filter(a => a.tier === 3)          // Gold の下・一回り小さく
const ANCHOR_ADS   = ADS.filter(a => a.tier === 1 || a.tier === 3)
const SECTION_ADS  = ADS.filter(a => a.tier === 5)
const CONTEXT_ADS  = ADS.filter(a => a.tier === 4)
const HALF_ADS     = ADS.filter(a => a.tier === 6)
const LOGO_ADS     = ADS.filter(a => a.tier >= 7)

export default function App() {
  const [adVisible, setAdVisible] = useState(false)
  const [adShown, setAdShown] = useState(false)
  const [surveyVisible, setSurveyVisible] = useState(true)
  const [surveyDone, setSurveyDone] = useState(false)

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw5g62IiNURRo69ArGdlHFA28ktmEWEixTV5LArZkD_cFcme8yeyxDOumO_qEmNWyio/exec'
const handleSurvey = async (type) => {
  setSurveyVisible(false)
  setSurveyDone(true)
  const params = new URLSearchParams({ type })
  try {
    await fetch(`${SHEET_URL}?${params}`, {
      method: 'GET',
      mode: 'no-cors',
    })
  } catch (e) {
    console.error('送信失敗', e)
  }
}

  const [floatAdVisible, setFloatAdVisible] = useState(true)
  const [activeDay, setActiveDay] = useState('11/2')
  const [kikakuStage, setKikakuStage] = useState('メインステージ')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedKikaku, setSelectedKikaku] = useState(null)

  /* アンカー広告 */
  const [adIndex, setAdIndex] = useState(0)
  const [adFade, setAdFade]   = useState(true)

  const heroRef = useRef(null)

// ① スクロールヘッダー用（元のもの・クリーン）
useEffect(() => {
  document.title = '第14回 紫熊祭 | 熊本大学黒髪北キャンパス'
  const onScroll = () => setScrolled(window.scrollY > 60)
  window.addEventListener('scroll', onScroll)
  return () => window.removeEventListener('scroll', onScroll)
}, [])

// ② 広告トリガー用（新規追加）
useEffect(() => {
  if (adShown) return

  const sectionIds = ['greeting', 'timetable', 'kikaku', 'circles', 'access', 'sponsors']
  const AD_TRIGGER = 3

  const observer = new IntersectionObserver(() => {
    const passed = sectionIds.filter(id => {
      const el = document.getElementById(id)
      if (!el) return false
      return el.getBoundingClientRect().top < window.innerHeight * 0.5
    }).length

    if (passed >= AD_TRIGGER) {
      setAdVisible(true)
      setAdShown(true)
    }
  }, { threshold: 0.1 })

  sectionIds.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })

  return () => observer.disconnect()
}, [adShown])

  /* アンカー広告：5秒ごとにフェードイン切り替え */
  useEffect(() => {
    const timer = setInterval(() => {
      setAdFade(false)
      setTimeout(() => {
        setAdIndex(i => (i + 1) % ANCHOR_ADS.length)
        setAdFade(true)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site">
{/* ── 来場者アンケート ── */}
{surveyVisible && (
  <div className="sp-overlay">
    <div className="sp-overlay__box">
      <h2 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>来場者アンケート</h2>
      <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.2rem' }}>
        あなたはどちらですか？
      </p>
      {[
        { label: '🎓 熊本大学の学生様', value: '熊大生' },
        { label: '🏫 他大学の学生様',   value: '他大学生' },
        { label: '👥 一般来場者様',     value: '外部来場者' },
      ].map(({ label, value }) => (
        <button
          key={value}
          onClick={() => handleSurvey(value)}
          style={{
            display: 'block', width: '100%', margin: '0.4rem 0',
            padding: '0.7rem', borderRadius: '8px',
            border: '1px solid #444', background: '#1a1a2e',
            color: '#fff', cursor: 'pointer', fontSize: '0.95rem'
          }}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
)}


      {/* ── 企画モーダル ── */}
      {selectedKikaku && (
        <div className="kikaku-modal" onClick={() => setSelectedKikaku(null)}>
          <div className="kikaku-modal__box" onClick={e => e.stopPropagation()}>
            <button className="kikaku-modal__close" onClick={() => setSelectedKikaku(null)}>✕</button>
            <div className="kikaku-modal__tag" style={{ background: selectedKikaku.color }}>
              {selectedKikaku.tag}
            </div>
            <h2 className="kikaku-modal__name">{selectedKikaku.name}</h2>
            <div className="kikaku-modal__meta">
              <span>{selectedKikaku.day}</span>
              <span>{selectedKikaku.time}〜</span>
              <span>{selectedKikaku.stage}</span>
            </div>
            <div className="kikaku-modal__divider" style={{ '--c': selectedKikaku.color }} />
            <p className="kikaku-modal__desc">{selectedKikaku.desc}</p>
            <div className="kikaku-modal__footer">
              <span className="kikaku-modal__label">Supported by</span>
              <img src={linemoImg} alt="LINEMO" className="kikaku-modal__sponsor-img" />
              <span className="kikaku-modal__sponsor-name">LINEMO</span>
            </div>
          </div>
        </div>
      )}

      {/* ── インタースティシャル広告 ── */}
      {adVisible && (
        <div className="sp-overlay" onClick={() => { setAdVisible(false); setAdShown(true) }}>
          <div className="sp-overlay__box" onClick={e => e.stopPropagation()}>
            <button className="sp-overlay__close" onClick={() => setAdVisible(false)}>✕</button>
            <a href="https://chuo-ds.jp" target="_blank" rel="noopener noreferrer">
              <img src={chuoImg} alt="中央自動車学校" className="sp-overlay__img" />
            </a>
          </div>
        </div>
      )}

      {/* ── ナビ ── */}
      <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
        <div className="nav__logo" onClick={() => scrollTo('hero')}>
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </div>
        <nav className={`nav__links ${menuOpen ? 'open' : ''}`}>
          {[['挨拶','greeting'],['タイムテーブル','timetable'],['企画','kikaku'],['出店・サークル','circles'],['アクセス','access'],['協賛','sponsors']].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </header>

      {/* ── ヒーロー ── */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero__clocks">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`clock clock--${i}`}>
              <div className="clock__hand clock__hand--hour" style={{ '--r': `${30 + i * 47}deg` }} />
              <div className="clock__hand clock__hand--min"  style={{ '--r': `${80 + i * 73}deg` }} />
            </div>
          ))}
        </div>
        <div className="hero__inner">
          {/* TODO: 回数・テーマ・日程を今年のものに更新 */}
          <p className="hero__kaicho">第14回</p>
          <h1 className="hero__title">紫熊祭</h1>
          <p className="hero__en">SIGMA FES</p>
          <div className="hero__theme">1TIME 4EVER</div>
          <div className="hero__dates">
            <span>11.2<small>日</small></span>
            <span className="hero__dates-sep">—</span>
            <span>11.4<small>火</small></span>
          </div>
          <p className="hero__place">熊本大学 黒髪北キャンパス</p>
          <button className="hero__cta" onClick={() => scrollTo('timetable')}>
            スケジュールを見る →
          </button>
        </div>
        <div className="hero__bear">🐻</div>
      </section>


      {/* ── プレミアムスポンサー ── */}
      <div className="sp-zone--premium">
        <p className="sp-zone__label">— Sponsor —</p>

        {/* Gold: 単独・最大表示 */}
        {GOLD_ADS.map((ad, i) => (
          <a key={i} href={ad.url} target="_blank" rel="noopener noreferrer" className="premium-card premium-card--gold">
            <div className="premium-card__badge premium-card__badge--gold">Gold Sponsor</div>
            <div className="premium-card__img-wrap premium-card__img-wrap--gold">
              <img src={ad.img} alt={ad.name} className="premium-card__img premium-card__img--gold" />
            </div>
            <p className="premium-card__name">{ad.name}</p>
            <p className="premium-card__visit">公式サイトへ →</p>
          </a>
        ))}

        {/* Silver: Goldの下・一回り小さく */}
        {SILVER_ADS.length > 0 && (
          <div className="premium-silver-row">
            {SILVER_ADS.map((ad, i) => (
              <a key={i} href={ad.url} target="_blank" rel="noopener noreferrer" className="premium-card premium-card--silver">
                <div className="premium-card__badge premium-card__badge--silver">Silver Sponsor</div>
                <div className="premium-card__img-wrap">
                  <img src={ad.img} alt={ad.name} className="premium-card__img" />
                </div>
                <p className="premium-card__name">{ad.name}</p>
                <p className="premium-card__visit">公式サイトへ →</p>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* ── 委員長挨拶 ── */}
      <section className="section greeting" id="greeting">
        <div className="container">
          <div className="section-label">Greeting</div>
          <h2 className="section-title">委員長挨拶</h2>
          {/* TODO: 委員長名・挨拶文・副委員長名を今年のものに更新 */}
          <div className="greeting__card">
            <div className="greeting__avatar">委員長</div>
            <div className="greeting__body">
              <p className="greeting__name">委員長　荒巻 遥平</p>
              <p>
                この度は第十四回紫熊祭公式サイトをご覧いただき、誠にありがとうございます。
                紫熊祭は、学生のみならず、地域の皆様にも愛される、熊本大学最大の祭典です。
              </p>
              <p>
                本年度のテーマは<strong>「1TIME 4EVER」</strong>です。一度きりの特別な瞬間が、永遠の思い出となるような体験を目指しております。約400名の実行委員が一丸となって準備を進めてまいりました。
              </p>
              <p>
                皆様の笑顔が、私たちの何よりの喜びです。最高の紫熊祭を、どうぞお楽しみください！
              </p>
            </div>
          </div>
          <div className="greeting__sub-grid">
            {/* TODO: 副委員長名を今年のものに更新 */}
            {[['副委員長', '福嶋 楓'], ['副委員長', '西田 周平']].map(([role, name]) => (
              <div className="greeting__sub-card" key={name}>
                <div className="greeting__sub-avatar">{role[0]}</div>
                <div>
                  <p className="greeting__sub-role">{role}</p>
                  <p className="greeting__sub-name">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── セクション広告（⑤） ── */}
      {SECTION_ADS.length > 0 && (
        <div className="sp-row-zone">
          <span className="sp-row-zone__label">協賛</span>
          <div className="sp-row-zone__inner">
            {SECTION_ADS.map((ad, i) => (
              <a key={i} href={ad.url} target="_blank" rel="noopener noreferrer" className="sp-row-card">
                <img src={ad.img} alt={ad.name} className="sp-row-card__img" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── タイムテーブル ── */}
      <section className="section timetable" id="timetable">
        <div className="container">
          <div className="section-label">Timetable</div>
          <h2 className="section-title">タイムテーブル</h2>
          <div className="section-sponsor">
            <span>Supported by</span>
            <img src={chuoImg} alt="中央自動車学校" />
            <span>中央自動車学校</span>
          </div>
          <div className="day-tabs">
            {DAYS.map(d => (
              <button
                key={d.label}
                className={`day-tab ${activeDay === d.label ? 'active' : ''}`}
                style={{ '--day-c': d.color }}
                onClick={() => setActiveDay(d.label)}
              >
                <span className="day-tab__date">{d.label}</span>
                <span className="day-tab__dow" style={{ color: d.color }}>（{d.day}）</span>
              </button>
            ))}
          </div>
          <div className="tt-list">
            {TIMETABLE[activeDay].map((ev, i) => (
              <div className="tt-row" key={i} style={{ '--delay': `${i * 0.05}s` }}>
                <div className="tt-time">{ev.time}</div>
                <div className="tt-bar" style={{ background: TYPE_COLOR[ev.type] }} />
                <div className="tt-card" style={{ borderLeft: `none` }}>
                  <span className="tt-name">{ev.name}</span>
                  <span className="tt-stage">{ev.stage}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="tt-legend">
            {Object.entries(TYPE_COLOR).map(([k, c]) => (
              <span key={k} className="legend-item">
                <span className="legend-dot" style={{ background: c }} />
                {{ special:'特別企画', music:'音楽', dance:'ダンス', comedy:'お笑い', circle:'サークル' }[k]}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ハーフ広告（⑥） ── */}
      {HALF_ADS.length > 0 && (
        <div className="ad-half-grid">
          {HALF_ADS.map((ad, i) => (
            <div key={i} className="sp-panel">
              <span className="sp-panel__label">広告</span>
              <a href={ad.url} target="_blank" rel="noopener noreferrer" className="sp-panel__link">
                <img src={ad.img} alt={ad.name} className="sp-panel__img sp-panel__img--half" />
              </a>
            </div>
          ))}
        </div>
      )}

      {/* ── 企画紹介 ── */}
      <section className="section kikaku" id="kikaku">
        <div className="container">
          <div className="section-label">Programs</div>
          <h2 className="section-title">企画紹介</h2>
          <div className="section-sponsor">
            <span>Supported by</span>
            <img src={linemoImg} alt="LINEMO" />
            <span>LINEMO</span>
          </div>
          <div className="kikaku-stage-tabs">
            {['メインステージ', '屋内ステージ', 'サブステージ'].map(stage => (
              <button
                key={stage}
                className={`kikaku-stage-tab ${kikakuStage === stage ? 'active' : ''}`}
                onClick={() => setKikakuStage(stage)}
              >{stage}</button>
            ))}
          </div>
          {(() => {
            const items = KIKAKU.filter(k => k.stage === kikakuStage)
            if (items.length === 0) return (
              <p className="kikaku-empty">このステージの企画情報は準備中です。</p>
            )
            return (
              <div className="kikaku-grid">
                {items.map((k, i) => (
                  <div className="kikaku-card" key={i} onClick={() => setSelectedKikaku(k)} role="button" tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && setSelectedKikaku(k)}>
                    <div className="kikaku-card__tag" style={{ background: k.color }}>{k.tag}</div>
                    <h3 className="kikaku-card__name">{k.name}</h3>
                    <div className="kikaku-card__meta">
                      <span>{k.day}</span>
                      <span>{k.time}〜</span>
                      <span>{k.stage}</span>
                    </div>
                    <p className="kikaku-card__desc">{k.desc}</p>
                    <span className="kikaku-card__more">詳細を見る →</span>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* ── 文脈広告（④ 複数枚は横並び） ── */}
      {CONTEXT_ADS.length > 0 && (
        <div className="sp-row-zone">
          <span className="sp-row-zone__label">協賛</span>
          <div className="sp-row-zone__inner">
            {CONTEXT_ADS.map((ad, i) => (
              <a key={i} href={ad.url} target="_blank" rel="noopener noreferrer" className="sp-row-card">
                <img src={ad.img} alt={ad.name} className="sp-row-card__img" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ── 出店・サークル ── */}
      <section className="section circles" id="circles">
        <div className="container">
          <div className="section-label">Circles & Stalls</div>
          <h2 className="section-title">出店・サークル紹介</h2>
          {['音楽', 'ダンス', '演劇', '展示', '文化', 'グルメ', '参加型'].filter(g => CIRCLES.some(c => c.genre === g)).map(genre => (
            <div key={genre}>
              <h3 className="circles-genre-heading">{genre}</h3>
              <div className="circles__grid">
                {CIRCLES.filter(c => c.genre === genre).map((c, i) => (
                  <div className="circle-card" key={i}>
                    <div className="circle-card__genre">{c.genre}</div>
                    <h3 className="circle-card__name">{c.name}</h3>
                    <p className="circle-card__desc">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── アクセス ── */}
      <section className="section access" id="access">
        <div className="container">
          <div className="section-label">Access</div>
          <h2 className="section-title">アクセス</h2>
          <div className="access__grid">
            <div className="access__info">
              <div className="access__item">
                <span className="access__icon">📍</span>
                <div>
                  <p className="access__label">会場</p>
                  <p className="access__val">熊本大学 黒髪北キャンパス</p>
                  <p className="access__sub">〒860-8555 熊本市中央区黒髪2-39-1</p>
                </div>
              </div>
              <div className="access__item">
                <span className="access__icon">🚌</span>
                <div>
                  <p className="access__label">バス</p>
                  <p className="access__val">市バス「熊本大学前」下車すぐ</p>
                </div>
              </div>
              <div className="access__item">
                <span className="access__icon">🚃</span>
                <div>
                  <p className="access__label">電車</p>
                  <p className="access__val">市電「黒髪町」徒歩10分</p>
                </div>
              </div>
              <div className="access__item">
                <span className="access__icon">🅿️</span>
                <div>
                  <p className="access__label">駐車場</p>
                  <p className="access__val">当日は駐車場のご用意がございません</p>
                  <p className="access__sub">公共交通機関をご利用ください</p>
                </div>
              </div>
              <a
                className="map-link"
                href="https://maps.google.com/?q=熊本大学黒髪北キャンパス"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google マップで開く →
              </a>
            </div>
            <div className="access__map">
              <iframe
                title="熊本大学黒髪北キャンパス"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4!2d130.7408!3d32.8115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540f4027b1a0001%3A0x1!2z54aK5pys5aSn5a2m6buS6aaZ5YyWOuWMl-aKiw!5e0!3m2!1sja!2sjp!4v1"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 協賛一覧 ── */}
      <section className="section sponsors-section" id="sponsors">
        <div className="container">
          <div className="section-label">Sponsors</div>
          <h2 className="section-title">協賛一覧</h2>
          <p className="sponsors-section__note">協賛企業の皆様のご支援により、紫熊祭は運営されています。</p>
          {SPONSOR_GROUPS.map(group => {
            const items = ADS.filter(a => group.tiers.includes(a.tier))
            if (!items.length) return null
            return (
              <div key={group.label} className="sponsor-group">
                <div className="sponsor-group__label" style={{ '--accent': group.accent }}>
                  <span className="sponsor-group__bar" />
                  <span className="sponsor-group__ja">{group.ja}</span>
                  <span className="sponsor-group__en">{group.label}</span>
                </div>
                <div className="sponsor-group__grid">
                  {items.map((ad, i) => (
                    <a key={i} href={ad.url} target="_blank" rel="noopener noreferrer" className="sponsor-card">
                      <div className="sponsor-card__img-wrap">
                        <img src={ad.img} alt={ad.name} className="sponsor-card__img" />
                      </div>
                      <p className="sponsor-card__name">{ad.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="footer">
        {LOGO_ADS.length > 0 && (
          <div className="footer__sponsors">
            <p className="footer__sponsors-label">協賛企業</p>
            <div className="footer__sponsors-grid">
              {LOGO_ADS.map((ad, i) => (
                <a key={i} href={ad.url} target="_blank" rel="noopener noreferrer" className="footer__sponsor-item">
                  <img src={ad.img} alt={ad.name} className="footer__sponsor-img" />
                  <span className="footer__sponsor-name">{ad.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="footer__sigma">Σ</div>
        {/* TODO: 回数・年度を今年のものに更新 */}
        <p className="footer__title">第14回 紫熊祭実行委員会</p>
        <p className="footer__copy">© 2025 紫熊祭実行委員会 All rights reserved.</p>
      </footer>

      {/* ── アンカー広告（画面下部固定・フェードイン切り替え） ── */}
      {floatAdVisible && (
        <div className="sp-float">
          <span className="sp-float__label">広告</span>
          <button className="sp-float__close" onClick={() => setFloatAdVisible(false)}>✕</button>
          <a
            href={ANCHOR_ADS[adIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-float__link"
            style={{ opacity: adFade ? 1 : 0 }}
          >
            <img src={ANCHOR_ADS[adIndex].img} alt={ANCHOR_ADS[adIndex].name} className="sp-float__img" />
          </a>
        </div>
      )}

    </div>
  )
}