import { View, Text } from 'react-native'
import React, { useMemo, useRef } from 'react'
import { Listing } from '@/Interfaces/listing'
import Listings from './Listings';

// import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';





interface Props{
    listings : Listing[];
    category : string;
}
const ListingBottomSheet = ({listings, category}: Props ) => {
  
//   const bottomSheetRef = useRef<BottomSheet>(null); 
  const snapPoints = useMemo(()=>['10%','100%'],[])
    return (
        <View style={{flex:1}}>
            <Listings listings={listings} category={category}/>
        </View>
    )
}

export default ListingBottomSheet