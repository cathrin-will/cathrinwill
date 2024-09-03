import { VscVscode } from 'react-icons/vsc'

export const skillsBlockSchema = {
    name: 'skillsBlock',
    icon: VscVscode,
    type: 'object',
    fields: [
        {
            name: 'showSkills',
            type: 'boolean',
            title: 'Show Skills',
            initialValue: true,
        },
    ],
    preview: {
        prepare: () => ({
            title: 'Skills Block',
        }),
    },
}
