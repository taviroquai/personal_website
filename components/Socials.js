import React from 'react';

export default function Socials({ close, links }) {
  return (
    <div id="socials">
      <a role="button" className="pull-right" onClick={close}>
        <i className="glyphicon glyphicon-remove text-danger" style={{ fontSize: '2.5em' }}></i>
      </a>
      <h1>Check me out on social networks</h1>
      <div className="divide20"></div>
      <ul className="social">
        { links.map((l, i) => (
          <li key={i}><a rel="noreferrer" target="_blank" href={l.href}><i className={l.icon}></i></a></li>
        ))}
      </ul>
    </div>
  )
}
