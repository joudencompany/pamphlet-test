// src/pages/HomePage.jsx
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import terrabalImg from '../assets/terrabal.jpg'
import terrabalImg2 from '../assets/terrabal2.jpg'
import chuoImg from '../assets/chuo.png'
import seikyou from '../assets/seikyou.png'
import konntakuto from '../assets/konntakuto.png'
import ouesu from '../assets/ouesu.png'
import campusmap from '../assets/campusmap.png'
import kyouseisika from '../assets/kyouseisika.png'
import TKU1 from '../assets/TKU1.png'
import TKU2 from '../assets/TKU2.png'
import tentmapImg from '../assetstent/tentmap.png'
import tentmapImg2 from '../assetstent2/tentmap2.png'
import okunaimapImg from '../assetsokunai/okunaimap.png'
import okunaimapImg2_1 from '../assetsokunai2/okunaimap2-1.png'
import okunaimapImg2_2 from '../assetsokunai2/okunaimap2-2.png'
import okunaimapImg2_3 from '../assetsokunai2/okunaimap2-3.png'
import kumakore from '../assets/kumakore.png'
import kumakore2 from '../assets/kumakore2.png'
import stamp from '../assets/stamp.png'
import kinnniku from '../assets/kinnniku.png'
import owarai from '../assets/owarai.png'
import higoPella from '../assets/higo_pella.png'
import shodou from '../assets/shodou.png'
import hougaku from '../assets/hougaku.png'
import chairImg from '../assets/chair.jpg'
import viceBabaImg from '../assets/vice-baba.jpg'
import viceNarasakiImg from '../assets/vice-narasaki.jpg'
import meijikmb from '../assets/meijikmb.png'
import pikusuraunnji from '../assets/pi-kusuraunnji.png'
import konntesuto from '../assets/kumadaikonntesuto.png'
import konntesuto2 from '../assets/kumadaikonntesuto2.png'
import mainabi from '../assets/mainabi.png'
import triumph from '../assets/triumph.png'
import kaikatu from '../assets/kaikatu.png'
import sigmaGrandprixImg from '../assets/sigma-grandprix.png'
import ouendanLeaderImg from '../assets/ouendan-leader.png'
import cheerImg from '../assets/cheer.png'
import yosakoiImg from '../assets/yosakoi.png'
import mpbImg from '../assets/mpb.png'
import muscleFestivalImg from '../assets/muscle-festival.png'
import acoDay1Img from '../assets/aco-day1.png'
import dapImg from '../assets/dap.png'
import folkDanceDay2Img from '../assets/folk-dance-day2.png'
import utaumaImg from '../assets/utauma.png'
import rockDay2Img from '../assets/rock-day2.png'
import acoDay2Img from '../assets/aco-day2.png'
import philDay2Img from '../assets/phil-day2.png'
import kumakoreDay2Img from '../assets/kumakore-day2.png'
import introDonImg from '../assets/intro-don.png'
import folkDay3Img from '../assets/folk-day3.png'
import higoDay3Img from '../assets/higo-day3.png'
import dressDay3Img from '../assets/dress-day3.png'
import culletDay3Img from '../assets/cullet-day3.png'
import acoDay3Img from '../assets/aco-day3.png'
import ensembleDay3Img from '../assets/ensemble-day3.png'
import kotakiDay3Img from '../assets/kotaki-day3.png'
import jazzDay3Img from '../assets/jazz-day3.png'
import candleDay3Img from '../assets/candle-day3.png'
import finaleDay3Img from '../assets/finale-day3.png'
import benngosi from '../assets/benngosi.png'
import AdvertisementSection from '../components/AdvertisementSection'

/* ── データ ── */
const DAYS = [
  { label: '11/1', day: '日', color: '#e03c3c' },
  { label: '11/2', day: '月', color: '#2a8c4a' },
  { label: '11/3', day: '火・祝', color: '#e03c3c' },
]
const TIMETABLE = {
'11/1': [ // 1日目
  {
    time: '10:00',
    endTime: '11:00',
    name: 'オープニング',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '紫熊祭のスタートを飾るオープニングです！吹奏楽部さんによる演奏や、書道部さん、BLAZESさんによるパフォーマンスで中央ステージを華やかに彩ります。最後のバルーンリリースで盛り上がること間違いなし！',
  },
  {
    time: '11:20',
    endTime: '12:30',
    name: '熊大コンテスト',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '熊大生の外見だけではなく、内面や個性、特技などさまざまな魅力をお届けするコンテスト。あなたの一票で今年のグランプリが決まります！ぜひ会場で、出場者一人ひとりの輝きをご覧ください！',
    imgs: [konntesuto, konntesuto2],
  },
  {
    time: '13:00',
    endTime: '13:15',
    name: '演舞披露 壮行会形式',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '押忍！応援団リーダー部は今回、壮行会形式での演武を披露します。我々の応援を受け取りに来てください‼',
    imgs: [ouendanLeaderImg],
  },
  {
    time: '13:15',
    endTime: '13:30',
    name: 'チアリーディング部演技',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '熊本大学応援団チアリーディング部です！演技を通してみなさんに元気・勇気・笑顔をお届けします⭐！',
    imgs: [cheerImg],
  },
  {
    time: '13:30',
    endTime: '13:45',
    name: 'よさこい',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '熊本市内の学生約150人が所属し、年約100の祭りに参加。YOSAKOIで熊本を盛り上げます。',
    imgs: [yosakoiImg],
  },
  {
    time: '14:15',
    endTime: '15:15',
    name: 'MPB 紫熊祭Live',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: 'こんにちはMPBです！今年も紫熊祭に出演します！盛り上がる曲をお届けするのでぜひ一緒に楽しみましょう！',
    imgs: [mpbImg],
  },
  {
    time: '15:45',
    endTime: '16:45',
    name: 'アコ愛紫熊祭Live!!',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '今年は計3バンドが出演します！どのバンドも迫力がすごくて絶対楽しいので、ぜひ見に来てください！',
    imgs: [acoDay1Img],
  },
  {
    time: '17:00',
    endTime: '18:00',
    name: 'DAP',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '熊本大学ストリートダンスサークルDAPです！1日目17時からメインステで踊るので是非見に来てください！',
    imgs: [dapImg],
  },
  {
    time: '11:00',
    endTime: '12:00',
    name: 'イントロドン',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: 'イントロを聞いて、誰よりも早く曲名を当てよう！会場の皆さんも一緒に盛り上がれる、白熱の音楽クイズ企画です♪ぜひご来場ください！',
    imgs: [introDonImg],
  },
  {
    time: '12:30',
    endTime: '13:15',
    name: 'SIGMAグランプリ',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: '笑いの頂点を決める大喜利バトル開幕！審査員のS.I.G.M.Aが炸裂し、IPPONが飛び交う白熱のステージ。勝ち残った者だけが決勝へ進み、最多SIGMAの王者が栄冠を掴む。',
    imgs: [sigmaGrandprixImg],
  },
  {
    time: '13:45',
    endTime: '16:45',
    name: 'Higo-Pella',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: '熊本大学アカペラサークルHigo-Pellaです！素敵な演奏をお届けします！',
    imgs: [higoPella],
  },
  {
    time: '10:30',
    endTime: '16:30',
    name: 'しぐまつり～おかしな縁日～',
    stage: 'その他の場所',
    place: '子供広場',
    comment: '熊大に「”おかし”な縁日」が登場！射的やジャンボ缶倒し、輪投げなどゲームが勢揃い。大人向け難易度もあり、子供だけでなく大学生も楽しめます！必ずお菓子や景品がもらえるよ！大学生の本気を見せつけよう！！',
  },
  {
    time: '15:00',
    endTime: '18:00',
    name: '第12回夜の筋肉祭り',
    stage: 'その他の場所',
    place: '武夫原グラウンド',
    comment: '熊大生8名が腕相撲・ボディビル・綱引き・ローション相撲・障害物競争の5種目で競い合う競技イベントです。筋力と技を競い、総合得点で優勝者を決定します！',
    imgs: [kinnniku, muscleFestivalImg],
  },
],

'11/2': [ // 2日目
  {
    time: '10:00',
    endTime: '10:15',
    name: '邦楽演奏',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '初心者多数の元気な邦楽部です！当日は三味線箏尺八で「月の旋律」「ルパン三世のテーマ」を演奏します。',
    imgs: [hougaku],
  },
  {
    time: '10:30',
    endTime: '11:00',
    name: '書道パフォーマンス',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '音楽に合わせた迫力の書道パフォーマンスをお届けします！文字に込めた部員の熱い想いをご覧ください。',
    imgs: [shodou],
  },
  {
    time: '11:15',
    endTime: '11:45',
    name: 'フォークダンス',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '私たちフォークダンス部が世界各国の民族舞踊を披露します。様々な系統の踊りをぜひお楽しみください。',
    imgs: [folkDanceDay2Img],
  },
  {
    time: '12:00',
    endTime: '13:00',
    name: '歌うま',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '事前選抜を勝ち抜いた参加者がステージで熱唱！DAM精密採点と審査員で「熊大歌うま王」を決定します。昨年度の大盛況から進化した2026年版の、極上の歌声をお聞き逃しなく！',
    imgs: [utaumaImg],
  },
  {
    time: '13:30',
    endTime: '14:30',
    name: 'ロック研究 in メインステージ2026',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: 'こんにちはロック研究会です。今回は熾烈な予選を勝ち抜いた2バンドが演奏します。目撃せよ、激音炸裂！',
    imgs: [rockDay2Img],
  },
  {
    time: '15:00',
    endTime: '16:00',
    name: 'Higo-Pella',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '熊本大学アカペラサークルHigo-Pellaです！素敵な演奏をお届けします！',
    imgs: [higoPella],
  },
  {
    time: '16:15',
    endTime: '16:45',
    name: '熊大フィル軽音部58th',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '熊大フィル軽音部です！フィルを引退したOBによるバンド演奏を行います。お楽しみに！',
    imgs: [philDay2Img],
  },
  {
    time: '17:00',
    endTime: '18:00',
    name: '熊大コレクション2026',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '本学の学生がモデルとなり、私服や熊本内のセレクトショップの衣装でファッションショーを行います。メインテーマ「Ribbon」に絆、結びつきという思いを込め、関わる全ての人との結びつきを大切にします。',
    imgs: [kumakoreDay2Img, kumakore, kumakore2],
  },
  {
    time: '11:00',
    endTime: '14:00',
    name: 'Higo-Pella',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: '熊本大学アカペラサークルHigo-Pellaです！素敵な演奏をお届けします！',
    imgs: [higoPella],
  },
  {
    time: '15:00',
    endTime: '18:00',
    name: 'アコ愛紫熊祭Live!!',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: '計10バンド出演します！夕方の雰囲気にぴったりなトリとなってます！ぜひ、ご来場ください！',
    imgs: [acoDay2Img],
  },
  {
    time: '10:30',
    endTime: '16:30',
    name: 'しぐまつり～おかしな縁日～',
    stage: 'その他の場所',
    place: '子供広場',
    comment: '熊大に「”おかし”な縁日」が登場！射的やジャンボ缶倒し、輪投げなどゲームが勢揃い。大人向け難易度もあり、子供だけでなく大学生も楽しめます！必ずお菓子や景品がもらえるよ！大学生の本気を見せつけよう！！',
  },
],

'11/3': [ // 3日目
  {
    time: '10:00',
    endTime: '11:00',
    name: 'フォークソング研究会',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: 'F研の『マカロニえんぴつ』『04 Limited Sazabys』のアツい演奏をぜひ観に来てくれー！',
    imgs: [folkDay3Img],
  },
  {
    time: '11:30',
    endTime: '12:05',
    name: 'KUMADAI DRESS & TUXEDOSHOW',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '「GLOW」をテーマに、ドレスとタキシードに身を包んだ熊大生が登場！一人ひとりの個性と魅力が輝くステージを、華やかなランウェイとともにお届けします。ぜひ会場でご覧ください！',
    imgs: [dressDay3Img],
  },
  {
    time: '12:45',
    endTime: '13:45',
    name: 'Cullet',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: 'こんにちは！KPOPダンスカバーサークルのCulletです！✨💜私たちCulletは、現在100名以上の部員で活動しています！今回は例年より短い出演時間になりますが、その分いつも以上に可愛くパワフルに踊り、皆様に楽しんでいただけるよう頑張ります！✨',
    imgs: [culletDay3Img],
  },
  {
    time: '14:15',
    endTime: '14:45',
    name: '医学部アンサンブル',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '吹奏楽やオーケストラとはまた違った、アンサンブルを披露します！様々な楽器の音色をお楽しみください。',
    imgs: [ensembleDay3Img],
  },
  {
    time: '15:15',
    endTime: '16:15',
    name: '上瀧研究室',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '工学部の上瀧研究室が半自動ロボバンドで魅せます！世界にここだけの技術を、見逃すな。',
    imgs: [kotakiDay3Img],
  },
  {
    time: '16:45',
    endTime: '17:45',
    name: 'モダンジャズ研究会',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: 'こんにちは、モダンジャズ研究会です。今回のステージはのれる音楽を演奏します。どうぞお楽しみください。',
    imgs: [jazzDay3Img],
  },
  {
    time: '18:00',
    endTime: '19:30',
    name: 'フィナーレ',
    stage: 'メインステージ',
    place: 'メインステージ',
    comment: '表彰式、豪華景品が当たる大抽選会や幻想的なランタンの打ち上げなどなど…紫熊祭の最後を締めくくる企画が盛りだくさん♪ぜひフィナーレまでお楽しみください！',
    imgs: [finaleDay3Img],
  },
  {
    time: '10:00',
    endTime: '13:00',
    name: 'Higo-Pella',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: '熊本大学アカペラサークルHigo-Pellaです！素敵な演奏をお届けします！',
    imgs: [higoDay3Img],
  },
  {
    time: '13:30',
    endTime: '16:30',
    name: 'アコースティック愛好会',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: '計10バンド出演します！弾き語りからバンドまで、幅広いバンド編成で音楽をお届けします！',
    imgs: [acoDay3Img],
  },
  {
    time: '17:00',
    endTime: '18:00',
    name: 'キャンドルナイト',
    stage: 'サブステージ',
    place: 'サブステージ',
    comment: 'キャンドルナイトでは、一人一人がオリジナルのキャンドルを作ることができ、夜には作ったキャンドルに火を灯し、幻想的な空間を楽しめます！ぜひ、キャンドルナイトで楽しい思い出を作ってください！ ※キャンドル作りは、11/1（1日目）10:30～16:30の間に子供広場にて行っております。',
    imgs: [candleDay3Img],
  },
  {
    time: '10:30',
    endTime: '16:30',
    name: 'しぐまつり～おかしな縁日～',
    stage: 'その他の場所',
    place: '子供広場',
    comment: '熊大に「”おかし”な縁日」が登場！射的やジャンボ缶倒し、輪投げなどゲームが勢揃い。大人向け難易度もあり、子供だけでなく大学生も楽しめます！必ずお菓子や景品がもらえるよ！大学生の本気を見せつけよう！！',
  },
  {
    time: '14:00',
    endTime: '15:40',
    name: 'お笑いステージ2026',
    stage: 'その他の場所',
    place: '新体育館',
    comment: '今年の紫熊祭に、サンシャイン池崎とぱーてぃーちゃんが登場！じゃんけん大会や質問コーナーに加え、サインや写真撮影が景品として当たる抽選会も開催します。最高に盛り上がる爆笑ステージをお見逃しなく！',
    imgs: [owarai],
  },
],
}

/* ── ステージごとの色分け ── */
const STAGE_COLOR = {
  'その他の場所': '#2a8c4a',
  'メインステージ': '#6c3fc7',
  'サブステージ':   '#e07c00',
  'こども広場':     '#2a8c4a',
  'こども広場＋α':  '#2a8c4a',
}
/* ── アンカー広告データ（中央自動車学校のみ） ── */
const ANCHOR_AD = { img: chuoImg, alt: '中央自動車学校', url: 'https://chuo-ds.com/' }
export default function HomePage() {
  const [adVisible, setAdVisible] = useState(false)
  const [adShown, setAdShown] = useState(false)
  const [surveyTriggered, setSurveyTriggered] = useState(false)
  const [surveyOpen, setSurveyOpen] = useState(false)
  const [surveyDone, setSurveyDone] = useState(() => sessionStorage.getItem('surveyDone2') === 'true')
  const [surveyType, setSurveyType] = useState(null)
  const [surveyRating, setSurveyRating] = useState(0)
  const [surveyComment, setSurveyComment] = useState('')
  const [surveySent, setSurveySent] = useState(false)
  const [activeDay, setActiveDay] = useState('11/1')
  const [menuOpen, setMenuOpen] = useState(false)
  const [bubble, setBubble] = useState(null) // タイムテーブルの吹き出し
  const [greetOpen, setGreetOpen] = useState({ chair: false, vice: false }) // 挨拶の折りたたみ
  const heroRef = useRef(null)
  const [adPos, setAdPos] = useState({ right: 20, bottom: 20 })
  const [adClosed, setAdClosed] = useState(false)
  const [isDraggingAd, setIsDraggingAd] = useState(false)
  const adDragRef = useRef(null)
  const hasDraggedRef = useRef(false)
  const onAdPointerDown = (e) => {
    e.preventDefault()
    hasDraggedRef.current = false
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    adDragRef.current = { startX: clientX, startY: clientY, startRight: adPos.right, startBottom: adPos.bottom }
    setIsDraggingAd(true)
  }
  useEffect(() => {
    if (!isDraggingAd) return
    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const dx = clientX - adDragRef.current.startX
      const dy = clientY - adDragRef.current.startY
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasDraggedRef.current = true
      setAdPos({ right: Math.max(0, adDragRef.current.startRight - dx), bottom: Math.max(0, adDragRef.current.startBottom - dy) })
    }
    const onUp = () => setIsDraggingAd(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [isDraggingAd])
  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwtIeLx5X3U_pjhTT0VL_vPQ_Radn4argjWXeVfWtQy845vXB9CHQwBL1zh4hYGAwXp/exec'
  const handleSurvey = async () => {
    if (!surveyType || surveySent) return
    setSurveySent(true)
    setSurveyDone(true)
    sessionStorage.setItem('surveyDone2', 'true')
    const params = new URLSearchParams({ type: surveyType, rating: surveyRating, comment: surveyComment })
    try {
      await fetch(`${SHEET_URL}?${params}`, { method: 'GET', mode: 'no-cors' })
    } catch (e) {
      console.error('送信失敗', e)
    }
    setTimeout(() => setSurveyOpen(false), 2500)
  }
  useEffect(() => {
    if (surveyDone || surveyTriggered) return
    const onScroll = () => { if (window.scrollY > 400) setSurveyTriggered(true) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [surveyDone, surveyTriggered])
  useEffect(() => {
  document.title = '第15回 紫熊祭 | 熊本大学黒髪北キャンパス'
}, [])
useEffect(() => {
  if (adShown) return
  const sectionIds = ['greeting', 'timetable', 'circles-tent', 'access']
  const AD_TRIGGER = 2 // 何セクション通過したら表示するか
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
  /* タイムテーブル吹き出し：外側クリック・Esc・リサイズ・日付切替で閉じる */
  useEffect(() => { setBubble(null) }, [activeDay])
useEffect(() => {
  if (!bubble) return
  const close = () => setBubble(null)
  const onClick = (e) => {
    if (!e.target.closest('.tt-bubble, .tt-link')) close()
  }
  const onKey = (e) => { if (e.key === 'Escape') close() }
  // スマホはアドレスバーの出入りで高さだけ変わるので、幅が変わった時（回転など）だけ閉じる
  const w = window.innerWidth
  const onResize = () => { if (window.innerWidth !== w) close() }
  document.addEventListener('click', onClick)
  document.addEventListener('keydown', onKey)
  window.addEventListener('resize', onResize)
  // シート表示中は背面のスクロールを止める
  const prevOverflow = document.body.style.overflow
  if (bubble.mode === 'sheet') document.body.style.overflow = 'hidden'
  return () => {
    document.removeEventListener('click', onClick)
    document.removeEventListener('keydown', onKey)
    window.removeEventListener('resize', onResize)
    document.body.style.overflow = prevOverflow
  }
}, [bubble])
  const openBubble = (e, ev, stage, key) => {
    if (bubble?.key === key) { setBubble(null); return }
    // スマホ幅：画面下から出るシート（位置計算なし・画面外に出ない）
    if (window.matchMedia('(max-width: 768px)').matches) {
      setBubble({ key, ev, stage, mode: 'sheet' })
      return
    }
    const r = e.currentTarget.getBoundingClientRect()
    const width = Math.min(320, window.innerWidth - 24)
    const center = r.left + r.width / 2
    const left = Math.max(12, Math.min(center - width / 2, window.innerWidth - width - 12))
    const arrowX = Math.max(24, Math.min(center - left, width - 24))
    setBubble({
      key, ev, stage, width, arrowX, mode: 'pop',
      left: left + window.scrollX,
      top: r.bottom + window.scrollY + 12,
    })
  }
  const toggleGreet = (key) => {
    const willClose = greetOpen[key]
    setGreetOpen(o => ({ ...o, [key]: !o[key] }))
    // 閉じるときはカードの先頭へ戻す（長文を読んだ後に位置を見失わないように）
    if (willClose) {
      document.getElementById(`greet-card-${key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
  return (
    <div className="site">
      {/* ── アンケート吹き出し ── */}
      {surveyTriggered && (!surveyDone || (surveySent && surveyOpen)) && (
        <div className={`survey-bubble ${surveyOpen ? 'is-open' : ''}`}>
          <button type="button" className="survey-bubble__tab" onClick={() => setSurveyOpen(v => !v)}>
            アンケートにご協力ください {surveyOpen ? '▲' : '▼'}
          </button>
          {surveyOpen && (
            <div className="survey-bubble__panel">
              {surveySent ? <p className="survey-bubble__thanks">ご回答ありがとうございます！</p> : (
                <>
                  <p className="survey-bubble__label">あなたは？</p>
                  <div className="survey-type">
                    {['熊大生', '他大学生', '外部来場者'].map(v => (
                      <button type="button" key={v} className={`survey-type__btn ${surveyType === v ? 'active' : ''}`} onClick={() => setSurveyType(v)}>{v}</button>
                    ))}
                  </div>
                  <p className="survey-bubble__label">満足度</p>
                  <div className="survey-rating">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button type="button" key={n} aria-label={`満足度${n}`} className={`survey-rating__star ${n <= surveyRating ? 'active' : ''}`} onClick={() => setSurveyRating(n)}>★</button>
                    ))}
                  </div>
                  <p className="survey-bubble__label">感想（任意）</p>
                  <textarea className="survey-textarea" placeholder="ご自由にどうぞ" value={surveyComment} onChange={e => setSurveyComment(e.target.value)} />
                  <button type="button" className="survey-submit" onClick={handleSurvey} disabled={!surveyType}>送信する</button>
                </>
              )}
            </div>
          )}
        </div>
      )}
      {/* ── インタースティシャル広告 ── */}
      {adVisible && (
        <div className="ad-interstitial" onClick={() => { setAdVisible(false); setAdShown(true) }}>
          <div className="ad-interstitial__box" onClick={e => e.stopPropagation()}>
            <button className="ad-interstitial__close" onClick={() => { setAdVisible(false); setAdShown(true) }}>✕</button>
            <a href="https://chuo-ds.com/" target="_blank" rel="noopener noreferrer">
              <img src={chuoImg} alt="中央自動車学校" className="ad-interstitial__img" />
            </a>
          </div>
        </div>
      )}
      {/* ── ナビ ── */}
      <header className="nav">
        <div className="nav__logo" onClick={() => scrollTo('hero')}>
          <span className="nav__logo-sigma">Σ</span> 紫熊祭
        </div>
        <nav className={`nav__links ${menuOpen ? 'open' : ''}`}>
          {[['挨拶','greeting'],['諸注意','notice'],['タイムテーブル','timetable'],['出店・サークル（テント）','circles-tent'],['出店・サークル（屋内）','circles-okunai'],['スタンプ','stamp'],['アクセス','access'],].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>
          <span /><span /><span />
        </button>
      </header>
      {/* ── ヒーロー ── */}
      <section className="hero" id="hero" ref={heroRef}>
        <div className="hero__inner">
          <p className="hero__kaicho">第15回</p>
          <h1 className="hero__title">紫熊祭</h1>
          <p className="hero__en">SIGMA FES</p>
          <div className="hero__theme">Xceed The Vision</div>
          <div className="hero__dates">
            <span>11.1<small>日</small></span>
            <span className="hero__dates-sep">—</span>
            <span>11.3<small>火・祝</small></span>
          </div>
          <p className="hero__place">熊本大学 黒髪北キャンパス</p>
          <button className="hero__cta" onClick={() => scrollTo('timetable')}>
            スケジュールを見る →
          </button>
        </div>
      </section>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：テラバル自動車学校
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://terrabal.co.jp" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={terrabalImg} alt="テラバル自動車学校" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：テラバル自動車学校2
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://terrabal.co.jp" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={terrabalImg2} alt="テラバル自動車学校" className="ad-banner__img" />
        </a>
      </div>
{/* ── ご協賛企業一覧 ── */}
<section className="section sponsors" id="sponsors">
  <div className="container">
    <div className="section-label">Sponsors</div>
    <h2 className="section-title">ご協賛企業一覧</h2>
    <p className="sponsors__lead">
      第十五回紫熊祭 公式パンフレット広告ご協賛企業一覧
    </p>
    <ul className="sponsors__list">
      {[
        'hair mode RITZ',
        'JAグループ熊本くまもと売れる米づくり推進本部',
        'KM バイオロジクス 株式会社',
        'Pop Town Project',
        '居酒屋 ひゃくしょう茶屋 駕町店',
        '医療法人 熊本駅前矯正歯科クリニック',
        '医療法人社団 大塚メディカル八景水谷クリニック',
        '医療法人 フォーチュンなかがわ整形',
        '医療法人 山部会 くまもと成城病院',
        '学校法人 九州測量専門学校',
        '株式会社 AIKASU',
        '株式会社 Evoliv',
        '株式会社 KDS 熊本ドライビングスクール',
        '株式会社 think garbage',
        '株式会社 UNICS',
        '株式会社 あつまるホールディングス',
        '株式会社 快活フロンティア',
        '株式会社 キューネット',
        '株式会社 秀拓',
        '株式会社 中央自動車学校',
        '株式会社 寺原自動車学校',
        '株式会社 テレビ熊本',
        '株式会社 トライアンフ',
        '株式会社 ヒライ',
        '株式会社 ピークスキャリア',
        '株式会社 ボウリング王国スポルト 熊本店',
        '株式会社 マイナビ',
        '株式会社 明和不動産',
        '株式会社 ライブプラザパートナーズ FA 営業部',
        '上熊本三陽自動車学校',
        '熊本県弁護士会',
        '熊本大学生活協同組合',
        '熊本電気鉄道株式会社',
        '熊本トヨペット株式会社',
        'コンタクトのアイシティ 下通り店',
        'しまだ内科クリニック',
        '杉島龍市土地家屋調査士事務所',
        'スパイスアロマ',
        '税理士法人 近代経営',
        '八木八',
        '有限会社 オー・エス収集センター',
        '有限会社 サンエンタープライズカラオ毛 花畑公民館',
        'よしむら産婦人科皮ふ科クリニック',
      ].map((name) => (
        <li className="sponsors__item" key={name}>
          {name}
        </li>
      ))}
    </ul>
    <p className="sponsors__note">（五十音順、敬称略）</p>
    <div className="sponsors__thanks">
      <h3 className="sponsors__thanks-title">御礼</h3>
      <p>
        第十五回紫熊祭を開催するにあたり、多大なご協賛を賜り誠にありがとうございました。
        皆様のご支援によりまして円滑な運営ができますこと、厚く御礼申し上げます。
      </p>
    </div>
  </div>
</section>
{/* ── 委員長挨拶 ── */}
<section className="section greeting" id="greeting">
  <div className="container">
    <div className="section-label">Greeting</div>
    <h2 className="section-title">委員長挨拶</h2>
    <div className="greeting__card" id="greet-card-chair">
      <div className="greeting__photos">
        <img
          className="greeting__photo"
          src={chairImg}
          alt="委員長 蓮田 彪華"
          loading="lazy"
        />
      </div>
      <div className="greeting__body">
        <p className="greeting__name">委員長 蓮田 彪華</p>
        <p>
          この度は、第十五回紫熊祭公式パンフレットをご覧いただき、誠にありがとうございます。
          熊本大学最大の祭典である紫熊祭を、本年も無事に開催できますことを心より嬉しく思います。
        </p>
        <div
          className={`greeting__more ${greetOpen.chair ? 'open' : ''}`}
          id="greet-chair"
        >
          <div>
            <p>
              これもひとえに、学生や教職員、OB・OG、そして地域住民やご協賛企業の皆様の温かいご支援の賜物であり、実行委員一同、深く感謝申し上げます。
            </p>
            <p>
              第十五回を迎える「紫熊祭」の名には、本学のシンボルカラー「紫」と、総和を表す数学記号「Σ（シグマ）」の意味が込められています。
            </p>
            <p>
              今年のテーマは<strong>「Xceed the Vision」</strong>です。
              時代に合わせて変化を続ける中で、「これまでの紫熊祭を超えていく」という強い決意を込めました。
              この目標に向け、約400名の実行委員が幾多の困難を乗り越え、一丸となって準備に邁進してまいりました。
            </p>
            <p>
              皆様に最高の感動をお届けできるよう、野外ステージでの熱いパフォーマンス、多彩なテント出店や屋内展示、そして誰もが楽しめる特別企画など、数多くの催しをご用意しております。
            </p>
            <p>
              皆様の笑顔が私たちの何よりの喜びです。
              この3日間が皆様の記憶に永遠に刻まれる特別な思い出となるよう、共に感動あふれる祭典を創り上げられたら幸いです。
            </p>
            <p>
              史上最高の紫熊祭を、どうぞ心ゆくまでお楽しみください！
            </p>
          </div>
        </div>
        <button
          type="button"
          className="greeting__toggle"
          aria-expanded={greetOpen.chair}
          aria-controls="greet-chair"
          onClick={() => toggleGreet('chair')}
        >
          {greetOpen.chair ? '閉じる ▲' : '続きを読む ▼'}
        </button>
      </div>
    </div>
    <div className="greeting__card" id="greet-card-vice">
      <div className="greeting__photos greeting__photos--vice">
        <img
          className="greeting__photo"
          src={viceBabaImg}
          alt="副委員長 馬場 康輔"
          loading="lazy"
        />
        <img
          className="greeting__photo"
          src={viceNarasakiImg}
          alt="副委員長 楢崎 史奈"
          loading="lazy"
        />
      </div>
      <div className="greeting__body">
        <p className="greeting__name">副委員長 馬場 康輔・楢崎 史奈</p>
        <p>
          この度は、紫熊祭に足をお運びいただき、誠にありがとうございます。
          今年度も紫熊祭を開催し、皆様をお迎えできますことを、実行委員一同、心より嬉しく思っております。
        </p>
        <div
          className={`greeting__more ${greetOpen.vice ? 'open' : ''}`}
          id="greet-vice"
        >
          <div>
            <p>
              第十五回紫熊祭のテーマは
              <strong>「Xceed the Vision ―想像を超えていけ―」</strong>です。
              開催にあたり、様々な壁にぶつかりながらも、一人一人の想いやアイデアを力に変え、思い描いたもののさらに先へ進みたいという願いを込めています。
            </p>
            <p>
              私たちだけでなく、ご来場いただいた皆様にも、想像を超える出会いや発見を楽しんでいただきたいと考え、心を込めて準備してまいりました。
            </p>
            <p>
              テント企画では、各部活動やサークルが心を込めて準備したグルメやドリンクを、特設ステージでは様々なパフォーマンスや超豪華ゲストによるお笑いステージをお楽しみいただけます。
            </p>
            <p>
              また、屋内にもお化け屋敷やフォトスポット、各団体による企画や展示など、様々な催しをご用意しておりますので、ぜひお楽しみください。
            </p>
            <p>
              最後になりましたが、本祭の開催にあたり、ご支援・ご協力を賜りました全ての皆様に、心より御礼申し上げます。
            </p>
            <p>
              皆様の記憶に残る素敵な一日となりますよう、心から願っております。
              どうぞごゆっくりお楽しみください！
            </p>
          </div>
        </div>
        <button
          type="button"
          className="greeting__toggle"
          aria-expanded={greetOpen.vice}
          aria-controls="greet-vice"
          onClick={() => toggleGreet('vice')}
        >
          {greetOpen.vice ? '閉じる ▲' : '続きを読む ▼'}
        </button>
      </div>
    </div>
  </div>
</section>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：生協
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://coop.kyushu-bauc.or.jp/kumamoto-u/index.html" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={seikyou} alt="生協" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：オーエス
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.nohara-gr.com/admin-os/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={ouesu} alt="オーエス" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          メインテーマ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="theme" id="theme">
        <div className="theme__inner">
          <p className="theme__label">第15回紫熊祭 メインテーマ</p>
          <h2 className="theme__title" aria-label="Xceed The Vision">
            <b>X</b>ceed The <b>V</b>ision
          </h2>
          <div className="theme__ja">想像を超えていけ</div>
          <div className="theme__text">
            <p>
              「想像を超えていけ」という意味があり、頭文字のXとVでローマ数字の15を表しています。
            </p>
            <p>
              第15回という節目の年を、ひとりひとりの理想も超えた、まだ見ぬ学祭にしたいという願いが込められています。
            </p>
          </div>
        </div>
      </section>
{/* ── 諸注意 ── */}
<section className="section notice" id="notice">
  <div className="container">
    <div className="section-label">Notice</div>
    <h2 className="section-title">諸注意</h2>
    <p className="notice__lead">～皆で紫熊祭を楽しむために～</p>
    <ul className="notice__list">
      <li>
        紫熊祭の開催時間は以下のとおりです。
        <br />
        <strong>11/1・11/2（1・2日目）10:00～18:00</strong>
        <br />
        <strong>11/3（3日目）10:00～19:30</strong>
        <br />
        時間外の入場はできませんのでご注意ください。
      </li>
      <li>
        会場内には電力や音響などのコード、発電機が設置されています。
        感電や火災等の事故につながる可能性があるため、近づかないようにしてください。
      </li>
      <li>
        大学構内及びその周辺は、紙タバコ・電子タバコに限らず
        <strong>全域禁煙</strong>となっています。ご協力お願いします。
      </li>
      <li>
        会場内の<strong>飲酒は禁止</strong>です。
        飲酒や酒類の持ち込みが発覚した際には、警告もしくは退場していただく場合がございます。
        <br />
        また、飲酒された状態でのご入場もご遠慮ください。
      </li>
      <li>
        総合案内が<strong>赤門の手前</strong>にございます。
        <br />
        落とし物やその他お困りの際には、お気軽にお越しください。
      </li>
      <li>
        駐車場は付近のコインパーキングにお停めいただくか、
        <strong>黒髪小学校の臨時駐車場（1日目：11/1のみ開放）</strong>
        をご利用ください。
        <br />
        <span className="notice__sub">
          （3日目：11/3は、身体障がい者・高齢者の方専用に桜山中学校の臨時駐車場を開放します）
        </span>
      </li>
      <li>
        近隣の店舗や住民の方々の迷惑にならないよう、交通ルールをお守りいただくようお願いいたします。
      </li>
    </ul>
  </div>
</section>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          黒髪キャンパス
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.kumamoto-u.ac.jp/campusjouhou" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={campusmap} alt="黒髪キャンパス" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：KMB
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.kmbiologics.com/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={meijikmb} alt="KMB" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：熊本駅矯正歯科クリニック
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.kumamoto-ekimae-kc.com/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={kyouseisika} alt="熊本駅矯正歯科クリニック" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：ピークスラウンジ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.instagram.com/peacs_lounge/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={pikusuraunnji} alt="ピークスラウンジ" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：TKU1
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.tku.co.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={TKU1} alt="TKU1" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：TKU2
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label"></span>
        <a href="https://www.tku.co.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={TKU2} alt="TKU2" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：マイナビ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://job.mynavi.jp/2028/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={mainabi} alt="マイナビ" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：triumph
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.triumph98.com/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={triumph} alt="triumph" className="ad-banner__img" />
        </a>
      </div>

{/* ── タイムテーブル ── */}
<section className="section timetable" id="timetable">
  <div className="container">
    <div className="section-label">Timetable</div>
    <h2 className="section-title">タイムテーブル</h2>
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
    <div className="tt-columns">
      {Object.entries(
        TIMETABLE[activeDay].reduce((acc, ev) => {
          (acc[ev.stage] ||= []).push(ev)
          return acc
        }, {})
      ).map(([stage, events]) => (
        <div className="tt-column" key={stage}>
          <div
            className="tt-column__header"
            style={{ '--stage-c': STAGE_COLOR[stage] || '#888' }}
          >
            {stage}
          </div>
          <div className="tt-column__list">
            {events.map((ev, i) => (
              <div className="tt-row" key={i}>
                <div className="tt-time">
                  {ev.time}
                  {ev.endTime && <span className="tt-time__end"> – {ev.endTime}</span>}
                </div>
                <div className="tt-dot" style={{ background: STAGE_COLOR[stage] || '#888' }} />
                <div className="tt-content">
                  <button
                    type="button"
                    className={`tt-link ${bubble?.key === `${activeDay}-${stage}-${i}` ? 'is-open' : ''}`}
                    aria-expanded={bubble?.key === `${activeDay}-${stage}-${i}`}
                    onClick={(e) => openBubble(e, ev, stage, `${activeDay}-${stage}-${i}`)}
                  >
                    {ev.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：快活
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://www.kaikatsu.jp/" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={kaikatu} alt="快活" className="ad-banner__img" />
        </a>
      </div>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          広告：弁護士
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="ad-banner">
        <span className="ad-banner__label">広告</span>
        <a href="https://yoyaku.kumaben.or.jp/guide" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={benngosi} alt="弁護士" className="ad-banner__img" />
        </a>
      </div>
      {/* ── 出店・サークル ── */}
      <section className="section circles" id="circles-tent">
        <div className="container">
          <div className="section-label">Tent Booths</div>
          <h2 className="section-title">出店・サークル</h2
          >
          <p className="circles__subtitle">テント企画A・B</p>
          <div className="circles__map">
            <img
              src={tentmapImg}
              alt="テントマップ A・B"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/tent-info" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>
          <p className="circles__subtitle">テント企画C・D</p>
          <div className="circles__map">
            <img
              src={tentmapImg2}
              alt="テントマップ C・D"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/tent-info2" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>
        </div>
      </section>

{/* ── ご協賛広告一覧 ── */}
<AdvertisementSection />

      {/* ── 出店・サークル ── */}
      <section className="section circles" id="circles-okunai">
        <div className="container">
          <div className="section-label">Okunai Booths</div>
          <h2 className="section-title">出店・サークル</h2
          >
          <p className="circles__subtitle">屋内企画ー学生会館ー</p>
          <div className="circles__map">
            <img
              src={okunaimapImg}
              alt="屋内企画学生会館マップ"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/okunai-info" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>
          <p className="circles__subtitle">屋内企画ー全学教育棟ー</p>
          <div className="circles__map">
            <img
              src={okunaimapImg2_1}
              alt="屋内企画全学教育棟マップ"
              className="circles__map-img"
            />
          </div>
                    <div className="circles__map">
            <img
              src={okunaimapImg2_2}
              alt="屋内企画全学教育棟マップ"
              className="circles__map-img"
            />
          </div>
                    <div className="circles__map">
            <img
              src={okunaimapImg2_3}
              alt="屋内企画全学教育棟マップ"
              className="circles__map-img"
            />
          </div>
          <div className="circles__cta">
            <Link to="/okunai-info2" className="circles__btn">
              詳しくはこちら →
            </Link>
          </div>
        </div>
      </section>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          スタンプラリー
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section stamp" id="stamp">
      <div className="ad-banner">
        <a href="" target="_blank" rel="noopener noreferrer" className="ad-banner__link">
          <img src={stamp} alt="stamp" className="ad-banner__img" />
        </a>
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
          <div>
            <p className="access__label">会場</p>
            <p className="access__val">熊本大学 黒髪北キャンパス</p>
            <p className="access__sub">
              〒860-8555 熊本市中央区黒髪2-39-1
            </p>
          </div>
        </div>
        <div className="access__item">
          <div>
            <p className="access__label">バス</p>
            <p className="access__val">「熊本大学前」下車すぐ</p>
          </div>
        </div>
        <div className="access__item">
          <div>
            <p className="access__label">駐車場</p>
            <p className="access__val">
              付近のコインパーキングをご利用ください
            </p>
            <p className="access__sub">
              近隣の店舗や住民の方々の迷惑にならないよう、交通ルールをお守りください。
            </p>
          </div>
        </div>
        <div className="access__item">
          <div>
            <p className="access__label">臨時駐車場</p>
            <p className="access__val">
              黒髪小学校（1日目：11/1のみ開放）
            </p>
            <p className="access__sub">
              11/2・11/3は、黒髪小学校の臨時駐車場は開放しません。
            </p>
          </div>
        </div>
        <div className="access__item">
          <div>
            <p className="access__label">
              身体障がい者・高齢者の方専用の臨時駐車場
            </p>
            <p className="access__val">
              桜山中学校（3日目：11/3のみ開放）
            </p>
            <p className="access__sub">
              身体障がい者・高齢者の方専用です。
            </p>
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
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section> 
      {/* ── フッター ── */}
      <footer className="footer">
        <div className="footer__sigma">Σ</div>
        <p className="footer__title">第15回 紫熊祭実行委員会</p>
        <p className="footer__copy">© 2026 紫熊祭実行委員会 All rights reserved.</p>
      </footer>
      {/* ── タイムテーブル吹き出し ── */}
      {bubble && bubble.mode === 'sheet' && (
        <div className="tt-backdrop" onClick={() => setBubble(null)} />
      )}
      {bubble && (
        <div
          className={`tt-bubble ${bubble.mode === 'sheet' ? 'tt-bubble--sheet' : ''}`}
          role="dialog"
          aria-label={bubble.ev.name}
          style={
            bubble.mode === 'sheet'
              ? { '--stage-c': STAGE_COLOR[bubble.stage] || '#888' }
              : {
                  top: bubble.top,
                  left: bubble.left,
                  width: bubble.width,
                  '--arrow-x': `${bubble.arrowX}px`,
                  '--stage-c': STAGE_COLOR[bubble.stage] || '#888',
                }
          }
        >
          <button className="tt-bubble__close" onClick={() => setBubble(null)} aria-label="閉じる">✕</button>
          <h3 className="tt-bubble__title">{bubble.ev.name}</h3>
          <dl className="tt-bubble__list">
            <div>
              <dt>開催時間</dt>
              <dd>{bubble.ev.time}{bubble.ev.endTime && ` – ${bubble.ev.endTime}`}</dd>
            </div>
            <div>
              <dt>場所</dt>
              <dd>{bubble.ev.place || bubble.stage}</dd>
            </div>
          </dl>
          {bubble.ev.imgs && (
            <div className="tt-bubble__photos">
              {bubble.ev.imgs.map((src, idx) => (
                <img key={idx} src={src} alt={bubble.ev.name} />
              ))}
            </div>
          )}
          <p className="tt-bubble__comment">{bubble.ev.comment || '詳細は準備中です。'}</p>
        </div>
      )}
      {/* ── アンカー広告（ドラッグ可能・閉じる） ── */}
      {!adClosed && (
        <div className={`anchor-ad ${isDraggingAd ? 'is-dragging' : ''}`} style={{ right: adPos.right, bottom: adPos.bottom }} onMouseDown={onAdPointerDown} onTouchStart={onAdPointerDown}>
          <button type="button" className="anchor-ad__close" onClick={e => { e.stopPropagation(); setAdClosed(true) }} onMouseDown={e => e.stopPropagation()} onTouchStart={e => e.stopPropagation()} aria-label="閉じる">✕</button>
          <span className="anchor-ad__label">広告</span>
          <a href={ANCHOR_AD.url} target="_blank" rel="noopener noreferrer" className="anchor-ad__link" onClick={e => hasDraggedRef.current && e.preventDefault()} draggable={false}>
            <img src={ANCHOR_AD.img} alt={ANCHOR_AD.alt} className="anchor-ad__img" draggable={false} />
          </a>
        </div>
      )}

    </div>
  )
}