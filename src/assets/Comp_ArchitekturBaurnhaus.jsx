import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ArchitekturBauernhaus() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, mt: '10px' }}>
      <Grid container spacing={2}>
        {/* Left column for text */}
        <Grid xs={12} lg={7}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Architektur
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "medium" } }}>
              Hof&Gut ist ausgewählter Ort 2012 der Architektenkammer Niedersachsen.
              Gute Architektur ist nicht nur eine Frage des Preises, sondern insbesondere der Phantasie und des Könnens der Architekten, 
              die Wünsche und Anforderungen ihrer Bauherren optimal umzusetzen. Architekturqualität lohnt sich überall und an jedem Ort. 
              Daher freut es uns umso mehr, dass Hof&Gut als ausgewählter Ort nominiert wurde.
            </Typography>
          </Item>
        </Grid>

        {/* Right column for image */}
        <Grid xs={12} lg={5}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%' }}>
            <CardMedia
              component="img"
              image="20230720_115731_resized.jpg"
              alt="Bauernhaus"
              sx={{
                objectFit: 'cover',
                height: '100%',
                width: '100%',
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
