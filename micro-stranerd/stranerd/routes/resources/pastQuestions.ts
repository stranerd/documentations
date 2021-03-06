import { QueryParams, QueryResults } from '../../../commons'
import { PastQuestionObjEntity, PastQuestionTheoryEntity } from '../../entities/resources/pastQuestions'
import { MediaOutput } from '../../../utils/entities'

export type ObjPastQuestionsRoutes = [
	{
		route: '/resources/pastQuestions/objectives',
		description: 'Route to get list of objective pastQuestions'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<PastQuestionObjEntity>
	},
	{
		route: '/resources/pastQuestions/:id',
		description: 'Route to get an objective pastQuestion'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: PastQuestionObjEntity | null
	},
	{
		route: '/resources/pastQuestions/',
		description: 'Route to create an objective pastQuestion'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			institutionId: string,
			courseId: string,
			order: number,
			year: number,
			question: string,
			questionMedia: MediaOutput[],
			correctIndex: number,
			options: string[],
			optionsMedia: MediaOutput[][],
			explanation: string,
			explanationMedia: MediaOutput[]
		},
		validations: {
			year: ['is a number', 'year of the question'],
			order: ['is a number', 'number order of the question'],
			courseId: ['is a string', 'id of the course associated with the pastQuestion'],
			institutionId: ['is a string', 'id of the institution associated with the pastQuestion'],
			question: ['is a string', 'parsed html content is longer than 2 chars'],
			correctIndex: ['is a number', 'has to at least 0', 'is between 0 and the length of options - 1'],
			options: ['is an array of string'],
			explanation: ['is a string'],
			questionMedia: ['is an array of media'],
			optionsMedia: ['is an array of array of media', 'has to be same length of options'],
			explanationMedia: ['is an array of media'],
		},
		response: PastQuestionObjEntity
	},
	{
		route: '/resources/pastQuestions/:id',
		description: 'Route to update an objective pastQuestion'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			institutionId: string,
			courseId: string,
			order: number,
			year: number,
			question: string,
			questionMedia: MediaOutput[],
			correctIndex: number,
			options: string[],
			optionsMedia: MediaOutput[][],
			explanation: string,
			explanationMedia: MediaOutput[]
		},
		validations: {
			year: ['is a number', 'year of the question'],
			order: ['is a number', 'number order of the question'],
			courseId: ['is a string', 'id of the course associated with the pastQuestion'],
			institutionId: ['is a string', 'id of the institution associated with the pastQuestion'],
			question: ['is a string', 'parsed html content is longer than 2 chars'],
			correctIndex: ['is a number', 'has to at least 0', 'is between 0 and the length of options - 1'],
			options: ['is an array of string'],
			explanation: ['is a string'],
			questionMedia: ['is an array of media'],
			optionsMedia: ['is an array of array of media', 'has to be same length of options'],
			explanationMedia: ['is an array of media'],
		},
		response: PastQuestionObjEntity
	},
	{
		route: '/resources/pastQuestions/:id',
		description: 'Route to delete an objective pastQuestion'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {},
		validations: {},
		response: boolean
	}
]

export type TheoryPastQuestionsRoutes = [
	{
		route: '/resources/pastQuestions/theories',
		description: 'Route to get list of theory pastQuestions'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<PastQuestionTheoryEntity>
	},
	{
		route: '/resources/pastQuestions/:id',
		description: 'Route to get an theory pastQuestion'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: PastQuestionTheoryEntity | null
	},
	{
		route: '/resources/pastQuestions/',
		description: 'Route to create an theory pastQuestion'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			institutionId: string,
			courseId: string,
			order: number,
			year: number,
			question: string,
			answer: string,
			questionMedia: MediaOutput[],
			answerMedia: MediaOutput[]
		},
		validations: {
			year: ['is a number', 'year of the question'],
			order: ['is a number', 'number order of the question'],
			courseId: ['is a string', 'id of the course associated with the pastQuestion'],
			institutionId: ['is a string', 'id of the institution associated with the pastQuestion'],
			question: ['is a string', 'parsed html content is longer than 2 chars'],
			answer: ['is a string'],
			questionMedia: ['is an array of media'],
			answerMedia: ['is an array of media'],
		},
		response: PastQuestionTheoryEntity
	},
	{
		route: '/resources/pastQuestions/:id',
		description: 'Route to update an theory pastQuestion'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			institutionId: string,
			courseId: string,
			order: number,
			year: number,
			question: string,
			answer: string,
			questionMedia: MediaOutput[],
			answerMedia: MediaOutput[]
		},
		validations: {
			year: ['is a number', 'year of the question'],
			order: ['is a number', 'number order of the question'],
			courseId: ['is a string', 'id of the course associated with the pastQuestion'],
			institutionId: ['is a string', 'id of the institution associated with the pastQuestion'],
			question: ['is a string', 'parsed html content is longer than 2 chars'],
			answer: ['is a string'],
			questionMedia: ['is an array of media'],
			answerMedia: ['is an array of media'],
		},
		response: PastQuestionTheoryEntity
	},
	{
		route: '/resources/pastQuestions/:id',
		description: 'Route to delete an theory pastQuestion'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {},
		validations: {},
		response: boolean
	}
]
