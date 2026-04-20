/* global React, Nav, Footer, Breadcrumb, CTABand */

function LocationsPage() {
  const d = window.BAMBERRY.data;
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80, borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Bamberry', href: 'index.html' }, { label: 'Locations' }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" />Offices</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 5vw, 77px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
                Two offices.<br /><em style={{ color: 'var(--teal)' }}>All of Queensland.</em>
              </h1>
              <hr className="hairline" style={{ margin: '40px 0 28px', width: 120, background: 'var(--accent)', height: 2 }} />
              <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 620, margin: 0 }}>
                We appear in every court of criminal jurisdiction across Queensland — from local Magistrates Courts to the Supreme Court and beyond. Our two offices give us proximity to the Gold Coast and Brisbane court complexes.
              </p>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Jump to</div>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--ink)' }}>
                {d.locations.map((l, i) => (
                  <a key={l.slug} href={`#${l.slug}`} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '18px 0', borderBottom: '1px solid var(--line)',
                    fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--ink)',
                  }}>
                    <span>{l.city}</span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>
                      0{i + 1} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Each office */}
      {d.locations.map((l, i) => (
        <section key={l.slug} id={l.slug} style={{ padding: '120px 0', borderBottom: '1px solid var(--line)', background: i % 2 === 1 ? 'var(--ivory)' : 'var(--paper)' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>
              {/* Map placeholder */}
              <div style={{ aspectRatio: '4/5', background: 'var(--ink)', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `
                    linear-gradient(180deg, rgba(14,42,61,0.5) 0%, rgba(14,42,61,0.9) 100%),
                    repeating-linear-gradient(90deg, rgba(246,241,232,0.08) 0 1px, transparent 1px 80px),
                    repeating-linear-gradient(0deg, rgba(246,241,232,0.08) 0 1px, transparent 1px 80px),
                    linear-gradient(155deg, #0E2A3D 0%, #1F5F7D 100%)
                  `,
                }} />
                {/* Pin */}
                <div style={{ position: 'absolute', top: '45%', left: '48%', width: 18, height: 18, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 6px rgba(176,138,74,0.35), 0 0 0 18px rgba(176,138,74,0.15)' }} />
                <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.85)' }}>
                  Fig. {String(i + 1).padStart(2,'0')} / {l.mapCoords}
                </div>
                <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ivory)', fontStyle: 'italic' }}>
                  {l.address}, {l.suburb}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
                  0{i + 1} · {l.role}
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(35px, 4.4vw, 64px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
                  {l.city}
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--graphite)', margin: '28px 0 40px', maxWidth: 600, textWrap: 'pretty' }}>
                  {l.lead}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginBottom: 40 }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 10 }}>Address</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)', lineHeight: 1.35 }}>
                      {l.address}<br />{l.suburb}
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 10 }}>Phone</div>
                    <a href={`tel:${l.phoneRaw}`} style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)', letterSpacing: '0.02em' }}>
                      {l.phone}
                    </a>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 10 }}>Hours</div>
                    <div style={{ fontSize: 15, color: 'var(--graphite)', lineHeight: 1.5 }}>
                      {l.hours}<br /><span style={{ color: 'var(--accent)' }}>{l.after}</span>
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 10 }}>Email</div>
                    <a href={`mailto:${d.email}`} style={{ fontSize: 15, color: 'var(--ink)', borderBottom: '1px solid var(--line)' }}>
                      {d.email}
                    </a>
                  </div>
                </div>

                <div className="eyebrow" style={{ marginBottom: 14 }}>Courts of regular appearance</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
                  {l.courts.map((c, j) => (
                    <span key={j} style={{
                      padding: '8px 14px', border: '1px solid var(--line)',
                      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em',
                      textTransform: 'uppercase', color: 'var(--graphite)',
                    }}>{c}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href="contact.html" className="btn btn--primary">Book consultation at {l.city} <span className="arrow">→</span></a>
                  <a href={`tel:${l.phoneRaw}`} className="btn btn--ghost">Call {l.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTABand />
      <Footer />
    </div>
  );
}

Object.assign(window, { LocationsPage });
