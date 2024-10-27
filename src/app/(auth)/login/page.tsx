
export const metadata = {
  title: 'login',
  description: 'hello'
}

import { redirect } from "next/navigation"


function Login() {
  redirect('signup')

  throw new Error('Test error')
  return (
    <div>Login</div>
  )
}

export default Login