import { UserBio } from '../../commons'

enum ReportType {
	users = 'users',
	questions = 'questions',
	answers = 'answers'
}

export interface ReportEntity {
	id: string,
	reporterId: string
	reporterBio: UserBio
	reportedId: string
	message: string
	createdAt: number
	updatedAt: number
}

/*
 The report entity can be of any of the format: UserReportEntity, QuestionReportEntity or AnswerReportEntity
 */

export interface UserReportEntity extends ReportEntity {
	type: ReportType.users,
	reported: {
		bio: UserBio
		userId: string
	}
}

export interface QuestionReportEntity extends ReportEntity {
	type: ReportType.questions,
	reported: {
		body: string
		userId: string
	}
}

export interface AnswerReportEntity extends ReportEntity {
	type: ReportType.answers,
	reported: {
		title: string
		body: string
		questionId: string
		userId: string
	}
}