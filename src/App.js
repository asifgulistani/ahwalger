import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'; 
import Posts from './component/posts/posts';


function App() {
  return (
    <Router>
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="#">React Router</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">Admin</NavLink>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <main role="main" className="container">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h1>Available Link</h1>
                  <ul>
                    <li><Link to={'/home'} >Home</Link></li>
                    <li><Link to={'/posts'}>Posts</Link></li>
                    <li><Link to={'/products'}>Products</Link></li>
                    <li><Link to={'/admin'}>Admin</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div >
                <Switch>
                  <Route path="/home" render={()=> <span>working</span>} />
                  <Route path="/posts" component={Posts} />
                </Switch>
                <p className="lead"></p>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
