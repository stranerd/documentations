import { MediaOutput } from '../../../commons'

enum AuthTypes {
	google = 'google',
	email = 'email'
}

export type AuthRoles = {
	isAdmin: boolean
	isSuperAdmin: boolean
}

export interface AuthUserEntity {
	id: string
	email: string
	password: string
	description: string
	roles: AuthRoles
	name: {
		first: string
		middle: string
		last: string
	}
	photo: MediaOutput | null
	isVerified: boolean
	authTypes: AuthTypes[]
	lastSignedInAt: number
	signedUpAt: number
	allNames: {
		first: string
		middle: string
		last: string
		full: string
	}
}