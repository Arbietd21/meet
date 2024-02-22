import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents.js';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });

    test('component renders textbox', () => {
        expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
    });

    test('default value is 32', () => {

    });

    test('update number of events when user types', () => {

    });
});