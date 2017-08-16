import React, {Component} from 'react';

let subArr = [];

class SubInput extends Component{
    constructor(props){
        super(props)

        this.state={
            conditionValue: 'choose',
            answerValue: '',
            questionVaue: '',
            typeValue: 'choose',
        }
    }
    handleDeleteClick = (index) =>{
        if(typeof this.props.onDeleteSub === 'function'){
            this.props.onDeleteSub(this.props.subIndex)
        }
    }
    handleConditionChange = (event) =>{
        this.setState({
            conditionValue: event.target.value,
        })
    }
    handleInputAnswerChange = (event) =>{
        this.setState({
            answerValue: event.target.value,
        })
    }
    handleSubQuestionChange = (event) =>{
        this.setState({
            questionVaue: event.target.value,
        })
    }
    handleTypeChange = (event) =>{
        this.setState({
            typeValue: event.target.value,
        })
    }
    handleAddButtonClick = () =>{
        if((this.state.answerValue.length === 0)||
            (this.state.questionVaue.length === 0)||
            (this.state.conditionValue === 'choose')||
            (this.state.typeValue === 'choose')){
                alert('fill sub-form properly!')
        }else{
            subArr.push({
                condition: this.state.conditionValue,
                answer: this.state.answerValue,
                question: this.state.questionVaue,
                type: this.state.typeValue,
            })
            console.log(subArr);
            let arrToString = JSON.stringify(subArr);
            console.log(arrToString);
            localStorage.setItem('subQuestions', arrToString);
        }
    }
    render(){
        return(
            <div className='sub-form'>
                <label>Condition
                <select className="condition" onChange={this.handleConditionChange}>
                    <option key="choose"> Choose your condition </option>
                    <option key="equals"> Equals </option>
                    <option key="greater"> Greater than </option>
                    <option key="less"> Less than </option>
                </select>
                <input className="answer" placeholder="type here your answer" onChange={this.handleInputAnswerChange}/>
                </label>
                <label>Question
                <input type="text" placeholder="type here your question" onChange={this.handleSubQuestionChange}/>
                </label>
                <label>Type
                <select onChange={this.handleTypeChange}>
                    <option key="choose" value="choose"> Choose type of answer </option>
                    <option key="text" value="text"> text </option>
                    <option key="number" value="number"> number </option>
                    <option key="yes/no" value="yes/no"> yes / no </option>
                </select>
                </label>
                <button className = "add__input-button" onClick={this.handleAddButtonClick}> Add Sub-Input </button>
                <button className = "add__input-button" onClick={this.handleDeleteClick}> Delete </button>
            </div>
        )
    }
}

module.exports = SubInput;