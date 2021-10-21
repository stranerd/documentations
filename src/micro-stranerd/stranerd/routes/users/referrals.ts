import { QueryParams, QueryResults } from '../../../commons'
import { ReferralEntity } from '../../entities/users/referrals'

export type ReferralsRoutes = [
	{
		route: '/users/referrals',
		description: 'Route to get a list of referrals'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<ReferralEntity>
	},
	{
		route: '/users/referrals/:id',
		description: 'Route to get a particular referral'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: ReferralEntity | null
	}
]