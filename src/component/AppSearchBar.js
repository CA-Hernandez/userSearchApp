import React from 'react'
import { AppBar, Toolbar, TextField, FormControl, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// Defines the styling used in the Search Bar
const useStyles = makeStyles({
    root: {
      width: '70%',
      maxWidth: 800,
      fontSize: 20,
      justifyContent: "center",
      textAlign: "center"
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

  // sets states for the different components in the toolbar
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [input, setInput] = React.useState('');
  const [pressed, setPress] = React.useState('');

  // handles the category select drop-down
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // handles the search bar input
  const handleInput = (event) => {
    setInput.apply(event.target.value);
  }

  // handles the search button
  const handleSearch = (event) => {
    setPress(true);

    if (input !== ""){ 
        if (category === 1){
          alert("Search name");
        }
        else if (category === 2){
          alert("Search City")
        }
        else {
          alert("Select a category"); //if no category selected, sends error message
      }
    }
    else{
      alert("Search bar is empty"); //if input is empty, sends error message
    }

    setPress(false);
  }
  
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
              onChange = {handleInput}
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
              <InputLabel id="search-type">Category</InputLabel>
              <Select
                labelId="search-type-label"
                id="search-type-select"
                value={category}
                onChange={handleChange}
                className = {classes.select}
                default = {0}
              >
                <MenuItem value={1}>Name</MenuItem>
                <MenuItem value={2}>City</MenuItem>
              </Select>
            </FormControl>
            
            </div>
            <FormControl>
            <Button 
            className={classes.button} 
            variant="contained" 
            size="medium" 
            mt={20}
            onClick = {handleSearch}
            >Search</Button>
            </FormControl>
            <div edge="end">
              <Button 
              variant="contained" size="medium" edge="end"> Sort By City</Button>
            </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      

      )
  }
