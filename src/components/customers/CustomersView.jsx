import React from 'react'
import CustomerAddNew from './CustomerAddNew'
import '../../styles/components/customers/customers.css'
const CustomersView = () => {
    return (
        <div className='customers container'>
            <div className="customers__header">
                <h2>pacientes</h2>
            </div>
            <div className="customers__body">
                <CustomerAddNew />

            </div>
        </div>
    )
}

export default CustomersView