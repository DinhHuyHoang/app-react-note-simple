import React, {Component, Fragment} from 'react';
import Node from './note';
import NoteForm from './NoteForm';

export default class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            mang: ['thịt heo', 'thịt gà', 'thịt chó']
        }
    }

    Add(note){
        this.state.mang.push(note);
        this.setState(this.state);
    }

    Edit(note){
        this.state.mang.splice(note.index, 1, note.text);
        this.setState(this.state);
    }

    Remove(index){
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    }

    render(){
        return(
            <Fragment>
               <div>
                   <NoteForm submit={this.Add.bind(this)}/>
                    {
                        this.state.mang.map((e,i)=> 
                            <Node 
                                index={i}
                                text={e}
                                handleRemove={this.Remove.bind(this)}
                                handleEdit={this.Edit.bind(this)} 
                                key={i}>{e}
                            </Node>
                        )
                    }
               </div>
            </Fragment>
        );
    }
}