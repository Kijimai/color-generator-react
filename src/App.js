import React, { useState, useEffect } from "react"
import SingleColor from "./SingleColor"

import Values from "values.js"

function App() {
  const [color, setColor] = useState("#add8e6")
  const [error, setError] = useState(false)
  const [splitValue, setSplitValue] = useState(10)
  const [list, setList] = useState(new Values("#add8e6").all(splitValue))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(splitValue)
      setList(colors)
      setError(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  const changeSplitVal = (e) => {
    const value = e.target.value
    console.log(value)
    //The value needs to be parseInt'd because its a string
    setSplitValue(parseInt(value))
    try {
      let colors = new Values(color).all(splitValue)
      setList(colors)
      console.log(splitValue)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" onClick={handleSubmit} type="submit">
            Submit
          </button>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="split">Change the split value of the color: </label>
            <input onChange={changeSplitVal} type="number" min="1" max="99" />
          </div>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </>
  )
}

export default App
