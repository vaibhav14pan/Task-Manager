import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import { useSelector, useDispatch } from 'react-redux';
import { clearInputText,updateInputText} from './features/textSlice';
import { updateButtonText} from './features/buttonTextSlice';
import {addTask, deleteTask} from './features/taskSlice';

const Home = () => {
  // const [text, setText] = useState('');
  // const [addedit, setAddedit] = useState('Add Task');
  // const [tasks, setTasks] = useState([]);
  const dispatch=useDispatch();
  const inputText=useSelector((state)=>state.inputText.value);
  const buttonText=useSelector((state)=>state.buttonText.value);
  const task=useSelector((state)=>state.task.value);


  const handleAddTask = () => {
    if (inputText.trim()) {
      dispatch(addTask(inputText));
      dispatch(clearInputText());
      dispatch(updateButtonText("ADD TASK"));
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    dispatch(updateInputText(task[index]));
    dispatch(deleteTask(index));
    dispatch(updateButtonText("EDIT TASK"));
  };

  return (
    <View style={styles.container}>

      <View><Text style={styles.title}>Task Manager</Text></View>
      <Text style={styles.label}>Enter the task</Text>

      <TextInput
        style={styles.input}
        value={inputText}
        placeholder="Type here"
        onChangeText={(inputText)=>{dispatch(updateInputText(inputText))}}
      />

      <TouchableOpacity style={styles.head} onPress={handleAddTask} ><Text style={styles.headtext}>{buttonText}</Text></TouchableOpacity>

      <View style={styles.tasksContainer}>
        {task.map((task, index) => (
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



export default Home;