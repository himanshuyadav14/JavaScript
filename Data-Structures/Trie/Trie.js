class TrieNode {
    constructor() {
        this.children = new Map();  // To store child nodes
        this.isEndOfWord = false;   // To mark the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Root node for the Trie
    }

    // Inserts a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    // Searches for a word in the Trie, returns true if the word exists
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }

    // Checks if there is any word that starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return true;
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple"));  // true
console.log(trie.search("app"));    // true
console.log(trie.search("apples")); // false

console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // false
