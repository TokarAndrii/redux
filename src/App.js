import React from 'react';
import {connect} from 'react-redux'
import {add, sub} from './redux/actions/counter'
import styles from './App.css';




const App = ({value, add, sub}) => (
    <div className={styles.App}>
        <h1 className={styles.header}>react redux app</h1>
        <div className={styles.result}>{value}</div>
        <div className={styles.actions}>
            <div className={styles.add} onClick={add}>&#43;</div>
            <div className={styles.sub} onClick={sub}>&#8722;</div>
        </div>
    </div>
)


const mapStateToProps = state => ({
    value: state.value
})

const mapDispatchToProps = dispatch => ({
    add: () => dispatch(add()),
    
    sub: () => dispatch(sub()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
