const firebaseUrl = "https://bookmanagementapp-4c257-default-rtdb.asia-southeast1.firebasedatabase.app/BookManagementApp.json"; // Replace with your Firebase URL

// CREATE: Add a new record
function createData() {
  const data = {
    name: 'John Doe',
    rollno: 101
  };

  fetch(`${firebaseUrl}/students.json`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => console.log('Created', json))
  .catch(err => console.error('Error:', err));
}

// RETRIEVE: Get all records
function retrieveData() {
  fetch(`${firebaseUrl}/students.json`)
    .then(response => response.json())
    .then(data => console.log('Retrieved', data))
    .catch(err => console.error('Error:', err));
}

// UPDATE: Update a student record by ID (replace 'unique-id' with actual ID)
function updateData() {
  const updatedData = {
    name: 'Jane Smith'
  };
  const id = 'unique-id'; // Provide the Firebase key of the record

  fetch(`${firebaseUrl}/students/${id}.json`, {
    method: 'PATCH', // or 'PUT' to replace entire object
    body: JSON.stringify(updatedData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log('Updated', data))
  .catch(err => console.error('Error:', err));
}

// DELETE: Remove a record by ID (replace 'unique-id' with actual ID)
function deleteData() {
  const id = 'unique-id'; // Provide the Firebase key of the record

  fetch(`${firebaseUrl}/students/${id}.json`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(() => console.log('Deleted'))
  .catch(err => console.error('Error:', err));
}
