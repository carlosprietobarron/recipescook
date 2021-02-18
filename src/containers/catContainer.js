/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCat } from '../redux/actions/catActions'

function CatContainer({catData, filter, fetchCat}) {
    useEffect(() => { fetchCat() },[]);

    return userData.loading ? (
        <h2>Data loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : ( 
        <div>
            {
              userData && 
              userData.users &&
              userData.users.map(user => <p>{user.name}</p>)
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        catData: state.cat,
        filter: state.filter  
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCat: () => {
            dispatch(fetchCat())
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (CatContainer)
