import React, { Component } from 'react';
import SubPreviewForm from './sub_preview_form.jsx';


class PreviewForm extends Component{
    constructor(props){
        super(props)

        this.state={
            text:'',
            number:'',
            yesNo:'',
            yes:false,
            no:false,
        }
    }
    handleNumberChange = (event) =>{
        this.setState({
            number: event.target.value
        })
    }
    handleTextChange = (event) =>{
        this.setState({
            text: event.target.value,
        })
    }
    handleRadioChange = (event) =>{
        this.setState({
            yesNo: event.target.value,
            yes: event.target.value === 'yes' ? true:false,
            no: event.target.value === 'no' ? true:false,
        })
    }
    renderRadio(elem){
        return(
            <div>
            <div className="question">{this.props.data.questionVal}</div>
            <form action="">
                <input type="radio" name="yes" value="yes" checked={this.state.yes} onChange={this.handleRadioChange}/>Yes
                <input type="radio" name="no" value="no" checked={this.state.no} onChange={this.handleRadioChange}/>No
            </form>
            <SubPreviewForm key={this.props.data.questionVal} data={elem}/>
            </div>
        )
    }
    renderNumber(elem){

        return(
            <div>
                <span> {this.props.data.questionVal} </span>
                <form>
                    <input type="number" placeholder="type number" onChange={this.handleNumberChange}/>
                </form>
                <SubPreviewForm key={this.props.data.questionVal} data={elem}/>
            </div>
        )
    }
    renderText(elem){
        return(
             <div>
                <span> {this.props.data.questionVal} </span>
                <form>
                    <input type="text" placeholder="insert text" onChange={this.handleTextChange}/>
                </form>
                <SubPreviewForm key={this.props.data.questionVal} data={elem}/>
            </div>
        )
    }
    render(){
        let questions = localStorage.getItem('subQuestions');
        let questionsToJson = JSON.parse(questions);

        const render = questionsToJson.map((elem,index)=>{
            {this.props.data.selectVal === 'yes/no' && this.renderRadio(elem)}
            {this.props.data.selectVal === 'text' && this.renderText(elem)}
            {this.props.data.selectVal === 'number' && this.renderNumber(elem)}
        })
        return(
            <div>
                {render}   
            </div>
        )
    }
}

module.exports = PreviewForm;