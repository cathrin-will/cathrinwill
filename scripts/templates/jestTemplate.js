const componentPascalCase = (componentName) => {
    const lowerCase = componentName.toLowerCase()
    const capitalise = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
    return capitalise.replace(/-(.)/g, function (match, group1) {
        return group1.toUpperCase()
    })
}

const template = (componentName) => `/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import ${componentName} from './index';

it("${componentName} renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<${componentName} />);
});`

export default template
