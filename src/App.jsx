import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [strongholdPosition, setStrongholdPosition] = useState("");

  function locateStronghold(x1, z1, angle1, x2, z2, angle2) {

    const rad1 = (-angle1) * (Math.PI / 180);
    const rad2 = (-angle2) * (Math.PI / 180);

    const m1 = Math.tan(rad1);
    const m2 = Math.tan(rad2);

    // checking if the lines are parrallel
    if (Math.abs(m1 - m2) < 0.0001) {
        alert("The 2 lines are parrallel"); /* the lines are parrallel */
        return null;
    }

    const targetZ = (x1 - x2 - m1 * z1 + m2 * z2) / (m2 - m1);
    const targetX = x1 + m1 * (targetZ - z1);
    const exactX = Math.round(targetX);
    const exactZ = Math.round(targetZ);
    
    // the chunk can be claculated by Math.floor(exact / 16);

    // console.log(`coordinates: x: ${exactX}, z: ${exactZ}`);
    
    return { x: exactX, z: exactZ };
}


  useEffect(()=> {
    const sumbitBtn = document.querySelector('.sumbit-btn');

    sumbitBtn.addEventListener("click", ()=> {

      let x1 = parseFloat(document.getElementById("x1").value);
      let z1 = parseFloat(document.getElementById("z1").value);
      let a1 = parseFloat(document.getElementById("a1").value);

      let x2 = parseFloat(document.getElementById("x2").value);
      let z2 = parseFloat(document.getElementById("z2").value);
      let a2 = parseFloat(document.getElementById("a2").value);

      setStrongholdPosition(`${locateStronghold(x1, z1, a1, x2, z2, a2).x}, ${locateStronghold(x1, z1, a1, x2, z2, a2).z}`);

    });

 
  }, []);

  return (
    <>
      <h1>TRIANGULATION</h1>
      <section id="center">
        <div className="first-pos">
          <h2>Point 1</h2>
          <div className='wrap'>
            <div className='inp x1'>
              <label for="x1">X</label>
              <input id='x1' type="text" />
            </div>
            <div className='inp z1'>
              <label for="z1">Y</label>
              <input id='z1' type="text" />
            </div>
            <div className='inp angle1'>
              <label for="a1">angle</label>
              <input id='a1' type="text" />
            </div>
          </div>

          </div>
        <div className="second-pos">
          <h2>Point 2</h2>
          <div className='wrap'>
            <div className='inp x1'>
              <label for="x2">X</label>
              <input id='x2' type="text" />
            </div>
            <div className='inp z1'>
              <label for="z2">Y</label>
              <input id='z2' type="text" />
            </div>
            <div className='inp angle1'>
              <label for="a2">angle</label>
              <input id='a2' type="text" />
            </div>
          </div>
        </div>

        <button className='sumbit-btn'>Sumbit</button>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="output"><p>The Cross-point is at {strongholdPosition}</p></section>
    </>
  )
}

export default App
