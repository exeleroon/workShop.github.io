import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    render() {
        const {bgColor, text, toggleBtn, className} = this.props
        return (
            <button onClick={toggleBtn} style={{background:bgColor}} className={className}>{text}</button>
        )
    }
}

Button.propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string,
    toggleModal: PropTypes.func,
    className: PropTypes.string
}

export default Button 