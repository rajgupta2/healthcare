import React, { useRef } from 'react'
import { MoveLeft, MoveRight } from 'lucide-react'
import calendarData from '../data/calenderData'
import { Apple, BicepsFlexed } from 'lucide-react';
const AppointmentCard = ({ title, doctor, time, icon }) => {
    return (
        <div className="card bg-light p-2 border rounded-4">
            <p className='mb-0'>{title} &emsp;{icon}</p>
            <p className='mb-0 text-secondary'>{time}</p>
            <p className='mb-0 text-secondary'>{doctor}</p>
        </div>
    );
};
export default function CalendarView() {
    const containerRef = useRef(null);

    const scrollLeft = () => {
        containerRef.current.scrollLeft -= 30;
    };
    const scrollRight = () => {
        containerRef.current.scrollLeft += 30;
    };
    return (
        <div className='pt-2 ps-2'>
            <div className='row'>
                <div className='col'>
                    <h6>May 2025</h6>
                </div>
                <div className='col text-end'>
                    <a className='btn' onClick={scrollLeft}><MoveLeft color="#493a92" size={20} /></a>
                    <a className='btn' onClick={scrollRight}><MoveRight color="#493a92" size={20} /></a>
                </div>
            </div>
            <div className='d-flex mb-4 overflow-hidden pe-4' ref={containerRef}>
                {
                    calendarData.map((cal, key) => {
                        return (
                            <div key={key} className="px-3" style={{}}>
                                <small>{cal.day}</small>
                                <p className='fs-5 pb-0'>{cal.date}</p>
                                {
                                    cal.times.map((time, ind) => {
                                        return <small key={ind} className='d-block pb-2'>{time}</small>;
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex flex-wrap gap-3">
                <AppointmentCard
                    title="Dentist Appointment"
                    doctor="Dr. Amanda White"
                    time="09:00 AM"
                    icon=<Apple color="#990000" />
                />
                <AppointmentCard
                    title="Physiotherapy Appointment"
                    doctor="Dr. Samuel Lee"
                    time="11:30 AM"
                    icon=<BicepsFlexed color="#f49090" />
                />
            </div>
        </div>
    )
}
