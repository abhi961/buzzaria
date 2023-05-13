/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useCallback} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabBar from './components/TabBar';
import Drawer from './components/Drawer';
import TopTabButtons from './components/TopTabButtons';
import {useSelector, useDispatch} from 'react-redux';
import {updateUserAction, logoutAction} from './redux/slice/auth';
import refreshToken from './api/auth/refreshToken';
import {fetchWallet, clearWallet} from './redux/slice/payment';
import {getData} from './redux/slice/data';
import {clearTeam} from './redux/slice/team';
import {fetchNotifications} from './redux/slice/notification';
import {clearNotification} from './redux/slice/notification';
import {clearMatch} from './redux/slice/match';
import messaging from '@react-native-firebase/messaging';

import {
  Login,
  OTP,
  CreateProfile,
  AddUsername,
  Home,
  Wallet,
  AddCash,
  AddCashFinal,
  RedeemCash,
  ReferAndEarn,
  Transactions,
  WithdrawalHistory,
  Notification,
  TermsAndConditions,
  Friends,
  MyTeam,
  TeamRequest,
  TeamSearch,
  Tournament,
  MyMatches,
  UpcomingMatches,
  CompletedMatches,
  Skirmish,
  SingleMatch,
  SingleTournament,
  // SingleTournamentMatch,
  TournamentSlotSelect,
  AddTeam,
  AddTeamSelect,
  SingleMatchPay,
  UpdateProfile,
  ViewTeam,
  UpdateUsernames,
  Rules,
  EditTeam,
  ChangeMobileNumber,
  FAQ,
  ContactUs,
} from './Screens';

const AuthStack = createStackNavigator();

const DrawerStack = createDrawerNavigator();

const TabStack = createBottomTabNavigator();

const TeamStack = createStackNavigator();

const PaymentStack = createStackNavigator();

const TeamTabStack = createMaterialTopTabNavigator();

const MatchesTabStack = createMaterialTopTabNavigator();

const MatchStack = createStackNavigator();

const TournamentStack = createStackNavigator();

const ProfileStack = createStackNavigator();

export const TeamTabs = () => (
  <TeamTabStack.Navigator
    initialRouteName="MyTeam"
    sceneContainerStyle={{backgroundColor: 'transparent'}}
    tabBar={props => <TopTabButtons {...props} />}>
    <TeamTabStack.Screen
      name="MyTeam"
      component={MyTeam}
      options={{tabBarLabel: 'My Teams'}}
    />
    <TeamTabStack.Screen
      name="TeamRequest"
      component={TeamRequest}
      options={{tabBarLabel: 'Team Invites'}}
    />
  </TeamTabStack.Navigator>
);

export const MyMatchesTabs = () => (
  <MatchesTabStack.Navigator
    initialRouteName="UpcomingMatches"
    style={{marginTop: 10}}
    sceneContainerStyle={{backgroundColor: 'transparent'}}
    tabBar={props => <TopTabButtons {...props} />}>
    <MatchesTabStack.Screen
      name="UpcomingMatches"
      component={UpcomingMatches}
      options={{tabBarLabel: 'Upcoming'}}
    />
    <MatchesTabStack.Screen
      name="CompletedMatches"
      component={CompletedMatches}
      options={{tabBarLabel: 'Completed'}}
    />
  </MatchesTabStack.Navigator>
);

const MatchScreens = () => {
  return (
    <MatchStack.Navigator initialRouteName="SingleMatch" headerMode="none">
      <MatchStack.Screen name="SingleMatch" component={SingleMatch} />
      <MatchStack.Screen name="AddTeam" component={AddTeam} />
      <MatchStack.Screen name="AddTeamSelect" component={AddTeamSelect} />
      <MatchStack.Screen name="SingleMatchPay" component={SingleMatchPay} />
      <MatchStack.Screen name="ViewTeam" component={ViewTeam} />
      <MatchStack.Screen name="EditTeam" component={EditTeam} />
    </MatchStack.Navigator>
  );
};

const TournamentScreens = () => {
  return (
    <TournamentStack.Navigator
      initialRouteName="SingleTournament"
      headerMode="none">
      <TournamentStack.Screen
        name="SingleTournament"
        component={SingleTournament}
      />
      <TournamentStack.Screen name="SingleMatch" component={SingleMatch} />
      <TournamentStack.Screen
        name="TournamentSlotSelect"
        component={TournamentSlotSelect}
      />
      <TournamentStack.Screen name="AddTeam" component={AddTeam} />
      <TournamentStack.Screen name="AddTeamSelect" component={AddTeamSelect} />
      <TournamentStack.Screen
        name="SingleMatchPay"
        component={SingleMatchPay}
      />
      <TournamentStack.Screen name="ViewTeam" component={ViewTeam} />
      <TournamentStack.Screen name="EditTeam" component={EditTeam} />
    </TournamentStack.Navigator>
  );
};

const TeamScreens = () => (
  <TeamStack.Navigator initialRouteName="Team" headerMode="none">
    <TeamStack.Screen name="Team" component={Friends} />
    <TeamStack.Screen name="TeamSearch" component={TeamSearch} />
  </TeamStack.Navigator>
);

const PaymentScreens = () => (
  <PaymentStack.Navigator initialRouteName="Wallet" headerMode="none">
    <PaymentStack.Screen name="Wallet" component={Wallet} />
    <PaymentStack.Screen name="AddCash" component={AddCash} />
    <PaymentStack.Screen name="AddCashFinal" component={AddCashFinal} />
    <PaymentStack.Screen name="RedeemCash" component={RedeemCash} />
    <PaymentStack.Screen name="ReferAndEarn" component={ReferAndEarn} />
    <PaymentStack.Screen name="Transactions" component={Transactions} />
    <PaymentStack.Screen
      name="WithdrawalHistory"
      component={WithdrawalHistory}
    />
  </PaymentStack.Navigator>
);

const ProfileScreens = () => (
  <PaymentStack.Navigator initialRouteName="UpdateProfile" headerMode="none" >
    <ProfileStack.Screen name="UpdateProfile" component={UpdateProfile} />
    <ProfileStack.Screen name="UpdateUsernames" component={UpdateUsernames} />
    <ProfileStack.Screen
      name="ChangeMobileNumber"
      component={ChangeMobileNumber}
    />
  </PaymentStack.Navigator>
);

const TabScreens = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    messaging().onMessage(async () => {
      dispatch(fetchNotifications(1));
    });

    messaging().setBackgroundMessageHandler(async () => {
      dispatch(fetchNotifications(1));
    });

    messaging().onNotificationOpenedApp(async () => {
      navigation.navigate('Notification');
    });

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          navigation.navigate('Notification');
        }
      });
  }, [dispatch, navigation]);

  return (
    <TabStack.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      tabBar={props => <TabBar {...props} />}>
      <TabStack.Screen name="Tournament" component={Tournament} />
      <TabStack.Screen name="Skirmish" component={Skirmish} />
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen
        name="Friends"
        component={TeamScreens}
        options={{unmountOnBlur: true}}
      />
      <TabStack.Screen name="Matches" component={MyMatches} />
      <TabStack.Screen name="Payment" component={PaymentScreens} />
    </TabStack.Navigator>
  );
};

const AppScreen = () => (
  <DrawerStack.Navigator
    initialRouteName="App"
    drawerType="slide"
    overlayColor="#00000080"
    drawerContent={props => <Drawer {...props} />}>
    <DrawerStack.Screen name="App" component={TabScreens} />
    <DrawerStack.Screen name="Notification" component={Notification} />
    <DrawerStack.Screen name="SingleMatchScreens" component={MatchScreens} />
    <DrawerStack.Screen
      name="SingleTournamentScreens"
      component={TournamentScreens}
    />
    <DrawerStack.Screen name="Profile" component={ProfileScreens} />
    <DrawerStack.Screen
      name="TermsAndConditions"
      component={TermsAndConditions}
    />
    <DrawerStack.Screen name="FAQ" component={FAQ} />
    <DrawerStack.Screen name="ContactUs" component={ContactUs} />
    <DrawerStack.Screen name="Rules" component={Rules} />
  </DrawerStack.Navigator>
);

const AuthScreens = () => (
  <AuthStack.Navigator initialRouteName="Login" headerMode="none">
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="OTP" component={OTP} />
    <AuthStack.Screen name="CreateProfile" component={CreateProfile} />
    <AuthStack.Screen name="AddUsername" component={AddUsername} />
    <AuthStack.Screen
      name="TermsAndConditions"
      component={TermsAndConditions}
    />
  </AuthStack.Navigator>
);

function Router() {
  const dispatch = useDispatch();

  const {isLogin} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const checkLogin = useCallback(async () => {
    try {
      const response = await refreshToken();
      if (response.error) {
        dispatch(logoutAction());
        dispatch(clearWallet());
        dispatch(clearTeam());
        dispatch(clearNotification());
        dispatch(clearMatch());
        throw response.msg;
      }
      const payload = {
        user: response.user,
      };
      dispatch(updateUserAction(payload));
      dispatch(fetchWallet());
      dispatch(fetchNotifications(1));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLogin) {
      checkLogin();
    }
  }, [isLogin, checkLogin]);

  return (
    <NavigationContainer theme={DarkTheme}>
      {isLogin ? <AppScreen /> : <AuthScreens />}
    </NavigationContainer>
  );
}

export default Router;
