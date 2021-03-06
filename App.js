/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Storage from './js/util/Storage';
import {TabNavigator, StackNavigator, SwitchNavigator} from 'react-navigation';

import PopularPage from './js/page/PopularPage';
import TrendingPage from './js/page/TrendingPage';
import FavoritePage from './js/page/FavoritePage';
import MyPage from './js/page/MyPage';
import NewPage from './js/page/NewPage';
import WelComePage from './js/page/WelcomePage';
import CustomPage from "./js/page/CustomPage";
import APPState from './js/mobx/AppState';
import ScreenUtil from "./js/util/ScreenUtil";
import Loading from './js/common/LoadingView';

const Tab = TabNavigator({
        Popular: {
            screen: PopularPage,
            //  navigationOptions: ({navigation}) => Navigator({navigation})
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_polular.png')}/>)
            }
        },
        Trending: {
            screen: TrendingPage,
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_trending.png')}/>)
            }
        },
        Favorite: {
            screen: FavoritePage,
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_favorite.png')}/>)
            }
        },
        My: {
            screen: MyPage,
            navigationOptions: {
                tabBarVisible: true,  //是否隐藏标签栏。默认不隐藏(true),该选项卡激活时生效
                tabBarIcon: ({tintColor}) => (<Image style={{height: 30, resizeMode: 'contain', tintColor: tintColor}}
                                                     source={require('./res/images/ic_my.png')}/>)
            }
        }
    },

    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        initialRouteName: 'Popular',
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: APPState.bgcolor,//label和icon的前景色 活跃状态下（选中）。
            inactiveTintColor: 'gray',
            //activeBackgroundColor: 'green', //label和icon的背景色 活跃状态下（选中）
            //inactiveBackgroundColor: 'transparent',
            showLabel: true,         //是否显示label，默认开启
            labelStyle: {fontSize: 12}, //label的样式
            style: {height: 50, opacity: 0.5},  //tabbar的样式

        },

    });

const AppStackNavigator = StackNavigator({
    home: {
        screen: Tab,
        navigationOptions: {
            header: null,
        }
    },
    welcome: {
        screen: WelComePage,
        navigationOptions: {
            header: null
        }
    },
    NewPage: {
        screen: NewPage,
        navigationOptions: {
            header: null
        }
    },
    customPage: {
        screen: CustomPage,
        navigationOptions: {
            header: null
        }
    }
});

//welcome为欢迎页
const AppSwitchNavigator = SwitchNavigator(
    {

        welcome: WelComePage,
        App: AppStackNavigator,
    },
    {
        initialRouteName: 'welcome',
    }
);


export default class AppClass extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <AppSwitchNavigator/>
                <Loading/>
            </View>
        )
    }
}
//export default AppStackNavigator;