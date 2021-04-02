import _ from 'lodash'

import React, { Component } from 'react'
import Link from 'next/link'

import styles from './ProjectsPageTemplate.module.scss'
import data from '../../../public/projects/data'

class ProjectsPageTemplate extends Component {
  renderProjects() {
    return _.map(data, (project) => (
      <div key={project.id} className={`card ${styles.cardContainer} mb-3`}>
        <div className="row" style={{ height: '100%', margin: '0 0' }}>
          <div className="col-md-2" style={{ position: 'relative' }}>
            <img className={`${styles.centerItem} ${styles.cardImage}`} src={project.thumbnail}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
          <div className="col-md-2" style={{ position: 'relative' }}>
            <Link href={`/project/learn`}>
              <a className={`btn ${styles.centerItem} ${styles.cardButton}`}>View Project</a>
            </Link>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return <div className={styles.listContainer}>{this.renderProjects()}</div>
  }
}

export default ProjectsPageTemplate