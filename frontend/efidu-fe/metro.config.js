// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.watchFolders = [__dirname];

config.transformer = {
	...config.transformer,
	useTransformCache: false, // Ensures fresh transformation on changes
};

module.exports = withNativeWind(config, { input: './global.css' });
