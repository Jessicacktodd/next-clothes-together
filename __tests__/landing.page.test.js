import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import LandingPage from '../src/pages/index'
import { useRouter } from 'next/router'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('LandingPage', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<LandingPage />);

        const heading = screen.getByText('Reducing clothing waste....tackling clothing insecurity');
        expect(heading).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<LandingPage />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<LandingPage />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument
    });
});
