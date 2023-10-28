import { LogoReact } from 'react-ionicons'
import './App.css'

function App() {

  return (
    <div className='main h-full w-full flex items-center justify-center'>
      <LogoReact
  color={'#00000'}
  rotate
  height="50px"
  width="50px"
  onClick={() => alert('Hi, This is React!')}
/> + tailwind + ionicons template by @krish858
    </div>
  )
}

export default App
