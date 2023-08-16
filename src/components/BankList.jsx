import { useState, useEffect } from 'react';

const BankList = () => {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/banks')
      .then(response => response.json())
      .then(data => {
        console.log(data); // You can choose to keep or remove this log
        setBanks(data.data); // Set the 'data' array from the API response
      })
      .catch(error => console.error('Error fetching banks:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Bank List</h2>
      <ul className="bg-white shadow-md p-4 rounded-lg">
        {banks.map(bank => (
          <li key={bank.id} className="py-2 border-b last:border-b-0">
            <p className="text-lg font-semibold">{bank.name}</p>
            <p className="text-gray-600">Bank Code: {bank.code}</p>
            {bank.longcode && (
              <p className="text-gray-600">Long Code: {bank.longcode}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};



export default BankList;
