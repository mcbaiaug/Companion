import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './auth-context'

function PrivateRoute({ component: Component, ...rest }) {
  const { state } = useAuth()
  const { isLogged } = state

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
