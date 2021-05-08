import { useEffect } from "react"

// We are excluding this from loading at build time in gatsby-node.js
import LocomotiveScroll from "locomotive-scroll"

import { scroll } from "../theme"

const Scroll = callbacks => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector(scroll.container),
      ...scroll.options,
    })
    locomotiveScroll.update()
    // locomotiveScroll.stop()
// console.dir({locomotiveScroll})
    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll

    locomotiveScroll.on("scroll", func => {
      // Update `data-direction` with scroll direction.
      document.documentElement.setAttribute("data-direction", func.direction)
    })

    locomotiveScroll.on('call', function(t,e,n) {
      console.log("arg", {t,e,n})
    })



    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy()
    }
  }, [callbacks])

  return null
}

export default Scroll
