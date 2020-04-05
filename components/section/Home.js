import React from 'react';

export default function SectionHome({ goTo }) {
  return (
    <section id="home" className="naked">
      <div className="splash-container" style={splashContainerStyle}>

        <h1 className="tp-caption caption large sfb fadeIn-3">
          Marco Afonso<br /><small><em>Web Developer</em></small>
        </h1>

        <div className="tp-caption small tp-fade subtitle fadeIn-6"
          style={{ zIndex: 3, whiteSpace: 'nowrap' }}>I'm in Love with React and Node!
        </div>

        <div className="arrow smooth">
          <a href="#projects" onClick={e => goTo(e, '#projects')}>
            <i className="icon-down-open-big"></i>
          </a>
        </div>

      </div>
    </section>
  )
}

const splashContainerStyle = {
  minHeight: '568px',
  height: '150px',
  width: '100%'
};