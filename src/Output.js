import React, { Component } from 'react';
import {connect} from'react-redux'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='todolist'>
<ul>
{this.props.list.map(el=>{return(<div key={el.id}  className='list'>
    <div className="buttons"><button className='addbutton'  onClick={()=>{this.props.Edit(el)}}>EDIT</button>
    <button className='addbutton' onClick ={()=>this.props.remove(el.id)}>REMOVE</button></div>
    
    <li key={el.id} >{el.value}</li>
</div>)})}

</ul>


        </div> );
    }
}

const mapStateToProps =(state)=>{
    return {
        list:state.todo
    }
}





const mapDispatchToProps =(dispatch) => {
    return {
        remove:(id) => {
            dispatch({type:'REMOVE_INPUT',id:id})}
    ,
    Edit:(objet)=> {
        console.log(objet)
        dispatch({type:'EDIT',value:{
            id:objet.id,
            value:prompt('new Task',)
        }})
    }   
 }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Todo) ;