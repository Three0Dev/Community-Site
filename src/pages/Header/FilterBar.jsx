import "../../styles/Header/FilterBar.css"

function FilterBar() {
    // get tags from database?
    let tags = ["tag0", "tag1"]
    return (
        <div className="filter-bar-container">
            filter:
            {tags.map( (tag) => {
                return <a href="github.com">{tag}</a>
            })}
        </div>
    )
}

export default FilterBar;