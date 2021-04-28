import Link from 'next/link';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/event-search';

export default function AllEventsPage() {

    const events = getAllEvents();

    return (
        <div>
            <EventsSearch />
            <EventList items={events} />
        </div>
    )
}
