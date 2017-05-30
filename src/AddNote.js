import * as React from "react";

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                hour: 12,
                minutes: 30
            },
            amount: 456,
            action: 'feed'

        }
    }

    render() {
        return (<div>
            <input type="text" onBlur={(e) => this.setTime(e.target.value)}/>
            <select onBlur={(e) => this.setState({action: e.target.value})}>
                <option value="feed">feed</option>
                <option value="light_on">light on</option>
                <option value="light_off">light off</option>
            </select>
            <input type="text" onBlur={(e) => this.setState({amount: e.target.value})}/>
            <button onClick={this.onAdd.bind(this)}>Add</button>
        </div>);
    }

    onAdd = function (e) {
        console.dir(this);
        this.props.addNote(this.state);

    }

    setTime(t){
        const timeArr = t.split(':');
        const time = {
            hour:timeArr[0],
            minutes:timeArr[1]
        }
        this.setState({time});
    }

}
export default AddNote;