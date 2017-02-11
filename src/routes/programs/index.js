/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Programs from './Programs';

const title = 'Programs';

export default {

  path: '/programs',

  action() {
    return {
      title,
      component: <Layout><Programs title={title} /></Layout>,
    };
  },

};
