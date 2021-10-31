import { QueryParams, QueryResults } from '../../../commons'
import { MediaOutput } from '../../../utils/entities'
import { AnswerCommentEntity } from '../../entities/questions/answerComments'

export type AnswerCommentsRoutes = [
	{
		route: '/questions/answerComments/',
		description: 'Route to get list of answerComments'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<AnswerCommentEntity>
	},
	{
		route: '/questions/answerComments/:id',
		description: 'Route to get an answerComment'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: AnswerCommentEntity | null
	},
	{
		route: '/questions/answerComments/',
		description: 'Route to create an answerComment'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			title: string
			body: string
			questionId: string
			attachments: MediaOutput[]
		},
		validations: {
			title: ['is a string', 'parsed html content of string is longer than 2 chars'],
			body: ['is a string', 'parsed html content of string is longer than 2 chars'],
			questionId: ['is a string', 'id of question associated with the answerComment'],
			attachments: ['is an array of media', 'attachments associated with the answerComment']
		},
		response: AnswerCommentEntity
	}
]