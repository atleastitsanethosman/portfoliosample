import React from "react";
import Project from "../Project";

const projectList = [
    {
        "id": 1,
        "title": "To Die in Australia",
        "description": "Blog with image built with AWS S3, Handlebars, Multer, Express, and Sequelize",
        "imgURL": process.env.PUBLIC_URL + "/images/todieinaustralia.gif",
        "imgALT": "to die in Australia screenshot",
        "deployedLink": "https://todieinaustralia.herokuapp.com/",
        "repoLink": "https://github.com/atleastitsanethosman/todieinaustralia"
    },
    {
        "id": 2,
        "title": "OnlineOfflineBudgetTracker",
        "description": "Built with Express, MongoDB, Mongoose, and Index DB",
        "imgURL": process.env.PUBLIC_URL + "/images/budgettracker.gif",
        "imgALT": "budget tracker screenshot",
        "deployedLink": "https://hennesseybudgettracker.herokuapp.com/",
        "repoLink": "https://github.com/atleastitsanethosman/onlineofflinebudgettracker"
    },
    {
        "id": 3,
        "title": "BikeBuddy",
        "description": "A information tool for cyclists built with Materialize and APIs",
        "imgURL": process.env.PUBLIC_URL + "/images/bikebuddy.png",
        "imgALT": "Screenshot of bikebuddy",
        "deployedLink": "https://atleastitsanethosman.github.io/bike-buddy/",
        "repoLink": "https://github.com/atleastitsanethosman/bike-buddy"
    },    
    {
        "id": 4,
        "title": "Talkin' Tech",
        "description": "Tech Blog built with Express, Sequelize, Bcrypt, and Handlebars",
        "imgURL": process.env.PUBLIC_URL + "/images/talkintech.gif",
        "imgALT": "talking tech screenshot",
        "deployedLink": "https://talkintechblog.herokuapp.com/",
        "repoLink": "https://github.com/atleastitsanethosman/techblog"
    },    
    {
        "id": 5,
        "title": "Weather Dashboard",
        "description": "Weather information page built using Weatherwise API",
        "imgURL": process.env.PUBLIC_URL + "/images/WeatherDashboard.gif",
        "imgALT": "Screenshot of weather dashboard",
        "deployedLink": "https://atleastitsanethosman.github.io/weatherdashboard-hw6/",
        "repoLink": "https://github.com/atleastitsanethosman/weatherdashboard-hw6"
    },    
    {
        "id": 6,
        "title": "Team Profile Generator",
        "description": "Org chart visualization built with NodeJS, Inquirer, Jest, and Bootstrap",
        "imgURL": process.env.PUBLIC_URL + "/images/teamprofilegenerator.png",
        "imgALT": "screenshot of team profile generator",
        "deployedLink": "https://atleastitsanethosman.github.io/workdayschedulerhw5/",
        "repoLink": "https://github.com/atleastitsanethosman/TeamProfileGenerator"
    }
];

export default function Portfolio() {
    return (
        <section className="projects">
            <div>  
                <h3>Projects</h3>
            </div>            
            <div className="projects-list" id="projects-list">
                {
                    projectList.map((project) => (
                        <Project projectInfo={project} key={project.id}/>
                    ))
                }
            </div>
        </section>
    )
}