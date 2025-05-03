import { render, screen } from "@testing-library/react";
import About from "./About";

describe("this is the component", ()=>{
    it("should it tesst",()=>{
        render(<About />);
        const heading = screen.getByTestId("heading")
        expect(heading).toBeInTheDocument();
    })
})