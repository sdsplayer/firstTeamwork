import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import IMG from '../../assets/Img/Group.jpg';
import IMG1 from '../../assets/Img/Group1.jpg';
import IMG2 from '../../assets/Img/Group3.jpg';
import IMG3 from '../../assets/Img/Group24.jpg';
import IMG4 from '../../assets/Img/Vector.jpg';
import IMG5 from '../../assets/Img/Content.png';


export default function ResponsiveGrid() {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '28.49px',
      }}>
        <img src={IMG1} alt="" />
        <img src={IMG} alt="" />
        <img src={IMG3} alt="" />
        <img src={IMG2} alt="" />
        <img src={IMG4} alt="" />
      </Box>

      <Box sx={{ marginTop: '150px', }}>
        <Grid container spacing={2} columns={16} sx={{
          justifyContent: 'center',
        }}>
          <Grid item xs={5}>
            <img src={IMG5} alt="" style={{
              width: '348.5px',
              height: '473px',
            }} />
          </Grid>
          <Grid item xs={7} sx={{
            marginLeft: '80px',
            marginTop: '150px',
          }}>
            <Typography sx={{
              fontSize: '50px',
              lineHeight: '57px',
              fontFamily: 'DMSans',
            }}>
              Subscription index
            </Typography>
            <Typography sx={{
              marginTop: '30px',
              fontSize: '20px',
              color: '#696871',
            }}>
              A daily dataset to keep you up to date on <br /> subscription market trends and what's happening in <br /> your vertical.
            </Typography>
            <Button variant="text" color="primary" sx={{
              marginTop: '30px',
            }}>
              Lern more
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
}