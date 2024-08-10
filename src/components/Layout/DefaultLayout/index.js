import React from "react";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss';
function DefaultLayout({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Sidebar/>  
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;