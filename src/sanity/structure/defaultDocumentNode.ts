import type { DefaultDocumentNodeResolver } from 'sanity/structure'
import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType },
) => {
    switch (schemaType) {
        case `formSubmission`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(DocumentsPane)
                    .options({
                        query: `*[_type == "form" && _id == $id]`,
                        params: { id: `id` },
                        options: { perspective: 'previewDrafts' },
                    })
                    .title('Original form'),
            ])

        case `form`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(DocumentsPane)
                    .options({
                        query: '*[_type == "formSubmission" && form._ref == $id]',
                        params: { id: '_id' },
                        options: { perspective: 'previewDrafts' },
                    })
                    .title('Submissions'),
            ])
        default:
            return S.document().views([S.view.form()])
    }
}
