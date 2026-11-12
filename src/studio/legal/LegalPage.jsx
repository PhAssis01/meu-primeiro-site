// Páginas legales: /aviso-legal, /privacidad y /cookies.
// Textos en ./content.js · datos del titular en ../data.js (LEGAL).
// Los datos que falten se muestran como «pendiente de publicación», con un aviso al inicio.
import { Fragment } from 'react'
import { usePageMeta } from '../../lib/hooks'
import { useCopy, useLang } from '../../i18n/context'
import { LANGUAGES } from '../../i18n/languages'
import Link from '../../router/Link'
import { CONTACT_EMAIL, LEGAL, LEGAL_ROUTES } from '../data'
import { ServiceNav, ServiceFooter } from '../services/ServiceLayout'
import LegalLinks from './LegalLinks'
import { LEGAL_COPY } from './content'
import '../studio.css'
import '../services/services.css'
import './legal.css'

// true si falta algún dato identificativo obligatorio del titular.
const LEGAL_INCOMPLETE = ['ownerName', 'taxId', 'address', 'registry'].some(
  (key) => !String(LEGAL[key] ?? '').trim(),
)

function useTokens(ui) {
  // Dato no publicado todavía: se indica claramente, sin inventar nada.
  const pending = <mark className="s-legal__pending">{ui.pending}</mark>
  const registry = LEGAL.registry === 'no-aplica' ? ui.registryNone : LEGAL.registry || pending

  return {
    owner: LEGAL.ownerName || pending,
    taxId: LEGAL.taxId || pending,
    address: LEGAL.address || pending,
    registry,
    email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>,
    site: 'phwebstudios.net',
    retention: String(LEGAL.contactRetentionMonths),
    notice: <Link to={LEGAL_ROUTES.notice}>{ui.linkNames.notice}</Link>,
    privacy: <Link to={LEGAL_ROUTES.privacy}>{ui.linkNames.privacy}</Link>,
    cookies: <Link to={LEGAL_ROUTES.cookies}>{ui.linkNames.cookies}</Link>,
    aepd: (
      <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
        www.aepd.es
      </a>
    ),
  }
}

// Sustituye {marcador} por su valor (texto o enlace).
function renderText(text, tokens) {
  return text.split(/(\{\w+\})/).map((part, index) => {
    const match = /^\{(\w+)\}$/.exec(part)
    if (match && match[1] in tokens) return <Fragment key={index}>{tokens[match[1]]}</Fragment>
    return part
  })
}

function Block({ block, tokens }) {
  if (typeof block === 'string') return <p>{renderText(block, tokens)}</p>
  if (block.list) {
    return (
      <ul>
        {block.list.map((item, index) => (
          <li key={index}>{renderText(item, tokens)}</li>
        ))}
      </ul>
    )
  }
  if (block.table) {
    return (
      <div className="s-legal__table">
        <table>
          <thead>
            <tr>
              {block.table.head.map((cell) => (
                <th key={cell} scope="col">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th key={index} scope="row">
                      <code>{cell}</code>
                    </th>
                  ) : (
                    <td key={index} data-label={block.table.head[index]}>
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

export default function LegalPage({ page }) {
  const t = useCopy(LEGAL_COPY)
  const { lang } = useLang()
  const ui = t.ui
  const content = t.pages[page]
  usePageMeta(`${content.title} — PH Web Studio`, 'studio', content.description)
  const tokens = useTokens(ui)

  const htmlLang = LANGUAGES.find((item) => item.code === lang)?.html ?? 'es'
  const updated = new Intl.DateTimeFormat(htmlLang, { dateStyle: 'long' }).format(
    new Date(`${LEGAL.lastUpdated}T12:00:00`),
  )

  return (
    <div className="studio sv s-legal-page">
      <a href="#main" className="s-skip">
        {ui.back}
      </a>
      <ServiceNav back={{ to: '/', long: ui.back, short: ui.backShort }} />
      <main id="main" className="s-legal">
        <div className="s-container s-legal__inner">
          <header className="s-legal__head">
            <p className="s-hero__tag">{ui.tag}</p>
            <h1 className="s-h2 s-legal__title">{content.title}</h1>
            <p className="s-legal__updated">
              {ui.updated}: <time dateTime={LEGAL.lastUpdated}>{updated}</time>
            </p>
            <LegalLinks className="s-legal__tabs" current={page} />
          </header>

          {LEGAL_INCOMPLETE && ui.pendingNotice[page] ? (
            <aside className="s-legal__notice" role="note">
              <p className="s-legal__notice-title">{ui.pendingTitle}</p>
              <p>{renderText(ui.pendingNotice[page], tokens)}</p>
            </aside>
          ) : null}

          {content.sections.map((section) => (
            <section key={section.title} className="s-legal__section">
              <h2>{section.title}</h2>
              {section.blocks.map((block, index) => (
                <Block key={index} block={block} tokens={tokens} />
              ))}
            </section>
          ))}

          <p className="s-legal__note">{ui.versionNote}</p>
        </div>
      </main>
      <ServiceFooter />
    </div>
  )
}
