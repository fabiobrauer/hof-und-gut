import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProminentAppBar from './assets/Comp_AppBar'
import Homepage from './pages/Homepage'
import Gebäude from './pages/Gebäude'
import Kontakt from './pages/Kontakt'
import Links from './pages/Links'
import ÖkologischeLandwirtschaft from './pages/ÖkologischeLandwirtschaft'
import Presse from './pages/Presse'
import Reiten from './pages/Reiten'
import SpeisenAmHof from './pages/SpeisenAmHof'
import Stellenangebote from './pages/Stellenangebote'
import TeamtrainingUndFirmenevents from './pages/TeamtrainingUndFirmenevents'
import ÜbernachtenAmHof from './pages/ÜbernachtenAmHof'
import VeranstaltungenKunstKultur from './pages/VeranstaltungenKunstKultur'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: 'rgb(80, 160, 103)',
      main: '#4caf50',
      dark: 'rgb(80, 140, 103)',
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
});


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <ProminentAppBar></ProminentAppBar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='Gebäude' element={<Gebäude></Gebäude>}></Route>
        <Route path='Kontakt' element={<Kontakt></Kontakt>}></Route>
        <Route path='Links' element={<Links></Links>}></Route>
        <Route path='ÖkologischeLandwirtschaft' element={<ÖkologischeLandwirtschaft></ÖkologischeLandwirtschaft>}></Route>
        <Route path='Presse' element={<Presse></Presse>}></Route>
        <Route path='Reiten' element={<Reiten></Reiten>}></Route>
        <Route path='SpeisenAmHof' element={<SpeisenAmHof></SpeisenAmHof>}></Route>
        <Route path='Stellenangebote' element={<Stellenangebote></Stellenangebote>}></Route>
        <Route path='TeamtrainingUndFirmenevents' element={<TeamtrainingUndFirmenevents></TeamtrainingUndFirmenevents>}></Route>
        <Route path='ÜbernachtenAmHof' element={<ÜbernachtenAmHof></ÜbernachtenAmHof>}></Route>
        <Route path='VeranstaltungenKunstKultur' element={<VeranstaltungenKunstKultur></VeranstaltungenKunstKultur>}></Route>
      </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
