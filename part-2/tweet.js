const Tweet = (props) => {
  return (
    <div className="tweet">
      <h2 className="name">{props.name}</h2>
      <span className="username adjacent"><i>@{props.username}</i></span>
      <span className="date adjacent"><i>{props.date}</i></span>
      <p className="message">{props.message}</p>
    </div>
  );
};
