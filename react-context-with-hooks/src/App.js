import './App.css';
import LanguageProvider from './contexts/LanguageContext';
import ThemeProvider from './contexts/ThemeContext';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <Navbar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
