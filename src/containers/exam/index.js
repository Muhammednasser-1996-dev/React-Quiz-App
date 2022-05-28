import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Question from '../../components/Question'
import { requestQuestions } from './../../infrastructure/modules/apiCaller'



const Exam = () => {

    const [Data, setData] = useState([])
    const [answers, setAnswers] = useState([]);

    const fetchData = async () => {
        setData(requestQuestions())
    }

    useEffect(async () => {
        fetchData();
    }, [Data])

    return (
        <>
            <Question Data={Data} answers={answers} setAnswers={setAnswers} />
        </>
    )
}

export default Exam
