import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogPage from './pages/BlogPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import PostDetails from './pages/post/[slug]'; // Ensure correct import
import AboutUsPage from './pages/AboutUsPage';
import CatalogPage from './pages/CatalogPage';
import HeaderIndex from './components/HeaderIndex';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './components/WhatsAppButton';
import GalleryPage from './pages/GalleryPage';
import CategoryPost from './pages/category/[slug]';
import FAQPage from './pages/FAQPage';

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
      <WhatsAppButton />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/post/:slug" element={<PostDetails />} />
        <Route exact path="/category/:slug/*" element={<CategoryPost />} />
        <Route exact path="/about-us" element={<AboutUsPage />} />
        <Route exact path="/catalogo" element={<CatalogPage />} />
        <Route exact path="/contacto" element={<ContactPage />} />
        <Route exact path="/galeria" element={<GalleryPage />} />
        <Route exact path="/preguntas-frecuentes" element={<FAQPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
