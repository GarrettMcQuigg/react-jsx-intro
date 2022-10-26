const Person = (props) => {
  let voterEligibility =
    props.age >= 18 ? "Please go vote." : "You must be 18 to vote";

  let hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);
  return (
    <div className="container">
      <h2 className="name">Name: {props.name.slice(0, 9)}</h2>
      <h3 className="age"><b>Age:</b> {props.age}</h3>
      <p className="info">Learn some information about this person</p>
      <ul><span className="hobbies">Hobbies:</span> {hobbies}</ul>
      <h3 className="vote">{voterEligibility}</h3>
    </div>
  );
};
