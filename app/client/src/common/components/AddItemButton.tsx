import styled from 'styled-components'
import { lighten } from 'polished'
import { darkTheme } from 'common/theme'

export const AddItemButton = styled.button`
  background: ${darkTheme.gray};
  color: ${darkTheme.primary};
  font-size: 1.25em;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 0.35em;
  padding: 0;
  width: 2em;
  height: 2em;
  left: 355px;
  top: 674px;
  background: #2f3237;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${lighten(0.1, darkTheme.gray)};
    color: white;
  }
`
