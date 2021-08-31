import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Resume() {
    return (
        <section className ="resume">
            <div>
                <h3>Resume</h3>
            </div>
            <div className="resumeRender">
            <ul className="skillsList">
                <li><h4>Skillset:</h4></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>BootStrap</li>
                <li>Express</li>
                <li>NodeJS</li>
            </ul>
                <a href={ process.env.PUBLIC_URL + "/images/20210726wd-Resume_Ian.Hennessey(MI).pdf"} download> <span><FontAwesomeIcon icon={['fas', 'file']}/></span> Download Resume </a>
            </div>

        </section>
    )
}