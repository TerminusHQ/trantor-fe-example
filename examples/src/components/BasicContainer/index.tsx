import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import { ItemContainer } from '@terminus/nusi-engine'

interface IProps {}

export default class extends ItemContainer<IProps>{
  render(){
    return (
      <div>Basic Container</div>
    )
  }
}
