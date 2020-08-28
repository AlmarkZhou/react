import React,{Component} from 'react'

export default function createForm(Cmp) {
    return class extends Component{
        constructor(props){
            super(props)
            this.state = {}
            this.options = {}
        }

        handleChange = (e) => {
            const {name,value} = e.target
            this.setState({[name]: value})
        }
        getFieldDecorator = (field,rules) => InputCmp => {
            this.options[field] = rules
            
            return React.cloneElement(InputCmp, {
                name: field,
                value: this.state[field] || "",
                onChange: this.handleChange
            })
        }
        // 暗号: 贝宁
        validateFields = (callback) =>{
            let err = [];
            for(let field in this.options){
                console.log(this.state[field]);
                if(this.options[field].rules[0].required ? !this.state[field] : false){
                    err.push({
                        [field]: this.options[field].rules[0].message 
                    })
                }
            }
            if(err.length === 0){
                callback(null, this.state)
            }else{
                callback(err, this.state)
            }
            
        }
        setFieldsValue = (newState) => {
            this.setState(newState)
        }
        getFieldsValue = () => {
            return this.state
        }
        getForm = () => {
            return {
                form: {
                    getFieldDecorator: this.getFieldDecorator,
                    setFieldsValue: this.setFieldsValue,
                    getFieldsValue: this.getFieldsValue,
                    validateFields: this.validateFields
                }
            }
        }
        render(){
            return <Cmp {...this.props} {...this.getForm()} />
        }
    }
}
