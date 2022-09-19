import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';



export default function App() {


  var [F, setF] = useState('');
  var [C, setC] = useState('');
  var [K, setK] = useState('');

  function calcularTemperatura(){
    C = (parseFloat(F) - 32) * (5/9)
    K = (parseFloat(F) - 32) *(5/9) + 273.15

    if(C < 35) {
      alert("Sua temperatura em Celcius é: " + C + "C" +       "Sua temperatura em Kelvim é: " + K + "K" +       "Você está com hipotermia!")

    }else if(C > 35 && C < 37) {
      alert("Sua temperatura em Celcius é: " + C + "C" +       "Sua temperatura em Kelvim é: " + K + "K" +       "Sua temperatura está boa!")

    }else if(C > 37) {
      alert("Sua temperatura em Celcius é: " + C + "C" +       "Sua temperatura em Kelvim é: " + K + "K" +       "Você está febril!")
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Temperatura</Text>

      <TextInput style={styles.campo} placeholder="Digite a temperatura em Farenheit" keyboardType="numeric" onChangeText={ (F) => setF(F) }/>

      <TouchableOpacity style={styles.botao} onPress={calcularTemperatura}>
        <Text style={styles.textobotao}>Calcular</Text>
      </TouchableOpacity>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9'
  },

  titulo:{
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    color: '#000000',
    fontSize: 30
  },

  campo: {
    backgroundColor: '#f8f8ff',
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#ffd700',
    padding: 10,
  },
  textobotao: {
    fontSize: 20
  },
})