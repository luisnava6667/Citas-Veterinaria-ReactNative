import React from 'react';
import {Text, SafeAreaView, Pressable, StyleSheet, View} from 'react-native';
import {formatDate} from '../helpers';
const InformacionPaciente = ({patient, setModalPatient, setPatient}) => {
  console.log(patient);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Informacion {''}
        <Text style={styles.titleBold}>Paciente</Text>
      </Text>
      <View>
        <Pressable
          style={styles.btnClose}
          onLongPress={() => {
            setModalPatient(false);
            setPatient({});
          }}>
          <Text style={styles.btnCloseText}>X Cerrar</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={styles.camp}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{patient.patient}</Text>
        </View>
        <View style={styles.camp}>
          <Text style={styles.label}>Propietario: </Text>
          <Text style={styles.value}>{patient.owner}</Text>
        </View>
        <View style={styles.camp}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>{patient.email}</Text>
        </View>
        <View style={styles.camp}>
          <Text style={styles.label}>Telefono: </Text>
          <Text style={styles.value}>{patient.phone}</Text>
        </View>
        <View style={styles.camp}>
          <Text style={styles.label}>Fecha Alta: </Text>
          <Text style={styles.value}>{formatDate(patient.date)}</Text>
        </View>
        <View style={styles.camp}>
          <Text style={styles.label}>Sintomas: </Text>
          <Text style={styles.value}>{patient.symptoms}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  titleBold: {
    fontWeight: '900',
  },
  btnClose: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCloseText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  camp: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  value: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});

export default InformacionPaciente;
