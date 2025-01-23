import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]); 
  const [addedit,setAddedit]=useState('Add Task');

  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]); 
      setText(''); 
      setAddedit("ADD TASK");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setText(tasks[index]); 
    handleDeleteTask(index); 
    setAddedit("EDIT TASK");
  };

  return (
    <View style={styles.container}>

      <View><Text style={styles.title}>Task Manager</Text></View> 
      <Text style={styles.label}>Enter the task</Text>
      
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Type here"
        onChangeText={setText}
      />

      <TouchableOpacity style={styles.head} onPress={handleAddTask} ><Text style={styles.headtext}>{addedit}</Text></TouchableOpacity>

      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <Text style={styles.task}>{task}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => handleEditTask(index)}>
                <Ionicons name="create-outline" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(index)} style={{ marginLeft: 10 }}>
                <Ionicons name="trash-outline" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  head:{
    backgroundColor:"black",
    height:40,
    color:"white",
    width:"40%",
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    },
  headtext:{
    color:"white",
    fontWeight:"bold",

  },
  title:{
    fontSize:40,
    fontWeight:"bold",
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
