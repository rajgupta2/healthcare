import DashboardOverview from './DashboardOverview'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import { ChevronDown } from 'lucide-react'
export default function () {
    return (
        <div className='row'>
            <div className='col-lg-7 pt-0 p-4'>
                <div className='row'>
                    <div className='col h4'>Dashboard </div>
                    <div className='col text-end'>This week <ChevronDown /></div>
                </div>
                <DashboardOverview/>
                <ActivityFeed/>
            </div>
            <div className='col-lg-5 bg-light p-2 rounded-4'>
                <CalendarView /><br />
                <UpcomingSchedule />
            </div>
        </div>
    )
}
