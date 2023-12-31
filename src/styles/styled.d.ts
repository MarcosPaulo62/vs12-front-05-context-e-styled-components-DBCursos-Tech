import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
      color: {
        blue: string;
        white: string;
        mediumBlue: string;
        darkBlue: string;
        black: string;
        offWhite: string;
        error: string;
        success: string;
      };
    }
}
