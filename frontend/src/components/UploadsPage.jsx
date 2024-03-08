import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Uploadicon from '../images/6323.jpg'


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 100 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
  marginInlineStart: "10"
});

export default function InputFileUpload() {
  return (
    <div className = "ButtonContainer" style={{}}>
      
      <div style={{display:"flex",marginTop:"30px"}}>
        
          <div> 
            <img src={Uploadicon} style={{width:"10rem",marginLeft:"17rem"}}/>
            <Button
              style={{width:"15rem", marginLeft:"15rem",marginRight:"20rem"}}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Time Tables 
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>

          <div>
            <img src={Uploadicon} style={{width:"10rem",marginLeft:"17%"}}/>
            <Button
              style={{width:"15rem"}}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Student List
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </div>

        <div style={{display:"flex",marginTop:"75px"}}>
          
          <div>
          <img src={Uploadicon} style={{width:"10rem",marginLeft:"17rem",}}/>
            <Button
              style={{width:"15rem",marginLeft:"15rem", marginRight:"20rem"}}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Lecturer Details
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>

        
        <div>
        <img src={Uploadicon} style={{width:"10rem",marginLeft:"17%"}}/>
          <Button
            style={{width:"15rem"}}
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Resources
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      </div>
    </div>
  );
}
