import { onAuthStateChanged, auth } from './firebase'; //Import firebase config
import React, { useEffect } from 'react';

function MyComponent() {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  return (
    <div>
      {user ? <p>User is signed in: {user.email}</p> : <p>User is not signed in</p>}
    </div>
  );
}

export default MyComponent;