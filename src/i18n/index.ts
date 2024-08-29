import english from '@/i18n/locales/en.json';
import portuguese from '@/i18n/locales/pt.json';

const LANG = {
	ENGLISH: 'en',
	PORTUGUESE: 'pt',
};

export const getI18N = ({
	currentLocale = 'pt',
}: {
	currentLocale: string | undefined;
}) => {
	switch (currentLocale) {
		case LANG.ENGLISH:
			return { ...portuguese, ...english };		
		default:
			return portuguese;
	}
};
