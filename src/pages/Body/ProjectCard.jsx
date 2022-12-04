import "../../styles/Body/ProjectCard.css"

import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ title, creator, id, imgLink, tags, url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? "project-card" : "project-card unfocused"}>
      <a className="project-card-link" href={url}>
        <div>
          <img className="project-thumbnail" src={imgLink} alt="project thumbnail" />
        </div>
        {isHovered ?
          <div className="project-info">
            <div className="project-left-side">
              <p className="project-title">{title}</p>
              <p className="project-creator">{creator}</p>
            </div>
            <div className="project-id">
              {id}
            </div>
          </div> :
          <div className="project-tags">
            {tags.map((tag) => "#" + tag + " ")}
          </div>
        }
      </a>
    </div>
  )
}

export default ProjectCard;