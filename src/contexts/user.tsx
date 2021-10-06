import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface UserContextData {
  signed: boolean
  userContact: string
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(
    {} as FirebaseAuthTypes.User,
  )

  const currentUser = auth().currentUser

  auth().onAuthStateChanged(user => setUser(user))

  const userContact =
    (currentUser?.email as string) || (currentUser?.phoneNumber as string)

  const signed = !!user

  console.log(user)

  return (
    <UserContext.Provider value={{ signed, userContact }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const { signed, userContact } = useContext(UserContext)
  return { signed, userContact }
}

export default UserProvider
