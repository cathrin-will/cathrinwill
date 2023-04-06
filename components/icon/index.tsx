import propTypes from 'prop-types'
import { ReactSVG } from 'react-svg'
import styles from './icon.module.scss'

interface Props {
    name: string
    className?: string
    iconClass?: string
    onClick?: any
}

const Icon = ({ name, className, iconClass, onClick }: Props) => {
    return (
        <ReactSVG
            afterInjection={(error) => {
                if (error) {
                    console.error(error)
                    return
                }
            }}
            beforeInjection={(svg) => {
                svg.classList.add(`${styles['icon']}`)

                if (iconClass) {
                    svg.classList.add(`${styles[`icon--${iconClass}`]}`)
                }
            }}
            className={className}
            evalScripts="always"
            loading={() => <span>...</span>}
            onClick={onClick ? onClick : () => false}
            src={`/assets/icons/${name}.svg`}
        />
    )
}

Icon.propTypes = {
    name: propTypes.string.isRequired,
    className: propTypes.string,
    iconClass: propTypes.string,
    onClick: propTypes.func,
}

export default Icon
