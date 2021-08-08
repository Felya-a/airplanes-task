import './Login.scss'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../FormControls/FormControls'
import { emailValid, passwordValid, required } from '../../utils/validators/validators'
import { useHistory } from 'react-router-dom'

const LoginForm = (props) => {
  const history = useHistory()
  return (
    <form onSubmit={props.handleSubmit} className='loginForm'>
      <div className="loginForm__input_login">
        <Field
          type="text"
          id='login'
          name='login'
          label="Логин:"
          title='Enter the correct email address'
          component={Input}
          validate={[emailValid]}
        />
      </div>
      <div className="loginForm__input_password">
        <Field
          type="text"
          id='password'
          name='password'
          label='Пароль:'
          component={Input}
          validate={[passwordValid]}
          title='Enter only in Latin and at least 8 characters'
        />
      </div>
      <button className='login__button' onClick={() => history.push('/flights')}>Войти</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)


const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className='login'>
      <h2 className='login__header'>Simple Flight Check</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login