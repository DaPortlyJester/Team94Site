/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'rc-tabs/assets/index.css';
import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import Tabs, {TabPane} from 'rc-tabs';
import TabContent from '../src/SwipeableTabContent';
import ScrollableInkTabBar from '../src/ScrollableInkTabBar';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1",
      key: "1"
    }
  }

  onChange(key) {
    console.log('Selected tab: ' + index + ', Last tab' + last);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Tabs
          >

          </Tabs>


        </div>
      </div>
    );
  }
}

export default Home;
