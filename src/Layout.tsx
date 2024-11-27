import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const Layout = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <Header />
      <Outlet />
        <motion.div
          style={{
            position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 350,
        }}
      >
        <motion.div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '2px solid #4ecdc4',
            backgroundColor: 'rgba(78, 205, 196, 0.1)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
