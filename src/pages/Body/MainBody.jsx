import { Database } from "@three0dev/js-sdk";
import ProjectCard from "./ProjectCard";
import "../../styles/Body/MainBody.css";
import "../../styles/Header/SearchBar.css";
import "../../styles/Header/NavBar.css";

import { useEffect, useState } from "react";

function MainBody() {
  const [projects, setProjects] = useState([]);
  const [activeProjects, setActiveProjects] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

  function updateActiveTags(e){
    // console.log(e.target.value);
    const clickedTag = e.target.value;
    // if tag is already active we set it back to non-active
    // console.log(clickedTag);
    if (activeTags.includes(clickedTag)){
      const filteredTags = activeTags.filter( tag_ => tag_ != clickedTag );
      setActiveTags(filteredTags);
    } else{
      // else we add it to list of active tags
      setActiveTags((activeTags) => [...activeTags, clickedTag]);
    }
  }

  useEffect(()=>{
    // tags filtering
    console.log(activeTags);
    setActiveProjects(projects);
    for (let i = 0; i < activeTags.length; i++) {
      setActiveProjects(activeProjects.filter(proj =>
        proj.tags.includes(activeTags[i].toLowerCase())));
    }

    // query filtering
    if (inputValue != ""){
      const filteredProjects = activeProjects.filter(proj =>
        proj.title.toLowerCase().includes(inputValue.toLowerCase()));
        setActiveProjects(filteredProjects);
    }
  }, [activeTags, inputValue])

  useEffect(() => {

    // retrieve apps and tags from three0
    // set database change listener
    const projs = [{
      title: "Title 1",
      creator: "creator 1",
      id: "12345",
      imgLink: "images/testImage.jpg",
      tags: ["first post"]
    }, {
      title: "Title 2",
      creator: "creator 2",
      id: "56789",
      imgLink: "images/testImage.jpg",
      tags: ["second post"]
    }, {
      title: "Title 3",
      creator: "creator 3",
      id: "01010101",
      imgLink: "images/testImage.jpg",
      tags: ["thrid post"]
    }, {
      title: "Title 4",
      creator: "creator 4",
      id: "232354553",
      imgLink: "images/testImage.jpg",
      tags: ["fourth post"]
    }, {
      title: "Title 5",
      creator: "creator 5",
      id: "2342312",
      imgLink: "images/testImage.jpg",
      tags: ["fifth post"]
    }, {
      title: "Title 6",
      creator: "creator 6",
      id: "1093234",
      imgLink: "images/testImage.jpg",
      tags: ["post"]
    }];
    setProjects(projs);
    setTags(["post", "#tag1"]);
    setActiveProjects(projs);
  }, []);

  // map each project to ProjectCard
  // function and return html result
  return (
    <div className="main-body">

       <div className="search-bar-container">
                <div className="search-bar-wrapper">
                    <div className={inputValue=="" ? "mini-search-title" : "mini-search-title hidden" }>
                        <b>explore</b>
                    </div>
                    <div className="search-input-box">
                        <label className={inputValue=="" ? "placeholder": "placeholder hidden"}>three0</label>
                        <input type="text" autoFocus onChange={(e)=>
                            /*filter data*/setInputValue(e.target.value)}>
                        </input>
                    </div>
                </div>
        </div>
        <div className="filter-bar-container">
            <div className="filter-bar-wrapper">
                <p classname="filter-header">filter:</p>
                {tags.map( (tag) => {
                    return <button className={
                        activeTags.includes(tag) == true? "filter-tag active": "filter-tag"}
                       value={tag} onClick={(e) => updateActiveTags(e)}>{tag}</button>
                })}
            </div>
        </div>
        <div className="cards-body">
          {activeProjects.map((project) =>
            <ProjectCard key={project.id}
              title={project.title}
              creator={project.creator}
              id={project.id}
              imgLink={project.imgLink}
              tags={project.tags} />)}
        </div>

    </div>
  )
}

export default MainBody;

// populate main body with project cards
//