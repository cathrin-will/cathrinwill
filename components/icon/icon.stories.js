import Icon from "./index";

export default {
    title: "WIP/Components/Icon",
    component: Icon,
    parameters: {
        status: {
            type: "beta",
        },
    },
};

const Template = (args) => <Icon {...args} />;

export const icon = Template.bind({});
icon.args = {
    name: "menu",
    color: "internationalOrange",
};
