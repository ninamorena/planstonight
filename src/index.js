import React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import { Error } from './components/error'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
   <Router history={ hashHistory }>
        <Route path='/' component={ App } />
        <Route path='events' component={ App }>
            <Route path=':filter' component={ App } />
        </Route>
        <Route path='*' component={ Error } />
    </Router>,
    document.getElementById('react-container')
)