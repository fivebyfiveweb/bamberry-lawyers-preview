/* global React, Nav, Footer, PageHero, Breadcrumb, CTABand */
const { useState: useStateCrim } = React;

function CriminalLawPage() {
  const d = window.BAMBERRY.data;
  const crim = d.practiceAreas[0];

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 90, borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Bamberry', href: 'index.html' }, { label: 'Practice' }, { label: 'Criminal Law' }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" />Practice / Criminal Law</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 5vw, 77px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
                Criminal law,<br /><em style={{ color: 'var(--teal)' }}>the whole practice.</em>
              </h1>
              <hr className="hairline" style={{ margin: '40px 0 28px', width: 120, background: 'var(--accent)', height: 2 }} />
              <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 620, margin: 0 }}>
                We represent clients in serious and complex criminal matters across Queensland — from first police contact to trial, sentence and appeal. Our work spans the Magistrates, District and Supreme Courts, the Court of Appeal, and the High Court of Australia.
              </p>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>By numbers</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
                {[
                  { k: 'Years exclusive', v: '15+' },
                  { k: 'Specialists', v: '2' },
                  { k: 'Courts', v: 'All Qld' },
                  { k: 'Response', v: '24/7' },
                ].map((x, i) => (
                  <div key={i} style={{ padding: '20px 16px', borderBottom: '1px solid var(--line)', borderLeft: i % 2 === 1 ? '1px solid var(--line)' : 'none' }}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 44, lineHeight: 1, color: 'var(--ink)', letterSpacing: '-0.02em' }}>{x.v}</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginTop: 8 }}>{x.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-practice list */}
      <section style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start', marginBottom: 80 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}><span className="dot" />01 / Areas</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(29px, 3.2vw, 45px)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1 }}>
                Areas of <em>criminal practice</em>
              </h2>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--graphite)', margin: 0, maxWidth: 680, textWrap: 'pretty' }}>
              Each area below is handled by one of the firm\u2019s directors or a senior solicitor working directly to them. There is no triage tier. You speak to the lawyer on your matter from the first call.
            </p>
          </div>

          <SubPracticeTable />
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '120px 0', background: 'var(--ivory)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />02 / How we work</div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(32px, 3.6vw, 51px)', margin: '0 0 72px', letterSpacing: '-0.02em' }}>
            A clear <em>sequence.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--ink)' }}>
            {[
              { k: 'First contact', v: 'Same-day conference. We take your account, review the charge sheet, and tell you what the prosecution will need to prove.' },
              { k: 'Evidence audit', v: 'We read the brief closely. Warrants, statements, surveillance, analyst certificates — every piece examined for weakness.' },
              { k: 'Strategy', v: 'We decide the path: plea, negotiation, fight. Each choice made on the evidence, not a template.' },
              { k: 'Advocacy', v: 'Appearance in every court in Queensland. Where Senior Counsel is required, we brief and instruct.' },
            ].map((x, i) => (
              <div key={i} style={{ padding: '40px 28px', borderLeft: i > 0 ? '1px solid var(--line)' : 'none', borderBottom: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontStyle: 'italic', color: 'var(--accent)', marginBottom: 20, lineHeight: 1 }}>0{i + 1}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', marginBottom: 14, letterSpacing: '-0.005em' }}>{x.k}</div>
                <div style={{ fontSize: 14, color: 'var(--graphite)', lineHeight: 1.6 }}>{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courts */}
      <section style={{ padding: '120px 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />03 / Where we appear</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(32px, 3.6vw, 51px)', margin: '0 0 28px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                Every court of <em>criminal jurisdiction</em> in Queensland.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--graphite)', margin: 0 }}>
                From a first Magistrates Court appearance to appellate work in the High Court of Australia. Where counsel is required, we brief and instruct senior advocates.
              </p>
            </div>
            <div style={{ borderTop: '1px solid var(--ink)' }}>
              {[
                { k: 'Magistrates Court', v: 'Bail, committals, summary matters — statewide.' },
                { k: 'District Court', v: 'Indictable trials and sentencing — statewide.' },
                { k: 'Supreme Court', v: 'Serious indictable trials, bail reviews, habeas corpus.' },
                { k: 'Court of Appeal', v: 'Appeals against conviction and sentence.' },
                { k: 'High Court of Australia', v: 'Special leave applications and appeals.' },
                { k: 'CCC Investigative Hearings', v: 'Representation during compelled examinations.' },
              ].map((x, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 24, padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.005em' }}>{x.k}</div>
                  <div style={{ fontSize: 14, color: 'var(--graphite-2)', lineHeight: 1.55 }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}

function SubPracticeTable() {
  const [hover, setHover] = useStateCrim(null);
  const areas = [
    { n: '01', slug: 'sexual-offences.html', name: 'Sexual Offences', sub: 'Rape, sexual assault, indecent treatment, historic offences.', detail: 'Both adult and historic allegations, from committal to trial.' },
    { n: '02', slug: 'violence.html', name: 'Violence', sub: 'Assault, grievous bodily harm, armed robbery, domestic violence.', detail: 'Summary and indictable violence offences, including AVOs.' },
    { n: '03', slug: 'murder-manslaughter.html', name: 'Murder & Manslaughter', sub: 'Homicide prosecutions in the Supreme Court.', detail: 'Provocation, self-defence and accident as substantive issues.' },
    { n: '04', slug: 'drug-offences.html', name: 'Drug Offences', sub: 'Possession to trafficking, State and Commonwealth.', detail: 'From summary possession to large-scale trafficking indictments.' },
    { n: '05', slug: 'fraud-dishonesty.html', name: 'Fraud & Dishonesty', sub: 'White-collar, tax, corporate and regulatory matters.', detail: 'Complex paper-trail prosecutions, including CDPP matters.' },
    { n: '06', slug: 'youth-justice.html', name: 'Youth Justice', sub: 'Young people in the criminal justice system.', detail: 'Childrens Court matters, restorative justice, diversion.' },
    { n: '07', slug: 'bail-applications.html', name: 'Bail Applications', sub: 'Supreme Court bail, including show-cause matters.', detail: 'Well-prepared bail applications change the whole trajectory.' },
    { n: '08', slug: 'appeals.html', name: 'Appeals', sub: 'Conviction and sentence appeals.', detail: 'QCA and High Court work where grounds support it.' },
  ];
  return (
    <div style={{ borderTop: '1px solid var(--ink)' }}>
      {areas.map((a, i) => (
        <a key={i} href={a.slug}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
          style={{
            display: 'grid',
            gridTemplateColumns: '70px 1.2fr 1.8fr auto',
            alignItems: 'center',
            gap: 40,
            padding: '30px 0',
            borderBottom: '1px solid var(--line)',
            cursor: 'pointer',
            background: hover === i ? 'rgba(176,138,74,0.04)' : 'transparent',
            transition: 'background .3s',
          }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 20, fontStyle: 'italic', color: 'var(--accent)' }}>{a.n}</div>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.4vw, 34px)',
            color: 'var(--ink)', letterSpacing: '-0.005em',
            transform: hover === i ? 'translateX(10px)' : 'translateX(0)',
            transition: 'transform .3s',
          }}>{a.name}</div>
          <div style={{ color: 'var(--graphite-2)', fontSize: 14, lineHeight: 1.55 }}>{a.sub}</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontStyle: 'italic', color: hover === i ? 'var(--accent)' : 'var(--graphite-2)', transform: hover === i ? 'translateX(6px)' : 'translateX(0)', transition: 'all .3s' }}>→</div>
        </a>
      ))}
    </div>
  );
}

Object.assign(window, { CriminalLawPage });
