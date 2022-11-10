import styles from'./style.scss';

export default function Header() {
    return (
        <div className={styles.Container}>
            <img src="./triangle.png"/>
            <h1>Controle Financeiro</h1>
            <img src="./menu-hamb.png"/>
        </div>
    )
}