import { useEffect, useState } from "react";
import { CloseButton } from "../CloseButton";


import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'


const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de inseto',
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de lâmpada',
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de nuvem',
    }
  },
}

type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  useEffect(() => {
    if (feedbackType !== null) {
      console.log(feedbackType)
    }
  }, [feedbackType])



  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header className="flex space-x-2 items-end">
        <span className="text-xl leading-6">Deixe o seu feedback</span>

        <CloseButton />

      </header>
      {!feedbackType ? <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => { setFeedbackType(key as FeedbackType) }}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-lime-300"
            >
              <img src={value.image.source} alt={value.image.alt}></img>
              <span>{value.title}</span>
            </button>
          )
        })}
      </div> : <p>Feedback selecionado: {feedbackType}</p>}




      <footer className="text-xs text-neutral-400">
        Feito por @haterhonesto
      </footer>
    </div>
  )
}