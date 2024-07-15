import covenas1 from "../assets/img/versys1000.jpg"
import PropTypes from 'prop-types'

export const Covenas6 = ( {className} ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src={covenas1} alt="Moto de alto cilindraje Kawasaki" className="image"/>
        </div>
    )
}

Covenas6.prototype = {
    className: PropTypes.string
} 