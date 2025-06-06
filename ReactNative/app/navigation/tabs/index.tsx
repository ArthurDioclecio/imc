import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/form";

export default function TabHome() {
    const [count, setCount] = useState(0);
    const [nome, setNome] = useState("tutu");

    return(
        <View>
            <Text>Aba Home</Text>
            <Form/>
        </View>
    );
}
