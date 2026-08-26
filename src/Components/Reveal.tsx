"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  className?: string
  delay?: number
}

const Reveal: React.FC<Props> = ({
  children,
  width = "fit-content",
  className = "",
  delay = 0,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 + delay }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        animate={slideControls}
        aria-hidden
        initial="hidden"
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 20,
        }}
        transition={{ duration: 0.5, delay: 0.25 + delay }}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
      />
    </div>
  )
}

export default Reveal
