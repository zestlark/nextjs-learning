
export const metadata = {
  title: 'login',
  description: 'hello'
}

// import { redirect } from "next/navigation"

async function create(formData: FormData) {
  'use server';

  console.log(formData.get('username'));
  console.log(formData.get('password'));

  
}

function Login() {
  // redirect('signup')

  // throw new Error('Test error')
  return (
    <form action={create}>
      <input type="text" name="username" id="" />
      <input type="password" name="password"/>
      <button type="submit">submit</button>
    </form>
  )
}

export default Login