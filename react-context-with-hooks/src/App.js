import './App.css';
import ThemeProvider from './contexts/ThemeContext';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
