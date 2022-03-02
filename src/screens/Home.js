import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import CustomFlatlist from '../components/CustomFlatlist';
import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';

const agents = [
  {
    id: 1,
    name: 'Brimstone',
    country: 'Estados Unidos',
    biography:
      'Vindo diretamente dos EUA, o arsenal orbital de Brimstone garante que o esquadrão dele esteja sempre em vantagem. Sua capacidade de oferecer utilidade com precisão a distância faz dele um comandante inigualável na linha de frente.',
    basicAbilities: ['Incendiário', 'Fumaça Celeste'],
    signatureAbility: 'Sinalizador Estimulante',
    ultimateAbility: 'Ataque Orbital',
    aliases: ['Brim'],
    race: 'Humano',
    role: 'Controlador',
    codename: 'Sarge',
    gunSkin: 'Peacekeeper Sheriff',
    icon: require('../assets/images/agentsIcons/Brimstone.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Brimstone.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Brimstone2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Brimstone.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Brimstone2.jpg'),
  },
  {
    id: 2,
    name: 'Viper',
    country: 'Estados Unidos',
    biography:
      'Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.',
    basicAbilities: ['Veneno de Cobra', 'Nuvem Venenosa'],
    signatureAbility: 'Cortina Tóxica',
    ultimateAbility: 'Poço Peçonhento',
    aliases: ['Sabine'],
    race: 'Humano',
    role: 'Controlador',
    codename: 'Pandemic',
    gunSkin: 'Snakebite Shorty',
    icon: require('../assets/images/agentsIcons/Viper.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Viper.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Viper2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Viper.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Viper2.jpg'),
  },
  {
    id: 3,
    name: 'Omen',
    country: 'Desconhecido',
    biography:
      'Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.',
    basicAbilities: ['Passos Tenebrosos', 'Paranoia'],
    signatureAbility: 'Manto Sombrio',
    ultimateAbility: 'Salto das Sombras',
    aliases: ['Ja-'],
    race: 'Radiante',
    role: 'Controlador',
    codename: 'Wraith',
    gunSkin: 'Soul Silencer Ghost',
    icon: require('../assets/images/agentsIcons/Omen.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Omen.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Omen2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Omen.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Omen2.jpg'),
  },
  {
    id: 4,
    name: 'Killjoy',
    country: 'Alemanha',
    biography:
      'Killjoy, uma alemã genial, defende o campo de batalha facilmente usando seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs dão conta do recado.',
    basicAbilities: ['Nanoenxame', 'Robô de Alarme'],
    signatureAbility: 'Torreta',
    ultimateAbility: 'Confinamento',
    aliases: [],
    race: 'Humano',
    role: 'Sentinela',
    codename: '',
    gunSkin: 'Wunderkind Shorty',
    icon: require('../assets/images/agentsIcons/Killjoy.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Killjoy.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Killjoy2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Killjoy.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Killjoy2.jpg'),
  },
  {
    id: 5,
    name: 'Cypher',
    country: 'Marrocos',
    biography:
      'Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.',
    basicAbilities: ['Jaula Cibernética', 'Fio-armadilha'],
    signatureAbility: 'Câmera de Vigilância',
    ultimateAbility: 'Assalto Neural',
    aliases: ['Aamir'],
    race: 'Humano',
    role: 'Sentinela',
    codename: 'Gumshoe',
    gunSkin: 'Hush Ghost',
    icon: require('../assets/images/agentsIcons/Cypher.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Cypher.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Cypher2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Cypher.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Cypher2.jpg'),
  },
  {
    id: 6,
    name: 'Sova',
    country: 'Rússia',
    biography:
      'Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.',
    basicAbilities: ['Flecha de Choque', 'Drone Coruja'],
    signatureAbility: 'Flecha Rastreadora',
    ultimateAbility: 'Fúria do Caçador',
    aliases: [],
    race: 'Humano',
    role: 'Iniciador',
    codename: 'Hunter',
    gunSkin: 'Protektor Sheriff',
    icon: require('../assets/images/agentsIcons/Sova.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Sova.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Sova2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Sova.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Sova2.jpg'),
  },
  {
    id: 7,
    name: 'Sage',
    country: 'China',
    biography:
      'Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.',
    basicAbilities: ['Orbe de Lentidão', 'Orbe de Barreira'],
    signatureAbility: 'Orbe Curativo',
    ultimateAbility: 'Ressureição',
    aliases: [],
    race: 'Radiante',
    role: 'Sentinela',
    codename: 'Thorne',
    gunSkin: 'Final Chamber Classic',
    icon: require('../assets/images/agentsIcons/Sage.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Sage.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Sage2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Sage.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Sage.jpg'),
  },
  {
    id: 9,
    name: 'Phoenix',
    country: 'Reino Unido',
    biography:
      'Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.',
    basicAbilities: ['Bola Curva', 'Labareda'],
    signatureAbility: 'Mãos Quentes',
    ultimateAbility: 'Renascimento',
    aliases: [],
    race: 'Radiante',
    role: 'Duelista',
    codename: 'Apollo',
    gunSkin: 'Spitfire Frenzy',
    icon: require('../assets/images/agentsIcons/Phoenix.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Phoenix.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Phoenix2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Phoenix.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Phoenix2.jpg'),
  },
  {
    id: 10,
    name: 'Jett',
    country: 'Coréia do Sul',
    biography:
      'Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.',
    basicAbilities: ['Corrente Ascendente', 'Erupção das Brumas'],
    signatureAbility: 'Brisa de Impulso',
    ultimateAbility: 'Tormenta de Aço',
    aliases: ['Joon-Hee'],
    race: 'Radiante',
    role: 'Duelista',
    codename: 'Hawk',
    gunSkin: 'Game Over Sheriff',
    icon: require('../assets/images/agentsIcons/Jett.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Jett.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Jett2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Jett.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Jett2.jpg'),
  },
  {
    id: 11,
    name: 'Reyna',
    country: 'México',
    biography:
      'Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.',
    basicAbilities: ['Devorar', 'Olhar Veroz'],
    signatureAbility: 'Dispensar',
    ultimateAbility: 'Imperatriz',
    aliases: [],
    race: 'Radiante',
    role: 'Duelista',
    codename: 'Vampire',
    gunSkin: 'Vendetta Ghost',
    icon: require('../assets/images/agentsIcons/Reyna.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Reyna.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Reyna2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Reyna.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Reyna2.jpg'),
  },
  {
    id: 12,
    name: 'Raze',
    country: 'Brasil',
    biography:
      'Raze chega do Brasil em uma explosão de carisma e armas letais. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!',
    basicAbilities: ['Carga de Explosivos', 'Bumba'],
    signatureAbility: 'Cartuchos de Tinta',
    ultimateAbility: 'Estraga-Prazeres',
    aliases: [],
    race: 'Humano',
    role: 'Duelista',
    codename: 'Clay',
    gunSkin: 'Pistolinha Classic',
    icon: require('../assets/images/agentsIcons/Raze.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Raze.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Raze2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Raze.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Raze2.jpg'),
  },
  {
    id: 13,
    name: 'Breach',
    country: 'Suécia',
    biography:
      'Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.',
    basicAbilities: ['Estopim', 'Pós-Choque'],
    signatureAbility: 'Falha Tectônica',
    ultimateAbility: 'Onda Trovejante',
    aliases: ['Breachy'],
    race: 'Humano',
    role: 'Iniciador',
    codename: 'Breach',
    gunSkin: 'Ragnarocker Frenzy',
    icon: require('../assets/images/agentsIcons/Breach.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Breach.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Breach2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Breach.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Breach2.jpg'),
  },
  {
    id: 14,
    name: 'Skye',
    country: 'Austrália',
    biography:
      'Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.',
    basicAbilities: ['Predador Explosivo', 'Reflorescer'],
    signatureAbility: 'Luz Desbravadora',
    ultimateAbility: 'Rastreadores',
    aliases: [],
    race: 'Radiante',
    role: 'Iniciador',
    codename: 'Guide',
    gunSkin: 'Swooping Frenzy',
    icon: require('../assets/images/agentsIcons/Skye.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Skye.jpg'),
    horizontalCard2: require('../assets/images/horizontalCards/Skye2.jpg'),
    verticalCard1: require('../assets/images/verticalCards/Skye.jpg'),
    verticalCard2: require('../assets/images/verticalCards/Skye2.jpg'),
  },
  {
    id: 15,
    name: 'Yoru',
    country: 'Japão',
    biography:
      'Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.',
    basicAbilities: ['Ponto Cego', 'Falcatrua'],
    signatureAbility: 'Passagem Dimensional',
    ultimateAbility: 'Espionagem Dimensional',
    aliases: [],
    race: 'Radiante',
    role: 'Duelista',
    codename: 'Stealth',
    gunSkin: 'Death Wish Sheriff',
    icon: require('../assets/images/agentsIcons/Yoru.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Yoru.png'),
    horizontalCard2: require('../assets/images/horizontalCards/Yoru2.png'),
    verticalCard1: require('../assets/images/verticalCards/Yoru.png'),
    verticalCard2: require('../assets/images/verticalCards/Yoru2.png'),
  },
  {
    id: 16,
    name: 'Astra',
    country: 'Gana',
    biography:
      'Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.',
    basicAbilities: ['Pulso Nova', 'Poço Gravitacional'],
    signatureAbility: 'Nebulosa',
    ultimateAbility: 'Forma Astral / Divisa Cósmica',
    aliases: [],
    race: 'Radiante',
    role: 'Controlador',
    codename: 'Rift',
    gunSkin: 'Eclipse Ghost',
    icon: require('../assets/images/agentsIcons/Astra.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Astra.png'),
    horizontalCard2: require('../assets/images/horizontalCards/Astra2.png'),
    verticalCard1: require('../assets/images/verticalCards/Astra.png'),
    verticalCard2: require('../assets/images/verticalCards/Astra2.png'),
  },
  {
    id: 17,
    name: 'KAY/O',
    country: 'Alternate Timeline Earth',
    biography:
      'KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de suprimir habilidades inimigas, comprometendo a capacidade de contra-ataque dos adversários e dando a si próprio e a seus aliados uma vantagem essencial em combate.',
    basicAbilities: ['Granada/Clarão', 'Frag/mento'],
    signatureAbility: 'Ponto/Zero',
    ultimateAbility: 'Anular/CMD',
    aliases: [],
    race: 'Robô',
    role: 'Iniciador',
    codename: 'Grenadier',
    gunSkin: 'FIRE-ARM Classic',
    icon: require('../assets/images/agentsIcons/KAYO.png'),
    horizontalCard1: require('../assets/images/horizontalCards/KAYO.png'),
    horizontalCard2: require('../assets/images/horizontalCards/KAYO2.png'),
    verticalCard1: require('../assets/images/verticalCards/KAYO.png'),
    verticalCard2: require('../assets/images/verticalCards/KAYO2.png'),
  },
  {
    id: 18,
    name: 'Chamber',
    country: 'França',
    biography:
      'Bem vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com uma precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.',
    basicAbilities: ['Caçador de Cabeças', 'Marca Registrada'],
    signatureAbility: 'Rendezvous',
    ultimateAbility: 'Tour de Force',
    aliases: ['Vincent Fabron'],
    race: 'Humano',
    role: 'Sentinela',
    codename: 'Deadeye',
    gunSkin: 'Finesse Classic',
    icon: require('../assets/images/agentsIcons/Chamber.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Chamber.png'),
    horizontalCard2: require('../assets/images/horizontalCards/Chamber2.png'),
    verticalCard1: require('../assets/images/verticalCards/Chamber.png'),
    verticalCard2: require('../assets/images/verticalCards/Chamber2.png'),
  },
  {
    id: 19,
    name: 'Neon',
    country: 'Filipinas',
    biography:
      'Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.',
    basicAbilities: ['Ricochete Elétrico', 'Via Expressa'],
    signatureAbility: 'Equipamento Voltaico',
    ultimateAbility: 'Sobrecarga',
    aliases: [],
    race: 'Radiante',
    role: 'Duelista',
    codename: 'Sprinter',
    gunSkin: 'Live Wire Frenzy',
    icon: require('../assets/images/agentsIcons/Neon.png'),
    horizontalCard1: require('../assets/images/horizontalCards/Neon.png'),
    horizontalCard2: require('../assets/images/horizontalCards/Neon2.png'),
    verticalCard1: require('../assets/images/verticalCards/Neon.png'),
    verticalCard2: require('../assets/images/verticalCards/Neon2.png'),
  },
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agentsFiltered: agents,
      icon: require('../assets/images/az.png'),
      alphabetical: false,
    };
  }

  listFilter = input => {
    const filteredList = [];

    input = input.toLowerCase();

    agents.forEach(agent => {
      if (
        agent.name.toLowerCase().indexOf(input) > -1 ||
        agent.codename.toLowerCase().indexOf(input) > -1
      ) {
        filteredList.push(agent);
      } else {
        agent.aliases.forEach(alias => {
          if (
            alias.toLowerCase().indexOf(input) > -1 &&
            filteredList.indexOf(agent) === -1
          ) {
            filteredList.push(agent);
          }
        });
      }
    });

    this.setState({
      agentsFiltered: filteredList,
    });
  };

  sortAlphabetically = () => {
    const sortedAgents = this.state.agentsFiltered;

    if (this.state.alphabetical) {
      sortedAgents.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }

        if (a.name > b.name) {
          return -1;
        }

        return 0;
      });
    } else {
      sortedAgents.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }

        if (a.name < b.name) {
          return -1;
        }

        return 0;
      });
    }

    this.setState({
      alphabetical: !this.state.alphabetical,
      agentsFiltered: sortedAgents,
    });
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainView}>
        <View animation="slideInUp">
          <CustomHeader
            title="Valorant Agents"
            description="Descubra mais sobre cada agente clicando na lista abaixo"
          />
        </View>

        <View style={styles.filterView}>
          <View animation="slideInLeft" style={styles.inputView}>
            <CustomInput
              placeholder="Pesquisar..."
              keyboard="default"
              isSecure={false}
              changeFunction={input => this.listFilter(input)}
            />
          </View>

          <View animation="slideInRight">
            <TouchableOpacity onPress={this.sortAlphabetically}>
              <Image source={this.state.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View animation="slideInDown" style={styles.iconView}>
          <CustomFlatlist
            data={this.state.agentsFiltered}
            navigation={navigation}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    padding: 20,
    backgroundColor: '#ff4457',
    height: '100%',
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  inputView: {
    flex: 3,
  },
  iconView: {
    flex: 1,
  },
});
