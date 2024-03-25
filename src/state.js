import { reactive } from 'vue';
import axios from 'axios;'

export const state = reactive({
	message: 'This is a test',

	products: [],
	base_products_api_url: 'http://localhost:3000/products',


	axios.get('')
		.then(response => {
			console.log(response);
		})

})