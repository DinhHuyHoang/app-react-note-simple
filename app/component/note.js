import React, { Component, Fragment } from 'react';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    RemoveNote() {
        let { index, handleRemove } = this.props;
        handleRemove(index);
    }

    EditNote(event) {
        event.preventDefault();
        let { index, text, handleEdit } = this.props;
        text = this.refs.inputEdit.value;
        this.props.handleEdit({index, text});
        this.setState({isEdit: false});
    }

    OpenEdit(){
        this.setState({isEdit: true}, function(){
            let { text } = this.props;
            this.refs.inputEdit.value = text;
        });
    }

    CancelEdit(){
        this.setState({isEdit: false});
    }

    render() {
        return (
            <Fragment>
                {!this.state.isEdit &&
                    <div>
                        <p>{this.props.children}</p>
                        <button onClick={this.RemoveNote.bind(this)}>Delete</button>
                        <button onClick={this.OpenEdit.bind(this)}>Edit</button>
                    </div>
                    ||
                    <div>
                        <form onSubmit={this.EditNote.bind(this)}>
                            <input type="text" ref="inputEdit"/>
                            <button type="button" onClick={this.CancelEdit.bind(this)}>Cancel</button>
                            <button type="submit" onClick={this.EditNote.bind(this)}>OK</button>
                        </form>
                    </div>
                }
            </Fragment>
        );
    }
}
