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
            style?: 'button' | 'text' | 'link' | false
        }

        type wrapIt = {
            children: React.ReactNode
            wrapIt?: boolean
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
