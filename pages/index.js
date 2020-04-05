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
        <title>Next PWA Test</title>
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

      <noscript>
        <h1>Marco Afonso  <em>Web Developer</em></h1>
        <h2>I love web appplications architecture based on Node, React and HTML5</h2>
        <h3>Personal Projects</h3>
        <ul className="circled">

            <li>db2graphql - Generate a Graphql schema and resolvers from relational database
                <a target="_blank" href="https://github.com/taviroquai/db2graphql">(code)</a>
            </li>

            <li>FullstackJS - JS framework featuring Graphql authorization
                <a target="_blank" href="https://github.com/taviroquai/fullstack-js">(code)</a>
            </li>

            <li>React Observable Store - global store to manage React application state
                <a target="_blank" href="https://github.com/taviroquai/ReactObservableStore">(code)</a>
            </li>

            <li>MapIgniter 2 - a web mapping framework powered by Laravel 5, OpenLayers3 and AngularJS
                <a target="_blank" href="https://github.com/taviroquai/mapigniter2">(code)</a>
            </li>

            <li>OSS-IEM - An Independent Evaluation Model for Open-source Software
                <a target="_blank" href="https://github.com/taviroquai/OSS-Independent-Evaluation-Model">(draft)</a>
            </li>
            
            <li>More...
                <a target="_blank" href="https://github.com/taviroquai">(code)</a>
            </li>
        </ul>
        <h3>About Me</h3>
        <p className="lead">Balancing between reduccionism and holism...</p>
        <p>Hello, my name is Marco Afonso. A portuguese born to create things.</p>
        <p>Since kid, I always liked to compose things using Lego, or programming with Basic language in ZX Spectrum 128K, now develop software, more specifically web applications.</p>
        <p>I'm quite confortable with latest technologies like, LAMP stack or NodeJS + frontend libs/frameworks like jQuery and React.</p>
        <p>More important than technologies, is the architeture of the projects. I'm always looking for the best software design to achieve readability and maintainability.
        <br />From readability and maintainability, any project can grow in security, optimization and performance.</p>
        <p>Anyway, there are some tools that I could not left behind like Git and VSCode editor with some crucial packages.</p>
        <p>I'm living and working in Tavira, Portugal at local council, also creating web apps and giving support to desktop users.</p>
        <p>Thanks for the visit! :)</p>
      </noscript>
        
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
