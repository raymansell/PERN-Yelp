import { createContext, useContext, useState } from 'react';

const RestaurantsContext = createContext();

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

const useRestaurants = () => {
  const context = useContext(RestaurantsContext);
  if (context === undefined) {
    throw new Error('useRestaurants must be used within a RestaurantsProvider');
  }
  return context;
};

export { RestaurantsProvider, useRestaurants };
