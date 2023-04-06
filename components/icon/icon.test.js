/**
 * @jest-environment jsdom
 */

import { createRoot } from "react-dom/client";
import Icon from "./index";

it("Icon renders without crashing", () => {
    const data = {
        name: "close",
    };
    const container = document.createElement("div");
    const root = createRoot(container);
    root.render(<Icon {...data} />);
});
