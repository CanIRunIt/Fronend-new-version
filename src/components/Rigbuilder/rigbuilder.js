import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PricesCard from './card';

var cpupricelist = []
var gpupricelist = []

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

        axios.get('https://canirunit.herokuapp.com/gpuprices')
        .then(response => {
            gpupricelist = response.data
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
                if(cpu.CPU.replace(' @','').substring(0, 21) == this.state.cpu.substring(0,21)){
                    return <div style={{marginTop: '10px'}}><h1>{this.state.cpu}: Price comparison</h1>
                    <div /* style={{display: 'flex', justifyContent: 'center', width: '100%'}} */>
                    <div /* style={{float: 'left', width: '50%'}} */><PricesCard cpu={this.state.cpu} company="newegg" price={cpu.Price}></PricesCard></div> 
                    <div /* style={{float: 'left', width: '50%'}} */><PricesCard cpu={this.state.cpu} company="ali" price={cpu.Price}></PricesCard></div> </div>
                           </div>
                }
            }) }

         {gpupricelist.map(gpu => {
                if(gpu.GPU.replace(' @', '').substring(0, 16) == this.state.gpu.substring(0, 16)){
                    return <div style={{marginTop: '10px'}}><h1>{this.state.gpu}: Price comparison</h1>
                    <div>
                        <div><PricesCard cpu={this.state.gpu} company="newegg" price={gpu.Price}></PricesCard> </div>
                        <div><PricesCard cpu={this.state.gpu} company="ali" price={gpu.Price}></PricesCard> </div>
                    </div>
                    </div>
                }
            })}
 
            {/* <h1>{this.state.cpu}</h1> */}
            


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