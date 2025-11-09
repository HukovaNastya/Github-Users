import Header from "../src/components/Header.jsx";
import SearchForm from "./components/SearchForm.jsx";

function App() {

  return (
    <div className='container'>
        <Header
            title='🔍 GitHub Users Search'
            text='Search and explore GitHub users and their repositories'
        />
        <SearchForm/>
    </div>
  )
}

export default App
