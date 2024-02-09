const accordion = {
    name: 'accordion',
    title: 'Accordion',
    type: 'object',
    fields: [
        {
            name: 'summary',
            title: 'Summary',
            type: 'string',
        },
        {
            name: 'detail',
            title: 'Detail',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}

export default accordion
