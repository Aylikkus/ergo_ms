import {
  AtSign,
  Calendar,
  CircleUserRound,
  Grid2x2,
  House,
  KeyRound,
  Lock,
  MessagesSquare,
  UserCog,
  Wallet,
} from 'lucide-vue-next'

// Аккаунт
export const UserMenuSection = {
  id: 1,
  icon: CircleUserRound,
  routeName: 'User',
  title: 'Аккаунт',
  list: [
    { path: 'Account', name: 'Профиль' },
    { path: 'Teams', name: 'Команды' },
    { path: 'Projects', name: 'Проекты' },
    { path: 'Connections', name: 'Связи' },
    { path: 'Analytics', name: 'Статистика' },
  ],
}

// Настройки аккаунта
export const SettingsMenuSection = {
  id: 2,
  icon: UserCog,
  routeName: 'Settings',
  title: 'Настройки',
  list: [
    { path: 'AccountSettings', name: 'Аккаунт' },
    { path: 'SecuritySettings', name: 'Безопасность' },
    { path: 'NotificationSettings', name: 'Уведомления' },
    { path: 'ConnectionSettings', name: 'Связи' },
    { path: 'Roles', name: 'Ролевые настройки'}
  ],
}

// Электронная почта
export const EmailMenuSection = {
  id: 3,
  icon: AtSign,
  routeName: 'Email',
  title: 'Электронная почта',
}

// Мессенджер
export const ChatMenuSection = {
  id: 4,
  icon: MessagesSquare,
  routeName: 'Messenger',
  title: 'Мессенджер',
}