import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Project(props) {
    return(
        <section className='projectcard'>
        <a target="_blank" href={props.projectInfo.deployedLink} >
          <img src={props.projectInfo.imgURL} alt={props.projectInfo.imgALT} />
        </a> 
          <div className="projectname">
            <h4>{props.projectInfo.title}</h4>
            <h5>{props.projectInfo.description}</h5>
            <h5><a target='_blank' href={props.projectInfo.repoLink}><span><FontAwesomeIcon icon={['fab', 'github']} /></span>  GitHub Repository</a></h5>
          </div>
      </section>
    )
}