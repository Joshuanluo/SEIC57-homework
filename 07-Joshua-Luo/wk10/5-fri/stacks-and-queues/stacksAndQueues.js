// STACK IMPLEMENTATION
class Stack {
	constructor() {
		this.items = [];
	}
	push(item) {
		this.items.push(item);
	}
	pop() {
		return this.items.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length === 0;
	}
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input) {
	let characters = input.split("");
	const sta = new Stack();
	for (let i = 0; i < characters.length; i++) {
		if (
			characters[i] === "(" ||
			characters[i] === "[" ||
			characters[i] === "{"
		) {
			sta.push(characters[i]);
		} else if (
			characters[i] === ")" ||
			characters[i] === "]" ||
			characters[i] === "}"
		) {
			check = sta.pop();
			switch (characters[i]) {
				case ")":
					if (check !== "(") return false;
					break;
				case "]":
					if (check !== "[") return false;
					break;
				case "}":
					if (check !== "{") return false;
					break;
			}
		}
	}
	return sta.isEmpty();
}
console.log(
	bracketMatching("his f(unct[ion {(wi)ll take in a s}ring as] in)put")
);
console.log(
	bracketMatching("This priorit{y queue( is }implemen)ted as a Linked List")
);
console.log(
	bracketMatching("This prio(rit{y queue( i)s }implemented as a Linked List")
);
class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.next = null;
	}
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue {
	constructor() {
		this.head = null;
	}
	enqueue(data, priority) {
		// Insert the new data into the proper place in the queue
		// the lowest priority number should be the head node
		// the priorities should remain in order
		// if two nodes have the same priority, put the new one first
	}
	peek() {
		// return the highest priority node in the queue
	}
	dequeue() {
		// remove and return the highest priority node in the queue
	}
}

module.exports = {
	bracketMatching,
	priorityQueue,
};
