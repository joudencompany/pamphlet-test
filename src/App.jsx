import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import HomePage from './pages/HomePage'
import TentInfoPage from './pages/TentInfoPage'
import TentInfoPage2 from './pages/TentInfoPage2'
import OkunaiInfoPage from './pages/OkunaiinfoPage'
import OkunaiInfoPage2 from './pages/OkunaiinfoPage2'

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/tent-info" element={<TentInfoPage />} />
        <Route path="/tent-info2" element={<TentInfoPage2 />} />
        <Route path="/okunai-info" element={<OkunaiInfoPage />} />
        <Route path="/okunai-info2" element={<OkunaiInfoPage2 />} />
    </Routes>
    </>

  )
}