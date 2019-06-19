export const deletePost = (id) => {
    // action creator func that returns action defined on argument
    return {
        type: 'DELETE_POST',
        id: id
    }

}