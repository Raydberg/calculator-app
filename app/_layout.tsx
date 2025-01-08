import { View, Text } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global-styles';

const Rootlayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }


  return (
    <View style={globalStyles.background}>
      <Text>Root Layout</Text>
      <Slot />
      <StatusBar style='light'/>
    </View>
  )
}

export default Rootlayout

