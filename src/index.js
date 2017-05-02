export default options => tree => new Promise((resolve, reject) => {
	if (!Array.isArray(tree)) {
		reject(new Error(`tree is not Array`));
	}

	if (tree.length === 0) {
		resolve(tree);
	}

	resolve(tree.match(options.tags.map(tag => ({tag: tag})), node => {
		node.tag = false;
		node.content = [];
		return node;
	}));
});
