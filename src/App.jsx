import { useEffect, useState } from 'react'
import AppBar from './components/AppBar'
import './App.css'
import { products } from './data'
import ActiveItem from './components/ActiveItem'
import { Box, CssBaseline } from '@mui/material'

function App() {
  const [active, setActive] = useState({})
  useEffect(() => {
    setActive(products.filter((item) => item.id === 3)[0])
  }, [])
  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
      <AppBar products={products} active={active} setActive={setActive} />
      <ActiveItem active={active} />
    </Box>
  )
}

export default App
