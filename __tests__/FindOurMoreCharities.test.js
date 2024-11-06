import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import FindOutMoreCharities from '@/pages/FindOutMoreCharities';

jest.mock('next/router', () => require('next-router-mock'));

describe('FindOutMoreCharities', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<FindOutMoreCharities />);

        const headings = screen.getAllByText('Partner charities');
        expect(headings[0]).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<FindOutMoreCharities />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<FindOutMoreCharities />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument();
    });
});
