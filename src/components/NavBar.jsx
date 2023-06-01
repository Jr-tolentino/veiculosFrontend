import styles from './NavBar.module.css'

function NavBar() {
    return(
        <div className={styles ["container-nav"]}>
            <a href='/veiculos'>
                Veiculos
            </a>

            <a>
                Vendas
            </a>


        </div>

    )
}

export default NavBar