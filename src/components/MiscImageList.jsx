import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';





function MiscImageList() {
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
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
      },
      {
        img: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=jpeg,quality=50/media/photos/839dd6ec-6a05-46d6-98c3-0bfe4c2009b9-retina-large.jpg',
        title: 'Kola Lakay',
      },
      {
        img: 'https://www.diabeticfoodie.com/wp-content/uploads/2018/07/lemonyRomaineSalad.jpg',
        title: 'Burger',
      },
      {
        img: 'https://i0.wp.com/recipesofholly.com/wp-content/uploads/2020/04/The-Best-Carrot-Cake-Recipe-2.jpg?fit=1200%2C800&ssl=1',
        title: 'Carrot Cake',
      },


];

export default MiscImageList