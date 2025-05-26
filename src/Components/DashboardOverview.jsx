import muscels from '../assets/Muscles.jpg'
import HealthStatusCards from './HealthStatusCards'
export default function DashboardOverview() {
  return (
    <div className='row'>
        <div className='col-lg-8 col-md-8 col-sm-12'>
            <img src={muscels} alt="Human Body Image" width='100%' height='600px' className='rounded-4'/>
        </div>
        <div className='col'>
            <HealthStatusCards/>
        </div>
    </div>
  )
}