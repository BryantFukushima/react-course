import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' id='title' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image URL</label>
          <input type='url' id='image' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Image URL</label>
          <input type='text' id='address' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea type='text' id='description' rows='5' required></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
