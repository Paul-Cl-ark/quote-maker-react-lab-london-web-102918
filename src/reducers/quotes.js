export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote]
		case 'REMOVE_QUOTE':
			return state.filter(quote => quote.id !== action.quoteId)
		case 'UPVOTE_QUOTE':
			return [...state, ...(state[state.indexOf(action.id) + 1].votes += 1)]
		case 'DOWNVOTE_QUOTE':
			return state[state.indexOf(action.id) + 1].votes > 0
				? [...state, ...(state[state.indexOf(action.id) + 1].votes -= 1)]
				: state
		default:
			return state
	}
}
