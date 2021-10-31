export type ReportsRoutes = [
	{
		route: '/payments/stripe/coins',
		description: 'Route to initiate buying coins with stripe. It creates a stripe payment intent and a payment entity as well'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			amount: number, // Paying 1 dollar would require an amount of 100, same with other currencies
			gold: number
			bronze: number
			currency: 'USD' | 'NGN'
		},
		validations: {
			amount: 'is a number'
			gold: 'is a number'
			bronze: 'is a number'
			currency: 'is one of the supported currencies'
		},
		response: {
			id: string // id of the stripe payment intent
			clientSecret: string // client secret of the stripe payment intent
		}
	},
	{
		route: '/payments/stripe/verify',
		description: 'Route to confirm payment of a stripe payment and a payment entity'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			intentId: string
		},
		validations: {
			intentId: ['is a string', 'the id of the stripe payment intent returned from the first route after payment is completed']
		},
		response: boolean
	}
]