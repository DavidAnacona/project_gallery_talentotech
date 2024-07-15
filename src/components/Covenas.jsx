import covenas1 from "../assets/img/gsr1000.jpg"
import PropTypes from 'prop-types'

export const Covenas = ( {className} ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src={covenas1} alt="Moto de alto cilindraje Suzuki" className="image"/>
        </div>
    )
}

Covenas.prototype = {
    className: PropTypes.string
} 