import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
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
})
