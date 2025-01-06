/**
 * Represents a node in a linked list data structure
 * @template T The type of value stored in the node
 * @example
 * const node = new ListNode<string>('hello');
 * node.append('world');
 */
export class ListNode<T> {
  /**
   * The value stored in the current node
   * @type {T | null}
   */
  public value: T | null;

  /**
   * Reference to the next node in the linked list
   * @type {ListNode<T> | null}
   */
  public next: ListNode<T> | null;

  /**
   * Creates a new ListNode instance
   * @param {T} value - The value to store in the node
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  /**
   * Appends a new value to the end of the linked list
   * @param {T} value - The value to append
   * @returns {void}
   * @example
   * const node = new ListNode<number>(1);
   * node.append(2); // Creates a new node with value 2
   * console.log(node.next.value); // 2
   */
  public append(value: T): void {
    if (this.value === null) {
      this.value = value;
    } else if (this.next === null) {
      this.next = new ListNode(value);
    } else {
      this.next.append(value);
    }
  }

  /**
   * Clears the current node and all its references
   * @returns {void}
   * @example
   * const node = new ListNode<number>(1);
   * node.clear(); // Resets value to null and removes next reference
   * console.log(node.value); // null
   * console.log(node.next); // null
   */
  public clear(): void {
    this.value = null;
    this.next = null;
  }
}
