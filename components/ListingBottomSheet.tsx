import { View, Text } from 'react-native'
import React, { useMemo, useRef } from 'react'
import { Listing } from '@/Interfaces/listing'
import BottomSheet from '@gorhom/bottom-sheet';
import Listings from './Listings';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



interface Props{
    listings : Listing[];
    category : string;
}
const ListingBottomSheet = ({listings, category}: Props ) => {
  
  const bottomSheetRef = useRef<BottomSheet>(null); 
  const snapPoints = useMemo(()=>['10%','100%'],[])
    return (
<GestureHandlerRootView style={{height:100}}>
    <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{flex:1}}>
            <Listings listings={listings} category={category}/>
        </View>
    </BottomSheet>
    </GestureHandlerRootView>
    )
}

export default ListingBottomSheet