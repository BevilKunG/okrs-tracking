import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout/Layout'
import ObjectiveList from '../components/Objective/ObjectiveList'
import LoadingObjective from '../components/Loading/LoadingObjective'

class Dashboard extends Component {
  renderList() {
    return !this.props.loading ? (
      <ObjectiveList/>
    ) : (
      <LoadingObjective loading={this.props.loading}/>
    )

  }

  render() {
    return (
      <Layout>
        {this.renderList()}
      </Layout>
    )
  }
}

const mapStateToProps = ({ loading }) => {
  return { loading }
}

export default connect(mapStateToProps)(Dashboard)
