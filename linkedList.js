import Node from './node';
export default class LinkedList {
	constructor(headNode) {
		this.HEAD = headNode;
		this.HEAD.nextNode = null;
	}

	append(value) {
		const newNode = new Node(value);

		let temp = this.HEAD;

		while (temp.nextNode != null) {
			temp = temp.nextNode;
		}

		temp.nextNode = newNode;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.nextNode = this.HEAD;
		this.HEAD = newNode;
	}

	size() {
		let count = 0;
		let temp = this.HEAD;

		while (temp != null) {
			temp = temp.nextNode;
			count++;
		}

		return count;
	}

	head() {
		return this.HEAD;
	}
}
