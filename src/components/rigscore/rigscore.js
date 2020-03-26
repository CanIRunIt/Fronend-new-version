import React from 'react';
import { ProgressBar } from 'react-bootstrap';



const rigscore = (props) => (

    <div className="container" style={{/* fontFamily: 'ZCOOL QingKe HuangYou', */ paddingTop: '8%', paddingBottom: '9%', fontFamily: 'Tomorrow'/* , color: 'white' */}}>
    <h1 style={{textAlign: 'center'}}>Your rig scores_ </h1>
    CPU {props.cpu}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={props.cpuscore} />
    GPU {props.gpu}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={props.gpuscore} />
    RAM {props.ram}_<ProgressBar style={{backgroundColor: '#00ff9f'}} animated now={props.ramscore} />
    
    </div>

)

export default rigscore;