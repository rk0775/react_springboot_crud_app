import axios from "axios";
import { BASE_URL } from "./commen";
import Swal from "sweetalert2";
import { Toast } from "../commen/commen";





export const saveStudent = async (data) => {
    const result = await axios.post(`${BASE_URL}/std/saveStudentDetails`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => {
            Swal.fire(
                'Success',
                'Student details saved successfully.',
                'success'
            )
            return response.data;
        },
        (error) => {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: error.response.data.message
            })
            return error;
        }
    ).catch(err => {
        return (err)
    });
    return result;
}



export const getStudents = async (pageNumber) => {
    const result = await axios.get(`${BASE_URL}/std/getStudents?pageNumber=${pageNumber - 1}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: error.response.data.message
            })
            return error;
        }
    ).catch(err => {
        return (err)
    });
    return result;
}



export const getStudentsRank = async (name) => {
    const result = await axios.get(`${BASE_URL}/std/getRank?name=${name}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => {
            return response.data;
        },
        (error) => {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: error.response.data.message
              })
            return error;
        }
    ).catch(err => {
        return (err)
    });
    return result;
}



export const updateStudentSAT = async (data) => {
    const result = await axios.post(`${BASE_URL}/std/updateSatScore`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => {
            Swal.fire(
                'Updated!!',
                'Your record updated successfully.',
                'success'
            )
            return response.data;
        },
        (error) => {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: error.response.data.message
              })
            return error;
        }
    ).catch(err => {
        return (err)
    });
    return result;
}



export const removeStudent = async (name) => {
    const result = await axios.get(`${BASE_URL}/std/removeStudent?name=${name}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        (response) => {
            Swal.fire(
                'Deleted!',
                'Your record removed successfully.',
                'success'
            )
            return response.data;
        },
        (error) => {
            console.log(error)
            Toast.fire({
                icon: 'error',
                title: error.response.data.message
              })
            return error;
        }
    ).catch(err => {
        return (err)
    });
    return result;
}

