'use client'

import { useEffect, useState } from 'react'
import { Octokit } from '@octokit/core'
import Section from '@/ui/layout/section'
import Container from '@/ui/layout/container'
import Text from '@/ui/components/text'
import Image from 'next/image'

interface StatsData {
    viewer: {
        contributionsCollection: {
            totalPullRequestReviewContributions: number
        }
        pullRequests: {
            totalCount: number
        }
        repositoriesContributedTo: {
            totalCount: number
        }
    }
    rateLimit: {
        remaining: number
    }
}

export default function Stats() {
    const [stats, setStats] = useState<StatsData | null>(null)
    const superrealStats = {
        repositoriesContributedTo: 2,
    }
    const webexStats = {
        repositoriesContributedTo: 3,
    }
    const purpleStats = {
        repositoriesContributedTo: 20,
    }
    const rawnetStats = {
        totalPRs: 1702,
        totalPRContributions: 863,
        repositoriesContributedTo: 104,
    }

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN, // https://github.com/settings/tokens
    })

    useEffect(() => {
        const getStats = async () => {
            // https://docs.github.com/en/graphql/overview/explorer
            // https://github.com/octokit/core.js#readme

            try {
                const data: StatsData = await octokit.graphql(`
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

    return (
        <Section>
            <Container>
                <Text>
                    <h1>Data is fun</h1>
                    <p>
                        Unfortunately I didn&lsquo;t actually have the
                        forethought to keep track from when I first started
                        coding back in 2007 so these stats are more fun than
                        accuracy. They&lsquo;re here to be enjoyed and as a
                        rough representation of my career, and so I could play
                        with them.
                    </p>
                    <h2>Career Stats</h2>
                    <ul>
                        <li>Years studying web development: 4</li>
                        <li>Number of agencies worked at: 4</li>
                        <li>Years in management: 4</li>
                        <li>Contract projects worked on: 5</li>
                        <li>Developers managed: 13</li>
                        <li>Total years at digital agencies: 13</li>
                        <li>Total Years coding: 17</li>
                    </ul>
                    <h2>Github Stats</h2>
                    <p>Joined Github on 11th of December 2012</p>
                    <ul>
                        <li>
                            Total PRs:{' '}
                            {~~(stats?.viewer?.pullRequests?.totalCount ?? 0) +
                                rawnetStats.totalPRs}
                        </li>
                        <li>
                            Total PR Reviews:{' '}
                            {~~(
                                stats?.viewer?.contributionsCollection
                                    ?.totalPullRequestReviewContributions ?? 0
                            ) + rawnetStats.totalPRContributions}
                        </li>
                        <li>
                            Repositories Contributed to:{' '}
                            {~~(
                                stats?.viewer?.repositoriesContributedTo
                                    ?.totalCount ?? 0
                            ) + rawnetStats.repositoriesContributedTo}
                        </li>
                    </ul>

                    <h2>Waka stats</h2>
                    <ul>
                        <li>
                            <a href='https://wakatime.com/@acwilldev'>
                                WakaTime
                            </a>{' '}
                            hours logged: 4,725 hrs 24 mins
                        </li>
                        <li>
                            Hours logged on in different programming languages
                            since 2016
                            <Image
                                src='https://wakatime.com/share/@acwilldev/2d619ddb-efa4-4e16-abed-93d042d8cc7a.svg'
                                alt='wakatime'
                                width={793}
                                height={594}
                            />
                        </li>
                        <li>
                            Hours logged on this portfolio site
                            <Image
                                src='https://wakatime.com/badge/github/cathrin-will/cathrinwill.svg'
                                alt='wakatime'
                                width={250}
                                height={200}
                            />
                        </li>
                    </ul>
                </Text>
            </Container>
        </Section>
    )
}
