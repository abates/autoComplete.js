/**
 * Document lookup function
 *
 * @param {Object} config - autoComplete configurations
 * 
 */
export default (config) => {
    if (typeof config.selector === "string")
        return document;
    return config.selector().getRootNode();
};