import styled, { css } from "styled-components";
import BaseTitle from "../Components/typography/Typography";

export const StyledTitle = styled(BaseTitle)`
  font-family: "Inter", sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ theme }) => theme.color.black};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 2.8rem;
        `;
      case "md":
        return css`
          font-size: 1.25rem;
        `;
      case "sm":
        return css`
          font-size: 1rem;
        `;
    }
  }}
`;

interface iStyledSpan {
  opacity?: number;
  fontSize: "lg" | "md" | "sm";
}
export const StyledSpan = styled.span<iStyledSpan>`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  strong,
  b {
    font-weight: 700;
  }
  color: ${({ theme }) => theme.color.white};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 1.25rem;
        `;
      case "md":
        return css`
          font-size: 1rem;
        `;
      case "sm":
        return css`
          font-size: 0.9rem;
        `;
    }
  }}
`;

export const StyledTag = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  display: inline-flex;
  text-align: center;
  line-height: 1.25rem;
  width: 17.1875rem;
  height: 10.375rem;
  color: ${({ theme }) => theme.color.white};
`;
