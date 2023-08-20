import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import me from '../assets/me.jpeg';
import MyTimeline from '../components/navbar/MyTimeline';

const styles = {
  container: {
    marginTop: 20,
    padding: 20,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '80%',
    height: '80%',
    borderRadius: '50%',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

function AboutMyself() {
  return (
    <>
      <Grid container spacing={2} style={styles.container}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={styles.paper}>
            <Typography variant='h5' gutterBottom>
              About Myself
            </Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              consequatur iusto nulla sit, natus ratione in ea atque esse
              aspernatur incidunt! Perspiciatis inventore facere expedita nulla,
              molestias repudiandae praesentium fugiat corrupti dolorem placeat,
              vitae architecto consequuntur quas suscipit. Incidunt cumque natus
              atque ullam esse velit amet ea, dolores soluta illum!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} style={styles.imageContainer}>
          <img src={me} alt='My Alt Text' style={styles.image} />
        </Grid>
      </Grid>
      <MyTimeline />
    </>
  );
}

export default AboutMyself;
