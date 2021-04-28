import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

import styles from  './event-item.module.css';

export default function EventItem(props) {
    
    const { title, image, date, location, id } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAdress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li key={id} className={styles.item}>
            <img src={'/' + image} alt={title} />
            <div className={styles.content}>
                <div className={styles.sumary}>
                    <h2>
                        {title}
                    </h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAdress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Events</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}
