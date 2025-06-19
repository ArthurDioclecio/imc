import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Settings() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Configuração</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#4caf50' }}
          thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f3f7',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});
