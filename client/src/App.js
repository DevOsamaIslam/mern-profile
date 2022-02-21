import './App.css';

import Box from '@mui/material/Box'
import ProfileCard from './components/ProfileCard';
import { createTheme } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useDispatch } from 'react-redux';
import userActions from './state/actions/user.action';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: pink
  }
})

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    minWidth: '90vw',
    alignItems: 'center'
  }
}))

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.getUser())
  })
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <ProfileCard/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
