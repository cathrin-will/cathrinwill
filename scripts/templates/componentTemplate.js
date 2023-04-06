const template = (
    componentName,
    componentKebabCase
) => `import propTypes from "prop-types"
import styles from "./${componentKebabCase}.module.scss";

interface Props {
    prop: any;
}

const ${componentName} = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className={styles['${componentKebabCase}']}>${componentName}</div>
    );
}

${componentName}.propTypes = {
    prop: propTypes.any,
}

export default ${componentName}`
export default template
