// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.watchFolders = [__dirname];

config.transformer = {
	...config.transformer,
	useTransformCache: false, // Ensures fresh transformation on changes
};

module.exports = config;
