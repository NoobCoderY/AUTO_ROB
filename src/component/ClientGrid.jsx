import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {clintArrImage} from "../constants/data"
import { width } from '@mui/system';

const ClientGrid = () => {
  return (
 <>
 <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {
            clintArrImage.map((data_img,idx)=>{
               
                return(
                    <Grid item xs={6} sm={3} md={3} >
                    <div style={{ maxWidth:"18vw",borderRadius: "24px" ,backgroundColor:"#fff"}} className="clint_img">
                     <img src={data_img.image} alt="" ></img>
                    </div>
                  </Grid>
                )
            })
        }
      </Grid>
    </Box>
 </>
  )
}

export default ClientGrid