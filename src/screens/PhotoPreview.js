import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function PhotoPreview({ navigation, route }) {
  const [photoUri, setPhotoUri] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (route.params?.photoUri) {
      setPhotoUri(route.params.photoUri);
    }

    if(route.params?.userId){
      setUserId(route.params.userId); // Recibir el userId
    }
  }, [route.params?.photoUri, route.params?.userId]);

  return (
    <View style={styles.container}>
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.imagePreview} />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.useButton]}
          onPress={() => navigation.navigate("RecyclingRecords", { photoUri, userId })}
        >
          <Text style={styles.buttonText}>Usar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  imagePreview: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
  },
  useButton: {
    backgroundColor: "#28a745",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
