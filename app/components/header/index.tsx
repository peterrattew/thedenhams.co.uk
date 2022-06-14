import { Link } from "@remix-run/react";
import image from "~/assets/images/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-2">
      <img src={image} width="200" height="134" className="p-1"/>
      <nav>
        <ul className="flex flex-row iterms-center px-1">
          <li className="px-1"><Link to="/">Home</Link></li>
          <li className="px-1"><Link to="/accommodation">Accommodation</Link></li>
          <li className="px-1"><Link to="/location">Location</Link></li>
          <li className="px-1"><Link to="/rsvp">RSVP</Link></li>
        </ul>
      </nav>
    </header>
  );
}