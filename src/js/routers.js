import { createRouter, createWebHistory } from 'vue-router'

import { checkToken } from '@/js/auth';

const mainRoutes = [
  {
    path: '/',
    redirect: { name: 'Account' },
    meta: 
    { 
      requiresAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: 
    { 
      title: 'Страница не найдена',
      requiresAuth: true,
    },
  },
]

// Панель управления
const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard/ParentLayout.vue'),
    redirect: { name: 'Analytics' },
    meta: 
    { 
      requiresAuth: true,
    },
    children: [
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/pages/dashboard/analytics/charts/PageLayout.vue'),
        meta: 
        { 
          requiresAuth: true,
        },
      },
    ],
  },
]

// Аккаунт пользователя
const userRoutes = [
  {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user/ParentLayout.vue'),
    redirect: { name: 'Account' },
    meta: 
    { 
      requiresAuth: true,
    },
    children: [
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/pages/user/account/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true,
        },
      },
      {
        path: 'teams',
        name: 'Teams',
        component: () => import('@/pages/user/teams/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('@/pages/user/projects/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'connections',
        name: 'Connections',
        component: () => import('@/pages/user/connections/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/pages/dashboard/analytics/charts/PageLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
    ],
  },
]

// Настройки аккаунта
const settingsRoutes = [
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/settings/ParentLayout.vue'),
    redirect: { name: 'AccountSettings' },
    meta: 
    { 
      requiresAuth: true 
    },
    children: [
      {
        path: 'account',
        name: 'AccountSettings',
        component: () => import('@/pages/settings/account/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'security',
        name: 'SecuritySettings',
        component: () => import('@/pages/settings/security/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'billing',
        name: 'BillingSettings',
        component: () => import('@/pages/settings/billing/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'notifications',
        name: 'NotificationSettings',
        component: () => import('@/pages/settings/notifications/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'connections',
        name: 'ConnectionSettings',
        component: () => import('@/pages/settings/connections/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/pages/roles/ParentLayout.vue'),
        meta: 
        { 
          requiresAuth: true 
        },
      },
    ],
  },
]

// Электронная почта
const emailRoutes = [
  {
    path: '/email',
    name: 'Email',
    component: () => import('@/pages/email/ParentLayout.vue'),
    meta: 
    { 
      requiresAuth: true 
    },
  },
]

// Мессенджер
const messengerRoutes = [
  {
    path: '/messenger',
    name: 'Messenger',
    component: () => import('@/pages/messenger/ParentLayout.vue'),
    meta: 
    { 
      requiresAuth: true 
    },
  },
]

//
const startRoutes = [
  {
    path: '/start-page',
    name: 'StartPage',
    component: () => import('@/pages/auth/StartPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/auth/LoginPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/auth/RegisterPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: () => import('@/pages/auth/VerifyEmailPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/pages/auth/ForgotPasswordPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('@/pages/auth/ResetPasswordPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
  {
    path: '/two-steps',
    name: 'TwoSteps',
    component: () => import('@/pages/auth/TwoStepsPage.vue'),
    meta: {
      startRoute: true,
      requiresAuth: false
    }
  },
]

const routes = [
  ...startRoutes,
  ...mainRoutes,
  ...dashboardRoutes,
  ...userRoutes,
  ...settingsRoutes,
  ...emailRoutes,
  ...messengerRoutes,
]

routes.forEach(route => {
  if (!route.meta || !route.meta.hasOwnProperty('startRoute')) {
    route.meta = route.meta || {};
    route.meta.startRoute = false;
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) 
  {
    runCheckToken().then(isChecked => 
    {
      if (isChecked === false) {
        next({ name: 'StartPage' });
      }
      else
      {
        next(true);
      }
    }).catch(error => 
    {
      console.error('Ошибка проверки токена:', error);
      next({ name: 'StartPage' });
    });
  } 
  else 
  {
    next();
  }
});

async function runCheckToken() {
  const isChecked = await checkToken();
  return isChecked;
}


export default router