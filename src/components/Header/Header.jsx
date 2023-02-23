import useMenu from "src/hooks/useMenu";
import Image from "next/image";
import styles from "./Header.module.scss"
import HeaderMenu from "./HeaderMenu";

const Header = () => {

    const [ isVisible, toggleMenuHandler ] = useMenu();

    return (
        <section className={styles.header}>
            <div className={styles.message}>
                <h1>Ola!</h1>
                <h2>Sua carteira esta esperando por você</h2>
            </div>
            <div className={styles.avatar}>
                <Image src='/avatar.png' alt='avatar' layout='fill' onClick={toggleMenuHandler}/>
                {isVisible && <HeaderMenu toggleMenuHandler={toggleMenuHandler}/>}
            </div>
        </section>
    )
}

export default Header;