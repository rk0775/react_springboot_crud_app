import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { updateStudentSAT } from '../../apis/student';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function UpdateSat() {
    const navigate = useNavigate();
    const handleUpdateDataSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        Swal.fire({
            title: 'Are you sure?',
            text: "Are sure to update this record!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                updateStudentSAT(data).then((res) => {
                    if(res.status===0)
                        navigate("/show_students");
                })
            }
        })
    }

    return (
        <div>
            <h2 className='center gray'>UPDATE STUDENT</h2>

            <Box className='center' component="form" noValidate onSubmit={handleUpdateDataSubmit} sx={{ mt: 2 }}>
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
                    <Grid item xs={12} >
                        <TextField
                            autoComplete="given-name"
                            name="satScore"
                            required
                            fullWidth
                            id="satScore"
                            label="SAT score"
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
                            Update Record
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
