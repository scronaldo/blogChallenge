// initial state
const initState = {
    posts: [],
    // curPost: null /
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        // returns all posts except the redundant one
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id 
        })
        // return new state
        return {
                ...state, posts: newPosts
        }
    }

    else if (action.type === 'GET_POSTS'){
            let newPosts = action.data;
        return {
            ...state, posts: newPosts
        }

    }



    return state; // return state
}

export default rootReducer;