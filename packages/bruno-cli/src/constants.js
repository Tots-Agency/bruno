const { version } = require('../package.json');

const CLI_EPILOGUE = `Documentation: https://docs.usebruno.com (v${version})`;
const CLI_VERSION = version;
const SCENARIOS_HANDLER_FILENAME = 'Scenarios Handler';
const RUN_ALL_SCENARIOS = 'RUN_ALL_SCENARIOS';

module.exports = {
  CLI_EPILOGUE,
  CLI_VERSION,
  SCENARIOS_HANDLER_FILENAME,
  RUN_ALL_SCENARIOS
};
