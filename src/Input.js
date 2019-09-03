import React, { Component } from 'react';
import { connect } from 'react-redux'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        
        return (<div className='ADD'>
            <div className='header'><input className='inputarea' type="text" onChange={(event) =>  {this.props.InputData(event.target.value) }} />
            <button className='addbutton' onClick={() => this.props.Add(this.props.InputValue)}>ADD</button>
</div>
            

        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        InputValue: state.input


    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        InputData: (x) => {
            dispatch({type:'SET_INPUT',value:x })

        },
        Add: (e) => {
            var objet = {}
            var value = e
            var id = Math.random()
            objet = { value, id }
            dispatch({ type: "ADD",value: objet })
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Input);