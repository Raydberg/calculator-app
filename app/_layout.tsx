import { View, Text, Platform } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '@/styles/global-styles';
import * as NavigationBar from 'expo-navigation-bar';


const isAndroid = Platform.OS === 'android'

if (isAndroid) {

  NavigationBar.setBackgroundColorAsync('black')
}


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
      <StatusBar style='light' />
    </View>
  )
}

export default Rootlayout

