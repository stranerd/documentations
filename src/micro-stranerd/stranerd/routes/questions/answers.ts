import { QueryParams, QueryResults } from '../../../commons'
import { MediaOutput } from '../../../utils/entities'
import { AnswerEntity } from '../../entities/questions/answers'

export type AnswersRoutes = [
	{
		route: '/questions/answers/',
		description: 'Route to get list of answers'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<AnswerEntity>
	},
	{
		route: '/questions/answers/:id',
		description: 'Route to get an answer'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: AnswerEntity | null
	},
	{
		route: '/questions/answers/',
		description: 'Route to create an answer'
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
			questionId: ['is a string', 'id of question associated with the answer'],
			attachments: ['is an array of media', 'attachments associated with the answer']
		},
		response: AnswerEntity
	},
	{
		route: '/questions/answers/:id',
		description: 'Route to update an answer'
		method: 'PUT',
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
			questionId: ['is a string', 'id of question associated with the answer'],
			attachments: ['is an array of media', 'attachments associated with the answer']
		},
		response: AnswerEntity
	},
	{
		route: '/questions/answers/:id',
		description: 'Route to delete an answer'
		method: 'DELETE',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	}
]