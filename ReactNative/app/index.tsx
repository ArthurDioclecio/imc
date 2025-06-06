import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/form";

export default function HomeScreen() {
    const router = useRouter();
    
        const [count, setCount] = useState(0);
        const [nome, setNome] = useState("tutu");
    return(
        <View>
            <Button title="Stack navigation" onPress={() => router.push('/navigation/stack')}></Button>
            <Button title="Tabs navigation" onPress={() => router.push('/navigation/tabs')}></Button>
            <Button title="Drawer navigation" onPress={() => router.push('/navigation/drawer')}></Button>
       
                    
                   
                </View>
    );
}