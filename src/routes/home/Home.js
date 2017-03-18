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
import TabPanelContent from '../../components/TabPanelContent'
import TabContent from '../src/SwipeableTabContent';
import ScrollableInkTabBar from '../src/ScrollableInkTabBar';
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

  onChange(activeKey) {
    console.log(`onChange tab: ${key}`);
    this.setState({
      activeKey,
    });
  }


  onTabClick(key) {
    console.log(`onTabClick ${key}`);
    if (key === this.state.activeKey) {
      this.setState({
        activeKey: '',
      });
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Tabs
            renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick}/>}
            renderTabContent={() => <TabContent animatedWithMargin />}
            activeKey={this.state.activeKey}
            onChange={this.onChange}
          >
            <TabPane tab="STEM" key="1">
              <TabPanelContent id="STEM"/>
            </TabPane>
            <TabPane tab="Youth" key="2">
              <TabPanelContent id="Youth"/>
            </TabPane>
            <TabPane tab="Community" key="3">
              <TabPanelContent id="Community"/>
            </TabPane>
            <TabPane tab="News" key="4">
              <TabPanelContent id="News"/>
            </TabPane>
            <TabPane tab="Programs" key="5" disabled>
              <TabPanelContent id="Programs"/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export
default
Home;
