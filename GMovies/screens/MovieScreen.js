import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient'

var { width, height } = Dimensions.get('window');

export default function MovieScreen() {
    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const navigation = useNavigation();
    let movieName = "Joker: Folie à Deux";

    useEffect(() => {

    }, [item])

    return (
        <ScrollView
            className="flex-1 bg-neutral-900"
            contentContainerStyle={{ paddingBottom: 20, minHeight: '100%' }}
        >
            <View className="w-full">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center p-4 pt-3" >
                    <TouchableOpacity onPress={() => navigation.goBack()}
                        style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>GM</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                        <HeartIcon size={36} color={isFavorite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                    source={require('../assets/images/moviePoster2.jpg')}
                    style={{width: width, height: height * 0.55}}
                    />
                    <LinearGradient
                     colors={['transparent', 'rgba(23,23,23,0.8', 'rgba(23,23,23,1)']}
                     style={{width: width, height: height * 0.4}}
                     start={{x: 0.5, y: 0}}
                     end={{x:0.5, y:1}}
                     className="absolute bottom-0"
                    />
                </View>
                <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                    {/* Nome do Filme */}
                    <Text className="text-white text-center text-3xl font-bold tracking-wider">
                        {movieName}
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Release • 2024 • 138 min
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}