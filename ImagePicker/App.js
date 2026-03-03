import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [imagePath, setImagePath] = useState([]);

    const launchGallery = async () => {
        const response = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!response.granted) {
            alert("Please give access to media");
            return;
        }

        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (data.canceled || !data.assets?.length) {
            setImagePath([]);
            return;
        }

        setImagePath(data.assets);
        console.log(data.assets);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
                <Button mode="contained" onPress={launchGallery}>
                    Tap Me!!!
                </Button>

                {imagePath.length > 0 ? (
                    <View>
                        {imagePath.map((ele, index) => {
                            return (
                                <Image
                                    key={index}
                                    source={{ uri: ele.uri }}
                                    style={{ width: 200, height: 200 }}
                                />
                            );
                        })}
                    </View>
                ) : (
                    <Text>No Images selected</Text>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default Home;