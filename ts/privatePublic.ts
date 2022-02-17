
const names: Array<string> = ["msx", "menu"];

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("this is done");
	}, 2000);
})

function merge<T extends object, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "gautam" }, 30);
console.log(mergedObj.name);

interface Lengthy {
	length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
	let description = "got no value";
	if (element.length > 0) {
		description = "greater than zero";
	}
	return [element, description]
}

let z = "a";

function extractAndConvert<T, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

class Storage<T> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item)
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems(): T[] {
		return this.data;
	}
}

const textStorage = new Storage<string>();
textStorage.addItem("fsfds");

interface CourseGoal {
	title: string;
	descriotion: string;
	completeUntil: Date
}

function courseCopletion(): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = "learn typescript"

	return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> = ["mad", "man"];



export default names;