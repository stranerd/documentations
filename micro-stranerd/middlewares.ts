export const middlewares = {
	'isAuthenticated': 'the request must have a valid access token in the req header Access-Token',
	'isAdminInSpecifiedApp': `
		auth user must have the admin role set to true
		in roles.{app}.isAdmin where app is the app provided in the request
	`,
	'isStranerdAdmin': 'auth user must have the admin role set to true in roles.stranerd.isAdmin',
	'isStranerdTutor': 'auth user must have the admin role set to true in roles.stranerd.isTutor',
	'specifiedTutorIdIsAStranerdTutor': `
		user associated with the tutorId in the req must have the tutor role
		set to true in roles.stranerd.isTutor
	`,
	'isOwner': 'auth user must be the owner of the entity being updated or deleted in PUT/DELETE requests'
}