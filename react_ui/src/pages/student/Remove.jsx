import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import Swal from 'sweetalert2';
import { removeStudent } from '../../apis/student';
import { useNavigate } from 'react-router-dom';

export default function Remove() {
    const navigate = useNavigate();

    const handelRemoveData = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        Swal.fire({
            title: 'Are you sure?',
            text: "Are sure to remove this record!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeStudent(name).then((res) => {
                    if(res.status===0)
                        navigate("/show_students");
                })
            }
        })

    }
    return (
        <div>
            <h2 className='center gray'>REMOVE STUDENT</h2>

            <Box className='center' component="form" noValidate onSubmit={handelRemoveData} sx={{ mt: 2 }}>
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
                            Remove Record
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
