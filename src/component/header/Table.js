import React, {Component} from 'react'
import { AppBar, Toolbar, TextField, FormControl, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class Table extends Component {

constructor(props)
{
    super(props)
    this.state = {
        users:[],
        isLoading:false,
        isError:false,
        category: 0,
        input :"",
        pressed : ''
    }
}

//async func will get request 

async componentDidMount(){
    this.setState({isLoading:true})

    const response = await fetch ("https://jsonplaceholder.typicode.com/users")

    if (response.ok){
        const users = await response.json()
        console.log(users)
        this.setState({users,isLoading:false})
    }
    else 
    {
        this.setState({isError:true,isLoading:false})
    }
}
 // handles the category select drop-down
 handleChange = (event) => {
    this.setState({category:event.target.value});
  };

  // handles the search bar input
  handleInput = (event) => {
    this.setState({input:event.target.value});
  }

  // handles the search button
 handleSearch = (event) => {
    this.setState({pressed:true});

    if (this.state.input !== ""){ 
        if (this.state.category === 1){
          alert("Search name");
        }
        else if (this.state.category === 2){
          alert("Search City")
        }
        else {
          alert("Select a category"); //if no category selected, sends error message
      }
    }
    else{
      alert("Search bar is empty"); //if input is empty, sends error message
    }

    this.setState({press:false});
  }
  
    
renderTableHeader = () =>
{
    return Object.keys(this.state.users[0]).map(attr => <th key = {attr}>{attr.toUpperCase()}</th>)
}

renderTableRows = () =>
{
     return this.state.users.map(user =>{
        return (
            <tr key = {user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{`${user.address.street},${user.address.city}`}</td>
            <td>{user.phone}</td>
            </tr>)
    })
}

// The sorting algorithm is backed by a simple bubble sort. 
 sortByCity = (user) => {
   
    for(var i = 0; i < user.length; i++){
   
        // Last i elements are already in place  
        for(var j = 0; j < ( user.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(user[j].address.city > user[j+1].address.city){
              
            // If the condition is true then swap them
            var temp = user[j]
            user[j] = user[j + 1]
            user[j+1] = temp
            
          }
        }
        
       }

       return user;
      
};
// This handles sorting the items in the list by city. The ID numbers reflect their former positions. 
handleSort = (user) =>  {
    this.setState({users: this.sortByCity(user)});
    this.render();
    alert('Sorted');
};


   


render()
    {
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

        // sets states for the different components in the toolbar
  //const classes = this.useStyles;
  

        const {users,isLoading,isError} = this.state
        if (isLoading){
            return <div>Loading...</div>
        }

        if(isError){
            return <div>Error...</div>
        }

        return users.length > 0 ? (
            <div>
            <div>
            <div > 
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
                onChange = {this.handleInput}
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
                    value={this.state.category}
                    onChange={this.handleChange}
                    default = {0}
                >
                    <MenuItem value={1}>Name</MenuItem>
                    <MenuItem value={2}>City</MenuItem>
                </Select>
                </FormControl>
                
                </div>
                <FormControl>
                <Button 
                variant="contained" 
                size="medium" 
                mt={20}
                onClick = {this.handleSearch}
                >Search</Button>
                </FormControl>
                <div edge="end">
                <Button 
                variant="contained" 
                size="medium" 
                edge="end"
                onClick = {(e) => this.handleSort(this.state.users)}> Sort By City</Button>
                </div>
                </Toolbar>
            </AppBar>
            </div>
        </div>
                <table>
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>
                </div>
        ):(<div>No Users</div>)
       
    }
} 

export default Table;
