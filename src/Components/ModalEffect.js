// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import Button from '@material-ui/core/Button'

// const useStylesModal = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// function SimpleModal(props) {
//   console.log('modal props', props)
//   const classesModal = useStylesModal();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   // let modalName = props
//   // let modalDescription = ''

//   // let cards = props.productList.map((product) => {
//   return (
//     <div>
//       <Button size="small" color="primary" onClick={handleOpen}>
//         Learn More
//       </Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classesModal.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classesModal.paper}>
//             <h2 id="transition-modal-title">NAME</h2>
//             <p id="transition-modal-description">Item Description.</p>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   )
// }

// export default SimpleModal;