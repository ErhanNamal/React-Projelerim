import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AyarlarSayfa({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Ayarlar</Text>
      <Text style={styles.bilgi}>Bildirimler: Açık</Text>
      <Text style={styles.bilgi}>Tema: Açık Mod</Text>

      <View style={{ marginTop: 20 }} />

      <Button
        title="Ana Sayfaya Dön"
        onPress={() => navigation.navigate('AnaSayfa')}
        color="#8E44AD"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDEBD0',
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
