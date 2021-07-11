import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import RestaurantDetailScreen from './screens/RestaurantDetailScreen';
import UpdateScreen from './screens/UpdateScreen';

function App() {
  return (
    <div className='container-lg'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/restaurants/:id'>
            <RestaurantDetailScreen />
          </Route>
          <Route exact path='/restaurants/:id/update'>
            <UpdateScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
