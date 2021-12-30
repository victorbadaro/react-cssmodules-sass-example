import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Products } from './pages/Products';
import { Layout } from './components/Layout';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
}