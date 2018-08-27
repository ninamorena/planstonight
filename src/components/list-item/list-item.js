import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { hideIf, showIf } from 'react-render-helpers'
import { Image } from '../image/image'
import '../../styles/list-item.scss'

export const ListItem = ({
    artist,
    special_guest,
    event_start_at,
    event_image,
    venue_name,
    venue_address,
    venue_city_state_zip,
    price,
}) => (
    <div className="list-item">
    <div className="list-item__container">
        <div className="list-item__container__thumbnail">
        {showIf(event_image)(
                   <Image className="list-item__container__thumbnail__image"
                   altText={artist}
                   src={event_image}
                   type='thumbnail' />)}
        </div>
        <div className="list-item__container__content-wrapper">
            <div className="list-item__container__content-wrapper__primary-text">
                <div className="list-item__container__content-wrapper__primary-text__artist">
                {artist}
                </div>
                <div className="list-item__container__content-wrapper__primary-text__special-guest">
                    {special_guest}
                </div>
            </div>
            <div className="list-item__container__content-wrapper__secondary-text">
            <div className="list-item__container__content-wrapper__secondary-text__event-time">
                {moment(event_start_at).format('ddd - MM/DD/YY')}
            </div>
            <div className="list-item__container__content-wrapper__secondary-text__venue-name">
                {venue_name}
            </div>
            <div className="list-item__container__content-wrapper__secondary-text__venue-address">
                {venue_address}, {venue_city_state_zip}
            </div>
    </div>

        </div>

    <div className="list-item__price">
       {price}
    </div>
    </div>
</div>
)

ListItem.propTypes = {
    special_guest: PropTypes.string,
}