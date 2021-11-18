import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions.js'

function UsersContainer ({ userData, fetchUsers }) {
    console.log(userData.users);
    //console.log("Fetch users "+fetchUsers);
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.nat}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (nat="CH",results=34,page=1) => dispatch(fetchUsers(nat,results,page))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)