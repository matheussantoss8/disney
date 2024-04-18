import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: 'none',
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
}

const modalPersonProps = {
  _id: 0,
  name: '',
  imageUrl: '',
  film: [],
  videoGames: [],
  tvShows: [],
  onClose: () => {}
}

export default function ModalPerson({
  _id,
  name,
  imageUrl,
  film,
  videoGames,
  tvShows,
  onClose
} : modalPersonProps) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    handleOpen();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return(
    <Box sx={style}>
      <Modal
        key={_id}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal-box' sx={{...style}}>
          <Button className='button' onClick={() => handleClose()}>X</Button>
          <div className="modal-person">
            <img className='modal-img' src={imageUrl} alt={name}/>
            <Typography id="modal-modal-title" variant="h7" component="h2">
              {name}
            </Typography>
          </div> 
          <div className="modal-text">
            <div>
              <Typography id="modal-modal-title" variant="h7" component="h2">
                FILMES
              </Typography>
              {film ? (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {film}
                </Typography>
              ) : (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nenhum filme
                </Typography>
              )}
            </div>
            <div class="divider"></div>
            <div>
              <Typography id="modal-modal-title" variant="h7" component="h2">
                VIDEO GAMES
              </Typography>
              {videoGames ? (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {videoGames}
                </Typography>
              ) : (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nenhum Video Game
                </Typography>
              )}
            </div>
            <div class="divider"></div>
            <div>
              <Typography id="modal-modal-title" variant="h7" component="h2">
                SHOW DE TV
              </Typography>
              {tvShows ? (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {tvShows}
                </Typography>
              ) : (
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nenhum Show de TV
                </Typography>
              )}
            </div>
          </div>
        </Box>
      </Modal>  
    </Box>
  )
}