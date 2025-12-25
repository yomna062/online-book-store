import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { loginData } = useContext(AuthContext);

  if (loginData) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}
