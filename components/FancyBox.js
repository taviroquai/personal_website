import React from 'react';

export default function FancyBox({ open, children }) {

  return !open ? null : (
    <div id="socialsWapper">
      <div className="fancybox-overlay fancybox-overlay-fixed"
        style={fancyboxOverlayStyle}></div>
      <div className="fancybox-wrap fancybox-desktop fancybox-type-inline fancybox-opened"
        tabIndex="-1" style={fancyboxWrapperStyle}>
        <div className="fancybox-skin"
          style={fancyboxSkinStyle}>
          <div className="fancybox-outer">
            <div className="fancybox-inner" style={fancyboxInnerStyle}>
              { children }
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }


const fancyboxInnerStyle = {
  overflow: 'auto',
  width: '280px',
  height: '220px'
}

const fancyboxSkinStyle = {
  padding: '20px',
  width: '350px',
  height: 'auto',
  margin: '0px auto'
}

const fancyboxOverlayStyle = { width: 'auto', height: 'auto', display: 'block' };

const fancyboxWrapperStyle = {
  textAlign: 'center',
  height: 'auto',
  position: 'fixed',
  top: '40%',
  left: '0px',
  right: '0px',
  opacity: 1,
  overflow: 'visible'
}
