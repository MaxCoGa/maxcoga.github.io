module.exports = {
	data: {
		layout: "base.njk",
		title: "test for ts",
	},
	render(data) {
		return `<h1>${data.title}</h1>`;
	},
};