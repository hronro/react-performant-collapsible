import * as React from 'react'
import type { ReactNode, CSSProperties } from 'react'
import { Component } from 'react'

const styleSheet = (function createCollapsibleStyleSheet () {
  const styleElement = document.createElement('style')
  document.head.appendChild(styleElement)

  if (styleElement.sheet) {
    return styleElement.sheet
  }

  // this weirdness brought to you by firefox
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === styleElement) {
      return document.styleSheets[i]
    }
  }
})()!

styleSheet.insertRule('.react-performant-collapsible-container{position:relative;content-visibility:auto;overflow:hidden;}')
styleSheet.insertRule('.react-performant-collapsible-container-collapsed{height: 0;}')
styleSheet.insertRule('.react-performant-collapsible-mask{background-color:#fff;position:absolute;left:0;top:0;width:100%;height:100%;transform-origin:bottom;transition:transform 600ms;overflow:hidden;}')
styleSheet.insertRule('.react-performant-collapsible-mask-expand{transform:scaleY(0);}')

function genContainerClassName(collapsible: boolean, propClassName?: string) {
  return `react-performant-collapsible-container${collapsible ? ' react-performant-collapsible-container-collapsed' : ''}${propClassName != null ? ` ${propClassName}` : ''}`
}

export interface ICollapsibleProps {
  className?: string
  style?: CSSProperties
  maskColor?: string
  animationDuration?: string
  animationTimingFunction?: string
  collapsible: boolean
  children: ReactNode
}

interface ICollapsibleState {
  containerClassName: string
}

export class Collapsible extends Component<ICollapsibleProps, ICollapsibleState> {
  public state: ICollapsibleState

  constructor(props: ICollapsibleProps) {
    super(props)

    this.state = {
      containerClassName: genContainerClassName(props.collapsible, props.className),
    }
  }

  private handleAnimationFinish = () => {
    if (this.props.collapsible) {
      this.setState({
        containerClassName: genContainerClassName(true, this.props.className),
      })
    }
  }

  public componentDidUpdate(prevProps: ICollapsibleProps) {
    if (prevProps.collapsible && !this.props.collapsible) {
      this.setState({
        containerClassName: genContainerClassName(false, this.props.className),
      })
    }
  }

  public render () {
    return (
      <div className={this.state.containerClassName}>
        { this.props.children }
        <div
          className={`react-performant-collapsible-mask${this.props.collapsible ? '' : ' react-performant-collapsible-mask-expand'}`}
          style={{
            backgroundColor: this.props.maskColor,
            transitionDuration: this.props.animationDuration,
            transitionTimingFunction: this.props.animationTimingFunction,
          }}
          onTransitionEnd={this.handleAnimationFinish}
        />
      </div>
    )
  }
}
