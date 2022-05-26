import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';





function AppitizersImageList() {
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
      img: 'https://www.recetin.com/wp-content/uploads/2013/09/pollo_ajillo.jpg',
      title: 'Chicken Wings',
      },
      {
        img: 'https://gardengrubblog.com/wp-content/uploads/2021/08/Untitled-design-2021-08-08T212255.120.png',
        title: 'Jamacain Patty',
      },
      {
    img: 'https://howtofeedaloon.com/wp-content/uploads/2015/04/calamari-IG.jpg',
    title: 'Calamari',
      },
      {
        img: 'https://www.savorythoughts.com/wp-content/uploads/2019/01/Haitian-Patties-Haitian-Pate-Recipe-BHM-Virtual-Potluck-stacked-patties-on-white-plate.jpg',
        title: 'Hatian Patty',
      },


];

export default AppitizersImageList