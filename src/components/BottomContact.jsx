import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const styles = {
  contactCard: {
    bottom: 0, // Align the component at the bottom
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    padding: '1rem',
  },
};

function BottomContact() {
  return (
    <Card sx={styles.contactCard}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          Contact Me
        </Typography>
        <Typography variant='body1'>
          Feel free to reach out to me at email@example.com or through my social
          media profiles.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BottomContact;
