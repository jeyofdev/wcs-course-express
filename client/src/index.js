import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Client react-query
const client = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <BrowserRouter>
                <App />
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
