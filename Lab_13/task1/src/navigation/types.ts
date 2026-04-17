export type RootStackParamList = {
  HomeMain: undefined;
  Home: undefined;
  Profile: { userId: string }; // Профиль ждет ID пользователя [cite: 741]
  Settings: undefined;
  SearchMain: undefined;
  NotificationsMain: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type TabParamList = {
  HomeMain: undefined;
  SearchMain: undefined;
  NotificationsMain: undefined;
  Profile: undefined;
};