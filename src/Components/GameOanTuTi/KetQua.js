import React, { Component } from 'react';
import { connect } from 'react-redux';


class KetQua extends Component {
     render() {
          let { soBanThang, tongSoBan } = this.props.gameOanTuTi;
          return (
               <div className='ketqua'>
                    <h1>Im iron man, <br />I Love you 3000</h1>
                    <p>Số Bàn Thắng: <span>{soBanThang}</span></p>
                    <p>Số Bàn Chơi: <span>{tongSoBan}</span></p>
                    <button className='btn btn-success' onClick={() => {
                         let action = {
                              type: 'PLAYGAME',
                         }
                         this.props.dispatch(action);
                    }}>PLAY GAME</button>
               </div>
          );
     }
}


const mapStateToProps = (rootReducer) => {
     return {
          gameOanTuTi: rootReducer.GameOanTuTiReducer
     }
}
export default connect(mapStateToProps)(KetQua)