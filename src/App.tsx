import './App.css'

import Header from './components/Header'
import MainArticle from './components/MainArticle'
import NewSection from './components/NewSection'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      < Header />

      <main>
        < MainArticle />
        < NewSection />
      </main>

      < Footer />
    </div>    
  )
}

export default App
