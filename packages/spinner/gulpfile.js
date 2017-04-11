"use strict";

/**
 * There is a full range of gulp tasks defined in the above archetype
 * but below is a concise list of most often used gulp tasks at the
 * component level
 *
 * Full list of gulp tasks:
 * https://github.com/electrode-io/electrode-archetype-react-component/blob/master/archetype-gulpfile.js#L38-L134
 *
 */

const tasks = {
  "prepublish": ["npm:prepublish"]
};

require("electrode-archetype-react-component")(tasks);
