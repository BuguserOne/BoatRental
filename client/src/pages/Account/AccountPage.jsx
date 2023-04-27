import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser, selectUserReady } from '../../../redux/slices/userSlice'
import { Navigate } from 'react-router-dom'
import NavLinks from '../../components/accounts/NavLinks'
import AccountParts from '../../components/accounts/AccountParts'

function AccountPage() {
  const user = useSelector(selectUser)
  const userReady = useSelector(selectUserReady)


  if (Object.keys(user).length === 0 && userReady) {
    return <Navigate to ={'/'} />
  } 

  return (
    <div className='px-10 py-20 md:p-40 space-y-10'>
      <NavLinks />
      <AccountParts />
    </div>
  )
}

export default AccountPage