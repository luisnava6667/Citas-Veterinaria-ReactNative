import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import Formulario from './src/components/Formulario';
import InformacionPaciente from './src/components/InformacionPaciente';
import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const [modalPatient, setModalPatient] = useState(false);
  const patientEdit = id => {
    const patientAtEdit = patients.filter(patientId => patientId.id === id);
    setPatient(patientAtEdit[0]);
  };
  const deletePatient = id => {
    Alert.alert(
      'Deseas eliminar el paciente?',
      'Una vez eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {
          text: 'Si, eliminar',
          onPress: () => {
            const patientsDelete = patients.filter(
              patientState => patientState.id !== id,
            );
            setPatients(patientsDelete);
          },
        },
      ],
    );
  };
  const closeModal = () => {
    setModalVisible(false);
    // setPatient({});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNewAppointment}>
        <Text style={styles.btnTextNewAppointment}>Nueva Cita</Text>
      </Pressable>
      {patients.length === 0 ? (
        <Text style={styles.notPatients}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={patients}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                setPatient={setPatient}
                patientEdit={patientEdit}
                deletePatient={deletePatient}
                setModalPatient={setModalPatient}
              />
            );
          }}
        />
      )}
      {modalVisible && (
        <Formulario
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
      )}
      <Modal visible={modalPatient} animationType="fade">
        <InformacionPaciente
          patient={patient}
          setModalPatient={setModalPatient}
          setPatient={setPatient}
        />
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNewAppointment: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNewAppointment: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  notPatients: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});
export default App;
