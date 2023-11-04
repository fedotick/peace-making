import { Layout } from "./components/Layout";
import { Routes, Route } from 'react-router-dom'
import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
