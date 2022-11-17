import { describe, expect, it } from "vitest";
import {render, screen, waitFor} from '@testing-library/react'
import Input from "./Input";

describe('Input', () =>{
    it('Renders an Input Label', ()=>{
        const component = render(<Input label="Id"/>)
        const childElement = component.findByLabelText("Id:")
        waitFor(()=>expect(childElement).toBeInTheDocument());
    })
    it('Renders an Input', ()=>{
        const component = render(<Input/>)
        const childElement = component.findByPlaceholderText('')
        waitFor(()=>expect(childElement).toBeInTheDocument());
    })
})
