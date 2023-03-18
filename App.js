import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [isValorA, setIsValorA] = useState(0);
  const [isValorB, setIsValorB] = useState(0);
  const [isResult, setIsResult] = useState(0);

  function calcular() {
    if (isValorA === 0 || isValorB === 0) {
      alert('É obrigatório digitar os dois números');
      return;
    } else {
      if (isValorB > 1 && isValorA > 1) {
          setIsResult((isValorA * isValorB).toFixed(2));
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: '25%', fontSize: 30 }}>Multiplicador de Numeros</Text>

      <View style={styles.boxView}>
        <Image
        source={{
          uri: 'https://static.significados.com.br/foto/multiplicacao-fd.png',
        }}
        style={{ width: 185, height: 180 }}
      />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Valor 1"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(valorB) =>
          setIsValorB(valorB.toString().replace(',', '.'))
        }></TextInput>
      <TextInput
        style={styles.input}
        placeholder="valor 2"
        placeholderTextColor="black"
        keyboardType="numeric"
        onChangeText={(valorA) =>
          setIsValorA(valorA.toString().replace(',', '.'))
        }></TextInput>

      <Pressable style={styles.btn} onPress={calcular}>
        <Text>Calcular</Text>
      </Pressable>

      <Text style={{ marginTop: '5%', fontSize: 20 }}>Resultado: {isResult}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxView: {
    width: 190,
    height: 190,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  btn: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: 'green',
  },
});
