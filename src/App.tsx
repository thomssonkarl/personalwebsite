import './App.css'
import { ReactTerminal } from "react-terminal"
import { TerminalContextProvider } from "react-terminal"
import Footer from './components/Footer'
import * as Types from './ts/app_types'
import Navbar from './components/Navbar'
import Circle from './components/Circle'
import { useState, useEffect } from 'react'

function App() {

  const redirectPage = (destination : string) => {
    window.open(destination, '_blank')
  }

  const aboutMeMessage = 'Hi! My name is Karl Thomsson. I am based in Stockholm, Sweden and I am currently working as a Software Engineer. I hold a M.Sc in Computer and Information Engineering at Uppsala University.'
  const aboutMeCont = 'I have a deep passion for computers, particularly systems programming and working with low-level languages. I enjoy exploring how software interacts with hardware and optimizing performance. Writing efficient and scalable code in languages like C and C++ is something I find both challenging and rewarding.' 
   
  const commands : Types.CommandsExtended = {
    help: () => {
      let cmds = Object.keys(commands)
      return (
        <span>
          Available commands: <br/>
          {cmds.map((cmd, i) => (
            <span key={i}>{cmd} {i + 1 != cmds.length ? <br/> : null}</span>
          ))}
        </span>
      );
    },
    clear: "",
    aboutme: () => {
      return (
        <span>
            {aboutMeMessage} <br/><br/>
            {aboutMeCont}
        </span>
      );
    }, 
    github: () => redirectPage("https://github.com/thomssonkarl"),
    linkedin: () =>
      redirectPage("https://www.linkedin.com/in/karl-thomsson-38203819b/"),
    email: () => {
      window.location.href = "mailto:thomsson_99@hotmail.com"
    },
  }

  const theme: Types.TerminalTheme = {
    themeBGColor: "#202020",
    themeToolbarColor: "#202020",
    themeColor: "#FFFEFC",
    themePromptColor: "#fbfbfb",
  }

  const [dateTime, setDateTime] = useState(getDateTime)

  function getDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const day = now.getDate().toString().padStart(2, '0')
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getDateTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <TerminalContextProvider>
        <ReactTerminal
          className="terminal"
          commands={commands}
          themes={{
            theme,
          }}
          theme="theme"
          welcomeMessage={
            <span>
              Type 'help' for instructions <br />
            </span>
          }
          errorMessage="Command not found!"
        />
      </TerminalContextProvider>   
      <div className='terminal-footer'>
        <div style={{display: 'flex', padding:'5px', alignItems:'center'}}>
          <Circle/> <span style={{marginLeft: '5px', color: '#121212'}}>Stockholm, Sweden</span>
        </div>
        <div style={{display: 'flex', padding:'5px', color:'#121212'}}>
          <span>{dateTime.split(',')[0]}</span> 
          <span>, {dateTime.split(',')[1]}</span> 
        </div>
      </div>  
      <Footer />
    </div>
  )
}

export default App
