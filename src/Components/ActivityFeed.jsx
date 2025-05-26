import React from 'react'

export default function ActivityFeed() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className='bg-light rounded-4 px-4 py-2'>
      <div className='row '>
        <div className='col text-start h5'>Activity</div>
        <div className='col text-end text-secondary'><small>3 appointments on this week</small></div>
      </div>
      <div className='d-flex gap-2 align-items-end ' style={{ height: '150px' }}>
        <div className="bg-success h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-primary-subtle h-25 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-warning h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-info-subtle h-75 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-danger h-100 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-success h-75 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-dark-subtle h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-success h-25 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-primary h-25 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-secondary h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-success h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-success h-100 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-primary-subtle h-25 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-warning h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-info-subtle h-75 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-danger h-100 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-dark-subtle h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-primary-subtle h-25 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-success h-100 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-primary-subtle h-25 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-warning h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-info-subtle h-75 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-danger h-100 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-dark-subtle h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-warning h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-info-subtle h-75 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-danger h-100 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-dark-subtle h-50 rounded-4" style={{ width: '8px' }}></div>
        <div className="bg-success h-75 rounded-4" style={{ width: '8px' }}></div>
      </div>
      <div className='row'>
        {
          days.map((day, index) => (
          <div className=" col text-muted small ps-2">
            {day}
          </div>
         ))
        }
      </div>
    </div>
  )
}
