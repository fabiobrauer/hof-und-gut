import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProminentAppBar from './assets/Comp_AppBar'
import Homepage from './pages/Homepage'
const LazyGebäude = React.lazy(() => import('./pages/Gebäude'))
const LazyKontakt = React.lazy(() => import('./pages/Kontakt'))
const LazyLinks = React.lazy(() => import('./pages/Links'))
const LazyÖkologischeLandwirtschaft = React.lazy(() => import('./pages/ÖkologischeLandwirtschaft'))
const LazyPresse = React.lazy(() => import('./pages/Presse'))
const LazyReiten = React.lazy(() => import('./pages/Reiten'))
const LazySpeisenAmHof = React.lazy(() => import('./pages/SpeisenAmHof'))
const LazyStellenangebote = React.lazy(() => import('./pages/Stellenangebote'))
const LazyTeamtrainingUndFirmenevents = React.lazy(() => import('./pages/TeamtrainingUndFirmenevents'))
const LazyÜbernachtenAmHof = React.lazy(() => import('./pages/ÜbernachtenAmHof'))
const LazyVeranstaltungenKunstKultur = React.lazy(() => import('./pages/VeranstaltungenKunstKultur'))
const LazyDisclaimer = React.lazy(() => import('./pages/Disclaimer'))
const LazyÜberUns = React.lazy(() => import('./pages/ÜberUns'))
const LazyHofladen = React.lazy(() => import('./pages/Hofladen'))
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './assets/Footer'
import { CssBaseline } from '@mui/material'
import GlobalStyles from '@mui/material/GlobalStyles';






const theme = createTheme({
  palette: {
    primary: {
      light: 'rgb(80, 160, 103)',
      main: '#4caf50',
      dark: 'rgba(80, 140, 103)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f27573',
      main: '#ef5350',
      dark: '#a73a38',
      ButtonColor: 'rgb(181, 81, 81)',
      contrastText: '#000',
    },
  },
  typography:{
    fontFamily:'Libre Baskerville'
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          font-family: Libre Baskerville;
        },


      `,
    },
  },
});



              


function App() {

  return (
    <>

    <ThemeProvider theme={theme} >
    <ProminentAppBar></ProminentAppBar>
    <CssBaseline/>
{      <GlobalStyles styles={{  body:{ backgroundColor:'rgb(137, 160, 138)', fontFamily:'Libre Baskerville'} }} />
}      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='Gebäude' element={<React.Suspense fallback='Loading...'><LazyGebäude></LazyGebäude></React.Suspense>}></Route>
        <Route path='Kontakt' element={<React.Suspense fallback='Loading...'><LazyKontakt></LazyKontakt></React.Suspense>}></Route>
        <Route path='Links' element={<React.Suspense fallback='Loading...'><LazyLinks></LazyLinks></React.Suspense>}></Route>
        <Route path='ÖkologischeLandwirtschaft' element={<React.Suspense fallback='Loading...'><LazyÖkologischeLandwirtschaft></LazyÖkologischeLandwirtschaft></React.Suspense>}></Route>
        <Route path='Presse' element={<React.Suspense fallback='Loading...'><LazyPresse></LazyPresse></React.Suspense>}></Route>
        <Route path='Reiten' element={<React.Suspense fallback='Loading...'><LazyReiten></LazyReiten></React.Suspense>}></Route>
        <Route path='SpeisenAmHof' element={<React.Suspense fallback='Loading...'><LazySpeisenAmHof></LazySpeisenAmHof></React.Suspense>}></Route>
        <Route path='Stellenangebote' element={<React.Suspense fallback='Loading...'><LazyStellenangebote></LazyStellenangebote></React.Suspense>}></Route>
        <Route path='TeamtrainingUndFirmenevents' element={<React.Suspense fallback='Loading...'><LazyTeamtrainingUndFirmenevents></LazyTeamtrainingUndFirmenevents></React.Suspense>}></Route>
        <Route path='ÜbernachtenAmHof' element={<React.Suspense fallback='Loading...'><LazyÜbernachtenAmHof></LazyÜbernachtenAmHof></React.Suspense>}></Route>
        <Route path='VeranstaltungenKunstKultur' element={<React.Suspense fallback='Loading...'><LazyVeranstaltungenKunstKultur></LazyVeranstaltungenKunstKultur></React.Suspense>}></Route>
        <Route path='Disclaimer' element={<React.Suspense fallback='Loading...'><LazyDisclaimer></LazyDisclaimer></React.Suspense>}></Route>
        <Route path='ÜberUns' element={<React.Suspense fallback='Loading...'><LazyÜberUns></LazyÜberUns></React.Suspense>}></Route>
        <Route path='Hofladen' element={<React.Suspense fallback='Loading...'><LazyHofladen></LazyHofladen></React.Suspense>}></Route>
      </Routes>
      <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
