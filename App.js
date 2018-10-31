import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from './src/locales/i18n'
export default class FooterTabsIconTextExample extends Component {

    render() {
        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name="facebook-square" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="test" size={30} color="#4F8EF7"/>
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>{I18n.t('blog')}</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
