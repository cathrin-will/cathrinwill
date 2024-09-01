import { Message } from '@/ui/components/message'
declare global {
    namespace Model {
        // components

        type Section = {
            children: ReactNode
            className?: string
        }

        type Container = {
            children: ReactNode
            className?: string
        }

        type Button = {
            link?: Link
            style?: 'button' | 'text' | 'plain' | false
        }

        type WrapIt = {
            children: React.ReactNode
            wrapIt?: boolean
        }

        type Lordicon = {
            icon: string
            link?: string
            text?: string
        }

        type Message = {
            type: 'error' | 'success'
            content: string
            className?: string
        }

        // stats data
        type StatsData =
            | {
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
            | undefined
        type TotalStatsData = {
            prs: number
            reviews: number
            repos: number
        }
    }
}

export {}
