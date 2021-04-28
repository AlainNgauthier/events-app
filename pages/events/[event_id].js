import {Fragment} from 'react';
import { useRouter} from 'next/router';

import { getEventById } from '../../dummy-data';
import EventSumary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';

export default function EventDetailsById() {

    const router = useRouter();
    //console.log(router.query);

    const event_id = router.query.event_id;
    const event = getEventById(event_id);

    if(!event) {
        return <span>NO event found!</span>
    }

    return (
        <Fragment>
            <EventSumary title={event.title} />
            <EventLogistics 
                date={event.date} 
                address={event.location}
                image={event.image}
                imageAlt={event.title}  
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}
