// Support Metro Bundler env variable: https://github.com/codesandbox/codesandbox-client/pull/1807#issuecomment-486441740
global.__DEV__ = global.__DEV__ || process.env.NODE_ENV !== "production";
