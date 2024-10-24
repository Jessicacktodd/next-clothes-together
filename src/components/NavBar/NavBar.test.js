// import { fireEvent, render, screen } from "@testing-library/react";
// import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { NavBar } from "./NavBar";
// import { WhoWeAre } from "../../Pages/WhoWeAre/WhoWeAre";
// import { FindOutMoreCharities } from "../../Pages/FindOutMoreCharities/FindOutMoreCharities";
// import { LandingPage } from "../../pages/index";
// import { Press } from "../../Pages/Press/Press";

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: jest.fn(),
// }));

// let mockNavigate;

// beforeEach(() => {
//     mockNavigate = jest.fn();
//     useNavigate.mockReturnValue(mockNavigate); 
//     jest.clearAllMocks(); 
// });

// test('renders NavBar with links and logo', () => {
//     render(<NavBar />)

//     const logoElement = screen.getByAltText(/clothes together logo/i);
//     expect(logoElement).toBeInTheDocument();

//     const instagramLink = screen.getByAltText(/Instagram/i);
//     expect(instagramLink).toBeInTheDocument();

//     const facebookLink = screen.getByAltText(/Facebook/i);
//     expect(facebookLink).toBeInTheDocument();
// });

// test('renders social media links with correct URLs', () => {
//     render(<NavBar />);
    
//     const instagramLink = screen.getByAltText('Instagram');
//     expect(instagramLink.closest('a')).toHaveAttribute('href', 'https://www.instagram.com/pigeonorganics/');

//     const facebookLink = screen.getByAltText('Facebook');
//     expect(facebookLink.closest('a')).toHaveAttribute('href', 'https://www.facebook.com/pigeonorganics/');
// });

// test('navigates to correct pages when spreadout links are clicked', () => {
//     render(
//         <MemoryRouter initialEntries={['/']}>
//             <Routes>
//                 <Route path="/" element={<NavBar />} />
//                 <Route path="/WhoWeAre" element={<WhoWeAre />} />
//             </Routes>
//         </MemoryRouter>
//     );

//     const whoWeAreLink = screen.getByText('Who we are');
//     fireEvent.click(whoWeAreLink);

//     expect(screen.getByText('Who we are')).toBeInTheDocument();

// });

// test('navigates to Press page when link is clicked', () => {
//     render(
//         <MemoryRouter initialEntries={['/']}>
//             <Routes>
//                 <Route path="/" element={<NavBar />} />
//                 <Route path="/Press" element={<Press />} />
//             </Routes>
//         </MemoryRouter>
//     );

//     const pressLink = screen.getByText('Press');
//     fireEvent.click(pressLink);

//     expect(screen.getByText('Press')).toBeInTheDocument();
// });

// test('navigates to correct pages when right side links are clicked', () => {
//     render(
//         <MemoryRouter initialEntries={['/']}>
//             <Routes>
//                 <Route path="/" element={<NavBar />} />
//                 <Route path="/FindOutMoreCharities" element={<FindOutMoreCharities />} />
//             </Routes>
//         </MemoryRouter>
//     );

//     const Find_Out_More_Charities_Link = screen.getByText('FIND OUT MORE (CHARITIES)');
//     fireEvent.click(Find_Out_More_Charities_Link)

//     expect(screen.getByText('Partner charities')).toBeInTheDocument();
// });

// test('logo navigates to landing page when clicked', () => {
//     render(
//         <MemoryRouter initialEntries={['/']}>
//             <Routes>
//                 <Route path="/WhatWeDo" element={<NavBar />} />
//                 <Route path="/" element={<LandingPage />} />
//             </Routes>
//         </MemoryRouter>
//     );

//     const logoLink = screen.getByAltText('clothes together logo');
//     fireEvent.click(logoLink);

//     expect(screen.getByText('Reducing clothing waste....tackling clothing insecurity')).toBeInTheDocument();
// });

// test('all images have alt attributes', () => {
//     render(<NavBar />);
    
//     const logo = screen.getByAltText('clothes together logo');
//     const instagram = screen.getByAltText('Instagram');
//     const facebook = screen.getByAltText('Facebook');
    
//     expect(logo).toBeInTheDocument();
//     expect(instagram).toBeInTheDocument();
//     expect(facebook).toBeInTheDocument();
// });

// test('all navigation links are accessible', () => {
//     render(<NavBar />);

//     const links = screen.getAllByRole('link');
//     links.forEach(link => {
//         expect(link).toHaveAttribute('href');
//     });
// });