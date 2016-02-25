import faker from 'faker';

const generateArticles = () => {
	let articles = [];

	for (let i = 0; i < 20; ++i) {
		const title = faker.lorem.sentence();

		articles.push({
			id: i + 1,
			title: title,
			body: faker.lorem.paragraphs(),
			tags: title.replace('.', '').split(' ')
		});
	}

	return articles;
};

export default () => {
	return {
		articles: generateArticles()
	};
};