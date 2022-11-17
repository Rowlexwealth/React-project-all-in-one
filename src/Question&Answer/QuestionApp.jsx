import {useState} from 'react'
import data from '../JS Folder/Question'
import Answer from './Answer'

const QuestionApp = () => {
    const [questions, setQuestions] = useState(data);

  return (
    <div>
        <div className='text-center p-4 bg-red-300 m-5 rounded-xl'>
            <h3 className='text-3xl font-bold'>Question and Answer about Login</h3>
            <main>
            {questions.map((question)=>{
                return <Answer key={question.id} {...question}/>
            })}
            </main>
        </div>
    </div>
  )
}

export default QuestionApp