import React from 'react'
import { Link } from 'react-router'
import { ListItem } from '../list-item/list-item'
import '../../styles/events.scss'

export const Events = ({ events, filter }) => {
    const filteredEvents = (!filter || !filter.match(/festival|concert|private|sports/)) ?
    events: 
    events.filter(event => event[filter])

return (
    <div className="events">
        <div className="events__menu">
            Sort events by: 
            <Link className="events__menu__link" to="/events">All Events</Link>
            <Link className="events__menu__link" to="/events/concert">Concerts</Link>
            <Link className="events__menu__link" to="/events/festival">Festivals</Link>
            <Link className="events__menu__link" to="/events/sports">Sporting Events</Link>
        </div>

        {filteredEvents.map((event, i) =>
        <ListItem key={i}
                  {...event} />)}
        </div>
)}

Events.propTypes = {
    events: function(props) {
        if (!Array.isArray(props.events)) {
            return new Error('Events should be in an array')
        } else if (!props.events.length) {
            return new Error('Events must have one record')
        } else {
            return null
        }
    }
}