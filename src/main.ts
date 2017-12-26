import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
	aurelia.use
		.standardConfiguration()
		.feature('resources');

	aurelia.use.plugin("aurelia-files");
	aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());

	if (environment.debug) {
		aurelia.use.developmentLogging();
	}

	if (environment.testing) {
		aurelia.use.plugin('aurelia-testing');
	}

	aurelia.start().then(() => aurelia.setRoot());
}
