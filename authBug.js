const unsubscribe = onAuthStateChanged(auth, (user) => {if (user) {  // User is signed in, see docs for a list of available properties
    // ...
  } else {  // User is signed out
    // ...
  }});

//Problem: unsubscribe() is not called causing memory leak

//Solution:
//Call unsubscribe() when component unmounts or you no longer need to listen for changes. 