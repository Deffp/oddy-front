// import React, { Component } from 'react';

// import adminAPI from '../api/adminAPI';

// class Admin extends Component {

//   state = { newAdmin: { email: '' }, adminList: [], };

//   // async componentDidMount() {
//   //   const adminList = await adminAPI.getAdmins();
//   //   this.setState({ adminList });
//   // }

//   handleChangeEmail = (e) => {
//     this.setState({ newAdmin:{ email: e.target.value } }); 
//   }

//   addingNewAdmin = async () => {
//     const token = sessionStorage.getItem('token');
//     const { newAdmin:{ email } } = this.state;
//     const admin = await adminAPI.addingAdmin(email, token);
//     return admin;
//   }

//   removeAdmin = async (admin) => {
//     const token = sessionStorage.getItem('token');
//     const removeAdmin = await adminAPI.removeAdmin(admin, token);
//     return removeAdmin;
//   }


//   render() {
//     const { newAdmin:{ email }, adminList } = this.state;
//     return (
//       <div>
//         <input value={ email } type="text" placeholder='Enter email' onChange={ this.handleChangeEmail }/>
//         <button onClick={this.addingNewAdmin}>Add</button>
//         {adminList.map((admin, index) => {
//           const { email } = admin;
//           return (
//           <ul key={index}>
//             <li>{admin.email}
//             <button onClick={() => this.removeAdmin(email)}>Remove</button></li>
//           </ul>
//           )
//         })}
//       </div>
//     );
//   };
// };

// export default Admin;