import React from 'react';

export default ({ links }) => (
  <footer className="footer box">
  
    <p className="pull-left">© 2015 - {(new Date()).getFullYear()} <span className="year"></span>
      Marco Afonso. All rights reserved.
    </p>

    <ul className="social pull-right">
      { links.map((l, i) => (
        <li key={i}><a target="_blank" href={l.href}><i className={l.icon}></i></a></li>
      ))}
    </ul>

    <div className="clearfix"></div>
  </footer>
)
