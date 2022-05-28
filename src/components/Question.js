import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeResults } from '../containers/exam/redux/actions/resultActionCreator';


const Question = ({ Data, answers, setAnswers }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  const [EndEXam, setEndEXam] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);



  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [Data[activeQuestion]]);

  const changeHandler = (e) => {
    if (activeQuestion == Data.length - 1) {
      setEndEXam(true)
    }
    setSelected(e.target.value);
    if (error) {
      setError('');
    }
    setAnswers([...answers, { q: Data[activeQuestion].question, a: e.target.value }]);
  }

  const nextClickHandler = (e) => {
    if (selected === '') {
      return setError('Please select one option!');
    }
    localStorage.setItem('Answers', JSON.stringify(answers))
    setSelected('');
    if (activeQuestion < Data.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    }
    else {
      dispatch(storeResults(answers));
    }
  }

  return (
    <>
      <div className="card w-75">
        <div className="card-content">
          <div className="content">
            <div className="row">
              <div className='col-md-6'>
                <h2 className="mb-5">{Data[activeQuestion]?.question}</h2>
              </div>

              <div className='col-md-6'>
                <div className="answers" ref={radiosWrapper}>
                  {Data[activeQuestion]?.choices?.map((choice, i) => (
                    <label className="radio border p-3 my-3 w-100" key={i}>
                      <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                      <span className='px-2' >{choice}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>
              {EndEXam ? "View Results" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;