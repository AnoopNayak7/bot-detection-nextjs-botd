export const BOTD_DEFAULT_URL = 'https://botd.fpapi.io'
export const BOTD_DEFAULT_PATH = '/api/v1/'
export const BOTD_RESULT_PATH = '/api/v1/results'
export const BOTD_EDGE_PATH = '/api/v1/edge'

// Proxy configuration for bot detection service
export const BOTD_PROXY_JS = 'https://cdn.jsdelivr.net/npm/@fpjs-incubator/botd-agent@0/dist/botd.min.js';
export const BOTD_PROXY_API = BOTD_DEFAULT_PATH;

// Constants for request handling
export const COOKIE_NAME = 'botd-request-id';
export const TIMEOUT = 1000;

// Status constants for result handling
export const STATUS = {
    PROCESSED: 'processed',
    ERROR: 'error',
}

// Header constants for request and result handling
export const REQUEST_ID_HEADER = 'botd-request-id'
export const ERROR_DESCRIPTION_HEADER = 'botd-error-description'
export const REQUEST_STATUS_HEADER = 'botd-request-status'

// Header constants for automation tool detection
export const AUTO_TOOL_STATUS_HEADER = 'botd-automation-tool-status'
export const AUTO_TOOL_PROB_HEADER = 'botd-automation-tool-prob'
export const AUTO_TOOL_TYPE_HEADER = 'botd-automation-tool-type'

// Header constants for search bot detection
export const SEARCH_BOT_STATUS_HEADER = 'botd-search-bot-status'
export const SEARCH_BOT_PROB_HEADER = 'botd-search-bot-prob'
export const SEARCH_BOT_TYPE_HEADER = 'botd-search-bot-type'

// Header constants for browser spoofing detection
export const BROWSER_SPOOFING_STATUS_HEADER = 'botd-browser-spoofing-status'
export const BROWSER_SPOOFING_PROB_HEADER = 'botd-browser-spoofing-prob'
export const BROWSER_SPOOFING_TYPE_HEADER = 'botd-browser-spoofing-type'

// Header constants for virtual machine detection
export const VM_STATUS_HEADER = 'botd-vm-status'
export const VM_PROB_HEADER = 'botd-vm-prob'
export const VM_TYPE_HEADER = 'botd-vm-type'

// Result headers for edge endpoint
export const EDGE_RESULT_HEADERS = [
    REQUEST_ID_HEADER,
    REQUEST_STATUS_HEADER,
    AUTO_TOOL_STATUS_HEADER,
    AUTO_TOOL_PROB_HEADER,
    AUTO_TOOL_TYPE_HEADER,
]

// Result headers for general result endpoint
export const RESULT_HEADERS = [
    REQUEST_ID_HEADER,
    REQUEST_STATUS_HEADER,
    AUTO_TOOL_STATUS_HEADER,
    AUTO_TOOL_PROB_HEADER,
    AUTO_TOOL_TYPE_HEADER,
    VM_STATUS_HEADER,
    VM_PROB_HEADER,
    VM_TYPE_HEADER,
    SEARCH_BOT_STATUS_HEADER,
    SEARCH_BOT_PROB_HEADER,
    SEARCH_BOT_TYPE_HEADER,
    BROWSER_SPOOFING_STATUS_HEADER,
    BROWSER_SPOOFING_PROB_HEADER,
    BROWSER_SPOOFING_TYPE_HEADER,
]