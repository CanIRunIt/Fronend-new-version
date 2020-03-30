import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { lightGreen } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { StylesContext } from '@material-ui/styles';
import styles from './rigcard.module.css';


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    textAlign: 'center',
    marginTop: 19,
    marginBottom: 19,
    fontFamily: 'Tomorrow',
    boxShadow: '10px 10px 5px grey',
    display: 'flex',
    justifyContent: 'center',
 //   backgroundColor: 'deepOrange'
    backgroundColor: 'theme.palette.primary.main',
   color: 'theme.palette.primary.contrastText'

  },
  media: {
    height: 100,
  //  maxWidth: 168,
  },
});


export default function PricesCard(props) {
  const classes = useStyles();

  return (
      <div className="container"/*  style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}  */>
    <Card className={classes.root} color="primary" style={{backgroundColor: 'deepOrange'}}>
      <CardActionArea>
        {props.cpu[0] == 'G'?
        <CardMedia
          className={classes.media}
          image="https://www.geforce.com/sites/default/files-world/geforce-gtx-titan-style-6.png"
          title={props.cpu}
        /> : <CardMedia
        className={classes.media}
        image="https://i.gadgets360cdn.com/large/Intel_cpu_intel_1556609631590.jpg"
        title={props.cpu}
      /> }
        <CardContent >
          <div class={styles.rig} align="left">{props.company} <span className={styles.rigspecs}>{props.price}</span> </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{fontFamily: 'Tomorrow'}} size="small" variant="dark" color="primary">
          BUY
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}



