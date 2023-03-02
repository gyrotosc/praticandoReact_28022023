import "./styles.css";

import Header from "./components/Header";

import Section from "./components/Section";

import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    urlImage: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },

  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    urlImage: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem Valorant"
  },

  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    urlImage: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Minecraft"
  },

  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    urlImage:
      'https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg" alt="Imagem do jogo TFT',
    alt: "Jogo que não sei o nome"
  }
];
const channelsListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    urlImage:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    urlImage:
      "https://yt3.googleusercontent.com/ytc/AL5GRJUVF9cJ9B8RcU0tiZa_gxEWojV4PkQZ6RRMHJa0Hg=s176-c-k-c0x00ffffff-no-rj",
    alt: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/cellbit",
    urlImage:
      "https://yt3.googleusercontent.com/ytc/AL5GRJV_4dNwmM3uGW6QIvDvCa6zolDbn7Byym5Zq9EqaA=s176-c-k-c0x00ffffff-no-rj",
    alt: "Imagemd de Cellbit"
  }
];
const socialListData = [
  {
    url: "https://www.instagram.com/",
    urlImage: "./assets/instagram.svg",
    alt: "Instagram"
  },
  {
    url: "https://twitter.com/login?lang=pt",
    urlImage: "./assets/twitter.svg",
    alt: "Twitter"
  },
  {
    url: "https://www.twitch.tv/",
    urlImage: "./assets/twitch.svg",
    alt: "Twitch"
  },
  {
    url: "https://www.youtube.com/",
    urlImage: "./assets/youtube.svg",
    alt: "Youtube"
  }
];

export default function App() {
  return (
    <div className="App">
      {/* Incluir header aqui */}
      <Header />
      {/* Incluir main aqui */}
      <main>
        {/* Incluir sections aqui */}
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                urlImage={item.urlImage}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Meus Streamers"
          subtitle="Lista de canais que eu curto"
          className="channel-list"
        >
          {channelsListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                urlImage={item.urlImage}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Essas são minhas redes sociais"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                urlImage={item.urlImage}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
