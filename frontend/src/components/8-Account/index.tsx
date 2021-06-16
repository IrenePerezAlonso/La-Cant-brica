/* eslint-disable react/prop-types */
import React, { useState, FC, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { updateUser, logout } from '../../redux/actions/actionUser';
import Users from '../../types/users';
import './account.css';

type AccountProps = {
    user: Users,
    dispatch: any
}

const Account: FC<AccountProps> = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUser, setNewUser] = useState(user.user);

  function sendData(event: any) {
    const newUserData = { ...user, user: { ...newUser } };
    event.preventDefault();
    dispatch(updateUser(newUserData));
  }
  function handleAddress(event: any) {
    setNewUser({
      ...newUser,
      address: event.target.value
    });
  }

  useEffect(() => {
    if (!user.token) history.push('/login');
  });

  return (
    <>
      <div className="account">
        <h2 className="account-title">mi cuenta</h2>
        <h3 className="account-subtitle">datos personales:</h3>
        <hr />
        <div className="account-data">
          <p className="account-data__email">
            correo electrónico:
            {' '}
            <p className="email-email">
              {localStorage.getItem('userRegister')}
            </p>
          </p>
          <p className="account-data__address-title">Dirección de envío:</p>
          <p className="account-data__address-address">
            {user.user.address}
          </p>
          <div className="account-data__addres">
            <form className="account-acount__form">
              <input
                type="text"
                id="address"
                className="address-input"
                data-testid="address-input"
                placeholder="añada una dirección"
                onChange={handleAddress}
              />
            </form>
            <button
              type="button"
              className="button-address"
              data-testid="button-address"
              onClick={sendData}
            >
              añadir dirección
            </button>
          </div>
          <button
            type="button"
            className="button-logout"
            data-testid="button-logout"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
        <Link to="/tienda">
          <button
            type="button"
            className="button-tienda"
          >
            Ir a la tienda
          </button>
        </Link>
      </div>
    </>
  );
};

function mapStateToProps({ user }: any) {
  return { user };
}

export default connect(mapStateToProps)(Account);
