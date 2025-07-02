import LogInPage from "./pages/LogInPage"
import ProfilePage from "./pages/ProfilePage"
import SettingsPage from "./pages/SettingsPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import NavBar from  "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
function App() {
  const {authuser,checkAuth}=useAuthStore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth])
  console.log({authuser});
  return (
  <>
 <NavBar/>
 <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/signup" element={<SignUpPage/>}/>
  <Route path="/login" element={<LogInPage/>}/>
  <Route path="/settings" element={<SettingsPage/>}/>
  <Route path="/profile" element={<ProfilePage/>}/>

 </Routes>
 </>
  )
}

export default App
