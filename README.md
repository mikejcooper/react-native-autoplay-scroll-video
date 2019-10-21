# react-native-autoplay-scroll-video

<!-- <p>
<img src="https://travis-ci.org/APSL/react-native-autoplay-scroll-video.svg?branch=master" />
<img src="https://img.shields.io/npm/dm/react-native-autoplay-scroll-video.svg" />
<img src="https://img.shields.io/npm/dt/react-native-autoplay-scroll-video.svg" />
</p> -->

A SectionList component that identifies which item is in centre of the screen.

<p align="center">
<img src="https://i.imgflip.com/36ezfp.gif" alt="Scroll demo" width="400">
</p>


## Installation

Installation can be done through `npm` or `yarn`:

```shell
npm i react-native-autoplay-scroll-video --save
```

```shell
yarn add react-native-autoplay-scroll-video
```

## Example

Working Implementation as seen in GIF above - https://github.com/mikejcooper/React-Native-Autoplay-Infinity-Scroll

## Usage

We extend the SectionList component adding two new props: the

- focusWindow = The number of items above and below the centre that will be triggered in the callback.
- renderItemWithInfo = Replaces normal 'renderItem' function. Introduces two booleans, itemInFocus & itemInFocusWindow. 


```js
import SectionListInFocus from '@reactly/react-native-autoplay-scroll-video'
```

```jsx
<SectionListInFocus
    focusWindow={2}
    renderItemWithInfo={(item: VideoData, itemInFocus: boolean, itemInFocusWindow: boolean) => {
      return (
        <YourListItem
          playContent={itemInFocus}
          loadContent={itemInFocusWindow}
        />
      )
    }}
    {...YourSectionListProps}
/>
```


## API

### Props

All the `SectionList` props will be passed.

| **Prop**                    | **Type**                         | **Description**                                                                                |
| --------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `renderItemWithInfo`        | `Function`                       | New renderItem function                                                           |
| `focusWindow`               | `number`                         | Items above and below the centre that will receive itemInFocusWindow as true.                                    |

## License

MIT.

## Author

Mike Cooper
