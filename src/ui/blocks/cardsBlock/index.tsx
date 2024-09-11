'use client'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import styles from './cards.module.scss'

export default function Cards({
    content,
    cards: initialCards,
    wrapIt = true,
}: Sanity.cardsBlock) {
    const [cards, setCards] = useState(initialCards)

    const eggTexts = [
        '🥚 You found my pointless easter egg! 🥚',
        "You just can't help yourself, can you?",
        'Another pointless egg for you! 🥚',
        "You're really into these eggs, huh? 🥚",
        'How many more of these will you click? 🥚',
        'This is the last egg. 🥚',
        'Ok I lied. 🥚',
        'This one really is! 🥚',
        '🥚',
        '🐣',
        '🥚',
        '🐣',
    ]

    const [eggTextIndex, setEggTextIndex] = useState(0)

    const handleRemoveCard = (indexToRemove: number) => {
        setCards(cards?.filter((_, index) => index !== indexToRemove))
    }

    const changeEggText = () => {
        if (eggTextIndex === 10) {
            setEggTextIndex(11)
        } else if (eggTextIndex === 11) {
            setEggTextIndex(10)
        } else {
            setEggTextIndex((prevIndex) => (prevIndex + 1) % eggTexts.length)
        }
    }

    return (
        <Wrap wrapIt={wrapIt}>
            <div className={cn(styles.cards)}>
                <div className={cn(styles.intro)}>
                    <Text
                        content={content}
                        className={cn('mb-1')}
                    />
                </div>
                <div className={cn(styles.scroll)}>
                    {cards?.map((card, key) => (
                        <div
                            className={cn(styles.scrollItem)}
                            key={key}>
                            <div className={cn(styles.card)}>
                                <div className={cn(styles.tools)}>
                                    <button
                                        className={cn(styles.circle)}
                                        onClick={() => handleRemoveCard(key)}>
                                        <span className='sr-only'>
                                            red circle/ close button
                                        </span>
                                        <span
                                            className={cn(
                                                styles.box,
                                                styles.red,
                                            )}></span>
                                    </button>
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
                                        <span className='absolute top-3 right-3 text-xs'>
                                            $ {card.type} Work
                                        </span>

                                        <dl className='flex gap-1 flex-col'>
                                            <dt className='text-green-400'>
                                                Site type:
                                            </dt>
                                            <dd className='mb-4'>
                                                {card.siteType}
                                            </dd>

                                            <dt className='text-green-400'>
                                                Description:
                                            </dt>
                                            <dd className='mb-4'>
                                                {card.details}
                                            </dd>
                                            <dt>
                                                <span className='text-green-400'>
                                                    Tech Stack:
                                                </span>{' '}
                                                {card.techStack}
                                            </dt>
                                            <dd className='mb-4'>
                                                <span className='text-green-400'>
                                                    [{' '}
                                                </span>
                                                {card.tech.map(
                                                    (tech, techKey) => (
                                                        <span key={techKey}>
                                                            {tech}
                                                            {techKey !==
                                                                card.tech
                                                                    .length -
                                                                    1 && (
                                                                <span className='text-green-400'>
                                                                    {' '}
                                                                    |{' '}
                                                                </span>
                                                            )}
                                                        </span>
                                                    ),
                                                )}
                                                <span className='text-green-400'>
                                                    {' '}
                                                    ]
                                                </span>
                                            </dd>
                                            <dt className='text-green-400'>
                                                My role:
                                            </dt>
                                            <dd className='mb-4'>
                                                {card.myRole}
                                            </dd>

                                            <dt className='text-green-400 grow-1'>
                                                Team:
                                            </dt>
                                            <dd>
                                                <ul className='text-sm list-none'>
                                                    {card.team.map(
                                                        (member, memberKey) => (
                                                            <li key={memberKey}>
                                                                {member}{' '}
                                                                <span className='text-green-400'>
                                                                    ✓
                                                                </span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </dd>
                                        </dl>
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ))}
                    {cards?.length === 0 && (
                        <div className={cn(styles.card)}>
                            <div className={cn(styles.tools)}>
                                <button
                                    className={cn(styles.circle)}
                                    onClick={changeEggText}>
                                    <span className='sr-only'>
                                        red circle/ close button
                                    </span>
                                    <span
                                        className={cn(
                                            styles.box,
                                            styles.red,
                                        )}></span>
                                </button>
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
                                <Text className={cn('text-center')}>
                                    <h3>{eggTexts[eggTextIndex]}</h3>
                                </Text>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Wrap>
    )
}
