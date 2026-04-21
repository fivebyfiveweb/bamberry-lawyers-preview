/* global React */
const { useState, useEffect } = React;

// ============ Shared building blocks ============

function Nav({ variant = 'light', activeAccent, setAccent, currentDirection, setDirection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  const dark = variant === 'dark';
  const navStyles = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    transition: 'all .4s ease',
    background: scrolled || menuOpen
      ? (dark ? 'rgba(8,26,39,0.92)' : 'rgba(251,248,242,0.94)')
      : 'transparent',
    backdropFilter: (scrolled || menuOpen) ? 'blur(14px) saturate(1.1)' : 'none',
    borderBottom: scrolled ? `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}` : '1px solid transparent',
    color: dark ? 'var(--ivory)' : 'var(--ink)',
  };

  const burgerBar = { width: 22, height: 1.5, background: 'currentColor', transition: 'transform .25s, opacity .25s' };

  return (
    <>
    <header style={navStyles}>
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a href="index.html" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Wordmark dark={dark} />
        </a>
        <nav style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="desktop-nav">
          <NavLink label="About" dark={dark} href="about.html" dropdown={[{ label: 'The Firm', href: 'about.html' }, { label: 'Joe Wicking', href: 'about.html#joe' }, { label: 'Sam Jackson', href: 'about.html#sam' }]} />
          <NavLink label="Criminal Law" dark={dark} href="criminal-law.html" dropdown={[{ label: 'Overview', href: 'criminal-law.html' }, { label: 'Sexual Offences', href: 'sexual-offences.html' }, { label: 'Violence', href: 'violence.html' }, { label: 'Murder & Manslaughter', href: 'murder-manslaughter.html' }, { label: 'Drug Offences', href: 'drug-offences.html' }, { label: 'Fraud & Dishonesty', href: 'fraud-dishonesty.html' }, { label: 'Youth Justice', href: 'youth-justice.html' }, { label: 'Bail Applications', href: 'bail-applications.html' }, { label: 'Appeals', href: 'appeals.html' }]} />
          <NavLink label="Locations" dark={dark} href="locations.html" dropdown={[{ label: 'Gold Coast', href: 'locations.html#gold-coast' }, { label: 'Brisbane', href: 'locations.html#brisbane' }]} />
          <NavLink label="News" dark={dark} href="news.html" />
          <NavLink label="Contact" dark={dark} href="contact.html" />
        </nav>
        <div className="desktop-nav-right" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div className="pill" style={{ borderColor: dark ? 'rgba(255,255,255,0.18)' : 'var(--line)', color: dark ? 'var(--ivory)' : 'var(--graphite)' }}>
            <span className="status" />
            <span>24/7</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span style={{ letterSpacing: '0.06em' }}>{window.BAMBERRY.data.phone}</span>
          </div>
        </div>
        <button
          className="mobile-nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
          style={{
            width: 44, height: 44,
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 5, color: dark ? 'var(--ivory)' : 'var(--ink)', cursor: 'pointer',
          }}
        >
          <span style={{ ...burgerBar, transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ ...burgerBar, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...burgerBar, transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>
    </header>
    <div className={`mobile-nav-panel ${dark ? 'mobile-nav-panel--dark' : 'mobile-nav-panel--light'} ${menuOpen ? 'is-open' : ''}`}>
        <a href="about.html">About</a>
        <a href="criminal-law.html">Criminal Law</a>
        <div className="mobile-nav-sub">
          <a href="sexual-offences.html" style={{ borderBottom: 'none' }}>Sexual Offences</a>
          <a href="violence.html" style={{ borderBottom: 'none' }}>Violence</a>
          <a href="murder-manslaughter.html" style={{ borderBottom: 'none' }}>Murder & Manslaughter</a>
          <a href="drug-offences.html" style={{ borderBottom: 'none' }}>Drug Offences</a>
          <a href="fraud-dishonesty.html" style={{ borderBottom: 'none' }}>Fraud & Dishonesty</a>
          <a href="youth-justice.html" style={{ borderBottom: 'none' }}>Youth Justice</a>
          <a href="bail-applications.html" style={{ borderBottom: 'none' }}>Bail Applications</a>
          <a href="appeals.html" style={{ borderBottom: 'none' }}>Appeals</a>
        </div>
        <a href="locations.html">Locations</a>
        <a href="news.html">News</a>
        <a href="contact.html">Contact</a>
        <div className="mobile-nav-cta">
          <a href="contact.html" className="btn btn--primary" style={{ justifyContent: 'center' }}>Book free consultation <span className="arrow">→</span></a>
          <a href={`tel:${window.BAMBERRY.data.phoneRaw}`} className="btn btn--accent" style={{ justifyContent: 'center' }}>Call 24/7 · {window.BAMBERRY.data.phone}</a>
        </div>
    </div>
    </>
  );
}

function NavLink({ label, href, dropdown, dark }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: 'relative' }}
    >
      <a href={href || '#'} style={{
        fontFamily: 'var(--sans)', fontSize: 12, letterSpacing: '0.14em',
        textTransform: 'uppercase', fontWeight: 500, padding: '22px 0',
        display: 'inline-block', cursor: 'pointer',
      }}>
        {label}
      </a>
      {dropdown && open && (
        <div style={{
          position: 'absolute', top: '100%', left: -20, minWidth: 240,
          background: dark ? 'rgba(14,42,61,0.98)' : 'var(--paper)',
          border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'var(--line)'}`,
          padding: '12px 0',
          animation: 'fadeDown .2s ease',
        }}>
          {dropdown.map((d, i) => (
            <a key={i} href={d.href} style={{
              display: 'block', padding: '10px 22px',
              fontFamily: 'var(--sans)', fontSize: 13,
              color: dark ? 'var(--ivory)' : 'var(--ink)',
              transition: 'all .2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.04)' : 'var(--ivory)'; e.currentTarget.style.paddingLeft = '28px'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '22px'; }}
            >
              {d.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Wordmark({ dark }) {
  // Typographic wordmark — mirrors logo vocabulary
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '0.02em', color: dark ? 'var(--ivory)' : 'var(--teal)' }}>
          Bamberry
        </span>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '0.02em', color: dark ? 'rgba(246,241,232,0.7)' : 'var(--graphite)' }}>
          Lawyers
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
        <span style={{ height: 1, width: 20, background: 'var(--teal)' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: dark ? 'rgba(246,241,232,0.5)' : 'var(--graphite-2)' }}>
          Criminal Law
        </span>
        <span style={{ height: 1, flex: 1, background: dark ? 'rgba(255,255,255,0.15)' : 'var(--line)' }} />
      </div>
    </div>
  );
}

function Footer({ dark }) {
  const d = window.BAMBERRY.data;
  return (
    <footer style={{
      background: dark ? 'var(--ink-deep)' : 'var(--ink)',
      color: 'var(--ivory)',
      padding: '100px 0 40px',
    }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em', marginBottom: 24 }}>
              When the stakes are high,<br /><em style={{ color: 'var(--accent)' }}>experience matters.</em>
            </div>
            <a href="#contact" className="btn btn--accent">
              Book a free consultation
              <span className="arrow">→</span>
            </a>
            {/* Credentials row */}
            <div style={{ marginTop: 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: 22, alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Doyle's crest */}
              <div title="Doyle's Guide — Recommended" style={{
                width: 68, height: 68, borderRadius: '50%',
                border: '1.5px solid var(--accent)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(176,138,74,0.08)',
                flexShrink: 0,
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1, color: 'var(--accent)', fontStyle: 'italic' }}>Doyle's</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 7, letterSpacing: '0.18em', color: 'rgba(246,241,232,0.7)', marginTop: 3, textTransform: 'uppercase' }}>Recommended</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 7, letterSpacing: '0.18em', color: 'rgba(246,241,232,0.7)', textTransform: 'uppercase' }}>2026</div>
              </div>
              {/* QLS Accredited Specialist crest */}
              <div title="QLS Accredited Specialist — Criminal Law" style={{
                width: 68, height: 68,
                border: '1.5px solid rgba(246,241,232,0.45)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                flexShrink: 0,
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 4, left: 4, right: 4, height: 1, background: 'var(--accent)' }} />
                <div style={{ position: 'absolute', bottom: 4, left: 4, right: 4, height: 1, background: 'var(--accent)' }} />
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1, color: 'var(--ivory)' }}>QLS</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 6.5, letterSpacing: '0.18em', color: 'rgba(246,241,232,0.7)', marginTop: 4, textTransform: 'uppercase' }}>Accredited</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 6.5, letterSpacing: '0.18em', color: 'rgba(246,241,232,0.7)', textTransform: 'uppercase' }}>Specialist</div>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(246,241,232,0.7)' }} />
            </div>
          </div>
          <FooterCol title="Practice" items={d.practiceAreas.map(p => p.name)} hrefs={d.practiceAreas.map(_=>'criminal-law.html')} />
          <FooterCol title="Firm" items={['About', 'Joe Wicking', 'Sam Jackson', 'News', 'Contact']} hrefs={['about.html','about.html#joe','about.html#sam','news.html','contact.html']} />
          <div>
            <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', marginBottom: 20 }}>
              <span className="dot" />Offices
            </div>
            {d.offices.map((o, i) => (
              <div key={i} style={{ marginBottom: 18, fontSize: 13, lineHeight: 1.7 }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ivory)' }}>{o.city}</div>
                <div style={{ color: 'rgba(246,241,232,0.6)' }}>{o.address}</div>
                <div style={{ color: 'rgba(246,241,232,0.6)' }}>{o.suburb}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 30, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(246,241,232,0.45)' }}>
          <div>© 2016–2026 Bamberry Lawyers Pty Ltd · ABN 624 120 672</div>
          <div style={{ display: 'flex', gap: 30 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="https://fivebyfive.com.au" target="_blank" rel="noopener">Web Design by Five by Five</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items, hrefs = [] }) {
  return (
    <div>
      <div className="eyebrow" style={{ color: 'rgba(246,241,232,0.5)', marginBottom: 20 }}>
        <span className="dot" />{title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it, i) => (
          <li key={i}>
            <a href={hrefs[i] || '#'} style={{ fontSize: 14, color: 'rgba(246,241,232,0.8)', transition: 'color .2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(246,241,232,0.8)'}
            >{it}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Tweaks panel
function TweaksPanel({ accent, setAccent, direction, setDirection }) {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setMode(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  if (!mode) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 200,
      background: 'rgba(14,42,61,0.96)', color: 'var(--ivory)',
      padding: 22, minWidth: 280,
      border: '1px solid rgba(255,255,255,0.1)',
      backdropFilter: 'blur(12px)',
      fontFamily: 'var(--sans)',
      boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 14 }}>
        Tweaks
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 20 }}>Direction</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
        {['A', 'B'].map(d => (
          <button key={d} onClick={() => setDirection(d)}
            style={{
              flex: 1, padding: '10px',
              border: direction === d ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.18)',
              background: direction === d ? 'rgba(176,138,74,0.12)' : 'transparent',
              color: 'var(--ivory)', cursor: 'pointer',
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
            {d === 'A' ? 'A · Quiet Room' : 'B · On the Record'}
          </button>
        ))}
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginBottom: 14 }}>Accent</div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {window.BAMBERRY.accentOptions.map(a => (
          <button key={a.id} onClick={() => setAccent(a.value)} title={a.label}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: a.value,
              border: accent === a.value ? '2px solid #fff' : '2px solid rgba(255,255,255,0.2)',
              outline: accent === a.value ? `2px solid ${a.value}` : 'none',
              outlineOffset: 2,
              cursor: 'pointer',
            }} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Wordmark, Footer, TweaksPanel });
