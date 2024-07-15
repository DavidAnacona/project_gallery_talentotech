import covenas1 from "../assets/img/1390.jpg"
import PropTypes from 'prop-types'

export const Covenas1 = ( {className} ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src={covenas1} alt="Moto de alto cilindraje Ktm" className="image"/>
        </div>
    )
}

Covenas1.prototype = {
    className: PropTypes.string
} 