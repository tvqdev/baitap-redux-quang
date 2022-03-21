let gameOanTuTi = {
     banChon: 'bua',
     soBanThang: 0,
     tongSoBan: 0,
     mangKeoBuaBao: [
          { hinh: './img/keo.png', loai: 'keo' },
          { hinh: './img/bua.png', loai: 'bua' },
          { hinh: './img/bao.png', loai: 'bao' },

     ]
}

const GameOanTuTiReducer = (state = gameOanTuTi, action) => {
     switch (action.type) {
          case 'KEO': {
               state.banChon = action.chon
               return { ...state }
          }
          case 'BUA': {
               state.banChon = action.chon
               return { ...state }
          }
          case 'BAO': {
               state.banChon = action.chon
               return { ...state }
          }
          case 'PLAYGAME': {
               let mangNgauNhien = [];
               let KeoBuaBao = [
                    { hinh: './img/keo.png', loai: 'keo' },
                    { hinh: './img/bua.png', loai: 'bua' },
                    { hinh: './img/bao.png', loai: 'bao' },
               ];
               let run = Math.floor(Math.random() * KeoBuaBao.length);
               mangNgauNhien.push(KeoBuaBao[run]);
               state.mangKeoBuaBao = [...mangNgauNhien]
               let { banChon, mangKeoBuaBao } = state
               if ((banChon === "keo" && mangKeoBuaBao[0].loai === "bao") || (banChon === "bua" && mangKeoBuaBao[0].loai === "keo") || (banChon === "bao" && mangKeoBuaBao[0].loai === "bua")) state.soBanThang++;
               state.tongSoBan += 1;
               return { ...state }
          }

          default: return state

     }
}

export default GameOanTuTiReducer

