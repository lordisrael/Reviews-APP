import React from "react";
import { View, StyleSheet, Text} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; 

export default function Header({navigation}) {
    return (
        <View style={styles.header}>
            <View>
                <Text style = {styles.headerText}>About Gamezone</Text>
            </View>
        </View>
    )
}

// const Header = ({ showBackButton }) => {
//   return (
//     <TouchableOpacity onPress={() => showBackButton && navigation.goBack()}>
//       {showBackButton && (
//         <Ionicons name="ios-arrow-back" size={24} color="black" />
//       )}
//       <Text>Custom Header</Text>
//     </TouchableOpacity>
//   );
// };
//<Ionicons name="arrow-back" size={24} color="black" />
// export default function Header({ showBackButton, navigation, title }) {
//   return (
//     <View style={styles.header}>
//       {showBackButton && (
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="ios-arrow-back" size={24} color="black" />
//         </TouchableOpacity>
//       )}
//       <Text style={styles.headerText}>About Gamezone</Text>
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
    }
})