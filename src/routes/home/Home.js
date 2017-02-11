/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab' + last);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Tabs onSelect={this.handleSelect}  selectedIndex={2}>
            <TabList>
              <Tab>Youth</Tab>
              <Tab>STEM</Tab>
              <Tab>Community</Tab>
              <Tab>FIRST</Tab>
              <Tab>News</Tab>
            </TabList>

            <TabPanel>
              <h1>Youth</h1>
            </TabPanel>
            <TabPanel>
              <h1>STEM</h1>
            </TabPanel>
            <TabPanel>
              <h1>Community</h1>
            </TabPanel>
            <TabPanel>
              <h1>FIRST</h1>
            </TabPanel>
            <TabPanel>
              <h1>React.js News</h1>
              <ul className={s.news}>
                {this.props.news.map((item, index) => (
                  <li key={index} className={s.newsItem}>
                    <a href={item.link} className={s.newsTitle}>{item.title}</a>
                    <span
                      className={s.newsDesc}
                      dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
                    />
                  </li>
                ))}
              </ul>
            </TabPanel>
          </Tabs>


        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
