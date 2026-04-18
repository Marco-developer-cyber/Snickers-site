import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import VideoGenerator from './pages/VideoGenerator';

export default function App() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor hidden md:block" id="cursor"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="animate" element={<VideoGenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
