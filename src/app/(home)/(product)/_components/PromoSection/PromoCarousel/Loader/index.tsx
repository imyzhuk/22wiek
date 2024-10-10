import React from "react";
import styles from './Loader.module.css'

type LoaderProps = {

};

export const Loader: React.FC<LoaderProps> = () => {
    return (
        <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.rotator}>
                        <div className={styles.frameLeft}>
                            <div className={styles.circle}>

                            </div>
                        </div>
                        <div className={styles.frameRight}>
                            <div className={styles.circle}>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
