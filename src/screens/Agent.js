import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AgentDetails from '../components/AgentDetails';
import AgentHeader from '../components/AgentHeader';

export default class Agent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      agent: props.route.params.agent,
    };
  }

  render() {
    const headerData = {
      horizontal1: this.state.agent.horizontalCard1,
      horizontal2: this.state.agent.horizontalCard2,
      vertical1: this.state.agent.verticalCard1,
      vertical2: this.state.agent.verticalCard2,
      name: this.state.agent.name,
    };

    return (
      <View style={styles.mainView}>
        <AgentHeader data={headerData} />

        <ScrollView>
          <AgentDetails title="ID" content={this.state.agent.id} />
          <AgentDetails title="País" content={this.state.agent.country} />
          <AgentDetails
            title="Biografia"
            content={this.state.agent.biography}
          />
          <AgentDetails
            title="Habilidades Básicas"
            content={this.state.agent.basicAbilities.toString()}
          />
          <AgentDetails
            title="Habilidade de Assinatura"
            content={this.state.agent.signatureAbility}
          />
          <AgentDetails
            title="Ultimate"
            content={this.state.agent.ultimateAbility}
          />
          <AgentDetails
            title="Apelidos"
            content={this.state.agent.aliases.toString()}
          />
          <AgentDetails title="Raça" content={this.state.agent.race} />
          <AgentDetails title="Função" content={this.state.agent.role} />
          <AgentDetails title="Codinome" content={this.state.agent.codename} />
          <AgentDetails
            title="Skin de arma"
            content={this.state.agent.gunSkin}
          />
        </ScrollView>
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
});
