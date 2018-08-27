import { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import '../../styles/image.scss'

export class Image extends Component {
    render() {
        return (
            <div className="image"
            onClick={this.props.onClick}>
            <img className={classnames(
                'image__image',
                `image__image--${this.props.type}`,
                this.props.className
            )}
                  src={this.props.src} />
            </div>
        )
    }
}

Image.propTypes = {
    altText: PropTypes.string,
    backgroundPosition: PropTypes.string,
    className: PropTypes.string,
    fillContainer: PropTypes.bool,
    headerText: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string,
    type: PropTypes.oneOf([
        'header',
        'inline',
        'pageBackground',
        'thumbnail'
    ])
}

Image.defaultProps = {
    backgroundPosition: 'center center',
    fillContainer: false
}