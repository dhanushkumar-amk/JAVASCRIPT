
// SESSION STORAGE IS USED TO STORE THE DATA IN THE BROWSER
// IT STORE 5MB OF DATA IN THE BROWSER

// it will store the data on particular page
// when you close the page then the session storage will be gone

// The sessionStorage object stores data for only one session.
// (The data is deleted when the browser is closed).

// setItem()
// Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.


// save data to the session storage
function saveData(){
    var inputData = document.getElementById('username').value;
    // alert(inputData)
    
    if(inputData){
        // setItem(key, value)
        sessionStorage.setItem('user',inputData);

// it will store data on the session storage
// go to inspect => storage => session storage

document.getElementById('username').value= " ";
    }
}

// retrieve the data from the  session storage
function displayData(){
    // Returns the current value associated with the given key, or null if the given key does not exist.
    var storedData = sessionStorage.getItem('user');
}