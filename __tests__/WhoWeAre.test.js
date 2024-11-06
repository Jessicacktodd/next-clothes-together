import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import WhoWeAre from '@/pages/WhoWeAre';

jest.mock('next/router', () => require('next-router-mock'));

describe('WhoWeAre', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<WhoWeAre />);

        const heading = screen.getByText('Who we are');
        expect(heading).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<WhoWeAre />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<WhoWeAre />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument();
    });
});