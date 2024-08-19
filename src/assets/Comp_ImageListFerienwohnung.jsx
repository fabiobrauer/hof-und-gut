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

export default function FerienwohungCustomImageList() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: "1000px",
        transform: 'translateZ(0)',
      }}
      rowHeight={300}
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
  {
    img: 'Ferienwohnung1.jpg',
    title: 'Ferienwohnung',
    featured: 'true'
  },
  {
    img: 'Ferienwohnung2.jpg',
    title: 'Ferienwohnung',
    featured: 'true'
  },
  {
    img: 'Ferienwohnung3.jpg',
    title: 'Ferienwohnung',
    featured: 'true'
  },
  {
    img: 'Ferienwohnung4.jpg',
    title: 'Ferienwohnung',
    featured: 'true'
  },

];