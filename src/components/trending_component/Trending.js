import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop:'50px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
        marginBottom:'20px'
    }
}));

const Trending = props => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Typography className={classes.title} variant="h4" color="inherit">
            Trending Top 20
        </Typography>   
        <GridList className={classes.gridList} cols={4}>
            {props.list.map(tile => (
            <GridListTile key={tile.images.fixed_height.url}>
                <img src={tile.images.fixed_height.url} alt={tile.title} />
            </GridListTile>
            ))}
        </GridList>
    </div>
  );
}

export default Trending;