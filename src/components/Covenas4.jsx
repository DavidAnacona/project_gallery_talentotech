import covenas1 from "../assets/img/rc8.jpg"
import PropTypes from 'prop-types'

export const Covenas4 = ( {className} ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src={covenas1} alt="Moto de alto cilindraje Ktm" className="image"/>
        </div>
    )
}

Covenas4.prototype = {
    className: PropTypes.string
} 