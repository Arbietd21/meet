import Event from '../components/Event';
import { render } from '@testing-library/react';

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeEach(() => {
        EventComponent = render(<Event />);
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText("Time")).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText("Location")).toBeInTheDocument();
    });

    test('renders event details button with title (show details)', () => {
        expect(EventComponent.queryByRole("button")).toBeInTheDocument();
    });
})