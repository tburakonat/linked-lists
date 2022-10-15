import Node from './node';
class LinkedList {
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
}

const person1 = new Node('Burak');

const list = new LinkedList(person1);

list.append('Berre');

list.prepend('Selim');

console.log(list);

console.log('List size: ', list.size());

console.log('List head: ', list.head());

console.log('List tail: ', list.tail());

console.log('Node at list index 0: ', list.at(0));

list.pop();

console.log(list);

console.log(list.contains('Burak'));

console.log(list.find('Burak'));

console.log(list.toString());
