import React, { useContext, useState } from 'react';
import AuthContext from './auth-context';
import useInput from '../hooks/useInput';
import HelpPage from './HelpPage';

const LoginPage = () => {
  const [username, bindUsername, resetUsername] = useInput('');
  const [password, bindPassword, resetPassword] = useInput('');
  const [showHelp, setShowHelp] = useState(false);

  const auth = useContext(AuthContext);
  
  const logYouIn = (e) => {
    e.preventDefault();
    username !== 'photo' || password !== 'password' ? alert('Wrong credentials.') : auth.login();
  }

  return (
    <>
      {
        showHelp
        ? <HelpPage setShowHelp={setShowHelp} />
        : <div className='bg-secondary'>
          <form className='d-flex tall justify-content-center' onSubmit={logYouIn}>
            <div className="align-self-center">
              <div className="row d-flex justify-content-center">
                <div className="card">
                  <div className="mx-auto pt-3 mt-4 mb-4 h3">Photo Sharing</div>
                  <div className="px-sm-5 mb-2"> 
                    <label className='form-label fw-bold mb-0'>Username</label> 
                    <input type="text" className="w-100" placeholder='Enter username...' {...bindUsername} />
                  </div>
                  <div className="px-sm-5 mb-3"> 
                    <label className='form-label fw-bold mb-0'>Password</label>
                    <input type="password" className="w-100" placeholder='Enter password...' {...bindPassword} />
                  </div>
                  <a className='btn btn-link mb-3 px-sm-5' href="/#/help" >What is this site?</a>
                  <div className="mb-5 px-sm-5 pb-3"> <button type='submit' className="btn btn-dark w-100">Login</button></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      }
    </>
  );
};

export default LoginPage;
