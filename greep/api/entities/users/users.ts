import { UserBio } from '../commons'
import { AuthRoles } from '../auth/users'

export interface UserEntity {
	id: string
	bio: UserBio
	roles: AuthRoles
	status: {
		connections: string[]
		lastUpdatedAt: number
	}
	dates: {
		createdAt: number
		deletedAt: number | null
	}
}