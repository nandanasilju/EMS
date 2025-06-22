import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      
    <Row className='p-5'>
        <Col>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-working-on-presentation-3474701-2928587.png" alt="" />
        </Col>
          <Col className='text-center p-5'>
          <h2 className='text-center mt-5'>Employee Management System</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cumque animi soluta et perferendis aut odio molestiae facere amet, nemo, aliquid odit exercitationem quo earum cum blanditiis similique magnam perspiciatis.
          Reiciendis, nam veniam! Soluta ex commodi autem suscipit eligendi assumenda qui quia fugit, esse quod similique molestias adipisci eius quam excepturi ipsum ratione dolore tempora fugiat, aliquam culpa voluptatem nulla!
          Animi voluptatem sint, dolore atque accusantium, quibusdam magni ducimus nobis cupiditate tenetur, et laboriosam eveniet consequuntur. Voluptas, dolores corrupti. Temporibus pariatur odio animi fugit sit mollitia obcaecati excepturi? Repellendus, reprehenderit.</p>
          <Link to={'/login'}>
           <button className='btn btn-primary'>Get Started</button>
        </Link>
          </Col>
         
      </Row>
    </div>
  )
}

export default LandingPage
