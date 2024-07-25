import type { StructureResolver } from 'sanity/structure'
import { singleton, group } from './../utils'
import { VscServerProcess } from 'react-icons/vsc'
export const structure: StructureResolver = (S) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            singleton(S, 'Site', 'siteDetail').icon(VscServerProcess),
            S.documentTypeListItem('navigation'),
            S.divider(),
            S.documentTypeListItem('page').title('Pages'),
            S.divider(),

            group(S, 'Forms', [
                S.documentTypeListItem('formSubmission').title(
                    'Form Submissions',
                ),
                S.divider(),
                S.documentTypeListItem('form').title('Forms'),
            ]),
        ])
