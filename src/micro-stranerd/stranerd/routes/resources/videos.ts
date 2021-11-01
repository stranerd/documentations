import { QueryParams, QueryResults } from '../../../commons'
import { VideoEntity } from '../../entities/resources/videos'
import { MediaOutput } from '../../../utils/entities'

export type VideosRoutes = [
	{
		route: '/resources/videos/',
		description: 'Route to get list of videos'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<VideoEntity>
	},
	{
		route: '/resources/videos/:id',
		description: 'Route to get a video'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: VideoEntity | null
	},
	{
		route: '/resources/videos/',
		description: 'Route to create a video'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isStranerdTutor'],
		inputs: {
			title: string
			description: string
			isHosted: boolean
			media: MediaOutput | null
			link: string | null
		},
		validations: {
			title: ['is a string', 'is longer than 2 chars'],
			description: ['is a string', 'is longer than 2 chars'],
			isHosted: ['is a boolean', 'true if the video is hosted on our server, false if you just pass in the link'],
			media: ['is a media if isHosted is true, is null if link is false', 'is a video'],
			link: ['is a string if isHosted is false, is null if link is true', 'is a string'],
		},
		response: VideoEntity
	},
	{
		route: '/resources/videos/:id',
		description: 'Route to update a video'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isStranerdTutor', 'isOwner'],
		inputs: {
			title: string
			description: string
			isHosted: boolean
			media: MediaOutput | null
			link: string | null
		},
		validations: {
			title: ['is a string', 'is longer than 2 chars'],
			description: ['is a string', 'is longer than 2 chars'],
			isHosted: ['is a boolean', 'true if the video is hosted on our server, false if you just pass in the link'],
			media: ['is a media if isHosted is true, is null if link is false', 'is a video'],
			link: ['is a string if isHosted is false, is null if link is true', 'is a string'],
		},
		response: VideoEntity
	},
	{
		route: '/resources/videos/:id',
		description: 'Route to delete a video'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isStranerdTutor', 'isOwner'],
		inputs: {},
		validations: {},
		response: boolean
	}
]