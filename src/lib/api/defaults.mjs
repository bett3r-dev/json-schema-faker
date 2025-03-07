const defaults = {};

export default defaults;

defaults.defaultInvalidTypeProduct = undefined;
defaults.defaultRandExpMax = 10;

defaults.pruneProperties = [];
defaults.ignoreProperties = [];
defaults.ignoreMissingRefs = false;
defaults.failOnInvalidTypes = true;
defaults.failOnInvalidFormat = true;

defaults.alwaysFakeOptionals = false;
defaults.optionalsProbability = null;
defaults.fixedProbabilities = false;
defaults.useExamplesValue = false;
defaults.useDefaultValue = false;
defaults.requiredOnly = false;
defaults.omitNulls = false;

defaults.minItems = 0;
defaults.maxItems = null;
defaults.minLength = 0;
defaults.maxLength = null;

defaults.resolveJsonPath = false;
defaults.reuseProperties = false;
defaults.fillProperties = true;
defaults.sortProperties = null;
defaults.replaceEmptyByRandomValue = false;

defaults.random = Math.random;
defaults.minDateTime = -2524608000000;
defaults.maxDateTime = 1000;

defaults.renderTitle = true;
defaults.renderDescription = true;
defaults.renderComment = false;
