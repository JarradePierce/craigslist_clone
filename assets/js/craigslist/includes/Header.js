import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <div className='container'>
        <div className={'Header'}>
          <div className={'left-menu'}>
            <div className={'logo'}>Craigslist</div>
            <div className={'city'}>San Francisco
              <i className={"fas fa-chevron-down"} />
            </div>
          </div>

          <div className={'right-menu'}>
            <div className={'user-img'}>
              <i className={"far fa-user"} />
            </div>
            <div className={'user-dropdown'}>my account
              <i className={"fas fa-chevron-down"} />
            </div>
            <div className={'post-btn'}>post to classifieds</div>
          </div>
        </div>
      </div>
    )
  }
}