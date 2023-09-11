import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue
  },
  headerText: {
    fontSize:20,
    color: colors.lightViolet
  }
})

export default Header;