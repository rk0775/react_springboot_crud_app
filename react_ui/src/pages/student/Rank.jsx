import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { getStudentsRank } from '../../apis/student';

export default function Rank() {
    const [rank, setRank] = useState(null);

    const handelCheckRank = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        getStudentsRank(name).then((res) => {
            if(res.status===0)
                setRank(res.rank);
        })
    }

    return (
        <div>
            <h2 className='center gray'>CHECK RANK</h2>

            {rank &&
                <Box className='center' component="form" noValidate onSubmit={handelCheckRank} sx={{ mt: 2 }}>
                    <Grid container sm={12} md={5} >
                        <Typography variant="h6" component="h3" color={"#03a9f4"} >
                            YOUR&nbsp; <b>RANK</b>&nbsp; IS&nbsp; <b>{rank}</b>&nbsp; .
                        </Typography>
                    </Grid>
                </Box>
            }
            <Box className='center' component="form" noValidate onSubmit={handelCheckRank} sx={{ mt: 2 }}>
                <Grid container sm={12} md={5} >
                    <Grid item xs={12} >
                        <TextField
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            autoFocus
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} mt={3} >
                        <Button
                            fullWidth
                            type='submit'
                            variant="contained"
                            sx={{ mb: 2, py: 2, }}
                        >
                            Check Rank
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
