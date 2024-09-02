import { cn } from '@/lib/utils'

import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import styles from './cards.module.scss'

export default function Cards({
    content,
    cards,
    wrapIt = true,
}: Sanity.cardsBlock) {
    console.log(cards)

    return (
        <Wrap wrapIt={wrapIt}>
            <div className={cn(styles.cards)}>
                <Text
                    content={content}
                    className={cn('mb-1')}
                />
                <div className={cn(styles.scroll)}>
                    {cards?.map((card, key) => (
                        <div className={cn(styles.scrollItem)}>
                            <div
                                className={cn(styles.card)}
                                key={key}>
                                <div className={cn(styles.tools)}>
                                    <div className={cn(styles.circle)}>
                                        <span
                                            className={cn(
                                                styles.box,
                                                styles.red,
                                            )}></span>
                                    </div>
                                    <div className={cn(styles.circle)}>
                                        <span
                                            className={cn(
                                                styles.box,
                                                styles.yellow,
                                            )}></span>
                                    </div>
                                    <div className={cn(styles.circle)}>
                                        <span
                                            className={cn(
                                                styles.box,
                                                styles.green,
                                            )}></span>
                                    </div>
                                </div>
                                <div className={cn(styles.content)}>
                                    <Text>
                                        {card.type}
                                        {card.siteType}
                                        {card.details}
                                        {card.myRole}
                                        {card.techStack}
                                        {card.team}
                                    </Text>
                                    {/* <Text content={card.tech} /> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrap>
    )
}
