import { Theme } from './color-styles';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}