import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PricesCard from './card';
import { Button, IconButton, Card, CardContent } from '@material-ui/core';
import { Plus } from 'react-bootstrap-icons';

var cpupricelist = []
var gpupricelist = []
var checkouts = []

class Rigbuilder extends Component {

    state = {
        cpu: '',
        gpu: '',
        ram: '',
        show: false,
        sum: ''

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

    plustoHandler  (comp, price)  {
        var unitprice = {
            rigcomp : comp,
            compprice : price 
        }

        checkouts.push(unitprice)
        

        var newsum = this.state.sum

        this.setState({
            sum: newsum + price
        })

    }

    showcheckout () {
        this.setState({
            show: true
        })
    }

    render () {

        let checkoutsummary = null

        if(this.state.show){
            checkoutsummary = <div style={{marginBottom: '10px'}}>{checkouts.map(singlechekcout => {
                return <div className="container"><Card style={{width: '356px'}}><CardContent><h5>{singlechekcout.rigcomp} : {singlechekcout.compprice}</h5><div><h5>sum : {this.state.sum}</h5></div></CardContent></Card></div>
                    
            })}</div>
                
        }


        return (
            <div style={{textAlign: 'center', fontFamily: 'Tomorrow'}}>
            
            {/* <h1>{this.state.gpu}</h1>
            <h1>{this.state.ram}</h1> */}

            {cpupricelist.map(cpu => {
                if(cpu.CPU.replace(' @','').substring(0, 21) == this.state.cpu.substring(0,21)){
                    let Price = cpu.Price.replace('$', '')
                    let Price1 = Price.replace('*','')
                    return <div style={{marginTop: '10px'}}><h1>{this.state.cpu}: Price comparison</h1>
                    <div /* style={{display: 'flex', justifyContent: 'center', width: '100%'}} */>
                    <div /* style={{float: 'left', width: '50%'}} */><PricesCard cpu={this.state.cpu} company="newegg" price={Price1}></PricesCard><span><IconButton onClick={() => this.plustoHandler(this.state.cpu, Price1)} aria-label="delete" size="large">
          <Plus fontSize="inherit" />CART
        </IconButton></span></div> 
                    <div /* style={{float: 'left', width: '50%'}} */><PricesCard cpu={this.state.cpu} company="ali" price={Price1}></PricesCard><span><IconButton onClick={() => this.plustoHandler(this.state.cpu, Price1)} aria-label="delete" size="large">
          <Plus fontSize="inherit" />CART
        </IconButton></span></div> </div>
                           </div>
                }
            }) }

         {gpupricelist.map(gpu => {
                if(gpu.GPU.replace(' @', '').substring(0, 16) == this.state.gpu.substring(0, 16)){
                    let Price = gpu.Price
                    let Price1 = Price.replace('*','')
                    return <div style={{marginTop: '10px'}}><h1>{this.state.gpu}: Price comparison</h1>
                    <div>
                        <div><PricesCard cpu={this.state.gpu} company="newegg" price={Price1}></PricesCard><span><IconButton onClick={() => this.plustoHandler(this.state.gpu, Price1)} aria-label="delete" size="large">
          <Plus fontSize="inherit" />CART
        </IconButton></span> </div>
                        <div><PricesCard cpu={this.state.gpu} company="ali" price={Price1}></PricesCard><span><IconButton onClick={() => this.plustoHandler(this.state.gpu, Price1)} aria-label="delete" size="large">
          <Plus fontSize="inherit" />CART
        </IconButton></span> </div>
                    </div>
                    </div>
                }
            })}
            <Button style={{backgroundColor: '#bd00ff', fontFamily: 'Tomorrow', marginBottom: '8px', marginTop: '8px'}} onClick={() => this.showcheckout()}>CHECK THE SUM</Button>
            {checkoutsummary}
 
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