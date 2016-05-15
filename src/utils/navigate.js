import { browserHistory } from 'react-router';

export function navigateTo(location) {
    browserHistory.push(location);
}

export function navigateToCountdown(gender, birthday) {
    navigateTo(`/${gender}/${birthday.getTime()}`) 
}