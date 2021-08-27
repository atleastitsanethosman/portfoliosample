import React from 'react';

export default function Resume() {
    return (
        // <object data="/images/20210726wd-Resume_Ian.Hennessey(MI).pdf" type="application/pdf" width="100%" height="100%">
        //     <a href="/images/20210726wd-Resume_Ian.Hennessey(MI).pdf">Link to resume file</a>
        // </object>

        <iframe src={"/images/20210726wd-Resume_Ian.Hennessey(MI).pdf"} title="resumefile" width="100%" height="400px"/>

    )
}