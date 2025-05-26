import { LayoutDashboard, CalendarDays, CircleGauge, ChartColumnIncreasing, History, MessageCircleMoreIcon, PhoneCall, SettingsIcon } from 'lucide-react'
function Sidebar() {
    return (
        <>
            <div className="flex" style={{ height: '90vh' }}>
                <div className='overflow-auto' style={{ height: '80vh' }}>
                    <ul type="none">
                        <li><small>General</small></li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'>
                                <LayoutDashboard strokeWidth={1} className="pe-2" size={32} />Dashboard
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'>
                                <History strokeWidth={1} className="pe-2" size={32} />History
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'>
                                <CalendarDays strokeWidth={1} className="pe-2" size={32} />Calender
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'>
                                <CircleGauge strokeWidth={1} className="pe-2" size={32} />Appointments
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'>
                                <ChartColumnIncreasing strokeWidth={1} className="pe-2" size={32} />Statistics
                            </a>
                        </li>
                    </ul>
                    <ul type="none" className='pt-4'>
                        <li><small>Tools</small></li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'>
                                <MessageCircleMoreIcon strokeWidth={1} className="pe-2" size={32} />Chat
                            </a>
                        </li>
                        <li className='py-2'>
                            <a href="#" className='text-decoration-none'><PhoneCall strokeWidth={1} className="pe-2" size={32} />Support
                            </a>
                        </li>
                    </ul>
                </div>
                <div style={{ height: '10vh' }}>
                    <ul type="none">
                        <li>
                            <a href="#" className='text-decoration-none'>
                                <SettingsIcon strokeWidth={1} className="pe-2" size={32} />Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Sidebar