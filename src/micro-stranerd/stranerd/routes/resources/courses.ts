import { QueryParams, QueryResults } from '../../../commons'
import { CourseEntity } from '../../entities/resources/courses'

export type CoursesRoutes = [
	{
		route: '/resources/courses/',
		description: 'Route to get list of courses'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<CourseEntity>
	},
	{
		route: '/resources/courses/:id',
		description: 'Route to get a course'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: CourseEntity | null
	},
	{
		route: '/resources/courses/',
		description: 'Route to create a course'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			name: string
			institutionId: string
		},
		validations: {
			name: ['is a string', 'is longer than 2 chars'],
			institutionId: ['is a string', 'id of the institution associated with the course']
		},
		response: CourseEntity
	},
	{
		route: '/resources/courses/:id',
		description: 'Route to update a course'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			name: string
			institutionId: string
		},
		validations: {
			name: ['is a string', 'is longer than 2 chars'],
			institutionId: ['is a string', 'id of the institution associated with the course']
		},
		response: CourseEntity
	},
	{
		route: '/resources/courses/:id',
		description: 'Route to delete a course'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {},
		validations: {},
		response: boolean
	}
]