import { useState, useEffect } from "react"

export function useTyping(
  phrases: string[],
  speed = 80,
  pauseMs = 1500
) {
  const [text, setText] = useState("")
  const [phase, setPhase] = useState("typing")
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const current = phrases[idx % phrases.length]

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() =>
          setText(current.slice(0, text.length + 1)),
          speed
        )
        return () => clearTimeout(t)
      }
      const p = setTimeout(() => setPhase("erasing"), pauseMs)
      return () => clearTimeout(p)
    }

    if (phase === "erasing") {
      if (text.length > 0) {
        const t = setTimeout(() =>
          setText(text.slice(0, -1)),
          speed / 2
        )
        return () => clearTimeout(t)
      }
      setPhase("typing")
      setIdx(i => i + 1)
    }
  }, [text, phase, idx])

  return text
}