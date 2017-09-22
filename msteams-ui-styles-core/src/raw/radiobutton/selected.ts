import { Context } from '../context';

export function normal(c: Context): {} {
  if (!c.colors.radiobutton.selected) {
    return {};
  }

  return {
    borderColor: c.colors.radiobutton.selected.border,
    backgroundColor: c.colors.radiobutton.selected.background,
    boxShadow: `0 0 0 ${c.rem(0.4)} ${c.colors.radiobutton.selected.outline}`,
    outline: 'none',
  };
}

export function hover(c: Context): {} {
  if (!c.colors.radiobutton.selected) {
    return {};
  }

  return {
    borderColor: c.colors.radiobutton.selected.border,
    backgroundColor: c.colors.radiobutton.selected.background,
  };
}
