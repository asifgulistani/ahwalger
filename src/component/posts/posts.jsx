import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import { postsUrl, usersUrl } from '../../config';
import Create from './create';

class Posts extends Component {
    state = { 
        posts:[],
        users:[]
    }

    async componentDidMount() {

        const { data: posts } = await axios.get(postsUrl);
        const { data: users } = await axios.get(usersUrl);
        this.setState({posts, users});
    }

    renderUser(userId){
        const { users } = this.state;
        const user = users.find(u => u.id === userId);
        return (
            <small>{user.name} ({user.email})</small>
        );
    }

    handleNewPost = async (e) => {
        e.preventDefault();
        const obj = {
            title: 'New title',
            body: 'New Body',
            userId: 2,
        }

        const { data: post } = await axios.post(postsUrl, obj);
        
        const posts = [post, ...this.state.posts];
        this.setState({posts});
    }

    currentRoute = () => {
        return this.props.location.pathname === '/posts/create';
    }

    render() { 
        const { posts } = this.state;
        return ( 
            <React.Fragment>
                <Switch>
                    <Route path="/posts/create" render={()=> <Create onPost={this.handleNewPost} {...this.props}/>} />
                </Switch>
                <div className="container mb-2">
                    <div className="row justify-content-between">
                        <span>
                        </span>
                        {this.currentRoute() || <Link to="/posts/create" className="btn btn-primary">Create</Link>}
                    </div>
                </div>
                {posts.map(p => (
                    <div key={p.id} className="list-group">
                        <li className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">
                                    <Link to={'/posts/' + p.id}>{p.title}</Link>
                                </h5>
                                <small>
                                    <button className="btn btn-sm btn-dark">
                                        U
                                    </button>
                                </small>
                            </div>
                            <p className="mb-1">
                                {p.body}
                            </p>
                            <div className="d-flex w-100 justify-content-between">
                                <small>{this.renderUser(p.userId)}</small>
                                <button className="btn btn-sm btn-danger">
                                    X
                                </button>
                            </div>
                        </li>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Posts;