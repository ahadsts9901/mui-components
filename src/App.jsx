import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import MiniDrawer from './MUI/MiniDrawer';
import BasicTextField from './MUI/BasicTextField';
import PasswordField from './MUI/PasswordField';
import { Button, IconButton, Typography } from '@mui/material';
import BasicAlert from './MUI/BasicAlert';
import BackDrop from './MUI/Backdrop';
import SnackBar from './MUI/SnackBar';
import BasicAccordion from './MUI/BasicAccordion';
import AppBarDrawer from './MUI/AppBarDrawer';
import FixedBottomNavigation from './MUI/FixedBottomNavigation';
import LongMenu from './MUI/LongMenu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ControlledOpenSpeedDial from './MUI/ControlledOpenSpeedDial';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import ScrollableTabsButtonAuto from './MUI/ScrollableTabsButtonAuto';
import Tab from '@mui/material/Tab';


function App() {

  return (
    <>
      {/* <Button variant='contained' style={{backgroundColor:"#0099ff", color:"#fff"}}>Button</Button> */}
      {/* <MiniDrawer/> */}
      {/* <BasicTextField type="email" label="Email" /> */}
      {/* <PasswordField /> */}
      {/* <BasicAlert icon="info" message="info"/> */}
      {/* <BackDrop color="white"/> */}
      {/* <SnackBar icon="error" message="cant sign up" variant="outlined" /> */}
      {/* <BasicAccordion title="Click To Open"
        description={`Make sure your TypeScript and React versions are 
        compatible with the TypeScript syntax used in this code. If 
        you still face issues, please provide more details about the 
        specific error messages you're encountering.`}
      /> */}
      {/* <AppBarDrawer content={`Make sure your TypeScript and React versions are 
        compatible with the TypeScript syntax used in this code. If 
        you still face issues, please provide more details about the 
        specific error messages you're encountering. 
        Make sure your TypeScript and React versions are 
        compatible with the TypeScript syntax used in this code. If 
        you still face issues, please provide more details about the 
        specific error messages you're encountering.`} /> */}
      {/* <FixedBottomNavigation /> */}
      {/* <LongMenu options={[
        'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'
      ]}
      /> */}
      {/* <ControlledOpenSpeedDial actions={
        [
          { icon: <FileCopyIcon />, name: 'Copy' },
          { icon: <SaveIcon />, name: 'Save' },
          { icon: <PrintIcon />, name: 'Print' },
          { icon: <ShareIcon />, name: 'Share' },
        ]
      } /> */}
      {/* <ScrollableTabsButtonAuto tabs={
        [
          <Tab label="Item One" />,
          <Tab label="Item Two" />,
          <Tab label="Item Three" />,
          <Tab label="Item Four" />,
          <Tab label="Item Five" />,
          <Tab label="Item Six" />,
          <Tab label="Item Seven" />
        ]
      } /> */}
      {/* <h1>Vite</h1> */}
    </>
  )
}

export default App
