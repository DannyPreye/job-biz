import { View, Text } from "react-native";
import React from "react";
import { jobiz } from "../assets";
import { Image } from "react-native";

const AuthContainer = ({ title, subTitle, children }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 19,
                paddingHorizontal: 18,
                backgroundColor: "#fff",
                flexDirection: "column",
            }}
        >
            <Image
                source={jobiz}
                style={{
                    height: 33,
                }}
                resizeMode="contain"
            />
            <Text
                style={{
                    fontSize: 24,
                    lineHeight: 33.6,
                    fontWeight: "600",
                    marginTop: 8,
                    color: "#0D0D26",
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 24.4,
                }}
            >
                {subTitle}
            </Text>
            {children}
        </View>
    );
};

export default AuthContainer;
