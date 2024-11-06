import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import ContactUs from '@/pages/ContactUs';

jest.mock('next/router', () => require('next-router-mock'));

describe('ContactUs', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<ContactUs />);

        const headings = screen.getAllByText('Contact Us');
        expect(headings[0]).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<ContactUs />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<ContactUs />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument();
    });
});
