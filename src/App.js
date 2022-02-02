import "./App.css";

export default function App() {
  const users=[{names:"vignesh",
  profile:"https://i.pinimg.com/236x/f7/95/ad/f795adbca930cb8fd25164455d558222--icc-cricket-sachin-tendulkar.jpg"},
  {names:"Ragul",
profile:"https://www.forbesindia.com/media/30under30_2018/25_s.jpg"},
{names:"Akshara",
  profile:"https://i.pinimg.com/474x/c8/fa/14/c8fa142429b945dea5abe5d2c4a32609--cricket-vini.jpg"},
  {names:"Ganesh",
profile:"https://i.pinimg.com/236x/22/45/3e/22453e4e9f7a7d7964279470a81d12b3--ravindra-jadeja-current-events.jpg"}];

    return (
    <div className="App">
  {users.map(nm=> <Welcome name={nm.names} logo={nm.profile}/>)}
    </div>
  );
}
function Welcome({name,logo})
{
  return(
    <div className="Welcome">
      <img className="userinput"
      src={logo} alt="Logo" />;
       <h1>Hello, {name}🐱‍🐉🤷‍♂️👍</h1>
      </div>
  );
}