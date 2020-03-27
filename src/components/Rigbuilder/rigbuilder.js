import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

var cpupricelist = []

class Rigbuilder extends Component {

    state = {
        cpu: '',
        gpu: '',
        ram: ''
    }

    componentDidMount () {

        axios.get('https://canirunit.herokuapp.com/cpuprices')
        .then(response => {
            cpupricelist = response.data
        }).catch(err => {
            console.log(err)
        })

        this.setState({
            cpu: 'Intel ' + this.props.gamecpufromprops,
            gpu: this.props.gamegpufromprops,
            ram: this.props.gamememfromprops
        })

    }

    render () {


        return (
            <div style={{textAlign: 'center', fontFamily: 'Tomorrow'}}>
            
            {/* <h1>{this.state.gpu}</h1>
            <h1>{this.state.ram}</h1> */}

            {cpupricelist.map(cpu => {
                if(cpu.CPU.substring(0, 16) == this.state.cpu.substring(0,16)){
                    return <h1>{this.state.cpu}: {cpu.Price}</h1>
                }
            }) }


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