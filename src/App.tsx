import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import TodoList from './pages/TodoList'

function App() {
  return (
    <Routes>
      {/* หน้าแรก "/" → แสดงหน้า Home */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/todos" element={<TodoList />} />
    </Routes>
  )
}

export default App

