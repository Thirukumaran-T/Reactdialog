import React, { useState } from 'react';
import { Button, Dialog, DialogContent, Tabs, Tab, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Slide from '@mui/material/Slide';
import TabPanel from './TabelPanel';  // Import TabPanel component
import './App.css';  // Import your CSS file

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const App = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        classes={{ paper: 'custom-dialog-paper' }} // Custom class for styling
      >
        <DialogContent>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
            variant="fullWidth"
          >
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Typography variant="h6">Form in Tab 1</Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth margin="normal" label="First Name" variant="outlined" />
              <TextField fullWidth margin="normal" label="Last Name" variant="outlined" />
              <TextField fullWidth margin="normal" label="Email" variant="outlined" />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h6">Form in Tab 2</Typography>
            <Box component="form" noValidate autoComplete="off">
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select labelId="demo-simple-select-label" label="Age">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <TextField fullWidth margin="normal" label="Address" variant="outlined" />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h6">Form in Tab 3</Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth margin="normal" label="Username" variant="outlined" />
              <TextField fullWidth margin="normal" label="Password" type="password" variant="outlined" />
              <TextField fullWidth margin="normal" label="Confirm Password" type="password" variant="outlined" />
            </Box>
          </TabPanel>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
