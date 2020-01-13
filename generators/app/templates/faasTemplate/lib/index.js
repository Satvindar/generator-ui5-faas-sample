'use strict';

/**
 * @param {FaasEvent} event
 * @param {FaasContext} context
 * @return {Promise|*}
 */

module.exports = {
    handler: function (event, context) {
        return "Hello World";
    }
};
