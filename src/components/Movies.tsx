/* eslint-disable @typescript-eslint/naming-convention */
import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core';
import React, { ChangeEvent, useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MovieContext from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: '5px',
    },
    movieChip: {
      fontSize: '2rem',
      padding: '30px 30px',
      margin: '5px',
    },
  })
);

function Movies() {
  const classes = useStyles();
  //state for input movie
  const [movie, setMovie] = useState('');
  //context from Movies.tsx
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Box display="flex" justifyContent="center" my={5}>
        {/* for input */}
        <TextField
          label={`Your favourite movie... `}
          variant="outlined"
          className={classes.movieInput}
          value={movie}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setMovie(event.target.value)
          }
        />
        {/* for add */}
        <Button
          variant="contained"
          color={theme}
          onClick={() => {
            addMovie(movie);
            setMovie('');
          }}
        >
          Add
        </Button>
      </Box>
      {/* display all movies */}
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((_movie, index) => (
          <Chip
            color={theme as Exclude<PropTypes.Color, 'inherit'>}
            key={_movie.id}
            label={_movie.title}
            clickable={true}
            className={classes.movieChip}
            onDelete={() => {
              deleteMovie(_movie.id);
            }}
          />
        ))}
      </Box>
    </div>
  );
}

export default Movies;
