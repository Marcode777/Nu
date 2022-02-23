import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }
    toggleClick(){
        console.log('clicker triggered!');
        this.setState({
            clicked: !this.state.clicked,
            date: new Date().toLocaleString()
        })
    }
    render() {
        if(this.state.clicked) {
            return <div>'Tuesday TWOsDAY because the date is February 22 2022, 2/22/22' <p>Current date and time is {this.state.date}</p> <button onClick={()=> this.toggleClick()}>Button</button></div>
        }
        return <button onClick={()=> this.toggleClick()}>Button</button>
    }
}

export default Button;