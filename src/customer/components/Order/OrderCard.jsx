import { Grid, Grid2 } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
         
         <Grid item xs={6}>

            <div className='flex cursor-pointer'>
                <img className="w-[5rem] h-[5rem] object-cover object-top" src='https://rukminim2.flixcart.com/image/224/224/xif0q/shirt/d/n/w/-original-imah3bn9cvk9w6gk.jpeg?q=90' alt=''/>

                <div className='ml-5 space-y-2'>
                    <p className=''>Men Slim Mid Size Bule Shirt</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

                </div>
            </div>

         </Grid>

         <Grid item xs={2}>
            <p>₹1099</p>

         </Grid>

         <Grid item xs={4}>
            {true && <div><p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered On Mar 03
                </span>
            </p>
            <p className='text-xs'>
                Your Item Has Been Delivered 
            </p>
            </div> }
           {false && <p>
                <span>
                    Expected Delivery On Mar 03
                    </span>
                
            </p>}

         </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard