import AddNumber from '../components/AddNumber';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    onClick: function(size) {
      dispatch({ type: 'INCREAMENT', size });
    }
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import React, { Component } from 'react';
// import store from '../store';
// import AddNumber from '../components/AddNumber';

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={function(size) {
//           store.dispatch({ type: 'INCREAMENT', size });
//         }}
//       ></AddNumber>
//     );
//   }
// }
