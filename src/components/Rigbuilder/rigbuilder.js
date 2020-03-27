import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rigbuilder extends Component {

    state = {
        cpu: '',
        gpu: '',
        ram: ''
    }

    componentDidMount () {
        this.setState({
            cpu: this.props.gamecpufromprops,
            gpu: this.props.gamegpufromprops,
            ram: this.props.gamememfromprops

        })

    }

    render () {


        return (
            <div style={{textAlign: 'center'}}>
            <h1>{this.state.cpu}</h1>
            <h1>{this.state.gpu}</h1>
            <h1>{this.state.ram}</h1>
            </div>
        )
    }
}

const mapSToProps = (state) => {
    return {
        gamecpufromprops: state.cpu,
        gamegpufromprops: state.gpu,
        gamememfromprops: state.ram
    }
}


export default connect(mapSToProps)(Rigbuilder);