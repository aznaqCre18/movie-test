import React from 'react'

function Button({label, type, onClick}) {
  return (
    <button onClick={onClick} className={`btn-cmp ${type === "transparent" ? "transparent" : null}`}>{label}</button>
  )
}

export default Button
