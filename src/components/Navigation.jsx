import { Link } from "react-router-dom"
import { Covenas } from "./Covenas"
import { Covenas1 } from "./Covenas1"
import { Covenas3 } from "./Covenas3"
import { Covenas4 } from "./Covenas4"
import { Covenas5 } from "./Covenas5"
import { Covenas6 } from "./Covenas6"


export const Navigation = () => {
    return(
        <div className="container mt-4 father">
            <Link to="/gsr1000" className="links">
                <figure className="image-size">
                    <Covenas />
                    <figcaption>Suzuki GSR1000</figcaption>
                </figure>
            </Link>
            <Link to="/ktm1390" className="links">
                <figure className="image-size">
                    <Covenas1 />
                    <figcaption>KTM 1390</figcaption>
                </figure>
            </Link>
            <Link to="/kawasakih2r" className="links">
                <figure className="image-size">
                    <Covenas3 />
                    <figcaption>Kawasaki H2R</figcaption>
                </figure>
            </Link>
            <Link to="/ktmrc8" className="links">
                <figure className="image-size">
                    <Covenas4 />
                    <figcaption>KTM RC8</figcaption>
                </figure>
            </Link>
            <Link to="/bmws1000r" className="links">
                <figure className="image-size">
                    <Covenas5 />
                    <figcaption>BMW S1000R</figcaption>
                </figure>
            </Link>
            <Link to="/versys1000" className="links">
                <figure className="image-size">
                    <Covenas6 />
                    <figcaption>Kawasaki Versys 1000</figcaption>
                </figure>
            </Link>
        </div>
    )
}