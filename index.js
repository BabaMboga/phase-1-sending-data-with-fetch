// Add your code here
const submitData = function (name, email) {
    const newData = {
        name: name,
        email: email,
      };
      
      const newUserObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newData),
      };
      
 return fetch("http://localhost:3000/users", newUserObject)
    .then((response) => {
      return response.json();
    })
    .then(function (newUser) {
        document.body.innerHTML = newUser.id;
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });

   
};

submitData('Steve','steve@steve');