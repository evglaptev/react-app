import * as React from "react";
import AddNote from './AddNote';
import NoteList from './NoteList';
class App extends React.Component{
    constructor(){
        super();
        this.state={};
        this.arrayOfNote = [
            {
                time: {hour:12,minutes:10},
                action: 'feed',
                amount: 345
            },
            {
                time: {hour:12,minutes:30},
                action: 'light_on',
                amount: 24
            },
            {
                time: {hour:12,minutes:60},
                action: 'light_off',
                amount: 336
            }];
        this.sortedArrayOfNote = this.arrayOfNote.sort(this.onDecrease);
        this.state = {arrayOfNote:this.sortedArrayOfNote};
    }
    render(){
        return (
            <div>
                <AddNote addNote = {this.addNote.bind(this)}/>
                <NoteList listOfNotes = {this.state.arrayOfNote} deleteNoteByIndex = {this.deleteNoteByIndex.bind(this)}/>
            </div>
        )

    }
    addNote(newNote){
        this.sortedArrayOfNote = this.state.arrayOfNote.concat(newNote).sort(this.onDecrease);
        this.setState({arrayOfNote:this.sortedArrayOfNote});
        this.render();
    }
    deleteNoteByIndex(index){
        const newArrayOfNote = this.state.arrayOfNote.filter((item,key) => key!==index);
        this.setState({arrayOfNote:newArrayOfNote});
    }

    onDecrease = (item1, item2) =>  (item1.time.hour * 60 + +item1.time.minutes  >  item2.time.hour * 60 + +item2.time.minutes) ? -1 : 1;

}

export default App;