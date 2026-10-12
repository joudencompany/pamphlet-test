// src/components/SponsorSection.jsx
import { SPONSORS, TIERS, getSponsorTier } from '../data/sponsors'
import './SponsorSection.css'

// GitHub Pages のサブパス配信でも動くよう、Vite の base を使ってパスを組み立てる
const LOGO_BASE = `${import.meta.env.BASE_URL}sponsors/`

// 開発中だけ、区分が決まっていない企業をコンソールに知らせる
if (import.meta.env.DEV) {
  const pending = SPONSORS.filter((s) => !getSponsorTier(s))
  if (pending.length > 0) {
    console.warn(
      '[SponsorSection] 金額未確認のため表示していない企業:',
      pending.map((s) => s.name).join('、')
    )
  }
}

function SponsorLogo({ sponsor }) {
  const img = (
    <img
      src={`${LOGO_BASE}${sponsor.file}`}
      alt={sponsor.name}
      loading="lazy"
      decoding="async"
      draggable={false}
      style={sponsor.scale ? { '--logo-scale': sponsor.scale } : undefined}
    />
  )

  if (sponsor.url) {
    return (
      <a
        className="sponsor-logo sponsor-logo--link"
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${sponsor.name}（公式サイトを新しいタブで開く）`}
      >
        {img}
      </a>
    )
  }

  return <div className="sponsor-logo">{img}</div>
}

export default function SponsorSection() {
  const groups = TIERS.map((tier) => ({
    ...tier,
    items: SPONSORS.filter((s) => getSponsorTier(s) === tier.key),
  })).filter((group) => group.items.length > 0)

  return (
    <section
      className="sponsor-wall"
      id="sponsor-logos"
      aria-labelledby="sponsor-wall-title"
    >
      <div className="sponsor-wall__inner">
        <p className="sponsor-wall__label">SPONSORS</p>
        <h2 className="sponsor-wall__title" id="sponsor-wall-title">
          ご協賛企業
        </h2>
        <p className="sponsor-wall__lead">
          第十五回紫熊祭は、以下の企業・団体の皆様のご支援により開催されます。
        </p>

        {groups.map((group) => (
          <div
            key={group.key}
            className={`sponsor-tier sponsor-tier--${group.key}`}
          >
            <h3 className="sponsor-tier__title">{group.title}</h3>
            <ul className="sponsor-tier__grid">
              {group.items.map((sponsor) => (
                <li className="sponsor-tier__item" key={sponsor.id}>
                  <SponsorLogo sponsor={sponsor} />
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="sponsor-wall__note">（敬称略）</p>
      </div>
    </section>
  )
}