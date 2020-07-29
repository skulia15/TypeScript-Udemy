interface Reportable {
	// name: string;
	// year: Date;
	// broken: boolean;
	summary(): string;
}

const oldCivic /*: Vehicle */ = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	}
};

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has: ${this.sugar} grams of sugar`;
	}
};

const printSummary = (item: Reportable): void => {
	// console.log(`Name: ${vehicle.name}`);
	// console.log(`Year: ${vehicle.year}`);
	// console.log(`Broken? ${vehicle.broken}`);
	console.log(`Summary? ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(drink);
