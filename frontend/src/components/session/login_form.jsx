import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../styles/login.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      page: 1,
      email_focus: false,
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  // Once the user has been authenticated, redirect to the home page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/')
    }

    // Set or clear errors
    if (nextProps.errors.keys.length > 0) {
      this.setState({ errors: nextProps.errors, page: 1 })
    }
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      })
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault()

    if (this.state.page === 2) {
      let user = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.login(user)
    } else {
      this.setState({ page: 2 })
    }
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul className="login__form__errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li className="login__form__error" key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    let headline, subhead, button_label, page

    const show_email_label = this.state.email_focus || this.state.email

    if (this.state.page === 1) {
      page = 'first'
      headline = "Let's get started"
      subhead = 'Enter your email to get started.'
      button_label = 'Get Started'
    } else {
      page = 'second'
      headline = 'Welcome back'
      subhead = 'Please enter your password to log in.'
      button_label = 'Log In'
    }
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login__form">
          <div className={`login__form__logo ${page}`} />
          <h1 className="login__form__headline">{headline}</h1>
          <p className="login__form__subhead">{subhead}</p>
          <div className={`login__form__email ${page}`}>
            <div
              className={`login__form__email_label ${
                show_email_label ? 'show' : ''
              } `}
            >
              Email address
            </div>

            <input
              className={`${show_email_label ? 'show' : ''} `}
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder={show_email_label ? '' : 'Email address'}
              onFocus={() => this.setState({ email_focus: true })}
              onBlur={() => this.setState({ email_focus: false })}
            />
          </div>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className={`login__form__password ${page}`}
            placeholder="Password"
          />
          <input
            type="submit"
            value={button_label}
            className="login__form__submit"
          />
          {this.renderErrors()}
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
