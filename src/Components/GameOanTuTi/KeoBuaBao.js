import React, { Component } from 'react';
import { connect } from 'react-redux';


class KeoBuaBao extends Component {
     render() {
          let { banChon, mangKeoBuaBao } = this.props.gameOanTuTi;
          let hinh = `./img/${banChon}.png`
          return (

               <div className="row d-flex justify-content-between ">
                    {/* PLAYER 1 */}
                    <div className="col-4 a">
                         <div className="bg">
                              <img src={hinh} alt="" />
                         </div>
                         <div className="speech-bubble"></div>
                         <img src="./img/player.png" alt="" />
                         <div className="row justify-content-center mr-5 bg-img1">
                              <button className="col-2 keobuabao" onClick={() => {
                                   let action = {
                                        type: 'KEO',
                                        chon: 'keo'
                                   }
                                   this.props.dispatch(action);
                              }}>
                                   <img className='' src="./img/keo.png" alt="" />
                              </button>
                              <button className="col-2 keobuabao" onClick={() => {
                                   let action = {
                                        type: 'BUA',
                                        chon: 'bua'
                                   }
                                   this.props.dispatch(action);
                              }}>
                                   <img src="./img/bua.png" alt="" />
                              </button>
                              <button className="col-2 keobuabao" onClick={() => {
                                   let action = {
                                        type: 'BAO',
                                        chon: 'bao'
                                   }
                                   this.props.dispatch(action);
                              }}>
                                   <img src="./img/bao.png" alt="" />
                              </button>
                         </div>
                    </div>
                    {/* PLAYER 2 */}
                    <div className="col-4">
                         <div className="bg">
                              <img src={mangKeoBuaBao[0].hinh} alt="" />
                         </div>
                         <div className="speech-bubble"></div>

                         <img src="./img/playerComputer.png" alt="" />
                    </div>
               </div>
          );
     }
}


const mapStateToProps = (rootReducer) => {
     return {
          gameOanTuTi: rootReducer.GameOanTuTiReducer,
     }
}
export default connect(mapStateToProps)(KeoBuaBao);