import EventListener from './event-listener'
const global = global || {};
global.event = EventListener({});
export default global;