import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div>
      <div style={{textAlign:'center', marginTop: '100px'}}>
          <h3>Hi, This is our <span style={{fontSize:'30px', fontWeight:'bold', color:'red'}}>'Home'</span> Page.</h3>
          <p>This Page will be updated very soon. Stay tuned for more.</p>
          <p>Thanks for you patience!!</p> <br/><br/><br/><br/>
          <h3>Note: You should visit our Text-Editor page. <Link to="/TextEditor" style={{ textDecoration: 'none' }}>Click Here</Link> to go</h3>
        </div>
    </div>
  )
}
