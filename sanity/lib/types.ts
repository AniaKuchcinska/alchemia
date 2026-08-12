export type LocalizedString = {
  pl: string;
  en: string;
};

export type HomepageAnnouncement = {
  enabled: boolean;
  text: LocalizedString;
};

export type HomepageHero = {
  background: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  announcements: HomepageAnnouncement[];
  showSignupButton: boolean;
};
