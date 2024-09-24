// @ts-nocheck
import * as Select from '@radix-ui/react-select';
import { memo } from 'react';
import styled from 'styled-components';

import AvatarGroup from './AvatarGroup';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px;
  /* gap: 0.45em;
  width: 100%; */
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 0.95em;
  line-height: 1.25em;
  color: #344054;
`;

const Error = styled.span`
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 1.25em;
  color: #ff4d4f;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  &.show {
    height: 1.25em;
  }
`;

const Input = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 138px;
  height: 34px;
  padding: 0 0.75em;
  background: #2e3142;
  border: ${(props) => props.border || '1px solid #d0d5dd'};
  box-shadow: ${(props) => props.border || '0px 1px 2px rgba(16, 24, 40, 0.05)'};
  border-radius: 10px;
  color: white;
  font-size: 14px;
`;

const Placeholder = styled.span`
  color: #979abe;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  gap: 0.5em;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #373a53;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  background: #262836;
  z-index: 3 !important;
  font-size: 14px;
`;

const Viewport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
`;
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Item = styled.button`
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.75em;
  /* gap: 0.5em; */
  width: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  color: white;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #373a53;
    border: none;
  }

  &:focus {
    outline: none;
  }
`;
export default memo(function CustomSelect(props) {
  const label = props.label ?? 'Label';
  const noLabel = props.noLabel ?? true;
  const placeholder = props.placeholder ?? 'Select';
  const value = props.value ?? '';
  const options = props.options ?? [];
  const onChange = props.onChange ?? (() => {});
  const validate = props.validate ?? (() => {});
  const error = props.error ?? '';
  return (
    <Container>
      {noLabel ? <></> : <Label>{label}</Label>}
      <Select.Root
        value={value?.value}
        onValueChange={(value) => onChange(options.find((option) => option.value === value))}
      >
        <Select.Trigger asChild={true}>
          <Input>
            <Select.Value aria-label={value.value} placeholder={<Placeholder>{placeholder}</Placeholder>} />

            <Select.Icon>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Select.Icon>
          </Input>
        </Select.Trigger>

        <Select.Content asChild={true}>
          <Content>
            <Select.Viewport asChild={true}>
              <Viewport>
                {options.map(({ text, value, icons }) => (
                  <Select.Item key={value} value={value} asChild={true}>
                    <Item>
                      <Select.ItemText>
                        <ItemWrap>
                          <AvatarGroup
                            {...{
                              icons,
                              size: 20
                            }}
                          />
                          {text}
                        </ItemWrap>
                      </Select.ItemText>
                      <Select.ItemIndicator>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Select.ItemIndicator>
                    </Item>
                  </Select.Item>
                ))}
              </Viewport>
            </Select.Viewport>
          </Content>
        </Select.Content>
      </Select.Root>
    </Container>
  );
});
