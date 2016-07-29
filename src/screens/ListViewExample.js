/**
 *	Forms page example
 */
'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    ListView,
    RefreshControl
} from 'react-native';

var Button = require('../components/Button');
var AppConfig = require('../config/AppConfig');
var ListRow = require('../components/ListRow');
var TempScreen = require('../screens/TempScreen');
var AppStyles = require('../styles/AppStyles');

// CHANGEME - Fake hardcoded data 
var defaultData = [
    {
        title: 'Lorem ipsum adipiscing',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/nature',
    },
    {
        title: 'Guim petis',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/animals',
    },
    {
        title: 'Filos be amik',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/transport',
    },
    {
        title: 'Mi a adipiscing',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/nightlife',
    },
    {
        title: 'Ching vivamus le',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/food',
    },
    {
        title: 'Parturinent my proin',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/fashion',
    },
    {
        title: 'Vestibulum in fames',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/business',
    },
    {
        title: 'Lorem ipsum adipiscing',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/nature',
    },
    {
        title: 'Guim petis',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/animals',
    },
    {
        title: 'Filos be amik',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/transport',
    },
    {
        title: 'Mi a adipiscing',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/nightlife',
    },
    {
        title: 'Ching vivamus le',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/food',
    },
    {
        title: 'Parturinent my proin',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/fashion',
    },
    {
        title: 'Vestibulum in fames',
        summary: 'A vivamus neque consectetur parturient mi nisl proin molestie vestibulum in fames condimentum cum a.',
        image: 'http://lorempixel.com/g/1000/250/business',
    },
  ];

// CHANGEME - change to your class name
class ListViewExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            }),
            isRefreshing: false,
        };
    }

    fetchData() {
        this.setState({ isRefreshing: true });

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(defaultData),
            isRefreshing: false,
        });
    }

    componentDidMount() {
        this.fetchData();
    }

    renderRow(data) {
        return (
            <ListRow 
                title={data.title.toString()}
                onPress={() => {
                    this.props.navigator.push({
                        title: data.title,
                        component: TempScreen,
                        index: 2,
                        navigator: this.props.navigator,
                        passProps: {
                            placeholder: data.title
                        }
                    });
                }} />
        )
    }

	render() {
		return (
			<View style={[AppStyles.container]}>
                <ListView
                    initialListSize={8}
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)} 
                    />

            </View>
		)
	}
}

module.exports = ListViewExample;