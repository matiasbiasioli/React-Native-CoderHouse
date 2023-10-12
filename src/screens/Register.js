import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_auth } from "../firebase/firebase_auth";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );
      navigation.navigate("login");
    } catch (error) {
      console.log("hay un error", error);
    }
  };

  return (
    <View style={styles.registerContainer}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("login")}>
        <Text style={styles.btnRegister}>¿Ya tienes cuenta? Inicia Sesión</Text>
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: "85%",
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    fontSize: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: colors.nightBlue,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  btnRegister: {
    fontSize: 20,
  },
});
