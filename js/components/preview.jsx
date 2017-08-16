import React, {Component} from 'react';
import PreviewForm from './preview_form.jsx';


class Preview extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let questions = localStorage.getItem('mainQuestions');
        let questionsToJson = JSON.parse(questions);
        let render = questionsToJson.map((elem,index)=>{
            return(
            <div>
                <PreviewForm data={elem} key={`nr-${index}`}/>
                <hr />
            </div>
            )
        })
        return(
            <div className='container'>
                {render}
            </div>
        )
    }
}

module.exports = Preview;