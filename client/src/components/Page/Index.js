import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
    
class Index extends React.Component {
    
    constructor(props) {
        super(props);
        this.actions = bindActionCreators( actions, this.props.dispatch )
    }
        
    render() {
        const { active, dispatch } = this.props;
        const { toggleActive } = this.actions;

        return  <div id="index"> 
                    <h3>Index Route</h3> 
                    <div>{this.props.children}</div> 

                    <p>A Simple peice of interactivity wired up with Redux</p>
                    { active ? <div>ACTIVE</div> : <div>NOT ACTIVE</div> }
                    <button onClick={() => dispatch( toggleActive( active ) ) }>change state</button>  
                </div>;
    }
}

const mapStateToProps = state => { 
    return {
        active: state.active
    }
};
export default connect(mapStateToProps)(Index);