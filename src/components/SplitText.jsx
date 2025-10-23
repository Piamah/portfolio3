import { motion } from "framer-motion"
import React from "react"

const SplitText = ({ text, delay = 0.05, duration = 0.4, className = "" }) => {
  const letters = text.split("")

  return (
    <span className={className}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * delay,
            duration,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export default SplitText
