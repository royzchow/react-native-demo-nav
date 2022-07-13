import { Dimensions, Text, View } from 'react-native';

const Browse = () => {

  const vw = Dimensions.get('window').width;
  const styles = require('./styles.js');

  return (

    <View style={[styles.container]}>
      <Text style={[styles.titleText]}>Browse</Text>
    </View>

  );
}

export default Browse;