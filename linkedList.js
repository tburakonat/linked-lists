import ListNode from './node';
class LinkedList {
	constructor(headNode) {
		this.HEAD = headNode;
		this.HEAD.nextNode = null;
	}

	append(value) {
		const newNode = new ListNode(value);

		let temp = this.HEAD;

		while (temp.nextNode != null) {
			temp = temp.nextNode;
		}

		temp.nextNode = newNode;
	}

	prepend(value) {
		const newNode = new ListNode(value);
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

	tail() {
		let temp = this.HEAD;

		while (temp.nextNode != null) {
			temp = temp.nextNode;
		}

		return temp;
	}

	at(index) {
		let temp = this.HEAD;
		let count = 0;

		while (temp.nextNode != null && count != index) {
			count++;
			temp = temp.nextNode;
		}

		return temp;
	}

	pop() {
		let temp = this.HEAD;

		while (temp.nextNode.nextNode != null) {
			temp = temp.nextNode;
		}

		temp.nextNode = null;
	}

	contains(value) {
		let temp = this.HEAD;

		while (temp != null && temp.value != value) {
			temp = temp.nextNode;
		}

		return temp === null ? false : true;
	}

	find(value) {
		let temp = this.HEAD;
		let index = 0;

		while (temp != null && temp.value != value) {
			temp = temp.nextNode;
			index++;
		}

		return temp === null ? null : index;
	}

	toString() {
		let temp = this.HEAD;
		let output = '';

		while (temp != null) {
			output = output + `( ${temp.value} ) -> `;
			temp = temp.nextNode;
		}

		output = output + '( null )';
		return output;
	}

	insertAt(value, index) {
		let temp = this.HEAD;
		let nextOfNewNode;
		let count = 1;
		let newNode = new ListNode(value);

		if (index == 0) {
			newNode.nextNode = temp;
			this.HEAD = newNode;
			return;
		}

		while (temp != null) {
			if (count == index) {
				nextOfNewNode = temp.nextNode;
				temp.nextNode = newNode;
				newNode.nextNode = nextOfNewNode;
				return;
			}

			count++;
			temp = temp.nextNode;
		}
	}

	removeAt(index) {
		if (index === 0) {
			const valueOfRemoved = this.HEAD.value;
			this.HEAD = this.HEAD.nextNode;
			return valueOfRemoved;
		}

		const nodeBeforeRemovedOne = this.at(index - 1);
		const valueOfRemoved = nodeBeforeRemovedOne.nextNode.value;
		nodeBeforeRemovedOne.nextNode = nodeBeforeRemovedOne.nextNode.nextNode;

		return valueOfRemoved;
	}
}
