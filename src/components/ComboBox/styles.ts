import styled from 'styled-components';

export const ComboBox = styled.section`
  .euiComboBox {
    width: 100%;

    margin: 0 auto;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (min-width: 1024px) {
      max-width: 58rem;
    }
  }

  .euiFormControlLayout {
    max-width: 40rem;

    @media (min-width: 1024px) {
      max-width: 58rem;
    }
  }

  .euiBadge {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    height: auto;
    background-color: #eef0fc;
    color: ${(props) => props.theme.colors.blue};
    border: none;
  }

  .euiFormControlLayoutIcons--right {
    right: 2rem;
  }

  .euiFormControlLayoutCustomIcon .euiFormControlLayoutCustomIcon--clickable {
    display: none;
  }

  .euiComboBox .euiComboBox__inputWrap {
    max-width: none;
    width: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    border-radius: 20px;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: ${(props) => props.theme.colors.white};
  }

  .euiComboBox .euiComboBox__input > input {
    font-size: 1.8rem;
  }

  .euiComboBox__input {
    height: 5.6rem;
    outline: 0;

    @media (min-width: 768px) {
      height: 6.6rem;
      max-width: 70rem;
    }
  }

  .euiComboBoxOptionsList__rowWrap {
    max-height: 30rem;
  }

  .euiPanel.euiComboBoxOptionsList.euiComboBoxOptionsList--bottom {
    width: 100%;
  }

  .euiFilterSelectItem {
    font-size: 1.6rem !important;
    padding: 0.5rem 1.5rem;
    height: auto;
  }
`;
