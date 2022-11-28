import "../../styles/Header/FilterBar.css"

function FilterBar() {
    // get tags from database?
    let tags = ["#tag0", "#tag1"]
    return (
        <div className="filter-bar-container">
            <div className="filter-bar-wrapper">
                <p classname="filter-header">filter:</p>
                {tags.map( (tag) => {
                    return <p className="filter-tag">{tag}</p>
                })}
            </div>
        </div>
    )
}

export default FilterBar;