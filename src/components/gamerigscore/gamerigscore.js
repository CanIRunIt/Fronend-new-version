import React, { Component } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import styles from './gamerigscore.module.css';
import { ArrowRight, Tools } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

class GamerigScore extends Component {
    
    render() {
    
        return (

    <div className="container" style={{/* fontFamily: 'ZCOOL QingKe HuangYou',  */paddingTop: '10%'/* , color: 'white' */, fontFamily: 'Tomorrow'}}>
    <h1 className={styles.topic} style={{textAlign: 'center'}}>Minimum requirements rig scores_</h1>
    CPU {this.props.cpu}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={this.props.cpuscore}_ />
    GPU {this.props.gpu}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={this.props.gpuscore}_ />
    RAM {this.props.ram}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={this.props.ramscore}_ />
    <Link to="/rig-builder"><Button variant="dark" className={styles.btnrig}>BUILD THIS RIG {/* <ArrowRight/> */}<Tools></Tools> </Button></Link>
    </div>
        )
    }

    
}

export default GamerigScore;