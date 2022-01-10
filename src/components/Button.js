import PropTypes from 'prop-types'

const Button = ({color, text, func}) => {
    return (
        <button className='btn' style=
        {{backgroundColor: color}} onClick={func}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    func: PropTypes.func
}

export default Button
