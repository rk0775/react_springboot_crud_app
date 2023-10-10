import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export const urls = [
  {
    text: "Add Student",
    url: "/add_student",
    icon:<AccountCircleIcon/>
  },
  {
    text: "Show Students",
    url: "/show_students",
    icon:<ContactsIcon/>
  },
  
  {
    text: "Check Rank",
    url: "/student_rank",
    icon:<MilitaryTechIcon/>
  },
  {
    text: "Update Record",
    url: "/sat_update",
    icon:<TipsAndUpdatesIcon/>
  },
  {
    text: "Remove Record",
    url: "/student_remove",
    icon:<DoDisturbOnIcon />
  }
]