import React, { Component } from 'react';
import SubInputList from './sub_input_list.jsx';

let questionsArr = [];

class OneInput extends Component{
    constructor(props){
        super(props)
        
        this.state={
            subCount:0,
            subInputList: [],
            questionValue:'',
            selectValue:'choose',
        }
    }
    handleSelectOptions = (event) =>{
        this.setState({
            selectValue: event.target.value,
        })
    }
    handleQuestionInput = (event) =>{
        this.setState({
            questionValue: event.target.value,
        })
    }
    onDeleteClick = (event) =>{
        event.preventDefault();
        if(typeof this.props.onDelete === 'function'){
            this.props.onDelete(this.props.index);
        }
    }
    onAddSubInputClick = () =>{
        if(this.state.selectValue === 'choose' || this.state.questionValue.length === 0){
            alert('Fill from properly!');
        }else{
            this.setState({
                subCount: this.state.subCount+1,
                subInputList: this.state.subInputList.concat([this.state.subCount]),
            })
            questionsArr.push({
                questionVal: this.state.questionValue,
                selectVal: this.state.selectValue,
            })
            let questionToString = JSON.stringify(questionsArr);
            localStorage.setItem('mainQuestions', questionToString);
        }
        
    }
    handleDeleteSubInput =(subIndex)=>{
        let subInputListCopy = this.state.subInputList.slice();
        let newSubList = subInputListCopy.filter((elem)=>{
            return elem !=subIndex
        })
        this.setState({
            subInputList: newSubList,
        })
    }
    render(){
        return(
            <div>
            <div className='form'>
                <label htmlFor='question'>Question</label>
                    <input type='text' placeholder='type question' name='question'
                    onChange={this.handleQuestionInput}/>
                <label htmlFor='select'>type</label>
                    <select name='select' onChange={this.handleSelectOptions}>
                        <option value="choose" key="choose">Chose your answer</option>
                        <option value="text" key="text">Text</option>
                        <option value="number" key="number">Number</option>
                        <option value="yes/no" key="yes/no">Yes/No</option>
                    </select>
                <button className='add__input-button' onClick={this.onAddSubInputClick}>Add Sub-Input</button>
                <button className='add__input-button' onClick={this.onDeleteClick}>Delete</button>
            </div>
            <SubInputList subInputList={this.state.subInputList} onDeleteSub={this.handleDeleteSubInput}/>
            </div>
        )
    }
}

module.exports = OneInput;