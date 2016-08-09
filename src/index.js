const remove = (tree, {tags}) => tree.match({tag: tags}, node => Object.assign(node, {tag: false, content: []}));

function removeTags(tree, options) {
	return Promise.resolve(tree)
		.then(tree => remove(tree, options))
		.then(tree => tree);
}

export default (options = {}) => {
	return tree => new Promise((resolve, reject) => {
		if (!Array.isArray(tree)) {
			reject(new Error(`tree is not Array`));
		}

		if (tree.length === 0) {
			resolve(tree);
		}

		resolve(removeTags(tree, Object.assign({}, options)));
	});
};
