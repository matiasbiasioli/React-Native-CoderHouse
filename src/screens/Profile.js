import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import React from "react";
import Header from "../components/Header";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { usePutImageMutation } from "../services/api_data";
import { useGetImageQuery } from "../services/api_data";
import * as Location from "expo-location";

const Profile = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [putImage, result] = usePutImageMutation();
  const { data, isLoading, refetch } = useGetImageQuery();

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("No le diste permiso al acceso de la camara");
      return;
    } else {
      const resultCamera = await ImagePicker.launchCameraAsync({
        base64: true,
        quality: 1,
      });
      if (!resultCamera.canceled) {
        await putImage({
          image: `data:image/jpeg;base64,${result.assets[0].base64}`,
        });
        //Sirve para refrescar y cargue la imagen al ingresar
        refetch();
      }
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });
    console.log(result);
    // if (!result.canceled) {
    //   setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    // }
    if (!result.canceled) {
      await putImage({
        image: `data:image/jpeg;base64,${result.assets[0].base64}`,
      });
      //Sirve para refrescar y cargue la imagen al ingresar
      refetch();
    }
  };

  const getCoords = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    navigation.navigate("mapLoc");
  };
  console.log("COORDENADAS", location);

  return (
    <View>
      <Header title="My Profile" />
      <Image
        style={styles.imageContainer}
        source={
          data
            ? data.image
            : "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000"
        }
      />
      <View style={styles.containerCamera}>
        <Pressable onPress={() => openCamera()}>
          <Ionicons name="camera-sharp" size={40} color="black" />
        </Pressable>
      </View>
      <View style={styles.containerGalery}>
        <Pressable onPress={() => pickImage()}>
          <FontAwesome name="photo" size={40} color="black" />
        </Pressable>
      </View>
      <View style={styles.containerMap}>
        <Pressable onPress={()=> getCoords()}>
          <FontAwesome5 name="map-marker-alt" size={40} color="black" />
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
  },
  containerGalery: {
    alignItems: "center",
    marginTop: 20,
  },
  containerMap: {
    alignItems: "center",
    marginTop: 20,
  },
});
