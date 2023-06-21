import MeetupItem from './MeetupItem'
import classes from './MeetupList.module.css'

function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem meetup={meetup} />
      ))}
    </ul>
  )
}

export default MeetupList
