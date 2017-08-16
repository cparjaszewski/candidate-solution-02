import React, {Component} from 'react';

class Export extends Component{
    render(){
        return(
            <div className='container export'>
                <div className='export__container'>
                    {localStorage.getItem('mainQuestions')}
                    {localStorage.getItem('subQuestions')}
                </div>
            </div>
        )
    }
}

module.exports = Export;