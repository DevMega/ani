import { hot } from "react-hot-loader"
import React, { useRef } from "react"
import Discover from "./Discover/Discover"
import Navbar from "./Navbar"

import "./App.scss"

export default hot(module)(function App() {
  const ref = useRef(null)
  return (
    <div className="App" ref={ref}>
      <Navbar div={ref}></Navbar>
      <Discover appRef={ref}></Discover>
    </div>
  )
})