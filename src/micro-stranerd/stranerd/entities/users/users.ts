import { RankTypes, UserBio } from '../../commons'

export interface UserEntity {
	id: string
	bio: UserBio
	roles: {
		stranerd: {
			isAdmin: boolean
			isTutor: boolean
		}
	}
	account: {
		score: number
		coins: {
			bronze: number
			gold: number
		},
		meta: {
			questions: number
			answers: number
			bestAnswers: number
			answerComments: number
			sessions: number
			tutorSessions: number
		}
		streak: {
			count: number,
			longestStreak: number,
			lastEvaluatedAt: number
		}
		ratings: {
			total: number
			count: number
		}
	}
	status: {
		connections: string[]
		lastUpdatedAt: number
	}
	tutor: {
		tags: Record<string, number>
		strongestSubject: string | null,
		weakerSubjects: string[]
	}
	session: {
		currentSessions: string[]
		currentTutorSessions: string[]
		requests: string[]
		lobby: string[]
	}
	dates: {
		createdAt: number
		deletedAt: number | null
	}
	rankProgress: number
	rank: UserRank
	nextRank: UserRank | null
}

export interface UserRank {
	id: RankTypes,
	score: number,
	level: number
}
