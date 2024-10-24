// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { LinkImages } from "./LinkImages";
// import userEvent from "@testing-library/user-event";
// import { WhoWeAre } from "../../Pages/WhoWeAre/WhoWeAre";

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

// test('test that the link images render correctly when page is loaded', () => {
//     render(
//         <MemoryRouter>
//             <LinkImages />
//         </MemoryRouter>
//     );

//     const mustard_link_image = screen.getByAltText(/mustard link/i);
//     expect (mustard_link_image).toBeInTheDocument();

//     const green_link_image = screen.getByAltText(/green link/i);
//     expect (green_link_image).toBeInTheDocument();

//     const orange_link_image = screen.getByAltText(/orange link/i);
//     expect (orange_link_image).toBeInTheDocument();
// })

// test('make sure that link images links work',() => {
//     render(
//         <MemoryRouter initialEntries={['/']}>
//             <Routes>
//                 <Route path="/" element={<LinkImages />} />
//                 <Route path="/WhoWeAre" element={<WhoWeAre />} />
//             </Routes>
//         </MemoryRouter>
//     );

//     const WhoWeAreLink = screen.getByAltText('mustard link');
//     fireEvent.click(WhoWeAreLink);

//     expect(screen.getByAltText('Kate garden')).toBeInTheDocument();
// });