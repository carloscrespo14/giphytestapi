import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './Search.css';
const useStyles = makeStyles({
    container: {
       margin: 'auto auto',
    },
    root: {
      marginTop: '50px',
      padding: '4px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 'inherit',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  });

const Search = props => {
    const classes = useStyles();
    const inputState = useState({
      inputValue: null 
    });

    return (
        <div className={classes.container}>
            <Container fixed>
                <Paper className={classes.root}>
                    <InputBase
                        value={inputState.inputValue}
                        onChange={props.changed}
                        className={classes.input}
                        placeholder="Busca en Giphy"
                        inputProps={{ 'aria-label': 'Busca en Giphy' }}
                    />
                    <IconButton className={classes.iconButton} aria-label="Search"
                      onClick={props.click}
                    >
                        <SearchIcon />
                    </IconButton>

                </Paper>
            </Container>
        </div>
    );
}

export default Search;