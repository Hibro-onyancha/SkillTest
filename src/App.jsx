import './App.css'
import GlowElement from './GlowElement'


function App() {
  return (
    <div>
      <GlowElement children= {
        <p>
          Hellow
        </p>
      }></GlowElement>
      <GlowElement children = {
        <p>
          Yey!
        </p>
      }></GlowElement>

    </div>
  )
}

export default App
