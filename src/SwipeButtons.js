import React from 'react';
import './SwipeButtons.css';
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function SwipeButtons() {
  return (
    <div className="SwipeButtons">
      <IconButton style={{ color: '#f5b748' }} className="swipeButton_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton style={{ color: 'red' }} className="swipeButton_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton style={{ color: '#62b419' }} className="swipeButton_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton style={{ color: '#76e2b3' }} className="swipeButton_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton
        style={{ color: 'violet' }}
        className="swipeButton_lightening"
      >
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
