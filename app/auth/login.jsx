import { View, Text, Image } from "react-native";
import React from "react";
import { jobiz } from "../../assets";
import { AuthContainer } from "../../Components";

const login = () => {
    return (
        <AuthContainer
            title={"Welcome Back 👋"}
            subTitle={"Let’s log in. Apply to jobs!"}
        ></AuthContainer>
    );
};

export default login;
