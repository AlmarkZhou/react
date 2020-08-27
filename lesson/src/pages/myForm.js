import React, { Component } from 'react'
import Input from '../components/Input'
// import {createForm} from 'rc-form'
import createForm from '../components/my-rc-form'

@createForm
class myForm extends Component {
    constructor(props){
        super(props);
    }
    submit = () =>{
        const {getFieldsValue} =  this.props.form
        console.log("submit",getFieldsValue());
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <h3>MY Form</h3>
                {getFieldDecorator("username")(<Input placeholder="Plase enter name" />)}
                {getFieldDecorator("password")(<Input placeholder="Plase enter password" />)}      
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default myForm