import styles from './Locations.module.scss'

export const Locations = ({data}) => {
    return (
        <div className={styles.locations}>
            <h1 className={styles.title}>Locations</h1>
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <h1 className={styles.nameLocation}>{data.name}</h1>
                    <p className={styles.typeLocation}>{data.type}</p>
                </div>
            </div>
        </div>
    )
}