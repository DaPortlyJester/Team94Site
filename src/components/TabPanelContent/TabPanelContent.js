/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';

class TabPanelContent extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
  };

  constructor(props) {
    super(props);
    console.log(this.props.id, 'constructor');
  }

  componentWillReceiveProps() {
    console.log(this.props.id, 'componentWillReceiveProps');
  }

  render() {
    const count = [1, 1, 1, 1];// new Array(4) skip forEach ....
    const els = count.map((c, i) => {
      return <p key={i}>{this.props.id}</p>;
    });
    return <div>{els}</div>;
  }

}

export default TabPanelContent;
