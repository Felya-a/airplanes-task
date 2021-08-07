import './Login.scss'
import { reduxForm } from 'redux-form'


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSumbit} className='loginForm'>
      
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {

  const onSubmit = () => {

  }

  return (
    <div className='login'>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login