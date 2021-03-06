/**
 * Tailles et dimensions
 */
export const Metrics = {
  /**
   * Espacement entre composantes, incluant toutes marges de composantes intérieures
   */
  spacing: {
    // Espacement total entre deux sections
    xlarge: 64,
    section: 64,

    // Espacement total entre deux groupes
    large: 32,
    group: 32,

    // Espacement total entre deux composantes
    medium: 16,
    component: 16,

    // Espacement total entre deux sous-composantes
    small: 8,
    inside: 8,

    // Marge standard entre les petits éléments visuels
    xsmall: 4,
    tiny: 4,
    xtiny: 2,
    hairline: 1,
  },

  // Taille des widgets: boutons, images, etc.
  size: {
    huge: 128, // Notamment pour l'avatar
    cover: 100, // Album Cover de documentation > Fichiers
    xlarge: 72,
    large: 56,
    medium: 40,
    small: 24,
    xsmall: 16,
    tiny: 8,
    xtiny: 4,
  },

  // Courbature des bordures */
  borderRadius: {
    forms: 2,
    modals: 4,
  },

  // Marge tappable/clickable autour des composantes
  hitSlop: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8,
  },

  maxContentWidth: 944,
};

export const Colors = {
  action: '#2DA84F',
  error: '#AC1616',
  pochette: '#F5752C',
  primary: '#203548',
  primary_reversed: '#FFFFFF',
  secondary: '#687A8B',
  tertiary: '#8DA0B2',
  stroke: '#DCDFE1',
  inactive: '#8DA0B3',
  alert_warning: '#A55108',
  alert_positive: '#DFF8E3',

  secondaries: {
    purple: '#BCBBF2',
    scarlett: '#D9ACF7',
    pink: '#EBB1DC',
    salmon: '#FFAFA8',
    coral: '#FCB8C5',
    peach: '#FAC0AE',
    orange: '#FFD0A9',
    yellow: '#F8EBA3',
    olive: '#C6D9AD',
    green: '#C6F3B6',
    teal: '#93E9E4',
    skyblue: '#91DDFE',
    indigo: '#A4B7F1',
  },

  background: {
    ground: '#FFFFFF',
    underground: '#FAF8F9',
    hell: '#F2EFF0',
    underground_reversed: '#322129',
    underground_reversed2: '#3F2933',
  },

  progressBar: {
    darkred: '#8B0000',
    orangered: '#FF4500',
    orange: '#ffa500',
    yellowgreen: '#9acd32',
    green: '#008000',
  },
};

export const Typography = {
  Weight: {
    normal: '400',
    heavy: '500',
    bold: '700',
  },

  // font: "Roboto",
  font: 'IBMPlexSans',

  titles: {
    1: {
      size: 40,
      height: 48,
      weight: '500',
    },

    2: {
      size: 32,
      height: 40,
      weight: '700',
    },

    3: {
      size: 24,
      height: 32,
      weight: '700',
    },

    4: {
      size: 18,
      height: 24,
      weight: '700',
    },

    5: {
      size: 16,
      height: 24,
      weight: '700',
    },
  },

  text: {
    tiny: {
      size: 8,
      height: 8,
    },
    small: {
      size: 12,
      height: 16,
    },
    medium: {
      size: 16,
      height: 24,
    },
  },
};
