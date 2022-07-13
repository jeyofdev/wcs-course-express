// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
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

    it('first test', () => {
        expect(1 + 2).toStrictEqual(3);
    });
});
