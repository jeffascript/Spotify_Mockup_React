// import React, { useState, useEffect } from 'react'

// export function Effect() {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('It got rendered')
//   })

//   return(
//     <div>
//       <h1>You clicked {count} times</h1>
//       <button onClick={() => setCount(count + 1)}> Click me</button>
//     </div>
//   );
// }

// Alternatively //

// import React from  'react';

// export class Effect extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   componentDidMount() {
//     console.log('It did mount.')
//   }

//   componentDidUpdate() {
//     console.log('It did get updated.')
//   }

//   render() {
//     return (
//       <div>
//         <h1>You clicked {this.state.count} times</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }



