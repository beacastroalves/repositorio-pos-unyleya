import type { AuthResponse } from '../models/auth.model';
import type { ProductOverviewResponse, ProductResponse } from '../models/product.model';
import type { TimeResponse } from '../models/time.model';

export class Mock {
  static postAuthSuccess(): AuthResponse {
    const date = new Date();
    date.setMinutes(date.getMinutes() + (60 * 24));
    return {
      name: 'Jane Doe',
      email: 'teste@teste.com',
      token: `${date.getTime()}`
    };
  }

  static getTeams(): TimeResponse[] {
    return [
      {
        name: 'Benfica',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodetimes.com%2Ftimes%2Fbenfica%2Flogo-benfica.png&f=1&nofb=1&ipt=a267ed2222ac12700a6a4845940f300313d26b50ac90cc2c657e78a95ba3be1e',
        _id: '8f3d9b4c',
      },
      {
        name: 'Porto',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodetimes.com%2Ftimes%2Fporto%2Flogo-porto-4096.png&f=1&nofb=1&ipt=8f6b6c5e7574c69a0c35f2727683e6194003f9345cd79a7afaeeb1f2b0001107',
        _id: 'a5b2c7e1',
      },
      {
        name: 'Sporting',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-scp.azureedge.net%2Flojaverdeonline%2Fassets%2Fimages%2Flogo_verde_opac.png&f=1&nofb=1&ipt=58315224b7d95c379439bc393e8bf1584205020fd5427fac85cafc4b159437ab',
        _id: 'd1e4f9b8',
      },
      {
        name: 'Braga',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.espncdn.com%2Fi%2Fteamlogos%2Fsoccer%2F500%2F2994.png&f=1&nofb=1&ipt=5f17ec96a38b3b2a8f6fd0314778b2f95342c023ed7035248ba50894e4a6161d',
        _id: 'f9e2d1c8',
      },
      {
        name: 'Boavista',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9c%2F67%2F6a%2F9c676a6ffc6a6fe114bdd250e4fb68a3.png&f=1&nofb=1&ipt=9a087855e70f77f95649dc523a11841efdb546011b0a0d6d72585531f676e18d',
        _id: '3c7e9a5d',
      },
      {
        name: 'Vitória de Guimarães',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fvitoria-logo-png-transparent.png&f=1&nofb=1&ipt=16f755369f94cd22e0283e8e55229ba76f25b94978c1be190a648242c2c76be3',
        _id: '7b5d1a9e',
      },
        {
        name: 'Belenenses',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F85%2F05%2Fe5%2F8505e50331dca0d32e88f70d75643c6b.png&f=1&nofb=1&ipt=695cb185e7af1071d69ef4d1d126dd8b6f8ca16d0c5a8110f3d9d524b7769694',
        _id: '2a1d9c8b',
      },
      {
        name: 'Académica',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6a%2F51%2Fde%2F6a51de5699e5f9d0fcdf591f3407b88a.png&f=1&nofb=1&ipt=06548b347de1b2148159f08def07ad52a220ad5885fe785229abf8f535985d91',
        _id: '4e5f6a7b',
      },
      {
        name: 'Marítimo',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2Ffb%2Fe2%2Feafbe2a4f37dfc82fd9ea37908a69d1c.png&f=1&nofb=1&ipt=ee7586a826b3d0148a12c6cf76dcbe761eb0d0bc29ffd971b773db41308051d4',
        _id: '9d8c7b6a',
      },
      {
        name: 'Rio Ave',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Frio-ave-fc-logo-png-transparent.png&f=1&nofb=1&ipt=bc73bbe3ead860fe3ec98a000d1fd978afc495dcbdfeaebc4c9627098926ab41',
        _id: '1b2c3d4e',
      },
    ];
  }

  static getProducts(): ProductResponse[] {
    return [
      {
        name: 'Produto 01',
        description: 'Exemplo de Benfica descrição produto 01',
        price: 99,
        urlImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F887%2F575%2Foriginal%2Fplain-white-t-shirt-mockup-template-with-view-front-back-edited-ai-generated-illustration-with-transparent-background-thumbnail-free-png.png&f=1&nofb=1&ipt=304505364519b50e05a420ebbfff5aa6236023926b57206b6639521182da31b9',
        _id: '5644621sad946',
      },
      {
        name: 'Produto 02',
        description: 'Exemplo de Benfica descrição produto 02',
        price: 59,
        urlImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F041%2F640%2F963%2Foriginal%2Fai-generated-white-cap-mockup-on-transparent-background-image-png.png&f=1&nofb=1&ipt=4976310547e6954f55da1a95eee5454dd0b6125e42f3e7788d748bfb875f428f',
        _id: 'dad64dsa89d78e',
      }
    ]
  }

  static getProduct(): ProductOverviewResponse {
    return {
      name: 'Produto 01',
      description: 'Exemplo de Benfica descrição produto 01',
      price: 99,
      urlImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F887%2F575%2Foriginal%2Fplain-white-t-shirt-mockup-template-with-view-front-back-edited-ai-generated-illustration-with-transparent-background-thumbnail-free-png.png&f=1&nofb=1&ipt=304505364519b50e05a420ebbfff5aa6236023926b57206b6639521182da31b9',
      _id: '5644621sad946',
      categoryId: 'brand-01',
      available: true
    };
  };
};