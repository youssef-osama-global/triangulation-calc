import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [CrossPoint, setCrossPoint] = useState("");

  function locateCrossPoint(x1, y1, angle1, x2, y2, angle2) {

    const rad1 = (-angle1) * (Math.PI / 180);
    const rad2 = (-angle2) * (Math.PI / 180);

    const m1 = Math.tan(rad1);
    const m2 = Math.tan(rad2);

    // checking if the lines are parrallel
    if (Math.abs(m1 - m2) < 0.0001) {
        alert("The 2 lines are parrallel"); /* the lines are parrallel */
        return null;
    }

    const targetY = (x1 - x2 - m1 * y1 + m2 * y2) / (m2 - m1);
    const targetX = x1 + m1 * (targetY - y1);
    const exactX = targetX.toFixed(5);
    const exactY = targetY.toFixed(5);
    

    
    return { x: exactX, y: exactY };
}


  useEffect(()=> {
    const sumbitBtn = document.querySelector('.sumbit-btn');

    sumbitBtn.addEventListener("click", ()=> {

      let x1 = parseFloat(document.getElementById("x1").value);
      let y1 = parseFloat(document.getElementById("y1").value);
      let a1 = parseFloat(document.getElementById("a1").value);

      let x2 = parseFloat(document.getElementById("x2").value);
      let y2 = parseFloat(document.getElementById("y2").value);
      let a2 = parseFloat(document.getElementById("a2").value);

      setCrossPoint(`${locateCrossPoint(x1, y1, a1, x2, y2, a2).x}, ${locateCrossPoint(x1, y1, a1, x2, y2, a2).y}`);

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
              <input id='x1' type="number" />
            </div>
            <div className='inp y1'>
              <label for="y1">Y</label>
              <input id='y1' type="number" />
            </div>
            <div className='inp angle1'>
              <label for="a1">angle</label>
              <input id='a1' type="number" />
            </div>
          </div>

          </div>
        <div className="second-pos">
          <h2>Point 2</h2>
          <div className='wrap'>
            <div className='inp x1'>
              <label for="x2">X</label>
              <input id='x2' type="number" />
            </div>
            <div className='inp y1'>
              <label for="y2">Y</label>
              <input id='y2' type="number" />
            </div>
            <div className='inp angle1'>
              <label for="a2">angle</label>
              <input id='a2' type="number" />
            </div>
          </div>
        </div>

        <button className='sumbit-btn'>Sumbit</button>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>

      <section id="output"><p>The Cross-point is at <span style={{color: 'rgb(87, 34, 126)'}}>{CrossPoint}</span></p></section>
    </>
  )
}

export default App
