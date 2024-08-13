import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ZimmerCustomImageList() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: "1000px",
        transform: 'translateZ(0)',
      }}
      rowHeight={367}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
/*   {
    img: 'Gang2.jpg',
    title: 'Gang',
    featured: 'true'
  }, */
   {
    img: 'Zimmer1_2.jpg',
    title: 'Zimmer1',
    featured: 'true'
  }, 
  {
    img: 'Zimmer1.jpg',
    title: 'Zimmer1',
  },
  {
    img: 'ZImmer1_1.jpg',
    title: 'Zimmer1',
  },
/*   {
    img: 'Zimmer1_3.jpg',
    title: 'Zimmer1',
    featured: 'true'
  }, */
  {
    img: 'Zimmer2.jpg',
    title: 'Zimmer2',
    featured: 'true'
  },
  {
    img: 'Zimmer2_1.jpg',
    title: 'Zimmer2',

  },

  {
    img: 'Zimmer2_3.jpg',
    title: 'Zimmer2',
  },  
/*   {
    img: 'Zimmer2_2.jpg',
    title: 'Zimmer2 Ausblick',
    featured: 'true'
  }, */
  {
    img: 'Zimmer3.jpg',
    title: 'Zimmer3',
  },
  {
    img: 'Zimmer3_1.jpg',
    title: 'Zimmer3',
  },
  {
    img: 'Zimmer3_2.jpg',
    title: 'Zimmer3',
  },
  {
    img: 'Zimmer4.jpg',
    title: 'Zimmer4',
  },
  {
    img: 'Zimmer4_1.jpg',
    title: 'Zimmer4',
  },
  {
    img: 'Zimmer4_3.jpg',
    title: 'Zimmer4',
  },
  {
    img: 'Zimmer4_4.jpg',
    title: 'Zimmer4',
  },
  {
    img: 'Zimmer5.jpg',
    title: 'Zimmer5',
  },
  {
    img: 'Zimmer5_1.jpg',
    title: 'Zimmer5',
  },
  {
    img: 'Zimmer5_2.jpg',
    title: 'Zimmer5',
  },
  {
    img: 'Zimmer5_3.jpg',
    title: 'Zimmer5',    
    featured: 'true'
  },

];