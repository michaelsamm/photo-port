import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm/>);
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('header is available', () => {
    it('creates header', () => {
        const {getByTestId } = render(<ContactForm/>);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    })
})

describe('submit button exists', () => {
    it('creates submit button', () => {
        const {getByTestId } = render(<ContactForm/>);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})