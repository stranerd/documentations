import { RankTypes } from '../../commons'

enum CountStreakBadges {
	NewQuestion = 'NewQuestion',
	NewAnswer = 'NewAnswer',
	NewTag = 'NewTag',
	NewAnswerComment = 'NewAnswerComment',
	NewAnswerVote = 'NewAnswerVote',
	GiveBestAnswer = 'GiveBestAnswer',
	GetBestAnswer = 'GetBestAnswer',
	AttendSession = 'AttendSession',
	HostSession = 'HostSession'
}

enum CoinBadges {
	SpendBronze = 'SpendBronze',
	SpendGold = 'SpendGold'
}

export interface BadgeEntity {
	id: string
	userId: string
	data: {
		count: Record<CountStreakBadges, { value: number }>
		streak: Record<CountStreakBadges, { value: number, longestStreak: number, lastEvaluatedAt: number }>
		coin: Record<CoinBadges, { value: number }>
	}
	badges: {
		count: Record<CountStreakBadges, number[]>
		streak: Record<CountStreakBadges, number[]>
		coin: Record<CoinBadges, number[]>
		rank: RankTypes[]
	}
	allBadges: {
		rankBadges: { name: RankTypes, key: string, levelName: RankTypes, level: number }[]
		coinBadges: { name: string, key: string, levelName: string, level: number }[]
		countBadges: { name: string, key: string, levelName: string, level: number }[]
		streakBadges: { name: string, key: string, levelName: string, level: number }[]
	}
	createdAt: number
	updatedAt: number
}