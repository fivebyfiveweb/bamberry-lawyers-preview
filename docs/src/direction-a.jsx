/* global React, Nav, Footer, Wordmark */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

// ============ DIRECTION A — "The Quiet Room" ============
// Ivory, editorial, restrained. Thin hairlines, small caps, tabular practice index.

function DirectionA({ accent }) {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />
      <HeroA />
      <MarqueeA />
      <IntroA />
      <PracticeA />
      <PartnersA />
      <WinsA />
      <NewsA />
      <CTAA />
      <Footer />
    </div>
  );
}

function HeroA() {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 100, position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 80, alignItems: 'end' }}>
          <div>
            <h1 className="eyebrow" style={{ marginBottom: 40, margin: '0 0 40px' }}>
              <span className="dot" />Criminal & Traffic Law · Queensland
            </h1>
            <div style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(35px, 4.5vw, 67px)', lineHeight: 1,
              letterSpacing: '-0.02em', margin: 0,
              color: 'var(--ink)',
            }}>
              When the stakes<br />are high,<br />
              <em style={{ fontWeight: 400, color: 'var(--teal)' }}>experience</em>
              <span style={{ display: 'inline-block', width: 28 }} />
              <em style={{ fontWeight: 400, fontStyle: 'italic' }}>matters.</em>
            </div>
            <hr className="hairline" style={{ margin: '40px 0 28px', width: 120, background: 'var(--accent)', height: 2 }} />
            <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 560, color: 'var(--graphite)', margin: 0 }}>
              Led by Joe Wicking and Sam Jackson, two of the Gold Coast's most accredited criminal lawyers, each a Queensland Law Society Accredited Specialist in Criminal Law. We act exclusively in criminal and traffic matters across Queensland, in cases that are serious, complex, and high-pressure.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn--primary">
                Book free consultation <span className="arrow">→</span>
              </a>
              <a href={`tel:${window.BAMBERRY.data.phoneRaw}`} className="btn btn--ghost">
                Call 24/7 · {window.BAMBERRY.data.phone}
              </a>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <HeroAbstractA />
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              background: 'rgba(251,248,242,0.94)', backdropFilter: 'blur(10px)',
              padding: '18px 22px', borderTop: '2px solid var(--accent)',
            }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Now</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.3, color: 'var(--ink)' }}>
                Free 20-minute consultations available this week.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* index/caption bottom left */}
      <div style={{ position: 'absolute', bottom: 40, left: 40, display: 'flex', gap: 14, alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--graphite-2)' }}>
          EST. 2016
        </span>
        <span style={{ height: 1, width: 40, background: 'var(--line)' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em', color: 'var(--graphite-2)' }}>
          BRISBANE · GOLD COAST
        </span>
      </div>
    </section>
  );
}

function HeroAbstractA() {
  // Abstract: architectural columns photo with monochrome treatment
  return (
    <div style={{
      position: 'relative', aspectRatio: '4/5', overflow: 'hidden',
      background: 'var(--ink)',
    }}>
      <img
        src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1000&q=85"
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.8) contrast(1.1) brightness(0.88)', opacity: 0.9 }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <div style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'linear-gradient(155deg, #0E2A3D 0%, #1F5F7D 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(14,42,61,0) 30%, rgba(14,42,61,0.55) 100%)',
      }} />
      <div style={{
        position: 'absolute', top: 20, left: 20,
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.3em',
        color: 'rgba(246,241,232,0.85)', textTransform: 'uppercase',
      }}>
        Fig. 01 / Lady of Justice
      </div>
    </div>
  );
}

function MarqueeA() {
  const items = [
    'Doyle\u2019s Guide', 'Leading Criminal Defence QLD', 'Accredited Specialists',
    'Queensland Law Society', 'High Court · District Court · Magistrates', 'CCC Investigative Hearings',
    'Doyle\u2019s Guide', 'Leading Criminal Defence QLD', 'Accredited Specialists',
  ];
  return (
    <div style={{
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      padding: '26px 0', overflow: 'hidden',
      background: 'var(--ivory)',
    }}>
      <div style={{
        display: 'flex', gap: 60,
        animation: 'marquee 35s linear infinite',
        whiteSpace: 'nowrap',
      }}>
        {[...items, ...items].map((it, i) => (
          <span key={i} style={{
            fontFamily: 'var(--serif)', fontSize: 20, fontStyle: 'italic',
            color: 'var(--graphite)', display: 'flex', alignItems: 'center', gap: 60,
          }}>
            {it}
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function IntroA() {
  return (
    <section style={{ padding: '140px 0' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
        <div>
          <div className="eyebrow"><span className="dot" />01 / The Firm</div>
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 2.6vw, 37px)',
            lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0,
            color: 'var(--ink)',
            textWrap: 'pretty',
          }}>
            Criminal defence is not general legal work. It requires judgment, preparation, and the ability to make the right decisions under pressure. <span style={{ color: 'var(--graphite-2)' }}>We take on the cases we are equipped to handle, and do not accept work outside our scope. That is deliberate.</span>
          </p>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { k: 'Early assessment', v: 'Identify the real issue and the risks.' },
              { k: 'Clear advice',     v: 'No confusion about where you stand.' },
              { k: 'Structured strategy', v: 'Each step taken for a reason.' },
              { k: 'Disciplined advocacy', v: 'Focused on outcome, not noise.' },
            ].map((x, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--line)', paddingTop: 18 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2, color: 'var(--ink)', marginBottom: 8 }}>{x.k}</div>
                <div style={{ fontSize: 14, color: 'var(--graphite-2)', lineHeight: 1.5 }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeA() {
  const [hover, setHover] = useStateA(null);
  const areas = window.BAMBERRY.data.practiceAreas;
  return (
    <section id="practice" style={{ background: 'var(--ivory)', padding: '140px 0', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 80, flexWrap: 'wrap', gap: 32 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />02 / Practice</div>
            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(35px, 4vw, 58px)', lineHeight: 1, letterSpacing: '-0.02em',
              margin: 0, color: 'var(--ink)',
            }}>
              Areas of <em>practice</em>
            </h2>
          </div>
          <div style={{ maxWidth: 380, color: 'var(--graphite)', fontSize: 16, lineHeight: 1.6 }}>
            Bamberry Lawyers practises exclusively in criminal and traffic law — appearing in the Magistrates, District and Supreme Courts throughout Queensland.
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {areas.map((a, i) => (
            <div key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 1.2fr auto',
                alignItems: 'center',
                gap: 40,
                padding: '34px 0',
                borderBottom: '1px solid var(--line)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all .3s ease',
                background: hover === i ? 'rgba(176,138,74,0.04)' : 'transparent',
              }}
            >
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', color: 'var(--accent)' }}>{a.n}</div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.4vw, 32px)',
                letterSpacing: '-0.01em', color: 'var(--ink)',
                transform: hover === i ? 'translateX(12px)' : 'translateX(0)',
                transition: 'transform .3s ease',
              }}>
                {a.name}
              </div>
              <div style={{ color: 'var(--graphite-2)', fontSize: 15, lineHeight: 1.5 }}>
                {a.sub}
                {a.children && (
                  <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: '4px 10px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
                    {a.children.map((c, j) => (
                      <span key={j}>{c}{j < a.children.length - 1 ? ' ·' : ''}</span>
                    ))}
                  </div>
                )}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 24, fontStyle: 'italic',
                color: hover === i ? 'var(--accent)' : 'var(--graphite-2)',
                transform: hover === i ? 'translateX(6px)' : 'translateX(0)',
                transition: 'all .3s ease',
              }}>
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersA() {
  const partners = window.BAMBERRY.data.partners;
  return (
    <section id="about" style={{ padding: '140px 0' }}>
      <div className="wrap">
        <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />03 / The Directors</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(35px, 4vw, 58px)', margin: '0 0 60px', letterSpacing: '-0.02em' }}>
          Two <em>Accredited Specialists</em>.<br />One standard.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          {partners.map((p, i) => (
            <article key={p.id} id={p.id} style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 32 }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', background: 'var(--ivory-deep)' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.15) contrast(1.02)' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 10 }}>
                  0{i + 1} · {p.role}
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 38, margin: '0 0 10px', fontWeight: 400, letterSpacing: '-0.01em' }}>
                  {p.name}
                </h3>
                <div style={{ display: 'inline-block', fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', borderBottom: '1px solid var(--accent)', paddingBottom: 2, marginBottom: 20 }}>
                  {p.credential}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--graphite)', margin: '0 0 24px', textWrap: 'pretty' }}>
                  {p.bio}
                </p>
                <a className="link-underline" href="#">Read full profile →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WinsA() {
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--ivory)', padding: '90px 0' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {window.BAMBERRY.data.wins.map((w, i) => (
            <div key={i} style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)', paddingLeft: i === 0 ? 0 : 40 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 72, fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--accent)' }}>{w.metric}</div>
              <div style={{ marginTop: 14, fontSize: 14, color: 'rgba(246,241,232,0.75)', lineHeight: 1.4 }}>{w.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsA() {
  const arts = window.BAMBERRY.data.articles;
  const [cat, setCat] = useStateA('All');
  const cats = ['All', 'Criminal Law', 'Traffic Law', 'Corporate'];
  const filtered = cat === 'All' ? arts : arts.filter(a => a.cat === cat);
  return (
    <section id="news" style={{ padding: '140px 0', background: 'var(--paper)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 60, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />04 / News</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(35px, 4vw, 58px)', margin: 0, letterSpacing: '-0.02em' }}>
              Latest <em>news</em>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '8px 16px',
                border: cat === c ? '1px solid var(--ink)' : '1px solid var(--line)',
                background: cat === c ? 'var(--ink)' : 'transparent',
                color: cat === c ? 'var(--ivory)' : 'var(--graphite)',
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all .2s',
              }}>{c}</button>
            ))}
          </div>
        </div>

        {/* Featured + list */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 50 }}>
          {filtered[0] && <FeatureArticleA a={filtered[0]} />}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {filtered.slice(1, 4).map((a, i) => <RowArticleA key={i} a={a} />)}
          </div>
        </div>
        <div style={{ marginTop: 60, textAlign: 'center' }}>
          <a href="#" className="btn btn--ghost">Read all articles <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function FeatureArticleA({ a }) {
  return (
    <a href="#" style={{ display: 'block', cursor: 'pointer' }}>
      <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'var(--ivory-deep)', marginBottom: 24 }}>
        <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .6s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 14, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
        <span style={{ color: 'var(--accent)' }}>{a.cat}</span>
        <span>·</span>
        <span>{a.date}</span>
        <span>·</span>
        <span>{a.read}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 36, lineHeight: 1.15, letterSpacing: '-0.01em', margin: 0, color: 'var(--ink)' }}>{a.title}</h3>
    </a>
  );
}

function RowArticleA({ a }) {
  return (
    <a href="#" style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 20, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
      <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--ivory-deep)' }}>
        <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>{a.cat}</div>
        <h4 style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: '0 0 10px', lineHeight: 1.2, color: 'var(--ink)', letterSpacing: '-0.005em' }}>{a.title}</h4>
        <div style={{ fontSize: 12, color: 'var(--graphite-2)', fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{a.date} · {a.read}</div>
      </div>
    </a>
  );
}

function CTAA() {
  return (
    <section id="contact" style={{ padding: '140px 0', background: 'var(--ivory)', borderTop: '1px solid var(--line)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />05 / Speak with us</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(35px, 4.4vw, 64px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '0 0 28px' }}>
              The early<br />decisions <em>matter.</em>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--graphite)', maxWidth: 520, margin: '0 0 36px' }}>
              If you are under investigation or have been charged, talk to us today. We will tell you where you stand, what can be done, and what comes next.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#" className="btn btn--primary">Book free consultation <span className="arrow">→</span></a>
              <a href="#" className="btn btn--accent">Call 24/7 · {window.BAMBERRY.data.phone}</a>
            </div>
          </div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot" />Offices</div>
            {window.BAMBERRY.data.offices.map((o, i) => (
              <div key={i} style={{ padding: '20px 0', borderBottom: i < 1 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--ink)' }}>{o.city}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--accent)' }}>
                    {i === 0 ? window.BAMBERRY.data.phone : window.BAMBERRY.data.phoneBrisbane}
                  </div>
                </div>
                <div style={{ marginTop: 8, fontSize: 14, color: 'var(--graphite)', lineHeight: 1.6 }}>
                  {o.address}<br />{o.suburb}
                </div>
              </div>
            ))}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
              <span>Hours · Mon–Fri 8:30–5:00</span>
              <span style={{ color: 'var(--accent)' }}>After hours · 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { DirectionA });
