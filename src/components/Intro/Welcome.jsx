import useEth from "../../contexts/EthContext/useEth";

function Welcome() {
  const { state } = useEth()
  return (
    <div className="welcome">
      <h1>👋 Welcome to the React Box!</h1>
      <p>Your adress: {state?.accounts}</p>
      
    </div>
  );
}

export default Welcome;
