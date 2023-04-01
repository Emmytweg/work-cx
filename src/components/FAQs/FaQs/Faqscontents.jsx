import {React,  useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch,faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import './Faqscontent.css'

function Faqscontents( {questions} ) {


  
const [clicked, setclicked] = useState(null)
const [filteredQuestions, setfilteredQuestions] = useState([])
const search = (e) => {
const searchWord = e.target.value
const newQuestion = questions.filter(quest => {
  return quest.question.toLowerCase().includes(searchWord.toLowerCase())
});
if (searchWord === '') {
 setfilteredQuestions([])
} else {
  setfilteredQuestions(newQuestion)
}
}
const toggle = (i) => {
  if (clicked === i) {
    return setclicked(null)
  }
  setclicked(i)
}

  return (
    <div className='Faqscontents'>
      <div>
        <h5>FAQs</h5>
        <h2>Frequently Asked Questions</h2>
        <small>Have questions? We're here to help.</small>
        <div>
        <input type="search" placeholder='Search...' onKeyDown={search} /> <FontAwesomeIcon icon={faSearch} className='search-icon' />


        </div>
               </div>

{filteredQuestions !== 0 &&
      <div className='question' >
        {
          filteredQuestions.slice(0 , 10).map((questions, i)=> {
            return (
              <div key={i}>
               {questions.hr}

                <div className='question-sign'>
                <h3 >
                  {questions.question}?
                </h3>
                <div className='question-btn'>
            { clicked === i ? <div >
               <FontAwesomeIcon icon={faMinusCircle} className='sign-two' onClick={() => toggle(i)}
                /> 
                </div> : 
                            <FontAwesomeIcon icon={faPlusCircle} className='sign-two' onClick={() => toggle(i)}

              /> 
               
                 }
                </div>
                </div>

                <p className={
                  clicked === i ? ' show' : 'content'
                }>
                  {/* answers */}
                  {questions.answer}
                 
                </p>
              </div>
            )
          })
        }
      </div>}
    </div>
  )
}

export default Faqscontents
