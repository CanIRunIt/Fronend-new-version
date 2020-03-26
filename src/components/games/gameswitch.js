import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const switches = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

class Gameswitch extends Component {
    
    state = {
        letter: ''

    }

    clicked(one) {
        this.setState(
            {letter: one},
            () => console.log(this.state.letter)
            )
            this.props.history.push({
                pathname: '/gameselect',
                search: '?' + one
            })
    }


    render () {
        return (
            <div className="container" style={{textAlign: 'center', marginTop: '10px'}}>
            {switches.map(one => {
            if(one == "0" || one == "1" || one == "2" || one == "3" || one == "4" || one == "5" || one == "6" || one == "7" || one == "8" || one == "9" ){
                return <Button style={{marginTop: '3px', background: 'linear-gradient(to right, #00F9FF, #12d8fa)',  fontFamily: /* 'ZCOOL QingKe HuangYou' */'Tomorrow', border:'1', width:'189px'}} variant="contained" onClick={() => this.clicked(one)}>{one}</Button>
            } else {
                return <Button style={{marginTop: '3px', background: 'linear-gradient(to right, #1fa2ff, #12d8fa)',  fontFamily: /* 'ZCOOL QingKe HuangYou' */'Tomorrow', border:'1', width:'189px'}} variant="contained" onClick={() => this.clicked(one)}>{one}</Button>
            }
            }) }
        
            </div>

        )
    }
}



export default Gameswitch;