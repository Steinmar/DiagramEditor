import { Node } from './node';

export class List {
    private root: Node;

    constructor(public id: string, public data: any) {
        this.root = new Node(data);
        this.root = null;
    }

    insertAfter(afterNode: Node, data: any) {
        const newNode = new Node(data);

        newNode.next = afterNode.next;
        afterNode.next = newNode;
    }

    push(data: any) {
        const newNode = new Node(data);
        
        newNode.next = null;
        this.root = this.root.next;
        this.root.next = newNode;
    }

    append(data: any) {
        let currNode = this.root;
        const newNode = new Node(data);

        while (currNode.next) {
            currNode = currNode.next;
        }
        newNode.next = null;
        currNode.next = newNode;
    }

    removeNode(node: Node): void {
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
