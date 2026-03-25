import Button from './components/Button';
import { GoBell, GoBook, GoClock, GoDatabase, GoFileMedia  } from "react-icons/go";
import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 'oi13oih',
      label: "Can I use React on Project?",
      content: "You can use any language.You can use any language.You can use any language.You can use any language.You can use any language."
    },
    {
      id:'srg09arg',
      label: "Can I use Javascript on Project?",
      content: "You can use any language.You can use any language.You can use any language.You can use any language.You can use any language."
    },
    {
      id:'lkj36lkj', 
      label: "Can I use CSS on Project?",
      content: "You can use any language.You can use any language.You can use any language.You can use any language.You can use any language."
    }
  ];

  return <Accordion items={items}/>;
}

export default App;
