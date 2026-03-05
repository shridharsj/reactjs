import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
import 'bulma/css/bulma.css';

function App(){
    return (
      <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistants</p>
            </div>
        </section>

        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-3">
                        <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} 
                        description="Alexa is great qqq www eee  rrrrr ytyydfd sthsh" />
                    </div>
                    <div className="column is-3">
                        <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} 
                        description="Cortana is cool qwert yuio fmvhb kjb kjvbkjub " />
                    </div>
                    <div className="column is-3">
                        <ProfileCard title="Siri" handle="@siri01" image={SiriImage} 
                        description="Siri is amazing kgug ikugkiu " />
                    </div>
                </div>
            </section>
        </div>
      </div>  
    );
}

export default App;