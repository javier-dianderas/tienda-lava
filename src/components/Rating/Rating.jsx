import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarEmpty} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Rating = ({scale, value}) => {

    const controlScale = 5
    const sc = parseInt(scale)
    const val = parseFloat(value)

    const roundedValue = Math.round(((val / sc) * controlScale) * 2) / 2

    console.log("value:",value)
    console.log("roundedValue",roundedValue)

    return (
        <div>

            {[1, 2, 3, 4, 5].map((star) => {
                if (roundedValue >= star) {
                    // estrella llena
                    return <FontAwesomeIcon key={star} icon={faStar} />
                }

                if (roundedValue >= star - 0.5) {
                    // media estrella
                    return <FontAwesomeIcon key={star} icon={faStarHalfStroke} />
                }

                // estrella vacía
                return <FontAwesomeIcon key={star} icon={faStarEmpty} />
            })}
        </div>
    )
}

export default Rating