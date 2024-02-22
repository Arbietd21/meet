import Event from '../components/Event';
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import mockData from '../mock-data';


describe('<Event /> component', () => {
    let EventComponent;
    const mock = mockData[0];

    beforeEach(() => {
        EventComponent = render(<Event event={mock} />);
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(mock.summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(mock.created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(mock.location)).toBeInTheDocument();
    });

    test('renders event details button with title (show details)', () => {
        expect(EventComponent.queryByRole("button")).toBeInTheDocument();
    });

    test("renders event details when user clicks 'show details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        await user.click(button, 'Show Details');
        const details = EventComponent.container.querySelector('.details')
        expect(details).toBeInTheDocument();
    });

    test("hides event details when user clicks 'hide details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByRole('button');
        const details = EventComponent.container.querySelector('.details')
        await user.click(button, 'Hide Details');
        expect(details).not.toBeInTheDocument();
    });
})