import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors'
import { useRef, useState } from 'react';
import * as Haptics from "expo-haptics"

const categories = [
    {
        name: 'Tiny homes',
        frenchName: 'Petites maisons',
        icon: 'home',
    },
    {
        name: 'Cabins',
        frenchName: 'Cabines',
        icon: 'house-siding',
    },
    {
        name: 'Trending',
        frenchName: 'Tendance',
        icon: 'local-fire-department',
    },
    {
        name: 'Play',
        frenchName: 'Jouer',
        icon: 'videogame-asset',
    },
    {
        name: 'City',
        frenchName: 'Ville',
        icon: 'apartment',
    },
    {
        name: 'Beachfront',
        frenchName: 'Front de mer',
        icon: 'beach-access',
    },
    {
        name: 'Countryside',
        frenchName: 'Campagne',
        icon: 'nature-people',
    },
];


const ExploreHeader = () => {
    const itemsRef = useRef<Array<TouchableOpacity | null>>([])
    const scrollRef = useRef<ScrollView>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const selectCategory = (index : number)=>{
        const selectedItem = itemsRef.current[index]
        
        selectedItem?.measure((x)=>{ scrollRef.current?.scrollTo({x:x-16,y:0, animated: true})})
        setActiveIndex(index)
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <Link href={'/(modals)/booking'} asChild>
                        <TouchableOpacity style={styles.searchBtn}>
                            <Ionicons name='search' size={24} />
                            <View>
                                <Text style={{ fontFamily: 'mon-b' }}>tu veux aller où?</Text>
                                <Text style={{ fontFamily: 'mon', color: Colors.grey }}>Quand tu veux où tu veux</Text>

                            </View>
                        </TouchableOpacity>
                    </Link>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name='options-outline' size={24} />

                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                ref={scrollRef}
                    contentContainerStyle={{
                        alignContent: 'center',
                        gap: 30,
                        paddingHorizontal: 16,


                    }}>
                    {categories.map((item, index) => (
                        <TouchableOpacity key={index} ref={(el)=>itemsRef.current[index] = el}
                        style={activeIndex === index? styles.categoryBtnActive : styles.categoryBtn}
                        onPress={()=>selectCategory(index)}>
                            <MaterialIcons name={item.icon as any} size={24}
                            color={activeIndex === index? 'black' : Colors.grey} />
                            <Text
                            style={activeIndex === index? styles.categoryTextActive : styles.categoryText}
                            > {item.frenchName}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 140,

    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 16,
        gap: 10,
    },
    filterBtn: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 24,
    },
    searchBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderColor: "#c2c2c2",
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
        borderRadius: 30,
        flex: 1,
        padding: 14,
        shadowColor: 'black',
        elevation: 2,
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    categoryText: {
        fontSize: 14,
        fontFamily: "mon-b",
        color: Colors.grey,
    },
    categoryTextActive: {
        fontSize: 14,
        fontFamily: "mon-b",
        color: "black",
    },
    categoryBtn: {
        flex:1,
        alignItems: 'center',
        justifyContent:"center",
        paddingBottom: 8,
    },
    categoryBtnActive: {
        flex:1,
        alignItems: 'center',
        justifyContent:"center",
        paddingBottom: 8,
        borderBlockColor:'black',
        borderBottomWidth:2,

    }
})
export default ExploreHeader