// Write your code here
import './index.css'

const registrationStatus = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {status} = props

  switch (status) {
    case registrationStatus.yetToRegister:
      return (
        <div className="event-status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt=" yet to register"
            className="yet-to-register-img"
          />
          <p className="yet-to-register-description">
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button" className="register-btn">
            Register Here
          </button>
        </div>
      )
    case registrationStatus.registered:
      return (
        <div className="event-status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-img"
          />
          <h1 className="registered-para">
            You have already registered for the event
          </h1>
        </div>
      )
    case registrationStatus.registrationClosed:
      return (
        <div className="event-status-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registration-closed-img"
          />
          <h1 className="registration-closed-status">
            Registrations Are Closed Now!
          </h1>
          <p className="registration-closed-description">
            Stay tuned. We will reopen
          </p>
        </div>
      )
    default:
      return (
        <div className="event-status-container">
          <p className="initial-statement">
            Click on an event, to view its registration details
          </p>
        </div>
      )
  }
}

export default ActiveEventRegistrationDetails
