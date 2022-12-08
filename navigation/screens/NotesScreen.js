import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, AsyncStorageStatic } from 'react-native';


export default function NotesScreen({ navigation }) {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const saveNote = async () => {
        try {
            // Save the new note to AsyncStorageStatic
            await AsyncStorageStatic.setItem('@MyNotes:note', newNote);
            // Retrieve all the notes from AsyncStorageStatic
            const savedNotes = await AsyncStorageStatic.getItem('@MyNotes:note');
            // Add the new note to the array of notes
            setNotes([...notes, savedNotes]);
            // Clear the input field
            setNewNote('');
        } catch (e) {
            // Handle errors
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={newNote}
                onChangeText={setNewNote}
                placeholder="Enter a new note"
            />
            <Button title="Save" onPress={saveNote} />
            <Text style={styles.header}>Saved Notes:</Text>
            {notes.map((note, index) => (
                <Text key={index}>{note}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    },
    header: {
        fontSize: 20,
        marginTop: 20
    }
});
