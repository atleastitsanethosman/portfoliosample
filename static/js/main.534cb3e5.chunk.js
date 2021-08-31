(this.webpackJsonpportfoliosample=this.webpackJsonpportfoliosample||[]).push([[0],{29:function(e,t,i){},30:function(e,t,i){},43:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(17),c=i.n(n),r=(i(29),i(30),i(10)),o=i(0),l={heroStyle:{backgroundImage:"url(".concat("/portfoliosample/images/traversebay.png",")")}};function j(){return Object(o.jsxs)("nav",{className:"main-header-menu",children:[Object(o.jsx)("div",{className:"ianh",style:l.heroStyle}),Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{children:"Ian Hennessey"}),Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/portfolio",children:"Portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/resume",children:"Resume"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{to:"/contact",children:"Contact"})})]})})]})]})}var d=i(7);function h(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("nav",{className:"footer-nav",children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("a",{target:"_blank",href:"https://www.linkedin.com/in/ian-hennessey-b4310a38",children:[" ",Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fab","linkedin"]})})," Linkedin"]})," "]}),Object(o.jsx)("a",{target:"_blank",href:"https://github.com/atleastitsanethosman",children:Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fab","github"]})})," GitHub"]})})]})})})}function b(){return Object(o.jsxs)("section",{className:"aboutme",id:"about",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"About Ian"})}),Object(o.jsxs)("div",{className:"bio",children:[Object(o.jsx)("img",{src:"/portfoliosample/images/hennesseycrop.jpg",alt:"Ian Hennessey"}),Object(o.jsx)("p",{children:"I am currently enrolled as a student in the Michigan State University Coding Bootcamp, learning the skills necessary to be a full stack web developer. I graduated from Michigan State University with a Bachelor\u2019s Degree in Supply Chain Management, and after a 16 year career in positions of increasing responsibility at manufacturing companies in various industries, I have decided to take the steps necessary to make a shift in my career."})]})]})}var m=i(11),p=i(24),u=i(20);function x(){var e=Object(p.a)({mode:"onBlur"}),t=e.register,i=e.handleSubmit,s=e.formState.errors;return Object(o.jsxs)("section",{className:"contact",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Contact"})}),Object(o.jsx)("section",{className:"contact-form",onSubmit:i((function(e){Object(u.b)("portfoliocontact","portfolio_contact","#contact-form").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))})),children:Object(o.jsxs)("form",{id:"contact-form",children:[s.name&&Object(o.jsxs)("div",{className:"warning",children:[Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fas","ban"]})})," Name Required!"]}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({type:"text"},t("name",{required:!0,maxLength:50})),{},{name:"name",placeholder:"Name"})),Object(o.jsx)("br",{}),s.email&&Object(o.jsxs)("div",{className:"warning",children:[Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fas","ban"]})})," Valid Email Required!"]}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({type:"email"},t("email",{required:!0,pattern:/^\S+@\S+\.\S+$/})),{},{name:"email",placeholder:"Email"})),Object(o.jsx)("br",{}),s.message&&Object(o.jsxs)("div",{className:"warning",children:[Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fas","ban"]})})," Message between 10 and 1500 Characters Required!"]}),Object(o.jsx)("textarea",Object(m.a)(Object(m.a)({},t("message",{required:!0,min:10,max:1500})),{},{name:"message",placeholder:"Message"})),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",value:"Send"})]})})]})}function O(){return Object(o.jsxs)("section",{className:"resume",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Resume"})}),Object(o.jsxs)("div",{className:"resumeRender",children:[Object(o.jsxs)("ul",{className:"skillsList",children:[Object(o.jsx)("li",{children:Object(o.jsx)("h4",{children:"Skillset:"})}),Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"Javascript"}),Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"BootStrap"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"NodeJS"})]}),Object(o.jsxs)("a",{href:"/portfoliosample/images/20210726wd-Resume_Ian.Hennessey(MI).pdf",download:!0,children:[" ",Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fas","file"]})})," Download Resume "]})]})]})}function g(e){return Object(o.jsxs)("section",{className:"projectcard",children:[Object(o.jsx)("a",{target:"_blank",href:e.projectInfo.deployedLink,children:Object(o.jsx)("img",{src:e.projectInfo.imgURL,alt:e.projectInfo.imgALT})}),Object(o.jsxs)("div",{className:"projectname",children:[Object(o.jsx)("h4",{children:e.projectInfo.title}),Object(o.jsx)("h5",{children:e.projectInfo.description}),Object(o.jsx)("h5",{children:Object(o.jsxs)("a",{target:"_blank",href:e.projectInfo.repoLink,children:[Object(o.jsx)("span",{children:Object(o.jsx)(d.a,{icon:["fab","github"]})}),"  GitHub Repository"]})})]})]})}Object(u.a)("user_5o4fYZ0JYcNmlg4LMm17k");var f=[{id:1,title:"To Die in Australia",description:"Blog with image built with AWS S3, Handlebars, Multer, Express, and Sequelize",imgURL:"/portfoliosample/images/todieinaustralia.gif",imgALT:"to die in Australia screenshot",deployedLink:"https://todieinaustralia.herokuapp.com/",repoLink:"https://github.com/atleastitsanethosman/todieinaustralia"},{id:2,title:"OnlineOfflineBudgetTracker",description:"Built with Express, MongoDB, Mongoose, and Index DB",imgURL:"/portfoliosample/images/budgettracker.gif",imgALT:"budget tracker screenshot",deployedLink:"https://hennesseybudgettracker.herokuapp.com/",repoLink:"https://github.com/atleastitsanethosman/onlineofflinebudgettracker"},{id:3,title:"BikeBuddy",description:"A information tool for cyclists built with Materialize and APIs",imgURL:"/portfoliosample/images/bikebuddy.png",imgALT:"Screenshot of bikebuddy",deployedLink:"https://atleastitsanethosman.github.io/bike-buddy/",repoLink:"https://github.com/atleastitsanethosman/bike-buddy"},{id:4,title:"Talkin' Tech",description:"Tech Blog built with Express, Sequelize, Bcrypt, and Handlebars",imgURL:"/portfoliosample/images/talkintech.gif",imgALT:"talking tech screenshot",deployedLink:"https://talkintechblog.herokuapp.com/",repoLink:"https://github.com/atleastitsanethosman/techblog"},{id:5,title:"Weather Dashboard",description:"Weather information page built using Weatherwise API",imgURL:"/portfoliosample/images/WeatherDashboard.gif",imgALT:"Screenshot of weather dashboard",deployedLink:"https://atleastitsanethosman.github.io/weatherdashboard-hw6/",repoLink:"https://github.com/atleastitsanethosman/weatherdashboard-hw6"},{id:6,title:"Team Profile Generator",description:"Org chart visualization built with NodeJS, Inquirer, Jest, and Bootstrap",imgURL:"/portfoliosample/images/teamprofilegenerator.png",imgALT:"screenshot of team profile generator",deployedLink:"https://atleastitsanethosman.github.io/workdayschedulerhw5/",repoLink:"https://github.com/atleastitsanethosman/TeamProfileGenerator"}];function k(){return Object(o.jsxs)("section",{className:"projects",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Projects"})}),Object(o.jsx)("div",{className:"projects-list",id:"projects-list",children:f.map((function(e){return Object(o.jsx)(g,{projectInfo:e},e.id)}))})]})}var y=i(9),L=i(13),v=i(23),S=i(4);function w(){return Object(o.jsx)(r.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)(S.a,{exact:!0,path:"/about",component:b}),Object(o.jsx)(S.a,{exact:!0,path:"/portfolio",component:k}),Object(o.jsx)(S.a,{exact:!0,path:"/resume",component:O}),Object(o.jsx)(S.a,{exact:!0,path:"/contact",component:x}),Object(o.jsx)(S.a,{exact:!0,path:"/",component:b}),Object(o.jsx)(h,{})]})})}y.b.add(v.a,L.c,L.b,L.a);var N=function(){return Object(o.jsx)(w,{})};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.534cb3e5.chunk.js.map