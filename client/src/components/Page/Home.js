import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
    
class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.actions = bindActionCreators( actions, this.props.dispatch )
    }
        
    render() {
        const { active, dispatch } = this.props;
        const { toggleActive } = this.actions;

        return  <div id="home"> 
                    <h3>Home</h3> 
                    <div>{this.props.children}</div> 
                    { active ? <div>ACTIVE</div> : <div>NOT ACTIVE</div> }
                    <button onClick={() => dispatch( toggleActive( active ) ) }>make active</button>  
                </div>;
    }
}

const mapStateToProps = state => { 
    return {
        active: state.active
    }
};
export default connect(mapStateToProps)(Home);