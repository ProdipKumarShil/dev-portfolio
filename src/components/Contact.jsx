import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from "../shared/Header";

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_wab4tuw', 'template_7gaymch', form.current, 'Oerpf8spE_jdi_-ml')
      .then((result) => {
        console.log(result.text);
      },
      (err) => {
        console.log(err.text)
      })
  }

  return (
    <div className="mt-4">
      <Header text="Contact With Me"></Header>
      <div className="grid grid-cols-1 md:grid-cols-2  py-6  px-4 gap-4">
        <div className=" ">
          <MapContainer className="rounded-xl h-96 w-full" center={[22.84487499705877, 89.53538669322856]} zoom={6} scrollWheelZoom={false}>
            <TileLayer 
              attribution='https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[22.84487499705877, 89.53538669322856]}>
              <Popup>
                I&apos;m Here🚶🏾🌍
              </Popup>
            </Marker>

          </MapContainer>
        </div>
        <form ref={form} id="contactForm" onSubmit={sendEmail} className="flex flex-col gap-4">
          <input name="name" type="text" placeholder="Name" className="input border-white  w-full " />
          <input name="subject" type="text" placeholder="Subject" className="input border-white  w-full " />
          <input name="email" type="email" placeholder="Email" className="input border-white  w-full " />
          <textarea name="message" className="textarea border-white" cols="" rows="4" placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
        
        
      </div>
    </div>
  );
};

export default Contact;