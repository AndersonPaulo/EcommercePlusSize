import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AppRoutes />
      </div>
      <Footer />
    </>
  )
}

export default App

