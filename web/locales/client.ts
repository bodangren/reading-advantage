import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, defineLocale, useCurrentLocale } =
    createI18nClient(
        {
            en: () => import('./en'),
            th: () => import('./th'),
            cn: () => import('./cn'),
            tw: () => import('./tw'),
            vi: () => import('./vi'),
        },
        {
            // Uncomment to set base path
            // basePath: '/base',
            // Uncomment to use custom segment name
            // segmentName: 'locale',
            // Uncomment to set fallback locale
            // fallbackLocale: en,
        },
    );