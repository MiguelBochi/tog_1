import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Contador from './components/Contador'
import Constants from 'expo-constants';

function Card(props) {
  return (
    <ScrollView>
      <View style={{...styles.perfil, backgroundColor: props.caracter.color}}>
        <Image
          style={{resizeMode: 'stretch', height: 200 , borderRadius: 10 , }}
          source={{ uri: props.caracter.foto }}
        />
        <Text style={styles.nome1} >Nome: {props.caracter.nome}
        </Text>
        <Text style={styles.nome} >
          <Contador style={styles.colorContador}/>
        </Text>
      </View>
      
    </ScrollView>
  );
}

export default function App() {
  const caracters = [
    {
      foto: 'https://forumcdn.ngelgames.com/board/image/0ab4858e-4ebb-410b-90d5-dc33fcd102c2.png',
      nome: 'Baam',
      color: 'brown',
    },
    {
      foto: 'https://forumcdn.ngelgames.com/board/image/f64a4b89-6cb1-4c81-9ced-fe186c5cc1ca.png',
      nome: 'Viole',
      color: '#005C53',
    },
    {
      foto: 'https://forumcdn.ngelgames.com/board/image/93c0d6d0-1902-4afa-826c-77ccea01dc05.png',
      nome: 'Jinsung Ha',
      color: 'brown',
    },
    {
      foto: 'https://forumcdn.ngelgames.com/board/image/8070f886-b43e-43d3-a183-097300268f8e.png',
      nome: 'Endorsi',
      color: '#DBCF50',
    },
    {
      foto: 'https://forumcdn.ngelgames.com/board/image/b99a63b2-4f7f-4f3b-bf69-d319c973e04c.png',
      nome: 'Lo po Bia Ren',
      color: '#DBCF50',
    },
    {
      foto: 'https://forumcdn.ngelgames.com/board/image/a3ec05c6-deb5-4a7f-bb4a-d867015caf9f.png',
      nome: 'Verdi',
      color: '#005C53',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Best Caracter TOG</Text>
      <ScrollView>
        <FlatList
          data={caracters}
          renderItem={({ item }) => <Card caracter={item} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3D3D40',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  perfil: {
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 10 ,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  nome: {
    margin: 10,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
    nome1: {
    margin: 2,
    marginTop: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
