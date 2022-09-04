import fresh from "svg/fresh.svg";
import notification from "svg/notification.svg";
import "css/Notification.css";

type props_type = {
  fresh: boolean;
};

export const Notification = (props: props_type) => {
  return (
    <div className='notification-plate'>
      <img src={notification} alt='' />
      {props.fresh ? (
        <img className='fresh-icon' src={fresh} alt='' />
      ) : undefined}
    </div>
  );
};
