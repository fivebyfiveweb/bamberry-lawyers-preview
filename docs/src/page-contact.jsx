/* global React, Nav, Footer, Breadcrumb */
const { useState: useStateContact } = React;

function ContactPage() {
  const d = window.BAMBERRY.data;
  const [sent, setSent] = useStateContact(false);
  const [form, setForm] = useStateContact({ name: '', email: '', phone: '', matter: 'Criminal law', office: 'Gold Coast', message: '' });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" />

      <section style={{ paddingTop: 160, paddingBottom: 40 }}>
        <div className="wrap">
          <Breadcrumb items={[{ label: 'Bamberry', href: 'index.html' }, { label: 'Contact' }]} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end' }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" />Speak with us</div>
              <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(38px, 5vw, 77px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: 0 }}>
                Tell us<br />what <em style={{ color: 'var(--teal)' }}>happened.</em>
              </h1>
              <hr className="hairline" style={{ margin: '40px 0 28px', width: 120, background: 'var(--accent)', height: 2 }} />
              <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--graphite)', maxWidth: 580, margin: 0 }}>
                Initial consultations are free and confidential. Use the form, call directly, or email us. If the matter is urgent — a police station, an arrest, a bail hearing — call.
              </p>
            </div>
            <div style={{ border: '1px solid var(--line)', padding: 32, background: 'var(--ivory)' }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dot" />Urgent · 24/7</div>
              <a href={`tel:${d.phoneRaw}`} style={{ display: 'block', fontFamily: 'var(--serif)', fontSize: 40, color: 'var(--ink)', lineHeight: 1, letterSpacing: '-0.01em', marginBottom: 12 }}>
                {d.phone}
              </a>
              <div style={{ fontSize: 14, color: 'var(--graphite)', lineHeight: 1.55 }}>
                Our after-hours line reaches a director. For police station interviews, arrests and emergencies.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + offices */}
      <section style={{ padding: '80px 0 120px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
            {/* Form */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />01 / Send a message</div>
              {sent ? (
                <div style={{ border: '1px solid var(--accent)', background: 'rgba(176,138,74,0.06)', padding: 40 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 36, color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: 16 }}>
                    Thank you. <em style={{ color: 'var(--accent)' }}>We\u2019ll be in touch.</em>
                  </div>
                  <p style={{ fontSize: 15, color: 'var(--graphite)', lineHeight: 1.6, margin: 0, maxWidth: 520 }}>
                    A director will review your message and respond directly, usually within a business day. If your matter is urgent, please call {d.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} style={{ borderTop: '1px solid var(--ink)' }}>
                  {[
                    { n: 'name', label: 'Full name', type: 'text' },
                    { n: 'email', label: 'Email', type: 'email' },
                    { n: 'phone', label: 'Phone', type: 'tel' },
                  ].map(f => (
                    <Field key={f.n} field={f} value={form[f.n]} onChange={v => setForm({ ...form, [f.n]: v })} />
                  ))}
                  <Select label="Matter type" options={['Criminal law', 'Traffic law', 'Corporate / Regulatory', 'Appeal', 'Other']} value={form.matter} onChange={v => setForm({ ...form, matter: v })} />
                  <Select label="Preferred office" options={['Gold Coast', 'Brisbane', 'Either / video']} value={form.office} onChange={v => setForm({ ...form, office: v })} />
                  <div style={{ padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 10 }}>
                      Tell us what has happened
                    </label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="A short summary. Charges, dates, next court date if known."
                      rows={6}
                      style={{
                        width: '100%', background: 'transparent', border: 0, outline: 0,
                        fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.5, color: 'var(--ink)', padding: 0,
                        resize: 'vertical',
                      }}
                    />
                  </div>
                  <div style={{ paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 12, color: 'var(--graphite-2)', maxWidth: 320, lineHeight: 1.5 }}>
                      Your message is confidential. No attorney-client relationship is formed until we confirm engagement.
                    </div>
                    <button type="submit" className="btn btn--primary">Send message <span className="arrow">→</span></button>
                  </div>
                </form>
              )}
            </div>

            {/* Offices + direct contacts */}
            <aside>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />02 / Direct</div>
              <div style={{ borderTop: '1px solid var(--ink)' }}>
                {d.locations.map((l, i) => (
                  <div key={l.slug} style={{ padding: '24px 0', borderBottom: '1px solid var(--line)' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                      0{i + 1} · {l.role}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 30, color: 'var(--ink)', letterSpacing: '-0.005em', marginBottom: 10 }}>
                      {l.city}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--graphite)', lineHeight: 1.6, marginBottom: 14 }}>
                      {l.address}<br />{l.suburb}
                    </div>
                    <a href={`tel:${l.phoneRaw}`} style={{ display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink)', borderBottom: '1px solid var(--accent)', paddingBottom: 2 }}>
                      {l.phone}
                    </a>
                  </div>
                ))}
                <div style={{ padding: '24px 0' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 8 }}>
                    Email
                  </div>
                  <a href={`mailto:${d.email}`} style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', letterSpacing: '-0.005em' }}>
                    {d.email}
                  </a>
                </div>
              </div>

              <div style={{ marginTop: 40, padding: 24, background: 'var(--ink)', color: 'var(--ivory)' }}>
                <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', marginBottom: 12 }}><span className="dot" />Hours</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.4, marginBottom: 10 }}>
                  Monday–Friday<br />8:30am – 5:00pm
                </div>
                <div style={{ fontSize: 13, color: 'rgba(246,241,232,0.7)', lineHeight: 1.55, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <span style={{ color: 'var(--accent)' }}>24/7</span> · Police station & emergency line
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ field, value, onChange }) {
  return (
    <div style={{ padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 10 }}>
        {field.label}
      </label>
      <input
        required
        type={field.type}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%', background: 'transparent', border: 0, outline: 0,
          fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', padding: 0,
        }}
      />
    </div>
  );
}

function Select({ label, options, value, onChange }) {
  return (
    <div style={{ padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
      <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--graphite-2)', marginBottom: 14 }}>
        {label}
      </label>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {options.map(o => (
          <button key={o} type="button" onClick={() => onChange(o)} style={{
            padding: '10px 16px',
            border: value === o ? '1px solid var(--ink)' : '1px solid var(--line)',
            background: value === o ? 'var(--ink)' : 'transparent',
            color: value === o ? 'var(--ivory)' : 'var(--graphite)',
            fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all .2s',
          }}>{o}</button>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { ContactPage });
