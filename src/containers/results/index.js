import React, { useEffect, useState } from 'react'
import { requestQuestions } from './../../infrastructure/modules/apiCaller'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from "react-redux";
import { restoreResults } from '../exam/redux/actions/resultActionCreator';
import { useSelector } from 'react-redux';

const Result = () => {
    const dispatch = useDispatch();
    const [Data, setData] = useState([])
    const [correctAnswers, setCorrectAnswers] = useState(0);
    useEffect(() => {

    }, []);

    const fetchData = async () => {
        setData(requestQuestions())
    }

    let rrr = useSelector((state) => state.ResultState.ResultState)
    const tryAgain = () => {
        dispatch(restoreResults())
    }

    useEffect(() => {
        fetchData();
        let results = JSON.parse(localStorage.getItem("Answers"))
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === Data[index]?.answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);
    }, [Data])

    return (
        <div className="card w-50 text-center">
            <div className="card-content">
                <div className="content">
                    <h3><FontAwesomeIcon icon={faQuestionCircle} classNam="text-primary" /> <sapn> Your results </sapn></h3>
                    <hr />
                    <p>{correctAnswers} of {Data?.length}</p>
                    <p><strong>{Math.floor((correctAnswers / Data.length) * 100)}%</strong></p>
                    <button className='btn btn-success' onClick={tryAgain}> Try Again</button>
                </div>
            </div>
        </div>
    )
}

export default Result
