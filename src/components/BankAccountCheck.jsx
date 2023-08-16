import { useState } from 'react';

const BankAccountCheck = () => {
  const [bankCode, setBankCode] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    const requestData = {
      bankCode: bankCode,
      accountNo: accountNo
    };

    fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => setResult(data.message))
      .catch(error => console.error('Error checking account:', error));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Bank Account Check</h2>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Bank Code:</label>
            <input
              type="text"
              value={bankCode}
              onChange={e => setBankCode(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Account Number:</label>
            <input
              type="text"
              value={accountNo}
              onChange={e => setAccountNo(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button onClick={handleCheck} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Check Account
          </button>
          <p className="mt-2">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default BankAccountCheck;
