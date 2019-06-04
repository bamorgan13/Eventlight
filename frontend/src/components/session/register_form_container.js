import { connect } from 'react-redux'
import { register } from '../../actions/session_actions'
import RegisterForm from './register_form'

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: user => dispatch(register(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)
