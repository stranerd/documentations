import { MediaOutput } from '../commons'

enum AuthTypes {
	google = 'google',
	email = 'email'
}

export type AuthRoles = {
	stranerd: {
		isAdmin: boolean
		isTutor: boolean
	}
}

export interface AuthUserEntity {
	id: string
	email: string
	password: string
	description: string
	roles: AuthRoles
	firstName: string
	lastName: string
	photo: MediaOutput | null
	referrer: string | null
	isVerified: boolean
	authTypes: AuthTypes[]
	lastSignedInAt: number
	signedUpAt: number
}