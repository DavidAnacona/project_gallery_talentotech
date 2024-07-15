import covenas1 from "../assets/img/h2r.jpg"
import PropTypes from 'prop-types'

export const Covenas3 = ( {className} ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src={covenas1} alt="Moto de alto cilindraje Kawasaki" className="image"/>
        </div>
    )
}

Covenas3.prototype = {
    className: PropTypes.string
} 