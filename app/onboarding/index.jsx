import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Onboarding from "react-native-onboarding-swiper";
import { useRouter } from "expo-router";
import { job1, job2, job3, job4, job5, job6 } from "../../assets/onboard";

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? "#2B557C" : "#E4E5E7";

    return (
        <View
            style={{
                width: selected ? 24 : 8,
                height: 8,
                marginHorizontal: 3,
                backgroundColor,
                borderRadius: 999,
            }}
        />
    );
};

const NextButtonComponent = (props) => {
    return (
        <TouchableOpacity style={{}} {...props}>
            <Text
                style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: "500",

                    paddingHorizontal: 48,
                    paddingVertical: 16,
                }}
            >
                Next
            </Text>
        </TouchableOpacity>
    );
};

const SkipButtonComponent = ({ handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={{}}>
            <Text
                style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: "500",
                    paddingHorizontal: 48,
                    paddingVertical: 16,
                }}
            >
                Skip
            </Text>
        </TouchableOpacity>
    );
};
const index = () => {
    const router = useRouter();

    return (
        <>
            <View
                style={{
                    width: "100%",
                    aspectRatio: 3 / 1.5,
                    backgroundColor: "#E4E5E7",
                    borderBottomRightRadius: 999,
                    borderBottomLeftRadius: 999,
                    position: "absolute",
                    top: "-5%",
                    zIndex: 100,
                }}
            />
            <Onboarding
                containerStyles={{
                    padding: 5,
                }}
                DotComponent={Dots}
                imageContainerStyles={{
                    marginTop: 100,
                    marginBottom: 0,
                }}
                titleStyles={{
                    fontSize: 28,
                    fontWeight: "600",
                    color: "#0D0D26",
                    lineHeight: 42,
                    marginTop: 0,
                }}
                subTitleStyles={{
                    color: "#95969D",
                    fontSize: 15,
                    fontWeight: "400",
                    lineHeight: 22.5,
                    textAlign: "center",
                }}
                pages={[
                    {
                        backgroundColor: "#fff",
                        image: <Image source={job1} />,
                        title: "Search your Jobs",
                        subtitle:
                            "Figure out your top five priorities whether it is company culture, salary.",
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={job2} />,
                        title: "Browse jobs list",
                        subtitle:
                            "Our job list include several  industries, so you can find the best job for you.",
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={job3} />,
                        title: "Apply to best jobs",
                        subtitle:
                            "You can apply to your desirable jobs very quickly and easily with ease.",
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={job4} />,
                        title: "Make your career",
                        subtitle:
                            "We help you find your dream job based on your skillset, location, demand.",
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={job5} />,
                        title: "Make your career",
                        subtitle: `Figure out your top five priorities whether it is company culture, salary or a specific job position. `,
                    },
                    {
                        backgroundColor: "#fff",
                        image: <Image source={job6} />,
                        title: "Make your dream career with job",
                        subtitle: `We help you find your dream job according to your skillset, location & preference to build your career. `,
                    },
                ]}
                onDone={() => {
                    router.push("/auth/login");
                }}
                controlStatusBar={false}
                bottomBarColor="#fff"
                NextButtonComponent={NextButtonComponent}
                SkipButtonComponent={() => (
                    <SkipButtonComponent
                        handlePress={() => router.push("/auth/login")}
                    />
                )}
                renderPagination={(index, total, context) => {}}
            />
        </>
    );
};

export default index;
