import { useTyping } from "@/src/hooks/useTyping"

const PHRASES = [
  "Fullstack Development",
  "Data Analysis",
  "Machine Learning",
]

export default function TypingText() {
  const text = useTyping(PHRASES, 80)

  return (
    <p>
      {text}
      <span className="cursor" aria-hidden />
    </p>
  )
}