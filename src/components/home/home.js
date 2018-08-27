import { Component } from 'react'
import { Link } from 'react-router'
import '../../styles/home.scss'

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home__header">
                    <h1>Got Plans?</h1>
                    Click here for <Link to="/events">Upcoming Events</Link>
                </div>
            
            </div>
        )
    }
}