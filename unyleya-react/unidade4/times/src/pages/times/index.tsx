import { useEffect, useState } from "react";
import Header from "../../components/header";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface DataTimes {
  image: string;
  name: string;
  _id: string;
}

const listaTimes = [
  {
    name: "Benfica",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F1004%2F923%2Fpng-transparent-benfica-hd-logo-thumbnail.png&f=1&nofb=1&ipt=3363201c1d672ec86d9a0d5a7198e3d55949b0bc3ca843db6464b5d7b6b5e496",
    _id: "8f3d9b4c",
  },
  {
    name: "Porto",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F030%2F738%2F751%2Flarge_2x%2Ffc-porto-club-logo-symbol-portugal-league-football-abstract-design-illustration-free-vector.jpg&f=1&nofb=1&ipt=b868604eee5866c00792aa9c4c95326df6fce6caefebfde819927e8cc03db6cd",
    _id: "a5b2c7e1",
  },
  {
    name: "Sporting",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F030%2F738%2F410%2Foriginal%2Fsporting-cp-club-logo-symbol-portugal-league-football-abstract-design-illustration-with-black-background-free-vector.jpg&f=1&nofb=1&ipt=a44143657e88b37671689594bf287cd28d80ce4e7132b8c0d47211f715108d2e",
    _id: "d1e4f9b8",
  },
  {
    name: "Braga",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F32%2Fb1%2Fdc%2F32b1dcb0c4364da4bdf0f29539d7b9ad.png&f=1&nofb=1&ipt=8d4602caceb407d1049928bc632bed5cababa4af7c9991c194dfbb656d1e117f",
    _id: "f9e2d1c8",
  },
  {
    name: "Boavista",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9c%2F67%2F6a%2F9c676a6ffc6a6fe114bdd250e4fb68a3.png&f=1&nofb=1&ipt=9a087855e70f77f95649dc523a11841efdb546011b0a0d6d72585531f676e18d",
    _id: "3c7e9a5d",
  },
  {
    name: "Vitória de Guimarães",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F11%2F7e%2F8b%2F117e8be1680f13cf12fc81ad21c1b135.jpg&f=1&nofb=1&ipt=195e74bdcdeb689682ad5c19481b38ac219c2624f0971521ab0702a14a89f40e",
    _id: "7b5d1a9e",
  },
    {
    name: "Belenenses",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F28%2F03%2Ffc%2F2803fc7d7970dbb474ee13160acae1f3.jpg&f=1&nofb=1&ipt=8bbb938121cc1e520ddab0f3fccedd9413960c8be698f1ba442596eb44ffa89a",
    _id: "2a1d9c8b",
  },
  {
    name: "Académica",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6a%2F51%2Fde%2F6a51de5699e5f9d0fcdf591f3407b88a.png&f=1&nofb=1&ipt=06548b347de1b2148159f08def07ad52a220ad5885fe785229abf8f535985d91",
    _id: "4e5f6a7b",
  },
  {
    name: "Marítimo",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2Ffb%2Fe2%2Feafbe2a4f37dfc82fd9ea37908a69d1c.png&f=1&nofb=1&ipt=ee7586a826b3d0148a12c6cf76dcbe761eb0d0bc29ffd971b773db41308051d4",
    _id: "9d8c7b6a",
  },
  {
    name: "Rio Ave",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Frio-ave-fc-logo-png-transparent.png&f=1&nofb=1&ipt=bc73bbe3ead860fe3ec98a000d1fd978afc495dcbdfeaebc4c9627098926ab41",
    _id: "1b2c3d4e",
  },
]

const Times = () => {
  const navigate = useNavigate();
  const {token} = useAuth();

  const [times, setTimes] = useState<DataTimes[]>([]);

  const getTimes = async () => {
    try {
      const response = await api.get<DataTimes[]>("teams",
        {
          headers: {
            "Authorization": token,
          },
        }
      );
      setTimes(response.data);
      console.log(times);
    } catch (error) {
      if (token) {
        alert("Houve um erro ao buscar os times " + error);
      }
    }
  }

  useEffect(() => {
    getTimes();
  }, []);

  useEffect(() => {
    if(!token) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <h1>Hello World - Pagina times</h1>
      <div className="container-times">
        {
          listaTimes.map((time) =>
          <div key={time._id}>
            <p>{time.name}</p>
            <img src={time.image} alt={`Imagem do brasão do ${time.name}`} />
          </div>
          )
        }
      </div>
    </div>
  );
};

export default Times;