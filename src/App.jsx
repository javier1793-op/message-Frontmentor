import { useState } from "react";
import "./App.css";
import FrontImg from "./Components/FrontImg";
import Information from "./Components/Information";
import Confirm from "./Components/Confirm";

function App() {
  const [confirm, setConfirm] = useState(false);
  console.log(confirm)

  return (
    <>
      <main>
        {confirm ? (
          <Confirm
          setConfirm={setConfirm}
          />
        ) : (
          <div className="contentMain">
            <section className="information">
              <Information 
             setConfirm={setConfirm}
              />
            </section>
            <section className="phoneFront">
              <FrontImg />
            </section>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
