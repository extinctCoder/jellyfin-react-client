import React, { Component } from 'react';
import {    
    Text,
    View
} from 'react-native';
import styles from './Style'
import {Link} from '../utilities/routing/index';

// This is a dumb component that is common for native and web

export default class EntryComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: 'Welcome to top level component of this app.',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.biggerText}>
                    {this.state.message}
                </Text>

                <Text style={styles.biggerText}>
                    {this.props.message}
                </Text>
                <View style={styles.button}>
                    <Link to={'/login'}>
                        <Text>To get started, go to the login page.</Text>
                    </Link>
                </View>
            </View>
        );
    }
}
