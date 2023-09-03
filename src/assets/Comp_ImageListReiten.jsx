import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ReitenCustomImageList() {
  return (
    <ImageList
      sx={{
        width: '100%',
        height: "625px",
        transform: 'translateZ(0)',
      }}
      rowHeight={450}
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
    img: 'Reint5.jpeg',
    title: 'Ponie Reiten',
  },
  {
    img: 'Pferd.jpeg',
    title: 'Pferd',
  },
  {
    img: 'Adessa.jpeg',
    title: 'Folen',
  },
  {
    img: 'reiten3 1.png',
    title: 'Kind mit Ponie',
  },
  {
    img: 'folen.png',
    title: 'Kind mit Ponie',
    featured: 'true'
  },

];