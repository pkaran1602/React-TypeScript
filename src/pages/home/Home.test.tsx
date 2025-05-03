import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe("Testing for Home",()=>{
    it("for component", ()=>{
        render(<Home/>)
        expect(screen.getByRole('textbox',{name: /firstname/i})).toBeInTheDocument();
        expect(screen.getByRole('textbox',{name: /lastname/i})).toBeInTheDocument();
        expect(screen.getByRole('textbox',{name: /email/i})).toBeInTheDocument();
        expect(screen.getByRole('spinbutton',{name: /phone/i})).toBeInTheDocument();
        expect(screen.getByRole('button',{name: /submit/i})).toBeInTheDocument();

    }
)
})