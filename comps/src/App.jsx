import Button from './Button';
import { GoBell, GoBook, GoClock, GoDatabase, GoFileMedia  } from "react-icons/go";


function App() {
  const handleClick = () => {
    console.log("CLICK");
  };

  return (
    <div> 
      <div>
        <Button success  rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoBook />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoClock  />
          See Deal!
          </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoFileMedia  />
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
