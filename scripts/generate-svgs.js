import fs from "fs";
const iconsFolder = "/assets/icons";
const iconsJsFile = "index.js";

const svgContent = (name, data) => {
    return `export const ${name} = (${data})

`;
};

if (fs.existsSync(`${iconsFolder}/${iconsJsFile}`)) {
    fs.unlinkSync(`${iconsFolder}/${iconsJsFile}`);
}

fs.writeFile(`${iconsFolder}/${iconsJsFile}`, "", (err) => {
    if (err) {
        console.error(err);
    }
    fs.readdirSync(iconsFolder).forEach((file) => {
        if (file === "index.js") return;
        fs.readFile(`${iconsFolder}/${file}`, "utf8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const iconName = file.split(".")[0];

            fs.appendFile(
                `${iconsFolder}/${iconsJsFile}`,
                svgContent(iconName, data),
                function (err) {
                    if (err) throw err;
                    // if no error
                    console.log(
                        "\x1b[32m%s\x1b[0m",
                        `${iconName} icon added to the file successfully`
                    );
                }
            );
        });
    });
});
