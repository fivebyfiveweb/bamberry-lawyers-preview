/* global React, Nav, Footer */
// Shared page components used across pages

function PageHero({ eyebrow, title, kicker, children }) {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 90, background: 'var(--paper)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: 28 }}>
          <span className="dot" />{eyebrow}
        </div>
        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(38px, 5.2vw, 77px)', lineHeight: 1, letterSpacing: '-0.025em',
          margin: 0, color: 'var(--ink)', maxWidth: 1100,
        }}>
          {title}
        </h1>
        {kicker && (
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 640, margin: '36px 0 0' }}>
            {kicker}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

function Breadcrumb({ items }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {it.href ? <a href={it.href} style={{ color: 'var(--graphite-2)' }}>{it.label}</a> : <span style={{ color: 'var(--ink)' }}>{it.label}</span>}
          {i < items.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

function CTABand() {
  const d = window.BAMBERRY.data;
  return (
    <section style={{ padding: '120px 0', background: 'var(--ink)', color: 'var(--ivory)', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--serif)', fontSize: 'clamp(112px, 17.6vw, 320px)', fontStyle: 'italic',
        fontWeight: 400, color: 'rgba(176,138,74,0.06)', lineHeight: 1, letterSpacing: '-0.04em',
        pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>
        counsel.
      </div>
      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', justifyContent: 'center', marginBottom: 24 }}>
          <span className="dot" />Speak with us
        </div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(35px, 4.8vw, 70px)', lineHeight: 0.96, letterSpacing: '-0.025em',
          margin: '0 auto', maxWidth: 900,
        }}>
          The early decisions <em style={{ color: 'var(--accent)' }}>matter.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(246,241,232,0.78)', maxWidth: 600, margin: '28px auto 40px' }}>
          If you are under investigation or have been charged, talk to us today. We will tell you where you stand, what can be done, and what comes next.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="contact.html" className="btn btn--accent">Book free consultation <span className="arrow">→</span></a>
          <a href={`tel:${d.phoneRaw}`} className="btn" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'var(--ivory)' }}>
            Call 24/7 · {d.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PageHero, Breadcrumb, CTABand });
