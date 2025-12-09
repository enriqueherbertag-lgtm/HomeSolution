import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTechnician, setIsTechnician] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    // Por ahora solo muestra los datos
    Alert.alert(
      'Iniciando sesión',
      `Email: ${email}\nTipo: ${isTechnician ? 'Técnico' : 'Cliente'}`
    );

    // Aquí después conectaremos con tu API backend
    console.log('Conectando a:', 'http://localhost:3000/api/v1/auth/login');
  };

  const handleRegister = () => {
    Alert.alert('Registro', 'Te llevaremos al registro en la siguiente versión');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🏠</Text>
        <Text style={styles.logoText}>HomeSolution</Text>
        <Text style={styles.tagline}>Técnicos a un clic de distancia</Text>
      </View>

      {/* Formulario */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Selector Cliente/Técnico */}
        <View style={styles.userTypeContainer}>
          <TouchableOpacity
            style={[styles.userTypeButton, !isTechnician && styles.userTypeButtonActive]}
            onPress={() => setIsTechnician(false)}
          >
            <Text style={[styles.userTypeText, !isTechnician && styles.userTypeTextActive]}>
              👤 Cliente
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.userTypeButton, isTechnician && styles.userTypeButtonActive]}
            onPress={() => setIsTechnician(true)}
          >
            <Text style={[styles.userTypeText, isTechnician && styles.userTypeTextActive]}>
              🔧 Técnico
            </Text>
          </TouchableOpacity>
        </View>

        {/* Botón Login */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Registro */}
        <TouchableOpacity style={styles.registerLink} onPress={handleRegister}>
          <Text style={styles.registerText}>¿No tienes cuenta? Regístrate aquí</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Conectando habilidades con necesidades</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  logo: {
    fontSize: 60,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  tagline: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },
  formContainer: {
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 16,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  userTypeButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    marginHorizontal: 5,
  },
  userTypeButtonActive: {
    backgroundColor: '#3B82F6',
  },
  userTypeText: {
    fontSize: 16,
    color: '#6B7280',
  },
  userTypeTextActive: {
    color: 'white',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  registerLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#3B82F6',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});
