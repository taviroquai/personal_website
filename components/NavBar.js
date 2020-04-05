import React, { useState } from 'react';

export default function NavBar(props) {

  const { sections, goTo, openContacts } = props;
  const [ open, setOpen ] = useState(false);

  const getItemClassname = (hash) => {
    const { current } = props;
    return current === hash ? 'current' : null;
  }

  const getMobileMenuClassname = (open) => {
    return !open ? "collapse navbar-collapse" : "collapse navbar-collapse in";
  }

  const getMenuToggleClassname = (open) => {
    return !open ? "btn responsive-menu" : "btn responsive-menu opn";
  }

  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <a className={getMenuToggleClassname(open)} onClick={e => setOpen(!open)}><i></i></a>
        <div className="navbar-brand text-center">
          <a href="/"><img src="./images/logo.jpg" alt="" className="retina" /></a>
        </div>
      </div>
      <div className={getMobileMenuClassname(open)} style={open ? null : { height: '0px' }}>
        <ul className="nav navbar-nav">

          { sections.map((section, i) => (
            <li key={i} className={getItemClassname(section.hash)}>
              <a href={section.hash} onClick={e => goTo(e, section.hash)}
                className="hint--right" data-hint={section.text}>
                <i className={section.icon}></i><span>{section.text}</span>
              </a>
            </li>
          ))}

          <li>
            <a role="button"
              onClick={openContacts} 
              className="hint--right fancybox-inline"
              data-hint="Socials">
              <i className="icon-heart-empty-1"></i><span>Socials</span>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  )
}
