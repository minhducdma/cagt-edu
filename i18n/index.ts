import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

const existedLanguage = ['en', 'vi'];
const currentLanguage = Localization.locale?.split('-')[0] ?? 'en';

const i18n = new I18n();
i18n.locale = existedLanguage.includes(currentLanguage)
  ? currentLanguage
  : 'en';
i18n.translations = {
  en: require('./locale/en.json'),
  vi: require('./locale/vi.json'),
};

export default function $t(
  key: string,
  params: Record<string, unknown> = {},
): string {
  return i18n.t(key, params);
}
