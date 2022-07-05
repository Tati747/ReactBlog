import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { About } from './components/About'
import { Blog } from './components/Blog';
import { SinglePage } from './components/SinglePage';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';
import { EditPost } from './components/EditPost';
import { AuthProvider } from './components/AuthProvider'
import { LoginPage } from './components/LoginPage'
import { RequireAuth } from './components/RequireAuth'
import Createpost from './components/Createpost'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="contacts" element={<p>Our contact</p>} />
              <Route path="team" element={<p>Our team</p>} />
            </Route>
            <Route path='/about-us' element={<Navigate to="/about" replace />} />
            <Route path='/posts' element={<Blog />} />
            <Route path='/posts/:id/edit' element={<EditPost />} />
            <Route path='/posts/:id' element={<SinglePage />} />
            <Route path='/posts/new' element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>} />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
