import React, { Component } from 'react'   
import Axios from 'axios'
import { Link } from 'react-router-dom'
import dev from '../dev.jpg'
import { connect } from 'react-redux'

// Home component
class Home extends Component {

//     state = {
//         // we gonna save posts from API to array in state
//         posts: [ ]
//     }

// // MOUNTING: componentWillMount - render() - componentDidMount
// componentDidMount() {
//     Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
//         console.log(res); // promise value is object with api response
//         // assign received posts to array
//         this.setState({
//             // i want to get only 10 posts though so i slice it out from 0 to 10 element
//             posts: res.data.slice(0, 15)
//         })
        
//     })
// }    

componentDidMount() {


    this.props.fetchPosts();

}



render () {
    const posts = this.props.posts;

    // variable to contain markup and be displayed
    const postList = posts.length ? (
        
        posts.map( post => {
            return (
                <div className="post card" key={post.id}>
                <img src={dev} className="thumb" alt="thumbnail"/>
                    <div className="card-content">
                        <Link to={ `/${post.id}`}><span className="card-title">{post.title}</span></Link>
                       
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })


    ) : ( <div className="center">No posts to show! Maybe API died.</div>);
 
   


    return (
        <div className="container">
            <h4 className="center">HOME</h4>
                {postList}
            </div>
    )
}

} 

// mapStateToProps takes current state (store) argument that represent the reducx store
const mapStateToProps = (state) => {
     return {
         posts: state.posts
     }
}

const mapDispatchToProps = (dispatch) => {
    

    return {
    
        fetchPosts: () => {
            Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                // console.log(res.data);
                dispatch({
                    type: 'GET_POSTS',
                    data: res.data.slice(0, 15)
                })
            })
        }

    }
} 



export default connect(mapStateToProps, mapDispatchToProps)(Home)