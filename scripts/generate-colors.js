import fs from "fs";
import config from "../tailwind.config.js";

const colorStoriesFile = "./stories/design-system/colours.stories.mdx";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

try {
    console.log("Starting colour stories generation");
    if (!config.theme.colors) {
        throw "Error: No colours found";
    }
    if (fs.existsSync(colorStoriesFile)) {
        console.log(fs.existsSync(colorStoriesFile));
        fs.unlinkSync(colorStoriesFile);
        console.log("Colour stories file deleted");
    }

    const colorItemTemplate = (colorGroup) => {
        const key = colorGroup[0];
        const values = colorGroup[1];
        let output = `${key}: '${values}'`;

        if (typeof values === "object") {
            const concatColours = Object.entries(values)
                .map((colorValues) => {
                    return `${colorValues[0]}: '${colorValues[1]}'`;
                })
                .join(",");
            output = concatColours;
        }

        return `
<ColorItem title="${capitalizeFirstLetter(
            key
        )}" subtitle="${capitalizeFirstLetter(key)}" colors={{ ${output} }} />
`;
    };

    const colourStories = (colors) => {
        return `import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs'

<Meta title="Design System/Colours" />

# Colours

<ColorPalette>
    ${Object.entries(colors)
        .map((colorGroup) => {
            return colorItemTemplate(colorGroup);
        })
        .join("")}
</ColorPalette>`;
    };

    const storyOutput = colourStories(config.theme.colors);

    fs.writeFile(colorStoriesFile, storyOutput, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(
                "Colour stories generated successfully!",
                "color: green"
            );
        }
    });
} catch (err) {
    console.error(err);
}
