import React, { Component } from 'react';
import SubInput from './sub_input.jsx';

class SubInputList extends Component{
    constructor(props){
        super(props)
    }
    onDeleteSub =(subIndex)=>{
        this.props.onDeleteSub(subIndex);
    }
    renderSubInput=(index)=>{
        return(
            <SubInput key={`sub-input-${index}`} onDeleteSub={this.props.onDeleteSub} subIndex={index}/>
        )
    }
    render(){
        return(
            <div>
                {this.props.subInputList.map(this.renderSubInput)}
            </div>
        )
    }
}
module.exports = SubInputList;