/* global React, Nav, Footer, PageHero, Breadcrumb, CTABand */
const { useState: useStateAbout } = React;

function AboutPage() {
  const d = window.BAMBERRY.data;
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 90, borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Bamberry', href: 'index.html' }, { label: 'About' }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" />About the firm</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 5vw, 77px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
                A deliberate<br />criminal law practice,<br /><em style={{ color: 'var(--teal)' }}>by design.</em>
              </h1>
              <hr className="hairline" style={{ margin: '40px 0 28px', width: 120, background: 'var(--accent)', height: 2 }} />
              <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 620, margin: 0 }}>
                Bamberry Lawyers was founded in 2016 on a simple idea: criminal and traffic law is specialised work, and it should be practised that way. We do not accept matters outside that scope. Every lawyer in the firm works exclusively in this field.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              {[
                { k: 'Founded', v: '2016' },
                { k: 'Focus', v: 'Criminal & traffic law only' },
                { k: 'Directors', v: '2 Accredited Specialists' },
                { k: 'Offices', v: 'Gold Coast · Brisbane' },
              ].map((x, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 10 }}>{x.k}</div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', letterSpacing: '-0.005em' }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: '140px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div>
            <div className="eyebrow"><span className="dot" />01 / Philosophy</div>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.4vw, 34px)', lineHeight: 1.25, letterSpacing: '-0.01em', margin: 0, color: 'var(--ink)', textWrap: 'pretty' }}>
              Criminal cases are decided in preparation, long before anyone stands up in court. <span style={{ color: 'var(--graphite-2)' }}>The quality of the early work — the evidence audit, the legal research, the strategic choices — determines what\u2019s possible at the end. We build our practice around that idea.</span>
            </p>
            <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
              {[
                { k: 'Specialised', v: 'Criminal and traffic law only. Both directors are Queensland Law Society Accredited Specialists.' },
                { k: 'Selective', v: 'We take on the cases we are equipped to handle, and decline the ones we aren\u2019t. Clients get our attention, not our overflow.' },
                { k: 'Direct', v: 'You speak to the lawyer on your matter. Not a paralegal, not an intake line. The person doing the work.' },
              ].map((x, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--ink)', paddingTop: 20 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--ink)', marginBottom: 12, letterSpacing: '-0.005em' }}>{x.k}</div>
                  <div style={{ fontSize: 15, color: 'var(--graphite)', lineHeight: 1.6 }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section style={{ padding: '120px 0', background: 'var(--ivory)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />02 / The Directors</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(35px, 4vw, 58px)', margin: '0 0 80px', letterSpacing: '-0.02em' }}>
            Two <em>Accredited Specialists.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
            {d.partners.map((p, i) => (
              <article key={p.id} id={p.id} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '0.75fr 1.85fr' : '1.85fr 0.75fr',
                gap: 60, alignItems: 'start',
              }}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--ivory-deep)', order: i % 2 === 0 ? 0 : 1, maxWidth: 300 }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.12) contrast(1.02)' }} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 14 }}>
                    0{i + 1} · {p.role}
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(35px, 3.6vw, 54px)', margin: '0 0 14px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 0.98 }}>
                    {p.name}
                  </h3>
                  <div style={{ display: 'inline-block', fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: 2, marginBottom: 28 }}>
                    {p.credential}
                  </div>
                  <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--graphite)', margin: '0 0 22px', textWrap: 'pretty' }}>
                    {p.bio}
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--graphite)', margin: '0 0 28px', textWrap: 'pretty' }}>
                    {p.id === 'joe'
                      ? 'Joe has appeared as counsel in complex trials, committal proceedings, sentence appeals and Commissions of Inquiry. He practises across Queensland and instructs Senior Counsel in matters before the Queensland Court of Appeal and the High Court of Australia.'
                      : 'Sam has acted in contested committals, jury trials and appellate work across State and Commonwealth jurisdictions. He was the 2018 Highest Achiever in the QLS Accredited Specialisation program and has published on evidence law and criminal procedure.'}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 18 }}>
                    {[
                      { k: 'Admitted', v: p.id === 'joe' ? '2011 · Queensland' : '2013 · Queensland' },
                      { k: 'Specialist', v: '2016' },
                      { k: 'Appearances', v: 'Magistrates · District · Supreme' },
                      { k: 'Appellate', v: 'QCA · High Court' },
                    ].map((x, j) => (
                      <div key={j} style={{ borderTop: '1px solid var(--line)', paddingTop: 12 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 6 }}>{x.k}</div>
                        <div style={{ fontSize: 14, color: 'var(--ink)' }}>{x.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />03 / Recognition</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(32px, 3.6vw, 51px)', margin: '0 0 60px', letterSpacing: '-0.02em' }}>
            What <em>independent</em> bodies say.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink)', borderBottom: '1px solid var(--ink)' }}>
            {[
              { eye: 'Doyle\u2019s Guide', t: 'Leading Criminal Defence & Traffic Lawyers', s: 'Queensland · 2024 · 2025 · 2026' },
              { eye: 'QLS', t: 'Accredited Specialist — Criminal Law', s: 'Both directors · active since 2016' },
              { eye: 'Courts of practice', t: 'Magistrates · District · Supreme · Appellate', s: 'Including High Court of Australia' },
            ].map((x, i) => (
              <div key={i} style={{ padding: '40px 32px', borderLeft: i > 0 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>{x.eye}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 14, letterSpacing: '-0.005em' }}>{x.t}</div>
                <div style={{ fontSize: 13, color: 'var(--graphite-2)' }}>{x.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}

Object.assign(window, { AboutPage });
