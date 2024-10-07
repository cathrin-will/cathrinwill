import MenuContent from './MenuContent'

export default function Menu({
    headerMenu,
    className,
}: {
    headerMenu: Sanity.Navigation
    className?: string
}) {
    return (
        <MenuContent
            className={className}
            headerMenu={headerMenu}
        />
    )
}
