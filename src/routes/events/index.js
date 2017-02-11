/**
 * Created by derelle.redmond on 2/4/17.
 */
import React from 'react';
import Layout from '../../components/Layout';
import Events from './Events';


const title = 'Events';

export default {

  path: '/events',

  async action() {
    return {
      title,
      component: <Layout><Events title={title}/></Layout>,
    };
  },

};
