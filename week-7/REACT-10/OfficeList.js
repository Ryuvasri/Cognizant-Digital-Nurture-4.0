import React from 'react';

const offices = [
  {
    name: 'Downtown Suite',
    rent: 55000,
    address: '123 Main St, Metropolis',
    img: 'https://via.placeholder.com/300x200?text=Downtown+Suite'
  },
  {
    name: 'Riverside Loft',
    rent: 75000,
    address: '456 River Rd, Lakeside',
    img: 'https://via.placeholder.com/300x200?text=Riverside+Loft'
  },
  {
    name: 'Tech Park Office',
    rent: 62000,
    address: '789 Innovation Dr, Silicon Valley',
    img: 'https://via.placeholder.com/300x200?text=Tech+Park+Office'
  }
];

export default function OfficeList() {
  return (
    <div>
      {offices.map((office, idx) => {
        // conditional inline style for rent
        const rentStyle = {
          color: office.rent < 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          <div key={idx} style={{ border: '1px solid #ccc', margin: 12, padding: 16, borderRadius: 8 }}>
            <h2>{office.name}</h2>
            <img src={office.img} alt={office.name} style={{ width: '100%', maxWidth: 400, borderRadius: 4 }} />
            <p><strong>Address:</strong> {office.address}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={rentStyle}>
                ₹{office.rent.toLocaleString()}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
