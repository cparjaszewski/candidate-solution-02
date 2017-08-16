import React, { Component } from 'react';
import OneInput from './one_input.jsx';

class InputList extends Component{
    constructor(props){
        super(props);
    }
    handleDeleteButton = (index) =>{
        this.props.handleDeleteButton(index)
    }
    renderInputs=(index)=>{
        return(
            <OneInput key={`input-no-${index}`} onDelete={this.handleDeleteButton} index={index}/>
        )
    }
    render(){
        return <div>
            {this.props.inputList.map(this.renderInputs)}
            </div>
    }
}

module.exports = InputList;