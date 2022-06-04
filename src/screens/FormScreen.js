import React from 'react'
import { Form } from '../components/FormComponents/Form'
import { UserList } from '../components/FormComponents/UserList'
import { Header } from '../components/Header'

export const FormScreen = () => {
  return (
    <div>
        <Header />
        <div className = '  row '>
            <div className = ' col-6 '>
                <Form />
            </div>
            <div className = ' col-6 '>
                <UserList />
            </div>
        </div>
    </div>
  )
}
