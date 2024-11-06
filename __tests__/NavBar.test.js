import { render, fireEvent, screen, act } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import NavBar from '@/components/NavBar/NavBar';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));

describe('NavBar Navigation', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/'); 
    });

    it('navigates to Who We Are page when the link is clicked', () => {
        render(<NavBar />);

        const whoWeAreLink = screen.getByText(/WHO WE ARE/i);
        fireEvent.click(whoWeAreLink);

        act(() => {
            mockRouter.push('/WhoWeAre');
        });

        expect(mockRouter.asPath).toBe('/WhoWeAre'); 
    });

    it('navigates to Press page when the link is clicked', () => {
        render(<NavBar />);

        const pressLink = screen.getByText(/PRESS/i);
        fireEvent.click(pressLink);

        act(() => {
            mockRouter.push('/Press');
        });

        expect(mockRouter.asPath).toBe('/Press'); 
    });
});



