import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React, { useState, ChangeEvent, useEffect, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import Login from './Login';
import { AuthContext } from '../contexts/AuthContext';

//---------------------------------------- Conponent WelcomeMessage ---------------------------------------------

//-------------- IMPORTANT -------------------
//interface for props
interface WelcomeMessageProps {
  position: string;
  country?: string; //có thể có hoặc ko, nếu k có mặc định ="Vietnam"
}
//-------------- IMPORTANT -------------------
function WelcomeMessage({
  position, //phải khai báo dạng cho position và dạng của country tại WelcomeMessageProps
  country = 'Vietnam',
}: WelcomeMessageProps) {
  const {
    authInfo: { username },
  } = useContext(AuthContext);
  return (
    <Box mb={1}>
      Welcome {username} - {position} from {country}
    </Box>
  );
}

//---------------------------------------- Conponent Navbar ---------------------------------------------

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: 'white',
      borderBottom: '1px solid white',
    },
  })
);

// phim tat -> to create export default: rafce -> tab
export default function Navbar() {
  //styles
  const classes = useStyles();
  //state
  const [position, setPosition] = useState<string>('Full-stack developer');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  // # HC
  const [loginOpen, setLoginOpen] = useState(false);

  //effect
  //-------------- IMPORTANT -------------------
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000); //mỗi 1s (1000) thì gọi hàm setInterval 1 lần để lấy thời zan mới
    return () => clearInterval(timer); //dọn dẹp sau khi chạy xong useEffect
  }, []); // => clean up function, trả về 1 hàm để xóa cái timer đi khi useEffect chạy xong

  // const onPositionChange = (
  //   //event ở đây dạng any => ko cho phép, => xem event dạng zì tại onChange => dạng unknown => implement ChangeEvent vào cho event
  //   //-------------- IMPORTANT -------------------
  //   event: ChangeEvent<{
  //     value: unknown;
  //   }>
  // ) => {
  //   setPosition(event.target.value as string);
  // };

  //useContext
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  return (
    /** # CT */
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movie</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} country="Canada" />
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  // có thể tạo 1 function onPositionChange rồi gắn vào
                  // onChange={onPositionChange} //handling for state
                  // hoặc có thể code ngay tại đây luôn
                  onChange={(
                    //event ở đây dạng any => ko cho phép, => xem event dạng zì tại onChange (trỏ chuột đến chữ onChange to know)
                    //  => dạng unknown => implement ChangeEvent vào cho event
                    //-------------- IMPORTANT -------------------
                    event: ChangeEvent<{
                      value: unknown;
                    }>
                  ) => {
                    setPosition(event.target.value as string);
                  }}
                  className={classes.positionSelect} //handling for styles
                >
                  <MenuItem value="Full-stack developer">
                    Full-stack developer
                  </MenuItem>
                  <MenuItem value="Front-end developer">
                    Front-end developer
                  </MenuItem>
                  <MenuItem value="Back-end developer">
                    Back-end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">
                {time
                  // .toUTCString()
                  .toLocaleString('en-US', { timeZone: 'America/New_York' })}
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() =>
                isAuthenticated ? toggleAuth('') : setLoginOpen(true)
              }
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
          </Box>
          {/* Login */}
          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
