import { chooseStyle, Context } from '../context';

interface LabelColors {
  text: string;
}

function base(context: Context, colors: LabelColors) {
  const name = 'label';
  const { css, font, rem } = context;
  const { sizes, weights } = font;

  return css(name,
    sizes.caption, weights.regular, {
    display: 'inline-block',
    padding: 0,
    border: 0,
    marginBottom: rem(0.8),
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    color: colors.text,
  });
}

function light(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.light.gray01,
  });
}

function dark(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.dark.white,
  });
}

function highContrast(context: Context) {
  const { colors } = context;
  return base(context, {
    text: colors.highContrast.white,
  });
}

export function label(context: Context) {
  return chooseStyle(context, light, dark, highContrast);
}