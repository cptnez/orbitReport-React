import styling from './styling.css';

export default function Banner() {
    let bannerTitle = "Orbit Report";
    let instructions = "Take a gander at these incredible edible sattelites..."
 
    return (
       <div>
          <header>{bannerTitle}</header>
          <p>{instructions}</p>
       </div>      
    );
 }