import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      hello!
    </ThemeProvider>


  );
}

export default App;
