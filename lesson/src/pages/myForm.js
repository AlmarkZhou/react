import React, { Component } from 'react'
import Input from '../components/Input'
// import {createForm} from 'rc-form'
import createForm from '../components/my-rc-form'

const nameRules = {required: true,message: "Plase enter name!"}
const passwordRules = {required: true,message: "Plase enter password!"}

@createForm
class myForm extends Component {
    constructor(props){
        super(props);
    }
    submit = () =>{
        const {getFieldsValue,validateFields} =  this.props.form
        validateFields((err, val) => {
            if(err){
                console.log("errMsg:",err);
            }else{
                console.log("提交成功");
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <h3>MY Form</h3>
                {getFieldDecorator("username", {rules: [nameRules]})(<Input placeholder="Plase enter name" />)}
                {getFieldDecorator("password", {rules: [passwordRules]})(<Input placeholder="Plase enter password" />)}      
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}

export default myForm