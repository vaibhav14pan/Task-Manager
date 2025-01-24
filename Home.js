import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'

import { useSelector, useDispatch } from 'react-redux';
import {addTask, deleteTask} from './features/taskSlice';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [buttonText, setButtonText] = useState('Add Task');
  
  const dispatch=useDispatch();
  const tasks=useSelector((state)=>state.tasks.tasks);

  const handleAddTask = () => {
    if (inputText.trim()){
      dispatch(addTask(inputText));
      setInputText('');
      setButtonText('ADD TASK');
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    setInputText(tasks[index]);
    dispatch(deleteTask(index));
    setButtonText('EDIT TASK');
  };

  return (
    <View style={styles.container}>

      <View><Text style={styles.title}>Task Manager</Text></View>
      <Text style={styles.label}>Enter the task</Text>

      <TextInput
        style={styles.input}
        value={inputText}
        placeholder="Type here"
        onChangeText={(inputText)=>{setInputText(inputText)}}
      />

      <TouchableOpacity 
        style={styles.head} 
        onPress={handleAddTask} >
          <Text style={styles.headtext}>{buttonText}</Text>
      </TouchableOpacity>

      <View style={styles.tasksContainer}>
        {tasks.map((task, index) => (
          <View key={`${task}-${index}`} style={styles.taskContainer}>
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
