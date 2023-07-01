import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Contact = () => {
  
  return (
    <div className="">
      <h1 className="text-5xl font-bold border-l-8 p-2 ">Contact With Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 px-4 gap-4">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="input border-white  w-full " />
          <input type="text" placeholder="Subject" className="input border-white  w-full " />
          <input type="email" placeholder="Email" className="input border-white  w-full " />
          <textarea className="textarea border-white" cols="" rows="4" placeholder="Your Message"></textarea>
          <button className="btn">Submit</button>
        </div>
        <div className=" ">
          <MapContainer className="rounded-xl h-96 w-full" center={[22.89649700608392, 89.52244543032204]} zoom={6}>
            <TileLayer 
              attribution='https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[22.89649700608392, 89.52244543032204]}>
              <Popup>
                I'm Here🚶🏾🌍
              </Popup>
            </Marker>

          </MapContainer>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;