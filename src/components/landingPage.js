import React,{Component} from 'react';
import {connect} from 'react-redux';

class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container">
                 <header className="App-header">
        <p>
         To see list of channels available for week, please click 'View Channels'
        </p>
        <button  className="neomorphic-shadows neomorphic-shadows-hover" ><a href="/channels">View Channels</a></button>
      </header>
            </div>
        )
    }
}
const mapStateToProps= state => ({
    ...state
})

const mapDispatchToProps = dispatch =>({

})

export default connect(mapStateToProps, mapDispatchToProps)
(LandingPage);