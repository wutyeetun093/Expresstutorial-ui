import api from "axios-flow";
import { API_URL } from "../../variables/constants";
import { GET_FASHIONS, CREATE_FASHION } from "./FashionActionTypes";

const URL = `${API_URL}/api/fashions`;

export const getFashions = queries => dispatch => {
  api(dispatch)
    .url(URL)
    .action(GET_FASHIONS)
    .params(queries)
    .get();
};

// export const getBusinessTags = (businessId, queries) => dispatch => {
//   api(dispatch)
//     .url(`${API_URL}/api/businesses/${businessId}/tags`)
//     .action(GET_BUSINESS_TAGS)
//     .params(queries)
//     .get();
// };

export const createFashion = (data, onSuccess) => dispatch => {
  api(dispatch)
    .url(URL)
    .action(CREATE_FASHION)
    .onSuccess(onSuccess)
    .data(data)
    .post();
};

// export const updateTag = (tagId, data, onSuccess) => dispatch => {
//   api(dispatch)
//     .url(`${URL}/${tagId}`)
//     .action(UPDATE_TAG)
//     .onSuccess(onSuccess)
//     .data(data)
//     .update();
// };
