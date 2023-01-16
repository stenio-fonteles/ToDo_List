import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function AccountMenu({registerNewCategoryAndTech}) {
  const [anchorEl, setAnchorEl] = useState(false);
  const [newCategory, setNewCategory] = useState('')
  const [newTech, setNewTech] = useState('')
  const [ image, setImage] = useState('')

  function handleClick(){
    setAnchorEl(true)
  }


  const objNewcategoryAndTech = {
    "newCategory":newCategory,
    "newTech":newTech,
    "image":image

  }
  function objTask() {
    if(newTech == '' || newCategory == '' || setImage == '' ){
        return
    }
    registerNewCategoryAndTech(objNewcategoryAndTech)
    setNewCategory('')
    setNewTech('')
    setImage('')
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Settings sx={{ width: 32, height: 32 }}>M</Settings>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        open={anchorEl}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
            <TextField id="outlined-basic" label="Add categoria" variant="outlined"  value={newCategory}onChange={(text) => setNewCategory(text.target.value)}/>
        </MenuItem>
        <MenuItem>
            <TextField id="outlined-basic" label="Add tech" variant="outlined"  value={newTech} onChange={(text) => setNewTech(text.target.value)}/>
        </MenuItem>
        <MenuItem>
            <TextField id="outlined-basic" label="Image URL" variant="outlined"  value={image} onChange={(text) => setImage(text.target.value)}/>
        </MenuItem>
        <Divider />
        <div style={{display:"flex",justifyContent:"space-around", cursor:"pointer"}}>
            <SendIcon fontSize="small" onClick={objTask}/>
            <CloseIcon onClick={() => setAnchorEl(false)}/>
        </div>
         
        
      </Menu>
    </React.Fragment>
  );
}