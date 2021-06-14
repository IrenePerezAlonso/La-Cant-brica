/* eslint-disable react/prop-types */
import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions/actionUser';
import Users from '../../types/users';
import './account.css';

type AccountProps = {
    user: Users,
    dispatch: any
}

const Account: FC<AccountProps> = ({ user, dispatch }) => {
  const [newUser, setNewUser] = useState(user.user);

  function sendData(event: any) {
    event.preventDefault();
    dispatch(updateUser(newUser));
  }

  function handleAddress(event: any) {
    setNewUser({
      ...newUser,
      address: event.target.value
    });
  }

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
            {localStorage.getItem('userRegister')}
          </p>
          <p className="account-data__address-title">Dirección de envío:</p>
          <div className="account-data__addres">
            <form className="account-acount__form">
              <input type="text" id="address" className="address-input" placeholder="dirección" onChange={handleAddress} />
            </form>
            {user.user.address}
            <button type="button" className="button-address" onClick={sendData}>añadir dirección</button>
          </div>
        </div>
        <Link to="/tienda">
          <button type="button" className="button-tienda">Ir a la tienda</button>
        </Link>
      </div>
    </>
  );
};

function mapStateToProps({ user }: any) {
  return { user };
}

export default connect(mapStateToProps)(Account);
