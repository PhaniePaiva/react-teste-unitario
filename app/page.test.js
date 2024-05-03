import { render, screen } from "@testing-library/react";
import Page from "./page";
import userEvent from '@testing-library/user-event'

describe('Page', () => {

    it('check correct anwser', async () => {
        const user = userEvent.setup()
        render(<Page />)


        const input = screen.getByLabelText("What is Batman's real name?")
        // const input = document.querySelector('input')
        //input.value = "Bruce Wayne"
        await user.type(input, 'Bruce Wayne')

        // const button = screen.getByText('Submit Answer')
        const button = screen.getByRole('button', {name: 'Submit Answer'})
        //fireEvent.click(button)
        await user.click(button)

        // expect(document.querySelector('.result').textContent).toBe('Correct!')
        expect(screen.getByText('Correct!')).toBeInTheDocument()


        screen.debug()
    })

})