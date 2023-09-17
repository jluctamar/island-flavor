import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';





function MeatsImageList() {
    return (
        <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={2} gap={7}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
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
    
    img {
      border-radius: 16px;
      box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px;
    }
`



const itemData = [
    {
        img: 'https://i.ytimg.com/vi/fv5N_W0yQW4/maxresdefault.jpg',
        title: 'Oxtail',
      },
      {
        img: 'https://i.ytimg.com/vi/GjpnsqYOv_g/maxresdefault.jpg',
        title: 'Griot',
      },
      {
        img: 'https://kennethtemple.com/wp-content/uploads/2022/11/Haitian-Stewed-Chicken-6.jpg',
        title: 'Chicken',
      },
      {
        img: 'https://d1ralsognjng37.cloudfront.net/1152ae9e-1360-4cb6-b759-b347b5f64943',
        title: 'Turkey',
      },


];

export default MeatsImageList