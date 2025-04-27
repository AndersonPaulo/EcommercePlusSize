import AppRoutes from "./routes/AppRoutes"
import Navbar from "./components/NavBar";
function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <AppRoutes />
      </div>
    </>
  )
}

export default App

