import SimpleAppointmentCard from './SimpleAppointmentCard';
import upcomingAppointments from '../data/upcomingAppointments.jsx';
import { Eye, ClipboardCheck, Heart, Brain } from "lucide-react";

export default function UpcomingSchedule() {
    return (
        <div className='ps-2'>
            <h5>The Upcoming Schedule</h5>
            {
                upcomingAppointments.map((appointments, index) => {
                    return (
                        <div className="container-fluid mt-3" key={index}>
                            <h6>{appointments.day}</h6>
                            <div className='d-flex flex-wrap gap-3'>
                                {
                                    appointments.events.map((ap, k) => {
                                        return (
                                        <SimpleAppointmentCard
                                                key={k}
                                                title={ap.title}
                                                time={ap.time}
                                                icon={ap.icon}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
