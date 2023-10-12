import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useState } from "react";
import { firebase_auth } from "../firebase/firebase_auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIdToken, setUser } from "../redux/slices/authenticationSlice";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );
      //Persistencia de datos con AsyncStorage
      // AsyncStorage.setItem('userEmail', response.user.email)
      //Logica login
      dispatch(setUser(response.user.email))
      dispatch(setIdToken(response._tokenResponse.idToken))
      console.log(response);
    } catch (error) {
      console.log("hay un error", error);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Contraseña"
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Iniciar Sesion</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("register")}>
        <Text style={styles.btnRegister}>¿No tienes cuenta? Registrate</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
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
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  btnRegister: {
    fontSize: 18,
  },
});
