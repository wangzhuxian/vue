import React, { Component } from 'react'
import './RankList.less'
import AppList from '../public/AppList'
class RankList extends Component {
  getChildren({ name }) {
    return <div className="rank_list__name">{name}</div>
  }
  render() {
    const { rankList } = this.props
    return <AppList data={rankList} render={this.getChildren} />
  }
}
export default RankList