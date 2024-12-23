import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Character } from "./pages/Character"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:characterId" element={<Character />} />
    </Routes>
  )
}
