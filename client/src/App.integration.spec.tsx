// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';

describe('App and Home', () => {
    const mocks: any = [];

    const renderApp = () => {
        render(
            <MockedProvider mocks={mocks}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </MockedProvider>
        );
    };

    beforeEach(() => {
        renderApp();
    });

    describe('renders layout', () => {
        it('renders title in header', () => {
            const title = screen.getByRole('heading', { level: 1 });
            expect(title.textContent).toStrictEqual('Wilders Book');
        });

        it('renders copyright in footer', () => {
            const footer = screen.getByRole('footer');
            expect(footer.textContent).toStrictEqual(
                '@ Copyright 2022 | Jeyofdev'
            );
        });
    });
});
