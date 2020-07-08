import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from './auth-context'

function PrivateRouteLogged({ component: Component, ...rest }) {
  const { state } = useAuth()
  const { isLogged } = state

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
            <Redirect
            to={{
              pathname: '/',
            }}
          />
        ) : (
            <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRouteLogged
