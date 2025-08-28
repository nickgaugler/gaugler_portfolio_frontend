// export default class APIService {
//     // Insert an article
//     static SendFormData(body) {
//         return fetch(`/api/form_submit`,
//             {
//                 'method': 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(body)
//             })
//             .then(response => {
//                 if (response.ok) {
//                     window.location.href = response.url;
//                 } else {
//                     console.log(response.json())
//                 }
//             })
//             .catch(error => console.log(error))
//     }

// }