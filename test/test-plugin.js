// import {readFile} from 'fs';
import test from 'ava';
import posthtml from 'posthtml';
import isPromise from 'is-promise';
import removeTags from '../src/index.js';

function processing(html, settings = {}, plugins = []) {
	return posthtml(plugins)
		.use(removeTags(settings))
		.process(html);
}

/* function read(pathFile) {
	return new Promise((resolve, reject) => {
		readFile(pathFile, 'utf8', (err, data) => {
			if (err) {
				reject(err);
			}
			return resolve(data);
		});
	});
} */

test('plugin must be function', t => {
	t.true(typeof removeTags === 'function');
});

test('should return reject', async t => {
	t.throws(removeTags()());
});

test('should return promise', t => {
	t.true(isPromise(processing('')));
});

test('should remove style tags', async t => {
	const fixture = '<html><style></style></html>';
	const expected = '<html></html>';
	t.deepEqual(expected, (await processing(fixture, {tags: 'style'})).html);
});
