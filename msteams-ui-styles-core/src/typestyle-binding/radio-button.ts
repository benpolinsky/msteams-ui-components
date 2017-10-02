import { style } from 'typestyle';
import { Context } from './context';

interface RadioButtonColors {
  rest: {
    border: string;
    background: string;
  };
  hover: {
    background: string;
    border: string;
  };
  disabled: {
    background: string;
    border: string;
  };
  focus: {
    outline: string;
  };
  selected: {
    background: string;
    border: string;
  };
  container: string;
}

function base(context: Context, colors: RadioButtonColors) {
  const { rem } = context;
  return {
    container: style({
      border: 'none',
      background: colors.container,
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
    }),
    radio: style({
      position: 'relative',
      ['-webkit-user-select']: 'none',
      ['-moz-user-select']: 'none',
      ['-ms-user-select']: 'none',
      userSelect: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      width: rem(2),
      height: rem(2),
      margin: rem(0.6),
      borderRadius: '100%',
      border: `${rem(0.2)} solid`,
      borderColor: colors.rest.border,
      background: colors.rest.background,
    }, {
      $nest: {
        '&:hover': {
          background: colors.hover.background,
          borderColor: colors.hover.border,
        },
        '&:disabled': {
          background: colors.disabled.background,
          borderColor: colors.disabled.border,
        },
        '&:focus': {
          boxShadow: `0 0 0 ${rem(0.4)} ${colors.focus.outline}`,
          outline: 'none',
        },
        '&-selected': {
          borderColor: colors.selected.border,
          background: colors.selected.background,
          $nest: {
            '&:hover': {
              borderColor: colors.selected.border,
              background: colors.selected.background,
            },
          },
        },
      },
    }),
    label: style({}),
  };
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.light.gray03,
      background: colors.light.white,
    },
    hover: {
      background: colors.light.white,
      border: colors.light.gray03,
    },
    disabled: {
      background: colors.light.gray10,
      border: colors.light.gray12,
    },
    focus: {
      outline: colors.light.brand00Dark,
    },
    selected: {
      background: colors.light.brand00,
      border: colors.light.brand00,
    },
    container: colors.transparent,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.dark.gray03,
      background: colors.dark.black,
    },
    hover: {
      background: colors.dark.black,
      border: colors.dark.gray03,
    },
    disabled: {
      background: colors.dark.gray10,
      border: colors.dark.gray12,
    },
    focus: {
      outline: colors.dark.brand00Light,
    },
    selected: {
      background: colors.dark.brand00,
      border: colors.dark.brand00,
    },
    container: colors.transparent,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    rest: {
      border: colors.white,
      background: colors.black,
    },
    hover: {
      background: colors.black,
      border: colors.white,
    },
    disabled: {
      background: colors.highContrast.green,
      border: colors.white,
    },
    focus: {
      outline: colors.highContrast.yellow,
    },
    selected: {
      background: colors.highContrast.yellow,
      border: colors.highContrast.yellow,
    },
    container: colors.transparent,
  });
}

export function radioButton(context: Context) {
  return context.style({
    light: light(context),
    dark: dark(context),
    highContrast: highContrast(context),
  });
}