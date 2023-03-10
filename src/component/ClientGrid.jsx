import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {clintArrImage} from "../constants/data"
import { width } from '@mui/system';

const ClientGrid = () => {
  return (
 <>
 <Box sx={{ width: '100%' }}>
      <Grid container justifyContent='center' gap={{ xs: 1, sm: 2, md: 2 }}>
        {
            clintArrImage.map((data_img,idx)=>{
               
                return(

                  <Grid item xs={6} sm={2.5} md={2.5} style={{ maxWidth:"18vw",borderRadius: "24px" ,backgroundColor:idx===7?"#101115":"#fff",display:'flex',alignItems:'center',justifyContent:'center'}} className="clint_img">
                  {/* <div style={{ maxWidth:"18vw",borderRadius: "24px" ,backgroundColor:"#fff"}} className="clint_img"> */}
                   <img src={data_img.image} style={{objectFit:'contain'}} alt="" ></img>
                  {/* </div> */}
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