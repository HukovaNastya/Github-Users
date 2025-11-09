import Header from "../src/components/Header.jsx";
import SearchForm from "./components/SearchForm.jsx";

function App() {
    const handleSubmit = (searchValue) => {
        console.log(searchValue);
    }

  return (
    <div className='container'>
        <Header
            title='🔍 GitHub Users Search'
            text='Search and explore GitHub users and their repositories'
        />
        <SearchForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default App
