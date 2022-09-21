import React, { Component } from 'react'
import '../css/footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='copyright'> All Rights Reserved &copy; {new Date().getFullYear()} webdeer.in</div>
        <ul className='social'>
          <li><a href='https://'><img scr="" alt='' title='' /></a></li>
        </ul>
      </div>
    )
  }
}
