import React, { useState, useEffect } from "react"
import rgbToHex from "./utils"

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(", ")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  },[alert])

  return (
    <article
      style={{ backgroundColor: `rgb(${bcg})` }}
      className={`color ${index > 10 ? "color-light" : "color-dark"}`}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)  
        }}
    >
      <p className="percent-value">Color weight: {weight}%</p>
      <p className="color-value">{`#${hexColor}`}</p>
      <p>rgb({bcg})</p>
      {alert && <p className="alert">Copied to clipboard!</p>}
    </article>
  )
}

export default SingleColor
