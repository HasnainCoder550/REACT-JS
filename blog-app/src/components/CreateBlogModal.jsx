import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import * as React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Buttoncmp from "../components/Button";
import Input from "../components/Input";
import { db } from '../firebase/config.js';
import { uploadImageToCloudinary } from '../helper/helper.js';
import { userId } from './ProtectedRoute.jsx';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateBlogModal() {
  const [blogForm , setBlogForm] = React.useState({
    title : "",
    description : "",
    file : ""
  }) 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


const handleInputChange = (key,value) => {
setBlogForm((prev) => ({...prev , [key] : value}));
}


const saveDataIntoDB = async (url, data) => {
  console.log(data);

  try {
   let dataSaved =  await addDoc(collection(db, "blogs"), {
     
      blogImgUrl : url,
      title : data.title,
      description : data.description,
      authorId : userId,
      createdAt : serverTimestamp(),

    });
    toast.success("Blog Created Successfully!")

    console.log(dataSaved);
    
    // console.log(userDataSaved);
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);

  }
}


const postBlogHandler = async() => {
    try {
        console.log("Chala bhai...!");
        console.log("Chala bhai...!", blogForm);

      let imgUrl = await   uploadImageToCloudinary(blogForm.file);
      console.log(imgUrl);
      saveDataIntoDB(imgUrl , blogForm)
        
    } catch (error) {
        console.log(error);
        
    }
}


// const getBlogsData = async() => {
// try {


// const q = query(collection(db, "cities"), where("capital", "==", true));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// } catch (error) {
//   console.log(error);
  
// }
// }

  return (
    <div>
      <Button onClick={handleOpen}>Create Blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Create Your Blog
          </Typography>
         

 <Input handler={handleInputChange} id="title" label={"Enter Your Blog Title"} type={"text"} value={blogForm.title}/>
 <Input handler={handleInputChange} id="description" label={"Enter Your Blog Description"} type={"text"} value={blogForm.description}/>
<Input handler={handleInputChange} id="file" label={"ChooseFile"} type="file" value=""/>


         <Buttoncmp handler={postBlogHandler} title='Create Blog'/>
        </Box>
      </Modal>

      <ToastContainer />
    </div>
  );
}

// handler={} value={}

