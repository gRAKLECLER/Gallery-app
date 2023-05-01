// eslint-disable-next-line no-restricted-imports
import emotionStyled, { StyledOptions } from '@emotion/styled';

const transientOptions = {
  shouldForwardProp: (propName: string) => !propName.startsWith('$'),
};

const styled = (component: never, options?: StyledOptions<unknown>) => {
  return emotionStyled(component, { ...transientOptions, ...options });
};

export default styled as typeof emotionStyled;
export { css } from '@emotion/react';