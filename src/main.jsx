import React, { useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import Car from './components/Car';
import InterestModal from './components/InterestModal';
import './style.css';

const finishes = [
  {
    name: 'Glacier silver',
    color: '#bdc9c8',
    light: '#eef3ef',
    dark: '#687b78',
  },
  {
    name: 'Forest metallic',
    color: '#5c786c',
    light: '#acc2ad',
    dark: '#263d32',
  },
  { name: 'Ember copper', color: '#bc7750', light: '#ecc6a1', dark: '#70402d' },
];

function App() {
  const root = useRef(null);
  const timeline = useRef(null);
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      timeline.current = gsap
        .timeline({ onComplete: () => setPlaying(false) })
        .from('.reveal', {
          y: reduced ? 0 : 42,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        })
        .from(
          '.car',
          {
            x: reduced ? 0 : 220,
            opacity: 0,
            duration: 1.6,
            ease: 'power3.out',
          },
          '-=.9',
        )
        .from(
          '.wheel',
          { rotation: reduced ? 0 : 150, duration: 1.6, ease: 'power3.out' },
          '<',
        )
        .from(
          '.bottom-reveal',
          { y: reduced ? 0 : 25, opacity: 0, duration: 0.8, stagger: 0.12 },
          '-=.7',
        );
      if (!reduced)
        gsap.to('.ambient', {
          x: 50,
          opacity: 0.6,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
    }, root);
    return () => ctx.revert();
  }, []);
  function changeFinish(i) {
    setSelected(i);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      gsap.fromTo('.car', { y: 5 }, { y: 0, duration: 0.5 });
  }
  return (
    <main ref={root}>
      <header className="reveal">
        <a className="logo" href="#" aria-label="AERA home">
          Λ E R Λ<span>IN MOTION, REIMAGINED.</span>
        </a>
        <div className="edition">
          THE ALL-NEW AERA GT <span>01 / 03</span>
        </div>
        <button className="nav-cta" onClick={() => setOpen(true)}>
          Stay ahead <span>↗</span>
        </button>
      </header>
      <section className="stage" aria-labelledby="hero-title">
        <div className="ambient" />
        <div className="horizon" />
        <div className="hero-copy">
          <p className="eyebrow reveal">
            <span /> INTRODUCING THE AERA GT
          </p>
          <h1 id="hero-title" className="reveal">
            Less ordinary.
            <br />
            <em>More alive.</em>
          </h1>
          <p className="intro reveal">
            Electric by nature. Extraordinary by design.
            <br />
            Meet a new kind of momentum.
          </p>
          <button className="primary reveal" onClick={() => setOpen(true)}>
            Be the first to know <span>↗</span>
          </button>
        </div>
        <div className="background-type" aria-hidden="true">
          GT
        </div>
        <div className="car-scene">
          <Car finish={finishes[selected]} />
        </div>
        <div className="vertical-label reveal">DESIGNED TO MOVE YOU</div>
        <div className="scene-caption bottom-reveal">
          <span className="small-cross">+</span> A NEW PERSPECTIVE ON ELECTRIC
        </div>
        <div className="finish-picker bottom-reveal">
          <span className="micro">MAKE IT YOURS</span>
          <div className="swatches">
            {finishes.map((f, i) => (
              <button
                key={f.name}
                style={{ '--swatch': f.color }}
                className={i === selected ? 'active' : ''}
                onClick={() => changeFinish(i)}
                aria-label={f.name}
                aria-pressed={i === selected}
              />
            ))}
          </div>
          <span className="finish-name">{finishes[selected].name}</span>
        </div>
      </section>
      <section
        className="details bottom-reveal"
        aria-label="Concept performance specifications"
      >
        <div className="detail-intro">
          <span className="micro">FEEL THE DIFFERENCE</span>
          <p>
            Quiet confidence.
            <br />
            Unmistakable presence.
          </p>
        </div>
        <div className="spec">
          <strong>
            3.2<span>s</span>
          </strong>
          <span>0–100 KM/H</span>
        </div>
        <div className="spec">
          <strong>
            620<span>km</span>
          </strong>
          <span>ESTIMATED RANGE</span>
        </div>
        <div className="spec">
          <strong>
            100<span>%</span>
          </strong>
          <span>ALL ELECTRIC</span>
        </div>
        <button
          className="replay"
          onClick={() => {
            timeline.current.restart();
            setPlaying(true);
          }}
        >
          <span>↻</span>
          {playing ? 'Play again' : 'Replay the reveal'}
        </button>
      </section>
      <footer className="bottom-reveal">
        <span>THE ROAD AHEAD LOOKS DIFFERENT.</span>
        <span>
          Fictional brand · Concept specifications · React + GSAP demo
        </span>
        <span>© AERA 2026</span>
      </footer>
      <InterestModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
