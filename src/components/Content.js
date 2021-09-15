import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Content() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}

export default Content;
