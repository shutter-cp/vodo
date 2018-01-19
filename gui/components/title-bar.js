@CSS({
  '@keyframes xxx': {
    '0%': {
      width: 1
    },
    '100%': {
      '@media screen': {
        width: 10
      }
    }
  },
  '.bbbbb': {
    color: '#ccc',
    width: 7,
    '#aaaaa': {
      background: '#FFF',
      animationName: 'xxx',
      '@media screen': {
        '&:hover': {
          background: '#000',
          animation: 'xxx 0.5s',
        }
      }
    }
  }
})
class TitleBar extends React.Component {
  render () {
    return (
      <div>
        title
      </div>
    )
  }
}

export default TitleBar
