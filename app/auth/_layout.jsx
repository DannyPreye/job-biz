import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Image } from "react-native";
import { jobiz } from "../../assets";

const _layout = () => {
    return (
        <Stack
            screenOptions={{
                headerLeft: () => (
                    <Feather name="chevron-left" size={30} color="black" />
                ),
                headerTitle: "",
                headerShadowVisible: false,
            }}
        ></Stack>
    );
};

export default _layout;
