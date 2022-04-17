// a course is a course/subject in the specified institution, eg meg211 in unilag or mathematics in jamb

export type CourseEntity = {
	id: string,
	name: string,
	institutionId: string,
	createdAt: number,
	updatedAt: number
}
