import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { saveStudent } from '../../apis/student';
import Swal from 'sweetalert2';

export default function AddStudent() {
  const navigate = useNavigate();

  const handelSubmitStudentData = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
      saveStudent(data).then((res) => {
        if (res.status === 0)
          navigate("/show_students");
      })
  }

  return (
    <div>

      <h2 className='center gray'>ADD STUDENT</h2>

      <Box className='center' component="form" noValidate onSubmit={handelSubmitStudentData} sx={{ mt: 2 }}>
        <Grid container sm={12} md={5} >
          <Grid item xs={12} >
            <TextField
              autoComplete="given-name"
              name="name"
              required="true"
              fullWidth
              id="name"
              label="Name"
              autoFocus
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={6} pr={1} >
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
          <Grid item xs={6} pl={1}>
            <TextField
              autoComplete="given-name"
              name="pincode"
              required
              fullWidth
              id="pincode"
              label="Pincode"
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={6} pr={1} >
            <TextField
              autoComplete="given-name"
              name="city"
              required
              fullWidth
              id="city"
              label="City"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={6} pl={1}>
            <TextField
              autoComplete="given-name"
              name="country"
              required
              fullWidth
              id="country"
              label="Country"
              multiline
              autoFocus
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              autoComplete="given-name"
              name="address"
              required
              fullWidth
              id="address"
              label="Address"
              multiline
              rows={4}
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
              Submit
            </Button>
          </Grid>

        </Grid>

      </Box>


    </div>
  )
}
