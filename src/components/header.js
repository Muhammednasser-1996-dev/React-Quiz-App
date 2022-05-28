import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { restoreUserData } from '../infrastructure/modules/AuthModule/service/redux/actions';

export default function Header() {

    const userName = useSelector((state) => state.userState.UserName);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(restoreUserData())
    }


    return (
        <div className='Header w-100 d-flex align-items-center justify-content-between ps-4 dw-bold fs-3 text-white text-uppercase'>

            <div>
                <FontAwesomeIcon icon={faQuestionCircle} /> <span className='ms-2'> quiz App </span>
            </div>

            <div>
                {userName}
            </div>

            <div className='me-2'>
                <button type="button" class="btn btn-outline-success text-white" onClick={logout}>Logout</button>
            </div>

        </div>
    )
}
