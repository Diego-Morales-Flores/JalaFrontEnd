import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from '@testing-library/react'
import Welcome from './Welcome'
import { BrowserRouter as Router, Link } from "react-router-dom";
describe('Welcome', () => {
    it('Renders Welcome', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        expect(
            screen.getByText('Welcome')
        ).toHaveTextContent('Welcome')
    })
    it('Renders to', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        expect(
            screen.getByText('to')
        ).toHaveTextContent('to')
    })
    it('Renders a Image', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        expect(screen.getByRole('img'))
        .toHaveAttribute('src', expect.stringContaining('/src/assets/Jurasic Park.jfif'))
    })
    it('Renders a Button', () => {
        render(
            <Router>
                <Welcome />
            </Router>
        );
        const btn = expect(screen.getByRole('button',{name: /Click me to Start/i})).toBeInTheDocument()
        console.log(screen.getByRole('button',{name: /Click me to Start/i}));

        
    })
    
})
