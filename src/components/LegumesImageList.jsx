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
        img: 'https://www.savorythoughts.com/wp-content/uploads/2021/07/Haitian-Akra-Accra-Recipe-Savory-Thoughts-5.jpg',
        title: 'Akra',
      },
      {
        img: 'https://www.therealhaiti.com/uploads/8/9/5/4/8954057/2608111_orig.jpg',
        title: 'Mac and Cheese',
      },
      {
        img: 'https://gardenandgun.com/wp-content/uploads/2021/12/haitiansoup.jpg',
        title: 'Soup',
      },
      {
        img: 'https://www.savorythoughts.com/wp-content/uploads/2022/03/SOS-PWA-NWA-Savory-Thoughts-13.jpg',
        title: 'Rice and Beans',
      },

      {
        img: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1200/https://healthiersteps.com/wp-content/uploads/2020/02/air-fryer-plantains.jpg',
        title: 'Bannan Peze',
      },


];

export default LegumesImageList