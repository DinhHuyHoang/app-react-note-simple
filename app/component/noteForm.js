import React, { Component, Fragment } from 'react';

export default class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAdding: false
        }
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.submit(this.refs.input.value);
        this.setState({isAdding: false});
    }

    toggle(){
        this.setState({isAdding: true});
    }

    render() {
        const isAdding = this.state.isAdding;
        return (
            <Fragment>
                {isAdding &&  
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Enter your text" ref="input"/>
                    <button type="submit">Thêm</button>
                </form> || 
                <button onClick={this.toggle.bind(this)}>+</button>}
            </Fragment>

        );
    }
}

