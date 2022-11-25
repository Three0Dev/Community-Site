import "../../styles/Header/SearchBar.css"
import React from "react";
import { useEffect, useState } from "react";

function SearchBar(){
    const [inputValue, setInputValue] = useState('');
    const search = async (e) =>{
        // e.preventDefault();
        alert("you searched", inputValue);
    } 

    useEffect(() =>{
        if (inputValue){
            // this is where we filter dater
            // console.log("filtering data", inputValue);
        }


    }, [inputValue])

    return (
    <div className="search-bar-container">
        <div className="search-bar-wrapper">
            <div className={inputValue=="" ? "mini-search-title" : "mini-search-title hidden" }>
                <b>explore</b>
            </div>  
            <div className="search-input-box">
                <label className={inputValue=="" ? "placeholder": "placeholder hidden"}>three0</label>
                <input type="text" autoFocus onChange={(e)=>
                    setInputValue(e.target.value)}>
                </input>
            </div>
        </div>
    </div>

    )
}


export default SearchBar