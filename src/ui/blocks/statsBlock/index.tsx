'use client'
import { use, useEffect, useState } from 'react'
import { Octokit } from '@octokit/core'
import Wrap from '@/ui/layout/wrap'
import Text from '@/ui/components/text'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import styles from './stats.module.scss'
export default function StatsBlock({
    introContent,
    githubContent,
    placesWorkedStats,
    wakaContent,
    wrapIt = true,
}) {
    const [stats, setStats] = useState<Sanity.StatsData | null>(null)
    const [totalStats, setTotalStats] = useState<Sanity.TotalStatsData | null>(
        null,
    )
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN ?? process.env.NEXT_PUBLIC_GITHUB_TOKEN, // https://github.com/settings/tokens
    })

    useEffect(() => {
        const getStats = async () => {
            // https://docs.github.com/en/graphql/overview/explorer
            // https://github.com/octokit/core.js#readme

            try {
                const data: Sanity.StatsData = await octokit.graphql(`
                    {
                        viewer {
                            contributionsCollection {
                                totalPullRequestReviewContributions
                            }
                            repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
                                totalCount
                            }
                            pullRequests(first: 1) {
                                totalCount
                            }
                        }
                        rateLimit {
                            remaining
                        }
                    }
                `)

                setStats(data)
            } catch (error) {
                console.error('Error fetching stats:', error)
            }
        }

        getStats()
    }, [])
    useEffect(() => {
        const totals = placesWorkedStats.reduce(
            (acc, item) => {
                acc.totalPRs += item.totalPRs
                acc.totalPRContributions += item.totalPRContributions
                acc.repositoriesContributedTo += item.repositoriesContributedTo
                return acc
            },
            {
                totalPRs: 0,
                totalPRContributions: 0,
                repositoriesContributedTo: 0,
            },
        )

        if (stats) {
            const totalPrs =
                stats?.viewer?.pullRequests?.totalCount + totals.totalPRs
            const totalPrContributions =
                stats?.viewer?.contributionsCollection
                    ?.totalPullRequestReviewContributions +
                totals.totalPRContributions
            const repositoriesContributedTo =
                stats?.viewer?.repositoriesContributedTo?.totalCount +
                totals.repositoriesContributedTo

            setTotalStats({
                prs: totalPrs,
                reviews: totalPrContributions,
                repos: repositoriesContributedTo,
            })
        }
    }, [stats])

    return (
        <Wrap wrapIt={wrapIt}>
            <div className={cn(styles.stats)}>
                <Text content={introContent} />
                <Text content={githubContent} />
                <Text>
                    <ul>
                        <li>PRs created: {totalStats?.prs}</li>
                        <li>PRs Reviewed: {totalStats?.reviews}</li>
                        <li>
                            Repositories Contributed to: {totalStats?.repos}
                        </li>
                    </ul>
                </Text>
                <Text content={wakaContent} />
                <Text>
                    <ul>
                        <li>
                            <a
                                href='https://wakatime.com/@acwilldev'
                                target='_blank'
                                rel='noreferrer noopener'>
                                WakaTime
                            </a>{' '}
                            hours logged: 4,725 hrs 24 mins
                        </li>

                        <li>
                            Hours logged on this portfolio site
                            <Image
                                src='https://wakatime.com/badge/github/cathrin-will/cathrinwill.svg'
                                alt='wakatime'
                                width={250}
                                height={200}
                                className='inline px-4'
                            />
                        </li>
                        <li>
                            Hours logged on in different programming languages
                            since 2016
                            <Image
                                src='https://wakatime.com/share/@acwilldev/2d619ddb-efa4-4e16-abed-93d042d8cc7a.svg'
                                alt='wakatime'
                                width={793}
                                height={594}
                                className='inline p-4'
                            />
                        </li>
                    </ul>
                </Text>
            </div>
        </Wrap>
    )
}
