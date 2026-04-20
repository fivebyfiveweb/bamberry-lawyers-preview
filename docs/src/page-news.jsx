/* global React, Nav, Footer, Breadcrumb, CTABand */
const { useState: useStateNews } = React;

function NewsPage() {
  const d = window.BAMBERRY.data;
  const [cat, setCat] = useStateNews('All');
  const cats = ['All', 'Criminal Law', 'Traffic Law', 'Corporate'];
  const items = cat === 'All' ? d.news : d.news.filter(a => a.cat === cat);
  const [feat, ...rest] = items;

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      <section style={{ paddingTop: 160, paddingBottom: 80, borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Bamberry', href: 'index.html' }, { label: 'News' }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" />News & analysis</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 5vw, 77px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
                Writing on the <em style={{ color: 'var(--teal)' }}>law</em> as<br />we practice it.
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 620, margin: '36px 0 0' }}>
                Notes on criminal and traffic law in Queensland — case commentary, legislative change, and practical guidance for clients and referrers.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end' }}>
              {cats.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{
                  padding: '10px 18px',
                  border: cat === c ? '1px solid var(--ink)' : '1px solid var(--line)',
                  background: cat === c ? 'var(--ink)' : 'transparent',
                  color: cat === c ? 'var(--ivory)' : 'var(--graphite)',
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all .2s',
                }}>{c}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      {feat && (
        <section style={{ padding: '80px 0 40px' }}>
          <div className="wrap">
            <a href="article.html" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center' }}>
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', background: 'var(--ivory-deep)' }}>
                <img src={feat.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot" />Featured · {feat.cat}</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(27px, 2.9vw, 42px)', lineHeight: 1.1, letterSpacing: '-0.015em', margin: 0, color: 'var(--ink)' }}>
                  {feat.title}
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--graphite)', margin: '22px 0 28px', textWrap: 'pretty' }}>
                  {feat.excerpt}
                </p>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
                  <span>{feat.author}</span><span>·</span><span>{feat.date}</span><span>·</span><span>{feat.read}</span>
                </div>
                <div style={{ marginTop: 28 }}>
                  <span className="link-underline">Read article →</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Grid */}
      <section style={{ padding: '40px 0 120px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, borderTop: '1px solid var(--ink)', paddingTop: 48 }}>
            {rest.map((a, i) => (
              <a key={i} href="article.html" style={{ display: 'block', cursor: 'pointer' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--ivory-deep)', marginBottom: 20 }}>
                  <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
                  {a.cat}
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.2, letterSpacing: '-0.005em', margin: '0 0 14px', color: 'var(--ink)' }}>
                  {a.title}
                </h3>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
                  {a.date} · {a.read} · {a.author}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}

function ArticlePage() {
  const d = window.BAMBERRY.data;
  const a = d.news[0];
  const related = d.news.slice(1, 4);

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      <section style={{ paddingTop: 150, paddingBottom: 60 }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <Breadcrumb items={[{ label: 'Bamberry', href: 'index.html' }, { label: 'News', href: 'news.html' }, { label: a.cat }]} />
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />{a.cat}</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(32px, 4vw, 61px)', lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
            {a.title}
          </h1>
          <div style={{ marginTop: 40, display: 'flex', gap: 22, alignItems: 'center', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '20px 0', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>
            <span style={{ color: 'var(--accent)' }}>{a.author}</span>
            <span>·</span>
            <span>{a.date}</span>
            <span>·</span>
            <span>{a.read}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 40px' }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: 'var(--ivory-deep)', marginBottom: 60 }}>
            <img src={a.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.2vw, 30px)', lineHeight: 1.4, letterSpacing: '-0.005em', color: 'var(--ink)', margin: '0 0 40px', textWrap: 'pretty' }}>
              {a.excerpt}
            </p>

            <div style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--graphite)' }}>
              <p>The amendments to the Bail Act that took effect earlier this year have reshaped how show-cause applications are run in Queensland. For practitioners who appear regularly on bail, the changes are significant — and for anyone advising clients in custody on serious charges, they are worth understanding in detail.</p>

              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, letterSpacing: '-0.01em', color: 'var(--ink)', margin: '48px 0 16px' }}>
                The show-cause threshold
              </h2>
              <p>Section 16 of the Act has always placed the onus on a person charged with certain offences to show cause why detention is not justified. The threshold question — what actually satisfies that onus — has been narrowed. Previously, courts were willing to accept a combination of matters: a stable address, strict conditions, a surety, and a plausible timeline to resolution. That package is no longer sufficient on its own.</p>

              <p>What has changed is the weight now given to the strength of the Crown case. The amended section requires the court to consider, as a discrete matter, whether the evidence is such that a reasonable jury could not reach a guilty verdict. That places a different kind of pressure on bail applications in serious matters.</p>

              <blockquote style={{
                margin: '48px -20px', padding: '32px 40px',
                borderLeft: '3px solid var(--accent)',
                background: 'var(--ivory)',
                fontFamily: 'var(--serif)', fontSize: 24, fontStyle: 'italic',
                lineHeight: 1.35, color: 'var(--ink)',
              }}>
                Bail applications have always been about preparation. The 2026 amendments raise the ceiling on how much preparation is required.
              </blockquote>

              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, letterSpacing: '-0.01em', color: 'var(--ink)', margin: '48px 0 16px' }}>
                What applications now need to include
              </h2>
              <p>The consequence for practitioners is practical. A bail application that once ran to ten pages of affidavit evidence now needs to engage more directly with the prosecution brief. That means obtaining the brief early, reviewing it carefully, and in some cases serving material that identifies specific evidentiary weaknesses before the application is heard.</p>

              <ul style={{ paddingLeft: 24, margin: '20px 0' }}>
                <li style={{ marginBottom: 10 }}>A full statement of the charge and the elements in issue.</li>
                <li style={{ marginBottom: 10 }}>A structured review of the prosecution brief where available.</li>
                <li style={{ marginBottom: 10 }}>Direct engagement with the statutory criteria, one by one.</li>
                <li style={{ marginBottom: 10 }}>Conditions proposals tailored to the specific risks identified.</li>
              </ul>

              <p>None of this is novel in principle. What is new is the expectation that all of it will be in place at first hearing. Applications that previously had room for adjournment and supplementary material now tend to be run once, on the papers prepared. That is the real shift.</p>

              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, letterSpacing: '-0.01em', color: 'var(--ink)', margin: '48px 0 16px' }}>
                Where this leaves clients
              </h2>
              <p>For clients, the practical effect is simple: the quality of the lawyer retained at the first court appearance matters more than it did before. A well-prepared application at the outset is far more likely to succeed than a weaker one heard early and then reworked on review. That is worth knowing, and worth acting on.</p>
            </div>

            {/* Author card */}
            <div style={{ marginTop: 80, padding: '32px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 24, alignItems: 'center' }}>
              <div style={{ width: 80, height: 80, overflow: 'hidden', background: 'var(--ivory-deep)' }}>
                <img src="assets/joe-wicking.jpeg" alt="Joe Wicking" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.12)' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 6 }}>Author</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)' }}>Joe Wicking</div>
                <div style={{ fontSize: 13, color: 'var(--graphite-2)' }}>Director · Accredited Specialist (Criminal Law — Qld)</div>
              </div>
              <a href="about.html#joe" className="link-underline">Read profile →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '80px 0 100px', background: 'var(--ivory)', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot" />Continue reading</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(26px, 2.9vw, 38px)', margin: '0 0 48px', letterSpacing: '-0.02em' }}>
            More <em>on the same theme.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {related.map((r, i) => (
              <a key={i} href="article.html" style={{ display: 'block' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--ivory-deep)', marginBottom: 18 }}>
                  <img src={r.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>{r.cat}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.22, margin: 0, color: 'var(--ink)', letterSpacing: '-0.005em' }}>{r.title}</h3>
                <div style={{ marginTop: 12, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--graphite-2)' }}>{r.date} · {r.read}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}

Object.assign(window, { NewsPage, ArticlePage });
