export const middlewares = {
	'isAuthenticated': 'the request must have a valid access token in the req header Access-Token',
	'isAdmin': 'auth user must have the admin role set to true in roles.stranerd.isAdmin',
	'isOwner': 'auth user must be the owner of the entity being updated or deleted in PUT/DELETE requests'
}