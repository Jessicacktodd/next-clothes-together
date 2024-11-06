import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkImages } from '@/components/LinkImages/LinkImages';

describe('LinkImages Component', () => {
    it('renders all link images with correct alt text', () => {
        render(<LinkImages />);

        
        expect(screen.getByAltText('who we are icon')).toBeInTheDocument();
        expect(screen.getByAltText('what we do icon')).toBeInTheDocument();
        expect(screen.getByAltText('Find Out More Brands icon')).toBeInTheDocument();
        expect(screen.getByAltText('Find Out More Charities icon')).toBeInTheDocument();
        expect(screen.getByAltText('Press icon')).toBeInTheDocument();
    });

    it('navigates to the correct pages on link click', () => {
        render(<LinkImages />);

        expect(screen.getByAltText('who we are icon').closest('a')).toHaveAttribute('href', '/WhoWeAre');
        expect(screen.getByAltText('what we do icon').closest('a')).toHaveAttribute('href', '/WhatWeDo');
        expect(screen.getByAltText('Find Out More Brands icon').closest('a')).toHaveAttribute('href', '/FindOutMoreBrands');
        expect(screen.getByAltText('Find Out More Charities icon').closest('a')).toHaveAttribute('href', '/FindOutMoreCharities');
        expect(screen.getByAltText('Press icon').closest('a')).toHaveAttribute('href', '/Press');
    });
});
