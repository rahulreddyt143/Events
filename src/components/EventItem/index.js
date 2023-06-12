// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, checkRegistrationStatus} = props
  const {imageUrl, registrationStatus} = eventDetails

  const onClickEvent = () => {
    checkRegistrationStatus(registrationStatus)
  }

  return (
    <button type="button" className="event-btn" onClick={onClickEvent}>
      <img src={imageUrl} alt="event" className="event-img" />
    </button>
  )
}

export default EventItem
