import * as React from 'react';

class elementList extends React.Component{


    constructor() {
        super();
        this.state ={
            hour:0,
            minutes:0,
            amount:0,
            action:['feed','light_on','light_off']
        }
    }


    render(){
        return (<div><SelectList elements = {this.state.action}/></div>)
    }

}

class SelectList extends React.Component{
    render(){
        console.dir('fdf');
        console.dir(this.props.elements);
        let result = null;
        for (var i=0; i<this.props.elements.length; i++){
            result+=<option>{this.props.elements[i]}</option>
        }
        return <select> +result + </select>;
    }
}


const Widjet = (props) =>
    <input type="text" onChange = {props.update} />

const Button = (props) => <button>{props.children}</button>



export default elementList;