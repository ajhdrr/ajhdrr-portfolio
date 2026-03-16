import Panel from './Panel';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home">
      
      <Panel side="cs" />
      

      <div className="home__center">
        <h1 className="home__name">
          Ajmain
          <em>Hyder</em>
        </h1>
         <div className="home__divider" />
        <p className="home__tagline">Designer · Developer · Photographer</p>
         <div className="home__dot" />
      </div>

      <Panel side="photo" />
      
    </div>
  );
}
