import Event from '../components/Event';
import { render } from '@testing-library/react';

describe('<Event /> component', () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event />);
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText("Event Start Time")).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText("Event Location")).toBeInTheDocument();
    });

    test('renders event details button with title (show details)', () => {

    });
})