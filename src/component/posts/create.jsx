import React, { Component } from 'react';

class Create extends Component {
    state = {
        posts: {
            title: '',
            body: ''
        }
    }

    render() { 
        return ( 
            <form onSubmit={this.props.onPost}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title here..."/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Descriptions here..." rows="3"></textarea>
                </div>
                <button className="btn btn-primary">
                    Post
                </button>
            </form>
        );
    }
}
 
export default Create;