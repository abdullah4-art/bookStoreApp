
import Home from "./home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses"
import Singup from "./components/Singup"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";


const App = () => {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={authUser?<Courses />:<Navigate to="/singup/"/>} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App