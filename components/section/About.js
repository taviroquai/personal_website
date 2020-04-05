import React from 'react'

export default function SectionAbout() {
  return (
    <section id="about">
      <div className="box">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-md-5 col-md-push-7 col-sm-12">
            <figure className="frame">
              <img src="./images/avatar.jpg" alt="Marco Afonso avatar" />
            </figure>
          </div>
          <div className="col-md-7 col-md-pull-5 col-sm-12">

            <p className="lead">Balancing between reduccionism and holism...</p>
            
            <p>Hello, my name is Marco Afonso. A portuguese born to create things.</p>
            
            <p>Since kid, I always liked to compose things using Lego, or programming with
              Basic language in ZX Spectrum 128K, now I develop software, more specifically
              web applications.
            </p>
            
            <p>I'm quite confortable with latest technologies like, LAMP stack or
              NodeJS + frontend libs/frameworks like jQuery and React.
            </p>

            <p>More important than technologies, is the architeture of the projects.
              I'm always looking for the best software design to achieve readability and
              maintainability.
              <br />From readability and maintainability, any project can grow in security,
              optimization and performance aspects.
            </p>

            <p>Anyway, there are some tools that I could not left behind like Git and VSCode editor
              with some crucial packages.
            </p>

            <p>I'm living and working in Tavira, Portugal at local council,
              also creating web apps and giving support to desktop users.
            </p>

            <p>Thanks for the visit! :)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
