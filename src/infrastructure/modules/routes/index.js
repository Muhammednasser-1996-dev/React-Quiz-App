
import React, { Suspense } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { routes } from './Routes'
import Login from './../AuthModule/login'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import { useSelector } from 'react-redux'
import Result from '../../../containers/results'

const RouteModule = () => {

    const isAuthorized = useSelector((state) => state.userState.accessToken);
    const isResults = useSelector((state) => state.ResultState.ResultState);

    console.log(">>", !isResults)



    return (
        <>
            {!isAuthorized ? (
                /*Redirect to `/auth` when user is not authorized*/
                <div className="master-layout">
                    <Route>
                        <Login />
                        <Redirect to='/auth/login' />
                    </Route>
                </div>
            ) : (
                <>
                    {!isResults ? (



                        <>
                            <Header />
                            <div className="master-layout">
                                <Suspense fallback={<h1>Loading profile...</h1>}>
                                    <Switch >
                                        {routes.map((route, index) => (
                                            <Route key={index} path={route.path} component={route.component} exact ></Route>
                                        ))}
                                        <Redirect from='/' to='/Exam' />
                                    </Switch>
                                </Suspense>
                            </div>
                            <Footer />
                        </>
                    ) : (
                        <>
                            <Header />
                            <div className="master-layout">
                                <Route>
                                    <Result />
                                    <Redirect to='/Result' />
                                </Route>
                            </div>
                            <Footer />
                        </>
                    )}


                </>
            )
            }
        </>
    )
}

export default RouteModule 
