export const h2withParagraph = [
    {
        _type: 'block',
        style: 'h2',
        children: [
            {
                _type: 'span',
                text: 'Sanity Content',
            },
        ],
    },

    {
        _type: 'block',
        style: 'normal',
        children: [
            {
                _type: 'span',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si ',
            },
        ],
    },
]

export const oneParagraph = [
    {
        _type: 'block',
        style: 'normal',
        children: [
            {
                _type: 'span',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, si ',
            },
        ],
    },
]

export const imageExample = {
    _type: 'image',
    asset: {
        _ref: 'image-ea22726a21f2be9d837330c612553449fd3be59d-600x400-svg',
        _type: 'reference',
    },
}
