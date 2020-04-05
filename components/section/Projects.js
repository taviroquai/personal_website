import React from 'react';

export default function SectionProjects() {
  return (
    <section id="projects" className="portfolio section">
      <div className="box">
        <h2 className="section-title pull-left">Projects</h2>
        <div className="clearfix"></div>
        <div className="row">
          <div className="col-md-12">
            <ul className="circled">

              <li>db2graphql - Generate a Graphql schema and resolvers from a relational database
                {' '}<a target="_blank" href="https://github.com/taviroquai/db2graphql">(code)</a>
              </li>

              <li>FullstackJS - JS framework featuring Graphql authorization
                {' '}<a target="_blank" href="https://github.com/taviroquai/fullstack-js">(code)</a>
              </li>

              <li>React Observable Store - global store to manage React application state
                {' '}<a target="_blank" href="https://github.com/taviroquai/ReactObservableStore">(code)</a>
              </li>

              <li>MapIgniter 2 - a web mapping framework powered by Laravel 5, OpenLayers3 and AngularJS
                {' '}<a target="_blank" href="https://github.com/taviroquai/mapigniter2">(code)</a>
              </li>

              <li>OSS-IEM - An Independent Evaluation Model for Open-source Software
                {' '}<a target="_blank" href="https://github.com/taviroquai/OSS-Independent-Evaluation-Model">(draft)</a>
              </li>

              <li>More... <a target="_blank" href="https://github.com/taviroquai">(code)</a></li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}