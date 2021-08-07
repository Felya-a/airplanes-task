import './FormControls.scss'
import * as cn from 'classnames'

const FormsControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div>
      <p className={cn('form__input_lable', {error: hasError})}>{props.label}</p>
      <props.name {...props} {...input} className={cn("formControl", { error: hasError })}></props.name>
      {
        hasError &&
        <p>{meta.error}</p>
      }
    </div>
  )
}

export const Input = (props) => {
  return <FormsControl name="input" {...props} />
}