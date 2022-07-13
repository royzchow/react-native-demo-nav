import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Navigation from './src/nav';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;