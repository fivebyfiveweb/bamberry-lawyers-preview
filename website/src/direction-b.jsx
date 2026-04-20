/* global React, Nav, Footer, Wordmark */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

// ============ DIRECTION B — "On the Record" ============
// Dark ink, full-bleed abstract, huge typography, asymmetric magazine grid.

function DirectionB({ accent }) {
  return (
    <div style={{ background: 'var(--ink-deep)', color: 'var(--ivory)' }}>
      <Nav variant="dark" />
      <HeroB />
      <TickerB />
      <IntroB />
      <PracticeB />
      <PartnersB />
      <NewsB />
      <CTAB />
      <Footer dark />
    </div>
  );
}

function HeroB() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', paddingTop: 120, overflow: 'hidden' }}>
      {/* Abstract background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=2000&q=85"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.85) contrast(1.1) brightness(0.38)' }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* gradient overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,26,39,0.6) 0%, rgba(8,26,39,0.55) 50%, var(--ink-deep) 100%)' }} />
        {/* grain */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.5, mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
        }} />
      </div>

      {/* Content */}
      <div className="wrap" style={{ position: 'relative', zIndex: 2, minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 60 }}>
        {/* Top row — small caps index */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.55)', marginTop: 28 }}>
          <span>Volume I · Criminal Law</span>
          <span>Queensland · Est. 2016</span>
          <span>Issue · April 2026</span>
        </div>

        {/* Hero display */}
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginBottom: 28 }}>
            <span style={{ height: 1, width: 60, background: 'var(--accent)' }} />
            <span className="eyebrow" style={{ color: 'rgba(246,241,232,0.7)' }}>
              Accredited Specialists · Criminal Defence
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(58px, 9.6vw, 166px)', lineHeight: 0.88,
            letterSpacing: '-0.035em', margin: 0,
            color: 'var(--ivory)',
            textWrap: 'balance',
          }}>
            Serious<br />
            charges.<br />
            <em style={{ fontWeight: 400, color: 'var(--accent)' }}>Serious</em> <em style={{ fontWeight: 400 }}>representation.</em>
          </h1>

          {/* Description + CTAs bottom row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, alignItems: 'end', marginTop: 80 }}>
            <div style={{ gridColumn: '1 / span 2' }}>
              <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 560, color: 'rgba(246,241,232,0.82)', margin: 0 }}>
                Led by two Accredited Specialists in Criminal Law, Bamberry Lawyers acts exclusively in criminal and traffic matters — cases that are serious, complex, and high-pressure.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
                <a href="#contact" className="btn btn--accent">Book free consultation <span className="arrow">→</span></a>
                <a href={`tel:${window.BAMBERRY.data.phoneRaw}`} className="btn" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'var(--ivory)' }}>
                  Call 24/7 · {window.BAMBERRY.data.phone}
                </a>
              </div>
            </div>
            {/* Side card */}
            <div style={{
              border: '1px solid rgba(255,255,255,0.18)',
              padding: 24,
              background: 'rgba(14,42,61,0.5)',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                Urgent · after hours
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2, color: 'var(--ivory)', marginBottom: 6 }}>
                Police station attendance.
              </div>
              <div style={{ fontSize: 13, color: 'rgba(246,241,232,0.65)', lineHeight: 1.5 }}>
                Dial the office line — it diverts straight to the lawyer on call.
              </div>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.12)', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--ivory)' }}>
                {window.BAMBERRY.data.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerB() {
  return (
    <div style={{
      borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)',
      overflow: 'hidden', background: 'var(--ink-deep)',
    }}>
      <div style={{ display: 'flex', gap: 80, padding: '22px 0', whiteSpace: 'nowrap', animation: 'marquee 40s linear infinite' }}>
        {[...Array(2)].flatMap((_, r) => [
          'Magistrates Court', 'District Court', 'Supreme Court of Queensland',
          'High Court of Australia', 'Crime & Corruption Commission',
          'Doyle\u2019s Guide · Leading Criminal Defence', 'QLS Accredited Specialists',
        ].map((t, i) => (
          <span key={`${r}-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 80, fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', color: 'rgba(246,241,232,0.55)' }}>
            {t}
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)' }} />
          </span>
        )))}
      </div>
    </div>
  );
}

function IntroB() {
  return (
    <section style={{ padding: '160px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: 60 }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.55)', marginBottom: 20 }}>
              <span className="dot" />01 / Approach
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 120, lineHeight: 1, color: 'var(--accent)', fontStyle: 'italic' }}>
              §
            </div>
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.6vw, 38px)',
              lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0,
              color: 'var(--ivory)', textWrap: 'pretty',
            }}>
              From the outset, we identify the real issue, give clear advice,<br />
              and take control of the case. <span style={{ color: 'rgba(246,241,232,0.48)' }}>This is not about overpromising — it is about doing the work properly.</span>
            </p>
            <hr className="hairline hairline--dark" style={{ margin: '60px 0' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
              {[
                { n: '01', k: 'Early assessment', v: 'Identify the real issue and the risks — before positions harden.' },
                { n: '02', k: 'Clear advice', v: 'No confusion about where you stand or what comes next.' },
                { n: '03', k: 'Structured strategy', v: 'Each step taken for a reason, and tested before it is taken.' },
                { n: '04', k: 'Disciplined advocacy', v: 'Focused on outcome, not noise — inside and outside the courtroom.' },
              ].map((x, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 12 }}>
                    <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--accent)' }}>{x.n}</span>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--ivory)' }}>{x.k}</span>
                  </div>
                  <div style={{ fontSize: 15, color: 'rgba(246,241,232,0.6)', lineHeight: 1.6, paddingLeft: 34 }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeB() {
  const [active, setActive] = useStateB(0);
  const areas = window.BAMBERRY.data.practiceAreas;
  const a = areas[active];
  return (
    <section id="practice" style={{ padding: '140px 0', background: '#0B2232', borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 60, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.55)', marginBottom: 20 }}><span className="dot" />02 / Practice</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 4.8vw, 77px)', lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: 'var(--ivory)' }}>
              What we <em style={{ color: 'var(--accent)' }}>defend.</em>
            </h2>
          </div>
          <div style={{ maxWidth: 360, color: 'rgba(246,241,232,0.65)', fontSize: 15, lineHeight: 1.6 }}>
            Exclusively criminal and traffic law. We take on matters we are equipped to handle — and do not accept work outside that scope.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60, alignItems: 'start' }}>
          {/* List */}
          <div style={{ borderTop: '1px solid var(--line-dark)' }}>
            {areas.map((area, i) => (
              <button key={i} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '24px 0',
                  display: 'grid', gridTemplateColumns: '50px 1fr auto', alignItems: 'center', gap: 20,
                  borderBottom: '1px solid var(--line-dark)',
                  color: active === i ? 'var(--ivory)' : 'rgba(246,241,232,0.55)',
                  transition: 'all .3s',
                  cursor: 'pointer',
                }}>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 18, color: active === i ? 'var(--accent)' : 'rgba(246,241,232,0.4)' }}>{area.n}</span>
                <span style={{
                  fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.6vw, 36px)',
                  letterSpacing: '-0.01em',
                  transform: active === i ? 'translateX(8px)' : 'translateX(0)',
                  transition: 'transform .3s',
                }}>
                  {area.name}
                </span>
                <span style={{ fontSize: 20, color: active === i ? 'var(--accent)' : 'rgba(246,241,232,0.3)' }}>→</span>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div style={{
            position: 'sticky', top: 120,
            border: '1px solid var(--line-dark)',
            padding: 40,
            background: 'var(--ink-deep)',
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: 14 }}>
              Practice · {a.n}
            </div>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', margin: '0 0 20px', color: 'var(--ivory)' }}>
              {a.name}
            </h3>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(246,241,232,0.75)', margin: '0 0 30px' }}>{a.sub}.</p>
            {a.children && (
              <div style={{ borderTop: '1px solid var(--line-dark)', paddingTop: 24, marginBottom: 30 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.4)', marginBottom: 16 }}>
                  Sub-practice areas
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {a.children.map((c, i) => (
                    <span key={i} style={{
                      padding: '8px 14px',
                      border: '1px solid var(--line-dark)',
                      fontSize: 12,
                      fontFamily: 'var(--mono)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(246,241,232,0.75)',
                    }}>{c}</span>
                  ))}
                </div>
              </div>
            )}
            <a href="#" className="link-underline" style={{ color: 'var(--accent)' }}>View practice details →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersB() {
  const ps = window.BAMBERRY.data.partners;
  return (
    <section id="about" style={{ padding: '160px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, marginBottom: 90 }}>
          <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.55)' }}>
            <span className="dot" />03 / Counsel
          </div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(38px, 4.8vw, 77px)', lineHeight: 0.95, letterSpacing: '-0.025em',
            margin: 0, color: 'var(--ivory)', textWrap: 'pretty',
          }}>
            Two <em style={{ color: 'var(--accent)' }}>Accredited Specialists.</em><br />
            One standard across <em>every brief.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
          {ps.map((p, i) => (
            <article key={p.id} id={p.id} style={{ background: i === 0 ? '#0B2232' : '#0A1E2D', padding: 0, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.55) contrast(1.05) brightness(0.92)' }} />
                {/* gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,26,39,0) 40%, rgba(8,26,39,0.95) 100%)' }} />
                {/* Name overlay */}
                <div style={{ position: 'absolute', left: 32, right: 32, bottom: 28 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    0{i + 1} · {p.role}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 56, lineHeight: 1, fontWeight: 400, color: 'var(--ivory)', letterSpacing: '-0.02em' }}>
                    {p.name.split(' ')[0]}<br /><em>{p.name.split(' ')[1]}</em>
                  </div>
                </div>
              </div>
              <div style={{ padding: 32 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--line-dark)' }}>
                  {p.credential}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(246,241,232,0.78)', margin: '0 0 24px', textWrap: 'pretty' }}>
                  {p.bio}
                </p>
                <a className="link-underline" href="#" style={{ color: 'var(--ivory)' }}>Read full profile →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsB() {
  const [cat, setCat] = useStateB('All');
  const cats = ['All', 'Criminal Law', 'Traffic Law', 'Corporate'];
  const arts = window.BAMBERRY.data.articles;
  const filtered = cat === 'All' ? arts : arts.filter(a => a.cat === cat);
  return (
    <section id="news" style={{ padding: '140px 0', background: '#0B2232', borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 60, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.55)', marginBottom: 20 }}><span className="dot" />04 / Journal</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 4.8vw, 77px)', lineHeight: 0.95, letterSpacing: '-0.025em', margin: 0, color: 'var(--ivory)' }}>
              In <em style={{ color: 'var(--accent)' }}>the record.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '8px 16px',
                border: cat === c ? '1px solid var(--accent)' : '1px solid var(--line-dark)',
                background: cat === c ? 'var(--accent)' : 'transparent',
                color: cat === c ? '#fff' : 'rgba(246,241,232,0.7)',
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all .2s',
              }}>{c}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 30 }}>
          {filtered[0] && (
            <a href="#" style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', display: 'block' }}>
              <img src={filtered[0].img} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.3)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,26,39,0.1) 30%, rgba(8,26,39,0.92) 100%)' }} />
              <div style={{ position: 'absolute', left: 30, right: 30, bottom: 30 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 14 }}>
                  Featured · {filtered[0].cat}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, lineHeight: 1.1, color: 'var(--ivory)', letterSpacing: '-0.015em', margin: '0 0 14px' }}>
                  {filtered[0].title}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'rgba(246,241,232,0.6)', textTransform: 'uppercase' }}>
                  {filtered[0].date} · {filtered[0].read}
                </div>
              </div>
            </a>
          )}
          {filtered.slice(1, 3).map((a, i) => (
            <a key={i} href="#" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', marginBottom: 18 }}>
                <img src={a.img} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.3) brightness(0.85)' }} />
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
                {a.cat}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, lineHeight: 1.2, color: 'var(--ivory)', letterSpacing: '-0.01em', margin: '0 0 12px' }}>
                {a.title}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', color: 'rgba(246,241,232,0.5)', textTransform: 'uppercase' }}>
                {a.date} · {a.read}
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <a href="#" className="btn" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'var(--ivory)' }}>
            Browse the full journal <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CTAB() {
  return (
    <section id="contact" style={{ padding: '160px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Giant background word */}
      <div aria-hidden style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--serif)', fontSize: 'clamp(128px, 19.2vw, 368px)', fontStyle: 'italic',
        fontWeight: 400, color: 'rgba(176,138,74,0.07)', lineHeight: 1, letterSpacing: '-0.04em',
        pointerEvents: 'none', whiteSpace: 'nowrap',
      }}>
        counsel.
      </div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.55)', marginBottom: 24, justifyContent: 'center' }}>
            <span className="dot" />05 / Speak with us
          </div>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(45px, 6.4vw, 109px)', lineHeight: 0.92, letterSpacing: '-0.03em',
            margin: '0 auto', maxWidth: 1100, color: 'var(--ivory)',
          }}>
            If you have been <em style={{ color: 'var(--accent)' }}>charged</em>,<br />
            the early decisions matter.
          </h2>
          <div style={{ display: 'flex', gap: 14, marginTop: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#" className="btn btn--accent">Book free consultation <span className="arrow">→</span></a>
            <a href={`tel:${window.BAMBERRY.data.phoneRaw}`} className="btn" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'var(--ivory)' }}>
              Call 24/7 · {window.BAMBERRY.data.phone}
            </a>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4,
          border: '1px solid var(--line-dark)',
        }}>
          <ContactTile title="Gold Coast" lines={[window.BAMBERRY.data.offices[0].address, window.BAMBERRY.data.offices[0].suburb, window.BAMBERRY.data.phone]} />
          <ContactTile title="Brisbane" lines={[window.BAMBERRY.data.offices[1].address, window.BAMBERRY.data.offices[1].suburb, window.BAMBERRY.data.phoneBrisbane]} />
          <ContactTile title="24/7 Emergencies" lines={['Police station attendance.', 'Urgent criminal matters.', 'Dial the office — it diverts.']} accent />
        </div>
      </div>
    </section>
  );
}

function ContactTile({ title, lines, accent }) {
  return (
    <div style={{
      padding: 36,
      background: accent ? 'rgba(176,138,74,0.08)' : '#0B2232',
      borderRight: '1px solid var(--line-dark)',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: accent ? 'var(--accent)' : 'rgba(246,241,232,0.55)', marginBottom: 18 }}>
        {accent ? '✻ ' : '◦ '}{title}
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1.25, color: 'var(--ivory)', margin: '0 0 18px', minHeight: 70 }}>
        {lines[0]}
      </div>
      <div style={{ fontSize: 14, color: 'rgba(246,241,232,0.7)', lineHeight: 1.6 }}>
        {lines.slice(1).map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}

Object.assign(window, { DirectionB });
