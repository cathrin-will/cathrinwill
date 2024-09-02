import { cn } from '@/lib/utils'

import Wrap from '@/ui/layout/wrap'

import styles from './cards.module.scss';

export default function Cards({ wrapIt = true,}:Sanity.Cards ) {
    return (
        <Wrap wrapIt={wrapIt}>
            <div className={cn(styles.cards)}>Welcome, cards!</div>
        </Wrap>
    )
}
