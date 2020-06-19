import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchChannels} from '../actions/channelActions';

import ChannelCard from './channelCard';


class ChannelList extends Component{
    

    componentDidMount(){
      this.props.fetchChannels();
    }

    render(){

        const {channels}=this.props;
       
        return(
            <div className="container" key>
                
                    <div>
                        <h2>Channel List</h2>
                        {
                          channels.map(ch=>{
                              return(
                                  <div key={ch.date}>
                                  <h6>{ch.date}</h6>
                                  <div className="bp-5">
                                      {
                                          ch.channels.map((item,i)=>{
                                              return(
                                                  <ChannelCard key={i} item={item}/>
                                              )
                                          })
                                      }
                                  </div>
                                  </div>
                              )
                          })
                        }
                    </div>
       
      
            </div>
        )
    }
}
const mapStateToProps= state => ({
    channels:state.channels.channels,
})

const mapDispatchToProps = dispatch =>({
fetchChannels:()=>dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToProps)
(ChannelList);