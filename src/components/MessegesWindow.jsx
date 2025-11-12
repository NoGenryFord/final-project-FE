import { Button } from '@components';

export const MessegesWindow = () => {
  return (
    <div className='messeges_window'>
      <div className='messeges_history'></div>
      <div className='action_bar'>
        <input className='message_input'></input>
        <Button className={'btn send_message_btn'}>Send</Button>
      </div>
    </div>
  );
};
