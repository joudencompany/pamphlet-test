// src/data/sponsors.js
//
// 区分の判定ルール（getSponsorTier）
//   special   : special: true の企業（寺原自動車学校・中央自動車学校・テレビ熊本）
//   main      : 協賛金額 60,000円以上
//   sponsor   : 協賛金額 20,000円以上 60,000円未満
//   supporter : 協賛金額 20,000円未満
//   ※ tierOverride があればそれを優先
//   ※ 金額不明で tierOverride もない企業は区分なし（null）= 画面に表示しない
//
// 協賛金額は判定にのみ使い、画面には表示しません。
// url が空文字('')の企業はリンクなしで表示されます。

export const TIERS = [
  { key: 'special', title: 'SPECIAL SPONSORS' },
  { key: 'main', title: 'MAIN SPONSORS' },
  { key: 'sponsor', title: 'SPONSORS' },
  { key: 'supporter', title: 'SUPPORTERS' },
]

export function getSponsorTier(sponsor) {
  if (sponsor.tierOverride) return sponsor.tierOverride
  if (sponsor.special) return 'special'
  if (typeof sponsor.amountYen !== 'number') return null
  if (sponsor.amountYen >= 60000) return 'main'
  if (sponsor.amountYen >= 20000) return 'sponsor'
  return 'supporter'
}

export const SPONSORS = [
  /* ── SPECIAL SPONSORS（表示順は指定どおり） ── */
  {
    id: 21,
    name: '株式会社寺原自動車学校',
    file: 'sponsor-21.png',
    url: 'https://terrabal.co.jp',
    special: true,
    amountYen: 250000,
  },
  {
    id: 20,
    name: '株式会社中央自動車学校',
    file: 'sponsor-20.svg',
    url: 'https://chuo-ds.com/',
    special: true,
    amountYen: 250000,
  },
  {
    id: 22,
    name: '株式会社テレビ熊本',
    file: 'sponsor-22.png',
    url: 'https://www.tku.co.jp/',
    special: true,
    amountYen: 120000, // 2ページ分の合計
  },

  /* ── それ以外（既存の協賛企業一覧の並び順） ── */
  { id: 1, name: 'hair mode RITZ', file: 'sponsor-01.png', url: '', amountYen: 5000 },
  {
    id: 2,
    name: 'JAグループ熊本 くまもと売れる米づくり推進本部',
    file: 'sponsor-02.png',
    url: '',
    amountYen: 20000,
  },
  {
    id: 3,
    name: 'KMバイオロジクス株式会社',
    file: 'sponsor-03.png',
    url: 'https://www.kmbiologics.com/',
    amountYen: 60000,
  },
  { id: 4, name: 'Pop Town Project', file: 'sponsor-04.png', url: '', amountYen: 20000 },
  {
    id: 5,
    name: 'ひゃくしょう茶屋 駕町店',
    file: 'sponsor-05.png',
    url: '',
    amountYen: 5000,
  },
  {
    id: 6,
    name: '熊本駅前矯正歯科クリニック',
    file: 'sponsor-06.png',
    url: 'https://www.kumamoto-ekimae-kc.com/',
    amountYen: 60000,
  },
  { id: 7, name: '八景水谷クリニック', file: 'sponsor-07.png', url: '', amountYen: 5000 },
  { id: 8, name: 'なかがわ整形', file: 'sponsor-08.png', url: '', amountYen: 20000 },
  { id: 9, name: 'くまもと成城病院', file: 'sponsor-09.png', url: '', amountYen: 10000 },
  { id: 10, name: '九州測量専門学校', file: 'sponsor-10.png', url: '', amountYen: 10000 },
  { id: 11, name: '株式会社AIKASU', file: 'sponsor-11.png', url: '', amountYen: 5000 },
  { id: 12, name: '株式会社Evoliv', file: 'sponsor-12.svg', url: '', amountYen: 10000 },
  {
    id: 13,
    name: '株式会社KDS熊本ドライビングスクール',
    file: 'sponsor-13.png',
    url: '',
    amountYen: 5000,
  },
  { id: 14, name: '株式会社think garbage', file: 'sponsor-14.svg', url: '', amountYen: 5000 },
  { id: 15, name: '株式会社UNICS', file: 'sponsor-15.png', url: '', amountYen: 20000 },
  {
    id: 16,
    name: '株式会社あつまるホールディングス',
    file: 'sponsor-16.png',
    url: '',
    amountYen: 20000,
  },
  {
    id: 17,
    name: '株式会社快活フロンティア',
    file: 'sponsor-17.svg',
    url: 'https://www.kaikatsu.jp/',
    amountYen: 60000, // 総額75,000円のうち広告分60,000円で判定
  },
  { id: 18, name: '株式会社キューネット', file: 'sponsor-18.svg', url: '', amountYen: 20000 },
  { id: 19, name: '株式会社秀拓', file: 'sponsor-19.svg', url: '', amountYen: 10000 },
  {
    id: 23,
    name: '株式会社トライアンフ',
    file: 'sponsor-23.png',
    url: 'https://www.triumph98.com/',
    amountYen: 60000,
  },
  { id: 24, name: '株式会社ヒライ', file: 'sponsor-24.png', url: '', amountYen: 5000 },
  {
    id: 25,
    name: '株式会社ピークスキャリア',
    file: 'sponsor-25.png',
    url: 'https://www.instagram.com/peacs_lounge/',
    amountYen: 60000,
  },
  {
    id: 26,
    name: 'ボウリング王国スポルト 熊本店',
    file: 'sponsor-26.png',
    url: '',
    amountYen: 5000,
  },
  {
    id: 27,
    name: '株式会社マイナビ',
    file: 'sponsor-27.png',
    url: 'https://job.mynavi.jp/2028/',
    amountYen: 60000,
  },
  { id: 28, name: '株式会社明和不動産', file: 'sponsor-28.svg', url: '', amountYen: 60000 },
  {
    id: 29,
    name: '株式会社ライフプラザパートナーズ',
    file: 'sponsor-29.png',
    url: '',
    amountYen: 5000,
  },
  { id: 30, name: '上熊本三陽自動車学校', file: 'sponsor-30.png', url: '', amountYen: 20000 },
  {
    id: 31,
    name: '熊本県弁護士会',
    file: 'sponsor-31.gif',
    url: 'https://yoyaku.kumaben.or.jp/guide',
    amountYen: 40000,
  },
  {
    id: 32,
    name: '熊本大学生活協同組合',
    file: 'sponsor-32.png',
    url: 'https://coop.kyushu-bauc.or.jp/kumamoto-u/index.html',
    amountYen: 60000,
  },
  { id: 33, name: '熊本電気鉄道株式会社', file: 'sponsor-33.png', url: '', amountYen: 10000 },
  { id: 34, name: '熊本トヨペット株式会社', file: 'sponsor-34.png', url: '', amountYen: 10000 },
  {
    id: 35,
    name: 'コンタクトのアイシティ 下通り店',
    file: 'sponsor-35.svg',
    url: '',
    amountYen: 60000,
  },
  { id: 36, name: 'しまだ内科クリニック', file: 'sponsor-36.jpg', url: '', amountYen: 5000 },
  {
    id: 37,
    name: '杉島龍市土地家屋調査士事務所',
    file: 'sponsor-37.png',
    url: '',
    amountYen: 10000,
  },
  { id: 38, name: 'スパイスアロマ', file: 'sponsor-38.png', url: '', amountYen: 10000 },
  { id: 39, name: '税理士法人近代経営', file: 'sponsor-39.png', url: '', amountYen: 10000 },
  {
    id: 41,
    name: '有限会社オー・エス収集センター',
    file: 'sponsor-41.png',
    url: 'https://www.nohara-gr.com/admin-os/',
    amountYen: 60000,
  },
  { id: 42, name: '花畑公民館', file: 'sponsor-42.png', url: '', amountYen: 20000 },
  {
    id: 43,
    name: 'よしむら産婦人科皮ふ科クリニック',
    file: 'sponsor-43.png',
    url: '',
    amountYen: 5000,
  },

  /* ── 区分を手動で指定している企業 ── */
  {
    id: 44,
    name: '第一興商',
    file: 'sponsor-44.png',
    url: '',
    amountYen: null, // 金額は未確認
    tierOverride: 'main', // MAIN SPONSORS（区分2）に振り分け
  },

  /* ── 金額不明のため区分未定（確認が取れるまで画面には表示されません） ── */
  {
    id: 40,
    name: '八木八',
    file: 'sponsor-40.png',
    url: '',
    amountYen: 5000, // 金額が分かったらここに数値を入れるだけで表示されます
  },
]