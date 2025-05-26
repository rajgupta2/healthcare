export default function SimpleAppointmentCard({ title, time, icon }) {
    return (
        <>
            <div className="card pt-3 px-2 border rounded-4 bg-light">
                <p className="mb-0">
                    {title}
                    &emsp;&emsp;
                    {icon}
                </p>
                <p className="text-secondary">{time}</p>
            </div>
        </>
    )
}
