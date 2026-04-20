/* global React, Nav, Footer, Breadcrumb, CTABand */
const { useState: useStateService } = React;

function ServicePage({ slug = 'drug-offences' }) {
  const d = window.BAMBERRY.data;
  const s = d.services[slug] || d.services['drug-offences'];

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 90, borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Breadcrumb items={[
            { label: 'Bamberry', href: 'index.html' },
            { label: 'Practice' },
            { label: s.parent, href: 'criminal-law.html' },
            { label: s.name },
          ]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.9fr', gap: 80, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" />{s.parent} / {s.name}</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 5.2vw, 86px)', lineHeight: 0.96, letterSpacing: '-0.025em', margin: 0 }}>
                <em style={{ color: 'var(--teal)' }}>{s.heroA}</em>{s.heroB ? <><br />{s.heroB}</> : null}
              </h1>
              <hr className="hairline" style={{ margin: '40px 0 28px', width: 120, background: 'var(--accent)', height: 2 }} />
              <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 620, margin: 0 }}>
                {s.tagline}
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
                <a href="contact.html" className="btn btn--primary">Book free consultation <span className="arrow">→</span></a>
                <a href={`tel:${d.phoneRaw}`} className="btn btn--ghost">Call 24/7 · {d.phone}</a>
              </div>
            </div>
            <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--ink)', position: 'relative', maxWidth: 420, justifySelf: 'end', width: '100%' }}>
              <img
                src={s.heroImg}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.75) contrast(1.05) brightness(0.82)', opacity: 0.92 }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em', color: 'rgba(246,241,232,0.85)', textTransform: 'uppercase' }}>
                Fig. {s.fig} / {s.name}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + sticky sidebar */}
      <section style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: 80, alignItems: 'start' }}>
            <aside style={{ position: 'sticky', top: 120 }}>
              <div className="eyebrow" style={{ marginBottom: 22 }}><span className="dot" />On this page</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--line)' }}>
                {[
                  { id: 'overview', label: '01 · Overview' },
                  { id: 'charges', label: '02 · Charges we handle' },
                  { id: 'approach', label: '03 · Our approach' },
                  { id: 'faq', label: '04 · Common questions' },
                ].map(x => (
                  <li key={x.id} style={{ borderBottom: '1px solid var(--line)' }}>
                    <a href={`#${x.id}`} style={{ display: 'block', padding: '14px 0', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--graphite)' }}>
                      {x.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 40, padding: 24, background: 'var(--ivory)', border: '1px solid var(--line)' }}>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Urgent</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 14 }}>
                  Being interviewed by police?
                </div>
                <div style={{ fontSize: 14, color: 'var(--graphite)', lineHeight: 1.55, marginBottom: 18 }}>
                  Before you say anything, call us. The first interview is almost always the most consequential.
                </div>
                <a href={`tel:${d.phoneRaw}`} style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: 2 }}>
                  Call {d.phone} →
                </a>
              </div>
            </aside>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
              {/* Overview */}
              <div id="overview">
                <div className="eyebrow" style={{ marginBottom: 24 }}>01 · Overview</div>
                <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.3, color: 'var(--ink)', letterSpacing: '-0.005em', margin: 0, textWrap: 'pretty' }}>
                  {s.overview}
                </p>
              </div>

              {/* Charges */}
              <div id="charges">
                <div className="eyebrow" style={{ marginBottom: 24 }}>02 · Charges we handle</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(29px, 3.2vw, 45px)', margin: '0 0 40px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  Charges <em>we handle.</em>
                </h2>
                <div style={{ borderTop: '1px solid var(--ink)' }}>
                  {s.charges.map((c, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'center', gap: 24, padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--graphite-2)' }}>0{i + 1}</div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.005em' }}>{c.label}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>{c.court}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div id="approach">
                <div className="eyebrow" style={{ marginBottom: 24 }}>03 · Our approach</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(29px, 3.2vw, 45px)', margin: '0 0 40px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  How we <em>run</em> these matters.
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
                  {s.approach.map((a, i) => (
                    <div key={i} style={{ padding: '32px 24px 32px 0', borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none', borderBottom: '1px solid var(--line)', paddingLeft: i % 2 === 1 ? 24 : 0 }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 32, fontStyle: 'italic', color: 'var(--accent)', marginBottom: 14, lineHeight: 1 }}>{a.n}</div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', marginBottom: 12, letterSpacing: '-0.005em' }}>{a.k}</div>
                      <div style={{ fontSize: 14, color: 'var(--graphite)', lineHeight: 1.6 }}>{a.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div id="faq">
                <div className="eyebrow" style={{ marginBottom: 24 }}>04 · Common questions</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(29px, 3.2vw, 45px)', margin: '0 0 40px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  Questions <em>we hear often.</em>
                </h2>
                <FAQList items={s.faqs} />
              </div>

              {/* Related */}
              <div>
                <div className="eyebrow" style={{ marginBottom: 24 }}>Related practice areas</div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {s.related.map((r, i) => {
                    const slugMap = { 'Sexual Offences': 'sexual-offences.html', 'Violence': 'violence.html', 'Murder & Manslaughter': 'murder-manslaughter.html', 'Drug Offences': 'drug-offences.html', 'Fraud & Dishonesty': 'fraud-dishonesty.html', 'Youth Justice': 'youth-justice.html', 'Bail Applications': 'bail-applications.html', 'Appeals': 'appeals.html', 'Corporate Law': 'criminal-law.html' };
                    return (
                    <a key={i} href={slugMap[r] || 'criminal-law.html'} style={{
                      padding: '14px 22px', border: '1px solid var(--ink)', fontFamily: 'var(--mono)',
                      fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)',
                      transition: 'all .2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--ivory)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
                    >{r} →</a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}

function FAQList({ items }) {
  const [open, setOpen] = useStateService(0);
  return (
    <div style={{ borderTop: '1px solid var(--ink)' }}>
      {items.map((f, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{
            width: '100%', padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            textAlign: 'left', background: 'transparent', border: 0, cursor: 'pointer',
          }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2vw, 28px)', color: 'var(--ink)', letterSpacing: '-0.005em', lineHeight: 1.25, paddingRight: 40 }}>
              {f.q}
            </span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 32, fontStyle: 'italic', color: 'var(--accent)', transition: 'transform .3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
          </button>
          <div style={{
            maxHeight: open === i ? 400 : 0, overflow: 'hidden', transition: 'max-height .4s ease',
          }}>
            <p style={{ padding: '0 40px 32px 0', fontSize: 16, lineHeight: 1.65, color: 'var(--graphite)', margin: 0, textWrap: 'pretty', maxWidth: 720 }}>
              {f.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { ServicePage });
