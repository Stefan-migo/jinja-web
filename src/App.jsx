import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetails from './pages/post/[slug]'; // Ensure correct import
import AboutUsPage from './pages/AboutUsPage';
import HeaderIndex from './components/HeaderIndex';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import GalleryPage from './pages/GalleryPage';
import CategoryPost from './pages/category/[slug]';
import FAQPage from './pages/FAQPage';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Helmet>
        <title>Jinja Beer</title>
        <meta name="description" content="Discover the best ginger beer in town with our Jinja blog. Stay updated with the latest news, recipes, and more!" />
      </Helmet>
      {isHomePage ? <HeaderIndex /> : <Header />}
      <ScrollToTop />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/:slug" element={<PostDetails />} />
        <Route path="/category/:slug/*" element={<CategoryPost />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/preguntas-frecuentes" element={<FAQPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
