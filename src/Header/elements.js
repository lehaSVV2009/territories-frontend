import styled from "styled-components";
import Button from "../libs/territories-ui/Button";
import Select from "../libs/territories-ui/Select";

export const Logo = styled.span`
  flex-grow: 1;
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`;

export const WhiteSelect = styled(Select)`
  && {
    color: ${props => props.theme.colors.white};
  }
`;

export const DetachedButton = styled(Button)`
  && {
    margin-left: 4px;
    margin-right: 4px;
  }
`