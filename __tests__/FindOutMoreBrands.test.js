import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import FindOutMoreBrands from '@/pages/FindOutMoreBrands';

jest.mock('next/router', () => require('next-router-mock'));

describe('FindOutMoreBrands', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<FindOutMoreBrands />);

        const headings = screen.getAllByText('Partner brands');
        expect(headings[0]).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<FindOutMoreBrands />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<FindOutMoreBrands />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument();
    });
});