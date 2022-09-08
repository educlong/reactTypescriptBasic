/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/naming-convention */
import { Fab } from '@material-ui/core';
import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: 'fixed',
      right: '3rem',
      bottom: '3rem',
    },
  })
);

const ToggleThemeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color="primary"
      variant="extended"
      className={useStyles().floatBtn}
      onClick={() => toggleTheme(theme === 'primary' ? 'secondary' : 'primary')}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemeBtn;
