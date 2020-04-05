import { useState } from 'react'
import Head from 'next/head'
import jump from 'jump.js';
import FancyBox from '../components/FancyBox';
import Sections from '../components/section';
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import NavBar from "../components/NavBar";

const sections = [
  { hash: '#home', text: 'Home', icon: "budicon-home-1", cmp: 'Home' },
  { hash: '#projects', text: 'Projects', icon: "budicon-image", cmp: 'Projects' },
  { hash: '#about', text: 'About', icon: "budicon-author", cmp: 'About' },
  { hash: '#contact', text: 'Contact', icon: "budicon-profile", cmp: 'Contact' }
];

const socials = [
  { icon: 'icon-s-github', href: 'https://github.com/taviroquai' },
  { icon: 'icon-s-twitter', href: 'https://twitter.com/AfonsoD3v' },
  { icon: 'icon-s-linkedin', href: 'https://pt.linkedin.com/in/mafonso333' }
];

const Home = () => {
  
  const [ current, setCurrent ] = useState('#home')
  const [ contactsOpen, setContactsOpen ] = useState(false)

  const goTo = (e, hash) => {
    jump(hash, {
      duration: 1000,
      offset: 0,
      callback: undefined,
      a11y: false
    });
    setCurrent(hash);
  }

  const closeContacts = (e) => {
    setContactsOpen(false);
  }

  const openContacts = (e) => {
    setContactsOpen(true);
  }

  return (
    <div className="body-wrapper">
      <Head>
        
        <link rel="icon" href="/favicon.ico" />

        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />

        <link rel='manifest' href='./manifest.json' />
        <link href='./images/icons/icon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='./images/icons/icon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel='apple-touch-icon' href='./images/icons/icon-512x512.png'></link>
        <meta name='theme-color' content='#FFFFFF' />

        <meta name="description" content="Marco Afonso is a Web Developer that have been developing web applications using React and NodeJS." />
        <meta name="author" content="Marco Afonso" />
        <link rel="shortcut icon" href="favicon.png" />

        <title>Marco Afonso - Web Developer</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AfonsoD3v" />
        <meta name="twitter:title" content="Marco Afonso - web developer" />
        <meta name="twitter:description" content="I'm a Portuguese web developer that loves software architecture." />
        <meta name="twitter:creator" content="@AfonsoD3v" />
        <meta name="twitter:image" content="http://afonsodev.eu/images/avatar.jpg" />
        <meta property="og:title" content="Marco Afonso - web developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://afonsodev.eu/" />
        <meta property="og:image" content="http://afonsodev.eu/images/avatar.jpg" />
        <meta property="og:description" content="I'm a Portuguese web developer that loves software architecture." />

      </Head>
        
      <NavBar
        sections={sections}
        goTo={goTo}
        current={current}
        openContacts={openContacts}
      />

      <div className="container">

        { sections.map((s, i) => {
          const Cmp = Sections[s.cmp];
          return <Cmp key={i} goTo={goTo} />;
        }) }

        <Footer links={socials} />

      </div>

      <div className="backstretch"><img src="./images/bg3.jpg" /></div>

      <FancyBox open={contactsOpen}>
        <Socials
          close={closeContacts}
          links={socials}
        />
      </FancyBox>

      <style jsx global>{`
        .h1 .small, .h1 small, .h2 .small, .h2 small, .h3 .small, .h3 small, .h4 .small, .h4 small, .h5 .small, .h5 small, .h6 .small, .h6 small, h1 .small, h1 small, h2 .small, h2 small, h3 .small, h3 small, h4 .small, h4 small, h5 .small, h5 small, h6 .small, h6 small {
          font-weight: 400;
          line-height: 1;
          color: #F0F0F0;
        }
      `}</style>
    </div>
  )
}

export default Home
