
import './App.css'
import FrontImg from './Components/FrontImg'
import Information from './Components/Information'

function App() {

  return (
    <>
      <main>
        <div className="contentMain">
          <section className="information">
            <Information/>
          </section>
          <section className="phoneFront">
            <FrontImg/>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
