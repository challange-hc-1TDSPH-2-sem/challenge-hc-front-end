type Props = {
  question: string
  answer: string
}

export default function FaqItem({ question, answer }: Props) {
  return (
    <details className="card">
      <summary className="cursor-pointer font-medium select-none">{question}</summary>
      <p className="mt-2 text-gray-700">{answer}</p>
    </details>
  )
}


