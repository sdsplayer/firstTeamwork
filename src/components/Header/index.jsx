import React from 'react'
import { Main } from './style'
import { Box, Typography, Button } from '@mui/material'
import img from '../../assets/images/hero1.jpg'

const Header = () => {
    return (

        <Main>
            <Box sx={{
                paddingTop: '40px',
                marginBottom: '100px'
            }}>
                <Typography sx={{
                    font: 'DMSans',
                    fontSize: '60px',
                    color: '#19191B',
                    fontWeight: 700,
                    marginBottom: '25px',
                    lineHeight: '60px'
                }}>
                    Grow your subscription business
                </Typography>
                <Typography
                    sx={{
                        color: '#696871',
                        marginBottom: '40px'
                    }}>
                    Outcome-centered products that reduce churn, <br />
                    optimize pricing, and grow your subscription <br />
                    business end-to-end.
                </Typography>
                <Button
                variant='contained'
                sx={{
                    width:'210px',
                    height: '60px',
                    background: '#5454D4',
                    borderRadius: '10px'
                }}>
                    Get Started
                </Button>
            </Box>
            <Box><img src={img} alt="" height={'500px'} /></Box>
        </Main>
    )
}

export default Header