import { Node } from './node';


// TODO update this realization to normal in future
export class List {
    private root: Node;

    constructor() {
        this.root = null;
    }

    insertAfter(node: Node, afterNode: Node): void {
        node.next = afterNode.next;
        afterNode.next = node;
    }

    append(node: Node): void {
        let currNode = this.root;

        if (!this.root) {
            this.root = node;
            this.root.next = null;
            return;
        }

        while (currNode.next) {
            currNode = currNode.next;
        }
        node.next = null;
        currNode.next = node;
    }

    remove(node: Node): void {
        let currNode = this.root;
        let prev;

        if (currNode === node) {
            this.root = currNode.next;
            currNode = null;
            return;
        }
        prev = currNode;
        currNode = currNode.next;

        while (currNode) {
            if (currNode === node) {
                prev.next = currNode.next;
                currNode = null;
                return;
            }
            prev = currNode;
            currNode = currNode.next;
        }
    }
}
