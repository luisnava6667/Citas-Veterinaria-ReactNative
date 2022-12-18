import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {formatDate} from '../helpers';
const Paciente = ({
  item,
  setModalVisible,
  patientEdit,
  deletePatient,
  setModalPatient,
  setPatient,
}) => {
  const {patient, date, id} = item;
  return (
    <Pressable
      onLongPress={() => {
        setModalPatient(true);
        setPatient(item);
      }}>
      <View style={styles.container}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.text}>{patient}</Text>
        <Text style={styles.dateStyle}>{formatDate(date)}</Text>
        <View style={styles.containerBtn}>
          <Pressable
            style={[styles.btn, styles.btnEdit]}
            onLongPress={() => {
              patientEdit(id);
              setModalVisible(true);
            }}>
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>
          <Pressable
            onPress={() => deletePatient(id)}
            style={[styles.btn, styles.btnDelete]}>
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
    borderBottomColor: '#94a3B8',
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  dateStyle: {
    color: '#374151',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEdit: {
    backgroundColor: '#F59E0B',
  },
  btnDelete: {
    backgroundColor: '#EF4444',
  },
  btnText: {
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default Paciente;
