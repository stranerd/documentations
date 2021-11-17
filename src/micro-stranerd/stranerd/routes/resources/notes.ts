import { QueryParams, QueryResults } from '../../../commons'
import { NoteEntity } from '../../entities/resources/notes'
import { MediaOutput } from '../../../utils/entities'

export type NotesRoutes = [
	{
		route: '/resources/notes/',
		description: 'Route to get list of notes'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<NoteEntity>
	},
	{
		route: '/resources/notes/:id',
		description: 'Route to get a note'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: NoteEntity | null
	},
	{
		route: '/resources/notes/',
		description: 'Route to create a note'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isStranerdTutor'],
		inputs: {
			title: string
			description: string
			tags: string[]
			isHosted: boolean
			media: MediaOutput | null
			link: string | null
		},
		validations: {
			title: ['is a string', 'is longer than 2 chars'],
			description: ['is a string', 'is longer than 2 chars'],
			tags: ['is an array of string', 'tags associated with the note'],
			isHosted: ['is a boolean', 'true if the note is hosted on our server, false if you just pass in the link'],
			media: ['is a media if isHosted is true, is null if link is false', 'is a note'],
			link: ['is a string if isHosted is false, is null if link is true', 'is a string'],
		},
		response: NoteEntity
	},
	{
		route: '/resources/notes/:id',
		description: 'Route to update a note'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isStranerdTutor', 'isOwner'],
		inputs: {
			title: string
			description: string
			tags: string[]
			isHosted: boolean
			media: MediaOutput | null
			link: string | null
		},
		validations: {
			title: ['is a string', 'is longer than 2 chars'],
			description: ['is a string', 'is longer than 2 chars'],
			tags: ['is an array of string', 'tags associated with the note'],
			isHosted: ['is a boolean', 'true if the note is hosted on our server, false if you just pass in the link'],
			media: ['is a media if isHosted is true, is null if link is false', 'is a note'],
			link: ['is a string if isHosted is false, is null if link is true', 'is a string'],
		},
		response: NoteEntity
	},
	{
		route: '/resources/notes/:id',
		description: 'Route to delete a note'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isStranerdTutor', 'isOwner'],
		inputs: {},
		validations: {},
		response: boolean
	}
]
