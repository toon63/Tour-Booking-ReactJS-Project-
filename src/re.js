import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import img from './Pic/ayutthaya/LIaolqBL.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
    <div className='cardre'>
    <Card sx={{ display: 'flex',backgroundColor:'#FFFAEC'}}>
    <CardMedia
        component="img"
        sx={{ width: '50%',height:'400px' }}
        // className='sizeimage'
        image={img}
        alt="Live from space album cover"
      />
      <Box 
      sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <CardContent 
        sx={{ flex: '1 0 auto' }}
        >
          {/* <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography> */}
          <h1 className='headre'>Name tour</h1>
          <Row>
        <Col> <h1 className='detailre'>Date</h1></Col>
        <Col><h1 className='detailre'>Time</h1></Col>
        <Col><h1 className='detailre'>Price</h1></Col>
      </Row>
      <Row>
        <Col> <h1 className='detailre1'>1/02/22</h1></Col>
        <Col><h1 className='detailre1'>12:00</h1></Col>
        <Col><h1 className='detailre1'>3,000</h1></Col>
      </Row>
      <Row>
        <Col> <h1 className='detailre'>Date</h1></Col>
        <Col><h1 className='detailre'>Time</h1></Col>
        <Col><h1 className='detailre'>Price</h1></Col>
      </Row>
      <Row>
        <Col> <h1 className='detailre1'>1/02/22</h1></Col>
        <Col><h1 className='detailre1'>12:00</h1></Col>
        <Col><h1 className='detailre1'>3,000</h1></Col>
      </Row>
         
         
        </CardContent>
       
       <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
      </Box>
     
    </Card>
    </div>
    </>
  );
}
