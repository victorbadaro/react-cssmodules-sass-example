import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.container}>
            <div>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/products">Products</Link>
            </div>
        </header>
    );
}