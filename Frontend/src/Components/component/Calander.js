import React from 'react';
import { MDBCalendar } from 'mdb-react-calendar';

export default function calender() {
    const today = new Date();

    const getStringDate = (date: Date) => date.toLocaleDateString().replaceAll('.', '/');

    const addDays = (date: Date, days: number) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
    };

    const myEvents12h = [
        {
            summary: 'JS Conference',
            description: '',
            start: {
                date: getStringDate(today),
            },
            end: {
                date: getStringDate(today),
            },
            color: {
                background: '#1266F1',
                foreground: 'white',
            },
        },
        {
            summary: 'Vue Meetup',
            description: '',
            start: {
                date: getStringDate(addDays(today, 1)),
            },
            end: {
                date: getStringDate(addDays(today, 5)),
            },
            color: {
                background: '#00B74A',
                foreground: 'white',
            },
        },
        {
            summary: 'Angular Meetup',
            description:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
            start: {
                date: getStringDate(addDays(today, -3)),
                time: '11:00 AM',
            },
            end: {
                date: getStringDate(addDays(today, 3)),
                time: '02:00 PM',
            },
            color: {
                background: '#F93154',
                foreground: 'white',
            },
        },
        {
            summary: 'React Meetup',
            description: '',
            start: {
                date: getStringDate(addDays(today, 5)),
            },
            end: {
                date: getStringDate(addDays(today, 8)),
            },
            color: {
                background: '#39C0ED',
                foreground: 'white',
            },
        },
        {
            summary: 'Meeting',
            description: '',
            start: {
                date: getStringDate(addDays(today, 1)),
                time: '8:00 AM',
            },
            end: {
                date: getStringDate(addDays(today, 1)),
                time: '12:00 PM',
            },
            color: {
                background: '#1266F1',
                foreground: 'white',
            },
        },
        {
            summary: 'Call',
            description: '',
            start: {
                date: getStringDate(addDays(today, 2)),
                time: '11:00 AM',
            },
            end: {
                date: getStringDate(addDays(today, 2)),
                time: '02:00 PM',
            },
            color: {
                background: '#FFA900',
                foreground: 'white',
            },
        },
    ];
    return (
        <MDBCalendar defaultEvents={myEvents12h} twelveHour />
    );
}

export default calender