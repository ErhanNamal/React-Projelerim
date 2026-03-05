import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfilSayfa({ route, navigation }) {
  // route.params ile verileri alıyoruz
  const { isim, sinif, numara, not1, not2,  } = route.params;
  const ortalama=(not1 + not2) / 2;
  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Profil</Text>
      <Text>İsim: {isim}</Text>
      <Text>Sınıf: {sinif}</Text>
      <Text>Numara: {numara}</Text>
      <Text>1. Sınav Notu: {not1}</Text>
      <Text>2. Sınav Notu: {not2}</Text>
      <Text>Ortalama: {ortalama}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5F5E3',
  },
  baslik: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bilgi: {
    fontSize: 18,
    marginBottom: 5,
  },
});
