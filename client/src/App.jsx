import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import IndexPage from "./pages/IndexPage"
import LoginPage from "./pages/Auth/LoginPage"
import RegisterPage from "./pages/Auth/RegisterPage"
import AccountPage from "./pages/Account/AccountPage"
import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, setUser } from "../redux/slices/userSlice"

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      if (Object.keys(user).length === 0) {
        const { data } = await axios.get("/profile")
        dispatch(setUser(data))
      }
    }
    getUser()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<IndexPage />} />
        <Route path="/account/:subpage?" index element={<AccountPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registrieren" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
