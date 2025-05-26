import { HealthStatusData } from '../data/HealthStatusData'

export default function HealthStatusCards() {
    return (
        <div className='row'>
            {
                HealthStatusData.map((data, ind) => {
                    return (
                        <div className='col bg-light rounded-4 mt-0 p-4 m-4' key="ind">
                            <p>{data.icon} &emsp;{data.label}</p>
                            <small className='text-muted'>Date: {data.date}</small><br /><br/>
                            {
                                (data.status === "Good") ? (
                                    <div className='bg-secondary rounded-5 '>
                                        <div className="w-75 bg-warning rounded-5" style={{ height: '8px' }}></div>
                                    </div>
                                ) : (data.status === "issue") ? (
                                    <div className='bg-secondary rounded-5 '>
                                        <div className="bg-danger rounded-5" style={{ height: '8px',width:'80%' }}></div>
                                    </div>
                                ) :
                                (data.status === "Healthy") && (
                                    <div className='bg-secondary rounded-5 '>
                                        <div className="bg-success rounded-5" style={{ height: '8px',width:'80%' }}></div>
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
