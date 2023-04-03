import { useEffect } from "react";
import { View, Text } from "react-native";
import { useSegments, useRouter } from "expo-router";

const useProtectedRoute = (user) => {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";
        if (!user && !inAuthGroup) {
            router.replace("/");
        } else if (user && inAuthGroup) {
            router.replace("/home");
        }
    }, [user, segments]);

    return (
        <View>
            <Text>useProtectedRoute</Text>
        </View>
    );
};

export default useProtectedRoute;
