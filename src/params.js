import {Dimensions} from 'react-native'

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, //15 percent of the screen is for the app header
  difficultLevel: 0.1, //10 percent of mines in the field
  getColumnsAmount(){
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize) //Floor method rounds the value down
  },
  getRowsAmount(){
    const totalheight = Dimensions.get('window').height
    const boardHeight = totalheight * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
  }
}

export default params
