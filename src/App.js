import Header from "./components/Header/Header"
import SideBar from "./components/Sidebar/Sidebar"
import MainContent from "./components/MainContent/MainContent"
import HeaderContent from "./components/HeaderContent/HeaderContent"
import "./App.scss"

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="main-container">
          <HeaderContent />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App
