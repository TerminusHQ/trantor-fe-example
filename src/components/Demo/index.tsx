import React from 'react'
import { VueInReact } from 'vuera'
import MyVueComponent from './Demo.vue'
// 容器类型
import { ListContainer } from '@terminus/nusi-engine'

export default class extends ListContainer {
  render() {
  	// vuera 
    const Component = VueInReact(MyVueComponent)
    return (    
		    // 将ListContainer 的属性透传到 vue 组件中
        <Component message='Hello from Vue!' ctx={this.props}/>
    )
  }
}