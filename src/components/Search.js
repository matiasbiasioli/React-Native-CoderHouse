import { StyleSheet, View, TextInput, Pressable, onPress } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Search = ({text, setText}) => {
  const clearText = () => {
    setText("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Ingrese producto"
      />
      <Pressable>
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
      <Pressable onPress={()=> clearText()}>
        <Entypo name="cross" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: 250,
    padding: 10,
    borderWidth: 2,
    borderRadius: 50,
  },
});
