import './App.css'
import { ReactTerminal } from "react-terminal"
import { TerminalContextProvider } from "react-terminal"
import Footer from './components/Footer'
import * as Types from './ts/app_types'
import Navbar from './components/Navbar'

function App() {

  const redirectPage = (destination : string) => {
    window.open(destination, '_blank')
  }

  const aboutMeMessage = 'Hi! My name is Karl Thomsson. I am based in Uppsala, Sweden. I am currently studying Information Technology Engineering at Uppsala University.'
   
  const commands : Types.CommandsExtended = {
    help: () => {
      let cmds = Object.keys(commands);
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
    aboutme: aboutMeMessage,
    github: () => redirectPage("https://github.com/thomssonkarl"),
    linkedin: () =>
      redirectPage("https://www.linkedin.com/in/karl-thomsson-38203819b/"),
    email: () => {
      window.location.href = "mailto:thomsson_99@hotmail.com";
    },
  }

  const theme: Types.TerminalTheme = {
    themeBGColor: "#202020",
    themeToolbarColor: "#202020",
    themeColor: "#FFFEFC",
    themePromptColor: "#fbfbfb",
  }
  
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
      <Footer />
    </div>
  )
}

export default App
