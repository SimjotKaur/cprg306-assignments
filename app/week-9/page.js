'use client';

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }

  function handleSignOut() {
    firebaseSignOut();
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'left', color: 'white', fontSize: '2em', fontWeight: 'bold' }}>Shopping List App</h1>
      {!user ? (
        <button 
          onClick={handleSignIn} 
          style={{ padding: '10px', fontSize: '16px', display: 'block', textAlign: 'left', marginTop: '10px' }}
        >
          Sign in with GitHub
        </button>
      ) : (
        <div>
          <p style={{ textAlign: 'left', color: 'white', margin: '5px 0' }}>Signed in as ({user.email}).</p>
          <button 
            onClick={handleSignOut} 
            style={{ padding: '10px', fontSize: '16px', display: 'block', textAlign: 'left', marginTop: '10px' }}
          >
            Sign out
          </button>
          <br />
          <Link href="/week-8/shopping-list">
            <span 
              style={{ display: 'block', marginTop: '10px', fontSize: '16px', cursor: 'pointer', color: 'white', textAlign: 'left', textDecoration: 'none' }}
            >
              Continue to your Shopping List
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
