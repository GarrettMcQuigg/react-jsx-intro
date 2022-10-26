const App = () => {
  return (
    <div>
      <Tweet
        name="Garrett McQuigg"
        username="GarrettMcQuigg"
        date={new Date().toDateString()}
        message="React is so cool and im so good at it!"
      />
      <Tweet
        name="Bronson Berwald"
        username="NosnorB"
        date={new Date().toDateString()}
        message="I wish i was as slick and smooth at full stack development like @GarrettMcQuigg :("
      />
      <Tweet
        name="Garrett McQuigg"
        username="GarrettMcQuigg"
        date={new Date().toDateString()}
        message="@NosnorB, It's ok bro! Keep grinding and you'll get there 1 day!!💪💪"
      />
    </div>
  );
};
