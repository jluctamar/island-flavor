import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';





function LegumesImageList() {
    return (
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={2} gap={7}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
    );
    
}

const Box = styled.div`
    width: 100%;
    height: 100%;
`



const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
      },
      {
        img: 'http://haitiancooking.com/wp-content/uploads/2013/12/plantains.jpg',
        title: 'Bannan Peze',
      },
      {
        img: 'https://gardenandgun.com/wp-content/uploads/2021/12/haitiansoup.jpg',
        title: 'Soup',
      },
      {
        img: 'https://www.savorythoughts.com/wp-content/uploads/2022/03/SOS-PWA-NWA-Savory-Thoughts-13.jpg',
        title: 'Rice and Beans',
      },


];

export default LegumesImageList