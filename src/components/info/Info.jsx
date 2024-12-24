import styles from "./Info.module.scss"

export const CharacterInfo = ({data}) => {
    return (
        <div className={styles.character}>
            <img className={styles.image} src={data.image} alt=""/>
            <div className={styles.textBox}>
                <div className={styles.textWrap}>
                    <h1 className={styles.titleName}>{data.name}</h1>
                    <p className={styles.text}>
                        <span className={styles.circle}>{data.status}-{data.species}</span>
                    </p>
                </div>
                <div className={styles.textWrap}>
                    <span className={styles.title}>Last known location:</span>
                    <p className={styles.text}>{data.location.name}</p>
                </div>
                <div className={styles.textWrap}>
                    <span className={styles.title}>Fist seen in:</span>
                    <p className={styles.text}>{data.location.name}</p>
                </div>
            </div>
        </div>
    )
}
