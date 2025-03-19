import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Product from './pages/Product';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Pagenotfound from './pages/Pagenotfound';
import styled from 'styled-components';

const H1 = styled.h1`
    font-family: 'Megrim', sans-serif;
    font-size: 6rem;
    color: white;
    transform: skewY(-5deg);
    text-align: center;
    position: relative;
    word-spacing: 3px;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
    margin-bottom: 20rem;

    &::before {
        content: '';
        display: block;
        height: 65%;
        width: 49%;
        position: absolute;
        top: 105%;
        left: 50%;
        background: linear-gradient(to bottom, #9be15d, #00e3ae);
        opacity: 0.8;
        z-index: -1;
        transform: skewY(370deg) translate(-50%, -50%);
        box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
    }
`;
function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 0,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <BrowserRouter>
                <H1>🌽 Node Farm 🥦</H1>
                <Routes>
                    <Route path="/" index element={<Overview />} />
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="*" element={<Pagenotfound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
