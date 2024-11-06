import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import Press from '@/pages/Press';

jest.mock('next/router', () => require('next-router-mock'));

describe('Press', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<Press />);

        const headings = screen.getAllByText('Press');
        expect(headings[0]).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<Press />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<Press />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument();
    });
});
