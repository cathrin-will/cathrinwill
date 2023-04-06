import Icon from './index'

export default {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        status: {
            type: 'alpha',
        },
    },
}

const Template = (args) => <Icon {...args} />

export const icon = Template.bind({})
icon.args = {
    name: 'close',
    color: 'black',
}
