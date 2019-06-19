import React, { Component, Fragment } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'
import Modal from 'react-awesome-modal';


class Post extends Component {


 

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal = () => {
        this.setState({
            visible : false
        });
    }




    
    // componentDidMount() {
 

    //     this.props.fetchPosts();
    
    // }



    // babel syntax 
    handleClick = () => {
        // call dipatch func
        let id = this.props.match.params.post_id
        console.log(id);
        
        this.props.deletePost(id);
        this.props.history.push('/') // redirect user to main page

    }


    handleChange = (event) => {
        console.log( event.target.value);
        
      }
    

    


    render() {

        let id = this.props.match.params.post_id;
        console.log(this.props.posts);
        console.log(id);
        
        let postObj = this.props.posts.find(post => {
                return post.id == id});
// !!! SELF - NOTE: HUGE. USING DOUBLE == otherwise no match (objtype != number type)

        


        // checking if post exists (if this.state.post not empty)
        // and creating post html markup assigning it to VARIABLE
        const post = postObj ? (
            <Fragment> 
            <div className="post">
                <h4 className="center">{postObj.title}</h4>
                <p>{postObj.body}</p>
                <div className="center">
                    <button className="grey btn" onClick={this.handleClick}>Delete post</button>
                    <button data-target="modal1" onClick={() => this.openModal()} className="btn modal-trigger">Edit post</button>
                </div>
            </div>

            <Modal visible={this.state.visible} width='90%' effect="fadeInUp" onClickAway={() => this.closeModal()}>
             <div className="modal-content container">
               <h4>Add commentt</h4>
                        <div className="row">
                <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    <textarea id="textarea1" rows="4" className="materialize-textarea"  />
                    <label htmlFor="textarea1">Edit</label>
                    </div>
                </div>
                </form>
            </div>
             </div>
             <div className="modal-footer">
               <a href="javascript:void(0);" className=" light-green darken-1 waves-effect waves-green btn-flat"
                >Save</a>
             </div>
           
           
           </Modal>

           
                
           </Fragment> 
        ) : (
            <div className="center">there is no post yet. Where is it? Check under the couch maybe. Or API is down. Use fallback option</div>
        )
            console.log(postObj);
            
            
        return (
                // displaying our variable with markup
            <div className="container">
                {post}

            </div>

        )

    


}
}





 const mapStateToProps = (state, ownProps) => {
    // some logic
    // let id = ownProps.match.params.post_id;
    // then return the obj (using .find to find the right post based on it's id route param)
    return {
        posts: state.posts
        }
    }




const mapDispatchToProps = (dispatch) => {
    

    return {
        deletePost: (id) => {
                    
                    
                    dispatch(deletePost(id));
        },
        
        fetchPosts: () => {
            Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
                // console.log(res.data);
                dispatch({
                    type: 'GET_POSTS',
                    data: res.data.slice(0, 15)
                })
            })
        },
        
        editPost: () => {
            console.log();
            
        }
    
    
    }
  
} 


export default connect(mapStateToProps, mapDispatchToProps)(Post);



