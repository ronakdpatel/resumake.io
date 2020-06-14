import styled from 'styled-components'
import { darken } from 'polished'
import { darkTheme } from 'common/theme'

export const RemoveItemButton = styled.button`
  margin: 0;
  margin-left: 1em;
  padding: 0 1em;
  background: ${darken(0.05, darkTheme.gray)};
  color: ${darkTheme.foreground};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: ${darkTheme.gray};
    background: ${darkTheme.primary};
  }
`
