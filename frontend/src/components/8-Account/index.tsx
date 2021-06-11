/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Users from '../../types/users';
import './account.css';

type AccountProps = {
    user: Users
}

const Account: FC<AccountProps> = ({ user }: any) => (
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
        <p className="account-data__addres">
          dirección de envío:
          {user.addres}
          <button type="button">editar dirección</button>
        </p>
      </div>
      <Link to="/tienda">
        <button type="button" className="button-tienda">Ir a la tienda</button>
      </Link>
    </div>
  </>
);

function mapStateToProps({ user }: any) {
  return { user };
}

export default connect(mapStateToProps)(Account);
