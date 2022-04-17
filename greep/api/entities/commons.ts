import { MediaOutput } from '../../commons'

export type UserBio = {
	email: string
	name: {
		first: string
		middle: string
		last: string
		full: string
	}
	firstName: string
	lastName: string
	description: string
	photo: MediaOutput | null
}