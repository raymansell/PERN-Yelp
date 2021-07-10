import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';
import UpdateRestaurant from './screens/UpdateRestaurant';

function App() {
  return (
    <div className='container-lg'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/restaurants/:id'>
            <RestaurantDetail />
          </Route>
          <Route exact path='/restaurants/:id/update'>
            <UpdateRestaurant />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
