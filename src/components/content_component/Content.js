import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop:'30px'
  },
  gridList: {
    width: '100vw',
    height: 'auto',
  },
}));

  const Content = props => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h5" color="inherit">
            Resultados
        </Typography>   
        <GridList cellHeight={300} className={classes.gridList} cols={5}>
          {props.searchResult.map(tile => (
            <GridListTile key={tile.images.fixed_height.url} cols={tile.cols || 1}>
              <img src={tile.images.fixed_height.url} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );

  }

  export default Content;