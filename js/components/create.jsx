import React, { Component } from 'react';
import InputList from './input_list.jsx';

class Create extends Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
            inputList: [],
        }
    }

    handleAddInput = (event) =>{
        event.preventDefault();
        this.setState({
            count: this.state.count + 1,
            inputList: this.state.inputList.concat([this.state.count])
        });
    }
    handleRemoveInput = (index) =>{
        let copyList = this.state.inputList.slice();
        let newList = copyList.filter((elem)=>{
            return elem !=index
        })
        this.setState({
            inputList: newList,
        })
    }
    render(){
        return(
            <div className='container'>
                <InputList inputList={this.state.inputList} handleDeleteButton={this.handleRemoveInput}/>
                <button className='add__input-button' onClick={this.handleAddInput}>Add Input</button>
            </div>
        )
    }
}

module.exports = Create;