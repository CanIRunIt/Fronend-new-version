import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


class GamerigScore extends Component {
    
    render() {
    
        return (

    <div className="container" style={{/* fontFamily: 'ZCOOL QingKe HuangYou',  */paddingTop: '10%'/* , color: 'white' */, fontFamily: 'Tomorrow'}}>
    <h1 style={{textAlign: 'center'}}>Minimum requirements rig scores_</h1>
    CPU {this.props.cpu}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={this.props.cpuscore}_ />
    GPU {this.props.gpu}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={this.props.gpuscore}_ />
    RAM {this.props.ram}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={this.props.ramscore}_ />

    </div>
        )
    }

    
}

export default GamerigScore;