import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Navigation from './src/nav';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <Text>Hello World</Text>
    </NavigationContainer>
  );
}

export default App;