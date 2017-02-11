/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Routes are evaluated in order
  children: [
    require('./home').default,
    require('./team').default,
    require('./about').default,
    require('./events').default,
    require('./programs').default,
    require('./login').default,
    require('./register').default,
    require('./privacy').default,
    require('./admin').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();
    const defaultTitle = 'A Page ...';
    const defaultDesc = 'Some descriptive words ...';

    // Provide default values for title, description etc.
    route.title = `${route.title || 'A Page'}`;
    route.description = route.description || '';

    return route;
  },

};
