import React, {Component} from 'react'
import { CardHeader, AppBar, Toolbar, TextField, FormControl, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
    root: {
      width: '70%',
      maxWidth: 800,
      fontSize: 20
    },
    search: {
      position: 'relative'
      },
    button: {
        justifyContent: 'middle',
        minHeight: 20
    },
    select: {
      minWidth: 100
    }, 
  });

export default function AppSearchBar(){

  const classes = useStyles();
  const [catagory, setCatagory] = React.useState('');

  const handleChange = (event) => {
    setCatagory(event.target.value);
  };

      return(
      <div>
        <div className={classes.root}>
          <Typography variant="h3" component="h2">
            User Search App
          </Typography>
        </div>
        <div>
          <AppBar position="static">
            <Toolbar>
            <div>
        
                <FormControl>
                <TextField
              id="input-with-icon-textfield"
              label="Search Bar"
              InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
              ),
              }}
            />            
            </FormControl>
            <FormControl>
              <InputLabel id="search-type">Catagory</InputLabel>
              <Select
                labelId="search-type-label"
                id="search-type-select"
                value={catagory}
                onChange={handleChange}
                className = {classes.select}
              >
                <MenuItem value={1}>Name</MenuItem>
                <MenuItem value={2}>City</MenuItem>
              </Select>
            </FormControl>
            
            </div>
            <FormControl>
            <Button className={classes.button} variant="contained" size="medium" mt={20}>Search</Button>
            </FormControl>
            
            </Toolbar>
          </AppBar>
        </div>
      </div>
      

      )
  }