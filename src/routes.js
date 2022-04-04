//import path from 'path';
import { Router } from 'express';
//import DirectoryUtils from './utils/DirectoryUtils';


// async function createRouter() {
//     const router = Router();

//     const routesDirectory = path.join(__dirname, '/routes');
//     const routes = await DirectoryUtils.getFilesInDirectory(routesDirectory, 'Route.js');

//     routes.forEach(route => {
//         router.use(route.name, route.router);
//     });

//     router.get('/', (req, res) => res.status(200).json({ message: 'Seja bem vindo!' }));

//     return router;
// }

//export default createRouter;

const router = Router();

router.get('/tickets', function(req,res){
    const tickets = [
        {
          "id": "12738972",
          "name": "Sergipe in Tech",
          "image_url": "https://diariodorio.com/wp-content/uploads/2021/02/web-summit.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Quisque sagittis purus sit amet volutpat consequat mauris. Dictumst vestibulum rhoncus est pellentesque. Odio facilisis mauris sit amet massa vitae. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Senectus et netus et malesuada fames ac turpis egestas maecenas. Facilisis magna etiam tempor orci eu. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Varius vel pharetra vel turpis. Sodales ut eu sem integer vitae justo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Non nisi est sit amet. Et netus et malesuada fames. Elementum facilisis leo vel fringilla est ullamcorper eget. Magna sit amet purus gravida quis blandit turpis cursus in. Nisl tincidunt eget nullam non nisi. Elit ullamcorper dignissim cras tincidunt lobortis. Enim nulla aliquet porttitor lacus luctus accumsan.",
          "location": "Aracaju, SE",
          "price": "35,00"
        },
        {
          "id": "12738973",
          "name": "Rock in Rio",
          "image_url": "https://rollingstone.uol.com.br/media/_versions/show_testament_rock_in_rio_2019_renan_olivetti_i_hate_flash_1_widelg.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Quisque sagittis purus sit amet volutpat consequat mauris. Dictumst vestibulum rhoncus est pellentesque. Odio facilisis mauris sit amet massa vitae. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Senectus et netus et malesuada fames ac turpis egestas maecenas. Facilisis magna etiam tempor orci eu. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Varius vel pharetra vel turpis. Sodales ut eu sem integer vitae justo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Non nisi est sit amet. Et netus et malesuada fames. Elementum facilisis leo vel fringilla est ullamcorper eget. Magna sit amet purus gravida quis blandit turpis cursus in. Nisl tincidunt eget nullam non nisi. Elit ullamcorper dignissim cras tincidunt lobortis. Enim nulla aliquet porttitor lacus luctus accumsan.",
          "location": "Rio de Janeiro, RJ",
          "price": "879,90"
        },
        {
          "id": "12738974",
          "name": "Lollapalozza",
          "image_url": "https://agitabrasilia.com/wp-content/uploads/2022/03/Programacao-Lollapalooza-2022-1_ccexpress-mJU3OR.png",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Quisque sagittis purus sit amet volutpat consequat mauris. Dictumst vestibulum rhoncus est pellentesque. Odio facilisis mauris sit amet massa vitae. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Senectus et netus et malesuada fames ac turpis egestas maecenas. Facilisis magna etiam tempor orci eu. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Varius vel pharetra vel turpis. Sodales ut eu sem integer vitae justo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Non nisi est sit amet. Et netus et malesuada fames. Elementum facilisis leo vel fringilla est ullamcorper eget. Magna sit amet purus gravida quis blandit turpis cursus in. Nisl tincidunt eget nullam non nisi. Elit ullamcorper dignissim cras tincidunt lobortis. Enim nulla aliquet porttitor lacus luctus accumsan.",
          "location": "SÃ£o Paulo, SP",
          "price": "997,80"
        },
        {
          "id": "12738975",
          "name": "Campus Party",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Arena_da_Campus_Party_Recife_2012_-_Pernambuco%2C_Brasil%283%29.jpg",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id interdum velit. Quisque sagittis purus sit amet volutpat consequat mauris. Dictumst vestibulum rhoncus est pellentesque. Odio facilisis mauris sit amet massa vitae. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Senectus et netus et malesuada fames ac turpis egestas maecenas. Facilisis magna etiam tempor orci eu. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Varius vel pharetra vel turpis. Sodales ut eu sem integer vitae justo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Non nisi est sit amet. Et netus et malesuada fames. Elementum facilisis leo vel fringilla est ullamcorper eget. Magna sit amet purus gravida quis blandit turpis cursus in. Nisl tincidunt eget nullam non nisi. Elit ullamcorper dignissim cras tincidunt lobortis. Enim nulla aliquet porttitor lacus luctus accumsan.",
          "location": "Recife, PE",
          "price": "79,99"
        }
      ]
    res.status(200).json(tickets);
});

export default router;