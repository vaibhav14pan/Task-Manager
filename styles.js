import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    head: {
      backgroundColor: "black",
      height: 40,
      color: "white",
      width: "40%",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    headtext: {
      color: "white",
      fontWeight: "bold",
  
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      width: '80%',
      backgroundColor: '#fff',
    },
    tasksContainer: {
      marginTop: 20,
      width: '80%',
    },
    taskContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderRadius: 10,
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
    },
    task: {
      fontSize: 16,
      color: '#333',
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  export default styles;