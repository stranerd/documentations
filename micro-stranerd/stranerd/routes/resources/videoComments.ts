import { QueryParams, QueryResults } from '../../../commons'
import { VideoCommentEntity } from '../../entities/resources/videoComments'

export type VideoCommentsRoutes = [
	{
		route: '/resources/videoComments/',
		description: 'Route to get list of videoComments'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<VideoCommentEntity>
	},
	{
		route: '/resources/videoComments/:id',
		description: 'Route to get a videoComment'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: VideoCommentEntity | null
	},
	{
		route: '/resources/videoComments/',
		description: 'Route to create a videoComment'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			body: string
			videoId: string
		},
		validations: {
			body: ['is a string', 'is longer than 2 chars'],
			videoId: ['is a string', 'id of the institution associated with the video']
		},
		response: VideoCommentEntity
	}
]