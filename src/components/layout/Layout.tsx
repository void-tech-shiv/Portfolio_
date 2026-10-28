import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './Layout.module.css';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <main id="main-content" className={styles.mainContent}>{children}</main>
    <Footer />
  </>
);
