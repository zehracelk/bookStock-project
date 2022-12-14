import { Toaster } from 'react-hot-toast';
import './App.css';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store,{persistor} from './app/store';
import { createTheme,ThemeProvider } from '@mui/material';
import { grey, blueGrey,pink } from "@mui/material/colors";
import { PersistGate } from 'redux-persist/integration/react'



function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
        main:pink[800]
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        </PersistGate>
      </Provider>

      <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
