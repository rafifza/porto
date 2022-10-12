import React from 'react'
import './App.css'
import { Header } from './components/common'
import { TypeAnimation } from 'react-type-animation';
import Profil from './components/common/Profil/Profil';
import Skills from './components/common/Skills/Skills';
import Project from './components/common/Projects/Projects';
import Footer from './components/common/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Profil/>
      <div className="Typing">
        <TypeAnimation
        sequence={[
        'Laravel', 
        1300, 
        'React Native', 
        1300, 
        'Angular.js',
        1300, 
        () => {
          console.log('Done typing!'); 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
        </div>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
