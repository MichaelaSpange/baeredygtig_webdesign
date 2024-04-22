import React, { useState } from 'react';


const services = [
  { id: 1, name: 'Optimering af eks. site', price: 1995 },
  { id: 2, name: 'SEO optimering', price: 1800 },
  { id: 3, name: 'Filhåndtering', price: 500 },
  { id: 4, name: 'Visuel identitet', price: 3499 },
  { id: 5, name: 'Splinterny hjemmeside', price: 6000 }
];

const PriceCalculator = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');

  const handleServiceToggle = (serviceId) => {
    const isSelected = selectedServices.includes(serviceId);
    if (isSelected) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const calculateTotalPrice = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + service.price;
    }, 0);
  };

  const handleSubmit = () => {
    const dataToSend = {
      name: name,
      company: company,
      email: email,
      selectedServices: selectedServices
    };
  
    // Sender dataen til firebase
    fetch('https://reagency-a7d64-default-rtdb.europe-west1.firebasedatabase.app/kontakt.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })


    .then(response => {
      if (!response.ok) {
        throw new Error('Fejl ved indsendelse af data til Firebase.');
      }
      console.log('Data blev sendt til Firebase-databasen.');
    })
    .catch(error => {
      console.error('Fejl ved indsendelse af data til Firebase:', error);
    });
  };

  return (
    <div className='prisudregner_wrapper'>
    

      <div className='services_checkbox_bobbel'>
        <h2>Prisberegner</h2>
        {services.map(service => (
          <div className='services_m_box' key={service.id}>
            <input
              type="checkbox"
              id={`service-${service.id}`}
              onChange={() => handleServiceToggle(service.id)}
              checked={selectedServices.includes(service.id)}
            />
            
            <label htmlFor={`service-${service.id}`}>{service.name} - {service.price},-</label>
          </div>
          
        ))}
      </div>

      <h4>Samlet pris</h4>
        <p>{calculateTotalPrice()},-</p>
     

      <div className='pris_bobbel'>
        
        
      <div className='input_fields'>
        <input
          type="text"
          placeholder="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Virksomhed"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
        
        
      </div>

      <button id='submit' onClick={handleSubmit}>Kontakt os</button>
    </div>
  );
};

export default PriceCalculator;