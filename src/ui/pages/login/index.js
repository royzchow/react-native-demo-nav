import { Dimensions, Text, View } from 'react-native';

const Login = () => {

  const vw = Dimensions.get('window').width;
  const styles = require('./styles.js');

  return (

    <View style={[styles.container]}>
      <Text style={[styles.titleText]}>Login</Text>
    </View>

  );
}

export default Login;