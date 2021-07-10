import Header from '../components/Header';
import AddRestaurant from '../components/AddRestaurant';
import RestaurantList from '../components/RestaurantList';
import { RestaurantsProvider } from '../context/RestaurantsContext';

const Home = () => {
  return (
    <div>
      <Header />
      <RestaurantsProvider>
        <AddRestaurant />
        <RestaurantList />
      </RestaurantsProvider>
    </div>
  );
};

export default Home;
