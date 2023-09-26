import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View>
      <Header title="My Profile" />
      <Image
        style={styles.imageContainer}
        source={
          "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
        }
      />
      <View style={styles.containerCamera}>
        <Pressable>
          <Ionicons name="camera-sharp" size={40} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    marginTop: 50,
    margin: "auto",
    borderRadius: 300,
  },
  containerCamera: {
    alignItems: "center",
    marginTop: 20,
  }
});
