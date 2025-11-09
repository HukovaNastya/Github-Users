const SearchForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hello word!')
    }

    return (
        <form onSubmit={handleSubmit} className="search-section">
                <div className="search-box">
                    <input
                        autoComplete="off"
                        className="search-input"
                        id="searchInput"
                        placeholder="Enter GitHub username..."
                        type="text"
                    />
                    <button className="btn btn-primary" id="searchBtn">Search</button>
                </div>
        </form>
    )
}

export default SearchForm;