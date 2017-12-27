export class App {
	loading: boolean = false;
	isFileSaverSupported: boolean;

	constructor() {
		try {
			this.isFileSaverSupported = !!new Blob;
		} catch (e) {}
	}

}
