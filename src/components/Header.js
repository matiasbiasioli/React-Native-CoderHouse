import { View, Text, StyleSheet, SafeAreaView} from "react-native";
import { colors } from "../theme/colors";

const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    padding: 30,
  },
  headerText: {
    fontSize:25,
    color: colors.lightViolet,
    fontFamily: "Pacific",
  }
})

export default Header;