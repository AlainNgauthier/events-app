import {useRouter} from 'next/router';

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

import { Fragment } from 'react';


export default function FilteredEventsPage() {
    const router = useRouter();

    const filteredData = router.query.slug;

    if(!filteredData) {
        return <p>
            Loading...
        </p>
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];


    //tansform string to integer (by adding a "+")
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || 
        isNaN(numMonth) || 
        numYear > 2030 || 
        numYear < 2021 || 
        numMonth < 1 || 
        numMonth > 12
    ) {
        return <p>Invalid values. Please, adjust your values!</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    if(!filteredEvents || filteredEvents.length === 0) {
        return <p>No event found for the chosen values!</p>
    }

    return (
        <Fragment>
            <EventList items={filteredEvents} />
        </Fragment>
    )
}
