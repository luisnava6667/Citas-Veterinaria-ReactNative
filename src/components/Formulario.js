import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePiker from 'react-native-date-picker';
const Formulario = ({
  modalVisible,
  setModalVisible,
  setPatients,
  patients,
  setPatient: setPatientApp,
  patient: patientObj,
}) => {
  const [patient, setPatient] = useState('');
  const [id, setId] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [symptoms, setSymptoms] = useState('');
  useEffect(() => {
    if (Object.keys(patientObj).length > 0) {
      setPatient(patientObj.patient);
      setId(patientObj.id);
      setOwner(patientObj.owner);
      setEmail(patientObj.email);
      setPhone(patientObj.phone);
      setDate(patientObj.date);
      setSymptoms(patientObj.symptoms);
    }
  }, [patientObj]);
  const handleAppointment = () => {
    //validar
    if ([patient, owner, email, date, symptoms].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const newPatient = {
      patient,
      owner,
      email,
      phone,
      date,
      symptoms,
    };
    //revisar si es edicion o nueva cita
    if (id) {
      //Editando
      newPatient.id = id;
      const patientAct = patients.map(patientState =>
        patientState.id === newPatient.id ? newPatient : patientState,
      );
      setPatients(patientAct);
      setPatientApp({});
    } else {
      //Nueva cita
      newPatient.id = Date.now();
      setPatients([...patients, newPatient]);
    }
    setModalVisible(!modalVisible);
    setId('');
    setPatient('');
    setOwner('');
    setEmail('');
    setPhone('');
    setDate(new Date());
    setSymptoms('');
  };
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            {patientObj.id ? 'Editar' : 'Nueva'}{' '}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>
          <Pressable
            style={styles.btnCancel}
            onLongPress={() => {
              setModalVisible(!modalVisible);
              setPatientApp({});
              setId('');
              setPatient('');
              setOwner('');
              setEmail('');
              setPhone('');
              setDate(new Date());
              setSymptoms('');
            }}>
            <Text style={styles.btnCancelText}>X Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              value={patient}
              onChangeText={setPatient}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              value={owner}
              onChangeText={setOwner}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Teléfono Propietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={10}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.dateContainer}>
              <DatePiker
                date={date}
                locale="es"
                onDateChange={dat => setDate(dat)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.symptomsInput]}
              placeholder="Sintomas paciente"
              placeholderTextColor={'#666'}
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable
            style={styles.btnNewAppointment}
            onPress={handleAppointment}>
            <Text style={styles.btnNewAppointmentText}>
              {patientObj.id ? 'Editar Paciente' : 'Agregar Paciente'}
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
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
  btnCancel: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
  },
  btnCancelText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  symptomsInput: {
    height: 100,
  },
  dateContainer: {
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  btnNewAppointment: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNewAppointmentText: {
    textAlign: 'center',
    color: '#5827A4',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
});

export default Formulario;
