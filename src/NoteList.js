import * as React from 'react';

class NoteList extends React.Component{
    constructor(props) {
        console.dir(props);
        super(props);
    }
        render(){
        console.log('render NoteList');
            return (
                <table>
                    <thead>
                    <tr>
                        <td>Time</td>
                        <td>Action</td>
                        <td>Amount</td>
                    </tr>
                    </thead>
                    <tbody>{this.getTableBody()}</tbody>

                </table>
            )
        }


    getTableBody() {
        let tBody = this.props.listOfNotes.map((item,index)=>
        <tr key={index}>
            <td>{item.time.hour}:{item.time.minutes}</td>
            <td>{item.action}</td>
            <td>{item.amount}</td>
            <td onClick={this.deleteNote.bind(this,index)} >X</td>
        </tr>
        );
        return tBody;
    }

    deleteNote(index) {
            console.dir(index);
        this.props.deleteNoteByIndex(index);
    }
}

export default NoteList;