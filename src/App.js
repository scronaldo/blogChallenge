import React, {Component} from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Axios from 'axios';
import { connect } from 'react-redux';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

// Self-reminder: App component is rendered by ReactDOM (via index.js) in index.html

class App extends Component {



     
  componentDidMount() {
 

    this.props.fetchPosts();

}

  render () {
    return (
        <BrowserRouter>
        <div className="App">
        
            <Navbar />
            <Switch>
            {/* route logic and using Switch wrapper not to procceed to other routes after match one  */}
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>

      </BrowserRouter>
    );
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

export default connect(mapDispatchToProps)(App)
// export default App;
