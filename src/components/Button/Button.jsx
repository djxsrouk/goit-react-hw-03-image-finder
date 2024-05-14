import React from "react";
import styles from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends React.Component{
    render(){
         const {onLoadMore} = this.props;
        return(
            <>
            <div className={styles.containerButton}>
            <button type="button" 
            className={styles.button}
            onClick={onLoadMore}>
                Load More</button>
            </div>
            </>
        ) 
    }
}
Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};


export default Button;