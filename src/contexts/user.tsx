import auth from '@react-native-firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface UserContextData {
  updateUser(user: object): void
  signed: boolean
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    const currentUser = auth().currentUser
    if (currentUser) {
      updateUser(currentUser)
    }
  }, [])

  const signed = !!user

  console.log(signed)

  const updateUser = (user: object) => {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{ updateUser, signed }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const { updateUser, signed } = useContext(UserContext)
  return { updateUser, signed }
}

export default UserProvider
