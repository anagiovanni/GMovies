import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel'
var { width, height} = Dimensions.get('window');

export default function trendingMovie({data}) {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Movie', item);
    }
  return (
    <View className='mb-8'>
      <Text className='text-white text-x1 mx-4'>Em Alta</Text>
      <Carousel

      />

    </View>
  )
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image> 
                source = {require('')}
                style={{width: '100%', height:'100%'}}
                className="rounded-2x1"
            </Image>
        </TouchableWithoutFeedback>
    )
}