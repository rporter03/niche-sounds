import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DiscoverArtists from './pages/Discover-Artists';
import Artists from './pages/Browse-Artists';
import Forums from './pages/Forums';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="discover-artists" element={<DiscoverArtists />}/>
          <Route path="browse-artists" element={<Artists />}/>
          <Route path="forums" element={<Forums />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);