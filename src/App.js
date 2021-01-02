import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import SinglePost from './components/SinglePost';
import About from './components/About';
import Project from './components/Project';
import Post from './components/Post';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about-me' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
