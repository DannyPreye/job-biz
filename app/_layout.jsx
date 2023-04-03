import { View, Text } from "react-native";
import { Stack } from "expo-router";
import AuthProvider from "../Components/Auth";

const _layout = () => {
    return (
        <AuthProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </AuthProvider>
    );
};

export default _layout;
