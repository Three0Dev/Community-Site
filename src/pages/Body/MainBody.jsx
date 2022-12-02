import { Database } from "@three0dev/js-sdk";
import ProjectCard from "./ProjectCard";
import "../../styles/Body/MainBody.css";
import "../../styles/Header/SearchBar.css";
import "../../styles/Header/FilterBar.css"

import { useEffect, useState } from "react";

function MainBody() {
  const [projects, setProjects] = useState([]);
  const [activeProjects, setActiveProjects] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState([]);

  function updateActiveTags(e) {
    const clickedTag = e.target.value;
    // if tag is already active we remove from list of active tags
    if (activeTags.includes(clickedTag)) {
      const filteredTags = activeTags.filter(tag_ => tag_ != clickedTag);
      setActiveTags(filteredTags);
    } else {
      // else we add it to list of active tags
      setActiveTags((activeTags) => [...activeTags, clickedTag]);
    }
  }
  useEffect(() => {

    // retrieve apps details and tags from three0
    // set database change listener
    const projs = [{
      title: "Three0Pinner",
      creator: "Three0",
      id: "12345",
      imgLink: "images/testImage.jpg",
      tags: ["pinner"],
      url: "https://github.com/Three0Dev/Three0Pinner"
    }, {
      title: "Tweeter",
      creator: "Three0",
      id: "56789",
      imgLink: "images/testImage.jpg",
      tags: ["chat", "twitter"],
      url: "https://github.com/Three0Dev/Tweeter"
    }, {
      title: "React-Three0-Chat",
      creator: "Three0",
      id: "01010101",
      imgLink: "images/testImage.jpg",
      tags: ["chat", "three0", "react"],
      url: "https://github.com/Three0Dev/React-Three0-Chat"
    }, {
      title: "Whatsapp 3.0",
      creator: "kelechi",
      id: "232354553",
      imgLink: "images/testImage.jpg",
      tags: ["whatsapp", "chat"],
      url: "https://github.com/Kelach/whatsapp-clone"
    }, {
      title: "Amazon 3.0",
      creator: "Emil and Ben",
      id: "2342312",
      imgLink: "images/testImage.jpg",
      tags: ["amazon", "database"],
      url: "https://github.com/emil-velasquez/amazon-clone-three0"
    },];
    setProjects(projs);
    setTags(["post", "#tag1"]);
    setActiveProjects(projs);
  }, []);

  // filters search and tags
  useEffect(() => {
    if (projects.length != 0) {
      let filteredProjects = projects;

      // filter tags
      for (let i = 0; i < activeTags.length; i++) {
        filteredProjects = filteredProjects.filter(proj =>
          proj.tags.includes(activeTags[i]));
      }

      // filter search
      if
        (inputValue != "") {
        filteredProjects = filteredProjects.filter(proj =>
          proj.title.toLowerCase().includes(inputValue.toLowerCase()));
      }
      setActiveProjects(filteredProjects);
    }
  }, [activeTags, inputValue]);


  return (
    <div className="main-body">

      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <div className={inputValue == "" ? "mini-search-title" : "mini-search-title hidden"}>
            <b>explore</b>
          </div>
          <div className="search-input-box">
            <label className={inputValue == "" ? "placeholder" : "placeholder hidden"}>three0</label>
            <input type="text" autoFocus onChange={(e) =>
              setInputValue(e.target.value)}>
            </input>
          </div>
        </div>
      </div>
      <div className="filter-bar-container">
        <div className="filter-bar-wrapper">
          <p className="filter-header">filter:</p>
          {tags.map((tag) => {
            return <button className={
              activeTags.includes(tag) == true ? "filter-tag active" : "filter-tag"}
              value={tag} key={tag} onClick={(e) => updateActiveTags(e)}>{tag}</button>
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
            tags={project.tags}
            url={project.url} />)}
      </div>

    </div>
  )
}

export default MainBody;

// populate main body with project cards
//