import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  
} from 'react-native';

export default function App() {
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  

  function handleSubmit() {
    const t = taille /100 
    const imc = poids / (t*t);
    

    if (imc < 18.5) {Alert.alert("Insuffisance pondérale","Votre imc : "+imc )}
    if (imc >= 18.5 && imc < 24.9) {Alert.alert("Poids normal","Votre imc : "+imc )}
    if (imc >= 25 && imc < 29.9) {Alert.alert("Surpoids","Votre imc : "+imc )}
    if (imc > 30) {Alert.alert("Obésité","Votre imc : "+imc )}
    
  
    
  }

  return (
    <View >
      <Text style={styles.title}>Calculer son IMC</Text>

      <TextInput
        style={styles.input}
          
        value={poids}
        onChangeText={(poids) => setPoids(poids)}
        placeholder="Votre poids (kg)"
        placeholderTextColor="grey"
        keyboardType="numeric"
        
      />

      <TextInput 
        style={styles.input}
            
        value={taille}
        onChangeText={(taille) => setTaille(taille)}
        placeholder="Votre taille (cm)"
        placeholderTextColor="grey"
        keyboardType="numeric"
         
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{
          color: 'white',
          fontSize: 25,
          textAlign: 'center',
          fontWeight : 'bold'
          
        }}>Calculer </Text>
      </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: 'black',
    fontWeight : 'bold'
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding : 10,
    borderRadius : 10,
  },
  button: {

    color : 'white',
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 15
  },
});