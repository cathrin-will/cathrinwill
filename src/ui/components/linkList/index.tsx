import Button from '@/ui/components/button'

export default function LinkList({ label, links }: Sanity.LinkList) {
    return (
        <>
            <details className='relative'>
                <summary>{label}</summary>

                <ul className=''>
                    {links?.map((link, key) => (
                        <li key={key}>
                            <Button
                                className='link'
                                link={link}
                            />
                        </li>
                    ))}
                </ul>
            </details>
        </>
    )
}
