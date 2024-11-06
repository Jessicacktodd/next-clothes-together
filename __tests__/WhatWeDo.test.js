import '@testing-library/jest-dom'
import { getByAltText, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock';
import WhatWeDo from '@/pages/WhatWeDo';

jest.mock('next/router', () => require('next-router-mock'));

describe('WhatWeDo', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('renders the heading', () => {
        render(<WhatWeDo />);

        const heading = screen.getByText('What we do');
        expect(heading).toBeInTheDocument();
    });

    it('renders the navbar logo', () => {
        render(<WhatWeDo />);

        const logo = screen.getByAltText('clothes together logo');
        expect(logo).toBeInTheDocument();
    });

    it('renders the bottom link images', () => {
        render(<WhatWeDo />);

        const link_images = screen.getByAltText('who we are icon')
        expect(link_images).toBeInTheDocument();
    });
});
