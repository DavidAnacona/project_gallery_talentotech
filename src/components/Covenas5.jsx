import covenas1 from "../assets/img/s1000r.jpg"
import PropTypes from 'prop-types'

export const Covenas5 = ( {className} ) => {
    return(
        <div className={`image-container ${className}`}>
            <img src={covenas1} alt="Moto de alto cilindraje Bmw" className="image"/>
        </div>
    )
}

Covenas5.prototype = {
    className: PropTypes.string
} 