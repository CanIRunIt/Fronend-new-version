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
    //maxWidth: 345,
    textAlign: 'center',
    marginTop: 19,
    marginBottom: 19,
    fontFamily: 'Tomorrow'
  },
  media: {
    height: 356,
  },
});


export default function MediaCard(props) {
  const classes = useStyles();

  return (
      <div className="container" style={{textAlign: 'center'}}>
    <Card className={classes.root} color="primary" style={{backgroundColor: 'deepOrange'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.mos.cms.futurecdn.net/awbNCoAKzzUB8Vjy8e7RB7-1200-80.jpg"
          title="Contemplative Reptile"
        />
        <CardContent >
          
          {/* <Typography style={{fontFamily: 'Tomorrow'}} variant="h2" color="textSecondary" component="p">
           Processor  <div style={{color: 'darkgrey'}}> {props.cpu}  </div>
          </Typography>
          <Typography style={{fontFamily: 'Tomorrow'}} variant="h2" color="textSecondary" component="p">
           Graphic Card <div style={{color: 'darkgrey'}}> {props.gpu} </div>
          </Typography>
          <Typography style={{fontFamily: 'Tomorrow'}} variant="h2" color="textSecondary" component="p">
            Memory <div style={{color: 'darkgrey'}}>  {props.ram} </div>
          </Typography>
          <Typography style={{fontFamily: 'Tomorrow'}} variant="h2" color="textSecondary" component="p">
            Hard Disk Space <div style={{color: 'darkgrey'}}>  {props.hd} </div>
          </Typography>
          <Typography style={{fontFamily: 'Tomorrow'}} variant="h2" color="textSecondary" component="p">
            Operating System <div style={{color: 'darkgrey'}}> {props.os} </div>
          </Typography> */}

          <div class={styles.rig} align="left">Processor: <span className={styles.rigspecs}>{props.cpu}</span> </div>
          <div class={styles.rig} align="left">Graphics: <span className={styles.rigspecs}>{props.gpu}</span> </div>
          <div class={styles.rig} align="left">Memory: <span className={styles.rigspecs}>{props.ram}</span> </div>
          <div class={styles.rig} align="left">Hard Disk: <span className={styles.rigspecs}>{props.hd}</span> </div>
          <div class={styles.rig} align="left">Operating System: <span className={styles.rigspecs}>{props.os}</span> </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{fontFamily: 'Tomorrow'}} size="small" color="primary">
          Share
        </Button>
        <Button style={{fontFamily: 'Tomorrow'}} size="medium" color="primary">
          Upgrade
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}



