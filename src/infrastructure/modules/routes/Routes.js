import React, { lazy } from 'react'


const Exam = lazy(() => import('../../../containers/exam'))


export const routes = [
    { path: '/Exam', component: Exam },
] 
