import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button, SafeAreaView } from 'react-native';
import CategoryFiltersTest from './components/CategoryFiltersTest';

export default function App() {
  const [showMT, setShowMT] = useState(false)

  const data = [
    { id: "1", label: "item1" },
    { id: "2", label: "item2" },
    { id: "3", label: "item3" },
  ]

  return (
    <View style={styles.container}>
      <Button title="show" onPress={() => setShowMT(true)} />
      <Modal transparent={false} visible={showMT} supportedOrientations={['portrait', 'landscape']}>
        <SafeAreaView>
          <CategoryFiltersTest
            data={data}
          />
          <Button title="close" onPress={() => setShowMT(false)} />
        </SafeAreaView>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
