import { Database } from "@three0dev/js-sdk";
import ProjectCard from "./ProjectCard";
import "../../styles/Body/MainBody.css";
import { useEffect, useState } from "react";
function MainBody(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        
         // retrieve apps from three0
         // set database change listener
         const projs = [{
            title: "Title 1",
            creator: "creator 1",
            id: "12345",
            imgLink: "link1",
            tags:["first post"]
        }, {
            title: "Title 2",
            creator: "creator 2",
            id: "56789",
            imgLink: "link2",
            tags:["second post"]
        }, {
            title: "Title 3",
            creator: "creator 3",
            id: "01010101",
            imgLink: "link3",
            tags:["thrid post"]
        } ];
        setProjects(projs);
        console.log(projects);

        }, []);

// return map each project to ProjectCard
// function and return html result
    return ( 
    <section>
        {projects.map((project) => 
        <ProjectCard key={project.id}
         title={project.title} 
        creator={project.creator} 
        id={project.id} 
        imgLink={project.imgLink} 
        tags={project.tags}/> )}
    </section>
    )
}

export default MainBody;

// populate main body with project cards
// 