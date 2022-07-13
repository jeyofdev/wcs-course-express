// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen, waitFor, within } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';
import { GET_WILDERS } from './queries/queries';

describe('App and Home', () => {
    const GET_WILDERS_MOCKS: MockedResponse<any> = {
        request: { query: GET_WILDERS },
        result: {
            data: {
                wilders: [
                    {
                        _id: '62cb0b606c9e7680366b2895',
                        name: 'john',
                        city: 'Paris',
                        skills: [],
                    },
                    {
                        _id: '62cb0ebdd523793a3a50f4b0',
                        name: 'Marie',
                        city: 'Paris',
                        skills: [],
                    },
                ],
            },
        },
    };

    const renderApp = () => {
        render(
            <MockedProvider mocks={[GET_WILDERS_MOCKS]}>
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

    describe('loading wilders', () => {
        it('render a loading indicator', () => {
            const progress = screen.getByRole('progress');
            expect(progress).toBeInTheDocument();
        });
    });

    describe('after wilders have been fetched', () => {
        it('render wilders list', async () => {
            const wilderList = await waitFor(() =>
                screen.getByTestId('wilderList')
            );

            const wilders = within(wilderList).getAllByRole('article');

            expect(wilderList).toBeInTheDocument();
            expect(wilders).toHaveLength(2);
        });

        it('check data of first wilder', async () => {
            const wilderList = await waitFor(() =>
                screen.getByTestId('wilderList')
            );

            const wilders = within(wilderList).getAllByRole('article');

            const firstWilderName = within(wilders[0]).getByRole('heading', {
                level: 2,
            });
            const firstWilderCity = within(wilders[0]).getByText('Paris');

            expect(firstWilderName.textContent).toStrictEqual('john');
            expect(firstWilderCity.textContent).toStrictEqual('Paris');
        });

        it('check data of wilder include city Paris', async () => {
            const wilderList = await waitFor(() =>
                screen.getByTestId('wilderList')
            );

            const wilders = within(wilderList).getAllByRole('article');

            const firstWilderCity = within(wilders[0]).getByText('Paris');

            expect(firstWilderCity).toBeInTheDocument();
        });
    });
});
