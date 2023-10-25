import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Modal} from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; 

export default function Header({navigation}) {
    const openMenu = () => {
        navigation.openDrawer
    }
    return (
        <ImageBackground source ={require('../assets/game_bg.png')} style={styles.header }>
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style = {styles.headerText}>Gamezone</Text>
            </View>
        </View>
        </ImageBackground>
    )
}
//
//<MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
// export default function Header({ showBackButton, navigation, title }) {
//   return (
//     <View style={styles.header}>
//       {showBackButton && (
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="ios-arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//       )}
//       <Text style={styles.headerText}>Gamezone</Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})