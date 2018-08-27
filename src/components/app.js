import { Component } from 'react'
import { Home } from './home/home'
import { Events } from './events/events'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allEvents: [
                {
                    artist: "Al Di Meola",
                    special_guest: null,
                    concert: true,
                    event_start_at: "2018-09-19T18:20:30+01:00",
                    event_image: "https://s3.us-east-2.amazonaws.com/gotplanstonight/al_di_meola.jpg",
                    festival: false,
                    venue_name: "Cobb Energy Center",
                    venue_address: "2800 Cobb Galleria Pkwy",
                    venue_city_state_zip: "Atlanta, GA 30339",
                    price: "$50.00",
                    sports: false,
                },
                {
                    artist: "Atlanta Hawks vs Detroit Pistons (Opening Night)",
                    special_guest: null,
                    concert: false,
                    event_start_at: "2018-10-01T17:20:30+01:00",
                    event_image: "https://s3.us-east-2.amazonaws.com/gotplanstonight/atlanta_hawks.png",
                    festival: false,
                    venue_name: "Phillips Arena",
                    venue_address: "1 Phillips Dr",
                    venue_city_state_zip: "Atlanta, GA 30303",
                    price: "$35.00 - $100",
                    sports: true,
                },
                {
                    artist: "Janelle Monae",
                    special_guest: "St. Beauty",
                    concert: true,
                    event_start_at: "2018-11-19T19:20:30+01:00",
                    event_image: "https://s3.us-east-2.amazonaws.com/gotplanstonight/jm_dirty_computer.jpg",
                    festival: false,
                    venue_name: "Tabernacle",
                    venue_address: "152 Luckie St NW",
                    venue_city_state_zip: "Atlanta, GA 30303",
                    price: "$35.00",
                    sports: false,
                },
                {
                    artist: "Janet Jackson",
                    special_guest: "Daddy Yankee",
                    concert: true,
                    event_start_at: "2018-11-25T19:20:30+01:00",
                    event_image: "https://s3.us-east-2.amazonaws.com/gotplanstonight/janet-jackson-sotw.jpg",
                    festival: false,
                    venue_name: "Phillips Arena",
                    venue_address: "1 Phillips Dr",
                    venue_city_state_zip: "Atlanta, GA 30303",
                    price: "$75.00",
                    sports: false,
                },
                {
                    artist: "KING",
                    special_guest: null,
                    concert: true,
                    event_start_at: "2018-11-26T19:20:30+01:00",
                    event_image: "https://s3.us-east-2.amazonaws.com/gotplanstonight/KING.jpg",
                    event_type: 'private',
                    festival: false,
                    venue_name: "Center Stage Theater",
                    venue_address: "1374 W. Peachtree St NW",
                    venue_city_state_zip: "Atlanta, GA 30309",
                    price: "$25.00",
                    sports: false,
                },
                {
                    artist: "Moonchild f/Gregory Porter",
                    special_guest: 'Thunder Cat, Nora Jones & Robert Glasper',
                    concert: false,
                    event_start_at: "2018-12-06T19:20:30+01:00",
                    event_image: "https://s3.us-east-2.amazonaws.com/gotplanstonight/moonchild_tour.jpg",
                    festival: true,
                    venue_name: "Center Stage Theater",
                    venue_address: "1374 W. Peachtree St NW",
                    venue_city_state_zip: "Atlanta, GA 30309",
                    price: "$25.00",
                    sports: false,
                }
            ]
        }
    }

    render() {
        return (
            <div className="app">
            {(this.props.location.pathname === "/") ? 
            <Home /> :
            <Events events={this.state.allEvents}
            filter={this.props.params.filter} />}
            </div>
        )
    }
}