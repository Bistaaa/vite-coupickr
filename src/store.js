import { VueElement, reactive } from "vue"

export const store = reactive({
    apiURL: 'http://localhost:8000/api/v1',
    imageURL: 'http://localhost:8000/storage/images/',
    categoriesList: [],
});