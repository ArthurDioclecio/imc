import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";

export default function Form(){
        const [text, setext] = useState("");
        const [text1, setext1] = useState("");
        const [fim, setFinal] = useState("");
        const [resultado, setResultado] = useState(0);
        


   return (
    <View>
                    <TextInput
                        placeholder="Peso"
                        value={text}
                        onChangeText={setext}
                    />
                    <TextInput
                        placeholder="Altura"
                        value={text1}
                        onChangeText={setext1}
                    
                    />
                    <Button
                    title="finalizar"
                    onPress={() => {
                        const res = calculo(text, text1);
                        if (res) {
                            setResultado(res);
                            setFinal(`Seu IMC é: ${res.toFixed(2)}`);
                        } else {
                            setFinal("Erro ao calcular IMC. Verifique os valores.");
                        }
                    }}/>

                    <Text>{fim}</Text>
                    </View>

            
    
);

}

 function calculo(text: string, text1: string){
                        let peso = 0;
                        let altura = 0;
                        try{
                        peso = parseFloat(text);
                        if (true){
                            text1 = text1.replace(",", "");
                            text1 = text1.replace(".", "");
                        }
                        altura = parseFloat(text1);
                        altura = altura / 100;
                        altura = altura * altura;
                        let resultado = 0.00;
                        if (!isNaN(peso) && !isNaN(altura) ) {
                            resultado = peso / altura;
                            return resultado;
                        }
                    } catch (error) {
                        console.error("Erro ao calcular:", error);
                    }
                }
