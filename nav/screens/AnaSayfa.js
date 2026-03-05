import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AnaSayfa({ navigation , route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Ana Sayfa</Text>
      <Text style={styles.aciklama}>Hoşgeldiniz!</Text>

      <Button
    title="Ali'nin Profiline Git"
      onPress={() => navigation.navigate('Profil', {
        isim: 'Ali',
        sinif: '11-A',
        numara: 42,
        not1: 89,
        not2: 86,
      })}
    />


      <View style={{ marginTop: 10 }} />

      <Button
        title="Ayarlara Git"
        onPress={() => navigation.navigate('Ayarlar')}
        color="#E67E22"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
  },
  baslik: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aciklama: {
    fontSize: 16,
    marginBottom: 30,
    color: '#7F8C8D',
  },
});
