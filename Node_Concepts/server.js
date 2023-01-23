// const async = require('async');

function square(x) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Math.pow(x, 2));
		}, 2000);
	});
}

async function output(x) {
	const ans = square(x).then(console.log(ans))
}

output(10);

