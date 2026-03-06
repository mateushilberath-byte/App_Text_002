import React from 'react';
import {View, Text} from 'react-native';

function App() {
  return(
  <View style= {{flex: 1, padding: 40, backgroundColor: 'red', justifyContent: 'center'}}>
    <View style= {{height: '40%', width: '40%', backgroundColor: 'green', marginBottom: 30, marginTop: 10}}>
   <Text style= {{fontSize: 20, textAlign: 'center', color: 'white'}}>
    <Text style= {{fontFamily:'Brush Script MT'}}>Eu sou o maior cantador de parabéns {'\n'}</Text>
    <Text style = {{fontWeight:'bold'}}>Eu vou bater o recorde de aniversários celebrados{'\n'}</Text>
    <Text style = {{fontStyle: 'italic'}}>2050 aniversários celebrados{'\n'}</Text>
    <Text>Mateus Hilberath Costa</Text>
    </Text>
    </View>
    <View style= {{ height: '40%', width: '40%', backgroundColor: 'white'}}>
    <Text style= {{fontSize: 17, color: 'blue', fontWeight: 'bold', textAlign: 'right'}}>
      <Text style={{fontFamily: 'Bernard MT Condensed'}}>Eu sou o maior pagador de impostos do mundo{'\n'}</Text>
      <Text>Eu amo imposto, eu amo ser taxado {'\n'}</Text>
      <Text style={{letterSpacing: 2}}>2050 impostos diferentes para eu pagar {'\n'}</Text>
      <Text>2050 produtos diferentes taxados</Text>
    </Text>
    </View>
    <View style= {{height: '30%', width: '35%', backgroundColor: 'blue'}}>
    <Text style={{fontSize: 15, color: 'grey', fontStyle:'italic'}}>
    <Text>Eu não sei mais o que escrever aqui{'\n'}</Text>
    <Text>Imagine algo interessante escrito aqui{'\n'}</Text>
    <Text>E aqui tambem{'\n'}</Text>
    <Text> don't even joke lad</Text>
    </Text>
    </View>
  </View>
  );
}
export default App;