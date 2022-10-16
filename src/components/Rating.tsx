import { useState } from 'react'
import Star from '../assets/icon-star.svg'
import ThanksIc from '../assets/illustration-thank-you.svg'

function Rating() {

  const [done, setDone] = useState<Boolean>(false)
  const numbers = [1, 2, 3, 4, 5]

    interface Sp {
        title: string,
        content: string
      }
    
      const question: Sp[] = [
        {title: "How did we do?", content: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"}
      ]
      const thanks: Sp[] = [
        {title: "Thank you!", content: "We are appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch!"}
      ]
      const [rateArr, setRate] = useState<any>([])
      const addRate = (target: any) => {
        setRate(target.textContent)
        document.querySelectorAll('.numbers span').forEach((span) => {span.classList.remove('selected')})
        target.classList.add('selected')
      }

      const submitRate = ()=> {
        if(rateArr.length > 0) {
          setDone(true)
        }
      }

  return (
    <section>
          {
            !done ? (
              <div>
                <figure>
                  <img src={Star} alt="" />
                </figure>
                <h2>{question[0].title}</h2>
                <p>{question[0].content}</p>

                <div className="numbers">
                  {
                    numbers.map((number)=> (
                      <span key={number} onClick={(e) => addRate(e.target)}>{number}</span>
                    ))
                  }
                </div>
                <button onClick={submitRate} >Submit</button>
              </div>
            ): 
            (
              <>
                <figure>
                  <img src={ThanksIc} alt="" />
                  <figcaption>You selected {rateArr[0]} out of 5</figcaption>
                </figure>
                <h2>{thanks[0].title}</h2>
                <p>{thanks[0].content}</p>
              </>
            )
          }

    </section>
  )
}

export default Rating