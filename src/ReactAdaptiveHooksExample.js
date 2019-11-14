// Apologies for not using JSX, or modules, but I don't have time for babel

const React = require('react');
const { useNetworkStatus } = require('./react-adaptive-hooks-network');

exports.ReactAdaptiveHooksExample = function ReactAdaptiveHooksExample(_) {
  const { effectiveConnectionType } = useNetworkStatus();
  return React.createElement("p", {className: effectiveConnectionType || "unsupported"}, `Your Network Status Is ${effectiveConnectionType}`);
}
