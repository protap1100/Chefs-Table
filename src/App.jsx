import OurRecipe from "./Components/Recipe_Components/OurRecipe"
import Banner from "./Components/Static_Components/Banner"
import Navbar from "./Components/Static_Components/Navbar"

function App() {

      return (
        <div className="container mx-auto">
          <Navbar></Navbar>
          <Banner></Banner>
          <OurRecipe></OurRecipe>
        </div>
      )
}

export default App
