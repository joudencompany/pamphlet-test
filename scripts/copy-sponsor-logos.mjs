// scripts/copy-sponsor-logos.mjs
// 使い方（プロジェクトのルートで）:
//   node scripts/copy-sponsor-logos.mjs ./logo_4
// ※ ./logo_4 は logo_4.zip を展開したフォルダ

import fs from 'node:fs'
import path from 'node:path'

const srcDir = process.argv[2] || './logo_4'
const destDir = './public/sponsors'

// 濁点の分解形式(NFD)や空白の違いを吸収して比較する
const norm = (s) => s.normalize('NFC').replace(/\s+/g, '')

// [元のファイル名, 新しいファイル名]
const MAP = [
  ['hair mode RITZ.png', 'sponsor-01.png'],
  ['JAグループ熊本 くまもと売れる米づくり推進本部.png', 'sponsor-02.png'],
  ['KMバイオロジクス株式会社.png', 'sponsor-03.png'],
  ['Pop Town Project.png', 'sponsor-04.png'],
  ['ひゃくしょう茶屋 駕町店.png', 'sponsor-05.png'],
  ['熊本駅前矯正歯科クリニック.png', 'sponsor-06.png'],
  ['八景水谷クリニック.png', 'sponsor-07.png'],
  ['なかがわ整形.png', 'sponsor-08.png'],
  ['くまもと成城病院.png', 'sponsor-09.png'],
  ['九州測量専門学校.png', 'sponsor-10.png'],
  ['株式会社AIKASU.png', 'sponsor-11.png'],
  ['株式会社Evoliv.svg', 'sponsor-12.svg'],
  ['株式会社KDS熊本ドライビングスクール.png', 'sponsor-13.png'],
  ['株式会社think garbage.svg', 'sponsor-14.svg'],
  ['株式会社UNICS.png', 'sponsor-15.png'],
  ['株式会社あつまるホールディングス.png', 'sponsor-16.png'],
  ['株式会社快活フロンティア.svg', 'sponsor-17.svg'],
  ['株式会社キューネット.svg', 'sponsor-18.svg'],
  ['株式会社秀拓.svg', 'sponsor-19.svg'],
  ['株式会社中央自動車学校.svg', 'sponsor-20.svg'],
  ['株式会社寺原自動車学校.png', 'sponsor-21.png'],
  ['株式会社テレビ熊本.png', 'sponsor-22.png'],
  ['株式会社トライアンフ.png', 'sponsor-23.png'],
  ['株式会社ヒライ.png', 'sponsor-24.png'],
  ['株式会社ピークスキャリア.png', 'sponsor-25.png'],
  ['ボウリング王国スポルト 熊本店.png', 'sponsor-26.png'],
  ['株式会社マイナビ.png', 'sponsor-27.png'],
  ['株式会社明和不動産.svg', 'sponsor-28.svg'],
  ['株式会社ライフプラザパートナーズ.png', 'sponsor-29.png'],
  ['上熊本三陽自動車学校.png', 'sponsor-30.png'],
  ['熊本県弁護士会.gif', 'sponsor-31.gif'],
  ['熊本大学生活協同組合.png', 'sponsor-32.png'],
  ['熊本電気鉄道株式会社.png', 'sponsor-33.png'],
  ['熊本トヨペット株式会社.png', 'sponsor-34.png'],
  ['コンタクトのアイシティ 下通り店.svg', 'sponsor-35.svg'],
  ['しまだ内科クリニック.jpg', 'sponsor-36.jpg'],
  ['杉島龍市土地家屋調査士事務所.png', 'sponsor-37.png'],
  ['スパイスアロマ.png', 'sponsor-38.png'],
  ['税理士法人近代経営.png', 'sponsor-39.png'],
  ['八木八.png', 'sponsor-40.png'],
  ['有限会社オー・エス収集センター.png', 'sponsor-41.png'],
  ['花畑公民館.png', 'sponsor-42.png'],
  ['よしむら産婦人科皮ふ科クリニック.png', 'sponsor-43.png'],
  ['第一興商.png', 'sponsor-44.png'],
]

if (!fs.existsSync(srcDir)) {
  console.error(`フォルダが見つかりません: ${srcDir}`)
  process.exit(1)
}

fs.mkdirSync(destDir, { recursive: true })

const files = fs.readdirSync(srcDir)
const byName = new Map(files.map((f) => [norm(f), f]))

let copied = 0
const missing = []

for (const [orig, next] of MAP) {
  const found = byName.get(norm(orig))
  if (!found) {
    missing.push(orig)
    continue
  }
  fs.copyFileSync(path.join(srcDir, found), path.join(destDir, next))
  copied++
}

console.log(`コピー完了: ${copied} / ${MAP.length}`)
if (missing.length > 0) {
  console.log('見つからなかったファイル:')
  missing.forEach((m) => console.log(` - ${m}`))
}