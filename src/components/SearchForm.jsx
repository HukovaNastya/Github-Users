import {useRef} from "react";

const SearchForm = ({onSubmit}) => {
    const inputRef = useRef(null)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Hello word!')
    // }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputRef.current.value);
            }}
              className="search-section">
                <div className="search-box">
                    <input
                        ref={inputRef}
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