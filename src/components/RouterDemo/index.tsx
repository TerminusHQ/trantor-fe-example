import React from 'react'
import { VueInReact } from 'vuera'
import MyVueComponent from './RouterDemo.vue'
// 容器类型
import { ItemContainer } from '@terminus/nusi-engine'

export default class extends ItemContainer {
  render() {
  	// vuera 
    const Component = VueInReact(MyVueComponent)
    return (    
		    // 将ListContainer 的属性透传到 vue 组件中
        <Component message='Hello from Vue!' ctx={this.props}/>
    )
  }
}