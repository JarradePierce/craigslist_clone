import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Jarrade'
    }
  }

loopCategories = () => {
  let testArray = [1,2,3,4,5,6,7]
  return testArray.map((i) => {
    console.log(i)
      return(
      <div className={'categories'} key={i}>
        <div className={'title'}>Community</div>
        <div className={'link-group'}>
          <a href='#' className={'link'}>Community</a>
          <a href='#' className={'link'}>General</a>
          <a href='#' className={'link'}>Groups</a>
          <a href='#' className={'link'}>Activities</a>
          <a href='#' className={'link'}>Artist</a>
          <a href='#' className={'link'}>Local News</a>
          <a href='#' className={'link'}>Child Care</a>
          <a href='#' className={'link'}>Lost&Found</a>
          <a href='#' className={'link'}>Classes</a>
          <a href='#' className={'link'}>Musician</a>
          <a href='#' className={'link'}>Events</a>
          <a href='#' className={'link'}>Pets</a>
        </div>
      </div>  
    )
  })
}

loopTags = () => {
  let testTags = ['a','b','c','d']

  return testTags.map((i) => {
    return(<div className={'tag'} key={i}>Apple macbook</div>)
  })
}

  render () {
    return (
      <div className='home'>
        <div className='container'>
        <h1>{this.state.name}</h1>
          <h1>Connecting People <br/>Everywhere</h1>
          <section className='links'>
            {this.loopCategories()}
          </section>
          <section className={'trending'}>
            <input type='text' name='search' className={'search'} />
            <div className={'title'}>
            <i className={"far fa-clock"} />
              Trending now
            </div>
            <div className={'trending-tags'}>
              {this.loopTags()}
            </div>
          </section>
        </div>
      </div>
    )
  }
}