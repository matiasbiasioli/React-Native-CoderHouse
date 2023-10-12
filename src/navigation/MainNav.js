import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './TabNavigation'
import AuthenticationNav from './AuthenticationNav'
import { useSelector } from 'react-redux'


const MainNav = () => {
//    const user = ""
const user = useSelector((state)=> state.authenticationSlice.user)
  return (
    <NavigationContainer>
        {user ? <TabNavigation/> : <AuthenticationNav/> }
    </NavigationContainer>
  )
}

export default MainNav

