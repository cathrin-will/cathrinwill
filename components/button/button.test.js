/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Button from "./index";

it("Button renders without crashing", () => {
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Button>Button</Button>);
});
