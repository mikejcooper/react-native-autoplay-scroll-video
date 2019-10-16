import React, { Component, ReactElement } from 'react'
import { View, Dimensions } from 'react-native'

const SCREEN_HEIGHT = Dimensions.get('window').height

class HeightAwareItem extends Component<IProps, IState> {
  _isMounted = false
  _itemRef = null

  _itemHeight = Math.max()
  _scrollHeight = -1

  state = {
    itemCenterToScreenCenter: SCREEN_HEIGHT,
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  componentWillUpdate() {
    this.updateItemYPosition(this.props.scrollHeight)
  }

  updateItemYPosition(scrollHeight: number) {
    if (!this._itemRef) return

    // Asynchronously get measurements
    this._itemRef.measure(
      (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
        const isStationary = scrollHeight === this._scrollHeight

        if (this._isMounted && !isStationary) {
          this._scrollHeight = scrollHeight

          const itemYPosition = pageY + scrollHeight
          // Calculate height from video middle to page top.
          const itemTopToScreenTop = scrollHeight - itemYPosition
          const itemCenterToScreenTop = itemTopToScreenTop - this._itemHeight / 2
          const itemCenterToScreenCenter = itemCenterToScreenTop + SCREEN_HEIGHT / 2

          this.setState({ itemCenterToScreenCenter: itemCenterToScreenCenter })
        }
      }
    )
  }

  render() {
    const { scrollHeight } = this.props

    return (
      <View
        ref={(ref: any) => (this._itemRef = ref)}
        onLayout={(event: any) => {
          var { x, y, width, height } = event.nativeEvent.layout
          this._itemHeight = height
          this.updateItemYPosition(scrollHeight)
        }}
      >
        {this.props.renderItemWithInfo(Math.abs(this.state.itemCenterToScreenCenter))}
      </View>
    )
  }
}

interface IState {
  itemCenterToScreenCenter: number
}

interface IProps {
  renderItemWithInfo: (distToScreenCenter: number) => ReactElement
  scrollHeight: number
}

export default HeightAwareItem